# Decisoes editoriais - Trilha Observabilidade Frontend

Trilha proposta na issue #54 (sub-issue da meta #41 - Bootcamp Frontend 2026).

## 1. Escopo e posicionamento

**Titulo:** "Observabilidade Frontend: Sentry, RUM, OpenTelemetry, feature flags e PII"

**Slug:** `observabilidade-frontend` (mesmo slug da issue. Descritivo, identifica o dominio - observabilidade no client).

**Foco:** Saber **o que esta' acontecendo em producao** sem esperar o usuario reclamar. Cobre os **3 sinais classicos** (logs, metrics, traces) + **RUM** (Real User Monitoring), error tracking com **Sentry**, **OpenTelemetry Web** pra traces distribuidos, **feature flags** pra rollout progressivo, e **PII/LGPD** pra nao violar privacidade. Cobre o **lado client** - o back-end de observabilidade e' mencionado mas nao detalhado.

**O que NAO entra (decisao explicita):**
- Back-end observability (Prometheus, Grafana, Datadog infra). Cobre em `backend`.
- APM completo (server-side). Cobre em `backend`.
- Logging server-side. Cobre em `backend`.
- Acessibilidade de dashboards. Cobre em `acessibilidade-web`.

## 2. Pre-requisitos

Definidos na issue #54: `frontend`, nocoes de HTTP. Adiciono:

- `frontend` (browser, DOM, fetch).
- `javascript-web` (Promises, async/await, EventTarget).
- `performance-web` (Cobre em paralelo - ajuda entender RUM).

## 3. Estrutura final (7 nos / 6 quizzes / 5 checkpoints / 2 mermaid)

A issue #54 propoe 7 nos. Mantenho os 7, na ordem sugerida:

| # | node                       | tipo      | quiz | checkpoint | mermaid |
| - | -------------------------- | --------- | ---- | ---------- | ------- |
| 1 | `o-que-e-observabilidade`  | topic     | sim  | nao        | sim     |
| 2 | `error-tracking`           | subtopic  | sim  | sim        | nao     |
| 3 | `real-user-monitoring`     | subtopic  | sim  | sim        | nao     |
| 4 | `open-telemetry-web`       | subtopic  | sim  | sim        | nao     |
| 5 | `feature-flags`            | subtopic  | sim  | sim        | nao     |
| 6 | `pii-e-privacidade`        | subtopic  | sim  | nao        | sim     |
| 7 | `projeto-final`            | milestone | nao  | sim        | nao     |

**5 checkpoints (mesma densidade):**

- `error-tracking` - integrar Sentry com source maps e release health.
- `real-user-monitoring` - configurar Web Vitals + custom metrics.
- `open-telemetry-web` - implementar trace distribuido client → server.
- `feature-flags` - implementar rollout progressivo de uma feature.
- `projeto-final` - smoke test de app observavel.

**Pulei `o-que-e-observabilidade` e `pii-e-privacidade` no checkpoint:**
- `o-que-e-observabilidade` e' conceitual (logs vs metrics vs traces vs RUM).
- `pii-e-privacidade` e' mais sobre politica/legal + patterns de scrubbing. Melhor validado em revisao de codigo, nao em exercicio.

**2 diagramas Mermaid** (decidido por necessidade):

- `o-que-e-observabilidade`: decision tree "qual sinal usar pra cada pergunta" (logs = eventos discretos, metrics = agregados, traces = jornada, RUM = experiencia do user). Cobre 90% das duvidas iniciais.
- `pii-e-privacidade`: pipeline de PII scrubbing (collect → scrub → consent → send). Cobre o fluxo de dados com privacidade.

Nao fiz 3+ porque error-tracking e' codigo, RUM e' tabela de metricas, OT e' diagramas do padrao, e feature-flags e' fluxograma ja' coberto em texto.

## 4. Conhecimento estabilizado vs volatil

**Estavel (a trilha ensina como "regra"):**
- Sentry SDK API - estavel, base do error tracking.
- Web Vitals (LCP, INP, CLS) - estavel desde 2020, core do RUM.
- OpenTelemetry API (trace, span, context) - estavel, base de OT.
- LGPD/GDPR principios - legais, nao mudam.

**Volatil (a trilha menciona como "estado em 2026"):**
- Sentry features novas (session replay, profiling) - evoluindo.
- OpenTelemetry Web status (ainda em rollout).
- Feature flags SaaS landscape (LaunchDarkly, Flagsmith, Cloudflare Flagship).
- LGPD enforcement actions (ANPD publicacoes) - politica local BR.

## 5. Stack e tools

- **Error tracking:** Sentry (mais usado), Rollbar, Bugsnag. Foco em Sentry.
- **RUM:** Sentry Performance, Datadog RUM, New Relic Browser, web-vitals (lib nativa).
- **OpenTelemetry:** @opentelemetry/sdk-web, @opentelemetry/exporter-trace-otlp-http.
- **Feature flags:** LaunchDarkly (mais usado enterprise), Flagsmith (open source), Cloudflare Flagship (novo, edge-native), Unleash, ConfigCat.
- **Privacy:** LGPD (BR), GDPR (EU), CCPA (CA). Menciona, foca em principios gerais.
- **CI:** GitHub Actions exemplo.

## 6. Decisoes de tom

- **PT-BR**, voz "voce", direto, sem em-dash, sem "permite"/"voce pode" passivo.
- **Tom pratico**, com exemplos de codigo real (Sentry SDK, OTel SDK, web-vitals).
- **Comparacoes de ferramentas** (Sentry vs Rollbar, LaunchDarkly vs Flagsmith) com tabela.
- **Foco no client** - back-end de observabilidade mencionado brevemente.

## 7. Lacunas conhecidas (nao cobertas nesta trilha)

- **Back-end observability** (Prometheus, Grafana, Datadog infra). Cobre em `backend`.
- **APM completo** (server-side tracing). Cobre em `backend`.
- **Logging estruturado server-side** (Pino, Winston, slog). Cobre em `backend`.
- **Alerting/SLO/SLI formal** (SRE practices). Cobre em `engenharia-sre`.
- **Session replay** profundo (privacy, scrubbing, GDPR). Mencionado em `pii-e-privacidade`.

## 8. Referencia cruzada

- Trilha `performance-web` cobre Web Vitals (pre-requisito pra RUM).
- Trilha `frontend` cobre DOM e EventTarget.
- Trilha `backend` cobre o lado server de tracing e logs.
- Trilha `engenharia-sre` cobre SLO/SLI/error budgets formais.
