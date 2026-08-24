# Decisões editoriais - Trilha de Programação do Zero

> Histórico de decisões de escopo, organização e curadoria. Quando a
> trilha ganha ou perde um nó, isso fica registrado aqui.

## v1.0.0 - Migração inicial (2026-08-23)

### Origem

Esta trilha foi **migrada** do monorepo `primo-academy` (privado,
source-of-truth) para o `aprenda-community` (público, contribuição).
A versão no monorepo é a "v0" de referência; a do community é a
versão "blessed" que será exibida no app.

### O que mudou na migração

A maior parte do conteúdo foi **transferido como está** (a voz e a
estrutura já estavam alinhadas com o style guide, só faltava
publicar). As mudanças concretas foram:

- **`<PyPlayground>` → bloco de código puro** com linguagem
  `python` ou `javascript`. O community repo não tem o componente
  interativo do monorepo; o app, se quiser, pode transformar
  blocos `python`/`javascript` em playground próprio no build
  (detecção por linguagem). Onde estava `## Experimente` + botão
  "Rodar", o texto virou "Copie o código acima e rode no seu editor".
- **Títulos e descrições** mantidos como no monorepo.
- **Recursos** mantidos, com `lang` e `free` preenchidos.

### Decisões de curadoria (do monorepo, mantidas)

- **MDN PT-BR é a fonte primária** (`learn/javascript`, `learn_web_development`).
- **Recursos em inglês só quando canônicos** (ex: docs do Git,
  Node.js, VS Code).
- **Sem recursos pagos.**
- **`type` sempre preenchido** (`artigo` | `video` | `doc` | `curso` | `exercicio`).

### O que ficou de fora (intencionalmente)

- **Python WASM no navegador** - mencionado no backlog como P2, mas
  fora do escopo "do zero" (adiciona dependência pesada sem
  benefício claro pra quem está começando).
- **TypeScript** - trilha separada (potencial).
- **Testes automatizados** - vai como trilha própria de "Boas
  Práticas" no futuro.
- **Ambientes virtuais / pip / poetry** - fora do "do zero". Quem
  chegar nesse ponto vai pra trilha intermediária.

### Aprofundamentos futuros

Os 13 nós atuais cobrem o suficiente pra "primeiro projeto". Onde
poderiam crescer:

- **`logica`** - fluxograma, pseudocódigo, exemplos de problemas
  clássicos (FizzBuzz, Torre de Hanói).
- **`strings`** - expressões regulares (regex).
- **`git-basico`** - branches, merge, conflitos, PRs. Atualmente é
  só add/commit/push.
- **`projeto-final`** - esqueleto de um "to-do list" ou "calculadora"
  com estrutura de pastas, README, .gitignore.

Mudanças de escopo aqui viram bump **minor** (v1.1.0) se adicionarem
nós, **patch** (v1.0.1) se forem correções, **major** (v2.0.0) se
mudar a ordem ou a base conceitual.

---

Aberto a discussão: abra issue ou comente em
[Discussions](https://github.com/lucianodiisouza/aprenda-community/discussions).
