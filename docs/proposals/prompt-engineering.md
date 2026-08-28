# Proposta: Trilha de Prompt Engineering

> **Status:** decisões consolidadas em 2026-08-25, aguardando abertura de issue.
> **Autor:** Luciano (com a Mavis 👋)
> **Data:** 2026-08-25
>
> Este documento é a base da [issue de trilha nova](../../.github/ISSUE_TEMPLATE/trilha-nova.md)
> que será aberta no repositório. Depois do ✅, vira `roadmaps/prompt-engineering/`.

---

## Decisões consolidadas (2026-08-25)

| Decisão | Escolha | Implicação direta |
| --- | --- | --- |
| **Escopo** | Só a trilha, **sem bootcamp agora** | Bootcamp "AI Engineer" vira **issue futura** — só faz sentido depois dessa trilha existir. |
| **Profundidade** | **Rico e denso**, no padrão da trilha de Git | Cada nó mira **80–120 linhas** de MDX: vários exemplos, antes/depois, edge cases. Mais demorado de escrever, mais valor entregue. |
| **Recursos** | **PT-BR primeiro**, EN só quando não tem equivalente (papers clássicos, docs oficiais) | Style guide à risca. EN sempre com `lang: en` no frontmatter e selo na UI. |
| **Projeto final** | **Agnóstico de stack**, foco em prompt design | Quem programa entrega código; quem não programa entrega um sistema de prompts documentado + exemplos + mini-avaliação. Trilha continua acessível a não-devs. |
| **Trilha irmã "Prompt pra código" (Cursor/Copilot/Claude Code)** | **Fora desta proposta**, fica como issue separada se a demanda vier | Não infla esta trilha; é subdomínio distinto. |

---

## TL;DR (1 parágrafo)

Propor uma **trilha única "Prompt Engineering"** organizada em **3 fases lineares
(Básico, Intermediário, Avançado)** com **24 nós**, do "nunca usei IA" até
"construo produtos com LLM". A trilha é **verdadeiramente do zero** (não exige
saber programar) e termina com um **projeto final agnóstico de stack** focado em
prompt design. Usa Mermaid, Quiz e (com moderação) Playgrounds JS onde fizer
sentido. **O Bootcamp "AI Engineer" fica como issue futura** — só faz sentido
depois dessa trilha existir como pré-requisito.

---

## 1. Por que essa trilha agora

Três sinais:

1. **Toda semana chega gente nova no Aprenda perguntando por onde começar com IA.**
   Hoje a resposta é "google e assiste um vídeo de 3 horas" — não dá.
2. **A galera que já usa IA erra padrão.** Prompt vaga, sem iteração, sem
   few-shot, sem entender o que o modelo faz por baixo. São maus hábitos que
   viram teto profissional em 2026.
3. **Nenhuma trilha do Aprenda cobre isso ainda.** É literalmente a skill mais
   transversal e mais pedida do momento.

A trilha não substitui docs de providers (Anthropic, OpenAI, Google) — essas
mudam toda semana. Ensina o **modelo mental**, que dura.

## 2. Decisão de escopo: por que 1 trilha só, e não 3 trilhas

Considerei três formatos:

| Formato                                     | Prós                              | Contras                                                                  |
| ------------------------------------------- | --------------------------------- | ------------------------------------------------------------------------ |
| **A. 1 trilha gigante (~40 nós)**           | Jornada única, sem "emendar"      | Mista demais, navegação vira novela, começou do zero não vê o final     |
| **B. 3 trilhas separadas (Fund/Téc/Avanç)** | Cada uma com começo claro         | 3 entradas, 3 inícios, 3 ordenações; o iniciante nem sabe qual abrir     |
| **C. 1 trilha modular de 24 nós** ✅        | Coesa, com fases visíveis, cabe no padrão do projeto (Git = 23) | Quem quiser ir além precisa de uma **continuação clara** (issue futura) |

**Escolha: C.** O Aprenda já tem o precedente do Git (23 nós) e da
Complexidade de Algoritmos (13 nós): trilhas com fases que crescem em
complexidade mas **não bifurcam o caminho**.

