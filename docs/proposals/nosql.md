# Proposta: Trilha de NoSQL

> **Status:** decisões consolidadas em 2026-08-25, aguardando abertura de issue.
> **Autor:** Luciano (com a Mavis 👋)
> **Data:** 2026-08-25
>
> Este documento é a base da [issue de trilha nova](../../.github/ISSUE_TEMPLATE/trilha-nova.md)
> que será aberta no repositório. Depois do ✅, vira `roadmaps/nosql/`.

---

## Decisões consolidadas (2026-08-25)

| Decisão | Escolha | Implicação direta |
| --- | --- | --- |
| **Escopo** | Só a trilha, **dentro do bootcamp de Backend** | Complementa `sql-banco-de-dados`, entra no bootcamp logo depois de `modelagem-de-banco`. |
| **Cobertura** | **Documento (MongoDB) + Chave-valor (Redis) — só** | Grafos, colunar e time-series ficam de fora da v1.0.0. Cobrir 2 modelos com profundidade > cobrir 4 superficialmente. |
| **Profundidade** | **Intermediário, mais enxuto que a Backend** (10 nós) | É trilha **complementar**, não substituta da SQL. Não precisa de 12 nós. |
| **Tool-agnostic** | **Conceitos do modelo são genéricos; banco é exemplo** | MongoDB e Redis entram como os mais usados no ecossistema JS/Node, mas o conhecimento se transfere pra DynamoDB, CouchDB, Memcached, etc. |
| **Decisão SQL vs NoSQL** | **Nó dedicado** perto do fim, antes do projeto final | Evita o "depende" vazio. Dá framework explícito pra escolher banco por problema, não por hype. |
| **Recursos** | **Docs oficiais como canônico** (mongodb.com, redis.io), PT-BR quando existir | EN inevitável pras docs oficiais; PT-BR priorizado em recursos secundários. |

---

## TL;DR (1 parágrafo)

Propor uma **trilha única "NoSQL"** com **10 nós** (1 topic + 8 subtopics + 1
milestone) que cobre os **dois modelos NoSQL mais usados em backend** —
**documento** (MongoDB: setup, CRUD, consultas, agregação, embed vs reference)
e **chave-valor** (Redis: tipos de dados, cache, sessão, rate limit) —
fechando com um **nó de decisão SQL vs NoSQL** na prática e um **projeto
final de API com Postgres + Redis** (a combinação mais comum do mercado).
A trilha é **complementar à SQL** e entra no bootcamp Backend logo depois de
`modelagem-de-banco`, antes da trilha Backend em si.

---

## 1. Por que essa trilha agora

Três sinais:

1. **A maioria dos sistemas reais combina mais de um banco.** Postgres pra
   dados de negócio, Redis pra cache e sessão, às vezes MongoDB pra dados
   semi-estruturados. Quem sai do bootcamp Backend conhecendo só SQL entra
   em choque no primeiro dia de trabalho.
2. **As trilhas Backend e SQL já sinalizavam "trilha própria" pra NoSQL.**
   `roadmaps/backend/meta/editorial-decisions.md` (v1.0.0) lista MongoDB/
   NoSQL como "trilha própria se a demanda vier"; `roadmaps/sql-banco-de-dados/
   meta/editorial-decisions.md` (v1.0.0) lista `nosql-intro` como
   "aprofundamento futuro". A demanda veio.
3. **O stack "Postgres + Redis" é o default de mercado.** 90% dos jobs
   backend pedem fluência nos dois. Vale o esforço de organizar conteúdo
   coeso em PT-BR.

A trilha **não substitui** a de SQL — pressupõe que quem chega aqui já
modela em tabelas, sabe `JOIN`, e conhece ACID. A proposta é **estender
o repertório**, não criar atrito entre os modelos.

---

## 2. Decisão de escopo: por que 2 modelos só, e não 4

Considerei dois formatos:

| Formato | Prós | Contras |
| --- | --- | --- |
| **A. Cobrir os 4 modelos (documento, chave-valor, colunar, grafo)** | Visão completa do ecossistema | 30+ nós, 90% dos quais a pessoa nunca vai usar. Dilui o que importa. |
| **B. Documento + chave-valor (10 nós)** ✅ | Cobre 95% do uso real em backend | Grafos e colunar ficam pra aprofundamento futuro se vier demanda |

**Escolha: B.** Mesma justificativa do tipo de conteúdo: "poucas trilhas,
bem-feitas" (princípio do Aprenda). Quem precisa de grafo (recomendação,
rede social) ou time-series (IoT, métricas) tem caso específico; a
trilha base cobre o que 95% dos devs backend usam no dia a dia.

---

## 3. Pré-requisitos

- [**SQL e Banco de Dados**](../../roadmaps/sql-banco-de-dados) —
  especialmente modelagem entidade-relacionamento, `SELECT` com `JOIN`,
  e ACID. O nó `escolhendo-entre-sql-e-nosql` reusa esses conceitos.
