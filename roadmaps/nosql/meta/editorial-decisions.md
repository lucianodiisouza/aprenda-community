# Decisões editoriais - Trilha de NoSQL

> Histórico de decisões de escopo, organização e curadoria. Quando a
> trilha ganha ou perde um nó, isso fica registrado aqui.

## v1.0.0 - Proposta inicial (2026-08-25)

### Por que essa trilha

A trilha de SQL (`sql-banco-de-dados`) cobre o modelo relacional
a fundo. A trilha de Backend usa SQL via Prisma. **Mas o mundo
não é só relacional.** A maioria dos sistemas reais combina
**mais de um banco**: Postgres pra dados de negócio, Redis pra
cache, MongoDB pra dados semi-estruturados.

A trilha Backend já sinalizava NoSQL como "trilha própria" em
suas decisões editoriais, e a trilha SQL sinalizava "nosql-intro"
como aprofundamento futuro. Esta trilha é a materialização disso.

### O escopo: "complemento, não substituto"

Esta trilha **não substitui** a trilha de SQL. Pressupõe que
quem chega aqui:

- Sabe modelar dados em tabelas
- Sabe escrever `SELECT` com `JOIN` e agregação
- Conhece o básico de transações (ACID)

A proposta é **estender** o repertório: "além de relacional,
existem outras formas de guardar dado, e cada uma resolve um
problema diferente".

### Bancos usados como exemplo

A trilha é **agnóstica de banco** conceitualmente (o foco é o
**modelo de dados**), mas precisa de exemplos concretos. A escolha
foi os dois bancos mais usados do ecossistema JavaScript/Node:

- **MongoDB** como exemplo de **banco de documento** - é o
  mais popular do mercado, documentado em PT-BR, e tem o
  driver oficial pros principais runtimes.
- **Redis** como exemplo de **banco chave-valor** - é o padrão
  de facto pra cache e sessões, presente em quase toda stack
  backend moderna.

Outros modelos (grafo, columnar, time series) **ficam de fora**
da v1.0.0 - são usos mais nichados e têm demanda menor no
público-alvo da trilha.

### Decisões de estrutura

- **10 nós** com proporção mais enxuta que a trilha de Backend
  (1 topic + 8 subtopics + 1 milestone). É uma trilha
  **complementar**, não precisa de 12 nós.
- **Blocos ímpares (1, 3, 5, 7, 9) MongoDB; pares (2, 4, 6, 8)**
  contexto e Redis. Estrutura intencional pra alternar entre
  "modelo conceitual" e "banco concreto".
- **`escolhendo-entre-sql-e-nosql`** perto do fim, antes do
  projeto final - dá à pessoa o framework de decisão **antes**
  de mandar aplicar.
- **Blocos de código com linguagem explícita** (`javascript`,
  `bash`, `json`).
- **Recursos no frontmatter**, mínimo 1, máximo 3 por nó.

### Pré-requisito declarado

Esta trilha **assume** que a pessoa já passou por:

- [**SQL e Banco de Dados**](../../sql-banco-de-dados) -
  especialmente modelagem entidade-relacionamento, `SELECT`
  com `JOIN`, e ACID. O nó `escolhendo-entre-sql-e-nosql`
  reusa esses conceitos.
- [**Backend**](../../backend) - o projeto final pressupõe
  Express + Prisma. Sem essa base, o "API com Postgres + Redis"
  não tem onde encaixar.

### Decisões de curadoria

- **MongoDB Manual oficial** (`mongodb.com/docs`) como fonte
  canônica - em inglês, mas muito bem escrito, com exemplos
  práticos.
- **Documentação do `mongodb` (driver Node.js)** como fonte
  pra uso programático - driver oficial, versão atual.
- **Redis documentation** (`redis.io/docs`) como fonte canônica
  - bem organizada, com tutoriais por caso de uso.
- **`ioredis`** como cliente Node preferido nos exemplos -
  mais recursos que `node-redis` oficial e melhor tipagem
  em TypeScript.
- **Sem recursos pagos como caminho principal.** Recursos pagos
  só quando o conteúdo equivalente gratuito é claramente
  inferior.

### O que ficou de fora (intencionalmente)

- **Bancos de grafo** (Neo4j, ArangoDB) - uso nichado, vale
  trilha própria se a demanda vier.
- **Bancos columnar** (Cassandra, ScyllaDB) - mesmo motivo.
- **Time series** (InfluxDB, TimescaleDB) - mesmo motivo.
- **MongoDB Atlas / Redis Cloud** - serviços gerenciados. A
  trilha cobre o open source, e o managed é configuração à
  parte que muda com frequência.
- **Sharding, replicação, operações de banco** - é DevOps/DBA,
  não uso de NoSQL no dia a dia. Vale trilha "Observabilidade
  e Operação" se vier.
- **Aggregation pipelines avançados** (`$lookup`, `$facet`,
  `$graphLookup`) - cobre o básico, mas o avançado é
  aprofundamento futuro.
- **Transações multi-documento no MongoDB** - existe, mas
  tira a principal vantagem do NoSQL (sem esquema rígido).
  Não é o caso de uso típico.

### Aprofundamentos futuros

- **`mongodb-consultas`** - aggregation pipeline avançado
  (`$lookup`, `$facet`, `$bucket`), índices compostos,
  text search.
- **`mongodb-relacionamentos`** - Change Streams (escutar
  mudanças em tempo real), schema validation.
- **`chave-valor-redis`** - Redis Streams, Pub/Sub avançado,
  Redis como message broker.
- **`redis-casos-de-uso`** - rate limit distribuído com
  sliding window, cache com stampede protection.
- **Trilha de Grafos** (Neo4j) - se a demanda vier.
- **Trilha de Time Series** (InfluxDB/TimescaleDB) - mesmo.

Mudanças de escopo aqui viram bump **minor** (v1.1.0) se
adicionarem nós, **patch** (v1.0.1) se forem correções, **major**
(v2.0.0) se mudar a ordem ou a base conceitual.

---

Aberto a discussão: abra issue ou comente em
[Issues](https://github.com/lucianodiisouza/aprenda-community/issues).
