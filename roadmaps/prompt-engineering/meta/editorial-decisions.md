# Decisões editoriais - Trilha de Prompt Engineering

> Histórico de decisões de escopo, organização e curadoria. Quando a trilha
> ganha ou perde um nó, isso fica registrado aqui.

## v1.0.0 - Lançamento (2026-08-25)

### Por que uma trilha de Prompt Engineering

Três sinais:

1. Toda semana chega gente nova no Aprenda perguntando por onde começar com IA.
   Hoje a resposta é "google e assiste um vídeo de 3 horas" - não dá.
2. A galera que já usa IA erra padrão. Prompt vaga, sem iteração, sem few-shot,
   sem entender o que o modelo faz por baixo. Maus hábitos que viram teto
   profissional em 2026.
3. Nenhuma trilha do Aprenda cobre isso. É a skill mais transversal e mais
   pedida do momento.

A trilha não substitui docs de providers (Anthropic, OpenAI, Google) - essas
mudam toda semana. Ensina o **modelo mental**, que dura.

### Estrutura geral

- **24 nós** (4 topics demarcando fases, 19 subtopics, 1 milestone), em três
  blocos de dificuldade crescente que compartilham uma linha linear única de
  `children`.
- **`difficulty: iniciante`** porque o ponto de entrada não pressupõe IA
  nenhuma (`o-que-eh-ia-generativa` parte do zero). A trilha **evolui** para
  avançado ao longo do caminho - o selo marca a porta de entrada, não o teto.
- **Três fases explícitas**, sinalizadas pelos nodes `topic` que marcam as
  transições:
  - **Básico** (`o-que-eh-ia-generativa` → `limitacoes-comuns`): o que é um LLM,
    tokens, anatomia de prompt, clareza, persona, formatos, iteração,
    limitações.
  - **Intermediário** (`checkpoint-fase-1` → `prompts-reutilizaveis`):
    few-shot, chain-of-thought, decomposição, ReAct/tools, RAG,
    function calling, system vs user prompt, prompts como código.
  - **Avançado** (`avaliacao-de-prompts` → `custo-e-performance`): avaliação,
    automação/frameworks, agentes, multimodal, segurança, custo/performance.
- **Milestone** (`projeto-final`): montar um assistente ou agente
  agnóstico de stack, focado em prompt design.

### Escopo e não-objetivos

- **Agnóstico de stack.** A trilha é sobre prompts, não sobre código. Quem
  programa pode entregar o projeto final com código; quem não programa
  entrega um sistema de prompts documentado + exemplos + mini-avaliação.
- **Sem `JsPlayground` no corpo dos nós.** Prompt engineering é sobre
  interagir com um LLM, não sobre escrever código. Exceção possível só no
  nó de `function-calling` se for útil validar JSON Schema.
- **Sem comparativo entre modelos** (Claude vs GPT vs Gemini). Mudam toda
  semana; vai para `meta/` se virar tema.
- **Sem tutorial hands-on de frameworks** (LangChain, LlamaIndex). Citados
  conceitualmente em `automacao-e-frameworks`; tutorial aprofundado vira
  issue futura.
- **Sem fine-tuning, RAG-com-embeddings-na-prática, nem regulamentação.**
  Citados conceitualmente onde relevante; implementação é escopo de bootcamp
  ou trilha própria.
- **Bootcamp "AI Engineer"** é **issue futura** - só faz sentido depois
  desta trilha existir como pré-requisito. Documentado em
  `docs/proposals/prompt-engineering.md`.

### Autoria

- **Autor principal:** Luciano dii Souza.
- **Co-autoria técnica / curadoria:** a Mavis (assistente de IA) atuou como
  parceira de pesquisa, curadoria de recursos, desenho dos diagramas Mermaid
  e dos quizzes. Todo o conteúdo foi revisado e é de responsabilidade do
  autor principal.

### Recursos

- **Política:** PT-BR primeiro; EN só quando não tem equivalente (papers
  clássicos, docs oficiais). EN sempre com `lang: en` no frontmatter e selo
  na UI.
- **Cobertura:** 1-3 recursos por nó. Fontes principais: Anthropic Prompt
  Engineering Guide, OpenAI Cookbook / Prompt Engineering Guide, Google
  Gemini prompting guide, papers clássicos (CoT, ReAct, RAG, ToT), vídeos
  e artigos selecionados em PT-BR.
- **Validação periódica:** docs de providers mudam; revisar a cada release
  maior do Aprenda. Papers clássicos são estáveis.

### Distribuição PT/EN (honestidade sobre o domínio)

Prompt Engineering é um campo **muito novo** e a **esmagadora maioria** da
literatura canônica está em inglês: docs oficiais de Anthropic, OpenAI e
Google, papers clássicos, frameworks (DSPy, LangChain), guias de
avaliação. A PT-BR cobertura de qualidade é ainda escassa - o que
existe é tradução parcial de docs oficiais e artigos de blog.

**Resultado atual:** dos 64 recursos da trilha, **5 (~8%)** são PT-BR e
**59 (~92%)** são EN. Isso **segue à risca** a política "PT-BR primeiro,
EN só quando não tem equivalente" - é a realidade do domínio, não
uma falha de curadoria. À medida que conteúdo PT-BR de qualidade
surgir (traduções oficiais, artigos técnicos consistentes), a
distribuição deve melhorar em PRs futuros.

### Interatividade

- **`<Quiz>`** em ~18 nós: auto-checagem formativa. Especialmente útil em
  nós conceituais curtos e em pontos de decisão (ex: "quando usar persona?").
- **`<Mermaid>`** em ~13 nós: onde a figura realmente agrega - anatomia de
  prompt, fluxo de tokens, loops (CoT, ReAct), pipelines (RAG, function
  calling, avaliação, segurança, multi-agent).
- **`<JsPlayground>`** ausente por decisão (ver escopo).
- **Projeto final (milestone)**: sem `<Quiz>`/`<Mermaid>` no corpo - é
  brief de execução, com checklist e critérios de "pronto".
