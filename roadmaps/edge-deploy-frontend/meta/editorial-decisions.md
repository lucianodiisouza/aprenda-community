# Decisoes editoriais - Trilha Edge Deploy Frontend

Trilha proposta na issue #56 (sub-issue da meta #41 - Bootcamp Frontend 2026).

## 1. Escopo e posicionamento

**Titulo:** "Edge Deploy Frontend: build, runtime, Cloudflare Workers, Vercel Edge, image opt, preview envs, atomic deploys"

**Slug:** `edge-deploy-frontend` (mesmo slug da issue. Descritivo, identifica o dominio).

**Foco:** Como **buildar e deployar** apps frontend modernos: do **build output** (static vs SSR vs edge) ate **runtime** (Node, serverless, edge), passando por **Cloudflare Workers**, **Vercel Edge**, **otimizacao de imagem**, **preview environments por PR**, e **atomic deploys** com cache. Cobre o **workflow completo** de "codigo em prod".

**O que NAO entra (decisao explicita):**
- Containerizacao (Docker, Kubernetes). Cobre em `docker-*` ou `kubernetes`.
- CI/CD puro (GitHub Actions, GitLab CI). Cobre brevemente em `preview-environments` (so o pattern).
- Backend deploy (Node, Python). Cobre em `backend`.
- SSR Next.js com streaming/Suspense. Cobre em `nextjs` se aplicavel.

## 2. Pre-requisitos

Definidos na issue #56: `frontend`, nocoes de HTTP. Adiciono:

- `frontend` (HTML, CSS, JS, build tools como Vite/Webpack).
- `javascript-web` (fetch, async/await, basics de HTTP).
- `git` (branch, PR).
- Noções de **Cloudflare** ou **Vercel** (plataforma de deploy).

## 3. Estrutura final (7 nos / 6 quizzes / 5 checkpoints / 2 mermaid)

A issue #56 propoe 7 nos. Mantenho os 7, na ordem sugerida:

| # | node                          | tipo      | quiz | checkpoint | mermaid |
| - | ----------------------------- | --------- | ---- | ---------- | ------- |
| 1 | `de-onde-vem-onde-vai`        | topic     | sim  | nao        | sim     |
| 2 | `cloudflare-workers`          | subtopic  | sim  | sim        | nao     |
| 3 | `vercel-edge`                 | subtopic  | sim  | sim        | nao     |
| 4 | `image-optimization`          | subtopic  | sim  | sim        | nao     |
| 5 | `preview-environments`        | subtopic  | sim  | nao        | nao     |
| 6 | `atomic-deploys-e-cache`      | subtopic  | sim  | sim        | sim     |
| 7 | `projeto-final`               | milestone | nao  | sim        | nao     |

**5 checkpoints (mesma densidade):**

- `cloudflare-workers` - deploy de uma edge function com KV binding.
- `vercel-edge` - deploy de uma SPA + edge function com ISR.
- `image-optimization` - configurar Next/Image ou Cloudflare Images.
- `atomic-deploys-e-cache` - configurar cache headers + invalidação.
- `projeto-final` - smoke test de deploy completo com preview.

**Pulei `de-onde-vem-onde-vai` e `preview-environments` no checkpoint:**
- `de-onde-vem-onde-vai` e' conceitual (build output, runtime).
- `preview-environments` e' CI/infra (mais sobre pipeline que codigo).

**2 diagramas Mermaid** (decidido por necessidade):

- `de-onde-vem-onde-vai`: flow do codigo ate prod (build → bundle → deploy → runtime). Cobre o pipeline geral.
- `atomic-deploys-e-cache`: decision tree de cache strategy (Cache-Control headers, stale-while-revalidate, invalidation). Cobre 90% dos casos.

Nao fiz 3+ porque os outros nos sao praticos (codigo, config) - o ganho de mais diagramas e' marginal.

## 4. Conhecimento estabilizado vs volatil

**Estavel (a trilha ensina como "regra"):**
- Build output types (static, SSR, SSG, ISR, edge) - estavel.
- Cache-Control header semantics - HTTP padrao, estavel desde 1999.
- Atomic deploys (blue/green) - pattern classico, estavel.
- Cloudflare Workers runtime (V8 isolate) - estavel.

**Volatil (a trilha menciona como "estado em 2026"):**
- Plataforma features (Cloudflare/Vercel) - evoluindo rapido, novos produtos mensais.
- AI integration em edge (Cloudflare AI, Vercel AI SDK).
- Pricing tiers, limites, free tier.
- Specific products (Pages, Functions, Workers, D1, R2) - nomes mudam.

**A trilha foca em PATTERNS** (atomic
deploy, cache strategy, image opt)
que **permanecem** mesmo quando
plataformas mudam.

## 5. Stack e tools

- **Build:** Vite (SPA/SSR), Webpack, esbuild, Rollup.
- **Edge runtime:** Cloudflare Workers, Vercel Edge Functions, Deno Deploy.
- **CDN/Image opt:** Cloudflare Images, Vercel Image Optimization, Next/Image.
- **CI/CD:** GitHub Actions (mais usado), GitLab CI, CircleCI.
- **Atomic deploys:** Vercel (built-in), Cloudflare Pages, Netlify, Render.

**Foco em Cloudflare + Vercel** (mais
usados em 2026 para frontend), com
**principios gerais** que aplicam a
qualquer plataforma.

## 6. Decisoes de tom

- **PT-BR**, voz "voce", direto, sem em-dash, sem "permite"/"voce pode" passivo.
- **Tom pratico**, com exemplos de **config** (wrangler.toml, vercel.json) e **codigo** (Worker, edge function).
- **Comparacoes** (Cloudflare vs Vercel, edge vs serverless) com tabela.
- **Ceticismo saudavel**: edge nao e' **sempre** melhor - **tradeoffs** claros.

## 7. Lacunas conhecidas (nao cobertas nesta trilha)

- **Containerizacao** (Docker, Kubernetes). Cobre em trilhas proprias.
- **SSR frameworks** (Next.js, Remix, SvelteKit). Cobre em `nextjs` ou similar.
- **Backend deploy** (Node, Python, Go). Cobre em `backend`.
- **CI/CD patterns** avancados (canary, blue/green em K8s). Cobre em `engenharia-sre`.
- **Edge databases** (Cloudflare D1, Turso, Neon). Cobre em `backend`.

## 8. Referencia cruzada

- Trilha `frontend` cobre build tools (Vite, Webpack).
- Trilha `performance-web` cobre Core Web Vitals (LCP/CLS - impactados por image opt).
- Trilha `engenharia-sre` cobre SLO/SLI e canary deploy.
- Trilha `pwa` cobre Service Worker + cache (complementar a atomic deploys).
