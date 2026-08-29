# Decisões editoriais - Trilha de Storybook & Design Systems

> Histórico de decisões de escopo, organização e curadoria
> da trilha de Storybook & Design Systems. Quando a trilha
> ganha ou perde um nó, isso fica registrado aqui.

## v1.0.0 - Criação inicial (2026-08-29)

### Origem e motivação

A trilha nasce de um buraco real: a `frontend` cobre
**como usar componentes** (estilização, props, eventos),
mas não cobre **como construir e manter uma biblioteca
de componentes**. Os dois são mentalidades diferentes:

- **App dev** - "como uso `<Button>` no meu projeto?".
- **Lib dev** - "como construo `<Button>` pra que 50
  apps o consumam sem quebrar?".

A `estilizacao` cobre o caminho app dev (Tailwind, CSS
modules, etc). A nova trilha cobre o caminho lib dev
- Storybook, design tokens, primitives compostas,
versionamento, e test runner.

A trilha é o **próximo passo natural** pra quem terminou
`frontend` e quer parar de reescrever `<Button>` em cada
projeto novo. Cobre o ciclo completo: **construir a lib,
documentar, versionar, testar, publicar**.

### Decisão de público: intermediário, com piso em React

Público-alvo declarado:

- **Dev júnior/pleno front** que terminou `frontend` e
  quer parar de reescrever componentes em cada projeto.
- **Dev pleno** mantendo a lib de UI da empresa que
  cresceu e está virando maintenance hell.
- **Tech lead** decidindo se vale criar uma lib
  interna (vs usar shadcn, MUI, Chakra direto) e
  qual processo seguir.
- **Dev de design system** entrando em uma empresa que
  já tem lib mas precisa de processo.

A trilha assume que a pessoa já:

- Confortável com React (componentes, hooks, props,
  state, context). Pré-requisito por design.
- Confortável com TypeScript no front (a trilha é
  toda em TS).
- Noções básicas de estilização (CSS variables,
  classes utilitárias, ou CSS-in-JS). Não precisa
  ser expert - o nó 3 (tokens) cobre do zero.
- Terminou (ou equivalente) a trilha `frontend` do
  aprenda-community.

A trilha **não assume** conhecimento prévio de:

- Storybook - a trilha cobre do zero.
- Design tokens, Style Dictionary, theming - tudo
  coberto do zero.
- Compound components, headless primitives -
  conceitos explicados, exemplos simples.
- Changesets, Semver, deprecation - introdutório,
  focado no "como" do dia a dia.
- Chromatic, visual regression no contexto de DS -
  mencionado no nó 7 (contract-testing), com link
  pro detalhamento da `testing-frontend`.

### Escopo: o que entra e o que fica de fora

**Dentro do núcleo (7 nós + 1 projeto final = 8 entradas):**

1. `o-que-e-design-system` - O que é (e o que não é)
   um design system, **tokens / primitives / patterns**
   (a tríade clássica do Atomic Design aplicada a
   React), quando vale criar um DS próprio vs usar
   um terceiro (shadcn, MUI, Chakra, Radix),
   anti-patterns comuns (lib de UI sem dono, sem
   docs, sem versionamento).
2. `storybook-basico` - Setup (`npx storybook@latest
   init` ou manual), estrutura de pastas
   (`src/components/Button/Button.tsx` +
   `Button.stories.tsx`), o formato **CSF3**
   (Component Story Format 3), `args`, `argTypes`,
   `decorators`, `parameters`, controles interativos,
   actions.
3. `tokens-e-tema` - O que são design tokens
   (cor, espaço, tipografia, raio, sombra), o padrão
   **Style Dictionary** (Amazon) ou similar
   (Tokens Studio, Theo), como exportar pra CSS
   variables, JSON, e plataformas nativas (iOS,
   Android), **theming** (light/dark) com
   `prefers-color-scheme` e override manual,
   `data-theme` attribute vs `class` strategy.
4. `composicao` - **Compound components** (o padrão
   `<Card><Card.Header>...`), **slot patterns**
   (`children` com semântica, render props), **headless
   primitives** (Radix UI, React Aria - lógica sem
   estilo, controle total pro consumidor), quando
   cada padrão vence.
5. `documentacao` - Storybook **MDX docs** (`*.mdx`),
   autodocs (`tags: ['autodocs']`), como escrever
   docs que devs realmente leem (exemplos, props
   table, quando usar / quando não usar), integração
   com **Chromatic visual review** pra aprovação
   de mudanças visuais.
6. `versionamento` - **Semver** (semver.org) aplicado
   a lib de UI (major = breaking visual ou API,
   minor = nova feature, patch = bugfix), **Changesets**
   (a ferramenta padrão do time do Storybook),
   workflow de PR com changeset, publicação automatica
   no npm com GitHub Actions, **deprecation** (aviso
   + migration guide), e `peerDependencies` corretas
   pra React 18/19.
