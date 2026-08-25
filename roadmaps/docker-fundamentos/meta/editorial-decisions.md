# Decisões editoriais - Trilha de Docker Fundamentos

> Histórico de decisões de escopo, organização e curadoria. Quando a
> trilha ganha ou perde um nó, isso fica registrado aqui.

## v1.0.0 - Criação inicial (2026-08-25)

### Origem

Esta trilha foi **criada** no `aprenda-community` (público, contribuição),
como parte do conjunto **"Containers e Orquestração"** que também inclui
`docker-compose-e-workflows` e `kubernetes`. Foi escolhida a estrutura
**em três trilhas** (e não uma única grande) pelos mesmos motivos do
split de CSS em 2026: cada subdomínio tem profundidade suficiente pra
merecer tratamento próprio, e trilhas menores são mais digeríveis.

A versão inicial é a "v1.0.0" - ponto de partida. Mudanças de escopo
viram bump **minor** (v1.1.0) pra adição de nós, **patch** (v1.0.1)
pra correções, **major** (v2.0.0) pra mudança de ordem ou base
conceitual.

### Decisões de estrutura

- **10 nós**: 1 `topic` de abertura (`introducao-containers`), 8
  `subtopic` encadeados, 1 `milestone` (`projeto-final`).
- **`projeto-final.mdx` termina com "próximo passo"** sugerindo a
  trilha `docker-compose-e-workflows` - mesmo padrão de "fechamento
  aberto" das trilhas de Backend/Frontend.
- **Blocos de código com linguagem explícita** (`bash`, `dockerfile`,
  `javascript`, `yaml`) - o app pode transformar em playground no build.
- **Recursos no frontmatter** (não no corpo), mínimo 1, máximo 3 por nó.
- **Três conceitos-chave no fim de cada nó** com **negrito** - força
  a curadoria do que importa.

### Pré-requisito declarado

Esta trilha **assume** que a pessoa já sabe:

- **Terminal Linux/macOS básico** - `cd`, `ls`, `cat`, `grep`, editar
  arquivos, variáveis de ambiente, pipes. Se isso não está firme, vale
  uma trilha de "Terminal" antes (não existe ainda, está no backlog).
- **Git mínimo** - clonar, commitar, branch. Suficiente pra clonar
  exemplos das docs e versionar o Dockerfile.
- **Conceito de "processo" e "sistema de arquivos"** - mesmo que vago.

**Não exige** Docker prévio (essa é a primeira trilha dele) nem
qualquer linguagem de backend específica - os exemplos mostram
Dockerfile pra Node e Python, mas o foco é o Docker, não a linguagem.

### Decisões de curadoria

- **Docker oficial (docs.docker.com)** como fonte primária. A versão
  PT-BR tem cobertura decrescente (algumas páginas só em EN) - por
  isso a maioria dos recursos está com `lang: en`.
- **Linux/macOS como primeiro caso** no nó de instalação. Windows
  aparece mas com ressalva (Docker Desktop / WSL 2).
- **Tag fixa** (`nginx:1.27`, não `nginx:latest`) recomendada desde
  cedo pra criar o hábito. Discute `latest` no nó de imagens.
- **HEALTHCHECK** introduzido no projeto final - aparece cedo porque
  é um divisor entre "coisa de dev" e "coisa de produção".
- **Sem recursos pagos** - toda a trilha é viável com a versão
  gratuita do Docker Desktop (até 250 funcionários / US$ 10M de
  receita, suficiente pra uso pessoal e estudo).

### Stack padrão assumido

- **Docker Engine** (Community Edition) ou **Docker Desktop** (Mac/
  Windows).
- **Imagens base** `node:20-alpine`, `postgres:16`, `nginx:1.27-alpine`,
  `ubuntu:24.04`, `alpine:3.20` - tudo imagens **oficiais** Docker Hub.
- **CLI** `docker` (não `podman`, não `nerdctl`). Docker é a
  mainstream, melhor documentação e mais exemplos.

### O que ficou de fora (intencionalmente)

- **Docker Compose detalhado** - tem trilha própria
  (`docker-compose-e-workflows`). Aqui só mencionamos como "gostinho"
  no nó de networks.
- **Kubernetes / orquestração** - tem trilha própria (`kubernetes`).
- **Swarm, ECS, Nomad, OpenShift** - fora do escopo "fundamentos".
  Swarm morreu praticamente; ECS é AWS-only; Nomad é raro no
  mercado brasileiro. Não vale a confusão agora.
- **Segurança avançada** (rootless Docker, distroless, scanners como
  Trivy/Snyk, content trust) - "Docker Avançado" ou trilha
  "DevOps Seguro", se vier a existir.
- **Registry privado** (Harbor, GitHub Packages, AWS ECR) - mencionado
  brevemente no `imagens-e-registries` mas não aprofundado. Vale uma
  trilha própria se houver demanda.
- **BuildKit, buildx, multi-arch (ARM/x86)** - mencionados de
  passagem; aprofundamento futuro.
- **CI/CD com Docker** (GitHub Actions, GitLab CI) - fora do escopo
  desta trilha; pertencem a "CI/CD" ou "DevOps".
- **Docker em produção na nuvem** (ECS, Cloud Run, AKS) - escopo
  de uma trilha futura, se vier.

### Aprofundamentos futuros

- **`introducao-containers`** - cgroups, namespaces, OCI spec,
  alternativas (Podman, containerd).
- **`imagens-eficientes`** - distroless, chiseled images, BuildKit
  cache mounts, multi-arch.
- **`volumes`** - drivers de volume (NFS, S3, CSI).
- **`networks`** - overlay networks, IPv6, redes customizadas avançadas.
- **`projeto-final`** - exemplos completos: API com banco, app
  multi-container mínimo.

Mudanças de escopo aqui viram bump **minor** (v1.1.0) se adicionarem
nós, **patch** (v1.0.1) se forem correções, **major** (v2.0.0) se
mudar a ordem ou a base conceitual.

---

Aberto a discussão: abra issue ou comente em
[Issues](https://github.com/lucianodiisouza/aprenda-community/issues).
