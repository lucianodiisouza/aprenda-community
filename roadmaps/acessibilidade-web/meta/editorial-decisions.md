# Decisões editoriais - Trilha de Acessibilidade Web

> Histórico de decisões de escopo, organização e curadoria. Quando a
> trilha ganha ou perde um nó, isso fica registrado aqui.

## v1.3.0 - Ferramentas de teste e cognição (2026-08-28)

### Decisão

A trilha ganhou dois subtópicos para cobrir lacunas importantes que ficaram
implícitas na versão anterior: **ferramentas de teste de acessibilidade** e
**linguagem clara/carga cognitiva**.

`ferramentas-de-teste` entra antes da auditoria final para diferenciar usos de
WAVE, Lighthouse, axe DevTools, Accessibility Insights, axe-core, Pa11y CI e
leitores de tela. O nó reforça que software automatizado ajuda a encontrar
problemas repetíveis, mas não substitui tarefa real nem julgamento humano.

`linguagem-clara-e-cognicao` entra após erros e validação porque amplia o tema de
compreensão: mensagens acionáveis, consistência, menor exigência de memória,
progresso visível e fluxos previsíveis.

### O que mudou

- A estrutura passou de **18 nós** para **20 nós**: **1 topic + 19 subtopics**.
- O nó final de testes ficou mais focado em roteiro de auditoria e relatório.
- A descrição da trilha foi atualizada para citar linguagem clara, ferramentas de
  teste e auditoria.

## v1.2.0 - Exemplos práticos e aprendizagem visual (2026-08-27)

### Decisão

Os 18 nós foram ampliados para explicar não apenas **o que** torna uma
interface acessível, mas também **como identificar, implementar e testar** cada
conceito em situações reais. Os exemplos agora partem de tarefas reconhecíveis,
como criar uma conta, concluir uma compra, abrir um diálogo ou acompanhar uma
aula em vídeo.

Os recursos visuais foram usados de acordo com a natureza do conteúdo:
diagramas Mermaid esclarecem fluxos, relações e decisões; checkpoints permitem
editar e validar HTML/CSS diretamente; roteiros manuais mostram como reproduzir
o teste no navegador, pelo teclado ou com leitor de tela.

### O que mudou

- **18 capítulos revisados**, com contexto, implementação e roteiro de teste.
- **12 diagramas Mermaid** para representar árvores, sequências, decisões e
  ciclos de interação.
- **6 Visual Checkpoints** sobre semântica, links e botões, foco, formulários,
  contraste e auditoria final.
- Exemplos completos de código com estados, mensagens de erro e comportamento
  esperado, acompanhados da explicação do impacto para a pessoa usuária.
- Exercícios práticos que podem ser repetidos no navegador sem ferramentas
  especializadas, além de orientações introdutórias para leitores de tela.
- **18 quizzes formativos** preservados como fechamento e revisão de cada nó.

## v1.1.0 - Quizzes formativos e recursos reaproveitados (2026-08-27)

### Decisão

A trilha passou a usar quizzes formativos ao final de todos os nós, no mesmo
formato já usado em trilhas como **Git**, **SQL**, **Estruturas de Dados** e
**Prompt Engineering**: 1 pergunta, 3 opções e explicações nos distratores.

Também foram adicionados dois diagramas Mermaid para reforçar modelos mentais:
o ciclo POUR e o roteiro de testes. A intenção é deixar a jornada mais ativa
sem transformar cada nó em uma avaliação formal.

### O que mudou

- **18 quizzes** distribuídos pela jornada, sempre conectados ao conceito do nó.
- **2 diagramas Mermaid** para visualizar princípios e processo de revisão.
- **Recursos já curados em outras trilhas** reaproveitados quando encaixavam no
  tema: MDN Web Accessibility, referência de elementos HTML, formulários,
  tabelas, vídeo e teste com leitor de tela.

## v1.0.0 - Lançamento (2026-08-26)

