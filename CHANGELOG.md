# Changelog

Todas as mudanças notáveis deste projeto são documentadas aqui. O formato
segue [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/) e o
projeto adere a [Versionamento Semântico](https://semver.org/lang/pt-BR/).

## [Não liberado]

## [1.18.1] - 2026-08-26

### Adicionado
- 🆕 **Selo "novo"** na trilha Estruturas de Dados: campo `published: "2026-08-26"` no `roadmaps/estruturas-de-dados/roadmap.json` ativa o `<NewBadge>` no `TrilhaCard` (janela de 30 dias, avaliada no client). Sem mudança de conteúdo, só metadata.

## [1.18.0] - 2026-08-25

### Adicionado

- 🧮 **Trilha Estruturas de Dados** (`roadmaps/estruturas-de-dados`, 14 nós):
  aprofundamento em estruturas de dados, complemento a
  `fundamentos-de-cs` (que cobre ED em 1 nó panorâmico) e a
  `complexidade-de-algoritmos` (que cobre Big O). Público: dev
  júnior/pleno querendo nivelar pra entrevistas técnicas, dev
  backend/sistemas curioso pra entender o que está por baixo das
  estruturas da sua linguagem, e universitário complementando a
  matéria de ED em PT-BR. Estruturada com **três camadas por nó**
  (🟢 Essencial / 🟡 Aprofundamento / 🔴 Pra quem quer ir além) e
  um **nó 0 de auto-diagnóstico** (10 perguntas) que devolve perfil
  e marca quais camadas focar. Os 14 nós: `auto-diagnostico` (quiz
  de 10 perguntas pra perfilar o aluno), `arrays-listas` (sequências
  e memória - array contíguo, linked list, cache locality, 2
  diagramas Mermaid), `pilhas-filas` (LIFO/FIFO, call stack, ring
  buffer, ✅ checkpoint de parênteses balanceados), `hash-tables`
  (hash, colisão por chaining vs open addressing, load factor,
  redimensionamento, Bloom filter, ✅ checkpoint de detecção de
  duplicatas com `Set`), `recursao-pratica` (recursão com árvores e
  grafos, divide-and-conquer, memoization, Master theorem como
  leitura), `arvores-anatomia` (terminologia - raiz/folha/altura/
  profundidade/subárvore - e 3 travessias: pré/em/pós-ordem + BFS),
  `bst` (inserção, busca, remoção, por que BST pura vira `O(n)`,
  ✅ checkpoint de busca em BST), `arvores-balanceadas` (AVL vs
  Red-Black, rotações, B-tree de banco como menção), `heaps` (min/
  max heap, `heapq` em Python, `heapify` em `O(n)`, heapsort,
  Fibonacci heap como leitura), `grafos-representacao` (lista de
  adjacência vs matriz, direcionado/ponderado, DAG, grafos
  implícitos), `grafos-traversia` (BFS com reconstrução de
  caminho, DFS recursivo e iterativo, ordenação topológica,
  Kosaraju/Tarjan como leitura), `grafos-algoritmos` (Dijkstra,
  Bellman-Ford, Floyd-Warshall, Prim/Kruskal MST), `tries`
  (autocomplete, Aho-Corasick, radix tree, suffix tree) e
  `projeto-final` (medir de verdade, ✅ checkpoint de anagramas).
  **Interatividade: 13 quizzes formativos, 11 diagramas Mermaid,
  4 checkpoints validados** em JS (1 a cada ~3-4 nós - bate a meta
  E16-2 pra trilhas JS-executáveis). Decisões editoriais em
  `roadmaps/estruturas-de-dados/meta/editorial-decisions.md`.

## [1.17.0] - 2026-08-25

### Adicionado

- 🎓 **Trilha Fundamentos de Ciência da Computação** (`roadmaps/fundamentos-de-cs`, 10
  nós): o "mínimo viável de CS" que serve como base comum pra qualquer trilha
  específica. Estruturada pra servir quatro públicos simultaneamente
  (iniciante querendo virar dev, dev júnior/pleno nivelando, universitário
  complementando curso, dev experiente revisando) via **profundidade
  progressiva** dentro de cada nó, com três camadas por nó (🟢 Essencial /
  🟡 Aprofundamento / 🔴 Pra quem quer ir além) e um **nó 0 de
  auto-diagnóstico** que devolve perfil e marca quais camadas pular ou
  focar. Os 10 nós: `auto-diagnostico` (quiz de 8 perguntas, devolve
  perfil), `como-um-computador-funciona` (von Neumann, CPU/memória/I/O,
  ciclo de instrução), `representacao-de-dados` (binário, hex, encoding,
  endianness, IEEE 754), `logica-e-pensamento-computacional`
  (decomposição, padrões, abstração, algoritmos, lógica booleana),
  `algoritmos-e-complexidade` (Big-O e por que importa na prática,
  apontando pra trilha `complexidade-de-algoritmos`),
  `estruturas-de-dados-fundamentais` (array, lista, hash, árvore, grafo,
  quando usar cada), `memoria-stack-heap` (stack vs heap, ciclo de
  vida, GC vs manual, escape analysis), `do-codigo-a-execucao`
  (AOT/bytecode/JIT, linkagem, otimizações), `redes-o-minimo`
  (DNS/TCP/HTTP/TLS, o que acontece num `fetch`, latência vs banda,
  diagrama de sequência Mermaid) e `pensando-em-sistemas`
  (decomposição, contratos, composição, DDD, teoria dos tipos). Não
  conflita com `programacao-do-zero` (prática de código, pré-requisito
  recomendado) nem com `complexidade-de-algoritmos` (específica, este
  nó 5 é a introdutória). Decisões editoriais completas em
  `roadmaps/fundamentos-de-cs/meta/editorial-decisions.md`.

## [1.16.1] - 2026-08-25

### Alterado

- ✏️ **Bootcamp Desenvolvedor Backend** (`bootcamps/desenvolvedor-backend`):
  descrição reescrita pra refletir as 5 mudanças da v1.16.0 (TS, NoSQL, 3
  novos nós no backend). Versão mais narrativa, menciona os 5 projetos
  do caminho e o encurtador de URLs como projeto final. Sem mudança em
  `modules[]` ou `outcome`.

## [1.16.0] - 2026-08-25

### Adicionado

- 🔷 **Trilha TypeScript** (`roadmaps/typescript`, 12 nós): do "o que é TypeScript
  e por que ele existe" até a integração completa com Express e ORM. Cobre
  tipos primitivos, objetos e arrays, funções tipadas, unions e narrowing,
  generics, tipos utilitários (`Partial`, `Pick`, `Omit`, `Record`,
  `keyof`, `typeof`), configuração do `tsconfig.json`, uso em Node com
  `tsx` + `tsc`, integração com Express (`RequestHandler`, `ErrorRequestHandler`,
  `declare global` em `Express.Request`) e integração com Prisma + Zod.
  Pré-requisito recomendado (não bloqueante) da trilha Backend. Decisões
  editoriais em `roadmaps/typescript/meta/editorial-decisions.md`.
- 🗃️ **Trilha NoSQL** (`roadmaps/nosql`, 10 nós): complemento à trilha de SQL
  cobrindo os dois modelos mais usados em backend — **documento** (MongoDB:
  setup, CRUD, consultas, agregação, embed vs reference) e **chave-valor**
  (Redis: tipos de dados, cache, sessão, rate limit) — fechando com um nó
  de **decisão SQL vs NoSQL** na prática e um projeto final de API com
  Postgres + Redis. Decisões editoriais em
  `roadmaps/nosql/meta/editorial-decisions.md`.
- 🆕 **Três nós novos na trilha Backend** (`roadmaps/backend`, agora 15 nós,
  v1.1.0): `async-aprofundado` (Promises, async/await e o Event Loop,
  inserido entre `javascript-backend` e `express`), `error-handling`
  (Tratamento de Erros em uma API com classes `HttpError` e middleware
  central, inserido entre `express` e `rest-api`) e `debugging` (do
  `console.log` ao `node --inspect` e log estruturado, inserido entre
  `testes` e `projeto-final`). Decisões em
  `roadmaps/backend/meta/editorial-decisions.md` (seção v1.1.0).

### Alterado

- 🎓 **Bootcamp Desenvolvedor Backend** (`bootcamps/desenvolvedor-backend`):
  currículo expandido de 14 pra 16 módulos. Entram as trilhas **TypeScript**
  (logo depois de `programacao-do-zero`, quando a mente sobre JS ainda está
  fresca) e **NoSQL** (logo depois de `modelagem-de-banco`, perto do SQL).
  A descrição e o `outcome` do bootcamp foram atualizados pra refletir
  TypeScript + NoSQL como peças formais do currículo. Estimativa ajustada
  pra 5 meses.

## [1.15.0] - 2026-08-25

### Adicionado

- 🆕 **Campo `published`** (data ISO) no front-matter — quando recente, o site
  mostra um selo "novo" no card/header. Aplicado aos três projetos backend-native
  (`modelagem-de-banco`, `api-rest-com-autenticacao`, `servico-com-docker`).

## [1.14.0] - 2026-08-25

### Adicionado

- 🤖 **Trilha Prompt Engineering** (`roadmaps/prompt-engineering`, 24 nós): do
  zero absoluto (o que é um LLM) até a construção de produtos com IA. Três
  fases lineares — **Básico** (8 nós, "como falar com a máquina sem ficar
  gritando com ela"), **Intermediário** (9 nós, "técnicas que destravam 10× o
  resultado": few-shot, chain-of-thought, decomposição, ReAct/tools, RAG,
  function calling, system vs user prompt, prompts como código) e **Avançado**
  (6 nós + projeto final, "quem constrói produto com IA": avaliação,
  automação/frameworks, agentes, multimodal, segurança, custo/performance).
  Agnóstica de stack (não exige saber programar), com 17 diagramas Mermaid +
  23 quizzes e projeto final que cabe tanto pra dev quanto pra não-dev. Decisões
  editoriais em `roadmaps/prompt-engineering/meta/editorial-decisions.md`.
  Proposta detalhada em `docs/proposals/prompt-engineering.md`.

## [1.13.0] - 2026-08-25

### Adicionado

- 🧩 **Projetos backend-native** (`projects/`): três novos briefs pra dar
  lastro prático à trilha de backend — **Modelagem de um Banco de Dados**
  (`modelagem-de-banco`, SQL puro num mini e-commerce), **API REST com
  Autenticação** (`api-rest-com-autenticacao`, CRUD + login + rotas
  protegidas) e **Empacote um Serviço com Docker** (`servico-com-docker`,
  Dockerfile + Compose subindo app + banco).

### Alterado

- 🎓 **Bootcamp Desenvolvedor Backend** (`bootcamps/desenvolvedor-backend`):
  currículo expandido de 5 pra 14 módulos. Entram as trilhas **Terminal para
  Devs**, **Git**, **Docker Fundamentos** e **Docker Compose e Workflows**, e
  os projetos passam a ser **intercalados** entre as trilhas (Calculadora de
  Gorjeta, Modelagem de Banco, API REST, Serviço com Docker, Busca com
  Filtros) pra equilibrar teoria e prática. Estimativa ajustada pra 4 meses.

## [1.12.0] - 2026-08-25

### Adicionado

- 🔎 **Trilha SEO, AEO e GEO** (`roadmaps/seo-aeo-geo`, 13 nós): a fatia
  técnica de SEO (on-page, técnico, robots.txt, sitemap, Core Web Vitals,
  E-E-A-T, dados estruturados, link building) seguida dos dois módulos mais
  recentes — **AEO** (otimização pra featured snippets e busca por voz) e
  **GEO** (otimização pra ser citado em respostas de IA generativa como
  ChatGPT e Perplexity, ancorado no estudo do KDD 2024). Pré-requisito:
  trilha **HTML**. Decisões editoriais em
  `roadmaps/seo-aeo-geo/meta/editorial-decisions.md`. Contribuição de
  Breno Alvim (#18).

## [1.11.0] - 2026-08-25

### Adicionado

- 💻 **Trilha Terminal para Devs** (`roadmaps/terminal-para-devs`, 15 nós):
  do básico do shell (navegação, arquivos, permissões) a pipes/redirecionamento,
  processamento de texto, processos, variáveis de ambiente, rede, SSH e um
  projeto final. Contribuição de Luciano dii Souza.

## [1.10.0] - 2026-08-25

### Adicionado

- 🎓 **Bootcamps** (`bootcamps/<slug>/bootcamp.json`): novo tipo de conteúdo que
  agrupa trilhas + projetos numa jornada com resultado. Primeiro bootcamp:
  **Desenvolvedor Backend** (programação → SQL → backend → algoritmos → projeto).
  Schema, validação de integridade referencial e template documentados.
- ✅ **Interatividade nas trilhas**: checkpoints validados (`<Checkpoint>` JS e
  `<VisualCheckpoint>` DOM/CSS) e quizzes formativos (`<Quiz>`) espalhados pelas
  trilhas (JS, CSS, HTML, git, SQL, etc.) — 19 checkpoints + 15 quizzes.
- 🎬 **Vídeo de introdução opcional** nas trilhas (`intro_video` no
  `roadmap.json`), exibido no header.
- 📄 CONTRIBUTING/templates atualizados (interatividade + bootcamp).

## [1.9.0] - 2026-08-25

### Adicionado

- 🐳 **Trilha de Docker Fundamentos** (`roadmaps/docker-fundamentos`,
  10 nós, intermediário): containers do zero ao empacotar uma
  aplicação. Cobre ciclo de vida (`run`/`ps`/`logs`/`exec`/`stop`/`rm`),
  imagens e layers, Dockerfile, volumes, networks bridge com DNS
  interno, imagens enxutas (alpine, `.dockerignore`, multi-stage
  build) e projeto final com `HEALTHCHECK`. Inclui 4 diagramas
  Mermaid (arquitetura VM vs container, layers, topologia de rede,
  fluxo multi-stage).
- 🐙 **Trilha de Docker Compose e Workflows**
  (`roadmaps/docker-compose-e-workflows`, 8 nós, intermediário):
  orquestrar uma stack com `docker-compose.yml`. Cobre `services`
  com `depends_on: condition: service_healthy`, `.env` e
  `.env.example`, volumes nomeados vs bind mounts, profiles,
  `docker compose watch` e projeto final de stack realista
  (app + Postgres + Redis). Inclui 2 diagramas Mermaid (DNS
  interno e topologia da stack).
- ☸️ **Trilha de Kubernetes** (`roadmaps/kubernetes`, 12 nós,
  avançado): orquestração em escala. Cobre arquitetura do cluster
  (control plane + workers), `minikube` ou `k3d` local, `kubectl`
  no dia a dia, Pods, Deployments, Services, ConfigMaps, Secrets,
  PV/PVC com StatefulSet, Ingress, probes (startup/liveness/
  readiness) + HPA + resource limits, Helm (charts, values,
  Artifact Hub) e projeto final de stack completa no cluster.
  Inclui 4 diagramas Mermaid (arquitetura do cluster, anatomia
  do Pod, tipos de Service, fluxo de request com Ingress).
- 📐 **Diagramas no conteúdo via `<Mermaid>`**: nova convenção
  documentada em `docs/style-guide.md` (seção 8), `CONTRIBUTING.md`
  e `templates/node.mdx`. O componente `<Mermaid>` é renderizado
  pelo app (`primo-academy`) e suporta toda a sintaxe Mermaid
  (flowchart, sequence, class, state, ER).

## [1.8.0] - 2026-08-25

### Adicionado

- 🆕 Trilha **SQL e Banco de Dados** (14 nós, iniciante): SQL puro do zero,
  sem depender de nenhum ORM — modelagem de entidades, normalização
  (1FN/2FN/3FN), tipos de dados, `CREATE TABLE` e restrições,
  `SELECT`/`WHERE`/`ORDER BY`/`LIMIT`, `INSERT`/`UPDATE`/`DELETE`,
  relacionamentos e `JOIN`, agregação (`GROUP BY`/`HAVING`), subqueries e
  CTE (`WITH`), índices e performance, transações e ACID, e SQL injection,
  fechando com um projeto final de modelar e popular um banco. Fecha a
  lacuna da trilha de Backend, que usa Prisma sobre PostgreSQL sem ensinar
  SQL puro. Sintaxe de referência em PostgreSQL, mas majoritariamente ANSI
  SQL. Decisões editoriais em
  `roadmaps/sql-banco-de-dados/meta/editorial-decisions.md`. Contribuição de
  Breno Alvim ([@obrenoalvim](https://github.com/obrenoalvim)).

## [1.7.0] - 2026-08-24

### Adicionado

- 🆕 Trilha **Backend** (12 nós, intermediário): do HTTP e Node.js até uma
  API completa em Express, com banco de dados, autenticação, ORM,
  validação, testes e projeto final. Registro adicionado retroativamente
  (a v1.7.0 foi lançada sem entrada no changelog).

## [1.6.0] - 2026-08-24

### Adicionado

- 🏷️ **Campo `skills` nas trilhas** (`roadmaps/*/roadmap.json`): array de
  tópicos/techs que cada trilha cobre. Alimenta a busca e os filtros por
  tópico no índice do site. Campo opcional e aditivo — não altera nós nem
  metadados existentes.

## [1.5.0] - 2026-08-24

### Mudado

- 🔀 **Split da trilha CSS** (v1.4.0, 36 nós) em **4 trilhas menores**:
  - **`css-fundamentos`** (15 nós): introdução, incluindo CSS, seletores
    básicos, combinadores, cores, unidades, tipografia, box model,
    display, backgrounds, sombras, pseudo-classes, pseudo-elementos,
    cascata/especificidade, DevTools. Pré-requisito pras outras 3.
  - **`css-layout`** (10 nós, intermediário): position, **Flexbox
    aprofundado em 4 nós** (introdução, container, itens, casos),
    **Grid aprofundado em 4 nós** (introdução, container, itens, casos),
    responsividade com media queries + mobile-first.
  - **`css-animacoes`** (6 nós, intermediário): transições, transform
    (2D/3D), animações básicas (`@keyframes`), animações avançadas
    (cubic-bezier, steps, will-change), casos animados (spinner,
    skeleton, modal, toast), **acessibilidade visual** com
    `prefers-reduced-motion`, dark mode (`prefers-color-scheme`),
    `prefers-contrast` e `forced-colors`.
  - **`css-moderno`** (9 nós, avançado): variáveis CSS (custom
    properties) e theming, funções modernas (`clamp`, `min`, `max`,
    `calc`), Container Queries, `:has()`, Logical Properties,
    arquitetura (BEM, Tailwind, CSS-in-JS, trade-offs), performance
    (reflow/repaint/composite, critical CSS, content-visibility), o
    mundo além do CSS puro (frameworks, pré-processadores), e projeto
    final de landing page com critérios cobrindo as 4 trilhas.

  Decisões editoriais detalhadas em
  `roadmaps/{css-fundamentos,css-layout,css-animacoes,css-moderno}/meta/editorial-decisions.md`.

### Removido

- 🗑️ Trilha única `css/` (v1.4.0, 36 nós) — todo o conteúdo foi
  migrado para as 4 trilhas acima com preservação, consolidação
  (cascata+especificidade+herança viraram 1 nó) e aprofundamento
  (Flexbox/Grid/animação ganharam mais nós).

## [1.4.0] - 2026-08-24

### Adicionado

- 🆕 Trilha **CSS** completa (36 nós, do zero absoluto até o avançado),
  estruturada em 3 tópicos macro + 1 milestone de projeto final:
  - **CSS do Zero** (10 subtopics): introdução, inclusão, seletores,
    cores, tipografia, box model, display, unidades, pseudo-classes
    básicas, DevTools.
  - **CSS Intermediário** (10 subtopics): especificidade, cascata e
    herança, combinadores, pseudo-elementos, position, Flexbox,
    backgrounds, sombras, transições, responsividade.
  - **CSS Avançado** (12 subtopics): Grid, variáveis CSS, animações,
    transform (2D/3D), funções modernas (`clamp`, `min`, `max`,
    `calc`), container queries, `:has()`, logical properties,
    acessibilidade visual, arquitetura (BEM), performance, "o mundo
    além do CSS puro" (frameworks e ferramentas como mapa de opções,
    sem tutorial).
  - **Projeto final** (milestone): landing page completa e responsiva
    com checklist de aceitação.
- 🆕 Tipo de conteúdo **Projetos** (`projects/`): desafios práticos
  que exercitam o que as trilhas ensinam. Seed inicial com 9 projetos:
  - Iniciante: `pagina-de-perfil` (HTML/CSS), `calculadora-de-gorjeta`
    (JS/DOM), `lista-de-tarefas` (JS/DOM).
  - Intermediário: `landing-page-responsiva` (CSS/Tailwind),
    `clima-agora` (API), `quiz-react` (React/hooks), `busca-com-filtros`
    (algoritmos).
  - Avançado: `encurtador-de-url` (system design), `dashboard-analitico`
    (React/perf).
- 📜 `projects/README.md` e `templates/{node,project}.mdx` +
  `templates/roadmap.json` para scaffold.
- 📜 `README.md` - lista a nova trilha CSS, menciona a seção de
  Projetos, atualiza o badge de contagem de trilhas (5 → 6) e adiciona
  badge de projetos.

### Mudado

- 🔄 Trilha **Complexidade de Algoritmos** - substituição completa da
  estrutura de nós. A versão anterior (`introducao` → `quadratico` →
  `notacao-big-o` → ... → `analise-amortizada`, 13 nós) foi
  substituída por uma versão reorganizada com 13 nós
  (`por-que-medir` → `contando-operacoes` → `big-o` → `classes-comuns`
  → `casos` → `espaco` → `loops-condicionais` → `recursao` →
  `estruturas-de-dados` → `padroes-classicos` → `busca-binaria` →
  `na-pratica` → `projeto-final`). A nova versão é mais "intuitiva"
  (entra pela pergunta "por que medir" e segue por classes comuns /
  análise de loops / recursão / estruturas de dados / padrões
  clássicos) e troca "análise amortizada" por "na prática: quando
  Big O mente" (mais aplicado). Detalhes em
  `roadmaps/complexidade-de-algoritmos/meta/editorial-decisions.md`.

## [1.3.0] - 2026-08-24

### Adicionado

- 🆕 Trilha **Git** completa (23 nós, do controle de versão do zero ao
  avançado), cobrindo básico, intermediário e avançado com prática em cada
  nível e um projeto final de contribuição open source:
  - **Básico** (`introducao` → `desfazer`): o que é controle de versão,
    instalação/config, repositório (`init`/`clone`), ciclo `add`/`commit`,
    `.gitignore`, histórico (`log`/`show`/`diff`), desfazer
    (`restore`/`reset`/`revert`).
  - **Intermediário** (`branches` → `tags-releases`): branches, merge,
    conflitos, remotos (`fetch`/`pull`/`push`), GitHub (fork/PR/`upstream`),
    stash, tags + SemVer.
  - **Avançado** (`rebase` → `workflows`): rebase e rebase interativo,
    cherry-pick, reflog, bisect, reescrita de história
    (`--force-with-lease`, `filter-repo`), git hooks, workflows
    (Git Flow / Trunk-Based / Conventional Commits).
  - **Projeto final** (`projeto-final`): abrir um Pull Request real em
    open source, do fork ao merge.
- 📜 `roadmaps/git/meta/editorial-decisions.md` com as decisões de escopo
  e curadoria da trilha.
- 👤 Campo `creators` no `roadmap.json` da trilha Git (autor creditado na
  página inicial da trilha no app).

### Mudado

- 📘 `README.md` - lista a nova trilha Git e atualiza o badge de contagem
  de trilhas (3 → 4).

## [1.2.0] - 2026-08-23

### Adicionado

- 🆕 Trilha **Programação do Zero** migrada do monorepo `primo-academy`
  (13 nós, do pensamento computacional ao primeiro projeto).
- 🆕 Trilha **Frontend** migrada do monorepo (12 nós, da web até React).
- 📜 Documentação de decisões editoriais para cada trilha nova
  (`roadmaps/<slug>/meta/editorial-decisions.md`).
- 🛠️ Script `scripts/sync-consumer.example.sh` - exemplo de **sync
  smart e incremental** para o consumer (monorepo `primo-academy`):
  - Shallow + sparse clone (só baixa a pasta `roadmaps/`)
  - Diff com o último commit sincronizado (`.content-version`)
  - Copia **só** os arquivos que mudaram
  - Exit 0 em ~1s se nada mudou

### Mudado

- 🔧 `scripts/lint.mjs` - agora entende que **fechadores** de bloco
  (` ``` ` puro) são OK em markdown; só avisa sobre **aberturas**
  sem linguagem.

### Compatibilidade

- ⚠️ **Breaking conceitual** (não técnico): conteúdo não usa mais
  `<PyPlayground>` / `<Playground>`. Substituído por blocos de código
  puros. O app, se quiser playgrounds interativos, deve detectá-los
  pela linguagem (`python` / `javascript` / `jsx`) e transformá-los
  no build. Documentado no `scripts/sync-consumer.example.sh`.

### Validação

```
validate.mjs   → 3 trilhas, 43 nós, 0 erros
lint.mjs       → 0 erros, 0 avisos
check-links    → 80 ok, 0 com problema
```

## [1.1.0] - 2026-08-23

### Adicionado

- ➕ 4 nós novos na trilha HTML (14 → 18 nós):
  - `i18n-basico` (após `textos`) - `lang` em elementos, `<bdi>`, `<bdo>`,
    `<ruby>` para conteúdo multilíngue.
  - `atributos-globais` (após `semantica`) - `hidden`, `data-*`,
    `tabindex`, `contenteditable`, `draggable`, `spellcheck`, `dir`,
    `translate`, `role`.
  - `template-clone` (após `midia`) - `<template>` e `cloneNode(true)`,
    base de Web Components e renderização de frameworks.
  - `html-deprecated` (antes de `projeto-final`) - elementos
    (`<center>`, `<font>`, `<marquee>`, `<frame>`, `<bgsound>`,
    `<blink>`) e atributos que caíram em desuso, com alternativas
    modernas.

### Mudanças editoriais

- Trilha permanece no escopo **iniciante**, mas cobre agora
  aproximadamente **90%+ do HTML que devs usam no dia-a-dia**.
- `template-clone` é introdutório (conceito simples, fica na trilha),
  mas abre a porta para **Web Components** que serão tema de trilha
  intermediária no futuro.

## [1.0.0] - 2026-08-23

### Adicionado

- 🆕 Trilha **HTML** completa (14 nós, do zero absoluto até projeto final).
  - `introducao` - O que é HTML, como a web funciona.
  - `estrutura-basica` - DOCTYPE, html, head, body, viewport, title.
  - `textos` - Headings, parágrafos, ênfase, citação, sigla, atalho.
  - `links` - Tag `<a>`, caminhos, âncoras, `target`/`rel`, `mailto`/`tel`.
  - `imagens` - `<img>`, `alt`, `srcset`/`sizes`, `<picture>`, `<figure>`,
    SVG inline.
  - `listas` - `<ul>`, `<ol>`, `<dl>`, aninhamento.
  - `tabelas` - `<table>`, `<thead>`/`<tbody>`/`<tfoot>`, `<caption>`,
    `scope`, `colspan`/`rowspan`.
  - `formularios-basicos` - `<form>`, `<label>`, `<input>`, tipos comuns,
    `name`, `id`, `required`, `<fieldset>`, `<legend>`, `<button>`.
  - `formularios-avancados` - `<select>`, `<optgroup>`, `<datalist>`,
    `<textarea>`, validação nativa, `pattern`, `setCustomValidity`.
  - `semantica` - Landmarks (`header`/`nav`/`main`/`article`/`section`/
    `aside`/`footer`/`address`), hierarquia de headings, `<article>` vs
    `<section>` vs `<div>`.
  - `midia` - `<video>`, `<audio>`, `<source>`, `<track>`, `<iframe>`,
    menção a `<canvas>`/`<svg>`.
  - `acessibilidade` - POUR/WCAG, ARIA, foco de teclado, contraste,
    formulários acessíveis, ferramentas de teste.
  - `meta-seo` - `<title>`, `description`, Open Graph, Twitter Card,
    favicon, canonical, `hreflang`.
  - `projeto-final` - Briefing, estrutura, checklist de qualidade,
    esqueleto completo, publicação.
- 📚 Documentação:
  - `README.md` - visão geral, links, estrutura, licença.
  - `CONTRIBUTING.md` - passo a passo de contribuição, cenários
    (typo, recurso, nó, trilha), anatomia de `.mdx` e `roadmap.json`.
  - `docs/style-guide.md` - voz, tom, profundidade, curadoria.
  - `CODE_OF_CONDUCT.md` - baseado no Contributor Covenant 2.1.
  - `LICENSE` - AGPL-3.0 (código) + CC BY-SA 4.0 (conteúdo).
  - `CODEOWNERS` - Luciano como owner de tudo (revisão centralizada
    no início).
- 🛠️ Infra:
  - Templates de issue (bug, trilha nova, nó novo, melhoria de
    recurso) e PR.
  - GitHub Actions: `validate-content`, `lint-markdown`, `check-links`
    (best-effort).
  - Scripts `validate.mjs`, `lint.mjs`, `check-links.mjs` em Node puro
    (sem dependências externas).

### Créditos

- Trilha escrita por **Luciano de Souza**
  ([@lucianodiisouza](https://github.com/lucianodiisouza)).
- Recursos curados a partir de MDN PT-BR, WCAG (W3C), web.dev e
  Open Graph Protocol.

[Não liberado]: https://github.com/lucianodiisouza/aprenda-community/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/lucianodiisouza/aprenda-community/releases/tag/v1.0.0
