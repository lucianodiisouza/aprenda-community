# Decisoes editoriais - Trilha i18n / l10n

Trilha proposta na issue #53 (sub-issue da meta #41 - Bootcamp Frontend 2026).

## 1. Escopo e posicionamento

**Titulo:** "i18n / l10n: Intl APIs, ICU MessageFormat, RTL, translation workflow e pseudo-localization"

**Slug:** `i18n` (mesmo slug da issue. Curto, identifica o dominio - internacionalizacao + localizacao).

**Foco:** Construir apps que **servem multiplos idiomas e regioes corretamente** - nao so' "traduzir texto" mas tratar **formatacao de numeros/datas** (10.5 vs 10,5), **pluralizacao** (1 item vs 2 itens vs 0 itens), **direcao de layout** (LTR vs RTL), **workflow de traducao**, e **pseudo-localization em CI**. Cobre o **lado frontend** da i18n - o back-end de CMS/traducao e' mencionado mas nao detalhado.

**O que NAO entra (decisao explicita):**
- i18n no back-end (Python `gettext`, Java `ResourceBundle`, etc). Cobre em `backend`.
- Server-side rendering com i18n (Next.js i18n routing). Cobre em `nextjs`.
- Acessibilidade de RTL (Cobre em `acessibilidade-web`).
- Traducao automatica (Google Translate API, DeepL). Mencionado como alternativo.

## 2. Pre-requisitos

Definidos na issue #53: `frontend`. Adiciono:

- `frontend` (DOM, fetch, basics de CSS).
- `javascript-web` (Intl e' nativo do JS, mas precisa entender locale, timezones, etc).
- `git` basico (translation workflow usa branches).

## 3. Estrutura final (7 nos / 6 quizzes / 5 checkpoints / 2 mermaid)

A issue #53 propoe 7 nos. Mantenho os 7, na ordem sugerida:

| # | node                       | tipo      | quiz | checkpoint | mermaid |
| - | -------------------------- | --------- | ---- | ---------- | ------- |
| 1 | `i18n-vs-l10n`             | topic     | sim  | nao        | nao     |
| 2 | `intl-apis`                | subtopic  | sim  | sim        | sim     |
| 3 | `icu-messageformat`        | subtopic  | sim  | sim        | nao     |
| 4 | `rtl-e-bidirecionalidade`  | subtopic  | sim  | nao        | nao     |
| 5 | `translation-workflow`     | subtopic  | sim  | sim        | nao     |
| 6 | `pseudo-localization`      | subtopic  | sim  | sim        | sim     |
| 7 | `projeto-final`            | milestone | nao  | sim        | nao     |

**5 checkpoints (mesma densidade):**

- `intl-apis` - implementar formatacao locale-aware de numeros, datas, e listas.
- `icu-messageformat` - escrever mensagens com pluralizacao e selecao.
- `translation-workflow` - configurar i18next/FormatJS com detection de locale.
- `pseudo-localization` - implementar transformacao pseudo-locale em codigo.
- `projeto-final` - smoke test de app multi-idioma.

**Pulei `i18n-vs-l10n` e `rtl-e-bidirecionalidade` no checkpoint:**
- `i18n-vs-l10n` e' conceitual (definicoes, separacao de concerns).
- `rtl-e-bidirecionalidade` e' CSS-heavy (logical properties, dir attribute) - melhor validado em UI real, nao em codigo.

**2 diagramas Mermaid** (decidido por necessidade):

- `intl-apis`: decision tree "qual Intl formatter usar pra cada caso" (NumberFormat vs DateTimeFormat vs ListFormat vs Collator). Cobre 90% das duvidas.
- `pseudo-localization`: flow do pipeline CI - source strings → pseudo-locale transformation → visual diff → bug detection. Cobre o "como" do pseudo.

Nao fiz 3+ porque i18n-vs-l10n e' texto, ICU e' texto com exemplos, translation workflow e' tabela, e rtl e' CSS antes/depois.

## 4. Conhecimento estabilizado vs volatil

**Estavel (a trilha ensina como "regra"):**
- `Intl` APIs do JS - estavel desde ES2018, todos browsers modernos suportam.
- ICU MessageFormat (sintaxe 1.x) - estavel, base do i18next, FormatJS.
- `dir` attribute - estavel, HTML padrao.
- CSS logical properties - estavel, supported em todos browsers modernos.

**Volatil (a trilha menciona como "estado em 2026"):**
- MessageFormat 2 (MF2) - nova sintaxe, ainda em rollout (2024+).
- FormatJS arquitetura nova (macros vs messages) - mudou em 2023.
- i18next v23+ - mudou API de deteccao de locale.
- Locale data (CLDR) - atualiza anualmente, alguma coisa muda entre versoes.

## 5. Stack e tools

- **Intl APIs:** nativas do browser/Node (ES2018+).
- **i18n framework:** i18next + react-i18next (mais usado), ou FormatJS (react-intl). Menciona ambos, foco em i18next.
- **ICU MessageFormat:** intl-messageformat (parser) ou via i18next-icu plugin.
- **Translation management:** Locize (SaaS, plano free), Crowdin (SaaS), Phrase (SaaS), ou self-hosted (Weblate, Tolgee). Menciona 2-3 como opcoes.
- **Pseudo-localization:** pseudo-localization (npm), ou implementacao custom (10 linhas de codigo).
- **CI:** GitHub Actions exemplo.

## 6. Decisoes de tom

- **PT-BR**, voz "voce", direto, sem em-dash, sem "permite"/"voce pode" passivo.
- **Tom pratico**, com exemplos de codigo real (Intl em acao, ICU messages, i18next config).
- **Comparacoes de frameworks** (i18next vs FormatJS) com tabela.
- **Foco no client** - back-end de traducao mencionado brevemente.

## 7. Lacunas conhecidas (nao cobertas nesta trilha)

- **i18n no back-end** (Python gettext, Java ResourceBundle). Cobre em `backend`.
- **SSR com i18n** (Next.js i18n routing, locale negotiation server-side). Cobre em `nextjs`.
- **Traducao automatica** (Google Translate, DeepL). Mencionado como alternativo no `translation-workflow`.
- **Voice/Video localization** (legendas, dublagem). Fora do escopo de frontend.
- **Cultural adaptation** (cores, simbolos, gestos). Cobre brevemente em `rtl-e-bidirecionalidade`.

## 8. Referencia cruzada

- Trilha `frontend` cobre DOM e CSS (pre-requisito).
- Trilha `acessibilidade-web` cobre aria-label, screen readers, e RTL.
- Trilha `nextjs` cobre i18n routing server-side.
- Trilha `pwa` cobre estrategias de cache por locale.
