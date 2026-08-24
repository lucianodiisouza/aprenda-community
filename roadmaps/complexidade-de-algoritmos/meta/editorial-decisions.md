# Decisões editoriais - Trilha de Complexidade de Algoritmos

> Histórico de decisões de escopo, organização e curadoria. Quando a trilha
> ganha ou perde um nó, isso fica registrado aqui.

## v1.1.0 - Reorganização da estrutura de nós (2026-08-24)

### Contexto

A versão v1.0.0 (mergeada via PR #2) organizava os 13 nós em três
sub-trilhas por **classe de complexidade**: básico (O(1), O(n), O(n²)),
intermediário (Big O formal, O(log n), análise de loops) e avançado
(Big Ω/Θ, complexidade de espaço, recursão, análise amortizada).

A versão v1.1.0 reorganiza os mesmos 13 nós em torno de **perguntas e
habilidades**, não de classes matemáticas: "por que medir" → "contar
operações" → "Big O" → "classes comuns" → "casos (melhor/médio/pior)" →
"espaço" → "loops e condicionais" → "recursão" → "estruturas de dados" →
"padrões clássicos (dois ponteiros, sliding window, D&C)" → "busca
binária na vida real" → "na prática: quando Big O mente" → "projeto
final".

### Decisão

Reorganizar a estrutura. A versão anterior tinha o problema de ensinar
classes (O(n), O(log n)) **antes** de ensinar a analisar o código que
produz essas classes. A nova versão inverte: primeiro a pergunta
"por que medir", depois a ferramenta (Big O), depois as classes que
surgem naturalmente da análise, depois os casos especiais, e só no
final os padrões algorítmicos clássicos e a análise de quando Big O
"mente" na prática (constantes, hardware, prematuridade da
otimização).

### Consequência

- A entrada "análise amortizada" da v1.0.0 saiu; foi trocada por
  "na prática: quando Big O mente", que é mais aplicado e cabe no
  nível intermediário/avançado sem exigir recursão avançada. A
  análise amortizada continua disponível no MDN e em livros
  canônicos (CLRS) pra quem quiser ir além.
- Os nós `notacao-big-o`, `big-omega-big-theta`, `complexidade-espaco`
  e `recursao` da v1.0.0 foram consolidados/reorganizados para evitar
  redundância.
- A numeração `introducao` → `constante-linear` → `quadratico` →
  `notacao-big-o` → ... → `analise-amortizada` foi substituída por
  `por-que-medir` → `contando-operacoes` → `big-o` → `classes-comuns`
  → `casos` → `espaco` → `loops-condicionais` → `recursao` →
  `estruturas-de-dados` → `padroes-classicos` → `busca-binaria` →
  `na-pratica` → `projeto-final`.

### Princípios editoriais mantidos

- 13 nós no total (não esticou nem encolheu).
- Aprofundamento marcado como `recommended: false` quando é
  opcional.
- Recursos PT-BR primeiro; EN com selo `lang: en` quando é a fonte
  canônica.
- O conteúdo da v1.0.0 não foi perdido - está no histórico do git
  deste repositório (commit `6412892`). Quem preferir a organização
  anterior pode voltar a essa versão.

## v1.0.0 - Lançamento (2026-08-23)

Versão original da trilha, com 13 nós estruturados em torno das
classes de complexidade. Detalhes do escopo original estão no PR
#2 deste repositório.
