# Changelog

Todas as mudanças notáveis deste projeto são documentadas aqui. O formato
segue [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/) e o
projeto adere a [Versionamento Semântico](https://semver.org/lang/pt-BR/).

## [Não lançado]

## [1.1.0] — 2026-08-23

### Adicionado
- ➕ 4 nós novos na trilha HTML (14 → 18 nós):
  - `i18n-basico` (após `textos`) — `lang` em elementos, `<bdi>`, `<bdo>`,
    `<ruby>` para conteúdo multilíngue.
  - `atributos-globais` (após `semantica`) — `hidden`, `data-*`,
    `tabindex`, `contenteditable`, `draggable`, `spellcheck`, `dir`,
    `translate`, `role`.
  - `template-clone` (após `midia`) — `<template>` e `cloneNode(true)`,
    base de Web Components e renderização de frameworks.
  - `html-deprecated` (antes de `projeto-final`) — elementos
    (`<center>`, `<font>`, `<marquee>`, `<frame>`, `<bgsound>`,
    `<blink>`) e atributos que caíram em desuso, com alternativas
    modernas.

### Mudanças editoriais
- Trilha permanece no escopo **iniciante**, mas cobre agora
  aproximadamente **90%+ do HTML que devs usam no dia-a-dia**.
- `template-clone` é introdutório (conceito simples, fica na trilha),
  mas abre a porta para **Web Components** que serão tema de trilha
  intermediária no futuro.

## [1.0.0] — 2026-08-23

### Adicionado
- 🆕 Trilha **HTML** completa (14 nós, do zero absoluto até projeto final).
  - `introducao` — O que é HTML, como a web funciona.
  - `estrutura-basica` — DOCTYPE, html, head, body, viewport, title.
  - `textos` — Headings, parágrafos, ênfase, citação, sigla, atalho.
  - `links` — Tag `<a>`, caminhos, âncoras, `target`/`rel`, `mailto`/`tel`.
  - `imagens` — `<img>`, `alt`, `srcset`/`sizes`, `<picture>`, `<figure>`,
    SVG inline.
  - `listas` — `<ul>`, `<ol>`, `<dl>`, aninhamento.
  - `tabelas` — `<table>`, `<thead>`/`<tbody>`/`<tfoot>`, `<caption>`,
    `scope`, `colspan`/`rowspan`.
  - `formularios-basicos` — `<form>`, `<label>`, `<input>`, tipos comuns,
    `name`, `id`, `required`, `<fieldset>`, `<legend>`, `<button>`.
  - `formularios-avancados` — `<select>`, `<optgroup>`, `<datalist>`,
    `<textarea>`, validação nativa, `pattern`, `setCustomValidity`.
  - `semantica` — Landmarks (`header`/`nav`/`main`/`article`/`section`/
    `aside`/`footer`/`address`), hierarquia de headings, `<article>` vs
    `<section>` vs `<div>`.
  - `midia` — `<video>`, `<audio>`, `<source>`, `<track>`, `<iframe>`,
    menção a `<canvas>`/`<svg>`.
  - `acessibilidade` — POUR/WCAG, ARIA, foco de teclado, contraste,
    formulários acessíveis, ferramentas de teste.
  - `meta-seo` — `<title>`, `description`, Open Graph, Twitter Card,
    favicon, canonical, `hreflang`.
  - `projeto-final` — Briefing, estrutura, checklist de qualidade,
    esqueleto completo, publicação.
- 📚 Documentação:
  - `README.md` — visão geral, links, estrutura, licença.
  - `CONTRIBUTING.md` — passo a passo de contribuição, cenários
    (typo, recurso, nó, trilha), anatomia de `.mdx` e `roadmap.json`.
  - `docs/style-guide.md` — voz, tom, profundidade, curadoria.
  - `CODE_OF_CONDUCT.md` — baseado no Contributor Covenant 2.1.
  - `LICENSE` — AGPL-3.0 (código) + CC BY-SA 4.0 (conteúdo).
  - `CODEOWNERS` — Luciano como owner de tudo (revisão centralizada
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
