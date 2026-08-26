# Decisões editoriais - Trilha de Estruturas de Dados

> Histórico de decisões de escopo, organização e curadoria da trilha de
> Estruturas de Dados. Quando a trilha ganha ou perde um nó, isso fica
> registrado aqui.

## v1.0.0 - Criação inicial (2026-08-25)

### Origem e motivação

A trilha nasce de um buraco real no conjunto: as trilhas `fundamentos-de-cs`
e `complexidade-de-algoritmos` mencionam estruturas de dados em **um nó
cada** - uma passada rápida, no nível do "o que é". Quem quer ir além -
candidato a entrevista técnica, dev querendo entender como libs funcionam
por baixo, universitário nivelando a matéria - fica sem recurso dedicado
em PT-BR.

A trilha é o **aprofundamento** que faltava: vai do array à árvore
balanceada, do heap ao grafo, com profundidade suficiente pra entender
**como cada estrutura funciona por dentro** e **quando escolher cada uma**
em código real.

### Decisão de público: intermediário/avançado, com profundidade progressiva

Público-alvo declarado:

- **Dev júnior/pleno** que se sente inseguro em entrevistas técnicas.
- **Dev backend/sistemas** que usa essas estruturas todo dia sem saber
  o que está por baixo (`Set`, `Map`, `dict`, `HashMap`).
- **Universitário** complementando a matéria de ED em PT-BR.
- **Dev experiente** revisitando pra ensinar ou reciclar.

A trilha assume que a pessoa já:

- Sabe programar em pelo menos uma linguagem (JS, Python, Java, C...).
- Já viu Big O pelo menos uma vez (caso contrário, a trilha
  `complexidade-de-algoritmos` é pré-requisito recomendado).
- Conhece array e loop básico (pré-requisito mínimo).

A trilha **não assume** conhecimento prévio de árvores ou grafos. Quem
nunca viu árvore começa do zero no nó `arvores-anatomia`.

### Escopo: o que entra e o que fica de fora

**Dentro do núcleo (14 nós):**

1. Auto-diagnóstico (nó de entrada)
2. Sequências: arrays, listas, memória
3. Pilhas e filas
4. Hash tables
5. Recursão na prática
6. Árvores: anatomia e travessia
7. BST: árvore binária de busca
8. Árvores balanceadas: AVL e Red-Black
9. Heaps e filas de prioridade
10. Grafos: representação
11. Grafos: BFS e DFS
12. Grafos: Dijkstra, MST, ordenação topológica
13. Tries
14. Projeto final: comparando implementações

**Fora do núcleo (intencionalmente):**

- **B-trees, B+ trees** (índices de banco) → mencionado brevemente em
  `arvores-balanceadas` (camada 🟡), aprofundamento fica pra trilha
  futura de banco de dados.
- **Árvores de sufixo, suffix array, FM-index** → mencionado de passagem
  em `tries` (camada 🔴) como "pra quem quer ir além".
- **Skip list, treap, splay tree** → estruturas alternativas de
  balanceamento. Não cabem no núcleo; ficam como leitura sugerida em
  `arvores-balanceadas` (camada 🔴).
- **Estruturas probabilísticas** (Bloom filter, HyperLogLog, Count-Min
  sketch) → citadas de passagem em `hash-tables` (camada 🔴), com
  aprofundamento futuro.
- **Estruturas concorrentes** (lock-free queue, concurrent map) → fora
  do escopo de ED pura. Pertence a trilha de concorrência/sistemas.
- **Disco e estruturas persistentes** (LSM tree, B-tree em SSD) → fora
  do escopo. É tema de banco de dados / sistemas.
- **Análise amortizada formal** (método do banqueiro, potencial) →
  referenciada em `arvores-balanceadas` e `heaps` (camada 🔴), sem
  aprofundamento.
- **Algoritmos de string** (KMP, Rabin-Karp, Z-algorithm) → mencionados
  de passagem em `tries` (camada 🔴). Aprofundamento fica pra trilha
  futura de algoritmos de string.

### Conflitos e encaixe com trilhas existentes

- **`fundamentos-de-cs`**: a trilha core tem um nó
  `estruturas-de-dados-fundamentais` que cobre array, linked list, hash,
  árvore, grafo em ~5 minutos de leitura cada. **Esta trilha é o
  aprofundamento**. As duas trilhas coexistem sem duplicar - `fundamentos`
  é a passada panorâmica, esta é o mergulho.
- **`complexidade-de-algoritmos`**: a trilha específica de Big O tem um
  nó `estruturas-de-dados` que mostra a tabela de complexidades. **Esta
  trilha assume que você já viu essa tabela** e agora vai entender o
  **porquê** de cada número.
- **`programacao-do-zero`**: pré-requisito de "sabe programar". Não
  bloqueante, mas fortemente recomendado pra quem nunca escreveu código.
