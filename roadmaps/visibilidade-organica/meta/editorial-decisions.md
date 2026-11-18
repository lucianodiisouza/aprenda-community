# Decisões editoriais - Trilha "Visibilidade Orgânica"

> Histórico de decisões de escopo, organização e curadoria. Quando a
> trilha ganha ou perde um nó, isso fica registrado aqui.

## v1.0.0 - Proposta inicial

### Por que essa trilha

Existe uma trilha `seo-aeo-geo` (13 nós) que cobre o básico: como o buscador
funciona, on-page, técnico, E-E-A-T, dados estruturados, AEO e GEO. Ela é boa
como primeira aproximação, mas é **magra** e **passiva**: os nós são quase todos
prosa explicativa, sem um único exercício que o aluno rode, e a trilha termina
sem projeto e sem plano de ação.

Esta trilha nasce como a versão **densa, aplicada e interativa** do mesmo
assunto. Ela não substitui a `seo-aeo-geo` (que continua sendo a porta de
entrada curta); ela vai fundo em baixo do mesmo teto.

A tese editorial é simples: **visibilidade orgânica é um problema de
engenharia, não de marketing.** Quem programa já tem as ferramentas - meta
tags, JSON-LD, robots.txt, Core Web Vitals, rendering, logs - e o que falta é
o modelo mental de como essas peças se encaixam. A trilha treina o modelo
mental **e** a mão.

### A diferença em relação à `seo-aeo-geo`

A `seo-aeo-geo` (13 nós, Breno Alvim) **continua existindo e não foi alterada
no conteúdo** — é a porta de entrada curta. Esta trilha é a versão
**avançada**: os mesmos assuntos, tratados até a implementação.

| | `seo-aeo-geo` | `visibilidade-organica` |
|---|---|---|
| Nós | 13 | 31 |
| Nível | intermediário | **avançado** |
| Interatividade | nenhuma | 60 `<Quiz>`, 23 `<Checkpoint>`, 5 `<VisualCheckpoint>`, 16 `<Mermaid>` |
| Onde termina | medição | medição → conversão → ASO → plano de 90 dias → projeto final |
| Exercícios | — | todo nó tem ao menos um `Quiz`; 1 em cada 2 tem código executável |
| Caso condutor | — | "Aurora", SaaS fictício com site **e** app |

### Overlap: sim, e é proposital

Mapeando nó a nó, **todos os 13 nós da `seo-aeo-geo` têm contrapartida
aqui** — mas em três níveis diferentes:

**1. Mesmo assunto, tratamento mais profundo (10 nós).** A trilha antiga
apresenta o conceito; esta apresenta o conceito **e o que dá errado com ele**:

| `seo-aeo-geo` | Aqui | O que esta acrescenta |
|---|---|---|
| `como-buscadores-funcionam` | `pipeline-da-busca` | a etapa de **renderização**, que é justamente a que quebra em SPA |
| `pesquisa-palavras-chave` | `intencao-de-busca` + `pesquisa-de-palavras-chave` | intenção como nó próprio; clusters em vez de keyword isolada |
| `seo-on-page` | `title-e-snippet` + `estrutura-semantica` | landmarks e HTML semântico; o Google reescreve o trecho |
| `estrutura-links-internos` | `canonicalizacao` + `sitemap-e-internlinkagem` | canonical e a armadilha da URL paramétrica; hub-and-spoke; sitemap com `lastmod` |
| `seo-tecnico` | `indexacao` + `sitemap-e-internlinkagem` + `performance-cwv` | `meta robots`, a armadilha do `noindex` bloqueado, `X-Robots-Tag`; LCP/INP/CLS com os thresholds do Google |
| `eeat-qualidade-conteudo` | `eeat-e-qualidade` | YMYL, sinais concretos de autoria, e o eixo *Experience* como o mais difícil de falsificar |
| `dados-estruturados` | `schema-org` + `jsonld-pratica` + `rich-results` | `@id` e `@graph` como grafo de entidades; erros que invalidam o bloco; campos por tipo |
| `link-building-autoridade` | `autoridade-e-links` | tráfego de referência como métrica honesta; ativo citável; prática de âncora |
| `introducao-aeo` | `resposta-direta` | PAA, busca por voz, AI Overview; a resposta tem que ser autossuficiente |
| `introducao-geo` + `estrutura-para-ia` | `conteudo-citavel` + `como-ia-le-a-web` + `dados-para-ia` | o pipeline da IA (chunk → embed → retrieve → cite); as 6 táticas de citação; `llms.txt`, `AGENTS.md`, MCP |
| `monitoramento-visibilidade-ia` | `search-console-e-ga4` + `metricas-de-citacao` | logs de servidor; share of voz; conjunto fixo de prompts; o problema do clique zero |

