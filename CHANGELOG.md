# Changelog

Todas as mudanças notáveis deste projeto são documentadas aqui. O formato
segue [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/) e o
projeto adere a [Versionamento Semântico](https://semver.org/lang/pt-BR/).

## [Não lançado]

### Adicionado
- 🆕 Trilha **Complexidade de Algoritmos** (13 nós, do "o que é
  complexidade" à análise amortizada), cobrindo básico, intermediário
  e avançado com exemplos em JavaScript e prática de medição no
  projeto final:
  - **Básico** (`introducao` → `quadratico`): o que é complexidade,
    como contar operações sem matemática, O(1) e O(n) na intuição,
    O(n²) em loops aninhados.
  - **Intermediário** (`notacao-big-o` → `comparando-complexidades`):
    notação Big O formal, O(log n) e busca binária, regras práticas
    para analisar loops, comparação lado a lado com números reais.
  - **Avançado** (`big-omega-big-theta` → `analise-amortizada`): Big Ω
    e Big Θ (pior/melhor caso), complexidade de espaço, análise de
    algoritmos recursivos (recorrências, Master Theorem), análise
    amortizada (array dinâmico, hash map).
  - **Projeto final** (`projeto-final`): implementar duas soluções
    para o mesmo problema, medir o tempo em diferentes tamanhos de
    entrada, comparar a previsão da análise com o resultado real.
- 📜 `roadmaps/complexidade-de-algoritmos/meta/editorial-decisions.md`
  com as decisões de escopo e curadoria da trilha.

### Mudado
- 📘 `README.md` - lista a nova trilha Complexidade de Algoritmos e
  atualiza o badge de contagem de trilhas (4 → 5).

## [1.3.0] - 2026-08-24

### Adicionado
- 🆕 Trilha **Git** completa (23 nós, do controle de versão do zero ao
  avançado), cobrindo básico, intermediário e avançado com prática em cada
  nível e um projeto final de contribuição open source:
  - **Básico** (`introducao` → `desfazer`): o que é controle de versão,
    instalação/config, repositório (`init`/`clone`), ciclo `add`/`commit`,
    `.gitignore`, histórico (`log`/`show`/`diff`), desfazer
    (`restore`/`reset`/`revert`).
  - **Intermediário** (`branches` → `tags-releases`): branches, merge,
    conflitos, remotos (`fetch`/`pull`/`push`), GitHub (fork/PR/`upstream`),
    stash, tags + SemVer.
  - **Avançado** (`rebase` → `workflows`): rebase e rebase interativo,
    cherry-pick, reflog, bisect, reescrita de história
    (`--force-with-lease`, `filter-repo`), git hooks, workflows
    (Git Flow / Trunk-Based / Conventional Commits).
  - **Projeto final** (`projeto-final`): abrir um Pull Request real em
    open source, do fork ao merge.
- 📜 `roadmaps/git/meta/editorial-decisions.md` com as decisões de escopo
  e curadoria da trilha.
- 👤 Campo `creators` no `roadmap.json` da trilha Git (autor creditado na
  página inicial da trilha no app).

### Mudado
- 📘 `README.md` - lista a nova trilha Git e atualiza o badge de contagem
  de trilhas (3 → 4).

## [1.2.0] - 2026-08-23

### Adicionado
- 🆕 Trilha **Programação do Zero** migrada do monorepo `primo-academy`
  (13 nós, do pensamento computacional ao primeiro projeto).
- 🆕 Trilha **Frontend** migrada do monorepo (12 nós, da web até React).
- 📜 Documentação de decisões editoriais para cada trilha nova
  (`roadmaps/<slug>/meta/editorial-decisions.md`).
- 🛠️ Script `scripts/sync-consumer.example.sh` - exemplo de **sync
  smart e incremental** para o consumer (monorepo `primo-academy`):
  - Shallow + sparse clone (só baixa a pasta `roadmaps/`)
  - Diff com o último commit sincronizado (`.content-version`)
  - Copia **só** os arquivos que mudaram
  - Exit 0 em ~1s se nada mudou

### Mudado
- 🔧 `scripts/lint.mjs` - agora entende que **fechadores** de bloco
  (` ``` ` puro) são OK em markdown; só avisa sobre **aberturas**
  sem linguagem.

### Compatibilidade
- ⚠️ **Breaking conceitual** (não técnico): conteúdo não usa mais
  `<PyPlayground>` / `<Playground>`. Substituído por blocos de código
  puros. O app, se quiser playgrounds interativos, deve detectá-los
  pela linguagem (`python` / `javascript` / `jsx`) e transformá-los
  no build. Documentado no `scripts/sync-consumer.example.sh`.

### Validação
```
validate.mjs   → 3 trilhas, 43 nós, 0 erros
lint.mjs       → 0 erros, 0 avisos
check-links    → 80 ok, 0 com problema
```

## [1.1.0] - 2026-08-23

### Adicionado
- ➕ 4 nós novos na trilha HTML (14 → 18 nós):
  - `i18n-basico` (após `textos`) - `lang` em elementos, `<bdi>`, `<bdo>`,
    `<ruby>` para conteúdo multilíngue.
  - `atributos-globais` (após `semantica`) - `hidden`, `data-*`,
    `tabindex`, `contenteditable`, `draggable`, `spellcheck`, `dir`,
    `translate`, `role`.
  - `template-clone` (após `midia`) - `<template>` e `cloneNode(true)`,
    base de Web Components e renderização de frameworks.
  - `html-deprecated` (antes de `projeto-final`) - elementos
    (`<center>`, `<font>`, `<marquee>`, `<frame>`, `<bgsound>`,
    `<blink>`) e atributos que caíram em desuso, com alternativas
    modernas.

### Mudanças editoriais
- Trilha permanece no escopo **iniciante**, mas cobre agora
  aproximadamente **90%+ do HTML que devs usam no dia-a-dia**.
- `template-clone` é introdutório (conceito simples, fica na trilha),
  mas abre a porta para **Web Components** que serão tema de trilha
  intermediária no futuro.

## [1.0.0] - 2026-08-23

### Adicionado
- 🆕 Trilha **HTML** completa (14 nós, do zero absoluto até projeto final).
  - `introducao` - O que é HTML, como a web funciona.
  - `estrutura-basica` - DOCTYPE, html, head, body, viewport, title.
  - `textos` - Headings, parágrafos, ênfase, citação, sigla, atalho.
  - `links` - Tag `<a>`, caminhos, âncoras, `target`/`rel`, `mailto`/`tel`.
  - `imagens` - `<img>`, `alt`, `srcset`/`sizes`, `<picture>`, `<figure>`,
    SVG inline.
  - `listas` - `<ul>`, `<ol>`, `<dl>`, aninhamento.
  - `tabelas` - `<table>`, `<thead>`/`<tbody>`/`<tfoot>`, `<caption>`,
    `scope`, `colspan`/`rowspan`.
  - `formularios-basicos` - `<form>`, `<label>`, `<input>`, tipos comuns,
    `name`, `id`, `required`, `<fieldset>`, `<legend>`, `<button>`.
  - `formularios-avancados` - `<select>`, `<optgroup>`, `<datalist>`,
    `<textarea>`, validação nativa, `pattern`, `setCustomValidity`.
  - `semantica` - Landmarks (`header`/`nav`/`main`/`article`/`section`/
    `aside`/`footer`/`address`), hierarquia de headings, `<article>` vs
    `<section>` vs `<div>`.
  - `midia` - `<video>`, `<audio>`, `<source>`, `<track>`, `<iframe>`,
    menção a `<canvas>`/`<svg>`.
  - `acessibilidade` - POUR/WCAG, ARIA, foco de teclado, contraste,
    formulários acessíveis, ferramentas de teste.
  - `meta-seo` - `<title>`, `description`, Open Graph, Twitter Card,
    favicon, canonical, `hreflang`.
  - `projeto-final` - Briefing, estrutura, checklist de qualidade,
    esqueleto completo, publicação.
- 📚 Documentação:
  - `README.md` - visão geral, links, estrutura, licença.
  - `CONTRIBUTING.md` - passo a passo de contribuição, cenários
    (typo, recurso, nó, trilha), anatomia de `.mdx` e `roadmap.json`.
  - `docs/style-guide.md` - voz, tom, profundidade, curadoria.
  - `CODE_OF_CONDUCT.md` - baseado no Contributor Covenant 2.1.
  - `LICENSE` - AGPL-3.0 (código) + CC BY-SA 4.0 (conteúdo).
  - `CODEOWNERS` - Luciano como owner de tudo (revisão centralizada
    no início).
- 🛠️ Infra:
  - Templates de issue (bug, trilha nova, nó novo, melhoria de
    recurso) e PR.
  - GitHub Actions: `validate-content`, `lint-markdown`, `check-links`
    (best-effort).
  - Scripts `validate.mjs`, `lint.mjs`, `check-links.mjs` em Node puro
    (sem dependências externas).

### Créditos
- Trilha escrita por **Luciano de Souza**
  ([@lucianodiisouza](https://github.com/lucianodiisouza)).
- Recursos curados a partir de MDN PT-BR, WCAG (W3C), web.dev e
  Open Graph Protocol.

[Não lançado]: https://github.com/lucianodiisouza/aprenda-community/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/lucianodiisouza/aprenda-community/releases/tag/v1.0.0
