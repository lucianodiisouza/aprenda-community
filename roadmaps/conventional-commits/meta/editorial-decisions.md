# Decisões editoriais - Conventional Commits

Registro de decisões de escopo, ordem e curadoria da trilha. Convenções:
**minor** = adição de nó, **patch** = correção, **major** = mudança de ordem/base.

## v1.0.0 - criação (2026-08-31)

### Origem
Trilha proposta para quem já usa Git em time e quer trocar "histórico ilegível"
por histórico que conta uma história. Nasce complementar à trilha `git` (que foca
no mecanismo) - aqui o foco é o **contrato da mensagem de commit** e o que ele
desbloqueia (SemVer automática, changelog, filtros de `git log`).

### Escopo
- **No** : o formato completo (type, scope, descrição, corpo, rodapé), os tipos
  principais e de apoio, regras e exceções, o vínculo com **SemVer**, changelog
  automático e um panorama de **tooling** (commitlint, commitizen, husky, gitmoji).
- **Fora**: não ensina Git do zero (pré-requisito é a trilha `git`); não é
  tutorial de nenhuma ferramenta em profundidade (cada uma merece sua trilha);
  não cobre Conventional Commits em monorepos com múltiplos packages além da
  menção a `package.json` de NPM no node de tooling.

### Posicionamento
Nível **intermediario**. Exige saber o que são commit, branch e push, e o que é
trabalhar em time (review, PR). Fica naturalmente antes de trilhas que dependem
de um fluxo de entrega maduro (ex: `docker-fundamentos` + CI/CD no futuro).

### Estrutura do grafo
Linear, padrão do projeto: 1 `topic` + 8 `subtopic` + 1 `milestone`
(projeto-final). Cada nó prepara o próximo - conceito → formato → tipos →
detalhes → regras → impacto (SemVer/changelog) → ferramentas → prática real.

### Decisões de curadoria
- **Recursos**: a fonte canônica é a **especificação oficial** do Conventional
  Commits (conventionalcommits.org). Sempre que possível, recurso em **PT-BR**
  primeiro; inglês só quando é a fonte canônica.
- **Sem recursos pagos**: tudo aqui é documentação aberta e ferramentas free.

### Aprofundamentos futuros (não planejados por ora)
- Trilha dedicada a **versioning e release** (release-please, semantic-release,
  changesets) se o interesse pelo tooling crescer.
- Habilitar `intro_video` na trilha quando houver um vídeo de apresentação bom.

---

## v1.1.0 (placeholder para futuras decisões)