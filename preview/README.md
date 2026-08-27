# Preview local das trilhas

App pequeno de preview pra **ver sua trilha renderizada** enquanto você escreve,
com o mesmo visual do site (tema, fontes, tipografia, `TrilhaTree`, `Quiz`,
`Mermaid`). Ele lê `../roadmaps` **direto** - sem sync, sem build do site
principal, sem login.

> É uma **prévia de conteúdo**, não o site inteiro. Progresso, busca, rating e os
> componentes interativos mais avançados (Playground, Checkpoint...) aparecem
> como marcadores - o foco é conferir estrutura, prosa, código e recursos.

## Como rodar

```bash
cd preview
npm install
npm run dev
```

Abra o endereço que o Vite imprime (por padrão `http://localhost:5173`).

- **Índice** (`/`): todas as trilhas de `roadmaps/`.
- **Trilha** (`/trilhas/<slug>`): header + lista de nós (`TrilhaTree`).
- **Nó** (`/trilhas/<slug>/<nodeId>`): a aula em si - prosa, código, `Quiz`,
  `Mermaid` e a seção de recursos.

Editou um `.mdx` ou o `roadmap.json`? O Vite recarrega sozinho (HMR).

## Como funciona

- `roadmap.json` e `nodes/*.mdx` são lidos via `import.meta.glob` apontando pra
  `../roadmaps` (ver `src/lib/content.ts`).
- O MDX é compilado pelo `@mdx-js/rollup`; o front-matter (`title`, `resources`)
  é reexposto com `remark-mdx-frontmatter`.
- O tema (`src/styles.css`) é uma cópia dos tokens do site principal. Se o design
  do site mudar, atualize esse arquivo pra manter a fidelidade.

## O que é fiel e o que é aproximado

| Fiel | Aproximado / ausente |
| --- | --- |
| Tema, cores, fontes, tipografia | Realce de linguagens fora do conjunto comum do highlight.js |
| `TrilhaTree`, sidebar, badges, breadcrumbs | Progresso, login, busca, rating |
| `Quiz` e `Mermaid` (portados) | `Playground`, `Checkpoint`, `VisualCheckpoint`, etc. viram cartão-marcador |
