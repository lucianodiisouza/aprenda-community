# Style Guide - Conteúdo das trilhas

> Complementa o [CONTRIBUTING.md](../CONTRIBUTING.md) (fluxo de PR) e o
> [modelo de conteúdo](../CONTRIBUTING.md#anatomia-de-um-nó-mdx) (estrutura).
> Este doc é sobre **escrita**: voz, tom, profundidade e curadoria de recursos.

A voz do Aprenda é a de **um amigo mais experiente que está explicando com
calma** - não a de um manual corporativo, nem a de um professor universitário.
PT-BR, sem jargão desnecessário, com exemplos antes da abstração.

---

## 1. Voz e tom

- **"Você"**, não "o aluno" nem "o usuário". Estamos falando com uma pessoa.
- **Voz ativa.** "O navegador interpreta o HTML" (não "O HTML é interpretado
  pelo navegador").
- **Direto, mas encorajador.** "Antes de aprender CSS, vem a estrutura" - em
  vez de "É importante notar que…".
- **PT-BR.** Recursos em inglês entram com `lang: en` no frontmatter e selo
  visível na UI. Texto do corpo **sempre** em PT-BR.
- **Sem diminutivos forçados.** "Os erros" é melhor que "os errinhos".
  Informal não é infantil.
- **Humor leve, nunca irônico.** Estamos ensinando - não queremos que ninguém
  se sinta por baixo.

## 2. Profundidade

- **Comece com a intuição, não com a definição formal.** "HTML é o esqueleto de
  uma página: ele diz o que é cada parte (título, parágrafo, imagem)"
  > "HTML (HyperText Markup Language) é uma linguagem de marcação baseada em
  SGML padronizada pelo W3C…".
- **Mostre antes de explicar.** Um trecho curto, com o que ele faz logo abaixo.
  Só depois o conceito nomeado.
- **Limite a 3-4 conceitos novos por nó.** Se você está empilhando termos
  novos, quebre em dois nós.
- **Diga o que pode esperar do próximo nó.** "No próximo, vamos ver como
  adicionar links entre páginas." - ajuda a montar a trilha na cabeça.

## 3. Estrutura recomendada de um nó (no `.mdx`)

1. **1-2 frases de abertura** - por que esse nó existe, onde ele se encaixa.
2. **Explicação + exemplo de código** (se aplicável). Curto, comentado.
3. **Lista curta dos 2-4 conceitos pra fixar** (bullet points com **negrito**
   no termo-chave).
4. **"Dica:" opcional** - armadilha comum, atalho, ou pegadinha de iniciante.
5. **Recursos no frontmatter** (não no corpo) - o app renderiza numa seção à
   parte.

### Exemplo (esqueleto)

```mdx
---
id: estrutura-basica
title: "Estrutura Básica de um Documento HTML"
resources:
  - title: "Anatomia de uma página web (MDN PT-BR)"
    url: https://developer.mozilla.org/pt-BR/docs/Learn/HTML/Introduction_to_HTML/Getting_started
    type: doc
    lang: pt
    free: true
---

Antes de qualquer coisa, todo documento HTML tem a mesma "carcaça". Ela parece
muito formal à primeira vista, mas cada pedaço tem um papel claro.

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8">
    <title>Minha página</title>
  </head>
  <body>
    <h1>Olá!</h1>
  </body>
</html>
```

- **`<!DOCTYPE html>`** diz ao navegador: "isto é HTML5".
- **`<html lang="pt-BR">`** é a raiz. O `lang` ajuda leitores de tela e SEO.
- **`<head>`** guarda informações sobre a página (metadados).
- **`<body>`** é o que aparece de verdade na tela.

> Dica: salve o snippet como `index.html` e abra no navegador. Você acaba de
> fazer sua primeira página.

No próximo nó, vamos ver as tags que **formatam texto**: títulos, parágrafos,
ênfase.
```

## 4. Recursos: como escolher e linkar

- **Mínimo 1, máximo 3 por nó.** Acima de 3 vira lista, não curadoria.
- **PT-BR primeiro.** Se existe versão em PT-BR com qualidade aceitável, use
  ela. Inglês só quando não tem equivalente ou quando é a fonte canônica
  (ex: docs do W3C).
- **Marque `lang: en`** em qualquer recurso em inglês - a UI exibe selo.
- **Marque `free: false`** se o recurso é pago. Se for freemium, deixe `true`
  e mencione no `title` se for relevante ("… (trechos gratuitos)").
- **Critério de qualidade:** o autor realmente **explica** o conceito, ou só
  arranha a superfície? Se arranha, procure outro ou escreva um recurso
  próprio. **Recurso próprio é o ideal a longo prazo** - não dependa de
  terceiros pra curadoria crítica.
- **URLs estáveis.** Evite links de posts de blog antigos sem data; prefira
  docs oficiais (MDN, W3C) ou conteúdo versionado.
- **Não duplique.** Se dois recursos cobrem a mesma coisa, escolha o melhor
  e descarte o outro.

### Tipos de recurso (`type`)

| `type`       | Quando usar                                    |
| ------------ | ---------------------------------------------- |
| `artigo`     | Post de blog, texto longo em site terceiro     |
| `video`      | Vídeo no YouTube, Vimeo, etc.                  |
| `curso`      | Curso estruturado (Udemy, freeCodeCamp, etc.)  |
| `doc`        | Documentação oficial (MDN, W3C, vendor)        |
| `exercicio`  | Plataforma de prática (freeCodeCamp, etc.)     |

## 5. Nomenclatura

- **Slugs de trilha** em `kebab-case`, sem acentos, sem espaços.
  `programacao-do-zero`, não `Programação do Zero`.
- **Slugs de nó** em `kebab-case`, único dentro da trilha.
  `estrutura-basica`, `listas`, `formularios`.
- **Títulos visíveis** com a capitalização normal em PT-BR: "Estrutura Básica
  de um Documento", "Formulários e Validação".
- **Recursos** com `title` descritivo, sem nome do autor no título (vai pra
  outro campo se quiser creditar).

## 6. Quando quebrar um nó em dois

- O nó tem mais de 3 conceitos novos.
- A explicação passou de 80 linhas de MDX.
- Você precisou de 2+ exemplos de código distintos.
- O nó mistura "como" e "por quê" de coisas diferentes.

Quando quebrar, prefira **ordem linear**: o nó quebrado vem antes do próximo
na trilha, e o `children` reflete isso.

## 7. O que **NÃO** fazemos

- ❌ Textos com mais de 2 linhas sem exemplo ou lista.
- ❌ "Neste tutorial vamos aprender…" - vamos direto ao ponto.
- ❌ Tabelas longas de comparação (vão pra recurso, não pro corpo).
- ❌ "Como mencionei anteriormente" - não presumimos leitura linear perfeita.
- ❌ Prompts de LLM no meio do corpo do nó (se for útil, link externo com
  selo de gerado-por-IA).
- ❌ Recursos patrocinados / afiliado sem marcar.
- ❌ Conteúdo que pode mudar em 6 meses sem nota de validade (ex: "o
  framework X é o mais popular em 2026" sem data).
- ❌ Tag deprecada sem marcar (`<center>`, `<font>`, `<marquee>`, etc. -
  sempre mencione que caiu em desuso e indique a substituta).

## 8. Checklist antes de abrir PR

- [ ] CI local (`pnpm validate` ou equivalente) passa.
- [ ] Slug único na trilha; `children` aponta pra IDs existentes.
- [ ] Recursos têm `lang` e `free` preenchidos corretamente.
- [ ] Código de exemplo foi testado em um editor/Playground.
- [ ] Texto revisado em voz alta - se trai, simplifica.
- [ ] Nó novo tá linkado no `roadmap.json` e na ordem certa.
- [ ] Mudanças de escopo de uma trilha vão pra `meta/editorial-decisions.md`.
