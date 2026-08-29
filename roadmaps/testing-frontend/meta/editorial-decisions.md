# Decisões editoriais - Trilha de Testing Frontend

> Histórico de decisões de escopo, organização e curadoria da
> trilha de Testing Frontend. Quando a trilha ganha ou perde um
> nó, isso fica registrado aqui.

## v1.0.0 - Criação inicial (2026-08-29)

### Origem e motivação

A trilha nasce de um buraco real: zero cobertura de **testes
client-side** no conteúdo atual do repositório. A `backend`
cobre Vitest pra Node (com Supertest e mocks), o que é
essencial mas não é o trabalho do dev frontend no dia a dia.
O dev frontend precisa de:

- **Unit test** de funções puras (e de hooks isolados).
- **Component test** que renderiza React, simula o usuário
  com `userEvent`, e afirma pelo que ele **vê** (não pela
  implementação).
- **E2E** que valida o fluxo de um usuário real de ponta
  a ponta (login, checkout, multi-step).
- **Visual regression** pra pegar mudanças CSS silenciosas
  (botão que mudou de cor, layout que quebrou em mobile).
- **Acessibilidade automatizada** em CI - axe, pa11y,
  jest-axe.
- **CI** que orquestra tudo isso com cache, paralelização,
  e o caminho verde/vermelho que protege a main.

A trilha cobre as 5 camadas em profundidade e o "como
ligar tudo isso num pipeline que roda em PR" no final.

### Decisão de público: intermediário, com piso em React

Público-alvo declarado:

- **Dev júnior/pleno front** que terminou `frontend` e quer
  parar de "testar manualmente clicando em tudo antes de
  subir PR".
- **Dev pleno** mantendo app em produção que precisa
  adicionar testes sem reescrever o código.
- **Dev full-stack** que já testou o backend (com a
  `backend`) e quer o mesmo rigor no front.
- **Tech lead** decidindo pirâmide de testes da squad,
  ferramental (Vitest vs Jest, Playwright vs Cypress), e
  orçamento de CI.

A trilha assume que a pessoa já:

- Confortável com React (componentes, hooks, props, state,
  context). É pré-requisito por design - testes de
  component dependem disso.
- Noções de `git` (a trilha usa `git diff` e conceitos de
  branch, mas não ensina git).
- Já viu `npm test` ou `yarn test` rodando em algum
  projeto. Não precisa ter escrito teste antes - a
  trilha cobre do zero.
- Confortável com terminal, `node`, e um editor com
  TypeScript.
- Terminou (ou equivalente) a trilha `frontend` do
  aprenda-community.

A trilha **não assume** conhecimento prévio de:

- Vitest, Jest, Mocha ou qualquer test runner. A trilha
  cobre Vitest do zero.
- Testing Library ou Enzyme. Cobre Testing Library do
  zero.
- Playwright, Cypress ou qualquer ferramenta de E2E.
  Cobre Playwright do zero.
- axe-core, pa11y ou qualquer ferramenta de a11y
  automatizada. Cobre axe-core do zero.
- GitHub Actions, GitLab CI, CircleCI. Cobre GitHub
  Actions do zero (quem usa outro provider traduz).

### Escopo: o que entra e o que fica de fora

**Dentro do núcleo (7 nós + 1 projeto final = 8 entradas):**

1. `piramide-de-testes` - Por que testar (regressão,
   confiança, refatoração segura), a pirâmide clássica
   (unit / integration / E2E), trade-offs por camada
   (velocidade, custo, confiança), ROI de cada uma.
2. `vitest-unit` - Setup do Vitest em projeto Vite/CRA/Next,
   `describe`/`it`/`test`, matchers (`toBe`, `toEqual`,
   `toContain`, `toThrow`, matchers customizados),
   mocks e spies (`vi.fn`, `vi.spyOn`, `vi.mock`),
   `expect.assertions`, `beforeEach`/`afterEach`,
   `coverage` (c8/v8).
3. `testing-library-component` - `@testing-library/react`,
   `render`, queries por papel (`getByRole`,
   `getByLabelText`, `getByText`), por quê **não**
   usar `getByTestId` por padrão, `userEvent` vs
   `fireEvent`, `findBy` vs `getBy` vs `queryBy` (async),
   `act` e o que ele resolve, `MSW` pra mockar fetch.
4. `playwright-e2e` - Setup, `playwright.config.ts`,
   `test`/`expect`/`page.locator`, locators por papel
   (acessibilidade-first), `user` interactions, fixtures
   customizadas, `trace viewer` pra debug, paralelização
   com `workers`, headless vs headed.