- [**Backend**](../../roadmaps/backend) — o projeto final pressupõe
  Express + Prisma. Sem essa base, o "API com Postgres + Redis" não
  tem onde encaixar.

Quem vem de fora e não passou pela trilha Backend, o `projeto-final`
ainda funciona como exercício de integração, mas perde o gancho de
"juntar com o que você já construiu".

---

## 4. Estrutura proposta (a trilha)

- **Slug:** `nosql`
- **Dificuldade:** `intermediario`
- **Nós:** 10 (1 topic + 8 subtopics + 1 milestone)
- **Duração estimada:** 2 semanas em ritmo calmo

A trilha é **linear** (uma coluna de `children`) com progressão de
**contexto** (1) → **modelo de documento em 5 nós** (2–6) → **chave-valor
em 2 nós** (7–8) → **decisão prática** (9) → **projeto final** (10).

### Estrutura detalhada

| #  | ID                              | Tipo      | Título                                                       | O que cobre                                                                                              |
| -- | ------------------------------- | --------- | ------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| 1  | `introducao-nosql`              | topic     | O que é NoSQL e Quando Usar                                  | Os 4 modelos (documento, chave-valor, colunar, grafo); foco nos 2 primeiros                              |
| 2  | `modelo-documento`              | subtopic  | Modelo de Documento: Coleções e JSON-like                    | BSON, `_id`, schema flexível, comparação direta com SQL                                                  |
| 3  | `mongodb-setup`                 | subtopic  | MongoDB: Instalação e Primeiro Documento                     | `docker run` local, `mongosh`, `insertOne`, primeiro documento                                            |
| 4  | `mongodb-crud`                  | subtopic  | MongoDB: Inserir, Buscar, Atualizar e Remover                | `insertOne/Many`, `find` (com `toArray()`), `updateOne` com `$set` vs `replaceOne`, `deleteOne/Many`       |
| 5  | `mongodb-consultas`             | subtopic  | MongoDB: Filtros, Projeção, Ordenação e Agregação            | `$and`/`$or`, projeção, `sort`/`skip`/`limit`, aggregation pipeline (`$match`/`$group`), índices            |
| 6  | `mongodb-relacionamentos`       | subtopic  | MongoDB: Embed vs Reference                                  | Quando embed (sempre lê junto, lista pequena), quando reference (lista cresce); `$lookup`                  |
| 7  | `chave-valor-redis`             | subtopic  | Redis: O Banco Chave-Valor                                   | Docker local, `SET/GET/DEL/EXISTS`, 5 tipos (string/hash/list/set/zset), TTL com `EX`                    |
| 8  | `redis-casos-de-uso`            | subtopic  | Redis na Prática: Cache, Sessão e Rate Limit                 | Padrão cache-com-invalidação, sessão com revogação, `INCR`+`EXPIRE` pra rate limit                       |
| 9  | `escolhendo-entre-sql-e-nosql`  | subtopic  | SQL ou NoSQL: Como Decidir                                   | Framework de 3 perguntas; combinação típica Postgres+Redis; armadilha do "NoSQL resolve tudo"             |
| 10 | `projeto-final`                 | milestone | Projeto Final: API com Postgres + Redis                      | Brief reaproveitando `api-rest-com-autenticacao` + camada Redis (cache, sessão, rate limit, healthcheck) |

### Resumo de interatividade

| Recurso | Quantidade | Onde brilha |
| --- | --- | --- |
| `<Quiz>` | 0–2 nós (opcional) | Onde houver decisão clara: "embed ou reference?" no nó 6, "SQL ou NoSQL?" no nó 9 |
| `<Mermaid>` | 0 | Trilha é majoritariamente código + dados; diagramas não agregam |
| `<Figure>`/imagens | 0 | Mesmo motivo |
| Recursos (1–3 por nó) | 9 nós | Docs oficiais MongoDB e Redis (EN) como canônico; PT-BR priorizado em secundários |

> **Decisão deliberada:** a v1.0.0 tem **pouca interatividade** comparada
> com a Prompt Engineering. A razão é que o conteúdo é majoritariamente
> **prática de console/terminal** (rodar `mongosh`, `redis-cli`) — não cabe
> bem em `<Quiz>` ou `<Checkpoint>`. A interatividade pode aumentar em
> versões futuras (e.g., `<Checkpoint>` com `mongosh` em sandbox).

---

## 5. Os 3 "momentos uau" da trilha

1. **`mongodb-relacionamentos`** — O reframe que muda como a pessoa modela:
   "relacionamento" não é regra em MongoDB, é **escolha** (embed ou
   reference), e a escolha é guiada pelo **padrão de acesso**, não pela
   forma dos dados. Quem vem de SQL acha isso estranho; quem internaliza
   nunca mais modela errado.
