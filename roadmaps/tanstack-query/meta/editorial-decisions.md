# Decisões editoriais - Trilha de TanStack Query

> Histórico de decisões de escopo, organização e curadoria da trilha
> de TanStack Query. Quando a trilha ganha ou perde um nó, isso fica
> registrado aqui.

## v1.0.0 - Criação inicial (2026-08-28)

### Origem e motivação

A trilha nasce de um buraco real: a `frontend` cobre o caminho
**vanilla** de data fetching (`fetch` + `useEffect` + `useState`),
que funciona pra protótipo e dev junior, mas quebra feio em produção.
A `nextjs` cobre o caminho **server-side** (Server Components,
Server Actions, fetch com cache), que é a resposta certa quando você
tem um meta-framework.

Mas a maioria do mercado ainda roda **SPA pura** (Vite + React, ou
até CRA legado) e precisa de algo entre os dois extremos: gerenciar
**server state no client** com cache, invalidação, retries e
devtools, sem reinventar a roda. É isso que TanStack Query
(React Query) faz.

A trilha é o **complemento natural da `frontend`**: pega quem
terminou o data fetching básico e quer entender o paradigma de
**server state** (que é a maior parte do estado em qualquer app
real). A biblioteca é o veículo; o conceito é o que fica.

### Decisão de público: intermediário, com piso em React

Público-alvo declarado:

- **Dev júnior/pleno front** que terminou `frontend` e quer parar
  de gerenciar `loading`/`error`/`data` na mão em cada componente.
- **Dev pleno** mantendo SPA em produção que precisa de cache,
  invalidação e devtools decente.
- **Dev full-stack** que vem de outro framework (Vue, Svelte) e
  quer entender o padrão que React Query popularizou.
- **Tech lead** decidindo se vale a dependência vs. fetch manual.

A trilha assume que a pessoa já:

- Confortável com React (componentes, hooks, props, state, context).
- Já usou `fetch` ou `axios` pelo menos uma vez.
- Já brigou com `useEffect` + cleanup + race conditions de request.
- Terminou (ou equivalente) a trilha `frontend` do aprenda-community.
- Noções de TypeScript no front (a biblioteca é fortemente tipada).

A trilha **não assume** conhecimento prévio de:

- TanStack Query (zero - é o que se ensina aqui).
- Qualquer outra lib de data fetching (SWR, RTK Query, Apollo).
  Quem vem de alguma delas vai se virar rápido - os conceitos
  batem.
- Next.js ou outro meta-framework. A trilha foca no client-side.
  A `nextjs` cobre o caminho server-side.

### Escopo: o que entra e o que fica de fora

**Dentro do núcleo (6 nós + 1 projeto final = 7 entradas):**

1. `o-que-e-server-state` - O paradigma de server state vs. client
   state vs. URL state. Por que `useState` não cabe. O que TanStack
   Query resolve e o que **não** resolve (autenticação, websocket,
   storage local).
2. `queries-basico` - `useQuery`, query keys, `staleTime`, `gcTime`,
   `enabled`, `refetchOnWindowFocus`, `refetchOnReconnect`. A anatomia
   do retorno (`data`, `isLoading`, `isFetching`, `isError`,
   `error`, `refetch`).
3. `mutations` - `useMutation`, `mutate` vs. `mutateAsync`,
   `onSuccess`/`onError`/`onSettled`, **optimistic updates** com
   `onMutate` + `context` + rollback.
4. `cache-invalidation` - A API mais importante da biblioteca:
   `invalidateQueries`, `setQueryData`, `removeQueries`,
   `cancelQueries`. **Structural sharing** (por que o `===` no
   `data` continua valendo mesmo quando o servidor devolve um objeto
   novo).
5. `padroes-avancados` - Dependent queries (`enabled` com base em
   outra query), parallel queries (múltiplas queries em paralelo),
   infinite queries (`useInfiniteQuery`), `useSuspenseQuery`
   (quando vale).
