# Aprenda Community 🌱

> Trilhas de estudo de programação, **em português**, gratuitas e open source.
> Mantidas pela comunidade. Inspirado no [roadmap.sh](https://roadmap.sh),
> pensado para quem está **começando do zero**.

[![Licença código: AGPL-3.0](https://img.shields.io/badge/código-AGPL--3.0-blue.svg)](./LICENSE)
[![Licença conteúdo: CC BY-SA 4.0](https://img.shields.io/badge/conteúdo-CC%20BY--SA%204.0-lightgrey.svg)](./LICENSE)
[![Trilhas](https://img.shields.io/badge/trilhas-16-success.svg)](./roadmaps)
[![Projetos](https://img.shields.io/badge/projetos-9-blue.svg)](./projects)
[![PRs bem-vindos](https://img.shields.io/badge/PRs-bem--vindos-brightgreen.svg)](./CONTRIBUTING.md)
[![Issues](https://img.shields.io/badge/💬-Issues-blueviolet.svg)](https://github.com/lucianodiisouza/aprenda-community/issues)

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
- 🟠 [**Backend**](./roadmaps/backend) - para quem quer construir a
  parte que roda no servidor: HTTP, Node.js, Express, REST, banco de
  dados, ORM, autenticação JWT, validação, testes, async profundo,
  error handling e debugging. **15 nós**. Stack curado: Node.js +
  Express + Prisma + PostgreSQL + JWT + Zod + Vitest.
- 🔷 [**TypeScript**](./roadmaps/typescript) - o superconjunto tipado
  do JavaScript, hoje default do mercado backend. Do "o que é TS" até
  a integração completa com Express e ORM, passando por tipos
  primitivos, unions, generics, utilitários (`Partial`, `Pick`,
  `Omit`, `Record`), `tsconfig.json`, `tsx` + `tsc` em Node, e
  tipagem de `req`/`res`/middlewares. **12 nós**. Pré-requisito
  recomendado (não bloqueante) da trilha Backend.
- 🗃️ [**NoSQL**](./roadmaps/nosql) - complemento à trilha de SQL:
  o que é NoSQL, **modelo de documento** (MongoDB: setup, CRUD,
  consultas, agregação, embed vs reference) e **chave-valor**
  (Redis: tipos de dados, cache, sessão, rate limit), fechando
  com um guia prático de decisão SQL vs NoSQL e um projeto final
  de API com **Postgres + Redis**. **10 nós**.
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
- 🎨 **CSS** (4 trilhas, **40 nós** no total) - a linguagem de
  estilo da web, dividida para aprofundar o que importa:
  - [**CSS Fundamentos**](./roadmaps/css-fundamentos) (15 nós,
    iniciante): o que é CSS, sintaxe, inclusão, seletores, cores,
    unidades, tipografia, box model, display, backgrounds, sombras,
    pseudo-classes, pseudo-elementos, cascata/especificidade,
    DevTools.
  - [**CSS Layout**](./roadmaps/css-layout) (10 nós,
    intermediário): position, **Flexbox aprofundado em 4 nós**,
    **Grid aprofundado em 4 nós**, responsividade mobile-first.
  - [**CSS Animações**](./roadmaps/css-animacoes) (6 nós,
    intermediário): transitions, transform (2D/3D), `@keyframes`
    básico e avançado, casos clássicos (spinner, skeleton, modal,
    toast) e **acessibilidade visual** (`prefers-reduced-motion`,
    `prefers-color-scheme`, `prefers-contrast`).
  - [**CSS Moderno**](./roadmaps/css-moderno) (9 nós, avançado):
    custom properties, `clamp()`/`min()`/`max()`/`calc()`, Container
    Queries, `:has()`, Logical Properties, arquitetura (BEM, Tailwind,
    CSS-in-JS), performance, frameworks como mapa de opções, e
    projeto final de landing page.
- 🐳 **Containers e Orquestração** (3 trilhas, **30 nós** no total)
  - [**Docker Fundamentos**](./roadmaps/docker-fundamentos) (10 nós,
    intermediário): o que é container vs VM, ciclo de vida
    (`run`/`ps`/`logs`/`exec`/`stop`/`rm`), imagens e layers, Dockerfile
    (FROM, WORKDIR, COPY, RUN, CMD), volumes, networks bridge com DNS
    interno, imagens enxutas (alpine, `.dockerignore`, multi-stage
    build) e projeto final de empacotar uma aplicação com `HEALTHCHECK`.
  - [**Docker Compose e Workflows**](./roadmaps/docker-compose-e-workflows)
    (8 nós, intermediário): orquestrar uma stack com
    `docker-compose.yml`, `services` + `depends_on` + `healthcheck`,
    variáveis em `.env` (com `.env.example` no Git), volumes nomeados
    vs bind mounts, profiles (dev/prod), watch/hot reload e projeto
    final de uma stack realista (app + banco + cache) com healthcheck
    e `depends_on: condition: service_healthy`.
  - [**Kubernetes**](./roadmaps/kubernetes) (12 nós, avançado):
    arquitetura do cluster (control plane + workers), cluster local
    com `minikube` ou `k3d`, `kubectl` no dia a dia, Pods, Deployments
    (rolling update, rollback, scaling), Services (ClusterIP, NodePort,
    LoadBalancer), ConfigMaps, Secrets, PV/PVC com StatefulSet,
    Ingress, probes (startup/liveness/readiness) + HPA + resource
    limits, Helm (charts, values, Artifact Hub) e projeto final
    de stack completa no cluster.

- 🤖 [**Prompt Engineering**](./roadmaps/prompt-engineering) -
  ensinar a usar IA na era dos LLMs. **24 nós** em 3 fases lineares
  (Básico, Intermediário, Avançado), do zero absoluto (o que é um LLM)
  até construir produtos com IA. Agnóstica de stack: não exige saber
  programar, com Mermaid, Quiz e projeto final de prompt design.

> Mais trilhas chegando: Python, Estruturas de Dados…
> Acompanhe nas [Issues](https://github.com/lucianodiisouza/aprenda-community/issues).

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
   → [Abra uma issue de dúvida (Q&A)](https://github.com/lucianodiisouza/aprenda-community/issues).

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

- [Issues](https://github.com/lucianodiisouza/aprenda-community/issues) -
  perguntas, sugestões, show & tell, bugs e propostas concretas.
- O app (em breve): aprenda.oprimo.dev.

---

Feito com 💚 por Luciano e pela comunidade.
