# Decisões editoriais - Trilha de Docker Compose e Workflows

> Histórico de decisões de escopo, organização e curadoria. Quando a
> trilha ganha ou perde um nó, isso fica registrado aqui.

## v1.0.0 - Criação inicial (2026-08-25)

### Origem

Esta trilha foi **criada** no `aprenda-community` (público, contribuição),
como parte do conjunto **"Containers e Orquestração"** que também inclui
`docker-fundamentos` e `kubernetes`. A escolha por uma trilha separada
de Compose (em vez de ser um nó dentro de Docker Fundamentos) veio
junto com a decisão de tratar o tema com profundidade - o `docker
compose` tem 8+ conceitos próprios (services, env files, networks,
profiles, watch, healthcheck, depends_on com conditions, volumes
nomeados) que merecem tratamento próprio, não uma menção rápida.

A versão inicial é a "v1.0.0" - ponto de partida. Mudanças de escopo
viram bump **minor** (v1.1.0) pra adição de nós, **patch** (v1.0.1)
pra correções, **major** (v2.0.0) pra mudança de ordem ou base
conceitual.

### Decisões de estrutura

- **8 nós**: 1 `topic` de abertura (`introducao-compose`), 6
  `subtopic` encadeados, 1 `milestone` (`projeto-final`).
- **2 diagramas Mermaid** distribuídos nos nós onde a figura
  realmente ajuda: DNS interno entre services (`compose-networks-comunicacao`)
  e topologia da stack completa (`compose-caso-real`). Os outros 6
  nós funcionam bem só com texto + YAML.
- **`projeto-final.mdx` termina com "próximo passo"** sugerindo a
  trilha `kubernetes` - mesmo padrão de "fechamento aberto" das
  trilhas anteriores.
- **Blocos de código com linguagem explícita** (`yaml`, `bash`,
  `text`) - o app pode transformar em playground no build.
- **Recursos no frontmatter** (não no corpo), mínimo 1, máximo 3 por nó.

### Pré-requisito declarado

Esta trilha **assume** que a pessoa já passou por:

- [**Docker Fundamentos**](../../docker-fundamentos) - tudo daquela
  trilha é pré-requisito desta. Em particular: ciclo de vida de
  container, imagens, Dockerfile, volumes, networks.
- **Terminal Linux/macOS básico** e **Git mínimo** - mesmas
  premissas da trilha anterior.

Não exige Kubernetes, cloud, nem qualquer conhecimento prévio de
orquestração.

### Decisões de curadoria

- **Compose v2** (comando `docker compose`, com espaço) assumido
  desde o início. Compose v1 (binário `docker-compose` com hífen) é
  legado desde 2023 - não vale mencionar a não ser em nota.
- **`.env` (com ponto)** como nome padrão, com fallback
  `--env-file`. A regra `.env` no `.gitignore` + `.env.example` no
  Git é o pilar do capítulo de variáveis.
- **Healthcheck explícito** desde o nó de networks - "depende só
  com `condition: service_healthy`". É o divisor entre stack de
  estudo e stack de produção.
- **`restart: unless-stopped`** como política padrão recomendada
  - equilibrado pra dev e prod single-node.
- **Long syntax** (`type: bind/volume/tmpfs`) introduzida
  brevemente, sem aprofundar - 90% dos casos usam short syntax.
- **Diagramas Mermaid** via componente `<Mermaid>` (registrado
  em `@aprenda/web`). Mermaid é a escolha de fato pra diagramas
  em markdown, e o componente do app casa com o padrão existente
  (`<Figure>`, `<YouTube>`).

### Stack padrão assumido

- **Docker Engine** ou **Docker Desktop** (mesmo da trilha de
  Fundamentos).
- **Compose v2** (built-in no Docker Desktop; em Linux via `apt`
  ou pacote oficial).
- **Imagens** usadas nos exemplos: `postgres:16-alpine`,
  `redis:7-alpine`, `adminer`, `mailhog/mailhog` - todas oficiais
  ou mantidas.

### O que ficou de fora (intencionalmente)

- **Kubernetes / Docker Swarm** - tem trilha própria (`kubernetes`).
  Compose não é ferramenta de orquestração em escala; é o
  "Compose pra subir stack local e single-node".
- **`docker stack deploy` (Swarm)** - Swarm está praticamente morto
  no mercado. Compose v2 + `deploy:` keys servem o mesmo propósito
  (e portam direto pra Swarm se alguém precisar).
- **Secrets do Compose (Swarm-style)** - mencionado de passagem
  como alternativa pra chaves grandes, mas sem aprofundar. Pra
  produção, use o secret manager do provedor (Vault, AWS Secrets
  Manager, etc.).
- **`buildx`, multi-arch, BuildKit cache mounts** - pertencem à
  trilha de Docker Fundamentos (nó de imagens eficientes), não a
  Compose.
- **Compose em produção real (ECS, Cloud Run, Azure Container
  Apps)** - menção rápida no nó de profiles, sem aprofundar.
- **CI/CD com Compose** (testar stack em pipeline) - fora do
  escopo; pertence a "CI/CD" ou "DevOps".
- **Helm / Kustomize** - Compose não é Helm. As comparações
  detalhadas ficam pra Kubernetes.

### Aprofundamentos futuros

- **`introducao-compose`** - história do Compose, relação com
  Kubernetes, casos de uso (CI local, preview environments).
- **`compose-primeiro-yaml`** - `--compatibility` mode, multiple
  compose files (`-f`).
- **`compose-variaveis-ambiente`** - secrets via Docker secrets,
  config templates, Vault integration.
- **`compose-volumes-persistencia`** - NFS, S3, drivers de
  volume de terceiros.
- **`compose-networks-comunicacao`** - redes overlay, IPv6, mTLS
  entre services.
- **`compose-desenvolvimento`** - Tilt, Skaffold, alternatives
  com hot reload melhor.
- **`compose-caso-real`** - stacks de exemplo: app + fila (BullMQ,
  Celery), app + observabilidade (Prometheus + Grafana via
  profile `monitoring`).
- **`projeto-final`** - esqueleto de stack com healthcheck,
  migrations automáticas, seed data.

Mudanças de escopo aqui viram bump **minor** (v1.1.0) se adicionarem
nós, **patch** (v1.0.1) se forem correções, **major** (v2.0.0) se
mudar a ordem ou a base conceitual.

---

Aberto a discussão: abra issue ou comente em
[Issues](https://github.com/lucianodiisouza/aprenda-community/issues).
