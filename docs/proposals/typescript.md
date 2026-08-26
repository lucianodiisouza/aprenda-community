# Proposta: Trilha de TypeScript

> **Status:** decisões consolidadas em 2026-08-25, aguardando abertura de issue.
> **Autor:** Luciano (com a Mavis 👋)
> **Data:** 2026-08-25
>
> Este documento é a base da [issue de trilha nova](../../.github/ISSUE_TEMPLATE/trilha-nova.md)
> que será aberta no repositório. Depois do ✅, vira `roadmaps/typescript/`.

---

## Decisões consolidadas (2026-08-25)

| Decisão | Escolha | Implicação direta |
| --- | --- | --- |
| **Escopo** | Só a trilha, **dentro do bootcamp de Backend** | Entra no bootcamp entre `programacao-do-zero` e `backend`, como pré-requisito recomendado (não bloqueante). |
| **Profundidade** | **Intermediário**, mesmo padrão da Backend (12 nós) | Suficiente pra sair "sabendo programar em TS", não cobre type-wizard avançado. |
| **Tool-agnostic** | **Conceitos da linguagem são genéricos; framework é exemplo** | Express + Prisma + Zod entram como exemplo (mesma stack da Backend), mas o conhecimento se transfere pra Fastify, Hono, NestJS. |
| **TS em vez de JS** | **Trilha de Backend continua em JS** (v1.0.0), TS vira trilha própria | Não migrar Backend agora (política + escopo). Quem terminar Backend em JS e quiser tipar, faz essa trilha. |
| **Recursos** | **PT-BR primeiro**, EN só em docs canônicas (TS Handbook) | Style guide à risca. EN sempre com `lang: en` no frontmatter e selo na UI. |
| **Projeto final** | **API completa em TS** reaproveitando brief de `api-rest-com-autenticacao` | Mesma cobrança prática, com tipagem e validação de ponta a ponta. |

---

## TL;DR (1 parágrafo)

Propor uma **trilha única "TypeScript"** com **12 nós** (1 topic + 10 subtopics + 1 milestone),
do "o que é TypeScript e por que ele existe" até a integração completa com Express
e ORM. A trilha cobre a **linguagem em si** (nós 1–7), a **configuração e runtime**
(nós 8–9) e a **integração com backend** (nós 10–11), terminando num projeto de
API completa tipada de ponta a ponta. Entra no **bootcamp Desenvolvedor Backend**
logo depois de `programacao-do-zero`, quando a mente sobre JS ainda está fresca
— o TS vira a "evolução natural" antes de construir API.

---

## 1. Por que essa trilha agora

Três sinais:

1. **TypeScript virou o default do mercado backend.** Em 2026, a maioria das
   vagas pede TS, bibliotecas novas são TS-first, e o JavaScript "puro" pra
   backend é cada vez mais a exceção. O bootcamp Backend formava gente que
   saía sem saber tipar — buraco visível.
2. **Já tem pré-requisito pronto.** A trilha `programacao-do-zero` ensina
   JS, e a `backend` usa Node + Express. TypeScript entra como camada entre
   as duas: "você sabe JS → aprenda a tipar → construa API tipada". Sem
   reescrever nada que já existe.
3. **Conteúdo escasso em PT-BR.** A documentação oficial do TS é excelente
   mas em inglês. Vídeos e artigos em português sobre TS são dispersos e
   em geral superficiais. Vale o esforço de organizar uma trilha coesa.

A trilha não substitui o handbook oficial (que é a fonte canônica e linkado
como recurso) — ensina o **modelo mental** e o **fluxo de uso prático**,
que dura mais que qualquer versão específica.

---

## 2. Decisão de escopo: por que 1 trilha, e não 2

Considerei dois formatos:

| Formato | Prós | Contras |
| --- | --- | --- |
| **A. Fundamentos vs Avançado (2 trilhas)** | Separa "preciso" de "nice to have" | Fronteira artificial: onde termina o "básico"? TS é uma linguagem só, quebrar em 2 fragmenta o caminho. |
| **B. Trilha única de 12 nós** ✅ | Linear, cabe no padrão do projeto (Backend = 12) | Quem quiser ir além (type wizard, decorators) vai pra aprofundamento futuro |

**Escolha: B.** Mesma justificativa da trilha de Git e Complexidade: trilha
linear com fases que crescem em complexidade, mas sem bifurcar o caminho.

---

## 3. Pré-requisitos

- [**Programação do Zero**](../../roadmaps/programacao-do-zero) — especialmente
  funções, arrays, objetos e async/await. Os exemplos de TS reaproveitam o
  que essa trilha ensinou em JS. **Recomendado.** Não bloqueante pra quem já
  vem de outra origem.