6. `devtools-debugging` - React Query Devtools (instalação, o que
   cada painel mostra), debugging com Network tab, erros comuns
   ("minha query não atualiza depois do POST", "staleTime 0
   refaz tudo", "cache vaza entre usuários").
7. `projeto-final` - App de tarefas (CRUD completo) com TanStack
   Query: lista, criar, editar, deletar, optimistic updates em
   marcar como feito, e tratamento de offline (queries pausadas
   quando sem rede).

**Fora do núcleo (intencionalmente, v1.0.0):**

- **Persistência em storage** (`persistQueryClient`,
  `createSyncStoragePersister`) - menção breve no projeto final,
  aprofundamento fica pra `pwa-offline-first` (issue #51).
- **SSR com TanStack Query** (`HydrationBoundary`,
  `dehydrate`) - pertence ao caminho RSC/SSR da `nextjs`, não
  cabe aqui. A trilha é 100% client-side.
- **WebSocket / streaming queries** (`streamedQuery`,
  `experimental_streamedQuery`) - pertence à `real-time-websockets-sse`
  (issue #52).
- **Mutations com Server Actions do Next** - já tem o caminho
  nativo na `nextjs`. Aqui é só o caminho client-side.
- **Apollo / GraphQL** - paradigma diferente, lib diferente. A
  trilha mostra o caminho REST/fetch, e menciona que TanStack
  Query também funciona com GraphQL (a camada de transporte é
  plugável).
- **State management global** (Zustand, Redux Toolkit) -
  TanStack Query cuida de server state, **não** de client state.
  O nó 1 deixa isso explícito. Pra client state global, a
  recomendação é Context API ou Zustand.
- **Testes de TanStack Query** (`@testing-library/react-hooks`,
  MSW) - pertence à `testing-frontend` (issue #54). O projeto
  final inclui 1 teste pra mostrar o caminho.
- **Caching strategies finas** (memory vs disk, LRU, TTL
  customizado) - a trilha usa o cache padrão (in-memory) e
  menciona quando vale trocar.

### Conflitos e encaixe com trilhas existentes

- **`frontend`** - pré-requisito. O nó `forms-http` cobre o
  caminho `fetch` + `useState` + `useEffect`. A nova trilha
  **assume** esse conhecimento e explica por que o caminho
  manual não escala.
- **`nextjs`** - **não** é pré-requisito. A trilha é 100% client-side.
  Quem vem de Next (RSC + Server Actions) e volta pra SPA
  encontra aqui o equivalente client-side do que o Next resolve
  no servidor. O `editorial-decisions.md` do `nextjs` cita
  TanStack Query como "fora de escopo" (pertencente às trilhas
  4 e 5 do pacote Frontend 2026 - **correção**: deveria ser 2 e 3,
  ver "Correções de remissão" abaixo).
- **`typescript`** (atual, backend) - pré-requisito solto. A
  biblioteca é fortemente tipada (`useQuery<TData, TError,
  TData, TQueryKey>`) e a trilha usa generics em todo lugar.
  Aprofundamento frontend fica pra `typescript-frontend`
  (decidir se vira trilha-irmã).
- **`complexidade-de-algoritmos`** - não é pré-requisito. Não
  entra em análise formal de complexidade. O `staleTime` é
  apresentado como "tempo que o dado fica fresco", sem entrar
  em invalidação de cache, eviction policies, ou teorema de
  Belady.
- **`backend`** - não é pré-requisito. A trilha usa uma API
  fake (JSON Server, MSW, ou API pública) no projeto final. A
  `backend` é leitura recomendada pra quem quiser entender o
  que acontece do outro lado.
- **`docker-compose-e-workflows`** - o projeto final usa
  `json-server` rodando em Docker pra ter uma API local
  decente. Aprofundamento de Docker fica pras trilhas Docker.

### Correções de remissão

A `nextjs` remete "TanStack Query e Form Libraries" pras "trilhas
4 e 5 do pacote Frontend 2026". Olhando a meta-issue #41:

- TanStack Query é o **#2** da lista.
- Form Libraries é o **#3**.

A remissão da `nextjs` está **errada numericamente** - é #2 e
#3, não #4 e #5. Sinalizado pra corrigir em fix posterior do
`editorial-decisions.md` do `nextjs` (não é escopo desta PR).

### Lacuna conhecida: `typescript-frontend`

A trilha usa generics de TanStack Query em todos os exemplos
(`useQuery<Usuario[], Error>`), o que assume conforto com
generics TS. A trilha `typescript` (backend) cobre generics
básicos, mas o **aprofundamento em generics de componente e
hooks** (a forma que TanStack Query usa) está na
`typescript-frontend` (que a meta-issue #41 lista como
"aprofundamento a decidir se vira trilha-irmã").

**Decisão:** a trilha cobre o uso correto dos generics
(`useQuery<TData, TError, TData, TQueryFnData, TQueryKey>`)
com o mínimo de teoria. Quem nunca viu generics vai travar
- a `typescript` (existente) cobre o básico suficiente pra
seguir. O aprofundamento mais ergonômico (inferência
automática, helpers de tipo) fica pra `typescript-frontend`
quando sair.

### Formato dos nós (camadas 🟢🟡🔴)

Assim como as trilhas `fundamentos-de-cs`, `estruturas-de-dados`
e `nextjs`, cada nó `.mdx` desta trilha segue o esqueleto de
**três camadas**, sinalizadas por cabeçalhos visíveis:

- 🟢 **Essencial** - o "todo mundo precisa saber". Inclusivo, sem
  jargão. É onde a pessoa investe a maior parte do tempo.
- 🟡 **Aprofundamento** - liga o conceito com a prática real de
  dev: "onde isso aparece no dia a dia, que armadilha existe, que
  otimização isso destrava".
- 🔴 **Pra quem quer ir além** - referências, RFCs, benchmarks,
  ou "leitura recomendada pra se aprofundar".

O **projeto final** é exceção: é um brief de projeto, não segue
o esqueleto de 3 camadas (segue o template de
`projects/<slug>.mdx` com seções Objetivo, Requisitos, Desafios
extras, Dicas).

### Decisões de curadoria

- **PT-BR primeiro.** Recursos em inglês só quando canônicos
  (TanStack Query docs oficiais, vídeo de Dominik Dorfmeister
  - o mantenedor da lib).
- **`type` sempre preenchido** (`artigo` | `video` | `curso` |
  `doc` | `exercicio`).
- **Mínimo 1, máximo 3 recursos por nó.** Em geral 2.
- **Sem recursos pagos.**
- **Diagramas Mermaid** via componente `<Mermaid>`. Candidatos:
  - `o-que-e-server-state`: mapa mental dos 3 tipos de estado
    (server / client / URL) e onde TanStack Query encaixa.
  - `queries-basico`: ciclo de vida de uma query
    (fresh → stale → inactive → gc).
  - `cache-invalidation`: fluxo de invalidação
    (mutation → onSuccess → invalidateQueries → refetch).
  - `padroes-avancados`: árvore de decisão dependent vs. parallel
    vs. infinite.
- **Quizzes formativos** (componente `<Quiz>`) ao final de
  **cada nó** - 1 pergunta, 3 opções, com `explanation` em
  cada. São formativos, **não creditam XP**.
- **Checkpoints validados** (componente `<Checkpoint>`) nos
  nós onde a prática em código se valida automaticamente:
  `queries-basico` (configurar useQuery com staleTime),
  `mutations` (implementar optimistic update com rollback),
  `cache-invalidation` (invalidar query depois de mutation),
  `projeto-final` (teste E2E do fluxo principal). Total:
  **4 checkpoints**.
- **Exemplos em TypeScript** (a biblioteca é fortemente
  tipada, e o ganho de type safety é grande). Sem exceção.
- **Snippets executáveis** quando o nó pede. A `frontend`
  mostrou o caminho vanilla de `fetch` + `useState`; esta
  trilha usa a mesma estrutura de playgrounds (`<JsPlayground>`)
  e MSW (Mock Service Worker) pra simular a API no navegador.

### O que ficou de fora (intencionalmente, v1.0.0)

- **Mutations on the server (Server Actions)** - fora. A
  trilha usa a abstração client-side. Quem usa Next encontra
  o caminho nativo lá.
- **Subscriptions / live queries** (TanStack Query tem
  `experimental_streamedQuery` e integração com Electric SQL)
  - fora. Pertence à `real-time-websockets-sse` (issue #52).
- **Persistência avançada** (encrypted storage, multi-tab
  sync) - fora. O `localStorage` no client basta pro projeto
  final; o aprofundamento de storage seguro fica pras trilhas
  de segurança (issue #49) e PWA (issue #51).
- **Integração com libs de UI específicas** (MUI Data Grid,
  React Table) - fora. A trilha foca nos conceitos; cada
  lib de UI tem seu próprio adapter.
- **Comparação com SWR / RTK Query** - fora. A trilha
  menciona SWR no `resources` do nó 1 como "concorrente
  direto", mas não aprofunda.
- **Performance avançada** (selectors, structural sharing
  fino, render bailout) - menção breve no nó 4. Aprofundamento
  fica pra `performance-web` (issue #48).

### Aprofundamentos futuros (próximas versões)

Crescimento possível quando a trilha tiver uso real:

- **Nós extras** dentro desta trilha (apenas se virar buraco
  real):
  - "Query factories e organização" (como evitar string keys
    espalhadas pelo código).
  - "Tipos avançados" (`queryKey` tipada, helpers de
    inferência).
  - "Testes com MSW" (padrão de mockar a API nos testes).
  - "Integração com tRPC" (o casamento natural com TanStack
    Query).
- **Trilha específica filha**: `tanstack-query-react-native` -
  adaptadores pra React Native (offline-first, retry policy).
- **Trilha específica filha**: `tanstack-router` - o router
  do mesmo time, com type-safe routing e data loading
  integrado.

Mudanças de escopo aqui viram bump **minor** (v1.1.0) se
adicionarem nós ou camadas, **patch** (v1.0.1) se forem
correções, **major** (v2.0.0) se mudar a base conceitual
(ex: foco em TanStack Router, ou migração pra uma nova
biblioteca).

### Princípio-guia

> "Se um dev que terminou `frontend` não consegue explicar
> **o que é server state, por que `useState` não dá conta, e
> como `useQuery` resolve fetch + cache + invalidação em um
> hook só**, este nó está falhando."

A camada 🟢 precisa passar nesse teste. As outras camadas
agregam referências e detalhes, mas a essência tem que caber
num elevador.

---

Aberto a discussão: abra issue ou comente em
[Issues](https://github.com/lucianodiisouza/aprenda-community/issues).
