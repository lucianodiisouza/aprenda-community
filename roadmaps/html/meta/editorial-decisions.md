# Decisões editoriais - Trilha de HTML

> Histórico de decisões de escopo, organização e curadoria. Quando a trilha
> ganha ou perde um nó, isso fica registrado aqui.

## v1.1.0 - Expansão focada (2026-08-23)

### Decisão

Após o lançamento da v1.0.0, a pergunta recorrente foi "isso é o máximo
de HTML que dá pra explicar?". A resposta honesta: **não**, ainda faltava
uns 10-15% do uso cotidiano. Decidimos adicionar 4 nós que cobrem esse
espaço, sem esticar até virar enciclopédia:

- **i18n básico** - trilhas em PT-BR muitas vezes pulam isso, mas é
  parte do "cidadão do mundo" do HTML. Especialmente `lang` em
  elementos individuais, que é simples e útil mesmo para projetos
  monolíngues (ex: trechos em inglês dentro de texto PT).
- **atributos globais** - cabe em qualquer projeto. `hidden`,
  `data-*`, `tabindex`, `contenteditable` resolvem problemas
  reais. Estava faltando.
- **template/clone** - abre a porta para Web Components. É o "Hello
  World" de uma das tendências mais importantes da plataforma web.
  Mantivemos na trilha de iniciante porque o conceito em si é simples
  (declarar HTML que não renderiza para clonar depois).
- **HTML deprecated** - o que **não** usar e o que usar no lugar.
  Defende explicitamente contra `<center>`, `<font>`, `<marquee>` etc.
  É um "sinal de stop" antes do projeto final.

### O que continuamos deixando fora

- **Web Components completos** (custom elements + Shadow DOM) - vira
  trilha intermediária própria.
- **Microdata / schema.org** - importante para SEO, mas é tema
  intermediário. Candidato a uma trilha de "HTML para SEO" no futuro.
- **HTML para e-mail** - peculiar demais (tabelas para layout, inline
  styles, VML...). Vale trilha própria, fora desta.
- **Performance / preload / critical rendering path** - vira trilha de
  Web Performance.
- **i18n profunda** (RTL, fontes, CLDR) - vira trilha de i18n.

### Ordem dos novos nós

A escolha foi **weave in** (entrelaçar) em vez de empilhar no fim. Cada
nó novo entra **logo após** o conceito que naturalmente o prepara:

```
textos       → i18n-basico  (extensão de texto)
semantica    → atributos-globais  (atributos cruzam tags)
midia        → template-clone  (ambos DOM-level)
meta-seo     → html-deprecated  (aviso antes do projeto)
```

Empilhar tudo no fim daria a impressão de "epílogo"; weave in mantém o
ritmo de "acabei de aprender X, agora Y estende/aprofunda X".

### Métrica informal de cobertura

Com a v1.1.0, estimamos que a trilha cobre:

- **~95%** do que devs usam em HTML no dia-a-dia.
- **~70%** da especificação HTML5 completa (o resto é APIs JavaScript-
  driven e elementos raros que raramente aparecem em produção).
- **100%** do que o público iniciante precisa antes de partir para
  CSS, JavaScript ou frameworks.

Os 5% restantes (microdata, custom elements, e-mail, etc.) viram
trilhas intermediárias próprias - respeitando o princípio do projeto
"poucas trilhas, bem-feitas, antes de muitas rasas".

## v1.0.0 - Lançamento (2026-08-23)

### Por que uma trilha de HTML standalone?

A trilha **Frontend** do MVP já tinha um nó `html` ("HTML: Estrutura e
Semântica"). Mas o feedback de leitores do /aprenda é consistente: muita
gente que nunca programou quer **começar pelo começo absoluto**, e HTML é o
começo mais natural - antes de CSS, antes de JavaScript, antes de qualquer
framework. Um único nó dentro de Frontend não dá conta.

A decisão foi criar uma **trilha dedicada** que cobre HTML do zero até
projeto final. A trilha de Frontend (quando voltar) deve referenciar esta
como pré-requisito, e o nó `html` lá pode virar um "atalho" para esta
trilha.

### Estrutura geral

- **14 nós** (1 topic, 12 subtopic, 1 milestone).
- **Iniciante absoluto** como público: o nó `introducao` parte do
  pressuposto de que a pessoa nunca abriu o DevTools.
- **Tom de voz** segue o [Style Guide](../../docs/style-guide.md):
  PT-BR, "você", exemplos antes de abstração, máximo 3-4 conceitos novos
  por nó.
- **Projeto final** é uma landing page completa e acessível, com
  checklist de qualidade - não um exercício trivial.

### O que ficou de fora (e por quê)

- **CSS / estilo visual.** O objetivo aqui é a estrutura. CSS vem em
  outra trilha.
- **JavaScript / comportamento.** Mesmo motivo. Comportamento interativo
  (modais, tabs, validação JS) é tema da trilha de JS.
- **Web Components / custom elements.** Avançado, fora do escopo
  iniciante. Pode entrar numa trilha intermediária.
- **Internacionalização (i18n) avançada.** Mencionado de leve em
  `meta-seo` (`hreflang`), mas sem nó dedicado.
- **Performance / Core Web Vitals.** Tema da trilha de Performance
  (futuro).

### Decisões de curadoria

- **MDN em PT-BR é a fonte primária** para quase todos os conceitos.
  Onde a versão PT-BR estava fraca ou desatualizada, recorri à versão
  em inglês (marcada com `lang: en`).
- **1-3 recursos por nó**, no máximo. Priorizei docs oficiais e
 忽略了 posts de blog aleatórios.
- **Sem recursos pagos.** Tudo gratuito.
- **Sem links de afiliado.**
- **W3C Validator e WebAIM Contrast Checker** como ferramentas de
  validação mencionadas (gratuitas, autoridade).

### Convenções de nomenclatura

- Slugs em **kebab-case**, sem acentos: `formularios-basicos`,
  `formularios-avancados`, `meta-seo`, `projeto-final`.
- Títulos com capitalização normal em PT-BR: "HTML Semântico", "Meta
  Tags, Open Graph e Favicon".
- "Formulários" foi dividido em **dois nós** (básico e avançado) para
  respeitar a regra dos 3-4 conceitos novos por nó.

### Decisões sobre acessibilidade

Acessibilidade **não** ficou concentrada em um nó. Foi **distribuída**
ao longo de toda a trilha:

- `textos` menciona `strong`/`em` vs. `b`/`i`.
- `imagens` cobre `alt` em profundidade.
- `formularios-basicos` introduz `<label for>`.
- `formularios-avancados` cobre validação e mensagens de erro
  acessíveis.
- `semantica` cobre landmarks e hierarquia de headings.
- `midia` cobre legendas em vídeo.
- `acessibilidade` (nó dedicado) **amarra** tudo e cobre ARIA,
  contraste, foco, atalhos de teclado.

Essa distribuição foi intencional: a11y não é um "tópico" - é
qualidade que permeia o trabalho. O nó dedicado funciona como
**recapitulação + aprofundamento**, não como primeira exposição.

### O que talvez mude nas próximas versões

- Adicionar **microdata / schema.org** (SEO avançado) como nó
  opcional intermediário.
- Adicionar **templates / `<template>`** e **Web Components** como
  trilha separada.
- Quebrar `meta-seo` em dois se crescer: meta básico vs. Open Graph
  + Twitter.
- Internacionalizar para inglês se a comunidade pedir (decisão de
  Luciano).

---

Aberto a discussão: abra issue ou comente em
[Discussions](https://github.com/lucianodiisouza/aprenda-community/discussions).