**2. Temas que só existem aqui (13 nós).** É onde esta trilha é realmente
nova: `renderizacao` (CSR/SSR/SSG), `javascript-seo` (o que quebra em SPA),
`canonicalizacao`, `estrutura-semantica`, `performance-cwv` (em profundidade),
`content-decay-e-refresh`, `marca-e-entity-seo` (entidades, Wikidata,
`sameAs`), `redes-e-comunidade`, `cro-organico` (conversão — o passo que
quase todo conteúdo de SEO pula), `aso-lojas-de-app` (ASO), `auditoria-e-plano`
(método de auditoria + priorização + plano de 90 dias), `projeto-final` e
`continuidade`.

**3. Nenhum conflito.** As duas trilhas não se contradizem em nenhum ponto —
a antiga é um resumo fiel do mesmo modelo. A diferença é de **profundidade e
de escopo**, não de opinião.

### A escada entre as duas

O caminho do aluno é: `seo-aeo-geo` (o mapa) → `visibilidade-organica` (a
implementação). O nó `introducao` desta trilha aponta para a outra, e o último
nó da outra aponta para esta. Os dois links usam caminho **absoluto**
(`/trilhas/<slug>`) — ver a nota sobre links na seção abaixo.

> ⚠️ **Nota sobre links entre trilhas.** O padrão usado em outras trilhas do
> repo (`../../outra-trilha`) resolve no layout do **GitHub**, mas quebra nas
> duas plataformas: no site vira `/outra-trilha` (rota inexistente) e no app
> mobile o `openHref` só reconhece `/trilhas/<slug>` ou
> `https://aprenda.oprimo.dev/trilhas/<slug>`, então link relativo é
> **morto**. Link entre trilhas deve ser **absoluto**. As trilhas que já têm
> esse problema (ex.: `estruturas-de-dados`, `frontend`) ainda não foram
> corrigidas — é um ajuste mecânico de uma linha por link.

### Por que "crescimento orgânico" e não "SEO"

O pedido que originou a trilha foi "tudo o que pode fazer um site/app trazer
clientes organicamente". Isso é **mais** que SEO:

- **SEO** te coloca na lista azul.
- **AEO** te coloca na resposta direta (featured snippet, PAA, AI Overview).
- **GEO** te faz ser **citado** por uma IA generativa.
- **ASO** (App Store / Google Play) é o mesmo jogo dentro da loja de apps.
- **Conversão** é onde a visita vira cliente - e é o passo que quase todo
  conteúdo de SEO ignora.

A trilha cobre o caminho inteiro: **ser encontrado → ser escolhido → ser
convertido**, para site e para app.

### Os 8 módulos

1. **Abrindo o jogo** - enquadramento do problema como engenharia.
2. **Como te encontram** - pipeline da busca, como IA lê a web, intenção,
   keywords.
3. **Técnico** - renderização, indexação, canonical, sitemap, performance,
   JavaScript. É onde mora a maior parte do trabalho de dev.
4. **On-page e conteúdo** - title/snippet, HTML semântico, E-E-A-T, decay,
   AEO, GEO.
5. **Dados estruturados** - Schema.org, JSON-LD, rich results, dados para IA.
6. **Fora do site** - autoridade e links, marca/entidades, social e comunidade.
7. **Medir e converter** - Search Console/GA4, métricas de citação, CRO, ASO,
   auditoria e plano.
8. **Fechamento** - projeto final e continuidade.

### O fio condutor: "Aurora"

Um SaaS brasileiro fictício de organização de tarefas para equipes remotas, com
**site e app**. Ele aparece como exemplo recorrente: a página `/planos` da
Aurora, o title da Aurora, o JSON-LD da Aurora.

Por que um caso fictício e não um site real: porque o aluno precisa de um
caso **limpo**, onde ele não sabe a resposta e pode errar sem vergonha. E
porque "Aurora" tem site *e* app, o que permite discutir SEO e ASO no mesmo
exemplo sem trocar de cenário.

O caso fictício **nunca** substitui a prática: todo nó termina com "## No seu
projeto", que é a tarefa real no site/app do aluno. O projeto final exige
auditar um site **real**.

### Interatividade: a decisão que define a trilha

O principio adotado: **cada nó tem um `Quiz`; um em cada dois nós tem código
executável.** Os três componentes disponíveis foram usados assim:

- `<Quiz>` (~60) - testa o conceito, com `explanation` em **todas** as
  alternativas, inclusive nas erradas. É onde o aluno descobre *por que*
  errou.