**E o Bootcamp "AI Engineer"?** Sai desta proposta e vira **issue futura**,
aberta **depois** que a trilha de Prompt Engineering estiver no ar. Justificativa:
o Bootcamp depende dessa trilha como pré-requisito, e fazer os dois ao mesmo
tempo dilui review e foco. Quem terminar a trilha e quiser o próximo nível já
terá destino claro.

## 3. Pré-requisitos

Nenhum. A trilha é **verdadeiramente do zero** — explica o que é um LLM no
primeiro nó. Quem nunca abriu o ChatGPT consegue seguir; quem programa há 10
anos também sai ganhando nos nós avançados.

> Nota: o **Bootcamp AI Engineer** é outra história — exige
> [Programação do Zero](../../roadmaps/programacao-do-zero) e
> [Backend](../../roadmaps/backend) como pré-requisitos. É o "próximo nível" pra
> quem quer construir produto.

## 4. Estrutura proposta (a trilha)

- **Slug:** `prompt-engineering`
- **Dificuldade:** `iniciante` (a entrada é do zero, a trilha **cresce** pra avançado)
- **Nós:** 24 (4 topics demarcando fases, 19 subtopics, 1 milestone)
- **Duração estimada:** 4–6 semanas em ritmo calmo

A trilha é **linear** (uma coluna de `children`) com 3 marcos visuais que
marcam a transição de fase. Cada fase abre com um topic curto de
"onde você está agora" e fecha com um nó de recapitulação.

### Fase 1 — Básico (8 nós): "como falar com a máquina sem ficar gritando com ela"

| #  | ID do nó                | Tipo      | Título                                                     | O que cobre                                                                                                | Interatividade |
| -- | ----------------------- | --------- | ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | -------------- |
| 1  | `o-que-eh-ia-generativa` | topic     | O que é IA generativa (e o que não é)                      | LLMs, diffusion, multimodal. O foco: entender que é **estatística treinada em texto**, não "inteligência". | Quiz           |
| 2  | `como-um-modelo-pensa`   | subtopic  | Como um modelo "pensa": tokens, contexto e temperatura     | Tokens, janela de contexto, sampling, temperatura. Mental model antes da prática.                          | Mermaid + Quiz |
| 3  | `seu-primeiro-prompt`    | subtopic  | Seu primeiro prompt: a anatomia de um prompt bem-feito     | Persona + tarefa + contexto + restrições + formato. Um checklist reutilizável.                            | Mermaid + Quiz |
| 4  | `clareza-e-instrucoes`  | subtopic  | Clareza mata ambiguidade: como ser específico               | Re-escrita de prompts ruins → bons. O nó favorito de quem já usa IA.                                       | Quiz           |
| 5  | `papel-e-persona`        | subtopic  | "Aja como…": papel, persona e tom                          | Quando usar persona, quando é placebo, como definir voz.                                                   | Quiz           |
| 6  | `formatos-de-saida`      | subtopic  | Formatando a saída: JSON, markdown, tabelas, listas        | Forçar formato, evitar "mais ou menos", validar com Pydantic/Zod mental.                                    | Mermaid + Quiz |
| 7  | `iterar-para-melhorar`   | subtopic  | Iterar é tudo: como refinar um prompt sem reescrever do 0  | Loop: prompt → resposta → crítica → ajuste. Mentalidade experimental.                                       | Mermaid + Quiz |
| 8  | `limitacoes-comuns`      | subtopic  | Limitações comuns: alucinação, knowledge cutoff, contexto   | O que o modelo **não** faz. Como contornar cada limitação. Honestidade sobre as ferramentas.                | Quiz           |

> **Marco da Fase 1** (visual, não é nó): "Você fala com a IA. A IA responde de
> forma previsível. Sabe onde ela vai te trair."

### Fase 2 — Intermediário (9 nós): "técnicas que destravam 10× o resultado"

