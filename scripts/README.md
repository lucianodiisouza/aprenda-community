# scripts/

Scripts de validação que rodam no CI (e podem rodar localmente). Sem
dependências externas — só `node >= 20`.

## Como rodar local

```bash
node scripts/validate.mjs   # checa roadmap.json + frontmatter
node scripts/lint.mjs       # lint leve de .mdx
node scripts/check-links.mjs  # HEAD em URLs de recursos
```

## O que cada um faz

- **`validate.mjs`** — garante a integridade estrutural: `roadmap.json` é JSON
  válido, slugs e ids únicos, `children` aponta pra ids existentes, todo nó tem
  arquivo `.mdx` correspondente com frontmatter válido. Falha se algo estrutural
  estiver quebrado.
- **`lint.mjs`** — avisos de estilo: linhas > 200 chars, `?utm_` em URLs,
  blocos de código sem linguagem declarada. Não bloqueia o PR, mas aparece no
  log.
- **`check-links.mjs`** — HEAD em cada URL de recurso. Best-effort: o CI roda
  com `continue-on-error: true` porque links externos quebram por motivos
  alheios ao PR. Use o log como dica, não como verdade absoluta.

## Por que não usar Zod/remark/etc.?

- Manter **zero dependências** significa que o CI não precisa de `npm install` —
  economiza ~30s por run e evita surpresas de supply chain.
- Esses scripts são intencionalmente **rasos** (parsers caseiros). Para
  validação de produção no app, a gente usa o schema Zod do monorepo
  `primo-academy` ao consumir este repo como submodule.