Quem nunca mexeu com backend, o nó `typescript-em-node` (nó 9) faz a ponte
pro ambiente Node.

---

## 4. Estrutura proposta (a trilha)

- **Slug:** `typescript`
- **Dificuldade:** `intermediario`
- **Nós:** 12 (1 topic + 10 subtopics + 1 milestone)
- **Duração estimada:** 2–3 semanas em ritmo calmo

A trilha é **linear** (uma coluna de `children`), com progressão de
**fundamentos da linguagem** (nós 1–6) → **ferramental** (nós 7–8) →
**integração com backend** (nós 9–11) → **projeto final** (nó 12).

### Estrutura detalhada

| #  | ID                          | Tipo      | Título                                                                | O que cobre                                                                                                                |
| -- | --------------------------- | --------- | --------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 1  | `introducao`                | topic     | O que é TypeScript e Por Que Ele Existe                               | TS como superconjunto de JS, superpoder vs custo, fluxo `tsc` → `.js`                                                      |
| 2  | `tipos-primitivos`          | subtopic  | Tipos Primitivos: string, number, boolean e Cia                      | `string`, `number`, `boolean`, `any` vs `unknown`, `never`, `void`; inferência                                                |
| 3  | `objetos-e-arrays`          | subtopic  | Objetos e Arrays Tipados: type vs interface                          | `type` vs `interface`, campos opcionais (`?`), tuplas, `Readonly<>`                                                       |
| 4  | `funcoes-tipadas`           | subtopic  | Funções Tipadas: Parâmetros, Retorno e Overloads                     | Anotação de retorno, opcionais, default, rest, overloads                                                                   |
| 5  | `unions-e-narrowing`        | subtopic  | Unions e Narrowing: Quando o Tipo Pode Ser Mais de Um                | Union types, type guards (`typeof`, `in`, `instanceof`), discriminated unions                                               |
| 6  | `generics`                  | subtopic  | Generics: Funções e Tipos Reutilizáveis                               | `<T>`, restrições com `extends`, generics em tipos                                                                         |
| 7  | `tipos-utilitarios`         | subtopic  | Tipos Utilitários: Partial, Pick, Omit e Outros                      | `Partial`, `Pick`, `Omit`, `Required`, `Readonly`, `Record`, `ReturnType`, `Parameters`                                      |
| 8  | `configurando-typescript`   | subtopic  | Configurando o TypeScript: tsconfig.json                             | `target`, `module`, `strict: true` (e o que liga), `include`/`exclude`                                                      |
| 9  | `typescript-em-node`        | subtopic  | TypeScript em Node: tsx, Build e ESM                                 | `tsx` (dev) vs `tsc` (build), `"type": "module"`, imports com `.js` no source                                                |
| 10 | `typescript-com-express`    | subtopic  | TypeScript com Express: Tipando req, res e Middlewares               | `@types/express`, `RequestHandler`, `ErrorRequestHandler`, `declare global Express.Request`                                 |
| 11 | `typescript-com-orm`        | subtopic  | TypeScript com ORM: Prisma Client e Zod                              | Tipos gerados do Prisma, Zod valida + `z.infer`, DTOs com `Partial`/`.optional()`                                          |
| 12 | `projeto-final`             | milestone | Projeto Final: API Completa em TypeScript                            | Brief reaproveitando `api-rest-com-autenticacao`, agora com tipagem completa                                                |

### Resumo de interatividade

| Recurso | Quantidade | Onde brilha |
| --- | --- | --- |
| `<Quiz>` | ~3 nós | `tipos-primitivos` (any vs unknown), `unions-e-narrowing` (discriminated unions), `tipos-utilitarios` (qual pra quê) |
| `<Mermaid>` | 0 | Trilha é majoritariamente código; diagramas não agregam |
| `<Figure>`/imagens | 0 | Mesmo motivo |
| Recursos (1–3 por nó) | 11 nós | TypeScript Handbook (EN) como canônico; MDN PT-BR pro básico de JS |

---

## 5. Os 3 "momentos uau" da trilha

1. **`tipos-utilitarios`** — O momento em que o aluno percebe que **não precisa
   reescrever tipo**: `Partial<T>` resolve o "atualização parcial", `Pick<T, K>`
   resolve o "DTO sem senha", `Omit<T, K>` resolve "model sem id". Reduz tipo
   duplicado de 50 pra 3 linhas.