| #  | ID do nó                | Tipo      | Título                                                     | O que cobre                                                                                                | Interatividade |
| -- | ----------------------- | --------- | ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | -------------- |
| 9  | `checkpoint-fase-1`     | topic     | Checkpoint da Fase 1: o que você já internalizou            | 3-4 perguntas de reflexão, sem gabarito — pra pessoa checar se tá na hora de avançar.                     | Quiz           |
| 10 | `few-shot`              | subtopic  | Few-shot: exemplos como superpoder                          | Zero-shot vs one-shot vs few-shot. Quando exemplos viram muleta.                                           | Quiz           |
| 11 | `chain-of-thought`      | subtopic  | Chain-of-thought: "pense passo a passo"                    | A técnica mais importante do intermediário. Quando ajuda, quando atrapalha.                                 | Mermaid + Quiz |
| 12 | `decomposicao-tarefas`  | subtopic  | Decompondo tarefas: sub-prompts e pipelines mentais         | "Traduza o documento E resuma E gere perguntas": quebrar ou encadear?                                      | Mermaid + Quiz |
| 13 | `react-e-tools`         | subtopic  | ReAct e tool use: o modelo que age no mundo                 | Loop Thought → Action → Observation. Quando vale usar ferramenta, quando é exagero.                        | Mermaid + Quiz |
| 14 | `rag-conceito`          | subtopic  | RAG: injetando contexto externo no prompt                   | Por que RAG existe, o que ele resolve (e o que não resolve). Diferença pra fine-tuning.                    | Mermaid + Quiz |
| 15 | `function-calling`      | subtopic  | Function calling e structured output                        | Saída determinística que vira código. Tools, JSON Schema, validação.                                       | Mermaid + Quiz |
| 16 | `system-vs-user-prompt` | subtopic  | System prompt vs user prompt: onde vai cada coisa          | Anatomia completa de uma chamada. Persistência, override, versionamento.                                   | Mermaid + Quiz |
| 17 | `prompts-reutilizaveis` | subtopic  | Prompts como código: templates, versionamento, biblioteca   | Quando virar template. Versionar prompts em arquivo. Nomes semânticos.                                     | Quiz           |

> **Marco da Fase 2** (visual): "Você orquestra o modelo com técnica, não com
> esperança. Sabe qual técnica aplicar pra qual problema."

### Fase 3 — Avançado (6 nós): "quem constrói produto com IA"

| #  | ID do nó                | Tipo      | Título                                                     | O que cobre                                                                                                | Interatividade |
| -- | ----------------------- | --------- | ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | -------------- |
| 18 | `avaliacao-de-prompts`  | topic     | Avaliação: como saber se um prompt é melhor que outro       | Métricas, A/B, datasets dourados,LLM-as-judge. A skill que separa hobby de profissão.                       | Mermaid + Quiz |
| 19 | `automacao-e-frameworks`| subtopic  | Automatizando prompts: LangChain, DSPy, pipelines            | Quando usar framework, quando é overkill. Templates programáticos.                                        | Mermaid        |
| 20 | `agentes-multi`         | subtopic  | Agentes: single-agent vs multi-agent                          | Orquestração, papéis, memória, falhas. Quando um agente basta, quando precisa de vários.                  | Mermaid + Quiz |
| 21 | `multimodal`            | subtopic  | Multimodal: imagem, áudio, vídeo como input e output        | Visão, OCR, geração de imagem, TTS/STT. Promptar fora do texto.                                            | Quiz           |
| 22 | `seguranca-e-injecao`   | subtopic  | Segurança: prompt injection, jailbreaks e defesas          | Vetores de ataque, padrões de defesa, threat modeling mínimo.                                               | Mermaid + Quiz |
| 23 | `custo-e-performance`   | subtopic  | Custo, latência e caching: o que ninguém te conta           | Tokens como moeda, latência como SLA, cache de prompts, batching.                                           | Mermaid + Quiz |
| 24 | `projeto-final`         | milestone | Projeto final: monte seu assistente ou agente               | Brief + critérios. Sem código obrigatório (a trilha é agnóstica de stack), mas a entrega tem que ser real. | —              |

> **Marco da Fase 3** (visual): "Você entende o sistema inteiro. Sabe avaliar,
> defender, otimizar e construir. Está pronto pro Bootcamp AI Engineer."

### Resumo de interatividade (meta de cobertura)

