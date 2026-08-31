# Decisões editoriais - Trilha de Cibersegurança para Desenvolvedores

> Histórico de decisões de escopo, organização e curadoria da trilha.

## v1.0.0 - Proposta inicial

### Por que essa trilha

Segurança da Informação faz parte do trabalho de qualquer pessoa envolvida na construção ou operação de sistemas.

Ainda assim, muitos desenvolvedores implementam autenticação, HTTPS, tokens ou controles de acesso sem compreender completamente os riscos que essas medidas procuram reduzir.

Essa trilha existe para criar uma base de **Segurança da Informação voltada para desenvolvedores**, apresentando os principais conceitos antes de avançar para vulnerabilidades, OWASP Top 10 e fundamentos de segurança defensiva.

O objetivo não é formar um especialista em segurança, mas ajudar o dev a compreender:

- o que precisa ser protegido;
- quais ameaças podem existir;
- quais vulnerabilidades podem surgir;
- quais controles ajudam a reduzir riscos.

### Público-alvo e pré-requisitos

A trilha foi pensada para desenvolvedores, estudantes de programação e profissionais de tecnologia que estão tendo o primeiro contato com cibersegurança.

Não exige conhecimento prévio em Segurança da Informação.

### Fundamentos antes de ferramentas

A trilha não começa por ataques, ferramentas ou técnicas específicas de segurança.

Antes disso, o desenvolvedor deve compreender conceitos como:

- dados e informação;
- confidencialidade, integridade e disponibilidade;
- ativos, ameaças, vulnerabilidades e riscos;
- redes, protocolos e portas;
- HTTP, HTTPS e APIs;
- autenticação e autorização.

A intenção é evitar que Segurança da Informação seja apresentada apenas como "hacking" ou como um conjunto de ferramentas.

### Foco em desenvolvimento

Apesar de Segurança da Informação ser uma área ampla, os exemplos priorizam situações próximas da rotina de desenvolvimento de software.


### OWASP Top 10

O OWASP Top 10 será utilizado como referência introdutória para segurança de aplicações Web.

Ele não será apresentado como uma lista completa de vulnerabilidades, mas como um documento de conscientização sobre riscos importantes para aplicações.

Sempre que possível, a trilha deve referenciar a versão oficial vigente do projeto.

### Segurança defensiva em nível introdutório

A segurança defensiva aparece após os conceitos de risco, ameaça e vulnerabilidade.

Nesta primeira versão, o objetivo é apresentar:

- o que é segurança defensiva;
- como controles ajudam a prevenir incidentes;
- a importância de logs e monitoramento;
- como comportamentos suspeitos podem ser detectados;
- a relação entre prevenção, detecção e resposta a incidentes.

Ferramentas e práticas defensivas mais avançadas ficam fora do escopo inicial.


### Decisões de curadoria

- **OWASP** para segurança de aplicações e vulnerabilidades Web.
- **NIST** para conceitos, gestão de riscos e desenvolvimento seguro.
- **CISA** como referência complementar de segurança.
- **MDN Web Docs** para HTTP, HTTPS e tecnologias Web.
- Documentações oficiais terão preferência sobre artigos de terceiros.
- Conteúdos gratuitos terão prioridade.
- Materiais em português serão priorizados quando tiverem qualidade equivalente.

A intenção é manter poucos recursos por nó e selecionar apenas referências que realmente ajudem no aprendizado.

### Organização da trilha

A progressão inicial segue:

```text
Segurança da Informação
        ↓
Dados e Informação
        ↓
Princípios de Segurança
        ↓
Riscos, Ameaças e Vulnerabilidades
        ↓
Redes de Computadores
        ↓
Protocolos de Rede
        ↓
Portas e Serviços
        ↓
HTTP, HTTPS e APIs
        ↓
Autenticação e Autorização
        ↓
Vulnerabilidades de Segurança
        ↓
OWASP Top 10
        ↓
Introdução à Segurança Defensiva
        ↓
Encerramento
```

A premissa editorial é simples: **fundamentos antes de ferramentas e compreensão do risco antes da aplicação dos controles**.

### Aprofundamentos futuros

- Secure Coding.
- Segurança de APIs.
- Gestão de Secrets.
- Criptografia para desenvolvedores.
- DevSecOps.
- Segurança em Nuvem
- Monitoramento e resposta a incidentes.
- Segurança desde a concepção

Mudanças que adicionem novos nós devem gerar bump **minor**, correções simples **patch** e alterações significativas de escopo ou ordem **major**.
