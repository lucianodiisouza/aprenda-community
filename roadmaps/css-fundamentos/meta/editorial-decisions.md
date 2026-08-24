# Decisões editoriais - Trilha de CSS Fundamentos

> Histórico de decisões de escopo, organização e curadoria. Quando a
> trilha ganha ou perde um nó, isso fica registrado aqui.

## v1.0.0 - Lançamento (2026-08-24)

### Decisão

Trilha de **CSS Fundamentos** lançada como parte da **reorganização
da antiga trilha de CSS** (v1.4.0, com 36 nós) em **quatro trilhas
menores e mais focadas**. A divisão foi feita para que:

- Quem nunca viu CSS pode entrar direto sem se perder.
- Quem já programa pula pra `css-layout`, `css-animacoes` ou
  `css-moderno` quando quiser.
- O conteúdo de cada trilha cabe num **encontro de estudo** sem
  ficar longo demais.

Esta trilha é o **pré-requisito comum** pras outras três.

### Estrutura

**15 subtopics**, em ordem linear:

1. **`introducao`** - o que é CSS, sintaxe básica
2. **`incluindo-css`** - inline, interno, externo
3. **`seletores-basicos`** - tag, classe, ID, atributo
4. **`combinadores`** - descendente (espaço), filho (`>`), irmão
   (`+` e `~`)
5. **`cores`** - nome, hex, RGB/RGBA, HSL/HSLA
6. **`unidades`** - px, rem, em, %, vh, vw (e spoiler do `clamp()`)
7. **`tipografia`** - font-family, font-size, line-height,
   font-weight, letter-spacing
8. **`box-model`** - margin, border, padding, content + `box-sizing`
9. **`display`** - block, inline, inline-block, none
10. **`backgrounds`** - cor, imagem, gradiente, empilhamento
11. **`sombras`** - `box-shadow` e `text-shadow`
12. **`pseudo-classes-basicas`** - `:hover`, `:focus`, `:active`,
    `:nth-child`, `:focus-visible`
13. **`pseudo-elementos`** - `::before`, `::after`, `::placeholder`,
    `::selection`
14. **`cascata-especificidade`** - cascata, especificidade, herança
    (consolida o que era três nós na trilha antiga)
15. **`devtools`** - inspecionar, editar ao vivo, forçar estados

### O que mudou em relação à trilha antiga (`css` v1.4.0)

- **Consolidação**: `especificidade`, `cascata` e `herança` viraram
  **um único nó** `cascata-especificidade`. A teoria fica mais
  compacta e referenciada em todos os outros nós.
- **Promoção**: `backgrounds` e `sombras` saíram do nível
  intermediário e ficaram aqui — são **conceitos básicos visuais** que
  se aplicam desde o primeiro projeto, não requerem Layout.
- **`combinadores`** ficou aqui (era intermediário na trilha
  antiga) — sem ele, `seletores-basicos` parece incompleto.
- **`pseudo-elementos`** ficou aqui (era intermediário) — encosta
  em pseudo-classes e completa a caixa de "seletores especiais".
- **`devtools`** continua no fim, mas com mais profundidade: atalhos,
  command palette, forçar estados.

### Princípios editoriais aplicados

- **3-4 conceitos novos por nó.** Onde empilhava, quebrou em dois
  (ex: pseudo-classes de interação × pseudo-classes de posição ×
  pseudo-classes de formulário ficaram todas no mesmo nó porque o
  limite não foi estourado — separem em `css-moderno` se crescer).
- **Tom "amigo mais experiente"**, PT-BR, exemplos antes da
  abstração. Style guide da comunidade seguido.
- **Recursos**: PT-BR sempre que possível; EN com selo quando é a
  fonte canônica (MDN EN, Chrome DevTools). Recursos pagos marcados
  com `free: false`.
- **Mostrar antes de explicar**: cada nó abre com um snippet curto
  e legenda, depois o conceito nomeado.
- **Avisos de acessibilidade** sobre `:focus-visible` (nunca tirar
  `outline` sem substituir) e contraste de cor com sombras.

### O que ficou de fora (decisões de não incluir)

- **Pseudo-classes avançadas** (`:is()`, `:where()`, `:not()`) - vão
  pra `css-moderno` (no contexto de `:has()`).
- **Funções de cor** (`color-mix()`, `oklch()`) - vão pra
  `css-moderno` se entrar; cores em si já é o básico.
- **Lógica condicional** (`@supports`) - vai pra `css-moderno`.
- **Flexbox, Grid, Position** - essa é a trilha `css-layout` (a
  seguir).
- **Animações, Transições, Transform** - essa é a trilha
  `css-animacoes` (a seguir).
- **Variáveis, Container Queries, `:has()`, Logical Properties,
  Funções modernas** - essa é a trilha `css-moderno` (a seguir).

### Como o conteúdo foi construído

A versão inicial foi **migrada da trilha única `css` v1.4.0** (no
`aprenda-community`) e **reorganizada em quatro trilhas** com
nomenclatura e escopo mais claros. A migração preserva o conteúdo
original sempre que possível; onde consolidou ou aprofundou, está
marcado na seção "O que mudou em relação à trilha antiga".
