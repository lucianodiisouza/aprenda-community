# Decisões editoriais - Trilha de Motion (Animacao Avancada)

> Historico de decisoes de escopo, organizacao e curadoria
> da trilha de Motion. Quando a trilha ganha ou perde um
> no, isso fica registrado aqui.

## v1.0.0 - Criacao inicial (2026-08-29)

### Origem e motivacao

A trilha nasce de um buraco real: a `css-animacoes`
cobre o caminho **CSS** (transition, @keyframes,
animation-delay), que e o fundamento. Mas apps
modernos - landing pages, e-commerce, dashboards
premium - usam **animacao JS declarativa** (Motion)
pra padroes que CSS nao resolve bem: gestural
(pan, drag, swipe), layout animations (FLIP),
AnimatePresence (mount/unmount), exit animations,
spring physics, e orquestracao de varias animacoes
em sequencia.

Alem disso, o **View Transitions API** (suporte
nativo em 2024-2025) mudou o jogo: o browser
ganha suporte first-class pra transicoes entre
estados de pagina (SPA route change, theme toggle)
sem JS extra. E **Rive** + **Lottie** dao acesso
a animacoes vetoriais criadas por designer no
Figma/After Effects, que Motion nao cobre.

A trilha cobre o **caminho React moderno de
animacao**: Motion pra declarativa, View
Transitions pra nativa do browser, Rive/Lottie
pra assets do designer, e a11y (prefers-reduced-motion)
como requisito de design, nao otimizacao do fim.

### Decisao de publico: intermediario, com piso em React + CSS animacao

Publico-alvo declarado:

- **Dev junior/pleno front** que terminou `frontend`
  e quer dar vida a interfaces com animacao
  intencional.
- **Dev pleno** mantendo landing page ou app de
  marketing e quer padronizar as animacoes.
- **Dev de produto** que precisa de feedback
  visual em interacoes (drag, swipe, hover
  intencional).
- **Dev de DS** que quer incluir Motion como
  dependencia da lib de UI com boas praticas.

A trilha assume que a pessoa ja:

- Confortavel com React (componentes, hooks,
  refs). Pre-requisito por design.
- Terminou a trilha `css-animacoes` (ou sabe
  transition, @keyframes, transform, GPU
  acceleration). O pre-requisito da issue.
- Terminou a trilha `frontend` (recomendado, nao
  obrigatorio - Motion funciona com qualquer
  app React).
- Confortavel com TypeScript no front (Motion
  e fortemente tipado).

A trilha **nao assume** conhecimento previo de:

- Motion / Framer Motion - a trilha cobre do zero.
- View Transitions API - idem.
- Rive ou Lottie - mencionados, sem aprofundamento
  (criacao de arquivo .riv/.lottie e trabalho de
  designer).
- Spring physics / animacao avancada - explicado
  do zero, com a intuicao antes da matematica.

### Escopo: o que entra e o que fica de fora

**Dentro do nucleo (6 nos + 1 projeto final = 7 entradas):**

1. `motion-vs-css` - A arvore de decisao: quando
   cada ferramenta. Performance vs expressividade,
   GPU acceleration, quando JS vale o custo,
   `prefers-reduced-motion` como filtro universal.
2. `framer-motion-basico` - `motion.div` (e
   `motion.section`, `motion.button` - qualquer
   HTML element), `AnimatePresence` (mount/unmount
   animado), `variants` (estados nomeados com
   transitions entre eles), `initial` + `animate`
   + `exit`, `transition` (duration, ease, spring).
3. `padroes-de-animacao` - `layout` prop (FLIP
   animation - "shared layout" entre elementos),
   `gestures` (`whileHover`, `whileTap`, `whileDrag`,
   `whileFocus`), drag constraints, scroll-linked
   animations (`useScroll`, `useTransform`).
4. `view-transitions-api` - A API nativa do
   browser, `document.startViewTransition()`,
   CSS `::view-transition-*` pseudo-elements,
   suporte cross-browser (Chrome, Edge, Safari
   18+, Firefox em desenvolvimento), fallback
   pra browser sem suporte.
5. `rive-e-lottie` - Animacoes vetoriais
   criadas no Figma/After Effects, quando usar
   (ilustracoes complexas, mascotes, micro-
   interacoes de design), e quando NAO usar
   (animacoes simples que Motion resolve com
   menos bundle).
6. `acessibilidade-em-animacao` - `prefers-reduced-motion`
   (e o que significa: usuario com sensibilidade
   vestibular, migranea, TDAH), `useReducedMotion`
   do Motion, fallback strategy (motion disabled
   vs motion simplificado), performance budget
   (animacoes longas custam CPU + GPU), when
   animation is harm (WCAG 2.3.3).
