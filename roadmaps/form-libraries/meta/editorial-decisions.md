# Decisões editoriais - Trilha de Form Libraries (React Hook Form + Zod)

> Histórico de decisões de escopo, organização e curadoria da trilha
> de Form Libraries. Quando a trilha ganha ou perde um nó, isso fica
> registrado aqui.

## v1.0.0 - Criação inicial (2026-08-29)

### Origem e motivação

A trilha nasce de um buraco real: a `frontend` cobre o básico de
`<form>`, `onSubmit`, `useState` por campo, e `fetch`. Funciona pra
formulário de 2 campos. **Quebra** em qualquer coisa de produção -
checkout, cadastro completo, multi-step, formulários com lógica de
validação complexa.

A `nextjs` cobre Server Actions (mutations no servidor), e isso resolve
o "pra onde vai o POST", mas não resolve o "como eu controlo 30
campos sem meu app travar". A pergunta que fica é: **como construir
formulários em React que performam bem, validam direito, e ainda
são agradáveis de manter?**

A resposta da indústria é um stack bem definido:

- **React Hook Form** - performance (uncontrolled por padrão, re-render
  só do que muda) + DX (hooks ergonômicos, validação plugável).
- **Zod** (ou Valibot) - schema declarativo que serve pra validação
  no client e validação no server, com type-safety ponta a ponta.

A trilha ensina os dois juntos porque eles se complementam: RHF
cuida do "como", Zod cuida do "o que é válido". Quem termina essa
trilha consegue construir um checkout de produção sem dor.

### Decisão de público: intermediário, com piso em React

Público-alvo declarado:

- **Dev júnior/pleno front** que terminou `frontend` e quer parar de
  gerenciar `value`/`onChange` de 20 inputs na mão.
- **Dev pleno** mantendo formulário de produção que precisa
  adicionar validação sem refatorar tudo.
- **Dev full-stack** que quer reusar o mesmo schema no front e no
  back (Node, Bun, Deno).
- **Tech lead** decidindo se vale a dupla RHF + Zod vs. alternativas
  (Formik, React Final Form, Yup, Valibot).

A trilha assume que a pessoa já:

- Confortável com React (componentes, hooks, props, state, context).
- Já fez pelo menos um formulário HTML em React (controlado, com
  `useState` por campo).
- Noções de TypeScript no front (a dupla é fortemente tipada; a
  trilha é toda em TS).
- Terminou (ou equivalente) a trilha `frontend` do aprenda-community.
- Confortável com promises e fetch (a parte de validação server
  pressupõe `fetch` ou `axios`).

A trilha **não assume** conhecimento prévio de:

- React Hook Form (zero - é o que se ensina aqui).
- Zod, Yup, Valibot ou qualquer lib de schema. A trilha cobre Zod
  do zero.
- Server Actions do Next.js. A trilha usa `fetch` puro pra cobrir o
  caminho client + API independente de framework. Quem usa Next
  pode adaptar o exemplo pra Server Action, mas não é requisito.
- Qualquer framework de UI específico (shadcn, MUI, Chakra). Os
  exemplos usam HTML nativo + classes Tailwind opcionais.

### Escopo: o que entra e o que fica de fora

**Dentro do núcleo (6 nós + 1 projeto final = 7 entradas):**

1. `por-que-form-libraries` - O custo real de um formulário controlado
   com `useState` por campo em forms grandes. Validação síncrona vs
   assíncrona. Por que existem libs e o que cada uma resolve.
2. `react-hook-form-basico` - `useForm`, `register`, `handleSubmit`,
   `formState`, `errors`. Anatomia do hook principal.
3. `validacao-com-zod` - Schemas Zod (`z.object`, `z.string`, refinements),
   `zodResolver` do RHF, inferência de tipo (`z.infer<typeof Schema>`).
   Type-safety do schema até o `onSubmit`.
4. `padroes-form` - Field arrays (`useFieldArray`), campos condicionais
   (`watch` + render condicional), controlled vs uncontrolled inputs
   com RHF, validação por campo vs por formulário.
5. `multi-step-forms` - Wizard com state por step, validação por step
   antes de avançar, persistência local (recupera se o user fechar a
   aba), indicador de progresso.
6. `validacao-server` - Reuso do mesmo schema Zod no backend
   (Node/Express, Fastify, ou Server Action do Next), erros remotos
   e como setar no `setError` do RHF, UX de loading e disabled.
7. `projeto-final` - Form de checkout completo (dados pessoais,
   endereço, pagamento mockado, revisão) com validação ponta a ponta,
   persistência entre steps, e integração com API mockada.

**Fora do núcleo (intencionalmente, v1.0.0):**

- **Alternativas ao React Hook Form** (Formik, React Final Form,
  Conform, TanStack Form) - mencionadas no nó 1 como contexto, sem
  aprofundamento. A trilha é 100% RHF.
- **Alternativas ao Zod** (Yup, Valibot, Joi, ArkType) - Valibot
  aparece como menção no nó 3 (mesma filosofia, bundle menor).
  Aprofundamento de Valibot fica pra um nó futuro se virar
  dúvida recorrente.
