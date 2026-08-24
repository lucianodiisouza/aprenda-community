# Decisões editoriais - Trilha de CSS Layout

> Histórico de decisões de escopo, organização e curadoria. Quando a
> trilha ganha ou perde um nó, isso fica registrado aqui.

## v1.0.0 - Lançamento (2026-08-24)

### Decisão

Trilha de **CSS Layout** lançada como parte da **reorganização da
antiga trilha de CSS** (v1.4.0, 36 nós) em quatro trilhas menores.
Esta é a trilha **2 de 4** e foca em **layout**: como colocar
elementos onde você quer.

É a trilha que o Luciano pediu pra **aprofundar** — Flexbox e Grid
ganham **4 nós cada** (introdução, container, itens, casos clássicos)
em vez de 1 nó genérico. Position e responsividade complementam.

### Estrutura

**10 subtopics**, em ordem linear:

1. **`position`** - static, relative, absolute, fixed, sticky
2. **`flexbox-introducao`** - o que é, ativar, eixos, container vs itens
3. **`flexbox-container`** - flex-direction, flex-wrap,
   justify-content, align-items, gap
4. **`flexbox-itens`** - flex-grow, flex-shrink, flex-basis, flex
   shorthand, align-self, order
5. **`flexbox-casos`** - centralizar, navbar, cards responsivos,
   footer fixo, ícone+texto
6. **`grid-introducao`** - display: grid, 1D vs 2D, grid vs flex,
   template-areas básico
7. **`grid-container`** - grid-template-columns/rows, repeat,
   minmax, auto-fit, gap, template-areas
8. **`grid-itens`** - grid-column/row, span, grid-area, align-self,
   place-self, posições negativas
9. **`grid-casos`** - layout de página, galeria responsiva, card
   destaque, dashboard, holy grail
10. **`responsividade`** - media queries, mobile-first, breakpoints,
    prefers-*, viewport, spoiler de @container

### O que mudou em relação à trilha antiga (`css` v1.4.0)

- **Flexbox aprofundado de 1 → 4 nós**. A versão antiga tinha um
  único nó de 172 linhas cobrindo tudo. Agora cada aspecto tem
  espaço: o que é / container / itens / casos clássicos.
- **Grid aprofundado de 1 → 4 nós**. Mesma lógica — o nó original
  (195 linhas) cobria introdução, container, itens e padrões
  misturados.
- **Responsividade** ganhou mais profundidade: mobile-first como
  estratégia, prefers-* media queries (acessibilidade), meta
  viewport, spoiler de @container.
- **Position** continua como 1 nó, mas com mais receitas (badge,
  dropdown, tooltip, fixed button, sticky header) e a pegadinha do
  `position: relative` como âncora pro `absolute`.

### Por que aprofundar Flexbox e Grid

A primeira versão da trilha original era "1 trilha de CSS" com 36
nós. O problema: **Flexbox e Grid são os dois tópicos que mais dão
trabalho** na vida real — qualquer layout moderno usa um dos dois
(ou os dois juntos). Merecem tempo dedicado.

Quatro nós cada permite:

- **introducao**: zerar a curva de entrada (o que é, ativar, eixos).
- **container** OU **itens**: foco em uma "metade" do sistema (não
  mistura responsabilidades).
- **casos**: padrões prontos pra copiar e colar (centralizar, navbar,
  cards, galeria).

### Princípios editoriais aplicados

- **3-4 conceitos novos por nó.** Onde empilhava, quebrou em dois
  (Flexbox em 4, Grid em 4).
- **Tom "amigo mais experiente"**, PT-BR, exemplos antes da
  abstração.
- **Mostrar antes de explicar**: cada nó abre com um snippet curto
  e legenda.
- **Recursos**: PT-BR (MDN) sempre que possível. EN com selo quando é
  fonte canônica (CSS-Tricks, Flexbox Froggy, Grid Garden, Chrome
  DevTools).
- **Avisos de acessibilidade**: a pegadinha do `position: relative`
  como âncora; a meta tag `viewport` sempre; `prefers-reduced-motion`
  no contexto de animações/responsividade.

### O que ficou de fora

- **CSS Subgrid** (subgrid do CSS Grid) - ainda tem suporte
  limitado; vai pra `css-moderno` se for crítico.
- **`place-content` e detalhes avançados de alinhamento** - ficam
  mencionados em `grid-container` mas sem aprofundar.
- **CSS Tables (`display: table`)** - tópico legado, sem uso real em
  layouts modernos.
- **Multi-column layout** (`column-count`, `column-gap`) - nicho
  específico, não é layout "principal".
- **Animações, transições, transform** - essa é a trilha
  `css-animacoes`.

### Como o conteúdo foi construído

A versão inicial foi **migrada da trilha única `css` v1.4.0** (no
`aprenda-community`) e **reorganizada em quatro trilhas** com
nomenclatura e escopo mais claros. Os nós de Flexbox e Grid
originalmente únicos (172 e 195 linhas) foram **divididos em 4 cada**
com aprofundamento prático, e `responsividade` ganhou a
fundamentação mobile-first + acessibilidade que faltava.
