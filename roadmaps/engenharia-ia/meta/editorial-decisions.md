# Decisoes editoriais - Trilha Engenharia assistida por IA

Trilha proposta na issue #55 (sub-issue da meta #41 - Bootcamp Frontend 2026).

## 1. Escopo e posicionamento

**Titulo:** "Engenharia assistida por IA: Claude Code, Cursor, Copilot, audit, testes e refactor"

**Slug:** `engenharia-ia` (mesmo slug da issue. Curto, identifica o dominio).

**Foco:** Workflow de **gerar e revisar codigo com IA** (Claude Code, Cursor, GitHub Copilot, Cody, Continue) - **quando usar**, **como auditar**, **quando NAO usar**, e como integrar no ciclo de desenvolvimento sem perder qualidade. **Diferente** da trilha `prompt-engineering` (que cobre prompting em geral): aqui o foco e' **codigo gerado por IA**, nao prompts genericos.

**O que NAO entra (decisao explicita):**
- Prompt engineering geral (RAG, agents, etc). Cobre em `prompt-engineering`.
- AI APIs (OpenAI, Anthropic SDK). Cobre em `prompt-engineering` ou `backend`.
- ML/treino de modelos. Fora do escopo de frontend dev.
- AI em prod (chatbots, recomendacao). Cobre em trilhas de AI product.

## 2. Pre-requisitos

Definidos na issue #55: `frontend` (qualquer nivel), `git` basico. Adiciono:

- `frontend` (HTML, CSS, JS, qualquer framework).
- `git` (branch, PR, diff).
- Noções de **code review** (ler diff, identificar problemas).

## 3. Estrutura final (8 nos / 7 quizzes / 5 checkpoints / 2 mermaid)

A issue #55 propoe **8 nos** (mais que o padrao 7). Mantenho os 8:

| # | node                          | tipo      | quiz | checkpoint | mermaid |
| - | ----------------------------- | --------- | ---- | ---------- | ------- |
| 1 | `ai-coding-tools-overview`   | topic     | sim  | nao        | nao     |
| 2 | `dividir-tarefas-para-ia`     | subtopic  | sim  | nao        | sim     |
| 3 | `ler-codigo-gerado`           | subtopic  | sim  | sim        | nao     |
| 4 | `ia-no-test`                  | subtopic  | sim  | sim        | nao     |
| 5 | `ia-no-refactor`              | subtopic  | sim  | sim        | nao     |
| 6 | `quando-nao-usar-ia`          | subtopic  | sim  | nao        | sim     |
| 7 | `ai-aware-code-review`        | subtopic  | sim  | sim        | nao     |
| 8 | `projeto-final`               | milestone | nao  | sim        | nao     |

**5 checkpoints (mesma densidade):**

- `ler-codigo-gerado` - auditar diff gerado por IA e identificar red flags.
- `ia-no-test` - gerar testes com IA, validar que nao sao teatro.
- `ia-no-refactor` - refactor assistido, validar tipos e edge cases.
- `ai-aware-code-review` - revisar PR com muito codigo gerado.
- `projeto-final` - feature completa com IA no loop.

**Pulei `ai-coding-tools-overview`, `dividir-tarefas-para-ia` e `quando-nao-usar-ia` no checkpoint:**
- `ai-coding-tools-overview` e' comparativo de ferramentas (intro).
- `dividir-tarefas-para-ia` e' conceitual (decidir quando prompt vs plano).
- `quando-nao-usar-ia` e' sobre limites/politica (conceitual).

**2 diagramas Mermaid** (decidido por necessidade):

- `dividir-tarefas-para-ia`: flow "tarefa cabe num prompt? ou precisa plano multi-step?". Cobre 90% das duvidas.
- `quando-nao-usar-ia`: decision tree "use IA ou nao?" (lockfile, secrets, legal, etc). Cobre os limites.

Nao fiz 3+ porque os outros nos sao praticos (codigo, exemplos) - o ganho de mais diagramas e' marginal.

## 4. Conhecimento estabilizado vs volatil

**Estavel (a trilha ensina como "regra"):**
- Patterns de code review com IA - praticas bem definidas.
- Quando IA falha (alucinacao de APIs, seguranca) - erros comuns documentados.
- Git workflow com IA (PR de codigo gerado, prompts reproduziveis) - pratico.

**Volatil (a trilha menciona como "estado em 2026"):**
- Ferramentas (Claude Code, Cursor, Copilot) - **evoluindo rapido**, novos recursos a cada mes.
- LLM capabilities (Claude 4, GPT-5) - **mudam o jogo** a cada release.
- Planos de assinatura, precos, limites.
- AI-specific features (MCP, agent mode, multi-file edit).

**A trilha foca em PATTERNS, nao em
ferramentas especificas.** As ferramentas
mudam, os patterns (auditar diff, validar
tipos, revisar PR) **permanecem**.

## 5. Stack e tools

- **AI coding tools:** Claude Code (CLI), Cursor (IDE), GitHub Copilot, Cody, Continue.
- **Testes:** Vitest, Jest, Playwright (escolha conforme stack).
- **Tipos:** TypeScript pra validacao automatica.
- **Linter/format:** ESLint, Prettier, Biome.
- **Git:** PR workflow padrao.

**Foco em patterns, nao em ferramentas.**
A trilha da examples com Claude Code e
Cursor (mais usados em 2026), mas os
**patterns se aplicam** a qualquer AI
coding tool.

## 6. Decisoes de tom

- **PT-BR**, voz "voce", direto, sem em-dash, sem "permite"/"voce pode" passivo.
- **Tom pratico**, com exemplos de **codigo real gerado** (ou mau gerado) e **como auditar**.
- **Comparacoes** (Claude Code vs Cursor vs Copilot) com tabela.
- **Ceticismo saudavel**: IA e' **ferramenta**, nao **substituto** de pensamento critico.

## 7. Lacunas conhecidas (nao cobertas nesta trilha)

- **AI em codigo legacy** (refactor de codigo grande). Cobre brevemente em `ia-no-refactor`.
- **Fine-tuning de modelo pra codigo proprio**. Fora do escopo (ML).
- **AI pair programming ao vivo** (Cursor composer, Claude Code agent mode). Cobre **patterns**, nao **features especificas**.
- **Seguranca de codigo gerado por IA** (supply chain attack via prompt). Cobre em `seguranca-frontend` + mencionado aqui.

## 8. Referencia cruzada

- Trilha `prompt-engineering` cobre prompting geral (RAG, agents, Claude API).
- Trilha `seguranca-frontend` cobre seguranca de codigo (incluindo AI-generated).
- Trilha `testing-frontend` cobre strategies de teste (aqui foca em como IA gera testes).
- Trilha `frontend` cobre o codigo que IA vai gerar/auditar.
