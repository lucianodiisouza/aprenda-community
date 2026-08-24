# Decisões editoriais - Trilha de Backend

> Histórico de decisões de escopo, organização e curadoria. Quando a
> trilha ganha ou perde um nó, isso fica registrado aqui.

## v1.0.0 - Migração inicial (2026-08-24)

### Origem

Esta trilha foi **criada** no `aprenda-community` (público, contribuição),
seguindo a mesma estrutura da trilha de Frontend: 12 nós encadeados,
1 `topic` de abertura, 10 `subtopic`, 1 `milestone` de fechamento.

A versão inicial é a "v1.0.0" - ponto de partida. Conforme a trilha
amadurece, mudanças de escopo viram bump **minor** (v1.1.0) para adição
de nós, **patch** (v1.0.1) para correções, **major** (v2.0.0) para
mudança de ordem ou base conceitual.

### Decisões de estrutura (espelhando Frontend)

- **12 nós** com a mesma proporção: 1 topic + 10 subtopics + 1 milestone.
- **`projeto-final.mdx` termina com "próximo passo"** sugerindo DevOps ou
  Backend Avançado - mesmo padrão de "fechamento aberto" da trilha de
  Frontend.
- **Blocos de código com linguagem explícita** (`javascript`, `bash`, `sql`,
  `prisma`) - o app pode transformar em playground no build.
- **Recursos no frontmatter** (não no corpo), mínimo 1, máximo 3 por nó.
- **Texto `## Experimente`** usado quando o código é rodável sem
  servidor externo (ex: leitura de arquivo local).

### Pré-requisito declarado

Esta trilha **assume** que a pessoa já passou por:

- [**Programação do Zero**](../../programacao-do-zero) - sintaxe de
  JavaScript (variáveis, funções, arrays, objetos, async/await).
- [**Frontend**](../../frontend) - entender o que é HTTP do lado do cliente
  ajuda muito, mas não é bloqueante: o nó `http` repassa o essencial.

Quem nunca mexeu com banco, o nó `banco-dados` cobre o básico de SQL -
mas se quiser ir fundo, vale uma trilha standalone de SQL antes.

### Decisões de curadoria

- **MDN PT-BR** como fonte primária para HTTP e Web APIs.
- **Documentação oficial** das ferramentas (Express, Prisma, Zod, JWT)
  como fonte canônica - geralmente em inglês com `lang: en`.
- **PostgreSQL** escolhido como banco padrão - mais pedido no mercado
  brasileiro, open source e tem versão gratuita em todo canto.
- **Prisma** escolhido como ORM - type-safety e DX melhor que os
  concorrentes pra quem está começando.
- **Vitest** escolhido como test runner - moderno, rápido, integração
  nativa com ESM.
- **JWT** com `jsonwebtoken` + `bcrypt` - simples e suficiente pra
  começar. Sessões ficam pra "Backend Avançado".
- **Sem recursos pagos.**

### O que ficou de fora (intencionalmente)

- **TypeScript** - trilha separada ou aprofundamento futuro. Mantemos JS
  puro pra não inflar o escopo.
- **NestJS / Fastify / Hono** - o nó `express` introduz o framework
  minimalista. Frameworks mais opinativos ficam pra "Backend Avançado".
- **MongoDB / NoSQL** - foco em relacional. Quem precisa de NoSQL, trilha
  própria.
- **GraphQL / tRPC** - fora do escopo "REST basics". Vale uma trilha
  comparativa depois.
- **Docker detalhado** - o nó `banco-dados` cita o `docker run` do Postgres
  como dica, sem aprofundar. Trilha de DevOps cobre.
- **CI/CD** - o projeto-final menciona deploy, mas o pipeline (GitHub
  Actions, etc.) é tema de outra trilha.
- **Filas (RabbitMQ, BullMQ), cache (Redis), microsserviços** - trilha
  "Backend Avançado".
- **WebSockets / Server-Sent Events** - real-time fica pra aprofundamento.

### Aprofundamentos futuros

- **`http`** - HTTPS, TLS, cabeçalhos avançados, CORS detalhado.
- **`express`** - middleware avançado, error handling patterns, segurança
  (helmet, rate limit).
- **`rest-api`** - versionamento de API (`/v1/usuarios`), paginação
  (cursor vs offset), HATEOAS.
- **`banco-dados`** - índices, transações, JOINs avançados, modelagem
  mais profunda.
- **`orm`** - queries complexas, performance, raw SQL quando necessário.
- **`autenticacao`** - refresh tokens, OAuth2, sessões, RBAC (controle
  de acesso por papel).
- **`validacao`** - erros tipados, internacionalização de mensagens.
- **`testes`** - mocks avançados, test containers, E2E com Playwright.
- **`projeto-final`** - esqueleto de API com auth + CRUD + deploy no
  Railway, com Docker Compose pra rodar local.

Mudanças de escopo aqui viram bump **minor** (v1.1.0) se adicionarem
nós, **patch** (v1.0.1) se forem correções, **major** (v2.0.0) se
mudar a ordem ou a base conceitual.

---

Aberto a discussão: abra issue ou comente em
[Issues](https://github.com/lucianodiisouza/aprenda-community/issues).
