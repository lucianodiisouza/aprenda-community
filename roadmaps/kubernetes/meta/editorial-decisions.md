# Decisões editoriais - Trilha de Kubernetes

> Histórico de decisões de escopo, organização e curadoria. Quando a
> trilha ganha ou perde um nó, isso fica registrado aqui.

## v1.0.0 - Criação inicial (2026-08-25)

### Origem

Esta trilha foi **criada** no `aprenda-community` (público, contribuição),
como fechamento do conjunto **"Containers e Orquestração"** que
começa em `docker-fundamentos` e `docker-compose-e-workflows`. É a
trilha mais densa das três (avançado) e a que mais se beneficia de
diagramas - 4 figuras distribuídas onde a representação visual é
mais útil que o texto.

A versão inicial é a "v1.0.0" - ponto de partida. Mudanças de escopo
viram bump **minor** (v1.1.0) pra adição de nós, **patch** (v1.0.1)
pra correções, **major** (v2.0.0) pra mudança de ordem ou base
conceitual.

### Decisões de estrutura

- **12 nós**: 1 `topic` de abertura (`introducao-k8s`), 10
  `subtopic` encadeados, 1 `milestone` (`projeto-final`).
- **4 diagramas Mermaid** onde a figura agrega valor real:
  - `introducao-k8s` - arquitetura de cluster (control plane +
    workers, fluxo de comunicação).
  - `pods` - anatomia do Pod (containers, volume compartilhado,
    network namespace).
  - `services` - tipos de Service e como roteiam tráfego.
  - `ingress` - fluxo de request da Internet até o Pod via Ingress.
  - `volumes-pv-pvc` - relação PVC -> PV -> StorageClass (diagrama
    menor, sequencial).
- **`projeto-final.mdx` termina com "próximo passo"** sugerindo
  GitOps, observabilidade, service mesh - o padrão de "fechamento
  aberto" das trilhas anteriores.
- **Blocos de código com linguagem explícita** (`yaml`, `bash`,
  `mermaid`) - o app pode transformar em playground no build.

### Pré-requisito declarado

Esta trilha **assume** que a pessoa já passou por:

- [**Docker Fundamentos**](../../docker-fundamentos) - tudo daquela
  trilha é pré-requisito. Em particular: imagens, containers,
  Dockerfile, networks, volumes.
- [**Docker Compose e Workflows**](../../docker-compose-e-workflows)
  - a abstração de "stack" e "service" do Compose traduz direto
  pro k8s. Sem isso, o salto é grande demais.
- [**Terminal para Devs**](../../terminal-para-devs) - os comandos
  de shell e SSH que esta trilha assume sem reintroduzir. Pré-req
  formal declarado.
- **Git mínimo** - clonar manifests, versionar configs.

**Não exige** experiência com cloud (EKS/GKE/AKS), Docker Swarm,
ou qualquer provedor específico. O cluster local cobre a parte
conceitual; a parte "managed cluster" é mencionada no
`cluster-local` e referenciada no `projeto-final`, mas não é
pré-requisito pra acompanhar.

### Decisões de curadoria

- **`kubectl` mostrado primeiro** depois do cluster - ordem
  conceitual: você precisa de um cluster pra kubectl fazer sentido.
- **Diagramas sempre com `flowchart`** (Mermaid) - mais legível
  que sequence/architecture pra maioria dos casos. Com `subgraph`
  pra agrupar visualmente (control plane, workers, namespaces).
- **Pronúncia PT-BR** - "cóbernétis" / "k8s" no nó de introdução,
  mesmo padrão de cuidar da voz do projeto.
- **Service types** - cobrimos os 4 (ClusterIP, NodePort,
  LoadBalancer, ExternalName) e damos o veredito: ClusterIP pra
  95% dos casos, Ingress expõe o cluster pro mundo. LoadBalancer
  "solto" (sem Ingress) é desencorajado em produção.