- **UI lib de formulários** (react-hook-form com shadcn, MUI,
  Chakra, Ant Design) - a trilha usa HTML nativo + classes
  opcionais. A integração com libs de UI é trivial
  (`Controller` + `as` prop) e fica mencionada no nó 4.
- **Validação assíncrona complexa** (debounce de username, checagem
  de CEP em API externa) - menção no nó 4. Aprofundamento
  pertence a `performance-web` (debounce) e a um futuro
  "integrações com API".
- **File uploads** (foto de perfil, anexo) - pertence à trilha
  `uploads-e-storage` (a definir, ou a `cloudflare-r2-uploads`
  quando sair). O form de checkout do projeto final não
  inclui upload.
- **Máscaras de input** (CPF, telefone, moeda) - pertence a
  `mascaras-e-formatacao` (a definir). A trilha usa input
  cru; quem precisar de máscara integra `@react-input/mask`
  ou similar por fora.
- **i18n de mensagens de erro** - pertence a `i18n-l10n`
  (issue #53). A trilha usa mensagens em PT-BR fixas no schema.
- **Acessibilidade avançada** (ARIA live regions pra erro,
  navegação por teclado em wizard) - WCAG introdutória já está
  na `frontend`. Aprofundamento de a11y em form pertence a
  `acessibilidade-avancada` (issue #50). A trilha cobre o
  mínimo (label associado, `aria-invalid` nos campos com erro).
- **Testes de formulário** (React Testing Library, Playwright) -
  pertence a `testing-frontend` (issue #54). O projeto final
  inclui 1 teste mínimo pra mostrar o caminho.
- **Conform / Remix Form** (form-first RSC) - pertence ao
  futuro RSC do `nextjs`. A trilha cobre o caminho client
  + API, que serve pra qualquer framework.
- **TanStack Form** - pertence a uma futura trilha de
  "Form: state machines". Menção no nó 1 como "concorrente
  séria, vale olhar".

### Conflitos e encaixe com trilhas existentes

- **`frontend`** - pré-requisito. Os nós `react`, `state-hooks`,
  `forms-http` e `estilizacao` são a base. A nova trilha **não
  repete** conteúdo desses nós - cita e segue. O nó
  `forms-http` ensina `<form>` + `onSubmit` + `fetch`; aqui
  entramos em libs de produção.
- **`nextjs`** - leitura recomendada, não pré-requisito. O nó
  `validacao-server` mostra o caminho "API separada" (fetch +
  POST), que é agnóstico de framework. Quem usa Next pode
  substituir o `fetch` por `Server Action` ou `route handler`
  sem mudar o resto do form. A trilha não cobre Server
  Actions porque já está na `nextjs`.
- **`typescript`** - pré-requisito solto. A trilha é 100% TS.
  Quem não tem `typescript-frontend` (que ainda não existe
  como trilha dedicada, vide `editorial-decisions.md` da
  `nextjs`) pode seguir, mas vai precisar consultar a
  trilha `typescript` pra entender `z.infer`, generics de
  hook, e narrowing. O nó 3 (`validacao-com-zod`) explica
  o que precisa de TS, sem assumir domínio profundo.
- **`complexidade-de-algoritmos`** - não é pré-requisito.
- **`backend`** - não é pré-requisito. O nó 6
  (`validacao-server`) usa uma API mockada com `fetch` -
  sem aprofundar backend. Quem quiser entender o que
  acontece do outro lado (Express, Fastify, Hono) faz a
  trilha `backend`.
- **`tanstack-query`** - leitura recomendada, não
  pré-requisito. O nó 6 menciona que TanStack Query é
  uma boa escolha pra mutations em forms grandes, mas
  a trilha usa `fetch` puro pra cobrir o caso geral.
  Quem já fez `tanstack-query` consegue ler o nó 6
  com mais profundidade, mas não precisa.

### Pré-requisito TS-frontend (lacuna conhecida)

Mesma situação da `nextjs`: a meta-issue #41 lista
`typescript-frontend` como "aprofundamento a decidir". Em
2026-08-29, essa trilha **não existe**.

**Decisão:** a trilha é toda em TS, mas não assume domínio
profundo. Conceitos que aparecem e que estão cobertos pela
`typescript` existente (tipos primitivos, generics simples,
`z.infer` no Zod) são explicados brevemente no contexto.
Conceitos mais avançados (utility types, branded types,
discriminated unions em variants de input) **não** são
usados - a trilha é pragmática, não academicista.

Quando a `typescript-frontend` sair, esta trilha deve ser
linkada como leitura recomendada na home dela.

### Formato dos nós (camadas 🟢🟡🔴)

Igual à `nextjs` e à `tanstack-query`. Cada nó `.mdx` segue
o esqueleto de três camadas:

- 🟢 **Essencial** - o "todo mundo precisa saber". Inclusivo,
  sem jargão. É onde a pessoa investe a maior parte do
  tempo.
- 🟡 **Aprofundamento** - liga o conceito com a prática
  real de dev: "onde isso aparece no dia a dia, que
  armadilha existe, que otimização isso destrava".
- 🔴 **Pra quem quer ir além** - referências acadêmicas,
  posts do mantenedor, RFCs, ou "leitura recomendada pra
  se aprofundar".

O **projeto final** é exceção: é um brief de projeto, não
segue o esqueleto de 3 camadas (segue o template de
`projects/<slug>.mdx` com seções Objetivo, Requisitos,
Desafios extras, Dicas).

### Decisões de curadoria

- **PT-BR primeiro.** Recursos em inglês só quando canônicos
  (React Hook Form docs, Zod docs, posts do mantenedor).
- **`type` sempre preenchido** (`artigo` | `video` | `curso`
  | `doc` | `exercicio`).
- **Mínimo 1, máximo 3 recursos por nó.** Em geral 2.
- **Sem recursos pagos.**
- **Diagramas Mermaid** via componente `<Mermaid>`. Candidatos:
  - `multi-step-forms`: máquina de estados do wizard
    (step atual, próximo, voltar, validação por step).
  - `validacao-server`: fluxo do mesmo schema sendo
    usado em client (Zod parse no submit) e server
    (Zod parse no handler da API).
- **Quizzes formativos** (componente `<Quiz>`) ao final de
  **cada nó** - 1 pergunta, 3 opções, com `explanation`
  em cada. Formativos, **não creditam XP**.
- **Checkpoints validados** (componente `<Checkpoint>`)
  em 3 nós onde a prática em código se valida
  automaticamente: `validacao-com-zod` (criar schema
  Zod + tipar o form), `multi-step-forms` (lógica de
  avançar step), `projeto-final` (teste E2E do fluxo
  principal). Total: **3 checkpoints**.
- **Exemplos em TypeScript** (a trilha é React + TS, sem
  exceção). Quando o exemplo depende de versão (Zod 3 vs
  4, RHF 7 vs 8), marca a versão no snippet pra evitar
  drift.

### Stack da trilha

- **React Hook Form 7.x** (a versão estável atual, com
  suporte a `useForm` hook, `useFieldArray`, `useController`,
  `useFormContext`).
- **Zod 3.x** (a versão estável atual; Zod 4 está em beta
  em 2026-08 e tem mudanças pequenas no output de tipos).
- **@hookform/resolvers** (o pacote oficial que conecta Zod,
  Yup, Valibot etc. ao RHF via `zodResolver(schema)`).
- **Node 20+** e **fetch nativo** no exemplo do nó 6
  (sem `axios`).
- **Tailwind opcional** nos exemplos visuais (a trilha usa
  classes utilitárias quando o CSS ajuda, mas os exemplos
  rodam com qualquer estilização - é só cosmético).

### O que ficou de fora (intencionalmente, v1.0.0)

- **Integração com react-hook-form + Server Components** (RSC) -
  fora. Pertence à `nextjs` (que cobre Server Actions e
  formulários com `useFormState` / `useActionState` em RSC).
  Aqui a gente cobre o caminho client + API que funciona em
  qualquer framework.
- **Validação com TypeScript puro (sem Zod)** - fora. A
  premissa da trilha é que o schema declarativo tem ganho
  real vs. `if (typeof x !== "string") return error`. Quem
  defende o caminho "sem Zod" faz manualmente - a trilha
  não cobre esse caso.
- **Form state management global** (Zustand + RHF) - fora.
  RHF já tem `useFormContext` pra isso. Aprofundamento
  pertence a `state-management-frontend` (a definir).
- **Múltiplos formulários na mesma página** com state
  compartilhado - fora do núcleo. Mencionado brevemente
  no nó 4 (via `useFormContext`).
- **Persistência avançada** (IndexedDB, sync com servidor) -
  fora. O nó 5 (`multi-step-forms`) usa `localStorage` como
  exemplo simples, suficiente pra wizard. Persistência
  robusta (offline-first) pertence a `pwa-offline-first`
  (issue #51).
- **Validação por schema dinâmico** (schema que muda em
  runtime baseado em feature flag) - fora. Mencionado como
  armadilha comum no nó 3.

### Aprofundamentos futuros (próximas versões)

Crescimento possível quando a trilha tiver uso real:

- **Nó extra**: "Validação assíncrona: debounce, checagem de
  username em API, CEP em API externa" - se virar buraco
  recorrente.
- **Nó extra**: "Composição de formulários com shadcn/ui ou
  MUI" - se virar a combo mais pedida.
- **Nó extra**: "Acessibilidade de formulários: ARIA, leitor
  de tela, navegação por teclado" - se a auditoria de a11y
  começar a falhar em forms.
- **Nó extra**: "Testes de formulário: Testing Library +
  Playwright" - se virar pergunta recorrente.
- **Trilha-irmã**: `validacao-de-dados` - se Zod/Valibot
  ganharem uso fora de forms (config validation, env vars,
  API contracts). Hoje o conteúdo cabe aqui; amanhã pode
  virar trilha.
- **Trilha-irmã**: `form-state-machines` (XState, Robot) -
  se multi-step forms com lógica complexa virar dor.
- **Migração pra Zod 4** quando estabilizar - provavelmente
  bump de patch na mesma trilha, sem reescrita.
