# Decisões editoriais - Trilha React do Zero

> Histórico de decisões de escopo, organização e curadoria. Quando a
> trilha ganha ou perde um nó, isso fica registrado aqui.

## v1.1.0 - Mais prática, visual e projetos (2026-09-03)

### Decisão

A trilha foi ampliada para ficar menos linear e mais prática. A base conceitual
continua a mesma, mas ganhou mais pontos de visualização, mini missões e um nó
específico sobre **acessibilidade em componentes React**.

O novo nó `acessibilidade-em-componentes` entra depois de formulários controlados:
nesse ponto, a pessoa já conhece JSX, eventos e estado suficiente para entender
`aria-pressed`, `role="status"` e a importância de usar elementos nativos.

### O que mudou

- A estrutura passou de **23 nós** para **24 nós**.
- Foram adicionados diagramas Mermaid em `introducao-react`, `props`,
  `use-state`, `use-effect`, `elevando-estado`, `acessibilidade-em-componentes`,
  `use-reducer` e `arquitetura-de-componentes`.
- Alguns nós ganharam **mini missões** com exemplos mais lúdicos: carta
  colecionável, placar de combo, painel de missões e raio-x de componente grande.
- Os três projetos existentes foram revisados para ter requisitos mais claros,
  estados visuais, acessibilidade e critérios de arquitetura.
- A trilha passou de **3 projetos** para **5 projetos**, com os novos
  `jogo-da-memoria-react` e `kanban-de-missoes-react`.

## v1.0.0 - Lançamento (2026-08-30)

### Decisão

A trilha **React do Zero** foi criada como aprofundamento específico de React para
quem já possui HTML, CSS e JavaScript básicos. A trilha `frontend` já apresenta
React em alguns nós; esta nova trilha desacopla o assunto para ensinar o modelo
mental e a prática com mais profundidade, sem transformar uma trilha generalista
em um curso inteiro de framework.

A entrada continua `iniciante`, mas não parte de JavaScript absoluto. Funções,
arrays, objetos, `map`, módulos e `async/await` são pré-requisitos recomendados.

### Estrutura

**23 nós** em ordem linear: **1 topic + 22 subtopics**.

1. `introducao-react` - modelo declarativo, componentes e árvore de UI
2. `ambiente-vite` - Vite, `main.jsx`, `createRoot` e `StrictMode`
3. `jsx` - regras de JSX, expressões e Fragment
4. `componentes` - componentes de função, import/export e composição
5. `props` - fluxo pai → filho, props somente leitura e callbacks
6. `composicao-children` - `children` e composição flexível
7. `renderizacao-condicional` - `if`, ternário e `&&`
8. `listas-e-keys` - `map`, `filter` e identidade com `key`
9. `eventos` - handlers, callbacks e `preventDefault`
10. `use-state` - estado, snapshot e regras básicas de Hooks
11. `atualizando-estado` - updater function, objetos e arrays imutáveis
12. `formularios-controlados` - `value`, `onChange` e `onSubmit`
13. `elevando-estado` - fonte de verdade e estado compartilhado
14. `estado-derivado` - estado mínimo e cálculo durante renderização
15. `use-effect` - sincronização externa, dependências e cleanup
16. `fetch-e-estados-assincronos` - loading, erro, sucesso e abort
17. `use-ref` - referência mutável e acesso ao DOM
18. `custom-hooks` - extração de lógica reutilizável
19. `context` - Context para dados transversais
20. `use-reducer` - ações explícitas e transições de estado
21. `arquitetura-de-componentes` - fronteiras, colocação de estado e componente Deus
22. `debugging-react` - DevTools, warnings, mutação e StrictMode
23. `proximos-passos` - mapa para rotas, dados remotos, testes e frameworks

### Quizzes formativos

Todos os **23 nós** terminam com um `<Quiz>` de uma pergunta e três alternativas.
Os distratores incluem explicação curta para que o quiz funcione como revisão, e
não como prova. As perguntas cobram o modelo mental do nó, não detalhes de sintaxe
decoráveis.

### Exemplos práticos

Os exemplos foram escritos para serem copiáveis e próximos de tarefas reais:
catálogo, carrinho, busca, formulário, preferências, tema e consumo de API. Cada
nó limita a quantidade de conceitos novos; quando um tema exigia outra mudança de
modelo mental, ele virou nó próprio (`useEffect` separado de fetch, Context
separado de reducer, estado elevado separado de estado derivado).

O Style Guide continua valendo: exemplos aparecem antes da abstração, o texto fala
com "você", a linguagem é PT-BR e cada nó aponta o próximo passo. O tamanho pode
crescer por causa de blocos de código e do Quiz, mas a **densidade conceitual**
permanece em 3-4 ideias novas por nó.

### Três projetos vinculados

Projetos continuam no diretório `projects/`, como documentos independentes. A
relação com a trilha acontece pelo frontmatter `trilhas: [react-do-zero]`.

1. **`catalogo-de-produtos-react`** - depois de `use-state`; componentes,
   props, composição, condicionais, listas, eventos e primeiro estado interativo.
2. **`habit-tracker-react`** - depois de `estado-derivado`; formulários, estado,
   imutabilidade, filtros e estatísticas derivadas.
3. **`pokedex-react`** - depois de `arquitetura-de-componentes`; fetch,
   loading/erro, favoritos, Custom Hooks e organização da aplicação.

Os próprios nós 10, 14 e 21 apontam para o projeto recomendado naquele momento da
jornada. Não foram criados `milestone` duplicados no roadmap porque o projeto já
possui uma entidade própria validada em `projects/`.

### Ferramentas e versão

- A trilha usa **componentes de função e Hooks**.
- O ambiente didático usa **Vite + JavaScript** para reduzir configuração e não
  misturar TypeScript com a primeira aprendizagem de React.
- `Create React App` não faz parte do conteúdo.
- Exemplos evitam depender de recursos experimentais ou específicos de uma única
  versão menor do React.

### Relação com outras trilhas

- `html`, `css-fundamentos` e JavaScript básico fornecem a base de marcação,
  estilos e linguagem.
- `frontend` continua como visão geral do caminho frontend; `react-do-zero` é o
  aprofundamento específico.
- `form-libraries`, `tanstack-query`, `testing-frontend` e `nextjs` são
  aprofundamentos naturais depois da base React.
- `acessibilidade-web` complementa todos os exemplos de componentes e formulários.

### O que ficou de fora

- **Class components e lifecycle methods antigos** - a trilha ensina o modelo
  atual com funções e Hooks.
- **React Router** - merece aprofundamento próprio em navegação SPA.
- **Bibliotecas de formulário** - ficam em `form-libraries`.
- **TanStack Query/SWR** - fetch manual é usado apenas para ensinar estados
  assíncronos; cache de servidor fica em trilha própria.
- **Redux/Zustand/Jotai** - primeiro vem state, reducer e Context nativos.
- **Testes automatizados** - ficam em `testing-frontend`.
- **Next.js e Server Components** - assunto de arquitetura/framework, não React do zero.
- **Otimização prematura com `useMemo`/`useCallback`** - performance entra quando
  existe medição e problema concreto.
- **React Compiler em profundidade** - ferramenta de otimização, não pré-requisito
  para aprender o modelo mental de componentes e estado.

### Curadoria de recursos

Recursos priorizam a documentação oficial do React em PT-BR. A documentação do
Vite e páginas oficiais sem tradução entram como `lang: en`. Cada nó mantém de
1 a 3 recursos, sem listas extensas no corpo.