### Decisão

Trilha de **Acessibilidade Web** criada para ensinar acessibilidade como parte normal do desenvolvimento web, e não como uma correção feita no fim do projeto.

A entrada é iniciante e pressupõe apenas **HTML e CSS básicos**. A referência normativa é a **WCAG 2.2**, mas o objetivo não é formar auditor: é criar um modelo mental que ajude a evitar barreiras enquanto a interface é construída.

### Estrutura

**18 nós** em ordem linear: **1 topic + 17 subtopics**.

1. **`introducao-acessibilidade`** - barreiras, diferentes contextos de uso e tecnologias assistivas
2. **`wcag-e-pour`** - WCAG, princípios POUR e níveis A/AA/AAA
3. **`html-semantico`** - semântica, elementos nativos e árvore de acessibilidade
4. **`estrutura-headings-landmarks`** - headings, landmarks e skip link
5. **`imagens-e-alt`** - imagens informativas, decorativas e funcionais
6. **`tabelas-acessiveis`** - caption, th, scope e tabela de dados
7. **`links-e-botoes`** - navegar, executar ação e nome acessível
8. **`teclado-e-ordem-de-foco`** - Tab, ordem do DOM, tabindex e keyboard trap
9. **`foco-visivel`** - indicador de foco, :focus-visible e foco encoberto
10. **`formularios-acessiveis`** - label, fieldset/legend, instruções e autocomplete
11. **`erros-e-validacao`** - mensagens específicas e associação com o campo
12. **`cor-e-contraste`** - contraste, uso de cor e estados visuais
13. **`zoom-reflow-e-movimento`** - zoom, reflow e prefers-reduced-motion
14. **`aria-fundamentos`** - HTML nativo primeiro, role e estados/propriedades
15. **`conteudo-dinamico`** - aria-live, polite/assertive e role=status
16. **`dialogos-acessiveis`** - dialog, foco e retorno ao gatilho
17. **`multimidia-acessivel`** - legendas, transcrição e audiodescrição
18. **`testes-e-auditoria`** - teclado, zoom, leitor de tela e automação

### Princípios editoriais aplicados

- **HTML nativo antes de ARIA.** ARIA aparece apenas depois de semântica, teclado, foco e formulários.
- **Exemplos curtos e copiáveis**, com fechamento que aponta o próximo nó.
- **Recursos no frontmatter**, entre 1 e 3, priorizando PT-BR quando existe material estável e usando W3C/MDN como fontes canônicas.
- **Nós enxutos.** A versão foi revisada para evitar explicações longas demais e manter cada arquivo perto do limite sugerido pelo Style Guide.

### Relação com outras trilhas

- **`html`** fornece a base de marcação usada nos exemplos.
- **`css-fundamentos`** e **`css-layout`** ajudam nos exemplos de foco, contraste e reflow.
- **`css-animacoes`** aprofunda `prefers-reduced-motion`; aqui o tema entra apenas pelo impacto em acessibilidade.
- **`frontend`** é um próximo passo natural para aplicar os conceitos em componentes dinâmicos.

### O que ficou de fora

- **Leis e conformidade jurídica específica** (LBI, eMAG, ADA, Section 508).
- **Auditoria formal completa da WCAG** e preparação para certificações.
- **ARIA avançado** (`grid`, `tree`, `combobox`, roving tabindex complexo).
- **Acessibilidade de apps mobile nativos, PDFs e documentos Office.**
- **Treinamento aprofundado em um leitor de tela específico.**
- **Checklist de todos os critérios WCAG.** A trilha prioriza entendimento e prática.

### Como o conteúdo foi construído

A ordem é intencional: primeiro entender **barreiras e princípios**, depois construir uma base boa com **HTML e interação nativos**, e só então usar **ARIA** nos casos em que a semântica nativa não basta. O fechamento transforma tudo em um fluxo de teste que pode entrar no dia a dia de desenvolvimento.
