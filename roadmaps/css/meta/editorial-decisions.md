# Decisões editoriais - Trilha de CSS

> Histórico de decisões de escopo, organização e curadoria. Quando a trilha
> ganha ou perde um nó, isso fica registrado aqui.

## v1.0.0 - Lançamento (2026-08-24)

### Decisão

Trilha de **CSS** lançada com **36 nós** estruturados em 3 tópicos macro
+ 1 milestone de projeto final. A escolha de **três níveis macro** (e não
uma trilha linear) foi deliberada: a trilha inteira pode ser atravessada
por quem nunca viu CSS, mas quem já programa em outras linguagens pode
entrar direto no nível intermediário e pular para o avançado quando
quiser.

### Estrutura

- **CSS do Zero** (iniciante, 10 subtopics): o que é CSS, inclusão
  (inline, interno, externo), seletores básicos (tag, classe, ID,
  atributo), cores (nome, hex, RGB, HSL), tipografia (fontes, tamanhos,
  peso, altura de linha), box model (margin, border, padding, content),
  display (block, inline, inline-block, none), unidades (px, em, rem,
  %, vh, vw), pseudo-classes básicas (:hover, :focus, :active) e
  DevTools do navegador.
- **CSS Intermediário** (10 subtopics): especificidade, cascata e
  herança, combinadores de seletores (descendente, filho, irmão),
  pseudo-elementos (::before, ::after, ::placeholder), position
  (static, relative, absolute, fixed, sticky), Flexbox, backgrounds
  (imagens, gradientes, múltiplos), sombras (box-shadow, text-shadow),
  transições, responsividade (media queries, mobile-first).
- **CSS Avançado** (12 subtopics): Grid, variáveis CSS (custom
  properties) e theming, animações (@keyframes, animation), transform
  (translate, rotate, scale, 2D e 3D), funções modernas (clamp, min,
  max, calc), container queries (@container), :has() (o "seletor pai"),
  logical properties (margin-inline, etc.), acessibilidade visual
  (prefers-reduced-motion, prefers-color-scheme), arquitetura (BEM e
  organização), performance (will-change, reflow/repaint, critical
  CSS) e "o mundo além do CSS puro" (frameworks, pré-processadores,
  CSS-in-JS, bibliotecas de componentes).
- **Projeto final** (milestone): landing page completa e responsiva,
  com critérios de aceitação e checklist de validação.

### O que continuou fora (decisões de não incluir)

- **Tutorial de frameworks** (Tailwind, Bootstrap, Sass, styled-components).
  A pedido explícito do produto, o conteúdo da trilha **ensina CSS puro**.
  O nó final "O Mundo Além do CSS Puro" lista frameworks e ferramentas
  com descrição de prós e contras e link para o State of CSS - é um
  **mapa de opções**, não um tutorial. A escolha de usar (ou não) um
  framework cabe ao leitor, com base no que aprendeu na trilha.
- **CSS 2D Canvas / SVG avançado / WebGL / filtros avançados demais.**
  Coberto por trilhas futuras (talvez "Frontend Avançado" ou
  "Gráficos na Web"). Aqui a barra é "CSS que toda pessoa que mexe
  com web dev usar precisa entender".
- **CSS print e @media para impressão.** Importante mas com público
  muito específico. Quem precisar, acha no MDN.

### Princípios editoriais aplicados

- **Tom "amigo mais experiente"**, PT-BR, exemplos antes da abstração.
  O style guide da comunidade (em `docs/style-guide.md`) foi seguido.
- **Avisos repetidos sobre `prefers-reduced-motion` e acessibilidade
  visual** em vários nós (animações, transições, arquitetura). É
  postura, não detalhe: a trilha assume que acessibilidade é parte do
  trabalho de CSS, não um extra.
- **Recursos:** PT-BR sempre que possível (MDN, documentação de
  frameworks). Inglês com selo `lang: en` quando é a fonte canônica
  (State of CSS, CSS-Tricks, MDN EN). Recursos pagos marcados
  explicitamente como `free: false`.
- **Limite de 3-4 conceitos novos por nó.** Onde empilhava, quebrou
  em dois (ex: Grid e Flexbox são nós separados, não um nó "Layout").

### Como o conteúdo foi construído

A versão inicial foi criada como **local-first** no monorepo
`primo-academy` (ADR de 2026-08-24 em
`packages/content/meta/editorial-decisions.md` lá) e promovida para
este repositório público na mesma data. A versão local e a versão
pública são idênticas em conteúdo.