7. `projeto-final` - Uma **landing page** com
   animacoes intencionais: hero animation,
   scroll-linked sections, hover states
   polidos, modal com AnimatePresence, theme
   toggle com View Transitions, e tudo respeitando
   `prefers-reduced-motion` desde o design.

**Fora do nucleo (intencionalmente, v1.0.0):**

- **Three.js / WebGL / Canvas animations** -
  mencionado no aprofundamento. Sao um mundo
  separado. Animacao 3D / WebGL pertence a
  trilhas de "creative coding" ou "3D web"
  (a definir).
- **GSAP** - mencionado como contexto historico
  e comparacao. Em 2026, Motion tomou o espaco
  de GSAP no React (mesma equipe por tras da
  Motion). A trilha foca 100% em Motion.
- **Anime.js, Mo.js, Velocity.js** - bibliotecas
  historicas de animacao JS. Mencionadas no
  aprofundamento como "existiram, hoje em dia
  use Motion".
- **Spring physics avancada** (stiffness, damping,
  mass equations) - coberto o basico (configurar
  `type: "spring"` com stiffness/damping default).
  Aprofundamento pertence a "animation theory"
  (a definir).
- **Timeline / sequenciacao complexa** (Motion
  tem `useAnimate` + sequenciacao) - coberto o
  basico no no 3. Aprofundamento (orchestrators
  externos) pertence a ferramenta especifica.
- **GLSL / shaders** - fora. Sao programacao
  grafica, nao animacao UI.
- **Animacao em React Native** - mencionado no
  no 1 (Motion funciona em RN com `moti`).
  Aprofundamento pertence a trilha de React
  Native.
- **Web Animations API (WAAPI) puro** - coberto
  implicitamente (Motion usa WAAPI por baixo em
  muitos casos). Aprofundamento pertence a
  "browser internals".
- **Morphing SVG com Motion** - mencionado
  no aprofundamento do no 2.
- **Sound design em animacao** (Whoosh clicks,
  feedback sonoro) - fora. Pertence a "UX
  sound" (a definir).
- **Criacao de arquivo .riv/.lottie do zero**
  - a trilha cobre como USAR Rive/Lottie, nao
  como CRIAR. Criacao e trabalho de designer
  no Figma/After Effects.

### Conflitos e encaixe com trilhas existentes

- **`css-animacoes`** - **pre-requisito**. A
  trilha cobre CSS animation (transition,
  @keyframes, transform, easing, GPU
  acceleration). Motion **complementa** CSS
  (nao substitui). Em projeto real, a maioria
  das animacoes e CSS, e Motion entra onde CSS
  nao resolve. O no 1 (motion-vs-css) explicita
  essa relacao.
- **`frontend`** - pre-requisito solto. Conforto
  com React e pre-requisito pra Motion.
