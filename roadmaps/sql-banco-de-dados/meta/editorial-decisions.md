# Decisões editoriais - Trilha de SQL e Banco de Dados

> Histórico de decisões de escopo, organização e curadoria. Quando a
> trilha ganha ou perde um nó, isso fica registrado aqui.

## v1.0.0 - Proposta inicial

### Por que essa trilha

A trilha de Backend usa Prisma (ORM) sobre PostgreSQL sem nunca
ensinar SQL puro. Quem passa por Backend aprende a chamar
`prisma.user.findMany()` sem entender o `SELECT` que roda por
baixo. Essa trilha existe para fechar essa lacuna: SQL puro, sem
depender de nenhum ORM ou linguagem de aplicação específica.

### Standalone, sem pré-requisito

Diferente de uma trilha que assume Backend, essa entra sem exigir
nada além de lógica básica (a trilha Programação do Zero já cobre
isso, mas nem isso é obrigatório para SQL). Isso deixa a trilha
útil tanto para quem nunca programou quanto para quem já fez
Backend e quer entender o que o ORM esconde.

### Banco usado como referência

Os exemplos usam sintaxe **PostgreSQL** (mesmo banco já curado na
trilha Backend), mas o conteúdo é, em sua maior parte, SQL padrão
(ANSI SQL) que funciona igual em MySQL e SQLite, com pequenas
variações de tipo. Isso é mencionado explicitamente no nó
`projeto-final`.

### O que ficou de fora (intencionalmente)

- **NoSQL / bancos não-relacionais** (MongoDB, Redis) - modelo de
  dados fundamentalmente diferente, mereceria trilha própria se
  fizer sentido no futuro.
- **Administração de banco** (backup, replicação, tuning de
  servidor) - é DevOps/DBA, não uso de SQL no dia a dia de quem
  programa.
- **Stored procedures e triggers** - aprofundamento específico de
  banco, pouco usado por quem está começando.
- **Window functions** (`ROW_NUMBER`, `RANK`, `OVER`) - avançado
  o suficiente para ficar de fora do "iniciante"; candidato a
  aprofundamento futuro.
- **ORMs** (Prisma, SQLAlchemy, TypeORM) - de propósito. Essa
  trilha é sobre o que o ORM esconde, não sobre o ORM em si; ORM já
  é abordado na trilha Backend.

### Decisões de curadoria

- **Documentação oficial do PostgreSQL** como fonte primária para
  conceitos de banco (tipos, transação, CTE) - estável, versionada,
  detalhada.
- **W3Schools** para sintaxe SQL básica (`SELECT`, `JOIN`,
  `GROUP BY`) - referência multi-década, exemplos diretos,
  editor interativo (`Try-SQL`) sem precisar instalar nada.
- **Wikipédia PT-BR** para os dois conceitos mais teóricos
  (modelo entidade-relacionamento, normalização) - conteúdo estável
  em português, sem equivalente oficial em PT-BR mais direto.
- **OWASP** para SQL injection - referência de segurança
  reconhecida internacionalmente, mesma organização citada em
  discussões de segurança web em geral.
- **Sem recursos pagos.**
- URLs verificadas manualmente com o `fetch` do Node (mesmo runtime
  do `scripts/check-links.mjs`) antes de entrar na trilha - alguns
  domínios (W3Schools) bloqueiam `curl` puro mas respondem
  normalmente ao fetch usado pelo CI.

### Aprofundamentos futuros

- **`window-functions`** - `ROW_NUMBER`, `RANK`, `OVER`, para quem
  já domina o básico e precisa de ranking/particionamento.
- **`orm-na-pratica`** - conectar essa trilha com a trilha Backend,
  mostrando o SQL que o Prisma gera por baixo de cada chamada.
- **`nosql-intro`** - trilha própria, se fizer sentido abrir
  cobertura de banco não-relacional.

Mudanças de escopo aqui viram bump **minor** se adicionarem nós,
**patch** se forem correções, **major** se mudar a ordem ou a base
conceitual.

---

Aberto a discussão: abra issue ou comente em
[Issues](https://github.com/lucianodiisouza/aprenda-community/issues).
