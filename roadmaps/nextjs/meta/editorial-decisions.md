# Decisões editoriais - Trilha de Next.js e Meta-frameworks

> Histórico de decisões de escopo, organização e curadoria da trilha
> de Next.js. Quando a trilha ganha ou perde um nó, isso fica registrado
> aqui.

## v1.0.0 - Criação inicial (2026-08-27)

### Origem e motivação

A trilha nasce de um buraco real: hoje a `frontend` cobre React, rotas
SPA, formulários e estilização - mas **para no momento em que o dev
precisa ir pra produção**. O `node rotas` ensina `<Router>` e
`<Routes>`, não ensina o que muda quando você coloca um servidor no
meio (SSR, RSC, streaming, deploy em edge). É o salto que separa
"dev júnior que monta telas" de "dev que entrega app production-grade
com SEO, data layer moderna e observabilidade".

A trilha é o **próximo passo natural depois de `frontend`**: pega
quem terminou React e quer construir uma SPA com SSR, RSC, mutations
server-side, e deploy em ambiente edge. Usa Next.js como referência
canônica (maior ecossistema, melhor documentação, e a implementação
mais completa de RSC), mas os conceitos se aplicam a outros
meta-frameworks React (Remix, React Router v7, TanStack Start).

### Decisão de público: intermediário, com piso em React + TS básicos

Público-alvo declarado:

- **Dev júnior/pleno front** que terminou `frontend` e quer dar o salto
  pra full-stack React com SSR.
- **Dev backend** vindo de outro framework (Rails, Django, Express)
  que quer entender como o Next pensa request/response.
- **Dev full-stack experiente** revisitando RSC depois de conhecer
  os patterns de SPA e SSR dos últimos anos, querendo atualizar
  o modelo mental.
- **Tech lead** decidindo se vale adotar Next (ou Remix/RR7/TanStack
  Start) num projeto novo.

A trilha assume que a pessoa já:

- Confortável com React (componentes, hooks, props, state, context).
- Confortável com TypeScript no front (types de props, generics, utility
  types). Reforço rápido no nó 1 (`ts-no-react`).
- Sabe o que é HTTP (`GET`, `POST`, status code, headers).
- Já mexeu com fetch ou axios pelo menos uma vez.
- Terminou (ou equivalente) a trilha `frontend` do aprenda-community.

A trilha **não assume** conhecimento prévio de:

- SSR ou RSC (é o que se ensina aqui).
- Next.js (versão, routing, conventions).
- Deploy em cloud (a trilha cobre o básico no projeto final).
- Banco de dados (o projeto final usa Postgres, mas o SQL não é
  aprofundado - ver `sql-banco-de-dados` pra isso).

### Escopo: o que entra e o que fica de fora

**Dentro do núcleo (9 nós + 1 projeto final = 10 entradas):**

1. `ts-no-react` - Reforço de TS focado em React (tipos que destravam
   o resto da trilha: generics de componente, `ComponentProps`,
   `ReactNode`, `as` vs `satisfies`, discriminated unions pra variants,
   branded types pra tokens).
2. `meta-frameworks-por-que` - Por que um meta-framework: SPA vs SSR
   vs RSC, onde cada um vence e perde, custo de servidor vs estático.
3. `app-router-mental-model` - App Router: estrutura de pastas, layouts
   aninhados, route groups (`(nome)`), loading.tsx, error.tsx,
   not-found.tsx, parallel routes, intercepting routes (menção).
4. `rsc-fundamentos` - Server Components vs Client Components, a
   fronteira `'use client'`, o que cada um pode e não pode fazer.
5. `composicao-rsc` - Padrões de composição: server-only modules,
   client islands, passar Server Components como `children`/`props`
   pra Client Components, evitar prop drilling de serialização.
6. `data-fetching-server` - Fetch server-side, cache do Next
   (Request Memoization, Data Cache, Full Route Cache, Router Cache),
   `revalidatePath`, `revalidateTag`, `noStore()`, Suspense.
7. `server-actions` - Server Actions, validação server-side,
   `revalidatePath`/`revalidateTag` pós-mutation, optimistic updates
   com `useOptimistic`, progressive enhancement.
8. `streaming-ssr` - Streaming SSR, Suspense boundaries,
   `<Suspense fallback={...}>`, `loading.tsx` vs `<Suspense>`,
   error boundaries, `error.tsx`.
9. `middleware-e-auth` - Middleware (`middleware.ts`), matcher,
   redirects, headers rewriting. Auth com Auth.js (NextAuth v5):
   providers, session, callbacks, protecting routes.
10. `projeto-final` - App full-stack com auth (Auth.js), CRUD
    server-side, ISR/SSG/SSR combinado, deploy em Vercel/Cloudflare,
    observability básica.

**Fora do núcleo (intencionalmente, v1.0.0):**

- **Pages Router (legado)** - não é mais o caminho recomendado, e
  misturar com App Router confunde. A trilha 100% App Router.