- **`sql-banco-de-dados` / `nosql`**: mencionam B-tree e hash table no
  contexto de índices de banco. **Esta trilha é a base conceitual** que
  permite entender por que `BTREE` é o default do Postgres e por que
  Redis é rápido.

### Formato dos nós (camadas 🟢🟡🔴)

Assim como a trilha `fundamentos-de-cs`, cada nó `.mdx` desta trilha
segue o esqueleto de **três camadas**, sinalizadas por cabeçalhos
visíveis:

- 🟢 **Essencial** - o "todo mundo precisa saber". Inclusivo, sem
  jargão. É onde a pessoa investe a maior parte do tempo.
- 🟡 **Aprofundamento** - liga o conceito com a prática real de dev:
  "onde isso aparece no dia a dia, que armadilha existe, que
  otimização isso destrava".
- 🔴 **Pra quem quer ir além** - referências acadêmicas, formalização
  leve, história, ou "leitura recomendada pra se aprofundar".

O **nó 0 (auto-diagnóstico)** é exceção: é curto, é um quiz marcador
de perfil, não segue o esqueleto de 3 camadas.

### Decisões de curadoria

- **PT-BR primeiro**, como o resto do community. Recursos em inglês só
  quando canônicos (CLRS, Khan Academy com legenda PT-BR, VisuAlgo).
- **`type` sempre preenchido** (`artigo` | `video` | `curso` | `doc`
  | `exercicio`).
- **Mínimo 1, máximo 3 recursos por nó.** Em geral 2.
- **Sem recursos pagos.**
- **Diagramas Mermaid** via componente `<Mermaid>` (registrado em
  `@aprenda/web`). Usados onde a figura realmente ajuda: array na
  memória, lista ligada, pilha, hash com colisão, BST, rotação AVL,
  heap como array/árvore, grafo, BFS, trie. Os nós mais textuais
  (recursão, balanceamento, complexidade de algoritmos) ficam só com
  texto + código.
- **Quizzes formativos** (componente `<Quiz>`) ao final de cada nó
  - 1 pergunta, 3 opções, com `explanation` em cada. São formativos,
    **não creditam XP** (decisão de produto, ver `quiz-formativo`).
- **Checkpoints validados** (componente `<Checkpoint>`) nos nós onde
  a prática em JS faz sentido e onde a validação automática é viável.
  Alvos: `pilhas-filas` (implementar pilha), `hash-tables` (usar
  `Map` pra detectar duplicata), `bst` (implementar busca), e
  `projeto-final` (medir performance). Total: **4 checkpoints** (1 a
  cada ~3-4 nós, atende a meta E16-2 pra trilhas JS-executáveis).
- **Exemplos em JavaScript e Python**. Quando faz sentido mostrar duas
  linguagens (ex: mostrar `Map` em JS e `dict` em Python), mostramos.
  Quando não, JS por padrão (mais gente lê).

### O que ficou de fora (intencionalmente, v1.0.0)

- **Estruturas persistentes** (versão imutável de cada estrutura).
- **Estruturas concorrentes** (lock-free, wait-free).
- **Algoritmos geométricos** (KD-tree, R-tree, range tree).
- **Estruturas de dados para séries temporais** (segment tree,
  Fenwick tree, interval tree) - mencionadas no projeto final
  como "próximos passos".
- **Cache-oblivious structures** (van Emde Boas, etc.).
- **Estruturas de dados em GPU/FPGA**.

### Aprofundamentos futuros (próximas versões)

Os 14 nós cobrem o **núcleo canônico** de ED. Crescimento possível:

- **Nós extras** dentro desta trilha (apenas se virar buraco real):
  - "Skip lists" (alternativa a árvore balanceada).
  - "Bloom filters e HyperLogLog" (estruturas probabilísticas).
  - "Segment tree e Fenwick tree" (consultas em intervalo).
- **Trilha específica filha**: `algoritmos-de-string` (KMP, Z-alg,
  suffix array, suffix automaton, Aho-Corasick).
- **Trilha específica filha**: `estruturas-de-dados-concorrentes`
  (lock-free queue, concurrent hash map, modelos de consistência).
- **Bootcamp agregador** ("Estruturas de Dados Essenciais") que costura
  esta trilha com `complexidade-de-algoritmos` + `algoritmos-de-string`.

Mudanças de escopo aqui viram bump **minor** (v1.1.0) se adicionarem
nós ou camadas, **patch** (v1.0.1) se forem correções, **major**
(v2.0.0) se mudar a base conceitual ou o público-alvo.

### Princípio-guia

> "Se um dev que programa há 3 anos não consegue explicar **quando usar
> essa estrutura e por que ela é rápida**, este nó está falhando."

A camada 🟢 precisa passar nesse teste. As outras camadas agregam
referências e detalhes, mas a essência tem que caber num elevador.

---

Aberto a discussão: abra issue ou comente em
[Issues](https://github.com/lucianodiisouza/aprenda-community/issues).
