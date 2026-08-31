# Decisoes editoriais da trilha Angular

Esta trilha foi posicionada como intermediaria porque assume que a pessoa ja
conhece HTML, CSS, JavaScript e TypeScript basico. O foco nao e apresentar a
web do zero, mas mostrar como o Angular organiza uma aplicacao frontend com
convencoes, ferramentas e arquitetura de projeto.

## Escopo assumido

- Pre-requisitos: HTML, CSS, JavaScript e TypeScript basico.
- Fora de escopo: Nx, monorepos avancados, micro-frontends, Module Federation,
  bibliotecas de estado externas e arquitetura corporativa profunda.
- Objetivo: levar a pessoa de um primeiro app Angular moderno ate um dashboard
  com rotas, formularios, HTTP, estado, acessibilidade, testes e build.

## Ordem dos nos

A ordem comeca por ambiente e workspace porque o Angular depende bastante do
CLI, da estrutura do projeto e das convencoes locais. Depois vem TypeScript,
componentes standalone, lifecycle e comunicacao entre componentes, que formam a
base para templates, diretivas, pipes e estilos.

Services e injecao de dependencias aparecem antes de rotas, guards,
formularios, HTTP e RxJS porque essas partes geralmente dependem de uma camada
de servico bem definida. Signals e estado entram depois de RxJS para separar
reatividade assincrona de estado local e derivado.

Os ultimos nos tratam de interface, qualidade e entrega: Angular Material/CDK,
acessibilidade, i18n, PWA, testes, performance, SSR e projeto final.

## Nos opcionais

`angular-material-cdk` ficou com `recommended: false` porque Material e CDK sao
muito uteis em projetos reais, mas nao sao requisito para entender Angular. A
pessoa pode construir interfaces com CSS proprio ou outra biblioteca visual.

`pwa` tambem ficou com `recommended: false` porque service worker e instalacao
sao temas de produto e distribuicao. Eles enriquecem a trilha, mas nao precisam
bloquear quem quer aprender a construir e manter um app Angular comum.