7. `contract-testing` - O que é "contrato" no
   contexto de DS (a API do componente: props,
   eventos, comportamento, visual), **Storybook test
   runner** (`@storybook/test-runner` + Playwright),
   **acessibilidade automatizada** com addon
   (`@storybook/addon-a11y`), **visual regression**
   com Chromatic. O nó **complementa** a
   `testing-frontend` (que cobre Playwright/Axe
   genérico) com o foco em DS. **Nota importante**:
   "contract testing" aqui significa "contrato da
   API do componente" (props + eventos + visual), não
   o contract testing de **Pact** (que é sobre
   contrato entre microsserviços HTTP - mencionado
   no aprofundamento pra distinguir).
8. `projeto-final` - **Lib de UI própria** com 5+
   componentes (Button, Input, Card, Modal, Badge),
   tokens em Style Dictionary, theming light/dark,
   Storybook publicado, versionamento com Changesets,
   test runner + a11y addon, publicado no npm (ou
   GitHub Packages) via CI.

**Fora do núcleo (intencionalmente, v1.0.0):**

- **Atomic Design como metodologia completa**
  (átomos, moléculas, organismos, templates, pages) -
  a tríade tokens/primitives/patterns do nó 1 cobre
  o essencial. Atomic Design estrito é mencionado
  como contexto, mas a trilha foca no que é
  diretamente útil em React.
- **shadcn/ui como lib "completa"** - mencionado
  no nó 1 como **opção de não construir DS próprio**
  ("copie o código, customize"). Aprofundamento
  pertence a "design system: alternativas" (a
  definir).
- **MUI, Chakra, Ant Design, Mantine** - mencionados
  no nó 1 como opções de **lib de terceiros**. A
  trilha não cobre "como usar" nenhuma delas (fica
  na `frontend`/`estilizacao`).
- **Radix Primitives, Headless UI, React Aria**
  como lib - mencionados no nó 4 (composição)
  como referência de "headless primitives". A
  trilha não aprofunda nenhuma (o foco é
  "como construir", não "como usar").
- **StyleX (Meta), Vanilla Extract, Panda CSS**
  como libs de CSS-in-JS pra tokens - mencionados
  no aprofundamento do nó 3. A trilha foca no
  **padrão Style Dictionary** (mais portável, mais
  comum em DS maduros).
- **Material Design 3, Apple Human Interface
  Guidelines, Fluent UI** como guia de estilo -
  fora. A trilha é agnóstica de sistema de design
  específico.
- **Figma Tokens / Variables sync** (do design
  pro código) - mencionado no aprofundamento do
  nó 3. Setup completo pertence a uma trilha
  futura de "design ops".
- **Testes de unidade profundos de cada componente**
  - mencionados no nó 7 (contract-testing) como
  complementares. Cobertura profunda de testes
  pertence à `testing-frontend` (que cobre Vitest,
  Testing Library, MSW).
- **Publicação de DS open source** (npm publish
  com tag, registry config, signing) - o projeto
  final mostra o caminho mínimo. Setup completo
  pertence a "npm e packaging" (a definir).
- **Versionamento independente de pacotes (monorepo)**
  - mencionado no aprofundamento do nó 6.
  Pertence a uma trilha de monorepo (Nx, Turborepo)
  - a definir.
- **Migrar MUI/Chakra para DS próprio** - fora.
  A trilha assume que você **começa** um DS, não
  que está migrando.

### Conflitos e encaixe com trilhas existentes

- **`frontend`** - pré-requisito. Os nós `react`,
  `state-hooks`, `forms-http` e `estilizacao`
  são a base. A nova trilha **não repete**
  conteúdo desses nós - cita e segue. O nó
  `estilizacao` cobre Tailwind no app; a nova
  trilha cobre **tokens e theming** (que pode
  usar Tailwind config, CSS variables, ou
  Style Dictionary - os três caminhos são
  mostrados).
- **`testing-frontend`** - leitura recomendada,
  não pré-requisito. A nova trilha **complementa**
  a `testing-frontend` com foco em DS:
  - A `testing-frontend` cobre Playwright/Axe
    **genérico** (app, fluxo de usuário).
  - A nova trilha cobre Storybook test runner
    + addon a11y + Chromatic **específico pra
    componente isolado** (story, não app inteiro).
  O nó 7 (contract-testing) da nova trilha
  referencia o nó 6 (testes-de-a11y) da
  `testing-frontend` pra aprofundamento.
