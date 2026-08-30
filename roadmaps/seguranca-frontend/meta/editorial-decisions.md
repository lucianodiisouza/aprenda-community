# Decisoes editoriais - Trilha Seguranca Frontend

Trilha proposta na issue #49 (sub-issue da meta #41 - Bootcamp Frontend 2026).

## 1. Escopo e posicionamento

**Titulo:** "Seguranca Frontend: XSS, CSRF, CSP, CORS, storage seguro e supply chain"

**Slug:** `seguranca-frontend` (mesmo slug da issue. Em PT-BR sem
til/acentos, mesmo padrao de `css-animacoes`, `acessibilidade-web`.
Alternativas consideradas: `frontend-security` (EN, inconsistente com
a convencao), `web-security` (cobre backend tbm, perde foco)).

**Foco:** Seguranca **especifica do browser e do bundle**. Complementa
a `ciberseguranca-para-devs` (issue #21) que cobre fundamentos de
InfoSec (criptografia, autenticacao, redes). Aqui o foco e' **as
vulnerabilidades e mitigacoes que acontecem no client**: XSS, CSRF,
CSP, CORS, storage seguro, supply chain de dependencias.

**O que NAO entra (decisao explicita):**
- Criptografia, hash, JWT details. Fica em `backend` ou `ciberseguranca-para-devs`.
- SQL injection, command injection. Backend.
- Auth flows completos (OAuth, OIDC). Cobre em `backend` ou
  `ciberseguranca-para-devs`.
- Network security (TLS, certificate pinning). Backend.
- Pentest methodology. Cobre em trilhas mais avancadas de seguranca.
- Bug bounty / responsible disclosure. Nao e' foco do dev junior.

## 2. Pre-requisitos

Definidos na issue #49: `frontend` (`forms-http`), nocoes de HTTP.
Adiciono:

- `javascript-web` (pra entender CORS, SameSite, preflight).
- `backend` basico (pra entender o "outro lado" das chamadas HTTP).
- `pnpm` basico (lockfile, audit).

Nao exige `ciberseguranca-para-devs` (a trilha cobre o que precisa
de fundamentos). Mas se o aluno fez, varios conceitos ficam mais faceis.

## 3. Estrutura final (7 nos / 6 quizzes / 5 checkpoints / 2 mermaid)

A issue #49 propoe 7 nos. Mantenho os 7, na ordem sugerida:

| # | node                            | tipo      | quiz | checkpoint | mermaid |
| - | ------------------------------- | --------- | ---- | ---------- | ------- |
| 1 | `modelo-de-ameacas-frontend`    | topic     | sim  | nao        | nao     |
| 2 | `xss`                           | subtopic  | sim  | sim        | sim     |
| 3 | `csrf-e-cors`                   | subtopic  | sim  | sim        | nao     |
| 4 | `csp-e-headers`                 | subtopic  | sim  | sim        | nao     |
| 5 | `storage-seguro`               | subtopic  | sim  | sim        | sim     |
| 6 | `supply-chain`                  | subtopic  | sim  | nao        | nao     |
| 7 | `projeto-final`                 | milestone | nao  | sim        | nao     |

**5 checkpoints (mesma densidade das outras trilhas):**

- `xss` - dado um codigo com input do usuario, classificar se e'
  vulnera vel a XSS e propor a correcao.
- `csrf-e-cors` - dado um endpoint + credenciais, configurar
  `fetch` corretamente com `credentials` e `mode`.
- `csp-e-headers` - gerar uma string CSP valida pra um cenario
  (SPA com backend proprio, CDN de imagens, scripts inline
  especificos).
- `storage-seguro` - dado um conjunto de dados (token, preferencia,
  cache), escolher o storage certo e justificar.
- `projeto-final` - smoke test da auditoria de uma SPA.

**Pulei `modelo-de-ameacas-frontend` e `supply-chain` no
checkpoint**:
- `modelo-de-ameacas` e' conceitual (como pensar sobre ameacas).
  Nao da pra testar de forma significativa em worker isolado.
- `supply-chain` e' mais sobre ferramentas (`npm audit`,
  Renovate/Dependabot config). O setup de CI nao cabe no
  playground.

**2 diagramas Mermaid** (decidido por necessidade editorial, nao
por meta fixa - heuristica 1-2/trilha):

