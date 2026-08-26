# Decisões editoriais - Trilha de TypeScript

> Histórico de decisões de escopo, organização e curadoria. Quando a
> trilha ganha ou perde um nó, isso fica registrado aqui.

## v1.0.0 - Proposta inicial (2026-08-25)

### Por que essa trilha

Em 2026, **TypeScript deixou de ser "opcional" no ecossistema
JavaScript**. A maioria das bibliotecas novas já é escrita em TS
ou fornece tipos, frameworks como NestJS, Drizzle e tRPC são
TS-first, e a oferta de emprego backend pede TS na maioria das
vagas. O bootcamp Desenvolvedor Backend ensinava Node + Express
em JavaScript puro - ficava uma lacuna: o dev saía sem saber
tipar o próprio código.

Essa trilha existe pra fechar isso. **Pré-requisito recomendado**
(alinhado com a posição no bootcamp: depois de `programacao-do-zero`),
não bloqueante: dá pra entrar na trilha de Backend sem TS, e voltar
depois.

### Stack de exemplo

A trilha é **agnóstica de framework** na linguagem em si (TS é TS),
mas precisa de exemplos concretos. A escolha foi:

- **Node + Express** como runtime e framework - mesma escolha
  da trilha Backend, dá continuidade.
- **Prisma + Zod** como ORM e validador - mesma escolha da
  Backend, e ambos têm type-safety first-class.
- **tsx** (não `ts-node`) como runner de desenvolvimento - mais
  rápido, sem etapa de build, suporta ESM nativamente.
- **tsc** puro pra build de produção (sem `tsup`/`esbuild` no
  escopo da v1.0.0).

O **conceito** de "como integrar TS com framework X" é o que
importa. Quem usa Fastify, Hono ou NestJS aplica o mesmo padrão
com a documentação do framework em mãos.

### Decisões de estrutura (espelhando Backend)

- **12 nós** com a mesma proporção: 1 topic + 10 subtopics + 1
  milestone.
- **Ordem progressiva**: primitivos → objetos → funções →
  unions → generics → utilitários → config → runtime → integração.
  Cada nó se apoia no anterior.
- **`typescript-com-express` e `typescript-com-orm`** ficam no fim,
  depois que a pessoa domina a linguagem em si. Inverter essa
  ordem faz a pessoa decorar o "como" sem entender o "porquê".
- **Blocos de código com linguagem explícita** (`typescript`,
  `jsonc`, `bash`).
- **Recursos no frontmatter**, mínimo 1, máximo 3 por nó.

### Pré-requisito declarado

Esta trilha **assume** que a pessoa já passou por:

- [**Programação do Zero**](../../programacao-do-zero) -
  especialmente funções, arrays, objetos e async/await. Os
  exemplos de TS reaproveitam o que essa trilha ensinou em JS.

Quem nunca mexeu com backend, o nó `typescript-em-node` (nó 9)
faz a ponte. Quem já passou pela trilha Backend, **o ganho
principal** dessa trilha é o domínio da linguagem em si (nós
1-7) - a parte de integração (nós 9-11) é revisão aplicada.

### Decisões de curadoria

- **Handbook oficial de TypeScript** (`typescriptlang.org/docs`)
  como fonte canônica - versão em inglês, mais completa e
  sempre atualizada.
- **MDN** para conceitos de JavaScript que reaparecem em TS
  (sintaxe de função, destructuring, etc.) - PT-BR quando
  existir.
- **Total TypeScript** (mattpocock.com) e **TS for JS Practitioners**
  como referências avançadas - são pagas mas têm preview
  gratuito de alta qualidade. Citadas como recurso, não como
  leitura obrigatória.
- **Sem recursos pagos como caminho principal.** Recursos pagos
  só aparecem quando o conteúdo equivalente gratuito é
  claramente inferior.

### O que ficou de fora (intencionalmente)

- **`enum`** - o consenso da comunidade TS em 2026 é evitar
  `enum` em favor de `as const` + union types. O nó `unions-e-narrowing`
  mostra o padrão moderno e não cita `enum`.
- **Namespaces** - característica legada de TS 1.x, sem uso
  prático em código moderno (ESM resolve o problema). Fora do
  escopo.
- **Decorators** (`@decorator`) - recursos avançados, ligados
  a frameworks específicos (NestJS, TypeORM). Vale uma
  trilha futura se a demanda vier.
- **Type-level programming** (tipos condicionais complexos,
  template literal types, inferência avançada) - é o "Wizard
  level" do TS. Cobre 1% dos casos reais; aprofundamento
  fica pra quem for trabalhar com bibliotecas de tipos.
- **Bundlers** (`tsup`, `esbuild`, `vite`) - a v1.0.0 usa
  `tsc` direto. Bundlers entram se a demanda por deploy
  simplificar aparecer.
- **Monorepo + project references** - uso avançado, fora do
  escopo "essencial".
- **Testes em TS** - a trilha Backend já cobre `vitest`. Os
  exemplos dessa trilha reaproveitam o mesmo runner.

### Aprofundamentos futuros

- **`tipos-utilitarios`** - template literal types, conditional
  types, `infer` - o "type wizard" do TS.
- **`typescript-com-orm`** - integração com Drizzle (alternativa
  ao Prisma, mais SQL-like) e TypeORM.
- **`configurando-typescript`** - monorepo, project references,
  path mapping avançado.
- **`typescript-em-node`** - bundlers (`tsup`, `esbuild`),
  build pipelines em CI.
- **`projeto-final`** - esqueleto de API com auth + CRUD +
  migrations + testes, linkando com `api-rest-com-autenticacao`.

Mudanças de escopo aqui viram bump **minor** (v1.1.0) se
adicionarem nós, **patch** (v1.0.1) se forem correções, **major**
(v2.0.0) se mudar a ordem ou a base conceitual.

---

Aberto a discussão: abra issue ou comente em
[Issues](https://github.com/lucianodiisouza/aprenda-community/issues).
