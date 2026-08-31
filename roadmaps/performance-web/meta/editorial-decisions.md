# Decisoes editoriais - Trilha Performance Web

Trilha proposta na issue #48 (sub-issue da meta #41 - Bootcamp Frontend 2026).

## 1. Escopo e posicionamento

**Titulo:** "Performance Web: Core Web Vitals, bundle, imagens, CDN e CI"

**Slug:** `performance-web` (mesmo nome da issue, identifica o dominio
claramente. Alternativas consideradas: `core-web-vitals` (foco demais
em uma das metricas), `web-performance` (sem hifen, ambiguo com
"performance web" em geral)).

**Foco:** A trilha cobre o ciclo completo de performance frontend - de
medir (Core Web Vitals) ate automatizar (CI). Nao cobre performance de
backend (queries, caching server-side, profiling de CPU) - isso fica
na trilha `backend`. Cobre o que o dev frontend controla: o que o
browser recebe, como renderiza, e como garantir que nao regrida.

**O que NAO entra (decisao explicita):**
- Performance de backend / database / servidor de aplicacao.
- Profiling de CPU / memory leak (N/A em JS frontend moderno).
- Web Workers / Offloading (cobre na trilha de `real-time` quando
  aplicavel).
- Otimizacao de algoritmo no client (raro, e' mais algoritmo do que
  performance web).
- React Server Components / streaming (cobre na trilha `nextjs`).

## 2. Pre-requisitos

Definidos na issue #48: `frontend`, `css-moderno`. Adiciono:

- `javascript-web` (pra entender `async`/`defer` no Critical
  Rendering Path).
- No minimo, familiaridade com `pnpm` e Vite (a trilha assume Vite
  como build tool de exemplo, mas os conceitos se aplicam a qualquer
  bundler moderno).

