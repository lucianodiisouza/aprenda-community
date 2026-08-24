# Decisões editoriais - Trilha de Git

> Histórico de decisões de escopo, organização e curadoria. Quando a trilha
> ganha ou perde um nó, isso fica registrado aqui.

## v1.0.0 - Lançamento (2026-08-24)

### Por que uma trilha de Git

Git é pré-requisito de fato para qualquer trilha de programação, mas é tratado
como "aprende no susto". O pedido foi uma trilha **abrangente**: básico,
intermediário e avançado, com prática em cada nível. Git é transversal (não
depende da linguagem que a pessoa programa), então ganha trilha própria em vez
de virar um nó dentro de outra.

### Estrutura geral

- **23 nós** (4 topics, 18 subtopics, 1 milestone), em três blocos de
  dificuldade crescente que compartilham uma linha linear única de `children`.
- **`difficulty: iniciante`** porque o ponto de entrada não pressupõe Git nenhum
  (`introducao` explica o que é controle de versão). A trilha **evolui** para
  avançado ao longo do caminho - o selo marca a porta de entrada, não o teto.
- **Três níveis explícitos**, sinalizados nas transições entre nós:
  - **Básico** (`introducao` → `desfazer`): o que é Git, config, repo, o ciclo
    add/commit, `.gitignore`, histórico, desfazer.
  - **Intermediário** (`branches` → `tags-releases`): branches, merge, conflitos,
    remotos, GitHub/PR, stash, tags/SemVer.
  - **Avançado** (`rebase` → `workflows`): rebase (+ interativo), cherry-pick,
    reflog, bisect, reescrita de história, hooks, workflows.
- **Milestone** (`projeto-final`): abrir um Pull Request real em open source -
  o exercício que consolida o fluxo inteiro (fork → branch → commit → push → PR
  → review).

### Prática sem Playground

O site tem `<PyPlayground>`/`<JsPlayground>`, mas não um terminal Git sandbox.
Decisão: a prática vem de (1) **blocos de comando** copiáveis em todos os nós,
(2) recursos interativos externos curados (**Learn Git Branching** em PT-BR,
**First Contributions**), e (3) o **projeto final** ser uma contribuição de
verdade neste ou noutro repositório - prática autêntica, não simulada.

### Decisões de curadoria

- **Pro Git (git-scm, PT-BR) é a fonte primária.** Livro oficial, gratuito,
  traduzido, com deep-links por capítulo.
- **GitHub Docs em PT-BR** para o que é específico de colaboração (PR, fork,
  remotos, conflitos pela UI).
- **Inglês (`lang: en`)** só quando não há equivalente PT-BR à altura: docs
  oficiais de comandos (`cherry-pick`, `reflog`), Atlassian (merge vs rebase,
  workflows), Husky, `git-filter-repo`, Oh Shit Git.
- **1-2 recursos por nó**, priorizando docs oficiais e ferramentas versionadas
  sobre posts de blog.
- **Sem recursos pagos, sem afiliados.**

### Nós marcados como não-recomendados (`recommended: false`)

- **`bisect`** e **`hooks`**: extremamente úteis, mas não são o "caminho crítico"
  para alguém sair usando Git com competência no dia a dia. Marcados como
  aprofundamento opcional - ficam na trilha, mas quem quer o essencial pode pular.

### Segurança tratada como tema recorrente

Segredos vazados aparecem em três nós de forma coordenada: `gitignore` (prevenir),
`reescrever-historia` (limpar) e uma dica cruzada em ambos ("rotacione a chave
primeiro"). Decisão intencional: vazamento de segredo é o erro de Git de maior
custo real, e merece reforço em mais de um ponto.

### `git switch`/`restore` vs. `checkout`

A trilha ensina os comandos **modernos** (`switch`/`restore`, Git 2.23+) como
padrão, mencionando `checkout` como o equivalente antigo que ainda se encontra
por aí. Menos ambíguo para quem está começando.

### O que ficou de fora (e por quê)

- **Submodules e subtrees** - complexos e nicho; citados de passagem em
  `repositorio`. Candidatos a nós opcionais futuros ou trilha própria.
- **Worktrees** - útil, mas avançado e pouco comum para o público. Fora por ora.
- **Assinatura de commits (GPG/SSH)** - importante em contextos corporativos;
  candidato a nó opcional.
- **Internals profundos** (objetos blob/tree/commit, packfiles) - ótimo para
  entender o Git "por dentro", mas é aprofundamento, não pré-requisito de uso.
  Possível trilha "Git por dentro" no futuro.
- **Monorepo / LFS / CI a fundo** - temas de suas próprias trilhas.

### O que talvez mude nas próximas versões

- Nó opcional de **assinatura de commits** e de **submodules**.
- Um sandbox de terminal Git no site tornaria a prática inline - hoje ela é
  externa.
- Internacionalização para inglês se a comunidade pedir.

---

Aberto a discussão: abra issue ou comente em
[Discussions](https://github.com/lucianodiisouza/primo-academy/discussions).