- **`nextjs`** - leitura recomendada. Server
  Components e design system se cruzam (RSC pode
  ser exportado de uma lib de DS), mas a nova
  trilha foca no caminho **client** (`"use client"`
  por padrão em componentes de DS).
- **`tanstack-query`** - não relacionada. DS
  não tem estado async complexo (a maior parte
  é estado local e props).
- **`form-libraries`** - não é pré-requisito
  direto, mas um DS **terá** formulários
  (Input, Select, Checkbox). A nova trilha
  cobre como **construir** esses componentes
  (composição, theming, a11y), não como
  **usar** form libraries neles.
- **`acessibilidade-web`** - leitura
  recomendada, não pré-requisito. A `acessibilidade-web`
  ensina **como tornar componentes acessíveis**
  (HTML semântico, ARIA, foco visível). A nova
  trilha automatiza a **verificação** dessa
  acessibilidade com axe-core (addon a11y do
  Storybook) e Playwright.
- **`typescript`** - pré-requisito solto. A
  trilha é toda em TS (generics de componente,
  discriminated unions de variants, declaração
  de tipo de tokens). Mesma situação das outras
  trilhas do pacote: a `typescript` existente
  cobre o suficiente, a futura
  `typescript-frontend` (lacuna conhecida) linka
  aqui como leitura recomendada.
- **`docker-*`, `sql-banco-de-dados`, `backend`**
  - não relacionadas. DS é puro client.

### Sobre o nome "contract-testing" (nó 7)

A issue #46 propôs o nome **"contract-testing"** pra
o nó 7. O conteúdo descrito (Chromatic visual,
Storybook test runner, a11y addon) **não é** o
"contract testing" tradicional (que em arquitetura
de microsserviços significa **Pact** - teste de
contrato HTTP entre produtor e consumidor).

**Decisão:** manter o nome "contract-testing" da
issue, mas **explicitar no editorial-decisions** que
o "contrato" aqui é o **contrato da API do
componente** (props, eventos, comportamento,
visual) - não o contrato HTTP. A nova trilha
foca em "como o componente se comporta" e "como
ele aparece", que é o contrato que o consumidor
(quem usa `<Button>` no app) espera.

O contract testing de Pact é mencionado no
aprofundamento do nó 7 pra distingui-los. Quem
procura "Pact" pelo nome não vai se confundir.

### Formato dos nós (camadas 🟢🟡🔴)

Igual às trilhas anteriores do pacote. Cada nó
`.mdx` segue o esqueleto de três camadas:

- 🟢 **Essencial** - o "todo mundo precisa saber".
  Inclusivo, sem jargão.
- 🟡 **Aprofundamento** - prática real de dev:
  "onde isso aparece no dia a dia, que armadilha
  existe, que otimização isso destrava".
- 🔴 **Pra quem quer ir além** - referências
  canônicas (Storybook team posts, Brad Frost
  Atomic Design, Nathan Curtis tokens posts),
  alternativas, aprofundamento.

O **projeto final** é exceção: é um brief de
projeto, não segue o esqueleto de 3 camadas
(segue o template de `projects/<slug>.mdx` com
seções Objetivo, Requisitos, Desafios extras,
Dicas).

### Decisões de curadoria

- **PT-BR primeiro.** Recursos em inglês só
  quando canônicos (Storybook docs, Style
  Dictionary docs, Brad Frost Atomic Design).
- **`type` sempre preenchido** (`artigo` |
  `video` | `curso` | `doc` | `exercicio`).
- **Mínimo 1, máximo 3 recursos por nó.** Em
  geral 2.
- **Sem recursos pagos.**
- **Diagramas Mermaid** via componente
  `<Mermaid>`. Candidatos:
  - `tokens-e-tema`: hierarquia de tokens
    (primitive → semantic → component),
    mostrando o "cascading" de decisão de
    design.
  - `composicao`: comparação de compound vs
    slot vs headless (com exemplos visuais
    de uso de cada padrão).
  - `versionamento`: fluxo de PR com changeset
    até publicação no npm (branch → changeset
    → merge → release PR → publish).
- **Quizzes formativos** (componente `<Quiz>`)
  ao final de **cada nó** - 1 pergunta, 3
  opções, com `explanation` em cada. Formativos,
  **não creditam XP**.
- **Checkpoints validados** (componente
  `<Checkpoint>`) em 5 nós onde a prática em
  código se valida automaticamente:
  `storybook-basico` (escrever CSF3 story com
  args e argTypes), `composicao` (escrever
  compound component pattern), `documentacao`
  (escrever MDX doc com props table),
  `versionamento` (escrever função de bump de
  Semver), `projeto-final` (smoke test da lib
  montada). Total: **5 checkpoints**.