Nao exige `nextjs` (a trilha e' build-tool-agnostic). Exige ter
rodado `pnpm dev` em algum projeto.

## 3. Estrutura final (7 nos / 5 quizzes / 5 checkpoints / 2 mermaid)

A issue #48 propoe 7 nos. Mantenho os 7, na ordem sugerida:

| # | node                       | tipo      | quiz | checkpoint | mermaid |
| - | -------------------------- | --------- | ---- | ---------- | ------- |
| 1 | `core-web-vitals`          | topic     | sim  | sim        | sim     |
| 2 | `critical-rendering-path`  | subtopic  | sim  | sim        | sim     |
| 3 | `bundle-analysis`          | subtopic  | sim  | sim        | nao     |
| 4 | `imagens-e-fontes`         | subtopic  | sim  | sim        | nao     |
| 5 | `cdn-e-cache`              | subtopic  | sim  | nao        | nao     |
| 6 | `perf-em-ci`               | subtopic  | sim  | sim        | nao     |
| 7 | `projeto-final`            | milestone | nao  | sim        | nao     |

**5 checkpoints (mesma densidade da `motion`, `storybook-design-systems`,
`testing-frontend`):**

- `core-web-vitals` - dado o diagnostico de uma pagina (LCP/INP/CLS),
  classificar o tipo de problema e propor solucao.
- `critical-rendering-path` - dado um HTML com `<script>` e `<link>`,
  recalcular a ordem de execucao aplicando `defer`/`async`/`preload`.
- `bundle-analysis` - implementa `analisarChunks(chunks, orcamento)`
  que verifica se um conjunto de chunks respeita um orcamento de
  tamanho.
- `imagens-e-fontes` - gera HTML/CSS de `<picture>` com `srcset`/`sizes`
  pra diferentes viewports.
- `perf-em-ci` - implementa `verificarRegressao(medicoes, baseline,
  tolerancia)` que detecta regressao de performance.
- `projeto-final` - smoke test da auditoria de uma SPA.

**Pulei `cdn-e-cache` no checkpoint** porque o node e' mais conceitual
(Cache-Control headers, ETag, CDN behavior) - nao da pra testar de
forma significativa num worker isolado sem rede. E' o mesmo motivo
de pular `rive-e-lottie` na motion.

**2 diagramas Mermaid:**

- `core-web-vitals`: decision tree "minha pagina ta lenta, por onde
  comecar?" (LCP/INP/CLS → subdivisoes → ferramenta de diagnostico).
- `critical-rendering-path`: waterfall visual mostrando o ciclo
  HTML→DOM→CSSOM→Render Tree→Layout→Paint→Composite, com os 3 "C"
  classicos (Critical, Contentful, Cumulative).

Nao fiz 3+ porque os nos seguintes (bundle, imagens, cache) tem
tabelas e exemplos de codigo que sao mais uteis que diagramas
adicionais. O state machine de font loading (FOIT/FOUT) que considerei
fica em texto, com exemplo de CSS, no node `imagens-e-fontes`.

## 4. Conhecimento estabilizado vs volátil

**Estavel (a trilha ensina como "regra"):**
- Os 3 Core Web Vitals e seus thresholds (LCP < 2.5s, INP < 200ms,
  CLS < 0.1) - definido pelo Google desde 2020, estavel desde 2024.
- Padroes de carregamento de recursos (`defer`, `async`, `preload`,
  `prefetch`, `modulepreload`) - estavel ha 10+ anos.
- Formatos de imagem modernos (AVIF, WebP) e quando usar.
- `font-display: swap` como default seguro.

**Volatil (a trilha menciona como "estado em 2026"):**
- Suporte de browser (95%+ pra Core Web Vitals, AVIF etc., mas
  sempre vale checar caniuse).
- Numeros exatos de bundle size "tipico" (a Web e' variada, e'
  sempre contextual).
- Lighthouse v12+ (a API muda entre versoes, link sempre pra
  versao atual).

## 5. Stack e tools

- **Build:** Vite (assumido como default; bundle-analysis cobre
  Rollup output que e' o que Vite usa).
- **Medicao:** Lighthouse (CLI), Chrome DevTools, WebPageTest
  (online), `web-vitals` lib (coleta em producao).
- **CI:** Lighthouse CI (`@lhci/cli`), `size-limit` pra bundle
  budget.
- **CDN:** Cloudflare (default da web moderna; conceitos se aplicam
  a qualquer CDN).
- **Imagens:** `<picture>` + AVIF/WebP, com `srcset`/`sizes`.
- **Fonts:** Self-host com WOFF2 + `font-display: swap`.

Nao usa Next.js (a trilha e' build-tool-agnostic). Cita `<Image>` do
Next como exemplo de "libs que automatizam parte disso" mas o foco
e' entender o que essas libs fazem por baixo.

## 6. Decisoes de tom

- **PT-BR**, voz "voce", direto, sem em-dash, sem "permite"/"voce
  pode" passivo.
- **Tom pratico**, nao academico: "LCP mede quando o conteudo
  principal aparece", nao "LCP e' a metrica de Largest Contentful
  Paint definida pelo W3C".
- **Tabelas em vez de paragrafos** pra comparacoes (Cache-Control
  directives, image formats, font formats).
- **Codigo real**, nao pseudo-codigo. Cada exemplo vem de um
  cenario concreto (uma landing page, um dashboard, um e-commerce).

## 7. Lacunas conhecidas (nao cobertas nesta trilha)

- **Performance de backend** (queries, cache server, CDN de API).
  Fica em `backend` ou em trilha dedicada.
- **SSR / streaming** (Next.js, RSC). Fica em `nextjs`.
- **PWA / offline-first** (Service Worker, IndexedDB). Fica em
  trilha dedicada (#51).
- **Web Workers / Offloading**. Coberto brevemente em `real-time`
  (#52) quando faz sentido.
- **Service Worker caching strategies**. Coberto em PWA (#51).

## 8. Referencia cruzada

- Trilha `frontend` cobre `ferramentas` (pnpm, Vite setup) e
  `estilizacao` (CSS performance basica). Esta trilha aprofunda
  performance.
- Trilha `css-animacoes` cobre `will-change` e `transform` (menciona
  GPU acceleration). Esta trilha conecta com `composite` no
  Critical Rendering Path.
- Trilha `nextjs` cobre SSR/streaming/RSC. Esta trilha foca em
  client-side performance e assume o pior cenario (SPA sem SSR).
- Trilha `motion` cobre animacoes declarativas. Esta trilha aborda
  performance de animacoes (composite-only, evitar layout thrash).
