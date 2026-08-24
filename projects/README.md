# `projects/`

Projetos práticos ("Projetos" no site) — desafios que exercitam o que as
trilhas ensinam. Diferente de `roadmaps/` (que é um **grafo de conceitos**),
um projeto é um **documento único** — o "brief" do desafio.

## Formato

Um projeto = **um arquivo** `projects/<slug>.mdx`.

- O `slug` do front-matter tem que bater com o nome do arquivo.
- O front-matter guarda os metadados; o corpo em MDX é o "brief"
  (objetivo, requisitos, desafios extras, dicas).
- `trilhas: [...]` referencia slugs de trilhas existentes em `roadmaps/`
  (validado no CI).

Veja `templates/project.mdx` para o esqueleto e o schema em
`scripts/validate.mjs` (`validateProject`) para o contrato completo.

## Como o monorepo consome

O monorepo `primo-academy` (que renderiza o site) sincroniza esta pasta via
`scripts/sync-content.sh`, pinado em uma tag. Cada merge em `main` vira uma
versão semântica; o bump da tag no monorepo traz os novos projetos.

## Validação local

```bash
node scripts/validate.mjs   # valida estrutura + frontmatter
node scripts/lint.mjs       # avisos de estilo
node scripts/check-links.mjs  # HEAD em URLs de recursos
```

## Adicionando um projeto

1. Copia `templates/project.mdx` para `projects/<slug>.mdx`.
2. Preenche o front-matter (slug, title, description, difficulty, skills,
   trilhas).
3. Escreve o brief: objetivo, requisitos, desafios extras, dicas.
4. Roda `node scripts/validate.mjs` localmente.
5. Abre PR.