2. **`redis-casos-de-uso`** — O momento em que o aluno vê o **mesmo banco**
   resolver 3 problemas diferentes (cache, sessão, rate limit) com 3
   padrões diferentes. É onde Redis deixa de ser "coisa de cache" e vira
   "ferramenta de infraestrutura".
3. **`escolhendo-entre-sql-e-nosql`** — Provavelmente o nó mais importante.
   O framework de 3 perguntas + a armadilha do "depende" + a constatação
   de que **sistemas reais combinam** quebram o pensamento tribal. O aluno
   sai pensando "qual banco resolve **esse** problema?", não "qual banco é
   melhor?".

---

## 6. Recursos — curadoria inicial (a aprofundar)

| Camada | Onde olhar primeiro |
| --- | --- |
| **Canônico MongoDB** | `mongodb.com/docs/manual` (EN) + `mongodb.com/docs/drivers/node` (EN) |
| **Canônico Redis** | `redis.io/docs/latest` (EN) — bem organizado, com tutoriais por caso de uso |
| **PT-BR** | Artigos TabNews / dev.to sobre MongoDB e Redis (curados por qualidade) |
| **Cliente Node** | `mongodb` (driver oficial) e `ioredis` (cliente preferido pela tipagem TS e recursos) |
| **Curado ≤ 3 por nó** | 1 doc oficial + 1 recurso PT-BR quando existir, no máximo |

> **Decisão deliberada:** serviços gerenciados (MongoDB Atlas, Redis Cloud)
> **não entram** na v1.0.0. A trilha cobre o open source; o managed é
> configuração à parte que muda com frequência. Aprofundamento futuro se
> a demanda vier.

---

## 7. Posição no Bootcamp Desenvolvedor Backend

A trilha entra logo depois de `modelagem-de-banco`, antes da `backend`:

```text
programacao-do-zero
calculadora-de-gorjeta
terminal-para-devs
git
typescript          ← nova na v1.16.0
sql-banco-de-dados
modelagem-de-banco
nosql               ← NOVA
backend
api-rest-com-autenticacao
...
```

**Justificativa da posição:** "perto do SQL e da modelagem" — a pessoa
acaba de ver o relacional, e logo em seguida vê as alternativas. Antes
de `backend` porque o "API com Postgres + Redis" do projeto final
pressupõe a base do Express/Prisma, e é melhor **aprender o que cada
banco faz de melhor** antes de **juntar tudo numa API**.

---

## 8. O que ficou de fora (intencionalmente)

- **Bancos de grafo** (Neo4j, ArangoDB) — uso nichado (rede social,
  recomendação). Vale trilha própria se a demanda vier.
- **Bancos columnar** (Cassandra, ScyllaDB) — mesmo motivo.
- **Time series** (InfluxDB, TimescaleDB) — mesmo motivo.
- **MongoDB Atlas / Redis Cloud** — managed services. Configuração
  muda com frequência, fora do escopo essencial.
- **Sharding, replicação, operações de banco** — DevOps/DBA, não uso
  de NoSQL no dia a dia de quem programa.
- **Aggregation pipelines avançados** (`$lookup`, `$facet`, `$graphLookup`)
  — cobre o básico, avançado fica pra aprofundamento.
- **Transações multi-documento no MongoDB** — existe, mas tira a principal
  vantagem do NoSQL (schema flexível). Não é caso de uso típico.

---

## 9. Aprofundamentos futuros

- **`mongodb-consultas`** — aggregation pipeline avançado (`$lookup`,
  `$facet`, `$bucket`), índices compostos, text search.
- **`mongodb-relacionamentos`** — Change Streams (escutar mudanças em
  tempo real), schema validation.
- **`chave-valor-redis`** — Redis Streams, Pub/Sub avançado, Redis como
  message broker.
- **`redis-casos-de-uso`** — rate limit distribuído com sliding window,
  cache com stampede protection.
- **Trilha de Grafos** (Neo4j) — se a demanda vier.
- **Trilha de Time Series** (InfluxDB/TimescaleDB) — mesmo.

Mudanças de escopo viram bump **minor** (v1.1.0) para adições, **patch**
(v1.0.1) para correções, **major** (v2.0.0) para mudança de ordem ou base.

---

## 10. Próximos passos (proposta de fluxo)

1. **Abrir issue** de trilha nova usando o template
   [`.github/ISSUE_TEMPLATE/trilha-nova.md`](../../.github/ISSUE_TEMPLATE/trilha-nova.md).
   Linkar este documento.
2. **Discussão aberta** por uns dias — pré-requisitos, escopo (cobrir
   só documento e chave-valor), profundidade da agregação, etc.
3. **Implementar nó por nó** em PRs separados — conteúdo já existe
   como referência, revisão é mais sobre tom e curadoria.
4. **Atualizar bootcamp** com a nova trilha (já feito como parte da v1.16.0).
5. **CHANGELOG + README** com a nova entrada (já feito).

---

Aberto a discussão: abra issue ou comente em
[Issues](https://github.com/lucianodiisouza/aprenda-community/issues).
