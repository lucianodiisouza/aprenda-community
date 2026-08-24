# Decisões editoriais - Trilha de Frontend

> Histórico de decisões de escopo, organização e curadoria. Quando a
> trilha ganha ou perde um nó, isso fica registrado aqui.

## v1.0.0 - Migração inicial (2026-08-23)

### Origem

Esta trilha foi **migrada** do monorepo `primo-academy` (privado,
source-of-truth) para o `aprenda-community` (público, contribuição).
A versão no monorepo é a "v0" de referência; a do community é a
versão "blessed" que será exibida no app.

### O que mudou na migração

Mesma estratégia da trilha **Programação do Zero**:

- **`<Playground>` → bloco de código puro** com linguagem
  `javascript` (e `jsx` onde aplicável, no nó `forms-http`). O
  community repo não tem o componente interativo; o app, se quiser,
  pode transformar blocos por linguagem em playground no build.
- **Texto `## Experimente` → "Copie e rode no seu editor"** -
  mesmo motivo.
- **Recursos, títulos, descrições** mantidos.

### Pré-requisito declarado

Esta trilha **assume** que a pessoa já passou por
[**Programação do Zero**](../../programacao-do-zero) (ou sabe
o básico de JS). O nó `javascript-web` cobre JS no browser, mas
não ensina JS do zero - espera-se que variáveis, funções e arrays
já sejam familiares.

Quem quer a base de HTML, deve passar por
[**HTML**](../../html) (trilha standalone, 18 nós). Esta trilha de
Frontend cita HTML, mas não o explica do zero - foca no fluxo
HTML → CSS → JS → React.

### Decisões de curadoria (do monorepo, mantidas)

- **MDN PT-BR** como fonte primária.
- **React docs oficial** (pt-br.react.dev) como fonte canônica pros
  nós de React.
- **CSS-Tricks** (EN) pros guias visuais de Flexbox e Grid - vale
  a marcação `lang: en` no frontmatter.
- **Sem recursos pagos.**

### O que ficou de fora (intencionalmente)

- **TypeScript** - futuro, trilha intermediária.
- **Next.js / SSR** - fora do escopo "Frontend" básico. Quem
  chegar nesse ponto, trilha própria de "Frontend Avançado".
- **Testes (Jest, Vitest, Playwright)** - trilha de "Boas Práticas".
- **Build tools detalhados** (Webpack, Vite) - o nó
  `ferramentas` cita o essencial, sem aprofundar.
- **Tailwind completo** - o nó `estilizacao` introduz; a "filosofia
  utility-first" e os plugins ficam pra aprofundamento.
- **Acessibilidade detalhada** - o nó `acessibilidade` cobre o
  essencial (ARIA básico, contraste, foco); o aprofundamento está
  na trilha de HTML (nó `acessibilidade`).

### Aprofundamentos futuros

- **`css`** - animações, transitions, custom properties (variáveis
  CSS), pré-processadores.
- **`react`** - Context API, hooks avançados (useReducer, useMemo),
  padrões de composição.
- **`rotas`** - lazy loading de rotas, scroll restoration, nested
  routes.
- **`projeto-final`** - esqueleto de SPA completa com auth fake
  (form, list, detail, protected route), deploy no GitHub Pages ou
  Vercel.

Mudanças de escopo aqui viram bump **minor** (v1.1.0) se adicionarem
nós, **patch** (v1.0.1) se forem correções, **major** (v2.0.0) se
mudar a ordem ou a base conceitual.

---

Aberto a discussão: abra issue ou comente em
[Issues](https://github.com/lucianodiisouza/aprenda-community/issues).
