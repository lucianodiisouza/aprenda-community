# Preview local das trilhas

App pequeno de preview pra **ver sua trilha renderizada** enquanto você escreve,
com o mesmo visual do site (tema, fontes, tipografia, `TrilhaTree`, `Quiz`,
`Mermaid`). Ele lê `../roadmaps` **direto** - sem sync, sem build do site
principal, sem login.

> É uma **prévia de conteúdo**, não o site inteiro. Progresso, busca, rating e os
> componentes interativos mais avançados (Playground, Checkpoint...) aparecem
> como marcadores - o foco é conferir estrutura, prosa, código e recursos.

## Pré-requisitos

- **Node.js 20+** (já vem com o `npm`). Não tem? Instale em
  [nodejs.org](https://nodejs.org) e confira com `node -v`.

Só isso. Não precisa clonar o app principal, configurar banco, nem `.env`.

## Como rodar (passo a passo)

A partir da **raiz do repositório**:

```bash
cd preview      # entra na pasta do preview
npm install     # instala as dependências (só na primeira vez, ~1 min)
npm run dev     # sobe o servidor local
```

O Vite vai imprimir um endereço - por padrão **http://localhost:5173**. Abra no
navegador.

> Deixe esse terminal aberto enquanto trabalha. Pra parar, `Ctrl+C`.

## Como usar

1. A página inicial (`/`) lista **todas as trilhas** de `roadmaps/`. Clique na sua.
2. A página da trilha mostra o header e a **lista de nós** na ordem da trilha.
   Clique num nó pra abrir a aula.
3. A página do nó mostra a aula renderizada: prosa, blocos de código, `Quiz`,
   `Mermaid` e a seção de **recursos**. Use a sidebar pra pular entre os nós.

**Atalho:** você pode ir direto pela URL usando o slug da sua trilha e o id do nó:

```
http://localhost:5173/trilhas/<slug-da-trilha>/<id-do-no>
```

Ex.: `http://localhost:5173/trilhas/git/branches`. O `<slug-da-trilha>` é o nome
da pasta em `roadmaps/`; o `<id-do-no>` é o nome do arquivo `.mdx` (sem extensão).

**Editou e quer ver a mudança?** Salve o `.mdx` ou o `roadmap.json` - o Vite
recarrega a página sozinho (HMR). Não precisa reiniciar nada.

## Problemas comuns

- **Porta 5173 ocupada?** Rode `npm run dev -- --port 5174` (ou outra porta).
- **`command not found: npm`?** O Node.js não está instalado - veja os
  pré-requisitos acima.
- **Deu erro no `npm install`?** Confira `node -v` (precisa ser 20+); versões
  antigas do Node não funcionam.
- **A página abre em branco?** Confira o terminal do `npm run dev`: um erro no seu
  `.mdx` (front-matter inválido, componente desconhecido) costuma aparecer lá.

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
