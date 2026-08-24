# Decisões editoriais - Trilha de Complexidade de Algoritmos

> Histórico de decisões de escopo, organização e curadoria. Quando a
> trilha ganha ou perde um nó, isso fica registrado aqui.

## v1.0.0 - Lançamento (2026-08-24)

### Por que uma trilha de Complexidade de Algoritmos

Complexidade é um dos temas mais pedidos por quem está começando a
programar e por quem já programa mas nunca "fechou" o conceito. Ela
aparece em entrevistas, em code review, em decisões de arquitetura - e,
mais importante, na hora de **não escrever código lento sem saber**.

O pedido foi uma trilha que **acompanhasse o público do Aprenda em três
níveis**: do zero absoluto (o que é um algoritmo "lento" vs "rápido")
até análise amortizada e notação assintótica formal - sem queimar o
iniciante no jargão, mas também sem deixar o intermediário/avançado
sem profundidade.

### Estrutura geral

- **13 nós** (4 topics, 8 subtopics, 1 milestone), organizados em três
  blocos de dificuldade crescente que compartilham uma linha linear
  única de `children`.
- **`difficulty: iniciante`** porque o ponto de entrada não pressupõe
  nenhum conhecimento prévio de complexidade (`introducao` explica o
  conceito do zero). A trilha **evolui** para avançado ao longo do
  caminho - o selo marca a porta de entrada, não o teto.
- **Três níveis explícitos**, sinalizados nas transições entre nós:
  - **Básico** (`introducao` → `quadratico`): o que é complexidade,
    como contar operações sem matemática, O(1) e O(n) na intuição,
    O(n²) em loops aninhados.
  - **Intermediário** (`notacao-big-o` → `comparando-complexidades`):
    notação Big O formal, O(log n) e busca binária, regras práticas
    para analisar loops, comparação lado a lado das complexidades
    mais comuns com números reais.
  - **Avançado** (`big-omega-big-theta` → `analise-amortizada`): Big Ω
    e Big Θ (pior/melhor caso), complexidade de espaço, análise de
    algoritmos recursivos (recorrências, Master Theorem), análise
    amortizada (array dinâmico, hash map).
- **Milestone** (`projeto-final`): implementar duas soluções para o
  mesmo problema (busca, ordenação ou busca binária), medir o tempo em
  diferentes tamanhos de entrada, e **comparar a previsão da análise
  com o resultado real** - a prática que consolida todo o resto.

### Prática sem Playground dedicado

A comunidade Aprenda não tem um Playground de complexidade. Decisão: a
prática vem de (1) **blocos de código** em JavaScript que ilustram cada
conceito, (2) **tabelas comparativas** com números reais para visualizar
a diferença entre complexidades, e (3) o **projeto final** ser um teste
de medição autêntico - a pessoa **roda o código** e vê a curva aparecer.

### Decisões de curadoria

- **Wikipedia PT-BR** é a fonte primária para os conceitos clássicos
  (`Análise de algoritmos`, `Busca binária`, `Recursividade`,
  `Bubble sort`). Quando o verbete em PT-BR não tem qualidade
  aceitável, recorre-se à versão em inglês.
- **Khan Academy** (EN) é a fonte secundária recomendada para
  notação assintótica - tem explicações claras e progressivas.
- **bigcheatsheet.com** como referência visual única (cheat sheet
  canônica da comunidade técnica) - útil como consulta rápida.
- **Inglês (`lang: en`)** para a Khan Academy, Wikipedia EN,
  visualgo.net e geeksforgeeks (PT-BR desses não tem a mesma
  qualidade).
- **1-2 recursos por nó**, priorizando docs oficiais e ferramentas
  versionadas.
- **Sem recursos pagos, sem afiliados.**

### Linguagem de exemplo: JavaScript

A trilha usa **JavaScript** nos snippets de código. Justificativa:

- É a linguagem mais usada no público do Aprenda (trilha de Frontend
  usa JS, e a trilha de Programação do Zero mostra ambos).
- Sintaxe limpa para ilustrar os conceitos sem ruído.
- Quem programa em Python consegue ler sem dificuldade (a lógica é a
  mesma).

### Nós marcados como não-recomendados (`recommended: false`)

- **`analise-amortizada`**: extremamente útil para entender por que
  alguns algoritmos "quase nunca" são caros, mas não é o "caminho
  crítico" para a maioria das pessoas que estão aprendendo
  complexidade. Marcado como aprofundamento opcional - fica na
  trilha, mas quem quer o essencial pode pular.

### O que ficou de fora (e por quê)

- **Complexidade de pior caso esperada (expected complexity) e
  randomized algorithms** - temas avançados demais para uma primeira
  exposição, mesmo na parte avançada. Candidato a trilha própria
  ("Algoritmos aleatorizados") no futuro.
- **Notação little-o e little-ω** - técnicas formais raramente usadas
  fora de provas matemáticas. Fora por ora.
- **Análise amortizada aprofundada** (método do potencial com provas
  formais) - mencionamos os três métodos pelo nome, mas sem as provas.
- **Complexidade parametrizada, fine-grained complexity** - linhas de
  pesquisa ativas, mas fora do escopo introdutório.
- **NP-completude, reduções, teoria da complexidade** - é um campo
  inteiro (Computabilidade e Complexidade) que merece **trilha
  própria** no futuro, não mais nós dentro desta.

### O que talvez mude nas próximas versões

- Nó opcional de **complexidade esperada vs. pior caso** (análise
  probabilística).
- Nó opcional de **estruturas de dados e suas complexidades**
  (hash tables, árvores balanceadas, heaps) - o "catálogo" que
  muita gente procura.
- Trilha futura de **Teoria da Complexidade** (P vs NP, reduções,
  NP-completude), separada desta.

Mudanças de escopo aqui viram bump **minor** (v1.1.0) se adicionarem
nós, **patch** (v1.0.1) se forem correções, **major** (v2.0.0) se
mudar a ordem ou a base conceitual.

---

Aberto a discussão: abra issue ou comente em
[Discussions](https://github.com/lucianodiisouza/aprenda-community/discussions).
