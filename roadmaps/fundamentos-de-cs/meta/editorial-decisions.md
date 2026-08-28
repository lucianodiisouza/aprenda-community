# Decisões editoriais - Trilha de Fundamentos de Ciência da Computação

> Histórico de decisões de escopo, organização e curadoria. Quando a
> trilha ganha ou perde um nó, isso fica registrado aqui.

## v1.0.0 - Criação inicial (2026-08-25)

### Origem e motivação

A trilha nasce da observação de que **"Ciência da Computação" é vasto
demais para caber em uma trilha só** - é literalmente uma graduação.
A solução que adotamos aqui é o mesmo modelo do resto do `aprenda-community`:
uma **trilha-núcleo de fundamentos** (esta) + **trilhas específicas**
(planejadas em issues futuras) + **bootcamp agregador** (planejado).

Esta trilha é o **mínimo viável de CS** que serve como base comum para
qualquer trilha específica de tópico (redes, sistemas operacionais,
banco de dados, arquitetura, segurança...).

### Decisão de público: "serve todo mundo" via profundidade progressiva

Diferente das outras trilhas do community (que se posicionam num público
específico: `programacao-do-zero` é iniciante absoluto, `kubernetes` é
avançado), esta trilha atende **quatro públicos** simultaneamente:

- **Iniciante querendo virar dev** - nunca programou ou está começando.
- **Dev júnior/pleno** - sente buraco em fundamentos, quer nivelar.
- **Universitário** - complementa curso de CS em PT-BR.
- **Dev experiente** - revisita pra ensinar, entrevistar ou reciclar.

Como? Cada nó tem **três camadas** dentro do mesmo `.mdx`, sinalizadas
por blocos de cabeçalho visíveis:

- 🟢 **Essencial** - o "todo mundo precisa saber". Inclusivo, sem
  jargão. É onde a pessoa investe a maior parte do tempo.
- 🟡 **Aprofundamento** - liga o conceito com a prática real de dev:
  debugging, trade-offs, "onde isso me morde no dia a dia". Júnior e
  pleno aproveitam bastante.
- 🔴 **Pra quem quer ir além** - referências acadêmicas, formalização,
  papers, história. Universitário e sênior que quer ir fundo.

O **nó 0 (auto-diagnóstico)** devolve um perfil (iniciante / prático /
teórico / especialista) e marca quais camadas pular ou focar. Isso
resolve o "como servir público diferente" sem fragmentar a trilha em
múltiplas variantes.

### Escopo: o que entra e o que fica de fora

**Dentro do núcleo (10 nós):**

1. Auto-diagnóstico (nó de entrada)
2. Como um computador funciona
3. Representação de dados
4. Lógica e pensamento computacional
5. Algoritmos e complexidade
6. Estruturas de dados fundamentais
7. Memória: stack, heap, ciclo de vida
8. Do código à execução
9. Redes: o mínimo que dev precisa saber
10. Pensando em sistemas

**Fora do núcleo (intencionalmente) - vai para trilhas específicas:**

- **Sistemas operacionais** (processos, threads, scheduling, I/O,
  filesystems) → `roadmaps/sistemas-operacionais` (a criar).
- **Banco de dados teoria** (modelo relacional, normalização, ACID,
  CAP theorem) → complemento à `sql-banco-de-dados` e à `nosql`.
- **Concorrência e paralelismo** (locks, mutex, async, race
  conditions) → trilha própria (a criar).
- **Arquitetura de computadores** (cache, pipeline, RISC vs CISC,
  SIMD) → aprofundamento dentro de "como um computador funciona"
  (camada 🔴) + trilha específica no futuro.
- **Linguagens formais e teoria da computação** (autômatos, Turing,
  lambda calculus) → apenas mencionado em "pensando em sistemas"
  (camada 🔴).
- **Segurança da informação** (criptografia, OWASP, threat modeling)
  → trilha própria.
