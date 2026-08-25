# Contribuindo com o Aprenda Community

Obrigado por estar aqui. 🥹

Contribuir com conteúdo aqui é simples **mesmo sem saber programar** - você
consegue fazer tudo pelo navegador, direto na interface do GitHub.

Este guia cobre:

1. [Os 4 jeitos de contribuir](#os-4-jeitos-de-contribuir)
2. [O fluxo na prática (passo a passo)](#o-fluxo-na-prática-passo-a-passo)
3. [Anatomia de um nó `.mdx`](#anatomia-de-um-nó-mdx)
4. [Imagens e vídeos](#imagens-e-vídeos)
5. [Anatomia de um `roadmap.json`](#anatomia-de-um-roadmapjson)
6. [Critérios de aceite do CI](#critérios-de-aceite-do-ci)
7. [Como é o processo de review](#como-é-o-processo-de-review)
8. [Glossário rápido](#glossário-rápido)

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

## Imagens e vídeos

O corpo de um nó (ou de um projeto) pode ter **imagens** e **embeds de vídeo do
YouTube**. Ambos funcionam igual em `roadmaps/<trilha>/nodes/<id>.mdx` e em
`projects/<slug>.mdx`.

### Imagens

As imagens moram **neste repositório**, na pasta `imgs/` (crie subpastas por
trilha se ajudar, ex: `imgs/html/`). O app não serve os arquivos direto do
GitHub - ele usa o **jsDelivr**, um CDN gratuito na frente do repo, que é rápido
e cacheado. Você não precisa configurar nada: é só referenciar com o prefixo
`gh:`.

**1. Suba a imagem** em `imgs/` (pelo GitHub: "Add file" → "Upload files", ou
arrastando o arquivo).

**2. Referencie no `.mdx`** com o prefixo `gh:` seguido do caminho dentro do
repo:

```mdx
![Diagrama do modelo de caixa do CSS](gh:imgs/css/box-model.png)
```

O prefixo `gh:<caminho>` é reescrito para
`https://cdn.jsdelivr.net/gh/lucianodiisouza/aprenda-community@main/<caminho>`.
URLs completas (`https://…`) também funcionam e passam direto - útil pra imagens
já hospedadas em outro lugar oficial.

Para uma imagem com **legenda visível**, use `<Figure>` numa **linha própria**:

```mdx
<Figure src="gh:imgs/css/box-model.png" alt="Modelo de caixa" caption="As 4 camadas da caixa CSS." />
```

> `![…]()` fica **inline** (sem legenda); `<Figure>` é um **bloco** com legenda.
> Sempre coloque `<Figure>` sozinho na linha.

**Convenções para arquivos de imagem:**

- Nome em **kebab-case, sem acento** (ex: `box-model.png`, não `Box Model.png`).
- Formatos: **`.png`**, **`.jpg`**, **`.svg`** ou **`.webp`**.
- **Otimize o peso**: largura máx. ~1200px e, de preferência, abaixo de ~300 KB.
  Imagem é o que mais pesa numa aula.
- **`alt` é obrigatório** (o texto entre `[ ]`, ou o atributo `alt` do
  `<Figure>`): é o que leitores de tela leem e o que aparece se a imagem falhar.
  Descreva o conteúdo, não escreva "imagem de…".
- Só suba imagens que você tem direito de usar (autoral, ou licença livre com
  crédito). Nada de print de conteúdo pago/protegido.

### Vídeos do YouTube

Use `<YouTube>` com o `id` do vídeo. O vídeo só carrega quando a pessoa clica -
até lá aparece só a miniatura, então não pesa no carregamento da aula:

```mdx
<YouTube id="8aGhZQkoFbQ" title="O que é HTML" />
```

- **`id`** (obrigatório): o trecho depois de `v=` na URL. Em
  `youtube.com/watch?v=8aGhZQkoFbQ`, o id é `8aGhZQkoFbQ`.
- **`title`** (recomendado): descrição curta, pra acessibilidade.
- **`start`** (opcional): segundo inicial do vídeo (ex: `start={90}`).

Prefira vídeos em **PT-BR** e de canais estáveis (evite vídeos que sabidamente
vão sair do ar).

### Diagramas (Mermaid)

Diagramas são renderizados pelo app como SVG, via o componente
`<Mermaid>`. Use quando a figura for **mais clara que o texto**:
arquitetura, fluxo de dados, relação entre componentes. Não decore -
se uma lista de 3 itens resolve, vá de lista.

**Onde usar:** numa **linha própria** dentro do `.mdx` do nó:

```mdx
<Mermaid
  chart={`flowchart LR
    A[Cliente] --> B[API]
    B --> C[(Banco)]`}
  caption="Fluxo básico de uma request."
/>
```

- `chart` recebe a sintaxe Mermaid (template literal, com crase).
- `caption` é a legenda visível **e** o `alt` de acessibilidade -
  sempre descreva o que o diagrama mostra, em 1 frase.
- O `chart` é renderizado client-side pela lib `mermaid`. A
  primeira renderização tem latência pequena (~100ms) - o componente
  mostra "Carregando diagrama..." nesse intervalo.

**Quando vale a pena um diagrama:** arquitetura de sistema (quem
fala com quem), fluxo de request, comparação visual (ex: VM vs
container), pipeline com dependências, sequência temporal de
eventos. **Quando NÃO vale:** lista curta de conceitos, coisas que
o texto já diz com clareza, "diagrama bonito" sem função.

**Tipos Mermaid mais usados nas trilhas:** `flowchart LR|TB` (o
mais comum), `sequenceDiagram` (mensagens temporais), `classDiagram`
(modelo de classes), `stateDiagram-v2` (estados), `erDiagram`
(banco de dados). Detalhes de cada tipo na
[doc oficial do Mermaid](https://mermaid.js.org/syntax/flowchart.html).

**Atenção:** o preview do GitHub em arquivos `.mdx` **não renderiza**
Mermaid (só renderiza em `.md` e em issues/discussions). O
`<Mermaid>` aparece como tag crua no PR. Sempre teste no app
local antes de abrir o PR - `pnpm dev` no `primo-academy` e abra o
nó.

Detalhes de quando usar, como escrever e erros comuns no
[**Style Guide → Diagramas**](./docs/style-guide.md#8-diagramas-mermaid).

---

## Interatividade: quiz e checkpoints

Três componentes deixam o nó praticável. **Só checkpoints validados e projetos
contam pro certificado de bootcamp**; quiz é auto-verificação (formativo) e não
conta.

### `<Quiz>` — múltipla escolha (formativo)

```mdx
<Quiz
  question="O que `text-align: center` faz?"
  options={[
    { text: "Centraliza o texto no bloco", correct: true },
    { text: "Centraliza o bloco na página", correct: false,
      explanation: "Isso seria margin: auto; text-align alinha o conteúdo." },
  ]}
/>
```

Feedback na hora, com `explanation` opcional. O gabarito fica visível no repo
(é open-source) — por isso quiz é **formativo**, não vale nota.

### `<Checkpoint>` — exercício de JS validado (vale XP)

Roda o código do aluno e compara a saída de `console.log` com o esperado. Ao
passar, credita XP e marca o nó como concluído.

```mdx
<Checkpoint
  challenge="Imprima a soma de 2 + 3."
  starterCode="console.log()"
  expected="5"
  slug="programacao-do-zero"
  nodeId="operadores"
/>
```

Só serve pra conteúdo **JavaScript** que produz saída de console.

### `<VisualCheckpoint>` — exercício de HTML/CSS validado (vale XP)

Renderiza o HTML/CSS do aluno num preview isolado e roda uma asserção contra o
DOM (`getComputedStyle`, `querySelector`). Ao passar, credita XP e conclui o nó.

```mdx
<VisualCheckpoint
  challenge="Deixe o título vermelho e centralizado."
  starterHtml="<h1>Olá</h1>"
  starterCss={`h1 {\n  /* seu CSS aqui */\n}`}
  assert={`
    const h1 = root.querySelector('h1');
    const s = getComputedStyle(h1);
    return {
      pass: s.color === 'rgb(255, 0, 0)' && s.textAlign === 'center',
      message: 'O h1 precisa ser vermelho e centralizado.'
    };
  `}
  slug="css-fundamentos"
  nodeId="cores"
/>
```

- `assert` é um corpo de função que recebe `root` (onde o HTML foi renderizado) e
  devolve `{ pass, message }`. Compare a **cor computada** (`rgb(...)`), não a
  string escrita — assim qualquer formato válido (nome/hex/rgb/hsl) passa.
- `slug`/`nodeId` precisam bater com a trilha e o `id` do nó.

### Quanto usar (meta de cobertura)

Proporcional e **viável ao tipo** — não force interatividade em nó conceitual:

- **Trilha JS** (programação, algoritmos): ~1 `<Checkpoint>` a cada 4 nós + no fechamento.
- **Trilha visual (CSS/HTML)**: ~1 `<VisualCheckpoint>` a cada 5 nós + no fechamento.
- **git / SQL** (sem validação automática viável): `<Quiz>` formativo + projeto no fim.

---

## Anatomia de um `roadmap.json`

Cada trilha tem um `roadmap.json` no nível da pasta da trilha:

```jsonc
{
  "slug": "html",
  "title": "HTML",
  "description": "Trilha completa de HTML, do zero absoluto até HTML semântico avançado.",
  "difficulty": "iniciante",  // iniciante | intermediario | avancado

  // (Opcional) Vídeo de boas-vindas no header da trilha. Remova se não houver.
  "intro_video": {
    "url": "https://youtu.be/8aGhZQkoFbQ",  // watch, youtu.be, embed ou shorts
    "title": "Boas-vindas à trilha de HTML"  // opcional
  },

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
- `intro_video` é **opcional**. Quando presente, precisa ser um objeto com
  `url` (um vídeo do YouTube — `watch`, `youtu.be`, `embed` ou `shorts`) e,
  opcionalmente, `title`. O site extrai o id da URL e mostra o vídeo no header
  da trilha (só carrega o player ao clicar). Prefira vídeos em **PT-BR** e de
  canais estáveis. O CI valida que a URL é de fato do YouTube.

---

## Anatomia de um `bootcamp.json`

Um **bootcamp** agrupa trilhas (e projetos) numa jornada com começo, meio e fim.
Vive em `bootcamps/<slug>/bootcamp.json` e é **curadoria**: ele **não tem
conteúdo próprio** — só aponta, em ordem, pra trilhas e projetos que já existem.

```jsonc
{
  "slug": "desenvolvedor-backend",
  "title": "Desenvolvedor Backend",
  "description": "Do zero a uma API completa, com prática.",
  "difficulty": "intermediario",           // iniciante | intermediario | avancado
  "outcome": "Ao terminar, você constrói e publica uma API REST.",  // o resultado
  "estimate": "3 meses",                    // opcional
  "modules": [
    { "trilha": "programacao-do-zero", "description": "Base de lógica e JS." },
    { "trilha": "backend" },
    { "projeto": "encurtador-de-url", "title": "Projeto final" }
  ]
}
```

### Regras

- Cada **módulo** aponta pra **uma** `trilha` **ou** **um** `projeto` — nunca os
  dois (o CI recusa). A `trilha`/`projeto` precisa existir em `roadmaps/`/`projects/`.
- A ordem do array `modules` é a **ordem sugerida** de estudo.
- `title`/`description` no módulo são opcionais (contexto de por que entra ali).
- **Não crie nós/MDX pro bootcamp** — se você sentir falta de conteúdo, ele vira
  uma trilha (ou entra numa trilha existente), não conteúdo do bootcamp.
- O progresso do bootcamp é calculado a partir do progresso das trilhas; não há
  nada a preencher pra isso.

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
- **MDX** - Markdown + JSX. Na prática você escreve Markdown normal; os
  componentes JSX disponíveis no conteúdo são `<Figure>` e `<YouTube>` (ver
  [Imagens e vídeos](#imagens-e-vídeos)) e os interativos `<Quiz>`,
  `<Checkpoint>` e `<VisualCheckpoint>` (ver
  [Interatividade](#interatividade-quiz-e-checkpoints)).
- **CI** - GitHub Actions. Roda automaticamente em todo PR.
- **Tag semântica** - `v1.0.0`, `v1.1.0` etc. Marca versões do conteúdo.
- **Submodule** - forma como o app consome este repo. Você não precisa
  entender pra contribuir.

---

## Dúvidas?

- 💬 [Dúvidas / Q&A (Issues)](https://github.com/lucianodiisouza/aprenda-community/issues)
- 🐞 [Issue de bug](./.github/ISSUE_TEMPLATE/bug-report.md)
- 💡 [Sugestão de recurso/trilha](./.github/ISSUE_TEMPLATE/trilha-nova.md)
- 📧 Se for algo sensível: abra uma issue privada via security advisory.

Valeu por contribuir. 💚