- **`performance-web`** - leitura recomendada,
  nao pre-requisito. Performance e tema
  transversal - Core Web Vitals (LCP, INP, CLS)
  pode ser afetado por animacoes mal-feitas.
  A trilha menciona quando uma animacao
  impacta INP (input delay). Aprofundamento
  pertence a `performance-web` (issue #48).
- **`acessibilidade-web`** - leitura recomendada.
  A trilha cobre `prefers-reduced-motion` e
  WCAG 2.3.3. A `acessibilidade-web` cobre
  a teoria mais ampla de a11y. As duas se
  complementam.
- **`testing-frontend`** - leitura recomendada.
  Testar animacoes e tricky (motion tem
  `motion-dom` pro Vitest). Detalhes
  mencionados no no 7 (projeto-final).
- **`tanstack-query` / `form-libraries` /
  `nextjs` / `tanstack-query` / `storybook-design-systems`**
  - nao relacionadas. Motion e ortogonal a
  essas trilhas.
- **`typescript`** - pre-requisito solto.
  Motion e fortemente tipado, e a trilha usa
  TS em todos os exemplos. Mesma situacao das
  outras trilhas: a `typescript` existente
  cobre o suficiente, a futura
  `typescript-frontend` (lacuna conhecida)
  linka aqui.

### Formato dos nos (camadas 🟢🟡🔴)

Igual as trilhas anteriores do pacote. Cada
no `.mdx` segue o esqueleto de tres camadas:

- 🟢 **Essencial** - o "todo mundo precisa saber".
  Inclusivo, sem jargao.
- 🟡 **Aprofundamento** - pratica real de dev:
  "onde isso aparece no dia a dia, que armadilha
  existe, que otimizacao isso destrava".
- 🔴 **Pra quem quer ir alem** - referencias
  canonicas (Motion docs, MDN View Transitions,
  posts do time do Motion), alternativas,
  aprofundamento.

O **projeto final** e excecao: e um brief de
projeto, nao segue o esqueleto de 3 camadas
(segue o template de `projects/<slug>.mdx` com
secoes Objetivo, Requisitos, Desafios extras,
Dicas).

### Decisoes de curadoria

- **PT-BR primeiro.** Recursos em ingles so
  quando canonicos (Motion docs, MDN View
  Transitions, posts do time do Motion).
- **`type` sempre preenchido** (`artigo` |
  `video` | `curso` | `doc` | `exercicio`).
- **Minimo 1, maximo 3 recursos por no.** Em
  geral 2.
- **Sem recursos pagos.**
- **Diagramas Mermaid** via componente
  `<Mermaid>`. Candidatos:
  - `motion-vs-css`: arvore de decisao
    visual (CSS vs Motion vs View Transitions
    vs Rive, com criterios de quando cada um).
  - `acessibilidade-em-animacao`: state
    machine do `prefers-reduced-motion`
    (motion vs motion-simplificado vs
    motion-disabled, e quando cada um).
- **Quizzes formativos** (componente `<Quiz>`)
  ao final de **cada no** - 1 pergunta, 3
  opcoes, com `explanation` em cada. Formativos,
  **nao creditam XP**.
- **Checkpoints validados** (componente
  `<Checkpoint>`) em 5 nos onde a pratica em
  codigo se valida automaticamente:
  `framer-motion-basico` (componente motion
  com variants), `padroes-de-animacao` (layout
  animation com FLIP), `view-transitions-api`
  (wrapper com fallback), `acessibilidade-em-animacao`
  (hook useReducedMotion + logica condicional),
  `projeto-final` (smoke test da landing page).
  Total: **5 checkpoints**.
- **Exemplos em TypeScript** (a trilha e
  React + TS, sem excecao). Quando o exemplo
  depende de versao (Motion v11+, React 19+),
  marca a versao no snippet.

### Stack da trilha

- **Motion 12.x** (a versao atual estavel, com
  a renomeacao de Framer Motion pra Motion em
  2024, e os pacotes `motion` e `motion-dom`).
- **React 18+** ou **React 19** (Motion funciona
  com qualquer versao moderna).
- **View Transitions API** - nativo do browser,
  sem dependencia de package.
- **Rive** (`@rive-app/react-canvas`) - a
  SDK oficial pra React.
- **Lottie** (`lottie-react`) - a SDK mais
  popular pra Lottie.
- **TypeScript 5+**.

### O que ficou de fora (intencionalmente, v1.0.0)

- **Three.js / WebGL** - mundo separado,
  pertence a trilhas de creative coding.
- **GSAP** - mencionado como contexto
  historico. Em 2026, Motion tomou o espaco
  de GSAP no React (mesma equipe).
- **Anime.js / Mo.js / Velocity.js** -
  bibliotecas historicas. Mencionadas no
  aprofundamento.
- **Spring physics equacoes** - coberto o
  basico (config de spring). Aprofundamento
  pertence a "animation theory".
- **Timeline / orquestracao complexa** -
  coberto o basico. Aprofundamento pertence
  a ferramenta especifica.
- **GLSL / shaders** - programacao grafica,
  nao animacao UI.
- **Animacao em React Native** - mencionado
  no no 1 (`moti` e o port do Motion pra RN).
  Aprofundamento pertence a RN.
- **Sound design em animacao** - fora.
- **Criacao de arquivo .riv/.lottie do zero**
  - a trilha cobre como USAR. Criacao e
  trabalho de designer.
- **Motion One** (a versao core do Motion sem
  React, 1.7KB) - mencionado no aprofundamento
  do no 1. A trilha foca em Motion + React
  (uso mais comum em 2026).
- **Immer / mutable animation state** - fora.
  Motion usa referencia imutavel. Quem quiser
  mutable, usa React Spring.

### Aprofundamentos futuros (proximas versoes)

Crescimento possivel quando a trilha tiver uso
real:

- **No extra**: "Three.js + Motion: WebGL com
  triggers" - se virar buraco recorrente.
- **No extra**: "Motion + Canvas / SVG morphing"
  - se virar buraco recorrente.
- **No extra**: "Motion for React Native" -
  complemento pra quem faz mobile.
- **No extra**: "Animation theory: spring physics,
  bezier curves, motion design principles" -
  se virar demanda de time.
- **Trilha-irma**: "creative coding com WebGL /
  shaders" - mundo separado, DS ortogonal.
- **Trilha-irma**: "animation performance: profiling
  + budget" - se virar dor de time mid+.
- **Migracao pra Motion 13+** quando sair -
  bump de minor na mesma trilha, sem
  reescrita.

## v0.x - Historico de revisoes

> N/A (v1.0.0 e a primeira versao da trilha).
