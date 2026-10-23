# FIAP — Checkpoint 6: Vibecoding
## Construindo uma Landing Page com Inteligência Artificial
**Referências, Identidade Visual (IDV), Prompts e Correções: O Processo Importa Tanto Quanto o Resultado**

* **Aluno:** Gustavo Rezende Louro
* **RM:** 570708
* **Curso:** Bacharelado em Engenharia de Software (Turma ESPW)
* **Disciplina:** Front-End Design & Development // Vibecoding
* **E-mail:** gustavotatobelgu@gmail.com
* **Repositório do Projeto:** [github.com/GustavoLouro/checkpoint-6-portfolio](https://github.com/GustavoLouro)
* **Deploy da Landing Page:** [gustavolouro.github.io/checkpoint-6-portfolio](https://gustavolouro.github.io)

---

## 01. Contexto & Apresentação
Este documento registra formalmente o desenvolvimento do portfólio profissional de engenharia front-end criado através da metodologia de **Vibecoding** (desenvolvimento ágil assistido por ferramentas de Inteligência Artificial generativa). 

O foco deste checkpoint transcende o resultado estético e funcional da landing page: documenta o repertório visual pesquisado, a fundamentação teórica de identidade visual, a estratégia de engenharia de prompt, os testes de qualidade de interface (QA) e a análise crítica das rodadas de correção e refatoração.

---

## 02. Objetivo
Desenvolver repertório visual com senso estético apurado, tomada de decisão fundamentada em Identidade Visual (IDV) e clareza na comunicação técnica com modelos de IA generativa, aprendendo a formular prompts estruturados e específicos, e a auditar o código gerado com olhar crítico de engenheiro de software.

---

## 03. O Que Está Sendo Entregue

### 3.1 Referências Visuais (Mínimo de 5 Referências Analisadas)

Para a concepção do portfólio, foram selecionadas cinco referências globais de alto prestígio no ecossistema de design e tecnologia:

| # | Referência / Plataforma | URL / Fonte | O Que Foi Aproveitado | Seção Inspirada |
| :--- | :--- | :--- | :--- | :--- |
| **1** | **Linear.app** | [linear.app](https://linear.app) | **Estética Dark Luxury & Micro-Gradientes:** O uso de fundos ultra-escuros com iluminação difusa (radial-gradients sutis), bordas semitransparentes finas de 1px e tipografia geométrica precisa. | **Hero Section & Cards de Skills** |
| **2** | **Vercel** | [vercel.com](https://vercel.com) | **Minimalismo Técnico & Tipografia Mono:** Cartões de alta densidade de informação com visual limpo, chips de status com indicador pulsante (*pulse-dot*) e blocos de código com destaque de sintaxe. | **Header, Navbar & Box de Código do Hero** |
| **3** | **Awwwards (Site of the Day / Creative Devs)** | [awwwards.com](https://awwwards.com) | **Canvas Interativo & Física de Partículas:** Interação fluida entre o ponteiro do mouse e elementos visuais de fundo, criando profundidade tridimensional com repulsão suave e spotlight aura. | **Fundo da Página & Canvas 2D (#particle-canvas)** |
| **4** | **Apple Developer & WWDC Portal** | [developer.apple.com](https://developer.apple.com) | **Linha do Tempo Visual & Glassmorphism:** Efeito de vidro jateado com desfoque de fundo (`backdrop-filter: blur(16px)`), nós luminosos interligados por gradientes verticais contínuos. | **Seção de Eventos & Timeline de Experiências** |
| **5** | **Apex Motors / Luxury Auto UI** | [github.com/GustavoLouro/Apex-Motors](https://github.com/GustavoLouro/Apex-Motors.git) | **Cards Automotivos & Notificações Flutuantes:** Zoom cinematográfico ao passar o cursor sobre as imagens de capa, badges de categoria de produto e feedback instantâneo via toasts não-intrusivos. | **Seção de Projetos em Destaque & Feedback Toast** |

---

### 3.2 Decisões de Identidade Visual (IDV)

#### A. Paleta de Cores e Justificativa Semiótica
A paleta foi construída sobre o conceito **Cyber-Luxury & Creative Engineering**, combinando sobriedade com contrastes elétricos modernos. Todos os contrastes foram validados para atender aos critérios de legibilidade **WCAG 2.1 (níveis AA e AAA)**:

* `HEX #06080D` — **Deep Void Black (Fundo Principal / Canvas):** Atua como o alicerce escuro da aplicação, transmitindo sofisticação, profundidade e eliminando distrações visuais, além de poupar energia em telas OLED.
* `HEX #00F2FE` — **Cyber Cyan (Destaque Primário & Acento Interativo):** Representa a precisão tecnológica, inovação e velocidade. Utilizado em links ativos, bordas interativas de hover, ícones de destaque e nós da timeline.
* `HEX #7928CA` — **Hyper Violet (Destaque Secundário & Gradientes):** Simboliza a criatividade do vibecoding e a fusão entre lógica computacional e inteligência artificial. Constrói gradientes refinados junto com o ciano.
* `HEX #F8FAFC` — **Pure Snow White (Tipografia Principal & Títulos):** Garante contraste máximo (21:1 contra o fundo escuro), assegurando leitura perfeita para qualquer nível de iluminação ambiente.
* `HEX #94A3B8` — **Slate Grey (Tipografia Secundária & Metadados):** Atenua textos de apoio, descrições longas e legendas, estabelecendo hierarquia visual harmônica sem fadigar o leitor.

#### B. Tipografia Escolhida
* **Títulos e Headings (`Outfit`):** Fonte sem serifa de traço moderno, formas geométricas e grande impacto em tamanhos grandes. Transmite solidez institucional e modernidade estética.
* **Corpo de Texto (`Plus Jakarta Sans`):** Tipografia contemporânea de alta legibilidade em telas digitais, com altura de x generosa e excelente espaçamento entre caracteres.
* **Badges, Tags & Código (`JetBrains Mono`):** Fonte monoespaçada desenvolvida especificamente para desenvolvedores. Transmite rigor técnico, precisão matemática e identidade dev autêntica.

#### C. Tom de Voz & Personalidade da Interface
* **Elegante & Confiante:** Design limpo, sem poluição visual, espaçamentos amplos (espaço em branco generoso) e acabamento refinado com efeito de vidro (*glassmorphism*).
* **Moderno & Cinematográfico:** Micro-interações táteis, iluminação que acompanha o mouse, física de partículas fluida a 60fps e transições suaves.
* **Profissional & Proativo:** Textos objetivos, apresentação clara da graduação em Engenharia de Software na FIAP, estatísticas concretas de projetos e canais de contato rápidos.

#### D. Estrutura da Página e Racional de Navegação
1. **Header / Navbar Fixa:** Acesso rápido permanente a qualquer ponto do portfólio, status em tempo real de disponibilidade profissional e botão de ação direta.
2. **Hero Section:** Apresentação imediata da proposta de valor, do estudante (Gustavo Rezende Louro, FIAP RM570708), chamada para projetos e demonstração de proficiência com bloco de código dinâmico.
3. **Sobre Mim & Formação:** Contextualização da trajetória acadêmica, instituição de ensino e pilares de desenvolvimento.
4. **Skills & Tecnologias:** Matriz de competências categorizada em três eixos (Core, Frameworks/Creative, Vibecoding/IA), permitindo aos avaliadores escanear rapidamente as ferramentas dominadas.
5. **Projetos em Destaque:** Vitrine dos cases centrais (Apex Motors, Vibecraft Lab, Urban Garage, VetPurina AI) com filtragem por categoria e modal com especificações detalhadas de arquitetura.
6. **Linha do Tempo de Eventos:** Histórico cronológico de hackathons, festivais de tecnologia e conferências, comprovando engajamento além da sala de aula.
7. **Contato & Conexão:** Formulário com validação e feedback tátil, link do perfil do GitHub e e-mail direto com botão de copiar em 1 clique.
8. **Footer:** Informações institucionais, direitos e navegação auxiliar.

---

### 3.3 Prompts Utilizados na Construção com IA

#### Prompt Inicial (Sem Edição)
```text
Atue como um Engenheiro Front-End Sênior e Especialista em UI/UX Design System. 
Preciso desenvolver a landing page do meu portfólio profissional de Engenharia de 
Software para o Checkpoint 6 de Front-End da FIAP. 

Meu nome é Gustavo Rezende Louro, meu e-mail é gustavotatobelgu@gmail.com e sou 
estudante de Engenharia de Software na FIAP (RM570708). 

Quero que a página tenha um nível altíssimo de sofisticação visual ('dark luxury', 
cyber-minimalista, com micro-gradientes, glassmorphism e partículas interativas), 
semelhante aos sites premiados no Awwwards e referências como Linear e Vercel.

A página deve ser construída em HTML5 semântico, CSS3 moderno (com variáveis e 
design tokens) e Vanilla JavaScript, com carregamento rápido e zero dependências 
pesadas de build.

O portfólio precisa conter as seguintes seções:
1. Header fixo com efeito de vidro (frosted glass/glassmorphism), logo GL, links de navegação, badge de disponibilidade piscando e botão de contato.
2. Hero Section com headline de impacto, apresentação do meu foco (Engenharia Front-End, Vibecoding, Clean Code), botões de ação e um card interativo com bloco de código e métricas.
3. Seção Sobre Mim & Formação Acadêmica destacando minha graduação em Engenharia de Software na FIAP.
4. Seção Skills & Competências categorizadas (Front-End Core, Frameworks & Creative Coding, Vibecoding & IA Generativa).
5. Seção Projetos em Destaque contendo:
   - Apex Motors (https://github.com/GustavoLouro/Apex-Motors.git)
   - Vibecraft Lab // Front-End Paradigmas (https://github.com/GustavoLouro/vibecraft-lab.git)
   - Projeto Urban Garage (https://github.com/GustavoLouro/Projeto-UrbanGarage.git)
   - VetPurina AI (https://github.com/GustavoLouro/VetPurina-AI)
   Com filtros interativos e modal pop-up com especificações técnicas.
6. Seção de Eventos & Experiências em formato de linha do tempo (timeline vertical).
7. Seção de Contato com formulário funcional e botão de copiar e-mail com 1 clique.
8. Footer profissional.

Certifique-se de que a paleta de cores tenha contraste WCAG, as fontes sejam 
Outfit, Plus Jakarta Sans e JetBrains Mono, e que o site seja 100% responsivo.
```

#### Prompts de Ajuste e Iteração (Na Ordem Exata de Envio)

* **Prompt de Ajuste 1 (Canvas & Física de Partículas):**
  > *"No fundo da página, o canvas de partículas está estático em telas de alta resolução e quando redimensiono a janela ele perde a proporção ou cria barras de rolagem. Refatore a inicialização do canvas no JavaScript para calcular width e height via window.innerWidth e window.innerHeight dinamicamente no resize, crie uma física de repulsão suave quando o cursor do mouse se aproximar das partículas e adicione uma verificação para 'prefers-reduced-motion', respeitando a acessibilidade do usuário."*

* **Prompt de Ajuste 2 (Filtros Dinâmicos de Projetos):**
  > *"Na seção de projetos, quero que os cards tenham uma transição mais fluida ao alternar entre as abas de filtro ('Todos', 'Dark Luxury & UI', 'Vibecoding & Creative', 'Sistemas & IA'). Ajuste o JavaScript para aplicar uma animação suave de fadeInCard nos cards que ficam visíveis e estilize o botão ativo com um gradiente luminoso ciano e sombra difusa para dar feedback claro ao usuário."*

* **Prompt de Ajuste 3 (Modal de Projetos & Acessibilidade):**
  > *"O modal de detalhes do projeto precisa de melhorias na experiência de usuário. Quero que ele possa ser fechado não apenas no botão 'X', mas também clicando fora do card (no backdrop escuro) e apertando a tecla Escape no teclado. Além disso, quando o modal estiver aberto, trave a rolagem da página (overflow: hidden no body) para evitar que a página role por trás do modal."*

* **Prompt de Ajuste 4 (Micro-Interações & Toasts no Contato):**
  > *"No formulário de contato e no botão de copiar e-mail, quero um sistema de notificações Toast flutuante no canto inferior direito, sem usar bibliotecas externas. Quando o usuário clicar em 'Copiar E-mail', copie 'gustavotatobelgu@gmail.com' para a área de transferência e exiba um Toast verde/ciano confirmando a cópia. Quando enviar o formulário, valide os campos obrigatórios e mostre outro Toast parabenizando pelo envio, limpando os campos em seguida."*

* **Prompt de Ajuste 5 (Timeline & Layout Mobile Responsivo):**
  > *"Na visualização em dispositivos móveis (telas abaixo de 768px), os nós da timeline estavam desalinhados com o texto e o menu de navegação da navbar estava ocupando espaço incorreto. Ajuste o media query para recuar a linha da timeline para 15px, posicionar os nós no topo de cada item e transformar a navbar em um menu hambúrguer com animação suave de slide-down e backdrop blur de 20px."*

---

### 3.4 Registro de Correções (Fichas de Auditoria de Interface)

#### Ficha 1: Tratamento de Canvas 2D e Acessibilidade
| Campo | Registro |
| :--- | :--- |
| **Problema** | O canvas de partículas em segundo plano sofria distorção ao redimensionar a janela do navegador e continuava renderizando em dispositivos com configuração de redução de movimento. |
| **Prompt de Correção** | *"Refatore a inicialização do canvas no JavaScript para calcular width e height dinamicamente no resize, crie repulsão suave com o mouse e inclua checagem de window.matchMedia('(prefers-reduced-motion: reduce)')."* |
| **Resultado** | Resolveu totalmente. As partículas mantêm a escala precisa em qualquer resolução de tela e o loop de renderização é desligado se o usuário solicitar menos movimento. |
| **Aprendizado** | No prompt inicial, sempre que solicitar elementos dinâmicos de animação gráfica em Canvas 2D, devo especificar explicitamente a tratativa de resize e a regra de acessibilidade para movimento reduzido. |

#### Ficha 2: Suavidade na Transição de Filtro de Cards
| Campo | Registro |
| :--- | :--- |
| **Problema** | Ao clicar nas abas de categorias, os projetos eram alternados com `display: none/flex` instantâneo e seco, causando pulo de layout e quebrando o tom fluido do site. |
| **Prompt de Correção** | *"Ajuste o JavaScript para aplicar uma animação suave de fadeInCard nos cards visíveis e adicione efeito gradiente ativo no botão da categoria selecionada."* |
| **Resultado** | Resolveu totalmente. A transição agora possui opacidade gradual de 0.4s e deslocamento vertical de 10px via CSS `@keyframes fadeInCard`. |
| **Aprendizado** | Em interfaces com filtros dinâmicos, é essencial pedir a combinação de classes de estado ativas no CSS junto com os listeners do JavaScript para garantir consistência estética. |

#### Ficha 3: Usabilidade e Focus Lock do Modal de Projetos
| Campo | Registro |
| :--- | :--- |
| **Problema** | O modal só fechava no botão 'X' e permitia rolagem contínua da página por trás do backdrop, gerando sensação de perda de contexto e quebra de usabilidade. |
| **Prompt de Correção** | *"Habilite o fechamento do modal ao clicar no backdrop e via tecla Escape, além de travar o overflow do body enquanto o modal estiver aberto."* |
| **Resultado** | Resolveu totalmente. O modal agora obedece a todas as diretrizes clássicas de acessibilidade e fecha tanto por teclado quanto por toque fora. |
| **Aprendizado** | Componentes modais exigem especificações explícitas de UX: focus trap, tecla ESC, backdrop dismiss e bloqueio de scroll da página principal. |

#### Ficha 4: Feedback Visual Assíncrono com Notificações Toast
| Campo | Registro |
| :--- | :--- |
| **Problema** | O botão de copiar e-mail realizava a cópia na Clipboard API silenciosamente, deixando o usuário sem saber se a operação havia realmente ocorrido. |
| **Prompt de Correção** | *"Crie um componente de Toast flutuante com animação de slide, ícone de confirmação e tempo de exibição de 4 segundos para avisar a cópia do e-mail e o envio da mensagem."* |
| **Resultado** | Resolveu totalmente. Notificações estilizadas com glassmorphism informam o sucesso tanto da cópia quanto da submissão do formulário. |
| **Aprendizado** | Sempre planejar micro-feedbacks (toasts, haptic feedback visual ou sonoro) no escopo inicial de interações assíncronas e cópia de dados. |

#### Ficha 5: Alinhamento da Timeline no Mobile (320px a 480px)
| Campo | Registro |
| :--- | :--- |
| **Problema** | Os marcadores redondos da linha do tempo sobrepunham os títulos dos eventos em telas estreitas de smartphones devido à margem estática de 80px. |
| **Prompt de Correção** | *"Ajuste o media query da seção de eventos para que a linha fique fixada em left: 15px, os nós fiquem em left: 5px e o padding-left do container reduza para 45px no mobile."* |
| **Resultado** | Resolveu totalmente. Os textos agora desfrutam de 100% da largura útil sem qualquer corte ou transbordamento horizontal. |
| **Aprendizado** | Fornecer os pontos de interrupção (breakpoints) e comportamentos de margem reduzida para elementos com layouts verticais assimétricos logo na primeira instrução de CSS. |

---

### 3.5 Resultado Final & Reflexão Crítica

* **Repositório no GitHub:** [https://github.com/GustavoLouro/checkpoint-6-portfolio](https://github.com/GustavoLouro)
* **Página Publicada (Deploy):** [https://gustavolouro.github.io/checkpoint-6-portfolio/](https://gustavolouro.github.io)

#### Breve Reflexão
* **O que ficou como imaginei:**  
  A harmonia visual alcançada foi além do planejado. O casamento entre a paleta escura profunda, os acentos luminosos ciano/violeta e os micro-movimentos do canvas de partículas conferiu um nível de sofisticação digno de plataformas consolidadas do Vale do Silício. A exibição dos quatro projetos reais desenvolvidos no ano demonstra com clareza minha evolução técnica em diferentes paradigmas de front-end.
* **O que ainda mudaria / Próximos Passos:**  
  Para uma versão futura, adicionaria suporte a múltiplos idiomas (seletor PT-BR / EN), integraria um modelo 3D WebGL renderizado com Three.js para o hero automotivo e conectaria uma Cloud Function para persistência e envio automático das mensagens do formulário direto para o meu WhatsApp/Discord.
