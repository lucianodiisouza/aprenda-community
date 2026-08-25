# Decisões editoriais - Trilha de Terminal para Devs

> Histórico de decisões de escopo, organização e curadoria. Quando a
> trilha ganha ou perde um nó, isso fica registrado aqui.

## v1.0.0 - Criação inicial (2026-08-25)

### Origem

Esta trilha foi **criada** no `aprenda-community` (público,
contribuição) como pré-requisito declarado das trilhas de
Containers e Orquestração (`docker-fundamentos`,
`docker-compose-e-workflows`, `kubernetes`). Decidida no survey
inicial como 15 nós, slug `terminal-para-devs`, dificuldade
`iniciante`.

A escolha por "tool-agnostic" e "bash como linha de base" veio
do insight de que os fundamentos (POSIX) funcionam em qualquer
shell moderno (bash, zsh, fish até), então a trilha não fica
presa a uma tecnologia específica - ensinando o "por quê" e o
"como" genérico, o aluno consegue migrar de shell com facilidade
quando precisar.

A versão inicial é a "v1.0.0" - ponto de partida. Mudanças de
escopo viram bump **minor** (v1.1.0) pra adição de nós, **patch**
(v1.0.1) pra correções, **major** (v2.0.0) pra mudança de ordem
ou base conceitual.

### Decisões de estrutura

- **15 nós**: 1 `topic` de abertura (`introducao-terminal`), 13
  `subtopic` encadeados, 1 `milestone` (`projeto-final`).
- **3 diagramas Mermaid** distribuídos nos nós onde a figura
  realmente agrega:
  - `introducao-terminal` - anatomia terminal/shell/kernel e o
    fluxo de teclas até stdout (análogo ao diagrama VM vs
    container da trilha de Docker).
  - `pipes-redirect` - fluxos de stdin/stdout/stderr entre
    comandos, mostrando como `|` e `>` se encaixam.
  - `ssh` - handshake de autenticação por chave pública/privada,
    mostrando o que cada lado sabe.
- **`projeto-final.mdx` termina com "próximo passo"** sugerindo
  a trilha de Docker Fundamentos - mesmo padrão de "fechamento
  aberto" das trilhas anteriores.
- **Blocos de código com linguagem explícita** (`bash`,
  `text`, `yaml`) - o app pode transformar em playground no build.
- **Recursos no frontmatter** (não no corpo), mínimo 1, máximo 3
  por nó.

### Pré-requisito declarado

Esta trilha **assume** que a pessoa:

- Sabe abrir um terminal (qualquer um: macOS Terminal, iTerm2,
  GNOME Terminal, Windows Terminal via WSL2).
- Sabe digitar comandos e dar Enter.
- Conhece o básico de "arquivo" e "pasta" (sem precisar de
  metáfora unix).

**Não exige** conhecimento prévio de:

- Programação (não há código de app nesta trilha).
- Git ou versionamento.
- Linux específico, sintaxe de shell, ou comandos.
- Backend, Docker, cloud.

Em particular, **a trilha é a fundação** - vem antes de qualquer
outra trilha técnica de "ambiente unix". É a primeira
recomendação pra quem está começando a trabalhar com VPS,
containers, ou qualquer infra.

### Decisões de curadoria

- **Bash como linha de base** - é o shell padrão do Linux e
  presente em todo lugar. zsh (padrão do macOS desde 2019) é
  mencionado onde diverge (ex: prompt, arquivos de config).
- **macOS (BSD) vs Linux (GNU)** - diferenças marcadas em
  callouts quando relevante: `sed -i` precisa de `''` no macOS,
  `ps` usa sintaxe diferente, `date` aceita formatos diferentes.
  Sem aprofundar - só onde a pessoa pisa na mina.
- **Windows = WSL2** - única menção honesta. Citado na
  introdução e em callouts quando relevante. Não aprofunda.
