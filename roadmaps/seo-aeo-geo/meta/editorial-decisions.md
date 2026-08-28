# Decisões editoriais - Trilha de SEO, AEO e GEO

> Histórico de decisões de escopo, organização e curadoria. Quando a
> trilha ganha ou perde um nó, isso fica registrado aqui.

## v1.0.0 - Proposta inicial

### Por que essa trilha

SEO é frequentemente tratado como assunto de marketing, fora do escopo de
quem programa. Mas boa parte do trabalho (meta tags, dados estruturados,
Core Web Vitals, robots.txt, sitemap) é código e configuração, não texto
publicitário. Essa trilha foca nessa fatia técnica, sem virar curso de
marketing de conteúdo.

### AEO e GEO como módulos finais

A trilha segue uma progressão deliberada: fundamentos de SEO clássico
primeiro (como buscador funciona, on-page, técnico, autoridade), depois AEO
(otimizar pra resposta direta) e GEO (otimizar pra IA generativa) como os
dois últimos módulos antes do encerramento. A ordem reflete tanto
cronologia (SEO existe há décadas, AEO/GEO são recentes) quanto dependência
conceitual: AEO e GEO fazem mais sentido depois de entender o que já
funciona em SEO clássico.

### Pré-requisito declarado

Assume que a pessoa já passou por [**HTML**](../../html) (ou sabe o
básico). Vários nós (`seo-on-page`, `dados-estruturados`,
`estrutura-para-ia`) usam marcação HTML direto nos exemplos (`<title>`,
`<meta>`, `<script type="application/ld+json">`).

### Projeto final ficou de fora, por enquanto

Diferente das outras trilhas, essa não tem nó `milestone`/`projeto-final`
nessa primeira versão. A ideia é que o projeto prático fique em
`projects/`, como um brief separado (auditoria de SEO/AEO/GEO numa página
real), a ser adicionado depois. Trilha funciona sozinha sem isso: o último
nó (`monitoramento-visibilidade-ia`) já fecha o ciclo com uma prática
concreta (checagem mensal).

### O que ficou de fora (intencionalmente)

- **SEO local** (Google Business Profile, NAP, avaliações) - nicho
  específico (negócio físico), fora do escopo de "quem programa".
- **SEO internacional** (hreflang, multi-idioma) - avançado o suficiente
  pra ficar de fora do "intermediário"; aprofundamento futuro possível.
- **Ferramentas pagas** (Ahrefs, Semrush) - a trilha usa só recursos e
  ferramentas gratuitas (Search Console, verificação manual).
- **Copywriting e redação persuasiva** - é conteúdo de marketing, não
  técnico; fora do escopo desta trilha.
- **E-commerce SEO** (schema de produto avançado, feed de compras) -
  nicho específico, candidato a aprofundamento futuro.

### Decisões de curadoria

- **Google Search Central** como fonte primária para SEO clássico e
  técnico - fonte oficial, a mais afetada pelas próprias regras que
  descreve.
- **Moz** (Beginner's Guide to SEO) para pesquisa de palavras-chave e link
  building - referência histórica no assunto, guia gratuito e estável.
- **web.dev** (Google) para Core Web Vitals - fonte oficial da métrica.
- **Artigo científico do KDD 2024** (arXiv) como fonte primária pra GEO -
  é a pesquisa original citada por praticamente todo conteúdo secundário
  sobre o tema, preferível a resumos de terceiros.
- **Search Engine Land** para o conceito de AEO - termo de origem mais
  recente e menos formalizada que SEO clássico; a fonte é jornalística
  especializada, não um órgão oficial (não existe um "padrão oficial" de
  AEO do jeito que existe documentação oficial de SEO).
- **llms.txt e documentação da OpenAI (GPTBot)** para a parte de acesso de
  robôs de IA - fontes primárias dos próprios padrões.
- **Sem recursos pagos.**
- URLs verificadas manualmente com o `fetch` do Node antes de entrar na
  trilha.

### Aprofundamentos futuros

- **`seo-internacional`** - hreflang, canonicalização multi-idioma,
  sitemap internacional.
- **`schema-avancado`** - Product, Review, AggregateRating, feed de
  compras pra quem for além do FAQPage/Article básico.
- **`projeto-final`** - projeto próprio de auditoria (SEO + AEO + GEO
  numa página real), como brief em `projects/`.

Mudanças de escopo aqui viram bump **minor** se adicionarem nós, **patch**
se forem correções, **major** se mudar a ordem ou a base conceitual.

---

Aberto a discussão: abra issue ou comente em
[Issues](https://github.com/lucianodiisouza/aprenda-community/issues).