- **IA / Machine Learning** → fora do "fundamentos", é aplicação.
- **Compiladores** → aprofundamento dentro de "do código à execução"
  (camada 🔴).

### Conflitos e encaixe com trilhas existentes

- **`programacao-do-zero`** (13 nós): prática de código. Esta trilha
  é a base **teórica** por trás. Pré-requisito recomendado, não
  bloqueante - o nó 0 (auto-diagnóstico) ajuda a decidir.
- **`complexidade-de-algoritmos`** (13 nós): específica. O nó 5
  desta trilha ("algoritmos e complexidade") é a **intuição
  introdutória** que aponta para a trilha específica. Quem chega
  direto aqui, segue pra lá.
- **`git`** (nó `git-basico` em `programacao-do-zero`): Git é
  ferramenta de pensamento, não fundamento de CS. Não duplica.
- **`terminal-para-devs`**: ferramenta, não fundamento. Não duplica.

### Decisões de curadoria

- **PT-BR primeiro**, como o resto do community. Recursos em inglês
  só quando canônicos (ex: CS:APP, Beej's Guide to Network
  Programming).
- **Recursos próprios são prioridade a longo prazo** (alinhado com
  style guide). Onde não há recurso próprio bom, linkamos docs
  oficiais (MDN, W3C) ou material reconhecido em PT-BR.
- **Sem recursos pagos.**
- **`type` sempre preenchido** (`artigo` | `video` | `doc` | `curso`
  | `exercicio`).
- **Mínimo 1, máximo 3 recursos por nó.** Em geral 2.

### Formato dos nós (camadas 🟢🟡🔴)

Cada nó `.mdx` desta trilha segue um esqueleto ligeiramente diferente
das outras trilhas do community (que são lineares). Estrutura:

```mdx
---
id: exemplo
title: "Exemplo de Nó"
resources: [...]
---

Introdução curta (1-2 frases) - por que esse nó existe, onde se encaixa.

## O essencial 🟢

[Conteúdo principal - intuição antes de definição, exemplo,
2-4 conceitos pra fixar. Tom do style guide.]

## Aprofundamento 🟡

[Ligação com prática, debugging, trade-offs, "onde isso morde
no dia a dia". 1-2 exemplos práticos.]

## Pra quem quer ir além 🔴

[1 referência acadêmica ou paper, formalização leve, ou
menção histórica. Curto - é bônus, não obrigatório.]
```

O **nó 0 (auto-diagnóstico)** é exceção: é curto, é um quiz
marcador de perfil, não segue o esqueleto acima.

### Aprofundamentos futuros (próximas versões)

Os 10 nós atuais cobrem o "mínimo viável de CS" para qualquer dev.
Crescimento possível:

- **Trilhas específicas filhas** (a abrir como issues próprias):
  `sistemas-operacionais`, `redes-para-devs` (aprofundamento),
  `banco-de-dados-teoria`, `arquitetura-de-computadores`,
  `linguagens-formais-e-automatos`, `compiladores`, `seguranca-da-informacao`.
- **Bootcamp agregador** ("Ciência da Computação Essencial") que
  costura esta trilha com as específicas filhas.
- **Nós extras** dentro desta trilha (apenas se virar buraco
  real): "história da computação" (curiosidade), "ética em CS"
  (tópico moderno).
- **Quiz por nó** com perguntas por camada 🟢🟡🔴 - hoje o quiz
  é só no diagnóstico.

Mudanças de escopo aqui viram bump **minor** (v1.1.0) se adicionarem
nós ou camadas, **patch** (v1.0.1) se forem correções, **major**
(v2.0.0) se mudar a base conceitual ou o público-alvo.

### Princípio-guia

> "Se um dev que programa há 3 anos não consegue explicar o
> conceito em 30 segundos, este nó está falhando."

A camada 🟢 precisa passar nesse teste. As outras camadas agregam,
mas a essência tem que caber num elevador.

---

Aberto a discussão: abra issue ou comente em
[Issues](https://github.com/lucianodiisouza/aprenda-community/issues).