- `xss`: decision tree "input do usuario precisa ser renderizado em
  X - qual e' o sink seguro?" (innerHTML, eval, location, src). Cobre
  90% dos cenarios reais de XSS em React/Vue/vanilla.
- `storage-seguro`: decision tree "qual storage usar pra esse
  dado?" (sensitive vs ephemeral vs persistent vs cross-tab). Cobre
  o pattern de escolha que se repete em todo app.

Nao fiz 3+ porque os outros nos (csrf, csp, supply-chain) tem
tabelas e exemplos de codigo que sao mais uteis que diagramas
adicionais.

## 4. Conhecimento estabilizado vs volatil

**Estavel (a trilha ensina como "regra"):**
- Os 3 tipos de XSS (stored, reflected, DOM-based) - definicao
  estavel ha 20 anos.
- SameSite cookies default=Lax (Chrome 80+, 2020).
- CSP como defesa em profundidade.
- localStorage vs cookies httpOnly vs sessionStorage - tradeoffs
  nao mudam.
- `npm audit` + `package-lock.json` como baseline de supply chain.

**Volatil (a trilha menciona como "estado em 2026"):**
- Suporte de Trusted Types (Chrome 83+, Firefox em progresso).
- Padroes de CORS em edge runnings.
- Politicas de Dependabot/Renovate (mudam por org).
- Novas vulnerabilidades (Log4Shell, etc. - 2021+ mostra que
  supply chain attacks estao em alta).

## 5. Stack e tools

- **Backend de exemplo:** Express/Node (mesmo ecossistema do
  frontend moderno, facilita o dev pensar nos 2 lados).
- **CORS:** npm `cors` middleware.
- **CSP:** Helmet (Express) gera CSP default + customizacoes.
- **Storage:** `localStorage`, `sessionStorage`, `IndexedDB` via
  `idb`, cookies via `document.cookie`.
- **Sanitizacao:** DOMPurify (XSS no client).
- **Supply chain:** `npm audit`, `pnpm audit`, Snyk (open source
  free tier), Socket.dev.

Nao cobre WAF (Web Application Firewall) - e' deploy/proxy,
fica em `edge-deploy`.

## 6. Decisoes de tom

- **PT-BR**, voz "voce", direto, sem em-dash, sem "permite"/"voce
  pode" passivo.
- **Tom pratico**, nao academico: "XSS = voce confia em input que
  nao devia", nao "XSS e' uma vulnerabilidade classificada como
  CWE-79".
- **Codigo real**, com cenarios de ataque. Cada exemplo mostra
  o codigo vulnera vel E o codigo corrigido.
- **Tabelas de comparacao** pra coisas como headers de seguranca,
  tipos de storage, status de SameSite.

## 7. Lacunas conhecidas (nao cobertas nesta trilha)

- **Seguranca de backend** (SQLi, auth, JWT details). Fica em
  `backend` ou `ciberseguranca-para-devs` (#21).
- **Pentest methodology / bug bounty**. Trilha dedicada de
  seguranca ofensiva (alem do escopo do bootcamp frontend).
- **CSP3 strict-dynamic, Trusted Types avancado**. Cobre o basico,
  aprofundamento fica em trilhas de seguranca avancada.
- **Supply chain em CI** (Sigstore, SLSA, in-toto). Cobre o
  basico, aprofundamento fica em trilhas de DevSecOps.
- **OAuth/OIDC/SAML flows completos**. Em `backend` ou
  `ciberseguranca-para-devs`.

## 8. Referencia cruzada

- Trilha `ciberseguranca-para-devs` (#21) cobre fundamentos de
  InfoSec (criptografia, redes, threat modeling). Esta trilha
  assume o minimo - mas o aluno que fez a #21 tera mais contexto.
- Trilha `backend` cobre HTTP, cookies, sessions do lado do
  servidor. Esta trilha foca no client.
- Trilha `observabilidade-frontend` (#54) cobre error tracking
  que detecta tentativas de XSS/CSRF em prod.
- Trilha `edge-deploy` (#56) cobre WAF, rate limiting, protecao
  de borda que complementa CSP/CSRF.
- Trilha `real-time` (#52) menciona WebSocket security (origin
  check, auth) - referencia cruzada.
