#!/usr/bin/env node
// scripts/build-contributors.mjs
//
// Agrega os `creators` espalhados pelo conteúdo (trilhas, projetos e
// bootcamps) num único índice `contributors.json`, chaveado pelo handle do
// GitHub - a chave natural que também liga o criador ao perfil público.
//
// Esse JSON é o contrato estável que a app (`academy`) consome pra:
//   - a fileira de avatares na home (section "Contribuir")
//   - a section de contribuições no perfil público (/u/<github>)
//   - a badge de "Contribuidor" (github do perfil ∈ índice)
//
// De onde vêm os créditos:
//   - trilha    → roadmaps/<slug>/roadmap.json  (campo `creators`)
//   - projeto   → projects/<slug>.mdx           (frontmatter `creators`)
//   - bootcamp  → bootcamps/<slug>/bootcamp.json (campo `creators`)   [via "creator"]
//   - bootcamp  → uma trilha da pessoa aparece em `modules[].trilha`  [via "trilha:<slug>"]
//
// Uso:
//   node scripts/build-contributors.mjs           # gera/atualiza contributors.json
//   node scripts/build-contributors.mjs --check    # falha se o commitado estiver velho (CI)
//
// Sem dependências externas. Roda com `node >= 20`.

import { readFile, writeFile, readdir } from "node:fs/promises";
import { join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { parseFrontmatter } from "./_frontmatter.mjs";

const ROOT = resolve(fileURLToPath(import.meta.url), "..", "..");
const ROADMAPS_DIR = join(ROOT, "roadmaps");
const PROJECTS_DIR = join(ROOT, "projects");
const BOOTCAMPS_DIR = join(ROOT, "bootcamps");
const OUT_FILE = join(ROOT, "contributors.json");

const CHECK = process.argv.includes("--check");

let errors = 0;
const err = (msg) => {
  errors++;
  console.error(`❌ ${msg}`);
};

// github usernames são únicos case-insensitive; normalizamos a chave em
// minúsculas pra deduplicar, e github.com/<user> resolve em qualquer caixa.
function normHandle(github) {
  return String(github || "").trim().replace(/^@/, "").toLowerCase();
}

async function listDirs(dir) {
  try {
    const entries = await readdir(dir, { withFileTypes: true });
    return entries.filter((e) => e.isDirectory()).map((e) => e.name);
  } catch (e) {
    if (e.code === "ENOENT") return [];
    throw e;
  }
}

async function readJson(path) {
  const raw = await readFile(path, "utf8");
  return JSON.parse(raw);
}

// index: handle -> { github, name, trilhas:Map, projetos:Map, bootcamps:Map }
const index = new Map();

function ensure(github, name) {
  const key = normHandle(github);
  if (!key) return null;
  let entry = index.get(key);
  if (!entry) {
    entry = { github: key, name: "", trilhas: new Map(), projetos: new Map(), bootcamps: new Map() };
    index.set(key, entry);
  }
  // Mantém o nome mais recente não-vazio (o último "vence").
  const clean = (name || "").trim();
  if (clean) entry.name = clean;
  return entry;
}

function creditTrilha(github, name, slug, title) {
  const e = ensure(github, name);
  if (e) e.trilhas.set(slug, title || slug);
}
function creditProjeto(github, name, slug, title) {
  const e = ensure(github, name);
  if (e) e.projetos.set(slug, title || slug);
}
function creditBootcamp(github, name, slug, title, via) {
  const e = ensure(github, name);
  if (!e) return;
  // Se já creditado direto ("creator"), não rebaixa pra "trilha:<slug>".
  const existing = e.bootcamps.get(slug);
  if (existing && existing.via === "creator") return;
  e.bootcamps.set(slug, { slug, title: title || slug, via });
}

async function main() {
  // ── Trilhas ───────────────────────────────────────────────────────────
  // Guardamos o mapa slug->{title, creators} pra expandir os módulos de
  // bootcamp depois (creditar quem fez a trilha que entra no bootcamp).
  const trilhas = new Map();
  for (const slug of await listDirs(ROADMAPS_DIR)) {
    const path = join(ROADMAPS_DIR, slug, "roadmap.json");
    let rm;
    try {
      rm = await readJson(path);
    } catch (e) {
      err(`roadmap.json inválido em ${relative(ROOT, path)}: ${e.message}`);
      continue;
    }
    const creators = Array.isArray(rm.creators) ? rm.creators : [];
    trilhas.set(slug, { title: rm.title || slug, creators });
    for (const c of creators) creditTrilha(c.github, c.name, slug, rm.title);
  }

  // ── Projetos ──────────────────────────────────────────────────────────
  let projFiles = [];
  try {
    projFiles = (await readdir(PROJECTS_DIR)).filter((f) => f.endsWith(".mdx"));
  } catch (e) {
    if (e.code !== "ENOENT") throw e;
  }
  for (const file of projFiles) {
    const path = join(PROJECTS_DIR, file);
    const fm = parseFrontmatter(await readFile(path, "utf8"));
    if (!fm) continue;
    const slug = fm.slug || file.replace(/\.mdx$/, "");
    const creators = Array.isArray(fm.creators) ? fm.creators : [];
    for (const c of creators) creditProjeto(c.github, c.name, slug, fm.title);
  }

  // ── Bootcamps ─────────────────────────────────────────────────────────
  for (const slug of await listDirs(BOOTCAMPS_DIR)) {
    const path = join(BOOTCAMPS_DIR, slug, "bootcamp.json");
    let bc;
    try {
      bc = await readJson(path);
    } catch (e) {
      err(`bootcamp.json inválido em ${relative(ROOT, path)}: ${e.message}`);
      continue;
    }
    // Créditos diretos: quem curou o bootcamp.
    for (const c of Array.isArray(bc.creators) ? bc.creators : []) {
      creditBootcamp(c.github, c.name, slug, bc.title, "creator");
    }
    // Créditos indiretos: donos das trilhas que compõem o currículo.
    for (const mod of Array.isArray(bc.modules) ? bc.modules : []) {
      if (!mod || !mod.trilha) continue;
      const t = trilhas.get(mod.trilha);
      if (!t) continue;
      for (const c of t.creators) {
        creditBootcamp(c.github, c.name, slug, bc.title, `trilha:${mod.trilha}`);
      }
    }
  }

  // ── Serializa (ordenado pra diffs estáveis) ───────────────────────────
  const byName = (a, b) => a.title.localeCompare(b.title, "pt-BR");
  const contributors = [...index.values()]
    .map((e) => {
      const trilhas = [...e.trilhas].map(([slug, title]) => ({ slug, title })).sort(byName);
      const projetos = [...e.projetos].map(([slug, title]) => ({ slug, title })).sort(byName);
      const bootcamps = [...e.bootcamps.values()].sort(byName);
      const total = trilhas.length + projetos.length + bootcamps.length;
      return {
        github: e.github,
        name: e.name || e.github,
        avatar: `https://github.com/${e.github}.png`,
        profile: `https://github.com/${e.github}`,
        counts: { trilhas: trilhas.length, projetos: projetos.length, bootcamps: bootcamps.length, total },
        trilhas,
        projetos,
        bootcamps,
      };
    })
    // Mais contribuições primeiro; empate resolve por handle (determinístico).
    .sort((a, b) => b.counts.total - a.counts.total || a.github.localeCompare(b.github));

  const doc = {
    generated_by: "scripts/build-contributors.mjs",
    count: contributors.length,
    contributors,
  };
  const json = JSON.stringify(doc, null, 2) + "\n";

  if (errors > 0) {
    console.error(`\n❌ ${errors} erro(s) ao ler o conteúdo - contributors.json NÃO foi gerado.`);
    process.exit(1);
  }

  if (CHECK) {
    let current = "";
    try {
      current = await readFile(OUT_FILE, "utf8");
    } catch {
      /* arquivo ainda não existe */
    }
    if (current !== json) {
      console.error(
        "❌ contributors.json está desatualizado.\n" +
          "   Rode `node scripts/build-contributors.mjs` e commite o resultado."
      );
      process.exit(1);
    }
    console.log(`✅ contributors.json em dia (${contributors.length} contribuidores).`);
    return;
  }

  await writeFile(OUT_FILE, json, "utf8");
  console.log(`✅ contributors.json gerado: ${contributors.length} contribuidores.`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