2. **`unions-e-narrowing`** — O reframe que muda como a pessoa modela:
   "isso pode ser A ou B" vira "discriminated union com campo `status`", e o
   TS **te obriga a tratar os dois casos** antes de compilar. É onde TS
   deixa de ser "anotação chata" e vira "ferramenta de modelagem".
3. **`typescript-com-orm`** — O momento em que Prisma + Zod + TS fecham o
   loop: schema do banco gera tipo, Zod valida input E infere tipo, Prisma
   persiste, resposta já vem tipada. **Quase zero tipo escrito à mão**,
   e mesmo assim o editor te avisa de qualquer inconsistência.

---

## 6. Recursos — curadoria inicial (a aprofundar)

| Camada | Onde olhar primeiro |
| --- | --- |
| **Canônico** | TypeScript Handbook (`typescriptlang.org/docs/handbook`) + MDN PT-BR pro básico de JS |
| **PT-BR** | Rocketseat, Willian Justen, artigos TabNews sobre TS |
| **Avançado (futuro)** | Total TypeScript (Matt Pocock), Type-Level TypeScript (a elaborar) |
| **Curado ≤ 3 por nó** | 1 doc oficial + 1 recurso PT-BR quando existir, no máximo |

> **Decisão deliberada:** recursos pagos (cursos) **não entram** como caminho
> principal. Recursos gratuitos (Handbook + MDN + vídeos abertos) já cobrem
> 100% do escopo da v1.0.0. Links pagos só aparecem se a versão gratuita for
> claramente insuficiente — o que não é o caso aqui.

---

## 7. Posição no Bootcamp Desenvolvedor Backend

A trilha entra entre `programacao-do-zero` e o restante do bootcamp:

```text
programacao-do-zero
calculadora-de-gorjeta
terminal-para-devs
git
typescript          ← NOVA
sql-banco-de-dados
modelagem-de-banco
nosql               ← também nova na v1.16.0
backend
...
```

**Justificativa da posição:** "logo depois de aprender a programar, a mente
sobre JS ainda está fresca — TS vira evolução natural antes de construir API".
Quem já programa em JS pula pra `backend` direto (não-bloqueante); quem quer
tipar faz TS primeiro. O bootcamp `outcome` é atualizado pra refletir TS
como peça formal do currículo.

---

## 8. O que ficou de fora (intencionalmente)

- **`enum`** — consenso 2026 é evitar em favor de `as const` + union.
  O nó `unions-e-narrowing` mostra o padrão moderno.
- **Namespaces** — legados de TS 1.x, sem uso prático em código ESM moderno.
- **Decorators** (`@decorator`) — recursos avançados, ligados a frameworks
  específicos (NestJS, TypeORM). Aprofundamento futuro.
- **Type-level programming** (conditional types complexos, template literal
  types) — "wizard level", cobre 1% dos casos reais.
- **Bundlers** (`tsup`, `esbuild`, `vite`) — v1.0.0 usa `tsc` direto.
  Bundlers entram em aprofundamento se a demanda por deploy simplificar
  aparecer.
- **Monorepo + project references** — uso avançado, fora do escopo essencial.

---

## 9. Aprofundamentos futuros

- **`tipos-utilitarios`** — template literal types, conditional types, `infer`.
- **`typescript-com-orm`** — Drizzle (alternativa SQL-like ao Prisma), TypeORM.
- **`configurando-typescript`** — monorepo, project references, path mapping.
- **`typescript-em-node`** — bundlers (`tsup`, `esbuild`), build pipelines em CI.
- **`projeto-final`** — esqueleto com auth + CRUD + migrations + testes,
  linkando diretamente com `api-rest-com-autenticacao`.

Mudanças de escopo viram bump **minor** (v1.1.0) para adições, **patch**
(v1.0.1) para correções, **major** (v2.0.0) para mudança de ordem ou base.

---

## 10. Próximos passos (proposta de fluxo)

1. **Abrir issue** de trilha nova usando o template
   [`.github/ISSUE_TEMPLATE/trilha-nova.md`](../../.github/ISSUE_TEMPLATE/trilha-nova.md).
   Linkar este documento.
2. **Discussão aberta** por uns dias — pré-requisitos, ordem dos nós,
   cobertura de `enum`/decorators, etc.
3. **Implementar nó por nó** em PRs separados (ou em um PR grande com review
   focado) — conteúdo já existe como referência, então a revisão é mais sobre
   tom e curadoria.
4. **Atualizar bootcamp** com a nova trilha (já feito como parte da v1.16.0).
5. **CHANGELOG + README** com a nova entrada (já feito).

---

Aberto a discussão: abra issue ou comente em
[Issues](https://github.com/lucianodiisouza/aprenda-community/issues).