- `<Checkpoint>` (~21) - exercício de JavaScript que o aluno escreve e roda.
  O `expected` é match exato da saída, então os exercícios foram desenhados
  para ter saída **curta e determinística** (um número, uma string, uma
  palavra).
- `<VisualCheckpoint>` (~6) - exercício de HTML/CSS validado contra o DOM
  renderizado. É o componente certo para metatags, hierarquia de headings e
  JSON-LD: o aluno escreve HTML e o sandbox confere se o documento está
  correto.
- `<Mermaid>` (~14) - só onde o diagrama carrega informação que a lista não
  carrega (pipeline, precedência de regras, grafo de entidades).

**`<Playground>`, `<LiveExample>` e `<PyPlayground>` foram descartados de
propósito.** Funcionam no site, mas no app mobile caem para bloco de código
estático - o aluno perde a interação justamente onde ela importa. O conjunto
escolhido (`Quiz` + `Checkpoint` + `VisualCheckpoint` + `Mermaid`) é o que
renderiza **igual** nas duas plataformas.

`<Figure>` também foi evitado: o repositório não tem a pasta `imgs/`, então
uma imagem referenciada quebraria. Diagramas são Mermaid.

### Pré-requisito declarado

Assume HTML básico (tags, atributos, `<head>`) - a trilha [`html`](../html) ou
equivalente. Vários nós pedem que o aluno escreva HTML de verdade, e JSON é
usado em dois nós.

### Curadoria

- **Google Search Central** como fonte primária de SEO clássico e técnico: é a
  fonte oficial e a mais afetada pelas próprias regras que descreve.
- **web.dev** para Core Web Vitals (mesma casa, métricas mais a fundo).
- **artigo do KDD 2024 (arXiv)** como fonte primária de GEO: é a pesquisa
  original citada por quase todo o conteúdo secundário sobre o tema.
- **Documentação oficial dos próprios crawlers** (OpenAI, Anthropic,
  Perplexity) para a parte de robôs de IA.
- **llmstxt.org** para a proposta `llms.txt` - com ressalva explícita no nó de
  que é proposta voluntária, não padrão.
- **Schema.org** e **json-ld.org** para dados estruturados.
- **Documentação da Apple e do Google Play** para ASO.
- **Sem recursos pagos.** Nenhum link de afiliado.
- **Todas as URLs foram verificadas com HTTP 200** antes de entrar na trilha
  (o style guide exige checagem manual).

### Honestidade editorial (regra que vale para todos os nós)

Este assunto é cheio de promessas fácil. A trilha segue três regras:

1. **Nenhuma técnica é apresentada como "hack".** `llms.txt`, `AGENTS.md`, MCP e
   companhia são apresentados pelo que são: tentativas/ Interfaces de máquina,
   com estado real de adoção.
2. **O que a pesquisa diz, é o que a pesquisa diz.** O nó de GEO cita o
   achado do estudo de 2024 (estatísticas com fonte aumentam a chance de
   citação) e não inventa número novo.
3. **Sinal versus moda.** O nó de E-E-A-T explica que "conteúdo gerado por IA"
   não é o problema - conteúdo sem experiência é. E o nó de performance deixa
   claro que CWV é sinal deranqueamento *e* alavanca de conversão.

### O que ficou de fora (intencionalmente)

- **SEO local** (Google Business Profile, NAP, avaliações) - nicho de negócio
  físico, fora do foco de quem programa.
- **SEO internacional** (`hreflang`) - aparece só como menção em
  canonicalização; é trilha própria.
- **E-commerce avançado** (feeds de produto, marketplace) - só o essencial de
  `Product`.
- **Copywriting e redação persuasiva** - a trilha ensina estrutura e sinal, não
  escrita de venda.
- **Trilhas de backlinks em volume** (compras de link, PBNs) - a trilha
  ensina o que é link natural e onde ele nasce; o resto é risco de penalidade.

### Aprofundamentos futuros

- **`seo-internacional`** - `hreflang` completo, canonicalização multi-idioma.
- **`schema-avancado`** - `Product` com variants, `Review`, feeds de compra.
- **`dados-para-agentes`** - MCP, `AGENTS.md` e padrões de leitura por máquina
  em profundidade, conforme o ecossistema amadurece.
- **`crescimento-pago`** - a ponte entre orgânico e pago (o que é incremental,
  o que é canibalização). Fora do escopo desta trilha por serem o oposto do
  canal orgânico.

Mudanças de escopo aqui viram bump **minor** se adicionarem nós, **patch**
se forem correções, **major** se mudarem a ordem ou a base conceitual.

---

Aberto a discussão: abra issue ou comente em
[Issues](https://github.com/lucianodiisouza/aprenda-community/issues).
