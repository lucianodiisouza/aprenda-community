# Decisoes editoriais - Trilha Real-time

Trilha proposta na issue #52 (sub-issue da meta #41 - Bootcamp Frontend 2026).

## 1. Escopo e posicionamento

**Titulo:** "Real-time: WebSockets, SSE, Socket.IO, reconexao e presence"

**Slug:** `real-time` (mesmo slug da issue. Curto, identifica o dominio - WebSockets, SSE, real-time em geral).

**Foco:** Comunicacao **bidirecional** ou **server-push** em tempo real. Quando o **server precisa notificar o client** sem o client pedir (chat, notificacoes, dashboards em tempo real) ou quando **client e server trocam dados continuamente** (games, colaboracao).

**O que NAO entra (decisao explicita):**
- Server-side WebSocket (cobre em `backend` - o foco aqui e' o client).
- Polling e long-polling (mencionado como "por que nao usar", mas o foco e' WebSocket/SSE).
- WebRTC (P2P video/audio). Cobre em trilhas de real-time avancadas.
- Real-time databases (Firebase, Supabase realtime) - mencionados como alternativa no final.
- Server-Sent Events no Node (cobre em `backend`).

## 2. Pre-requisitos

Definidos na issue #52: `frontend` (`javascript-web`), nocoes de HTTP. Adiciono:

- `javascript-web` (callbacks, promises, async/await, EventSource - nativo).
- `backend` basico (pra entender o "outro lado" - servidor WebSocket).
- `pnpm` basico (instalar `ws` ou `socket.io`).

Nao exige framework especifico. Exemplos em vanilla JS + Node, com mencoes a React patterns (hooks pra WebSocket).

## 3. Estrutura final (7 nos / 6 quizzes / 5 checkpoints / 2 mermaid)

A issue #52 propoe 7 nos. Mantenho os 7, na ordem sugerida:

| # | node                       | tipo      | quiz | checkpoint | mermaid |
| - | -------------------------- | --------- | ---- | ---------- | ------- |
| 1 | `real-time-no-browser`    | topic     | sim  | nao        | nao     |
| 2 | `websockets-nativo`        | subtopic  | sim  | sim        | sim     |
| 3 | `sse`                      | subtopic  | sim  | sim        | nao     |
| 4 | `socket-io`                | subtopic  | sim  | sim        | sim     |
| 5 | `reconexao-e-estado`       | subtopic  | sim  | sim        | nao     |
| 6 | `presence-e-colaboracao`   | subtopic  | sim  | nao        | nao     |
| 7 | `projeto-final`            | milestone | nao  | sim        | nao     |

**5 checkpoints (mesma densidade):**

- `websockets-nativo` - implementar reconexao e heartbeat com `WebSocket` nativo.
- `sse` - implementar SSE client com reconexao automatica.
- `socket-io` - implementar chat com rooms e broadcast usando Socket.IO.
- `reconexao-e-estado` - implementar logica de retry com exponential backoff
  e fila de mensagens offline.
- `projeto-final` - smoke test de um app real-time completo.

**Pulei `real-time-no-browser` e `presence-e-colaboracao` no checkpoint:**
- `real-time-no-browser` e' conceitual (polling vs long-polling vs SSE vs WebSocket).
- `presence-e-colaboracao` e' avancado (cursors colaborativos, CRDTs). Cobre em
  trilhas mais avancadas.

**2 diagramas Mermaid** (decidido por necessidade):

- `websockets-nativo`: state machine do `readyState` (CONNECTING → OPEN → CLOSING
  → CLOSED) com os eventos. Cobre o ciclo de vida do WebSocket.
- `socket-io`: decision tree "quando usar Socket.IO vs WebSocket nativo"
  (fallback, rooms, ack). Cobre 90% dos casos reais.

Nao fiz 3+ porque presence-e-colaboracao e' avancado, SSE tem exemplos de
codigo suficiente, e reconexao e' melhor descrita em texto + tabela.

## 4. Conhecimento estabilizado vs volatil

**Estavel (a trilha ensina como "regra"):**
- WebSocket API (`new WebSocket()`, readyState, eventos) - estavel desde 2011.
- EventSource / SSE - estavel desde 2010.
- Socket.IO patterns (rooms, namespaces, ack) - API estavel.
- Exponential backoff com jitter - padrao classico.

**Volatil (a trilha menciona como "estado em 2026"):**
- Suporte de WebSocket em diferentes proxies/firewalls (CDN, Cloudflare).
- Server-Sent Events reconexao automatica (todos browsers modernos suportam
  agora, mas Safari tinha bug ate 2023).
- Socket.IO v4+ (API mudou em 2022 - rooms via `socket.to(room).emit()`).
- WebTransport (nova API, ainda em rollout) - mencionada como futuro.

## 5. Stack e tools

- **WebSocket nativo:** `WebSocket` (browser) + `ws` (Node server).
- **SSE:** `EventSource` (browser) + `express` (Node server, simples).
- **Socket.IO:** `socket.io` + `socket.io-client` - full duplex com fallback.
- **State management:** Zustand ou Redux no client (mencionado, nao coberto).
- **Server examples:** Node/Express - simples, didatico. Em prod, qualquer
  linguagem serve.

Nao cobre Firebase Realtime DB / Supabase Realtime / Pusher - sao servicos
gerenciados mencionados como alternativa no node `socket-io`.

## 6. Decisoes de tom

- **PT-BR**, voz "voce", direto, sem em-dash, sem "permite"/"voce pode" passivo.
- **Tom pratico**, com exemplos de codigo real (vanilla JS + Node).
- **Comparacoes de protocolo** (polling vs SSE vs WebSocket) com tabela.
- **Foco no client** - server e' mencionado mas nao detalhado (cobre em
  `backend`).

## 7. Lacunas conhecidas (nao cobertas nesta trilha)

- **Server-side WebSocket** (Node `ws`, Go `gorilla/websocket`, etc).
  Cobre em `backend`.
- **Real-time databases** (Firebase, Supabase, Pusher). Mencionado como
  alternativa no `projeto-final`.
- **WebRTC** (P2P video/audio). Fora do escopo desta trilha.
- **WebTransport** (HTTP/3 + WebSocket). Nova API, rollout parcial em 2026.
- **CRDTs e collaborative editing** (Yjs, Automerge). Cobre em
  `presence-e-colaboracao` com profundidade.

## 8. Referencia cruzada

- Trilha `backend` cobre o lado server de WebSocket (Node `ws`).
- Trilha `performance-web` cobre long-polling vs outras estrategias.
- Trilha `seguranca-frontend` cobre CORS e auth em real-time (WebSocket
  nao usa CORS, mas auth e' similar).
- Trilha `pwa` cobre Service Worker + push (complementar a real-time).
