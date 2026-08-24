# Contribuindo com o Aprenda Community

Obrigado por estar aqui. 🥹

Contribuir com conteúdo aqui é simples **mesmo sem saber programar** - você
consegue fazer tudo pelo navegador, direto na interface do GitHub.

Este guia cobre:

1. [Os 4 jeitos de contribuir](#os-4-jeitos-de-contribuir)
2. [O fluxo na prática (passo a passo)](#o-fluxo-na-prática-passo-a-passo)
3. [Anatomia de um nó `.mdx`](#anatomia-de-um-nó-mdx)
4. [Anatomia de um `roadmap.json`](#anatomia-de-um-roadmapjson)
5. [Critérios de aceite do CI](#critérios-de-aceite-do-ci)
6. [Como é o processo de review](#como-é-o-processo-de-review)
7. [Glossário rápido](#glossário-rápido)

> Antes de começar a editar texto, vale 5 minutos no
> [Style Guide](./docs/style-guide.md). É o que mantém a voz do projeto
> coerente.

---

## Os 4 jeitos de contribuir

| Jeito                            | Quem pode fazer         | Exemplo                                                                  |
| -------------------------------- | ----------------------- | ------------------------------------------------------------------------ |
| 🐞 Reportar erro ou link quebrado | Qualquer pessoa         | "Faltou acento nesse trecho" / "Esse link retorna 404"                  |
| ✏️ Editar texto de um nó         | Qualquer pessoa         | Reescrever uma explicação, ajustar PT-BR, melhorar exemplo              |
| ➕ Adicionar/atualizar recurso    | Qualquer pessoa         | Trocar um vídeo ruim por um melhor, marcar `lang: en` que faltou         |
| 🆕 Propor nó ou trilha nova      | Após discussão          | Abrir issue primeiro → discutir → depois PR                            |

**Por que nó/trilha nova passa por issue antes?** Porque a gente quer manter
"poucas trilhas, bem-feitas" (princípio do projeto). Sem discussão prévia, seu
trabalho pode ser recusado não por qualidade, mas por **fora de escopo**.

---

## O fluxo na prática (passo a passo)

### Cenário 1: você quer corrigir um erro de português

1. Abra o arquivo do nó (ex: `roadmaps/html/nodes/estrutura-basica.mdx`)
   direto pelo GitHub.
2. Clique no **ícone de lápis** (✏️) no canto superior direito.
3. Edite o texto na tela seguinte.
4. Role até o final → preencha "Propose changes" com uma frase
   ("Corrige concordância no segundo parágrafo").
5. Clique em **"Propose changes"** → isso cria um fork + branch + PR.
6. Preencha o **template de PR** (vai aparecer sozinho) e clique em "Create".
7. Aguarde o **CI validar** (demora uns segundos). Se ficar verde, é só esperar
   o review.

### Cenário 2: você quer adicionar um recurso novo num nó

1. Abra o `.mdx` do nó.
2. No **frontmatter** (o bloco entre `---` no topo), adicione um item na lista
   `resources`. Exemplo:

   ```yaml
   resources:
     - title: "MDN: <picture> element"
       url: https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/picture
       type: doc
       lang: pt
       free: true
   ```

3. Mesmo passo a passo do cenário 1 (lápis → editar → propose → PR).

### Cenário 3: você quer propor um nó novo

1. **Primeiro:** abra uma
   [issue do tipo "novo tópico"](./.github/ISSUE_TEMPLATE/novo-topico.md).
   Descreva o que quer adicionar, por quê, e que recursos conhece.
2. Discuta com a gente. Pode ser que o nó já exista em outra trilha, ou que
   faça sentido criar em outro lugar.
3. Depois do ✅, é só seguir o cenário 1 - mas criando o arquivo do zero (no
   GitHub: "Add file" → "Create new file").

### Cenário 4: você quer propor uma trilha inteira nova

1. **Primeiro:** abra uma
   [issue do tipo "trilha nova"](./.github/ISSUE_TEMPLATE/trilha-nova.md).
2. Preencha a estrutura proposta (mínimo 5 nós, objetivo da trilha, público).
3. Espere o ✅ antes de gastar horas escrevendo - pode ser que a gente sugira
   encaixar em uma trilha existente.

---

## Anatomia de um nó `.mdx`

Todo nó tem duas partes: **frontmatter** (metadados) e **corpo** (o texto).

```mdx
---
id: estrutura-basica              # obrigatório, único na trilha, kebab-case
title: "Estrutura Básica de um Documento HTML"  # título visível
resources:                          # 1 a 3 recursos curados (ver style guide)
  - title: "Anatomia de uma página (MDN PT-BR)"
    url: https://developer.mozilla.org/pt-BR/docs/Learn/HTML/Introduction_to_HTML/Getting_started
    type: doc                       # artigo | video | curso | doc | exercicio
    lang: pt                        # pt | en
    free: true                      # true | false
---

Corpo do nó em PT-BR, escrito em tom conversacional (ver Style Guide).

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head><title>Exemplo</title></head>
  <body><h1>Olá</h1></body>
</html>
```

Use o snippet acima como ponto de partida. Nos próximos nós, vamos
aprofundar cada parte.
```

### Regras de ouro do frontmatter

- `id` em **kebab-case**, único na trilha, sem acentos.
- `title` com a capitalização natural em PT-BR.
- `resources` com **1 a 3 itens** (acima de 3 vira lista, não curadoria).
- Toda URL precisa ter `lang` (`pt` ou `en`).
- Recursos pagos precisam de `free: false` explícito.
- Sem links de afiliado. Sem tracking parameters (`?utm=...`).

### Regras de ouro do corpo

- Voz de **"você"** (não "o aluno" / "o usuário").
- **Mostra antes de explicar**: snippet de código curto, com legenda do que faz.
- No **máximo 3-4 conceitos novos** por nó. Se passar, quebre em dois.
- Termine com o que vem a seguir ("No próximo nó, vamos ver…").
- Veja a [estrutura recomendada](./docs/style-guide.md#3-estrutura-recomendada-de-um-nó-no-mdx).

---

## Anatomia de um `roadmap.json`

Cada trilha tem um `roadmap.json` no nível da pasta da trilha:

```jsonc
{
  "slug": "html",
  "title": "HTML",
  "description": "Trilha completa de HTML, do zero absoluto até HTML semântico avançado.",
  "difficulty": "iniciante",  // iniciante | intermediario | avancado
  "nodes": [
    {
      "id": "introducao",
      "title": "Introdução: O que é HTML",
      "type": "topic",            // topic | subtopic | milestone
      "recommended": true,        // true = essencial, false = opcional
      "children": ["estrutura-basica"]
    },
    {
      "id": "estrutura-basica",
      "title": "Estrutura Básica de um Documento",
      "type": "subtopic",
      "recommended": true,
      "children": ["textos"]
    }
  ]
}
```

### Regras

- Todo `id` em `children` precisa existir na lista de `nodes` (o CI valida).
- `children` define a **ordem sugerida** (a árvore de leitura).
- Todo `id` em `nodes` precisa ter um arquivo correspondente em `nodes/<id>.mdx`
  com frontmatter `id` igual (o CI valida).
- `milestone` é um nó de fechamento (ex: "Projeto Final"). Idealmente com
  `children: []`.

---

## Critérios de aceite do CI

Todo PR passa por uma checagem automática. **Se o CI fica vermelho, o PR não
pode ser mergeado** - mas não se preocupe, em geral é coisa simples.

| Checagem                     | O que ela faz                                                  |
| ---------------------------- | -------------------------------------------------------------- |
| `validate:roadmap`           | Confere que o JSON é válido, slugs/ids únicos, children existem |
| `validate:frontmatter`       | Confere que cada `.mdx` tem frontmatter válido e `id` bate     |
| `validate:links`             | Faz um HEAD em cada URL de recurso e checa se responde          |
| `lint:markdown`              | Verifica formatação do `.mdx`                                 |
| `lint:pt-br`                 | Confere que o corpo está em PT-BR (heurística leve)           |

Se algo falhar, o próprio log do CI mostra o arquivo e a linha do problema.
Em caso de dúvida, comente no PR - a gente te ajuda.

---

## Como é o processo de review

1. Você abre o PR preenchendo o template (checklist de auto-revisão).
2. CI roda automaticamente. Se vermelho, ajuste.
3. Um mantenedor revisa. Em geral:
   - **Aprovação rápida** se for correção de typo / link / recurso.
   - **1-3 rodadas de review** se for conteúdo novo (clareza, profundidade,
     recursos, tom).
4. Quando aprovado, o mantenedor faz o merge. Aí entra no **changelog** e na
   próxima **tag** semântica.

Reviews são em PT-BR, tom amigável, foco em manter a voz do projeto. Não é
exame - é conversa.

---

## Glossário rápido

- **Nó (`node`)** - uma "etapa" dentro de uma trilha. Ex: "HTML: Listas".
- **Trilha (`roadmap`)** - uma sequência de nós. Ex: "HTML".
- **Slug** - o identificador kebab-case de uma trilha ou nó. Ex: `html`, `estrutura-basica`.
- **Frontmatter** - o bloco de metadados no topo de um `.mdx` (entre `---`).
- **Recurso (`resource`)** - link externo curado que aparece no fim de cada nó.
- **MDX** - Markdown + JSX. Por enquanto, a gente só usa o subconjunto
  Markdown; o `.mdx` é só a extensão.
- **CI** - GitHub Actions. Roda automaticamente em todo PR.
- **Tag semântica** - `v1.0.0`, `v1.1.0` etc. Marca versões do conteúdo.
- **Submodule** - forma como o app consome este repo. Você não precisa
  entender pra contribuir.

---

## Dúvidas?

- 💬 [Discussions / Q&A](https://github.com/lucianodiisouza/aprenda-community/discussions/categories/q-a)
- 🐞 [Issue de bug](./.github/ISSUE_TEMPLATE/bug-report.md)
- 💡 [Sugestão de recurso/trilha](./.github/ISSUE_TEMPLATE/trilha-nova.md)
- 📧 Se for algo sensível: abra uma issue privada via security advisory.

Valeu por contribuir. 💚
