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

## v1.1.0 - Os três nós que faltavam (2026-08-25)

### Origem

A v1.0.0 da trilha deixava três buracos pedagógicos que ficavam
visíveis quando a pessoa tentava ir além do trivial:

1. **Async no servidor era usado, nunca explicado.** O `express`
   abria com `(req, res) => { ... }` sem entrar no que o `await`
   realmente faz, e o que é o Event Loop. Quem nunca viu
   assincronia em profundidade tropeçava em "promise rejeitada
   não tratada" e não sabia pra onde olhar.
2. **Erro sem padrão.** Cada rota jogava `throw new Error(...)` e
   o Express devolvia 500 genérico. Faltava o padrão profissional
   de classes de erro + middleware central.
3. **Sem debugging real.** O caminho natural depois de "escrevi
   o teste e ele falha" é "como eu inspeciono isso?" - e a
   resposta era `console.log` espalhado.

### O que entrou (3 nós novos)

| ID | Título | Inserido entre |
| --- | --- | --- |
| `async-aprofundado` | Promises, async/await e o Event Loop | `javascript-backend` → `express` |
| `error-handling` | Tratamento de Erros em uma API | `express` → `rest-api` |
| `debugging` | Debug de uma API Node: do console.log ao debugger | `testes` → `projeto-final` |

A trilha passa de **12 pra 15 nós** (1 topic + 13 subtopic + 1
milestone). Os três são `subtopic` e `recommended: true` - fazem
parte do caminho essencial, não são opcionais.

### Decisões de posição

A tentação era empilhar os três no fim. Escolhemos **inserir
estrategicamente** porque cada um desbloqueia o que vem depois:

- `async-aprofundado` **antes** de `express` porque rotas Express
  são async por natureza - é melhor entender o runtime antes de
  montar rotas.
- `error-handling` **logo depois** de `express` porque o sistema de
  middleware de erro do Express é a base do padrão. Esperar até
  depois de auth/validação perde o gancho.
- `debugging` **depois** de `testes` e **antes** de `projeto-final`
  porque é a ferramenta que a pessoa vai usar quando o projeto
  final não funcionar. Última parada antes do "agora junta tudo".

### Decisões de conteúdo

- **`async-aprofundado`** cobre Promise, async/await como açúcar
  sintático, e o Event Loop em 30 segundos (sem entrar no
  diagrama das fases do loop - isso é aprofundamento futuro).
  Termina com a deixa pro `error-handling`: "o que acontece
  quando o await rejeita e o Express não captura?".
- **`error-handling`** usa o padrão **classes de erro com
  status** (`HttpError`, `NotFoundError`, `ValidationError`) +
  middleware central de 4 parâmetros. O nó `validacao` (v1.0.0)
  continua responsável pela validação de input (Zod) - este nó
  é sobre o que fazer **depois** que o erro existe.
- **`debugging`** cobre `node --inspect` (Chrome DevTools),
  `launch.json` no VS Code, leitura de stack trace (de baixo
  pra cima) e log estruturado em JSON. Adiciona o primeiro
  `<Quiz>` da trilha (no fechamento).

### Pré-requisito atualizado

A v1.0.0 declarava `programacao-do-zero` como pré-requisito
("sintaxe de JavaScript: variáveis, funções, arrays, objetos,
async/await"). A v1.1.0 **mantém** o mesmo pré-requisito porque
o `async-aprofundado` se apoia no `async/await` básico que a
trilha Programação do Zero já cobre. Quem vier de outra origem
deve conhecer `async/await` antes de entrar.

### O que ficou de fora (intencionalmente)

- **Fases do Event Loop** (`timers`, `poll`, `check`, etc.) - o nó
  cobre o conceito em 30 segundos; aprofundamento fica pra uma
  trilha dedicada de "Node Avançado" se a demanda vier.
- **Async error wrapper** (helper `asyncHandler` que embrulha
  try/catch automaticamente) - o padrão com middleware central
  mostrado no `error-handling` é mais limpo. O wrapper vira
  opcional, não essencial.
- **APM, profiling, tracing distribuído** - é o tema "Observabilidade"
  que a gente avalia como trilha adicional futura. Debugging local
  é o suficiente pra v1.1.0.
- **Hot reload (nodemon, tsx watch)** - o `express` original
  menciona nodemon de passagem. Aprofundamento não cabe no
  escopo desta trilha.

### Aprofundamentos futuros (revisado)

Mantemos os mesmos do v1.0.0, mais estes:

- **`async-aprofundado`** - padrão de retry com backoff, Promise
  utilities (`Promise.all`, `Promise.race`, `Promise.allSettled`),
  AbortController pra cancelar requests.
- **`error-handling`** - centralização de logging de erro, Sentry
  / similar, alertas em produção.
- **`debugging`** - profiling de CPU e heap (`--prof`,
  `clinic.js`), tracing distribuído quando virar microsserviço.

Mudanças aqui viram bump **minor** (v1.2.0) para adições, **patch**
(v1.1.1) para correções, **major** (v2.0.0) para mudança de ordem
ou base conceitual.

---

Aberto a discussão: abra issue ou comente em
[Issues](https://github.com/lucianodiisouza/aprenda-community/issues).