5. `visual-regression` - O que é e o que **não** é
   (não substitui E2E), Chromatic (Storybook-driven),
   Percy (DL-driven), `toHaveScreenshot()` do Playwright
   (nativo), quando usar cada um, baselines e
   gerenciamento de mudanças.
6. `testes-de-acessibilidade` - axe-core, jest-axe (unit),
   `@axe-core/playwright` (E2E), pa11y-ci (CLI), as
   regras WCAG que cada um cobre, o que **não** é
   automatizável (leitor de tela, navegação por
   teclado complexa).
7. `testes-em-ci` - GitHub Actions, paralelização de
   matriz, cache de `node_modules` e de browsers,
   `concurrency` pra cancelar runs antigos, secrets
   pra tokens, badge verde no README.
8. `projeto-final` - Componente de UI real (botão
   acessível com variants) com: 5+ unit tests (lógica
   pura), 3+ component tests (interação do usuário),
   1+ a11y test (axe), 1+ E2E (Playwright), tudo
   rodando em CI no PR.

**Fora do núcleo (intencionalmente, v1.0.0):**

- **Testes de backend** (unit de service, integration de
  rota, mocks de DB) - pertence à `backend` (issue #47).
  A `backend` já cobre Vitest pra Node + Supertest.
- **Cypress** - mencionado como contexto histórico e
  comparado a Playwright. A trilha foca 100% em
  Playwright porque é o padrão moderno em 2026 (mais
  rápido, melhor DX de debug, multi-browser nativo).
- **Enzyme** - descontinuado em 2022. Não vale o espaço
  em 2026.
- **Jest como test runner** - mencionado como contexto
  (foi o padrão até 2022), mas a trilha usa Vitest
  porque é o padrão atual (mais rápido, ESM nativo,
  compatível com Vite).
- **Mutation testing** (Stryker, Mutode) - menção
  breve no aprofundamento. Custo alto de CI, ROI
  questionável, complexidade de setup. Pertence a
  uma trilha futura de "qualidade avançada".
- **Contract testing** (Pact) - fora. Pertence a
  times com muitos serviços. Mencionado como
  "próximo passo" no projeto final.
- **Performance testing** (Lighthouse CI, k6) -
  pertence a `performance-web` (issue #48). Mencionado
  como "complemento" no nó 7 (CI).
- **Load testing / stress testing** - fora. Backend.
- **Snapshot testing em component** -
  desencorajado pela comunidade (crianças snapshots
  frágeis que ninguém mantém). Mencionado no nó 2
  pra "existe, mas evite".
- **Testes de API REST com Pact/contract** - backend.
- **Visual testing com IA** (applitools, Percy com
  IA) - fora. A trilha cobre o caminho "vanilla" e
  menciona IA como "se quiser ir além".
- **Storybook 7+ test runner** (Chromatic) - coberto
  no nó 5 (visual regression) como uma das opções.
  Setup do Storybook em si pertence a
  `storybook-design-systems` (issue #46).
- **Mocks de browser** (jsdom vs happy-dom vs Playwright
  como engine) - escolha pragmática de Vitest
  (jsdom por default, happy-dom pra performance).
  Mencionado no nó 2 mas sem aprofundamento.
- **MSW setup detalhado** (mock service worker) -
  mencionado no nó 3 porque é a forma padrão de mockar
  fetch. Setup completo de MSW pertence a uma trilha
  de "infra de testes" (a definir).
- **Testes de acessibilidade visual** (Daltonismo
  simulado, contraste visual) - ferramentas como
  Sim Daltonism, Stark. Mencionado como complemento,
  não automatizado.

### Conflitos e encaixe com trilhas existentes

- **`frontend`** - pré-requisito. Os nós `react`,
  `state-hooks`, `forms-http` e `estilizacao` são
  a base. A nova trilha **não repete** conteúdo
  desses nós - cita e segue. Pré-requisito solto
  de `state-hooks` (a issue cita esse mínimo).
- **`backend`** - leitura recomendada, não
  pré-requisito. Quem terminou a `backend` já viu
  Vitest em outro contexto (Node), o que ajuda
  a entender os conceitos mais rápido. Mas a
  trilha cobre Vitest do zero de novo - o foco
  é "testar React no jsdom", não "testar API
  no Node".
- **`typescript`** - pré-requisito solto. A trilha
  é toda em TS (Vitest tem type-checking nativo,
  Testing Library + Playwright têm tipagem forte).
  Mesma situação da `form-libraries`: a `typescript`
  existente cobre o suficiente. A futura
  `typescript-frontend` (lacuna conhecida) linkaria
  aqui como leitura recomendada.
- **`git`** - pré-requisito solto. A trilha usa
  conceitos de branch e PR no nó 7 (CI), mas não
  aprofunda git.
- **`acessibilidade-web`** (issue #61, merged
  em v1.22.0) - leitura recomendada. A nova
  trilha cobre **automatização** de a11y em CI
  (axe-core, pa11y). A `acessibilidade-web`
  cobre **como** tornar componentes acessíveis
  (HTML semântico, ARIA, foco visível). As duas
  trilhas se complementam: a `acessibilidade-web`
  ensina a teoria, `testing-frontend` ensina a
  automatizar a verificação dessa teoria em PR.
- **`nextjs`** - não é pré-requisito. A nova
  trilha é agnóstica de framework (funciona com
  Vite + React, Next.js, Remix, TanStack Start).
  Quem usa Next adapta o caminho de CI (GitHub
  Actions vs Vercel preview), mas a maior parte
  é a mesma.
- **`tanstack-query`** - não é pré-requisito.
  A nova trilha não cobre "como testar
  TanStack Query" especificamente. Menciona
  mockar fetch com MSW como caminho padrão.
- **`form-libraries`** - leitura recomendada.
  Quem terminou `form-libraries` viu
  `validacao-server` (testar fetch com mock).
  Os patterns de Testing Library + MSW
  ampliam o que a `form-libraries` introduziu.

### Pré-requisito TS-frontend (lacuna conhecida)

Mesma situação da `nextjs`, `form-libraries` e
`tanstack-query`: a `typescript-frontend` (issue
pendente da meta #41) **não existe** ainda em
2026-08-29.

**Decisão:** a trilha é toda em TS mas não assume
domínio profundo. Conceitos que aparecem e que
estão cobertos pela `typescript` existente (tipos
primitivos, generics simples, narrowing) são
explicados brevemente no contexto. Aprofundamento
em `expect<T>()` generic, `vi.fn<T>()` typed mock,
e tipos customizados de matchers **não** são
usados - a trilha é pragmática.

Quando a `typescript-frontend` sair, esta trilha
deve ser linkada como leitura recomendada.

### Formato dos nós (camadas 🟢🟡🔴)

Igual à `nextjs`, `tanstack-query` e `form-libraries`.
Cada nó `.mdx` segue o esqueleto de três camadas:

- 🟢 **Essencial** - o "todo mundo precisa saber".
  Inclusivo, sem jargão.
- 🟡 **Aprofundamento** - prática real de dev:
  "onde isso aparece no dia a dia, que armadilha
  existe, que otimização isso destrava".
- 🔴 **Pra quem quer ir além** - referências
  canônicas (Kent C. Dodds, Martin Fowler), RFCs,
  posts profundos do time de cada lib.

O **projeto final** é exceção: é um brief de
projeto, não segue o esqueleto de 3 camadas
(segue o template de `projects/<slug>.mdx` com
seções Objetivo, Requisitos, Desafios extras,
Dicas).

### Decisões de curadoria

- **PT-BR primeiro.** Recursos em inglês só
  quando canônicos (Vitest docs, Testing Library
  docs, Playwright docs, posts do Kent C. Dodds).
- **`type` sempre preenchido** (`artigo` | `video`
  | `curso` | `doc` | `exercicio`).
- **Mínimo 1, máximo 3 recursos por nó.** Em
  geral 2.
- **Sem recursos pagos.**
- **Diagramas Mermaid** via componente `<Mermaid>`.
  Candidatos:
  - `piramide-de-testes`: pirâmide visual
    (unit no topo da base, E2E no topo da
    pirâmide) com proporção + trade-offs por
    camada (velocidade, custo, confiança).
  - `testes-em-ci`: pipeline CI (PR aberto →
    install → unit → component → E2E → a11y
    → report) com paralelização e cache.
- **Quizzes formativos** (componente `<Quiz>`)
  ao final de **cada nó** - 1 pergunta, 3 opções,
  com `explanation` em cada. Formativos, **não
  creditam XP**.
- **Checkpoints validados** (componente
  `<Checkpoint>`) em 5 nós onde a prática em
  código se valida automaticamente:
  `vitest-unit` (escrever matcher + mock básico),
  `testing-library-component` (escrever query +
  assertion por papel), `playwright-e2e` (escrever
  locator + interação), `testes-de-acessibilidade`
  (escrever asserção axe), `projeto-final` (smoke
  test E2E do projeto). Total: **5 checkpoints**.
- **Exemplos em TypeScript** (a trilha é React +
  TS, sem exceção). Quando o exemplo depende de
  versão (Vitest 1.x vs 2.x, Playwright 1.4x),
  marca a versão no snippet pra evitar drift.

### Stack da trilha

- **Vitest 1.x** (a versão estável atual, com
  suporte a `vi.fn`, `vi.mock`, `expect`, matchers
  customizados).
- **@testing-library/react 16.x** (a versão
  atual estável, com `render` + queries).
- **@testing-library/user-event 14.x** (a versão
  atual estável, com `userEvent.setup()`).
- **@testing-library/jest-dom 6.x** (matchers
  extras pro DOM: `toBeInTheDocument`,
  `toHaveAccessibleName`).
- **Playwright 1.4x** (a versão atual estável,
  com `test`/`expect`/`page.locator` e
  `toHaveScreenshot` nativo).
- **axe-core 4.x** + **jest-axe** (unit) e
  **@axe-core/playwright** (E2E).
- **GitHub Actions** (provider padrão; quem usa
  GitLab/CircleCI traduz).
- **jsdom** (engine default do Vitest; menção a
  `happy-dom` como alternativa mais rápida).
- **MSW 2.x** (mock de fetch; mencionado no nó
  3 como caminho padrão, sem aprofundamento).

### O que ficou de fora (intencionalmente, v1.0.0)

- **Mock service worker (MSW) setup completo** -
  mencionado no nó 3 como caminho padrão pra
  mockar fetch. O setup de MSW em si (handler,
  server, browser) pertence a uma trilha futura
  de "infra de testes" ou a um nó extra desta
  trilha se virar buraco recorrente.
- **Testes de hooks isolados** (sem render) -
  mencionado como "pode ser feito com
  `@testing-library/react-hooks` (deprecated) ou
  puro Vitest" no nó 2. Aprofundamento pertence
  a "padrões de teste de hooks" (a definir).
- **Testes de Server Components** (RSC) -
  pertence a `nextjs`. A nova trilha é focada
  no caminho client-side, que é o comum a
  todos os frameworks.
- **Testes de WebSocket / streaming** - pertence
  a `real-time-websockets-sse` (issue #52).
- **Testes de PWA** (offline, service worker) -
  pertence a `pwa-offline-first` (issue #51).
- **Testes de design system** (Storybook +
  Chromatic end-to-end) - mencionado no nó 5.
  Setup do Storybook pertence a
  `storybook-design-systems` (issue #46).
- **Testes de fluxos críticos de negócio**
  (compliance, financeiro) - mencionado como
  aprofundamento. Em domínios regulados (banco,
  saúde), os testes unit + E2E da nova trilha
  são o mínimo; entram aí audit trails e
  approvals específicos.
- **Testes de carga** (k6, Artillery) - backend.
- **Testes de segurança** (OWASP ZAP, Burp) -
  pertence a `ciberseguranca-para-desenvolvedores`
  (issue pendente).

### Aprofundamentos futuros (próximas versões)

Crescimento possível quando a trilha tiver uso
real:

- **Nó extra**: "Mocks avançados: MSW setup,
  dependency injection, test doubles" - se virar
  buraco recorrente.
- **Nó extra**: "Testes de performance com
  Lighthouse CI e k6 (front + back)" - se virar
  demanda de squads que medem Core Web Vitals.
- **Nó extra**: "Mutation testing com Stryker"
  - se virar pergunta recorrente.
- **Nó extra**: "Testes de acessibilidade
  manuais: leitor de tela, navegação por
  teclado" - complemento da `acessibilidade-web`.
- **Nó extra**: "Testes de i18n: pluralização,
  RTL, screenshots por locale" - se a app
  precisar.
- **Trilha-irmã**: "qualidade-avancada" - mutation,
  contract testing, fuzz testing, security
  testing. Hoje esses tópicos cabem em menções
  no aprofundamento; amanhã podem virar trilha
  dedicada.
- **Migração pra Vitest 2.x** quando estabilizar
  - provavelmente bump de patch na mesma
  trilha, sem reescrita.
- **Migração pra Playwright 2.x** quando
  estabilizar - mesma coisa.
