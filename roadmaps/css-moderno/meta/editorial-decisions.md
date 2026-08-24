# Decisões editoriais - Trilha de CSS Moderno

> Histórico de decisões de escopo, organização e curadoria. Quando a
> trilha ganha ou perde um nó, isso fica registrado aqui.

## v1.0.0 - Lançamento (2026-08-24)

### Decisão

Trilha de **CSS Moderno** lançada como parte da **reorganização
da antiga trilha de CSS** (v1.4.0, 36 nós) em quatro trilhas
menores. Esta é a trilha **4 de 4** e foca no **CSS que existe
hoje mas pouca gente domina**: Custom Properties, funções modernas,
Container Queries, `:has()`, Logical Properties, arquitetura,
performance e o ecossistema além do CSS puro.

É a trilha que **consolida** o que foi aprendido nas outras três
e prepara o leitor pra **trabalhar em time** (BEM, performance)
e **escolher ferramentas** (frameworks, pré-processadores,
CSS-in-JS).

### Estrutura

**8 subtopics** + **1 milestone** de projeto final, em ordem
linear:

1. **`variaveis`** - custom properties, fallback, escopo, theming,
   manipulação via JS, `@property`
2. **`funcoes-modernas`** - calc, min, max, clamp, tipografia
   fluida, minmax
3. **`container-queries`** - container-type, @container,
   container-name, cqw/cqh, container vs media
4. **`has`** - seletor pai, casos práticos, `:has()` + `:not()`,
   `@container` + `:has()`, pegadinha de performance
5. **`logical-properties`** - inline/block, start/end, LTR vs RTL,
   `text-align: start`, organização multilíngue
6. **`arquitetura`** - BEM, SMACSS, ITCSS, Tailwind, CSS-in-JS,
   CSS Modules, organização de pastas, anti-patterns
7. **`performance`** - reflow/repaint/composite, will-change, critical
   CSS, content-visibility, minificação, métricas (FCP, LCP, CLS)
8. **`mundo-alem`** - frameworks (Bootstrap, Tailwind),
   pré-processadores (Sass), CSS-in-JS (styled-components), CSS
   Modules, trade-offs
9. **`projeto-final`** (milestone) - landing page completa e
   responsiva, critérios de aceite cobrindo as 4 trilhas

### O que mudou em relação à trilha antiga (`css` v1.4.0)

- **`variaveis` aprofundado**: ganhou seção de `@property` (animar
  custom properties) e manipulação via JS (`setProperty`).
- **`funcoes-modernas` consolidado**: as funções eram mencionadas
  em `unidades` (trilha fundamentos) mas sem aprofundar. Agora
  merecem nó próprio, com a estratégia de `clamp()` + `vw` pra
  tipografia fluida.
- **`container-queries` ganhou mais profundidade**: além do
  `@container` básico, unidades `cqw`/`cqh`, `container-name`, a
  comparação container vs media.
- **`has` mantido** mas com **mais exemplos** (form com erro, card
  com/sem imagem, nav com item ativo) e a combinação com
  `@container`.
- **`logical-properties` mantido** com mais exemplos práticos de
  LTR vs RTL.
- **`arquitetura` aprofundado**: na trilha antiga tinha 242 linhas
  cobrindo só BEM. Agora tem BEM, SMACSS, ITCSS, **CSS-in-JS**,
  **Tailwind** e a **recomendação por nível de experiência**.
- **`performance` aprofundado**: na trilha antiga tinha 231 linhas.
  Agora tem mais sobre `content-visibility: auto`, métricas
  (FCP/LCP/CLS/TBT), PurgeCSS.
- **`mundo-alem` mantido** mas com a **comparação direta** entre
  ferramentas (Tailwind vs Sass vs CSS-in-JS vs CSS Modules) e a
  **recomendação por nível de experiência**.
- **`projeto-final` mantido** mas com critérios de aceite cobrindo
  **as 4 trilhas** (fundamentos, layout, animações, moderno) em
  vez de só a trilha antiga.

### Princípios editoriais aplicados

- **3-4 conceitos novos por nó.** Onde empilhava, quebrou em dois.
- **Tom "amigo mais experiente"**, PT-BR, exemplos antes da
  abstração.
- **Mostrar antes de explicar**: cada nó abre com um snippet curto
  e legenda.
- **Recursos**: PT-BR (MDN) sempre que possível. EN com selo quando
  é fonte canônica (web.dev, CSS-Tricks, State of CSS).
- **Trade-offs explícitos**: arquitetura e mundo-alem mostram
  prós/contras de cada ferramenta, sem "a melhor" — a escolha
  depende do contexto.
- **Acessibilidade e performance repetidos** em vários nós
  (variáveis, arquitetura, performance) — postura, não detalhe.

### O que ficou de fora (decisões de não incluir)

- **CSS Houdini** (Paint API, Layout API) - ainda muito experimental,
  fora do escopo de "toda pessoa que mexe com web dev precisa
  entender".
- **CSS Nesting nativo** - ainda em working draft, sem suporte
  universal. Quando estabilizar, vai entrar no `arquitetura`.
- **Subgrid do CSS Grid** - suporte ainda limitado; quando
  universalizar, vai entrar no `css-layout`.
- **Scroll-driven animations** (`animation-timeline: scroll()`) -
  ainda novo (Chrome 115+), vai ser mencionado em
  `css-animacoes` quando estabilizar.
- **View Transitions API** - mencionada de passagem em
  `css-animacoes` (casos), mas merece aprofundamento em uma trilha
  futura.
- **CSS Containment** (`contain: layout`, `contain: paint`) -
  mencionado de passagem em `performance`; aprofundamento em
  trilha futura.
- **CSS Cascade Layers** (`@layer`) - muito novo, sem suporte
  universal. Vai pra `arquitetura` quando estabilizar.

### Como o conteúdo foi construído

A versão inicial foi **migrada da trilha única `css` v1.4.0** (no
`aprenda-community`) e **reorganizada em quatro trilhas** com
nomenclatura e escopo mais claros. Os nós de avançado da trilha
antiga foram **todos preservados** (variáveis, container queries,
`:has`, logical properties, arquitetura, performance, mundo além,
projeto final) e **aprofundados** com mais exemplos, comparações
e trade-offs explícitos. O projeto final ganhou critérios de
aceite que **cobrem as 4 trilhas** em vez de só a antiga.