- **Recursos em EN** - a documentação canônica (GNU manuals,
  manpages) é em inglês. Recursos PT-BR só quando existem
  (MDN, tutorial linuxforce). Marcar com `lang: en` corretamente.
- **3 diagramas no total** - o "essencial" que o usuário pediu.
  Os 12 outros nós funcionam só com texto + código + listas.
- **Foco em "por que" + "como"** - a trilha não é só lista de
  comandos. Cada nó explica o modelo mental (3 fluxos I/O,
  permissões como 3 grupos x 3 bits, chaves pública/privada)
  antes de listar comandos.
- **`htop` recomendado** sobre `top` - mesma informação, UX
  melhor, vale instalar.
- **`ripgrep` (`rg`) e `fzf` mencionados** como upgrades
  produtivos - mas sem exigir, o `grep`/`Ctrl + R` cobrem o
  essencial.

### Stack padrão assumido

- **bash 4+** ou **zsh 5+** (qualquer um serve pra trilha).
- **Linux/macOS** - comandos POSIX funcionam em ambos. Windows
  precisa de WSL2.
- **OpenSSH 8+** - cliente e servidor SSH modernos (chaves
  ed25519).

### O que ficou de fora (intencionalmente)

- **fish, nushell, xonsh** - shells alternativos com sintaxe
  diferente. Bash + zsh cobrem 99% do mercado.
- **Shell scripting avançado** (loops, funções, traps, signal
  handling, arrays associativos) - o foco é "usar o terminal",
  não "escrever scripts". Vale uma trilha própria se houver
  demanda.
- **Vim/Emacs/Nano em profundidade** - só o mínimo de vim/nano
  pra editar arquivo de config. Edição de código é tema de
  editor/IDE.
- **tmux/screen** - multiplexadores de terminal. Úteis, mas
  adiciona complexidade. Mencionado brevemente em callout, sem
  aprofundar.
- **Systemd unit files** - gerenciamento de serviços no
  systemd. Tema de "Linux Sysadmin", outra trilha.
- **Logrotate, cron, anacron** - jobs agendados e rotação de
  logs. Mesmo.
- **LVM, ZFS, BTRFS** - sistema de arquivos avançado. Sysadmin
  territory.
- **Containers, namespaces, cgroups** - pertence às trilhas de
  Docker/K8s (que assumem esta).
- **Segurança avançada** (SELinux, AppArmor, sudo policies,
  2FA em SSH) - tema de "DevOps Seguro".
- **Network namespaces, iptables, nftables** - firewall é
  tema de "Networking para Devs".
- **Compilação, package managers** (`apt`, `dnf`, `brew`,
  `pacman`) - instalação de pacotes não é escopo desta trilha.
  Aparece em callout quando relevante.

### Aprofundamentos futuros

- **`introducao-terminal`** - terminal multiplexers (tmux),
  terminal moderno (Alacritty, WezTerm, Ghostty).
- **`navegacao`** - ranger, nnn, fzf para navegação.
- **`busca`** - ripgrep, ag, fd.
- **`processos`** - cgroups, namespaces, htop avançado, atop.
- **`pipes-redirect`** - named pipes, sockets, file descriptors.
- **`processamento-texto`** - jq (JSON), xmllint, csvkit.
- **`variaveis-ambiente`** - direnv, mise/asdf, dotfiles.
- **`ssh`** - mosh, ssh tunneling avançado, jump hosts.
- **`rede`** - iperf, tcpdump, nmap (básico).
- **`edicao-minima`** - kakoune, helix, Neovim.
- **`projeto-final`** - cenários mais complexos (cluster
  pequeno, debug de service mesh).

Mudanças de escopo aqui viram bump **minor** (v1.1.0) se
adicionarem nós, **patch** (v1.0.1) se forem correções, **major**
(v2.0.0) se mudarem a ordem ou a base conceitual.

---

Aberto a discussão: abra issue ou comente em
[Issues](https://github.com/lucianodiisouza/aprenda-community/issues).
