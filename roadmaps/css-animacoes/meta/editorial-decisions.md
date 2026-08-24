# Decisões editoriais - Trilha de CSS Animações

> Histórico de decisões de escopo, organização e curadoria. Quando a
> trilha ganha ou perde um nó, isso fica registrado aqui.

## v1.0.0 - Lançamento (2026-08-24)

### Decisão

Trilha de **CSS Animações** lançada como parte da **reorganização
da antiga trilha de CSS** (v1.4.0, 36 nós) em quatro trilhas
menores. Esta é a trilha **3 de 4** e foca em **movimento com
responsabilidade**: como dar vida à interface sem causar
desconforto a quem precisa.

É a outra trilha que o Luciano pediu pra **aprofundar** — Animações
ganha **4 nós** (transitions, transform, keyframes básico, keyframes
avançado + casos) em vez de 1 nó genérico.

### Estrutura

**6 subtopics**, em ordem linear:

1. **`transicoes`** - transition, easing, propriedades animáveis,
   pegadinha do `all`
2. **`transform`** - translate, rotate, scale, skew, transform-origin,
   2D e 3D
3. **`animacoes-basicas`** - @keyframes, animation shorthand, infinite,
   alternate, fill-mode, delay
4. **`animacoes-avancadas`** - cubic-bezier, steps, multiple animations,
   play-state, will-change, eventos JS
5. **`casos-animados`** - spinner, skeleton, hover de card, modal,
   toast, pulso
6. **`acessibilidade-visual`** - prefers-reduced-motion,
   prefers-color-scheme (dark mode), prefers-contrast, forced-colors

### O que mudou em relação à trilha antiga (`css` v1.4.0)

- **`animacoes` e `transform` eram 2 nós separados** na trilha
  antiga (195 e 211 linhas, respectivamente). Agora Animação tem
  **4 nós** com divisão clara:
  - **`transicoes`**: a base (transition é "menor" que animation).
  - **`transform`**: a propriedade mais performática.
  - **`animacoes-basicas`**: o que toda pessoa precisa (1 @keyframes
    + shorthand).
  - **`animacoes-avancadas`**: cubic-bezier, steps, multiple,
    eventos JS.
- **`casos-animados`** é um nó NOVO — não existia na trilha antiga.
  Compila padrões prontos (spinner, skeleton, hover, modal) que o
  usuário pode copiar.
- **`acessibilidade-visual`** ganhou **muito mais profundidade**:
  não é só `prefers-reduced-motion` (3 parágrafos na versão
  antiga). Agora cobre dark mode, alto contraste, forced-colors e
  a estratégia de variáveis CSS pra centralizar.

### Princípios editoriais aplicados

- **3-4 conceitos novos por nó.** Onde empilhava, quebrou em dois
  (básicas vs avançadas, casos prontos, acessibilidade).
- **Tom "amigo mais experiente"**, PT-BR, exemplos antes da
  abstração.
- **Mostrar antes de explicar**: cada nó abre com um snippet curto
  e legenda.
- **Avisos de acessibilidade repetidos**: `prefers-reduced-motion`
  no contexto de transições, animações, casos e acessibilidade. É
  postura, não detalhe.
- **Performance**: recomenda `transform` e `opacity` como as
  propriedades mais baratas; alerta sobre `transition: all` e uso
  excessivo de `will-change`.

### O que ficou de fora (decisões de não incluir)

- **CSS Scroll-driven Animations** (`animation-timeline: scroll()`)
  - ainda tem suporte limitado; vai pra `css-moderno` quando
  estabilizar.
- **GSAP, Framer Motion, Motion One** - bibliotecas JS de animação.
  Ficam mencionadas de passagem; aprofundamento em `css-moderno` ou
  em `frontend` (React).
- **Lottie / SVG animado** - ecossistema diferente, fora do escopo
  "CSS puro".
- **View Transitions API** - mencionada de passagem; merece
  aprofundamento em uma trilha futura.

### Como o conteúdo foi construído

A versão inicial foi **migrada da trilha única `css` v1.4.0** (no
`aprenda-community`) e **reorganizada em quatro trilhas** com
nomenclatura e escopo mais claros. Os nós de animação e transform
(originalmente 195 e 211 linhas) foram **divididos em 4 + 1
(acessibilidade aprofundada)** com casos práticos prontos pra
copiar. `acessibilidade-visual` saiu de 3 parágrafos no nó original
pra um nó inteiro cobrindo `prefers-reduced-motion`,
`prefers-color-scheme`, `prefers-contrast` e `forced-colors`.