| Recurso        | Quantidade aproximada | Onde brilha                                                                                       |
| -------------- | --------------------- | ------------------------------------------------------------------------------------------------- |
| `<Quiz>`       | ~18 nós (75% da trilha) | Auto-checagem formativa. Especialmente útil em nós curtos e decisórios.                          |
| `<Mermaid>`    | ~10 nós (40%)         | Anatomia de prompt, fluxo de tokens, RAG, ReAct, function calling, multi-agent, pipelines.       |
| `<JsPlayground>` | 1-2 nós (opcional)   | Onde mostrar "essa regex/JSON Schema **funciona**" em coisa pequena. **Não é o foco da trilha.** |
| `<Figure>`/imagens | mínimo (≤3)       | Só se um diagrama for mais claro que Mermaid.                                                     |
| Vídeos (resources) | 1-2 por nó (curados) | PT-BR prioritário; EN só se for fonte canônica.                                                  |

> **Decisão deliberada:** a trilha **não vai ter** `<JsPlayground>` em quase
> nenhum nó, porque Prompt Engineering é sobre **interagir com um LLM**, não
> sobre escrever código. Playground só faria sentido pra validar regex/JSON
> Schema no nó de `formatos-de-saida` e em `function-calling`. Quem quer
> **codar** com LLMs vai pro Bootcamp.

## 5. Os 3 "momentos uau" que vão diferenciar a trilha

Trilha boa não é só conteúdo denso — é **reframes que mudam como a pessoa
pensa**. Três nós vão carregar isso:

1. **`clareza-e-instrucoes`** — Antes/depois lado a lado de prompts reais.
   A pessoa vê: "espera, é **isso** que eu tava fazendo de errado?" É o nó
   favorito de quem já usa IA há anos.
2. **`iterar-para-melhorar`** — Não é "melhore seu prompt", é "trate prompt
   como código: rode, avalie, ajuste, repita". Muda a mentalidade inteira.
3. **`avaliacao-de-prompts`** — Provavelmente o nó mais importante dos
   avançados, porque é o divisor entre "uso IA" e "construo com IA".
   Vou puxar exemplos reais de prompt A vs prompt B, com critério claro.

## 6. Recursos — curadoria inicial (a aprofundar)

| Camada          | Onde olhar primeiro                                                                                            |
| --------------- | -------------------------------------------------------------------------------------------------------------- |
| **Docs oficiais PT/EN** | Anthropic Prompt Engineering Guide, OpenAI Cookbook, Google Gemini prompting guide                    |
| **PT-BR**       | Canais no YouTube com séries de prompting; artigos do TabNews / dev.to em PT                                  |
| **Acadêmico**   | Papers clássicos: Chain-of-Thought, ReAct, RAG (Lewis et al.), Tree of Thoughts                                |
| **Comunidade**  | PromptHero, Anthropic Discord, r/PromptEngineering                                                            |
| **Curado > 3 por nó** | 1 doc oficial + 1 recurso PT-BR + 1 paper clássico, no máximo                                       |

## 7. O que **NÃO** entra (fora de escopo explícito)

Pra evitar que a trilha vire uma bola de neve:

- ❌ **Comparativo entre modelos/providers** (Claude vs GPT vs Gemini). Muda toda semana; vai pra `meta/`.
- ❌ **Preços e cotas específicas** de cada provider. Idem.
- ❌ **Frameworks específicos** (LangChain, LlamaIndex) com tutorial hands-on.
  Mencionados conceitualmente no nó `automacao-e-frameworks`, mas o tutorial
  aprofundado é Bootcamp.
- ❌ **Fine-tuning, RAG com embeddings na prática.** Citados conceitualmente em
  `rag-conceito`. Implementação é Bootcamp.
- ❌ **Regulamentação (EU AI Act, LGPD, etc.)** — relevante mas vira trilha própria
  ou nó em trilha de carreira/ética.
- ❌ **Engenharia de prompt pra código (Cursor, Copilot, Claude Code).** É uma
  sub-trilha à parte; fica como issue separada se a demanda vier.

## 8. Bootcamp "AI Engineer" — issue futura (não escopo desta proposta)

> Esta seção é só pra registrar a **direção natural** da trilha, **não** pra
> ser construída agora. Depois que a trilha de Prompt Engineering estiver
> publicada e validada pela comunidade, abre-se uma issue de bootcamp com este
> esboço.

- **Slug:** `ai-engineer`
- **Dificuldade:** `intermediario`
- **Outcome:** "Ao terminar, você monta uma API com LLM, avalia prompts em
  pipeline, defende de prompt injection e faz deploy de um assistente ou agente
  simples."
