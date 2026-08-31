# Decisoes editoriais - Trilha PWA

Trilha proposta na issue #51 (sub-issue da meta #41 - Bootcamp Frontend 2026).

## 1. Escopo e posicionamento

**Titulo:** "PWA: Service Workers, estrategias de cache, IndexedDB, background sync e offline-first"

**Slug:** `pwa` (nome curto, padrao da industria - "Progressive Web App"
e o termo canonico desde 2015. Alternativas consideradas:
`pwa-offline-first` (verboso), `progressive-web-apps` (EN, inconsistente
com a convencao PT-BR do repo)).

**Foco:** Apps que **funcionam sem rede** (ou com rede ruim) e que
**instalam no device** (como apps nativos). Service Workers como
tecnologia central, com cache strategies, IndexedDB, background
sync, e push notifications.

**O que NAO entra (decisao explicita):**
- Performance de app (cobre em `performance-web`).
- Storage de dados pequenos (cobre em `seguranca-frontend`).
- Caching HTTP em geral (cobre em `performance-web`/cdn-e-cache).
- Apps nativos (React Native, Flutter, Swift). Cobre em trilhas
  dedicadas de mobile.
- AMP / Instant Articles. Descontinuados.
- Web Bluetooth, Web USB, Web Share. Cobre em trilhas de capabilities.

## 2. Pre-requisitos

Definidos na issue #51: `frontend` (`javascript-web`),
`performance-web`. Adiciono:

- `javascript-web` (callbacks, promises, async/await, fetch).
- `storage-seguro` (decisao de quando IndexedDB vs localStorage).
- HTTPS em dev (Service Worker exige HTTPS ou localhost). O aluno
  precisa saber configurar.
- No minimo, familiaridade com Vite ou similar (a trilha assume
  Vite como build tool).

Nao exige React (a trilha e' framework-agnostic), mas exemplos
usam React porque e' o caso comum em 2026.

## 3. Estrutura final (7 nos / 6 quizzes / 5 checkpoints / 2 mermaid)

A issue #51 propoe 7 nos. Mantenho os 7, na ordem sugerida:

| # | node                     | tipo      | quiz | checkpoint | mermaid |
| - | ------------------------ | --------- | ---- | ---------- | ------- |
| 1 | `pwa-o-que-e`            | topic     | sim  | nao        | nao     |
| 2 | `service-workers`        | subtopic  | sim  | sim        | sim     |
| 3 | `estrategias-de-cache`   | subtopic  | sim  | sim        | sim     |
| 4 | `indexeddb`              | subtopic  | sim  | sim        | nao     |
| 5 | `background-sync`        | subtopic  | sim  | sim        | nao     |
| 6 | `notificacoes-push`      | subtopic  | sim  | nao        | nao     |
| 7 | `projeto-final`          | milestone | nao  | sim        | nao     |

**5 checkpoints (mesma densidade das outras trilhas):**

- `service-workers` - dado um cenario, registrar
  Service Worker, escutar eventos do ciclo de vida.
- `estrategias-de-cache` - dado um tipo de recurso, escolher
  a estrategia de cache e implementar.
- `indexeddb` - implementar CRUD basico via Dexie (openDB,
  put, get, delete, queries por index).
- `background-sync` - implementar logica de retry com
  `sync` event.
- `projeto-final` - smoke test do PWA (manifest + SW + offline).

**Pulei `pwa-o-que-e` e `notificacoes-push` no checkpoint**:
- `pwa-o-que-e` e' conceitual (manifesto, criterios PWA).
  Nao da pra testar de forma significativa em worker isolado.
- `notificacoes-push` requer infra externa (VAPID keys, push
  server). O setup nao cabe no playground.

**2 diagramas Mermaid** (decidido por necessidade editorial):

- `service-workers`: state machine do ciclo de vida
  (installing -> installed/waiting -> activating -> activated ->
  redundant). Mostra os eventos e estados que o SW passa.
- `estrategias-de-cache`: decision tree "qual estrategia
  escolher pro tipo de recurso" (assets imutaveis, app shell,
  API data, user content). Cobre 90% dos casos reais.

Nao fiz 3+ porque os outros nos (IndexedDB, background-sync,
push) tem exemplos de codigo + tabelas de API que sao mais
uteis que diagramas.

## 4. Conhecimento estabilizado vs volatil

**Estavel (a trilha ensina como "regra"):**
- Service Worker lifecycle (installing, waiting, active,
  redundant) - API estavel desde 2015.
- Manifest schema basico (name, short_name, start_url,
  display, icons) - W3C standard.
- IndexedDB API core (open, put, get, delete, transactions)
  - estavel ha 10+ anos.
- Cache strategies (cache first, network first, SWR) - padroes
  do Workbox.

**Volatil (a trilha menciona como "estado em 2026"):**
- Suporte de Push API (Chrome OK, Firefox OK, Safari
  limitado).
- Background Sync API (Chrome, Safari em implementacao,
  Firefox parcial).
- Workbox v7+ (API mudou entre versoes).
- Periodic Background Sync (ainda limitado em 2026).
- iOS PWAs em 2026 (limites historicos foram reduzidos mas
  ainda existem).

## 5. Stack e tools

- **Build:** Vite com `vite-plugin-pwa` (default moderno).
- **Service Worker:** Workbox (Google) - biblioteca de
  referencia para caching strategies, precaching, etc.
- **IndexedDB:** Dexie.js (wrapper idiomático) - muito mais
  simples que a API nativa.
- **Push:** Web Push Protocol + VAPID. Em 2026, third-party
  push services (OneSignal, Pushpad) sao comuns - a trilha
  menciona mas nao cobre.
- **Manifest:** gerado pelo `vite-plugin-pwa` ou manual.

Nao cobre Capaci (outra lib moderna de PWA) - Workbox e' a
referencia canonica.

## 6. Decisoes de tom

- **PT-BR**, voz "voce", direto, sem em-dash, sem "permite"/
  "voce pode" passivo.
- **Tom pratico**, com exemplos de codigo real.
- **Comparacoes com apps nativos** quando util
  (instalacao no home screen, offline-first).
- **Tabelas de API** pros metodos IndexedDB e eventos SW
  (sao muitos, facilita referencia).

## 7. Lacunas conhecidas (nao cobertas nesta trilha)

- **SSR / Next.js PWA** - Next.js ja tem SW built-in
  (next-pwa). Cobre em `nextjs`.
- **iOS push notifications** - iOS 16.4+ adicionou Web Push,
  mas com limitacoes. Fora do escopo.
- **Background sync com fila no server** - o backend
  (Firestore, Supabase) tem suas proprias solucoes.
  Cobre em `backend`.
- **TWA (Trusted Web Activity)** - empacotar PWA como app
  Android nativo. Cobre em trilhas de mobile.
- **Web capabilities avancadas** (Bluetooth, USB, NFC).
  Cobre em trilhas de capabilities.
- **WebAuthn / Passkeys** - Cobre em `backend` ou
  `seguranca-frontend`.

## 8. Referencia cruzada

- Trilha `performance-web` cobre HTTP cache e CDN
  (server-side). PWA cobre Service Worker cache (client-side).
- Trilha `seguranca-frontend` cobre storage seguro
  (localStorage vs IndexedDB vs cookies). PWA aprofunda
  IndexedDB como banco offline-first.
- Trilha `observabilidade-frontend` cobre RUM/error
  tracking - util pra monitorar PWA em prod (install
  rate, offline usage).
- Trilha `real-time` (issue #52) menciona WebSocket
  em PWA context.