- **Turbopack** - ainda instável em muitas versões do Next 15.x pra
  produção. A trilha usa webpack. Menção breve no projeto final.
- **Image optimization profunda** - `next/image` é mostrado no projeto
  final, mas o tema (AVIF/WebP, LCP, srcset) é da trilha
  `performance-web` (issue #48).
- **Edge runtime avançado** - só tocado no projeto final. Aprofundamento
  de Workers/KV/R2/D1/DO vai pra trilha
  `edge-deploy-frontend` (issue #56).
- **Internacionalização (`i18n`)** - pertence à trilha `i18n-l10n`
  (issue #53).
- **Testes de Next** (unit, e2e, visual) - pertence à trilha
  `testing-frontend` (issue #54). O projeto final inclui 1 teste
  mínimo pra mostrar o caminho.
- **Observabilidade detalhada** (Sentry, RUM, traces) - pertence à
  trilha `observabilidade-frontend` (issue #55). O projeto final
  tem 1 menção de error tracking.
- **Design system / Storybook** - pertence à trilha
  `storybook-design-systems` (issue #46).
- **Real-time / WebSockets no Next** - pertence à trilha
  `real-time-websockets-sse` (issue #52).
- **PWA / offline-first** - pertence à trilha `pwa-offline-first`
  (issue #51).
- **Acessibilidade avançada** (WCAG 2.2, auditoria em CI) - pertence à
  trilha `acessibilidade-avancada` (issue #50). A trilha cobre a11y
  introdutória (que já está na `frontend`) e menciona ARIA onde
  importa (Server Components, navegação por teclado).
- **TanStack Query, Form Libraries, etc.** - pertencem a outras
  trilhas do pacote. A trilha mostra o caminho "vanilla" do Next
  (fetch + server actions) e sinaliza onde TanStack Query encaixa
  pra quem vem de SPA.
- **next-auth providers específicos** (Google, GitHub, etc.) - a
  trilha mostra o provider genérico e o callback. Setup específico
  por provider é documentação, não conteúdo.
- **CI/CD profundo** - o projeto final dá o caminho mínimo (push →
  deploy). Pipelines completos (preview environments, atomic deploys,
  cache strategies) pertencem a `edge-deploy-frontend` (issue #56).

### Conflitos e encaixe com trilhas existentes

- **`frontend`** - pré-requisito. Os nós `react`, `state-hooks`,
  `rotas`, `forms-http` e `estilizacao` são a base. A nova trilha
  **não repete** conteúdo desses nós - cita e segue.
- **`typescript`** (atual, backend) - pré-requisito solto. Cobre tipos
  básicos, generics, utility types, narrowing. **A meta-issue #41
  lista `typescript-frontend` como "aprofundamento a decidir"**.
  esta trilha não cobre o gap; no `editorial-decisions.md` da
  `typescript` vai ser sinalizado como "dependência externa não
  coberta". O nó 1 (`ts-no-react`) cobre o mínimo que destrava a
  trilha, com link pra `typescript` no `resources`.
- **`complexidade-de-algoritmos`** - não é pré-requisito. A nova
  trilha não aprofunda complexidade de algoritmos; usa Big O
  superficialmente (cache hit/miss) sem entrar em análise formal.
- **`backend`** - não é pré-requisito direto. A nova trilha usa
  Server Actions (que se apoiam em HTTP) e Auth.js (que se apoia em
  cookies/sessão). Quem nunca viu backend se vira, mas a trilha
  `backend` é leitura recomendada pra entender o que acontece do
  outro lado.
- **`sql-banco-de-dados`** - o projeto final usa Postgres pra
  persistência, mas o SQL em si é superficial. Aprofundamento fica
  pra trilha `sql-banco-de-dados`.
- **`docker-compose-e-workflows` / `docker-fundamentos`** - o projeto
  final menciona Docker pro ambiente local, mas o aprofundamento é
  dessas trilhas. A nova trilha não cobre Docker.

### Pré-requisito TS-frontend (lacuna conhecida)

A issue #42 cita "trilha TS-frontend" como pré-requisito, e a
meta-issue #41 lista `typescript-frontend` como
**"aprofundamento a decidir se vira trilha-irmã"**. Em 2026-08-27,
essa trilha **não existe**.

**Decisão:** o nó 1 (`ts-no-react`) cobre o mínimo que destrava o
resto da trilha. **Não** substitui a futura `typescript-frontend`
quando ela sair. O `editorial-decisions.md` da futura
`typescript-frontend` (quando existir) deve linkar este nó 1 como
pré-requisito.

### Formato dos nós (camadas 🟢🟡🔴)

Assim como as trilhas `fundamentos-de-cs` e `estruturas-de-dados`,
cada nó `.mdx` desta trilha segue o esqueleto de **três camadas**,
sinalizadas por cabeçalhos visíveis:

- 🟢 **Essencial** - o "todo mundo precisa saber". Inclusivo, sem
  jargão. É onde a pessoa investe a maior parte do tempo.
- 🟡 **Aprofundamento** - liga o conceito com a prática real de dev:
  "onde isso aparece no dia a dia, que armadilha existe, que
  otimização isso destrava".
- 🔴 **Pra quem quer ir além** - referências acadêmicas, RFCs,
  benchmarks, ou "leitura recomendada pra se aprofundar".

O **projeto final** é exceção: é um brief de projeto, não segue o
esqueleto de 3 camadas (segue o template de `projects/<slug>.mdx`
com seções Objetivo, Requisitos, Desafios extras, Dicas).

### Decisões de curadoria

- **PT-BR primeiro.** Recursos em inglês só quando canônicos
  (Next.js docs, React Server Components RFC, Next.js learn).
- **`type` sempre preenchido** (`artigo` | `video` | `curso` | `doc`
  | `exercicio`).
- **Mínimo 1, máximo 3 recursos por nó.** Em geral 2.
- **Sem recursos pagos.**
- **Diagramas Mermaid** via componente `<Mermaid>`. Candidatos:
  - `meta-frameworks-por-que`: linha do tempo mental model
    SPA → SSR → RSC.
  - `app-router-mental-model`: árvore de pastas mostrando
    layouts, route groups, loading/error.
  - `rsc-fundamentos`: fronteira server/client com o que cada lado
    pode/não pode fazer.
  - `data-fetching-server`: fluxo de cache (Request Memoization →
    Data Cache → Full Route Cache → Router Cache) + invalidação.
  - `streaming-ssr`: timeline do streaming (chunk por chunk).
- **Quizzes formativos** (componente `<Quiz>`) ao final de **cada
  nó** - 1 pergunta, 3 opções, com `explanation` em cada. São
  formativos, **não creditam XP**.
- **Checkpoints validados** (componente `<Checkpoint>`) nos nós
  onde a prática em código se valida automaticamente: `ts-no-react`
  (tipar componente genérico), `rsc-fundamentos` (transformar
  client em server), `data-fetching-server` (fetch com cache),
  `projeto-final` (teste E2E do fluxo principal). Total: **4
  checkpoints**.
- **Exemplos em TypeScript** (a trilha é React + TS, sem exceção).
  Quando o exemplo é específico de Next 15, marca a versão no
  snippet pra evitar drift.

### O que ficou de fora (intencionalmente, v1.0.0)

- **Server-side data fetching libraries** (TanStack Query server-side,
  SWR) - fora. Pertence às trilhas 4 e 5 do pacote Frontend 2026.
- **CMS integration** (Sanity, Contentful, Strapi) - fora. A trilha
  mostra o caminho com Markdown/JSON local.
- **State management global server-side** (Zustand server, Redux
  Toolkit Query) - fora. RSC + Server Actions cobrem 90% dos casos.
- **i18n em Next** - fora. Pertence à trilha `i18n-l10n`.
- **Multi-region deploy** - fora. Pertence à trilha
  `edge-deploy-frontend`.
- **A/B testing** - fora. Pertence à `observabilidade-frontend`.

### Aprofundamentos futuros (próximas versões)

Crescimento possível quando a trilha tiver uso real:

- **Nós extras** dentro desta trilha (apenas se virar buraco real):
  - "Parallel routes e intercepting routes" (mencionado em
    `app-router-mental-model` como "avançado", pode virar nó se
    virar dúvida recorrente).
  - "Cookies e headers server-side" (mencionado em
    `middleware-e-auth`, pode virar nó se virar dúvida recorrente).
  - "next.config.js a fundo" (rewrites, redirects, headers,
    experimental flags).
  - "React 19 features em Next 15" (use(), useFormStatus, ref as
    prop) - quando estabilizar.
- **Trilha específica filha**: `typescript-frontend` (RSC, generics
  de componente, branded types pra design tokens, module
  augmentation, `tsconfig` pra Vite/Next). Quando sair, linkar
  como complemento.
- **Trilha específica filha**: `next-15-vs-react-router-7-vs-remix`
  - comparativo prático entre meta-frameworks, com benchmark de
  DX, performance e ecossistema.

Mudanças de escopo aqui viram bump **minor** (v1.1.0) se adicionarem
nós ou camadas, **patch** (v1.0.1) se forem correções, **major**
(v2.0.0) se mudar a base conceitual (ex: foco novo em outro
meta-framework) ou o público-alvo.

### Princípio-guia

> "Se um dev que terminou `frontend` não consegue explicar **o que
> muda entre SPA e RSC, quando usar Server Component, e por que
> Server Actions existem**, este nó está falhando."

A camada 🟢 precisa passar nesse teste. As outras camadas agregam
referências e detalhes, mas a essência tem que caber num elevador.

---

Aberto a discussão: abra issue ou comente em
[Issues](https://github.com/lucianodiisouza/aprenda-community/issues).