- **Pré-requisitos:** Programação do Zero + Backend + **Prompt Engineering**
  (a trilha que esta proposta cria).

**Esboço de módulos:**

1. Setup de API com LLM (provider, auth, streaming, custos)
2. Embeddings e RAG end-to-end (vetor store, retrieval, chunking)
3. Avaliação automatizada (pytest de prompts, golden sets, CI de qualidade)
4. Segurança em produção (rate limit, filtros, red-teaming)
5. Agentes em produção (LangGraph/DSPy, observabilidade, retries)
6. Deploy e monitoramento (latência, custo por request, drift)
7. **Projeto final:** app real com LLM (sugestão: "assistente de FAQ da empresa
   com RAG + avaliação + deploy" ou "agente que automatiza uma tarefa do seu dia
   a dia").

---

## 9. Sequência de publicação sugerida

Pra não travar o review com PR de 24 arquivos:

1. **PR 1 (esta proposta)** — issue/discussão, alinhamento de escopo. ✅
2. **PR 2** — `roadmap.json` + 4 primeiros nós da Fase 1 (Básico inicial).
   Espera review/merge.
3. **PR 3** — 4 nós restantes da Fase 1 + `meta/editorial-decisions.md`.
4. **PR 4** — 9 nós da Fase 2.
5. **PR 5** — 6 nós da Fase 3 + `projeto-final.mdx` (na pasta `projects/`).
6. **Issue futura (não-PR)** — `bootcamps/ai-engineer/bootcamp.json`, depois
   que essa trilha estiver no ar e validada.

## 10. Issue pronta pra colar no GitHub

> Copie o bloco abaixo direto na
> [issue de trilha nova](../../.github/ISSUE_TEMPLATE/trilha-nova.md).
> O texto já preenche os campos que o template pede (público-alvo, pré-requisitos,
> estrutura proposta, recursos conhecidos, por que não cabe em trilha existente,
> intenção de autoria).

```markdown
## 1. A trilha em uma frase

Trilha de **Prompt Engineering** do zero absoluto (o que é um LLM) até a
construção de produtos com IA: 24 nós em 3 fases lineares (Básico, Intermediário,
Avançado), agnóstica de stack, com Mermaid, Quiz e projeto final de prompt
design.

## 2. Público-alvo

- Quem **nunca usou IA** e quer começar do jeito certo (não no susto).
- Quem **já usa IA no dia a dia** mas está travado em prompts vagos e
  resultados medianos — a parte "intermediário/avançado" da trilha é pra eles.
- Quem quer **construir produto com LLM** (assistente, agente, RAG) e precisa
  do modelo mental antes do framework.

A trilha **não exige saber programar** — fica acessível pra não-devs. Quem
programa tira mais proveito dos nós avançados e do projeto final, mas não é
pré-requisito.

## 3. Pré-requisitos

Nenhum. A trilha explica o que é um LLM no primeiro nó.

> Nota: existe uma **issue futura** pra um Bootcamp "AI Engineer" que puxa
> essa trilha + Programação do Zero + Backend como pré-requisitos pra quem
> quiser **codar** com LLM. Não faz parte desta proposta.

## 4. Estrutura proposta (24 nós)

**Fase 1 — Básico (8 nós):** "como falar com a máquina sem ficar gritando com ela"

1. `o-que-eh-ia-generativa` — O que é IA generativa (e o que não é).
2. `como-um-modelo-pensa` — Como um modelo "pensa": tokens, contexto, temperatura.
3. `seu-primeiro-prompt` — Seu primeiro prompt: a anatomia de um prompt bem-feito.
4. `clareza-e-instrucoes` — Clareza mata ambiguidade: como ser específico.
5. `papel-e-persona` — "Aja como…": papel, persona e tom.
6. `formatos-de-saida` — Formatando a saída: JSON, markdown, tabelas, listas.
7. `iterar-para-melhorar` — Iterar é tudo: como refinar um prompt.
8. `limitacoes-comuns` — Limitações comuns: alucinação, knowledge cutoff, contexto.

**Fase 2 — Intermediário (9 nós):** "técnicas que destravam 10× o resultado"

9. `checkpoint-fase-1` — Checkpoint da Fase 1 (reflexão, sem gabarito).
10. `few-shot` — Few-shot: exemplos como superpoder.
11. `chain-of-thought` — Chain-of-thought: "pense passo a passo".
12. `decomposicao-tarefas` — Decompondo tarefas: sub-prompts e pipelines.
13. `react-e-tools` — ReAct e tool use: o modelo que age no mundo.
14. `rag-conceito` — RAG: injetando contexto externo no prompt.
15. `function-calling` — Function calling e structured output.
16. `system-vs-user-prompt` — System prompt vs user prompt.
17. `prompts-reutilizaveis` — Prompts como código: templates, versionamento, biblioteca.

**Fase 3 — Avançado (6 nós + projeto final):** "quem constrói produto com IA"

18. `avaliacao-de-prompts` — Avaliação: como saber se um prompt é melhor que outro.
19. `automacao-e-frameworks` — Automatizando prompts: LangChain, DSPy, pipelines.
20. `agentes-multi` — Agentes: single-agent vs multi-agent.
21. `multimodal` — Multimodal: imagem, áudio, vídeo como input e output.
22. `seguranca-e-injecao` — Segurança: prompt injection, jailbreaks e defesas.
23. `custo-e-performance` — Custo, latência e caching.
24. `projeto-final` — **Milestone:** monte seu assistente ou agente (agnóstico de stack).

> Proposta completa em [`docs/proposals/prompt-engineering.md`](./docs/proposals/prompt-engineering.md)
> (inclui decisões de escopo, planos de Mermaid/Quiz por nó, fora-de-escopo
> explícito e sequência de PRs).

## 5. Recursos que você já conhece

- **Docs oficiais (PT-BR quando existir, EN com `lang: en`):** Anthropic
  Prompt Engineering Guide, OpenAI Cookbook, Google Gemini prompting guide.
- **PT-BR:** canais no YouTube com séries de prompting; artigos do TabNews /
  dev.to / Medium em PT.
- **Acadêmico (EN, insubstituível):** Chain-of-Thought, ReAct, RAG (Lewis et
  al.), Tree of Thoughts — papers clássicos, vão entrar com `lang: en`.
- **Comunidade:** PromptHero, Anthropic Discord, r/PromptEngineering.
- Política: **PT-BR primeiro; EN só quando não tem equivalente.** Máximo 3
  recursos por nó.

## 6. Por que essa trilha não cabe numa trilha existente?

- Não existe nenhuma trilha sobre IA no Aprenda hoje.
- O tema é **transversal e independente de stack** (não é frontend, não é
  backend, não é devops) — merece trilha própria.
- Bootcamps existentes (ex.: Desenvolvedor Backend) **pressupõem programação**;
  esta trilha é verdadeiramente do zero.

## 7. Você pretende escrever ela?

- [x] Sim, quero ser o autor principal (Luciano), com a Mavis como co-autora
      no apoio de pesquisa, curadoria de recursos, exemplos práticos e revisão.

## Checklist

- [x] Confirmei que **não existe** uma trilha parecida.
- [x] Li o [Style Guide](../../docs/style-guide.md).
```

---

## 11. O que **ainda** precisa de decisão antes de começar a escrever

Mesmo com o escopo travado, sobram 3 pontos de autoria que precisam de você:

1. **Créditos no `roadmap.json`** — `creators: [{ name: "Luciano dii Souza", github: "lucianodiisouza" }]` + como creditar a Mavis (campo de IA-assistida ainda não existe no schema — propor como `co_author` ou abrir um follow-up?).
2. **Quem escreve o quê** — você escreve as seções conceituais e aprova; a Mavis puxa os exemplos práticos, montagens de Mermaid/Quiz e curadoria de recursos? Ou você prefere escrever tudo sozinho e usar a Mavis só pra revisão?
3. **Janela de PRs** — você prefere que eu já comece a rabiscar o **PR 2** (Fase 1 inicial, ~4 nós) **em uma próxima sessão**, ou quer abrir a issue primeiro e esperar feedback da comunidade antes de qualquer `.mdx` ser escrito?

> **Próximo passo imediato:** abrir a issue com o bloco da seção 10 e linkar este
> documento. Depois do ✅ da comunidade, **PR 2** = `roadmap.json` + 4 primeiros
> nós da Fase 1.
