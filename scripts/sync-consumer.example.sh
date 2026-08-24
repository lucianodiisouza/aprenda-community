#!/usr/bin/env bash
# scripts/sync-content.sh
#
# Sync **smart e incremental** do conteúdo de trilhas (roadmaps/) do
# repositório público `aprenda-community` para dentro do monorepo
# `academy`, onde o app Next.js consome.
#
# ─── Estratégia ────────────────────────────────────────────────────────────
#
# 1. Shallow clone (--depth 1) + sparse-checkout → só baixa a pasta
#    `roadmaps/`, não o repo inteiro.
# 2. Resolve o commit SHA da tag pinada (não a branch — reprodutibilidade).
# 3. Lê o SHA do último sync de `.content-version` (criado na primeira run).
# 4. Compara com `git diff --name-only <last>..HEAD -- roadmaps/`.
# 5. Copia **só** os arquivos listados no diff. Arquivos deletados no
#    remote também são deletados localmente (simetria).
# 6. Atualiza `.content-version` e roda validação (opcional).
#
# ─── Por que é smart ──────────────────────────────────────────────────────
#
# - **Nada mudou** → exit 0 em ~1s, sem download de blobs, sem
#   sobrescrever arquivos. CI builda mais rápido.
# - **Poucos arquivos mudaram** → baixa só esses, valida só esses.
# - **Tag diferente** (bump v1.1.0 → v1.2.0) → diff entre as tags
#   mostra só o delta real. Sem "trazer tudo de novo".
#
# ─── Pinning ──────────────────────────────────────────────────────────────
#
# Por **tag semântica** (vX.Y.Z), não por branch. Garantia: o mesmo
# commit entra no build toda vez até alguém bumpar a tag de propósito.
#
# ─── Variáveis de ambiente ────────────────────────────────────────────────
#
#   APRENDA_COMMUNITY_TAG    Tag a sincronizar (default: v1.1.0)
#   APRENDA_COMMUNITY_REPO  URL do repo (default: o público)
#   DRY_RUN                  Se "1", não copia — só mostra o diff
#   SKIP_VALIDATE            Se "1", pula a validação após sync
#   VERBOSE                  Se "1", log detalhado
#
# ─── Uso ──────────────────────────────────────────────────────────────────
#
#   ./scripts/sync-content.sh              # sync default tag (v1.1.0)
#   APRENDA_COMMUNITY_TAG=v1.2.0 ./scripts/sync-content.sh
#   DRY_RUN=1 ./scripts/sync-content.sh    # preview
#   VERBOSE=1 ./scripts/sync-content.sh    # debug

set -euo pipefail

# ─── Config ────────────────────────────────────────────────────────────────
PINNED_TAG="${APRENDA_COMMUNITY_TAG:-v1.1.0}"
SOURCE_REPO="${APRENDA_COMMUNITY_REPO:-https://github.com/lucianodiisouza/aprenda-community.git}"
TARGET_DIR="packages/content/roadmaps"
VERSION_FILE=".content-version"
TMP_DIR="$(mktemp -d)"
DRY_RUN="${DRY_RUN:-0}"
SKIP_VALIDATE="${SKIP_VALIDATE:-0}"
VERBOSE="${VERBOSE:-0}"

log()  { echo "$@"; }
dbg()  { [[ "$VERBOSE" == "1" ]] && echo "  · $@" || true; }

trap 'rm -rf "$TMP_DIR"' EXIT
cd "$(dirname "$0")/.."

# ─── Estado local ─────────────────────────────────────────────────────────
last_commit=""
if [[ -f "$VERSION_FILE" ]]; then
  last_commit=$(awk 'NR==1{print $1; exit}' "$VERSION_FILE" || true)
fi

# ─── Resolve o SHA da tag pinada ──────────────────────────────────────────
log "🔍 Resolving $PINNED_TAG..."
target_commit=$(git ls-remote "$SOURCE_REPO" "refs/tags/$PINNED_TAG^{}" 2>/dev/null | awk '{print $1}')

if [[ -z "$target_commit" ]]; then
  log "❌ Tag $PINNED_TAG not found in $SOURCE_REPO" >&2
  exit 1
fi
dbg "target_commit=$target_commit  last_commit=$last_commit"