- **Helm** introduzido como "gerenciador de pacotes" - útil desde
  o começo, mas a maioria dos charts prontos (Artifact Hub)
  resolve 90% do uso real.
- **Probes e resource limits** vão juntos (`probes-scaling`) -
  são os dois pilares de "app robusta em cluster".
- **Sem recursos pagos** - toda a trilha é viável com minikube ou
  k3d (gratuitos) num laptop.

### Stack padrão assumido

- **kubectl** >= 1.28 (compatível com clusters até 1.31).
- **minikube** OU **k3d** pra cluster local (mencionado no
  `cluster-local`; o usuário escolhe).
- **nginx-ingress controller** como exemplo de Ingress Controller
  - o mais usado e documentado.
- **metrics-server** (addon do minikube) pra HPA funcionar
  localmente.
- **cert-manager** mencionado (não instalado) pra TLS automático
  via Let's Encrypt.

### O que ficou de fora (intencionalmente)

- **Operação do cluster em si** (instalar kubeadm, configurar
  control plane, escolher CNI, etc.) - pertence a "Kubernetes
  para SRE" ou "SRE". Cluster local cobre a parte conceitual;
  a operação real de cluster é tema separado.
- **CRDs e operators** - a fronteira avançada do k8s. Pertence a
  uma trilha própria se houver demanda.
- **Service mesh** (Istio, Linkerd, Consul) - mencionado no
  `projeto-final` como "próximo passo", sem aprofundar. Trilha
  própria se vier.
- **GitOps** (Argo CD, Flux) - mesmo caso, mencionado como
  próximo passo.
- **Multi-cluster** (federation, submariner, cluster API) -
  avançado demais pra essa trilha introdutória.
- **Segurança avançada** (Pod Security Standards, OPA/Kyverno,
  RBAC detalhado, network policies) - mencionado em
  `configmaps-secrets` (encryption at rest), sem aprofundar.
  Trilha de "DevOps Seguro" ou "k8s Avançado".
- **Operators famosos** (Prometheus Operator, Strimzi Kafka
  Operator, etc.) - mencionados no `helm` (Artifact Hub), sem
  aprofundar.
- **Serverless no k8s** (Knative, KEDA) - fora do escopo.
- **Docker Swarm** - Swarm está praticamente morto no mercado.
  Se alguém quiser comparar, vai de `docker stack deploy` e
  Compose v2 (mesma base).

### Aprofundamentos futuros

- **`introducao-k8s`** - história (Borg, Omega), alternativas
  (Nomad, Mesos), Managed Kubernetes comparado.
- **`cluster-local`** - tilt, skaffold, devspace (dev experience).
- **`kubectl-essencial`** - kustomize (alternativa a Helm pra
  config sem templates), jsonpath em `get -o`.
- **`pods`** - sidecar patterns (istio, log shipper), initContainers.
- **`deployments`** - DaemonSet, Job, CronJob, blue/green e
  canary deploys com Istio ou Argo Rollouts.
- **`services`** - Ingress vs Gateway API, network policies, mTLS.
- **`configmaps-secrets`** - Sealed Secrets, External Secrets
  Operator, Vault Agent Injector.
- **`volumes-pv-pvc`** - Ceph, Rook, MinIO (S3-compatible),
  Volume Snapshots.
- **`ingress`** - Gateway API, cert-manager detalhado, rate
  limiting.
- **`probes-scaling`** - PodDisruptionBudget, VerticalPodAutoscaler,
  Karpenter.
- **`helm`** - Helm hooks, chartmuseum, OCI registries, helmfile.
- **`projeto-final`** - exemplo completo com observabilidade
  (Prometheus + Grafana), GitOps (Argo CD), service mesh (Istio).

Mudanças de escopo aqui viram bump **minor** (v1.1.0) se adicionarem
nós, **patch** (v1.0.1) se forem correções, **major** (v2.0.0) se
mudar a ordem ou a base conceitual.

---

Aberto a discussão: abra issue ou comente em
[Issues](https://github.com/lucianodiisouza/aprenda-community/issues).
