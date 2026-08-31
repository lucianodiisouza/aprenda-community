# Aprenda Community 🌱

> Trilhas de estudo de programação, **em português**, gratuitas e open source.
> Mantidas pela comunidade. Inspirado no [roadmap.sh](https://roadmap.sh),
> pensado para quem está **começando do zero**.

[![Licença código: AGPL-3.0](https://img.shields.io/badge/código-AGPL--3.0-blue.svg)](./LICENSE)
[![Licença conteúdo: CC BY-SA 4.0](https://img.shields.io/badge/conteúdo-CC%20BY--SA%204.0-lightgrey.svg)](./LICENSE)
[![Trilhas](https://img.shields.io/badge/trilhas-38-success.svg)](./roadmaps)
[![Projetos](https://img.shields.io/badge/projetos-17-blue.svg)](./projects)
[![Bootcamps](https://img.shields.io/badge/bootcamps-2-orange.svg)](./bootcamps)
[![PRs bem-vindos](https://img.shields.io/badge/PRs-bem--vindos-brightgreen.svg)](./CONTRIBUTING.md)
[![Issues](https://img.shields.io/badge/💬-Issues-blueviolet.svg)](https://github.com/lucianodiisouza/aprenda-community/issues)

---

## ✨ O que é

O **Aprenda** é um projeto de roadmaps de aprendizado de programação. Este
repositório é a **face pública e colaborativa** dele: aqui a comunidade abre PRs
sugerindo trilhas, corrigindo erros, melhorando recursos e adicionando conteúdo.

São **38 trilhas** hoje, cada uma um grafo de nós (do básico ao
avançado) com Quiz, Mermaid e projeto final, organizadas em 5 áreas:

- 🧱 **Fundamentos** - Programação do Zero, Terminal, Git, Estruturas de Dados…
- 🎨 **Frontend & Web** - HTML, CSS, React, TypeScript, Angular, Next.js, a11y…
- 🗄️ **Backend & Dados** - Backend (Node/Express), SQL, NoSQL, RabbitMQ.
- 🐳 **DevOps & Infra** - Docker, Docker Compose, Kubernetes.
- 🤖 **IA & Conteúdo** - Prompt Engineering, Engenharia assistida por IA.

👉 **Veja a lista completa, com contagem de nós e nível, no
[Catálogo](./CATALOGO.md).**

## 🎓 Bootcamps

Um [**bootcamp**](./bootcamps) é uma **jornada curada** que encadeia
trilhas e projetos numa ordem com começo, meio e fim - do zero a
"pronto pro mercado". Ele **não tem conteúdo próprio**: é curadoria
que aponta pra trilhas e projetos que já existem, e o progresso é
calculado a partir do progresso delas.

- 🟣 [**Desenvolvedor Frontend**](./bootcamps/desenvolvedor-frontend) -
  do zero absoluto ao frontend de produção (React + TypeScript, Next.js,
  testes, performance, a11y, segurança e edge deploy). **24 módulos**,
  ~7 meses. Nível iniciante.
- 🟠 [**Desenvolvedor Backend**](./bootcamps/desenvolvedor-backend) -
  a jornada server-side com Node, banco de dados, mensageria e deploy.
  **16 módulos**, ~5 meses. Nível intermediário.

Cada bootcamp vive em `bootcamps/<slug>/bootcamp.json`. Veja a
[Anatomia de um `bootcamp.json`](./CONTRIBUTING.md#anatomia-de-um-bootcampjson)
no CONTRIBUTING pra propor ou editar um.

## 🛠️ Projetos práticos

Além das trilhas, o repositório também guarda [**Projetos**](./projects):
desafios práticos que exercitam o que as trilhas ensinam. São **17
projetos** (do "olá mundo" em HTML/CSS até system design), cada um
com um brief em MDX: objetivo, requisitos, desafios extras, dicas.

Diferente de uma trilha (que é um grafo de conceitos), um projeto é
um **documento único** - o "brief" do desafio. A lista completa está
no [Catálogo](./CATALOGO.md); veja
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
   → [Abra uma issue de dúvida (Q&A)](https://github.com/lucianodiisouza/aprenda-community/issues).

Leia o [**CONTRIBUTING.md**](./CONTRIBUTING.md) - é curto e mostra o passo a
passo. Se for editar texto, dê uma olhada no
[**Style Guide**](./docs/style-guide.md) pra manter a voz e a profundidade.

### TL;DR do fluxo

```
fork → edite (ou crie) um .mdx → abra PR → CI valida → review → merge → vira tag
```

## 👀 Preview local (veja sua trilha renderizada)

Antes de abrir o PR, dá pra ver sua trilha com o **mesmo visual do site**,
rodando na sua máquina:

```bash
cd preview
npm install
npm run dev
```

Abra o endereço que o Vite mostrar (por padrão `http://localhost:5173`). O app
lê `roadmaps/` **direto** - sem sync, sem o app principal, sem login - e
recarrega sozinho quando você edita um `.mdx` ou o `roadmap.json`.

É uma **prévia de conteúdo**: reproduz tema, fontes, tipografia, a árvore de nós,
`Quiz` e `Mermaid`. Progresso, login e busca não estão aqui, e alguns componentes
interativos aparecem como marcador. Detalhes em
[`preview/README.md`](./preview/README.md).

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
├── bootcamps/
│   └── <slug-do-bootcamp>/
│       └── bootcamp.json         # jornada curada: trilhas + projetos em ordem
├── contributors.json             # contribuidores por release (gerado)
├── templates/
│   ├── node.mdx                  # esqueleto de um nó
│   ├── project.mdx               # esqueleto de um projeto
│   └── roadmap.json              # esqueleto de roadmap.json
├── preview/
│   └── ...                       # app local pra ver a trilha renderizada (Vite)
├── scripts/
│   └── ...                       # validação (validate.mjs) e build-contributors
├── docs/
│   ├── style-guide.md            # como escrever (voz, tom, curadoria)
│   └── proposals/                # propostas de trilha em discussão
├── .github/
│   ├── ISSUE_TEMPLATE/           # templates de issue (bug, trilha, nó, recurso)
│   ├── PULL_REQUEST_TEMPLATE.md
│   └── workflows/                # CI: valida JSON, frontmatter e links
├── CATALOGO.md                   # lista completa de trilhas, projetos e bootcamps
├── CHANGELOG.md                  # o que mudou em cada release
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

Todo mundo que contribui entra em [`contributors.json`](./contributors.json)
- gerado por [`scripts/build-contributors.mjs`](./scripts) a partir do
histórico do repo - além de aparecer no [CHANGELOG](./CHANGELOG.md) da
release. Nós também aceitam um campo opcional `credits` no frontmatter
pra creditar quem escreveu aquele conteúdo específico.

## 📣 Onde nos encontrar

- [Issues](https://github.com/lucianodiisouza/aprenda-community/issues) -
  perguntas, sugestões, show & tell, bugs e propostas concretas.
- O app (em breve): aprenda.oprimo.dev.

---

Feito com 💚 por Luciano e pela comunidade.
