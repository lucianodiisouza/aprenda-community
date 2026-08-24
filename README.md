# Aprenda Community 🌱

> Trilhas de estudo de programação, **em português**, gratuitas e open source.
> Mantidas pela comunidade. Inspirado no [roadmap.sh](https://roadmap.sh),
> pensado para quem está **começando do zero**.

[![Licença código: AGPL-3.0](https://img.shields.io/badge/código-AGPL--3.0-blue.svg)](./LICENSE)
[![Licença conteúdo: CC BY-SA 4.0](https://img.shields.io/badge/conteúdo-CC%20BY--SA%204.0-lightgrey.svg)](./LICENSE)
[![Trilhas](https://img.shields.io/badge/trilhas-6-success.svg)](./roadmaps)
[![Projetos](https://img.shields.io/badge/projetos-9-blue.svg)](./projects)
[![PRs bem-vindos](https://img.shields.io/badge/PRs-bem--vindos-brightgreen.svg)](./CONTRIBUTING.md)
[![Discussions](https://img.shields.io/badge/💬-Discussions-blueviolet.svg)](https://github.com/lucianodiisouza/aprenda-community/discussions)

---

## ✨ O que é

O **Aprenda** é um projeto de roadmaps de aprendizado de programação. Este
repositório é a **face pública e colaborativa** dele: aqui a comunidade abre PRs
sugerindo trilhas, corrigindo erros, melhorando recursos e adicionando conteúdo.

Trilhas hoje:

- 📘 [**HTML**](./roadmaps/html) - a linguagem de marcação que estrutura toda a web.
  **18 nós**, do zero absoluto até projeto final. Ideal como primeira
  trilha antes de CSS ou JavaScript.
- 🟢 [**Programação do Zero**](./roadmaps/programacao-do-zero) - para
  quem nunca programou: pensamento computacional, lógica, primeira
  linguagem, primeiro projeto. **13 nós**, em PT-BR.
- 🟣 [**Frontend**](./roadmaps/frontend) - para quem quer construir a
  parte visual e interativa da web: HTML, CSS, JavaScript, React.
  **12 nós**. Assume o básico de JS.
- 🔀 [**Git**](./roadmaps/git) - controle de versão do zero ao avançado:
  commits, branches, merge, remotos, rebase, reflog, workflows e uma
  primeira contribuição open source. **23 nós**, cobrindo básico,
  intermediário e avançado com prática.
- 📊 [**Complexidade de Algoritmos**](./roadmaps/complexidade-de-algoritmos)
  - do "o que é um algoritmo lento" à análise amortizada e Master
  Theorem. **13 nós**, cobrindo básico (O(1), O(n), O(n²)),
  intermediário (Big O formal, O(log n), análise de loops) e
  avançado (Big Ω/Θ, complexidade de espaço, recursão, análise
  amortizada) com prática de medição no projeto final.
- 🎨 [**CSS**](./roadmaps/css) - a linguagem de estilo da web, do
  zero absoluto (o que é estilo, como incluir, seletores, box model,
  tipografia) até o avançado (Grid, Flexbox, animações, container
  queries, `:has()`, logical properties, performance, arquitetura).
  **36 nós** estruturados em 3 tópicos macro + projeto final. Atende
  iniciantes e programadores; o nó final lista frameworks
  (Tailwind, Bootstrap, Sass, CSS-in-JS) como mapa de opções, sem
  ensinar a usar nenhum.

> Mais trilhas chegando: Backend, Python, Estruturas de Dados…
> Acompanhe nas [Discussions](https://github.com/lucianodiisouza/aprenda-community/discussions).

## 🛠️ Projetos práticos

Além das trilhas, o repositório também guarda [**Projetos**](./projects):
desafios práticos que exercitam o que as trilhas ensinam. São **9
projetos** (do "olá mundo" em HTML/CSS até system design), cada um
com um brief em MDX: objetivo, requisitos, desafios extras, dicas.

Diferente de uma trilha (que é um grafo de conceitos), um projeto é
um **documento único** - o "brief" do desafio. Veja
[`projects/README.md`](./projects/README.md) para o formato e
[`templates/project.mdx`](./templates/project.mdx) para o esqueleto.

## 🎯 Para quem é

- Quem **nunca programou** e quer começar pelo começo (literalmente o começo).
- Quem está aprendendo e quer **trilhas claras** em vez de 50 abas abertas.
- Quem prefere **PT-BR** mas aceita ler algo em inglês se for a fonte canônica
  (ex: MDN).
- Quem quer **contribuir** com conteúdo sem precisar virar programador.

## 🚀 Como o conteúdo aparece no app

Este repositório é consumido via **git submodule** pelo app
[primo-academy](https://github.com/lucianodiisouza/primo-academy) - o mesmo
código que renderiza o site público. Cada merge aqui, depois de passar no CI,
vira uma versão semântica (`vX.Y.Z`) que o app pode pinar.

Em outras palavras: **sua contribuição vira conteúdo publicado** sem você
precisar entender de deploy.

## 🤝 Como contribuir

Contribuir com conteúdo é simples e **não exige saber programar**:

1. **Encontrou um erro de português, link quebrado ou recurso melhor?**
   → Abra um PR editando o `.mdx` direto pelo GitHub (ícone de lápis).
2. **Quer sugerir um nó novo numa trilha?**
   → Abra uma [issue do tipo "novo tópico"](./.github/ISSUE_TEMPLATE/novo-topico.md).
3. **Quer propor uma trilha inteira?**
   → Abra uma [issue do tipo "trilha nova"](./.github/ISSUE_TEMPLATE/trilha-nova.md)
   e a gente discute antes.
4. **Tem dúvida?**
   → [Discussions / Q&A](https://github.com/lucianodiisouza/aprenda-community/discussions/categories/q-a).

Leia o [**CONTRIBUTING.md**](./CONTRIBUTING.md) - é curto e mostra o passo a
passo. Se for editar texto, dê uma olhada no
[**Style Guide**](./docs/style-guide.md) pra manter a voz e a profundidade.

### TL;DR do fluxo

```
fork → edite (ou crie) um .mdx → abra PR → CI valida → review → merge → vira tag
```

## 📂 Estrutura do repositório

```
.
├── roadmaps/
│   └── <slug-da-trilha>/
│       ├── roadmap.json          # metadados + lista de nós
│       ├── nodes/
│       │   └── <id-do-no>.mdx    # conteúdo de cada nó
│       └── meta/                 # (opcional) notas editoriais da trilha
├── projects/
│   └── <slug-do-projeto>.mdx     # um arquivo por projeto (brief)
├── templates/
│   ├── node.mdx                  # esqueleto de um nó
│   ├── project.mdx               # esqueleto de um projeto
│   └── roadmap.json              # esqueleto de roadmap.json
├── docs/
│   └── style-guide.md            # como escrever (voz, tom, curadoria)
├── meta/
│   ├── editorial-decisions.md    # decisões de escopo (ADRs de conteúdo)
│   └── changelog.md              # o que mudou em cada release
├── .github/
│   ├── ISSUE_TEMPLATE/           # templates de issue (bug, trilha, nó, recurso)
│   ├── PULL_REQUEST_TEMPLATE.md
│   └── workflows/                # CI: valida JSON, frontmatter e links
├── CODE_OF_CONDUCT.md
├── CODEOWNERS
├── CONTRIBUTING.md
└── LICENSE
```

Cada trilha é uma pasta dentro de `roadmaps/`. O nome da pasta é o **slug** que
vira URL e é referenciado pelo app.

## 🛡️ Licença

- **Código do repo** (scripts de validação, CI, templates) sob
  [AGPL-3.0](./LICENSE).
- **Conteúdo das trilhas** (arquivos `.mdx`, `roadmap.json`) sob
  [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.pt_BR) -
  você pode usar, remixar e compartilhar, desde que credite e mantenha a mesma
  licença.

Isso significa: **sua contribuição pode ser usada livremente**, e o que você
escrever aqui também pode ser remixado por outros. É o preço (e o ganho) de
conteúdo aberto.

## 🌟 Reconhecimento

Cada nó tem no frontmatter um campo opcional `credits` (em breve) pra credit
ar contribuidores. Versão inicial: seu nome vai pro changelog e pro README de
contribuidores da release.

## 📣 Onde nos encontrar

- [Discussions](https://github.com/lucianodiisouza/aprenda-community/discussions) -
  perguntas, sugestões, show & tell.
- [Issues](https://github.com/lucianodiisouza/aprenda-community/issues) - bugs
  e propostas concretas.
- O app (em breve): aprenda.oprimo.dev.

---

Feito com 💚 por Luciano e pela comunidade.