# ─── Early exit se nada mudou ─────────────────────────────────────────────
if [[ "$last_commit" == "$target_commit" && -d "$TARGET_DIR" ]]; then
  log "✅ Up to date at $PINNED_TAG ($target_commit) — nothing to do"
  exit 0
fi

# ─── Shallow + sparse clone ───────────────────────────────────────────────
log "⏬ Cloning $SOURCE_REPO @ $PINNED_TAG (shallow + sparse)..."
git clone --depth 1 --filter=blob:none --sparse --branch "$PINNED_TAG" --quiet \
  "$SOURCE_REPO" "$TMP_DIR/repo"
git -C "$TMP_DIR/repo" sparse-checkout set roadmaps --quiet

# ─── Diff vs último sync ──────────────────────────────────────────────────
if [[ -n "$last_commit" && -d "$TARGET_DIR" ]]; then
  log "🔎 Computing delta since $last_commit..."
  changed=$(git -C "$TMP_DIR/repo" diff --name-only "$last_commit..HEAD" -- 'roadmaps/*' 2>/dev/null || true)
  # `git diff` no sparse-checkout só vê os arquivos sparse-checkouted.
  # Para pegar arquivos **deletados** desde last_commit, precisamos
  # buscar esse commit também — mas como é shallow, git log/diff só vê
  # HEAD. Solução: usar `git log --diff-filter=D`:
  deleted=$(git -C "$TMP_DIR/repo" log --diff-filter=D --name-only --pretty=format: \
    "$last_commit..HEAD" -- 'roadmaps/*' 2>/dev/null | grep -v '^$' || true)
  all_changes=$(printf "%s\n%s\n" "$changed" "$deleted" | grep -v '^$' | sort -u)
else
  log "🆕 First sync (or no version file) — taking everything..."
  all_changes=$(cd "$TMP_DIR/repo" && find roadmaps -type f | sed 's|^roadmaps/||')
fi

# ─── Aplica o diff ────────────────────────────────────────────────────────
count=0
removed=0
if [[ -z "$all_changes" ]]; then
  log "✅ No roadmap files changed since last sync"
else
  log "🔄 Applying changes:"
  mkdir -p "$TARGET_DIR"
  while IFS= read -r rel; do
    [[ -z "$rel" ]] && continue
    src="$TMP_DIR/repo/roadmaps/$rel"
    dst="$TARGET_DIR/$rel"
    if [[ -e "$src" ]]; then
      if [[ "$DRY_RUN" == "1" ]]; then
        log "  [dry-run] would copy: $rel"
      else
        mkdir -p "$(dirname "$dst")"
        cp "$src" "$dst"
        log "  ✓ $rel"
      fi
      count=$((count + 1))
    else
      # Deletado no remote → remove local
      if [[ "$DRY_RUN" == "1" ]]; then
        log "  [dry-run] would remove: $rel"
      else
        if [[ -e "$dst" ]]; then
          rm -f "$dst"
          log "  ✗ $rel (removed)"
          removed=$((removed + 1))
        fi
      fi
    fi
  done <<< "$all_changes"
fi

# ─── Limpa diretórios vazios (caso uma trilha inteira tenha sido removida) ─
if [[ "$DRY_RUN" != "1" ]]; then
  find "$TARGET_DIR" -mindepth 1 -type d -empty -delete 2>/dev/null || true
fi

# ─── Persiste a versão ────────────────────────────────────────────────────
if [[ "$DRY_RUN" != "1" ]]; then
  echo "$target_commit $PINNED_TAG $(date -u +%Y-%m-%dT%H:%M:%SZ)" > "$VERSION_FILE"
fi

# ─── Validação opcional ───────────────────────────────────────────────────
if [[ "$DRY_RUN" != "1" && "$SKIP_VALIDATE" != "1" && -f "packages/content/scripts/validate.ts" ]]; then
  log "🔍 Validating..."
  if pnpm content:validate 2>&1 | tail -3; then
    log "✅ Validation passed"
  else
    log "⚠️  Validation reported issues — check output above"
  fi
fi

# ─── Resumo ───────────────────────────────────────────────────────────────
log ""
log "📊 Summary:"
log "   tag:        $PINNED_TAG ($target_commit)"
log "   previous:   ${last_commit:-<none>}"
log "   added/updated: $count"
log "   removed:    $removed"
log "✅ Done."