- **Exemplos em TypeScript** (a trilha é
  React + TS, sem exceção). Tokens tipados
  com `as const`, componentes com `ComponentProps`,
  variantes com `discriminated union` (visto
  na `nextjs`).

### Stack da trilha

- **Storybook 8.x** (a versão atual estável, com
  suporte a CSF3, autodocs, test runner).
- **Style Dictionary 4.x** (a versão atual
  estável, com suporte a múltiplos formatos
  de export).
- **@storybook/test-runner** (Playwright
  embarcado, sem setup extra).
- **@storybook/addon-a11y** (axe-core embarcado
  como painel do Storybook).
- **Chromatic** (visual review hosted; tem free
  tier limitado, suficiente pra DS pequeno).
- **Changesets** (`@changesets/cli`,
  `@changesets/changelog-github`) - a
  ferramenta padrão de versionamento do time
  do Storybook.
- **PNPM workspaces** ou **npm workspaces**
  (pra separar a lib dos apps consumidores)
  - mencionado no aprofundamento, não
  obrigatório.

### O que ficou de fora (intencionalmente, v1.0.0)

- **Atomic Design como framework metodológico**
  (átomos, moléculas, organismos, templates,
  pages) - a tríade tokens/primitives/patterns
  do nó 1 cobre o essencial. Atomic Design
  estrito é mencionado como contexto.
- **Figma Tokens / Variables** (sync do design
  pro código) - mencionado no aprofundamento
  do nó 3. Setup completo pertence a
  "design ops" (a definir).
- **StyleX (Meta), Vanilla Extract, Panda
  CSS** - mencionados como alternativas ao
  Style Dictionary no aprofundamento. A
  trilha foca no **padrão** (qualquer um
  que processe JSON de tokens em CSS/iOS/
  Android funciona igual).
- **Tailwind como única fonte de tokens** -
  mencionado no nó 3 como caminho possível
  (`tailwind.config.js` com `theme.extend`
  + CSS variables). Mas a trilha cobre
  Style Dictionary como caminho padrão
  (mais portável, mais maduro em DS).
- **CSS-in-JS (styled-components, emotion)**
  como camada de tokens - fora. A trilha
  assume CSS variables / Style Dictionary
  como caminho. CSS-in-JS ainda funciona,
  mas está saindo de moda em 2026.
- **Component-driven development (CDD) além
  do Storybook** (Histoire, Ladle, PatternLab)
  - Storybook é o padrão. Outros são
  mencionados como "se você não pode usar
  Storybook, considere Histoire (Vue) ou
  Ladle (mais leve)".
- **Versionamento independente de pacotes**
  (Lerna, Changesets com monorepo) -
  mencionado no aprofundamento. Setup
  completo pertence a monorepo (Nx,
  Turborepo) - trilha a definir.
- **Migration guides complexos** (codemod
  com jscodeshift) - fora do núcleo.
  Mencionado no aprofundamento do nó 6.
- **Branded types pra tokens** (TypeScript
  puro) - mencionado no aprofundamento.
  Aprofundamento pertence a `typescript-frontend`
  (quando sair).
- **Publicação open source** (CHANGELOG
  detalhado, CONTRIBUTING.md, templates de
  PR/issue, governance) - o projeto final
  mostra o caminho mínimo. Detalhes pertence
  a "manutenção de OSS" (a definir).
- **Storybook para outros frameworks**
  (Vue, Svelte, Angular, React Native) -
  mencionado como "Storybook é multi-framework"
  no aprofundamento. A trilha foca em
  React.

### Aprofundamentos futuros (próximas versões)

Crescimento possível quando a trilha tiver uso
real:

- **Nó extra**: "Storybook para outros
  frameworks" (Vue, Svelte, RN) - se virar
  buraco recorrente.
- **Nó extra**: "Figma Tokens → Style
  Dictionary" (design ops sync) - se virar
  buraco recorrente em time com designer.
- **Nó extra**: "Migration guides com
  codemod" (jscodeshift) - se a lib tiver
  releases com breaking change.
- **Nó extra**: "Branded types e tema
  type-safe" (tema vira parte do tipo) -
  aprofundamento TypeScript, se virar
  demanda.
- **Nó extra**: "Acessibilidade avançada
  em DS" (axe em story, contraste dinâmico,
  prefers-reduced-motion) - complemento da
  `acessibilidade-web`.
- **Trilha-irmã**: "design-ops" (Figma,
  tokens, sync, governança) - se virar
  disciplina separada.
- **Trilha-irmã**: "monorepo para DS" (Nx,
  Turborepo, changesets multi-pkg) - se
  virar dor real.
- **Migração pra Storybook 9** quando
  estabilizar - bump de minor na mesma
  trilha, sem reescrita.
