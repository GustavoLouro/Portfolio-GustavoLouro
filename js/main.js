/* ==========================================================================
   PORTFÓLIO DE ENGENHARIA DE FRONT-END & VIBECODING
   Gustavo Rezende Louro — RM570708 | FIAP
   Script Principal: Interações, Canvas de Partículas, Filtros & Modal
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initCyberTopographyCanvas();
  initCursorAura();
  initNavigation();
  initProjectFilters();
  initProjectModal();
  initContactForm();
  initClipboard();
  initScrollAnimations();
});

/* ==========================================================================
   1. CANVAS DE TOPOGRAFIA CIBERNÉTICA & ONDAS QUANTUM 3D (FUNDO EXCLUSIVO)
   ========================================================================== */
function initCyberTopographyCanvas() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let time = 0;
  let mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000 };
  let scrollY = window.pageYOffset;

  // Respeita acessibilidade de movimento
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  window.addEventListener('resize', resize);
  window.addEventListener('scroll', () => {
    scrollY = window.pageYOffset;
  });

  window.addEventListener('mousemove', (e) => {
    mouse.targetX = e.clientX;
    mouse.targetY = e.clientY;
  });

  window.addEventListener('mouseout', () => {
    mouse.targetX = -1000;
    mouse.targetY = -1000;
  });

  // Configuração das linhas topográficas cibernéticas
  const totalRibbons = 24;
  const segments = 45;
  const sparks = [];

  for (let i = 0; i < 40; i++) {
    sparks.push({
      x: Math.random() * 2000,
      y: Math.random() * 1200,
      speedX: (Math.random() - 0.5) * 0.8,
      speedY: (Math.random() - 0.5) * 0.8,
      radius: Math.random() * 1.8 + 0.8,
      alpha: Math.random() * 0.5 + 0.3,
      color: Math.random() > 0.45 ? '0, 242, 254' : '121, 40, 202'
    });
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);
    time += 0.012;

    // Suaviza a posição do mouse (lerp)
    mouse.x += (mouse.targetX - mouse.x) * 0.08;
    mouse.y += (mouse.targetY - mouse.y) * 0.08;

    // Gradiente dinâmico de fundo e perspectiva
    const horizonY = height * 0.38 + (scrollY * 0.04);
    const bottomY = height * 1.05;

    // 1. Desenha as Ondas Topográficas 3D
    for (let r = 0; r < totalRibbons; r++) {
      const progress = r / totalRibbons;
      // Perspectiva: linhas mais próximas do fundo são mais comprimidas
      const baseY = horizonY + Math.pow(progress, 1.6) * (bottomY - horizonY);
      const amp = (18 + progress * 40);
      const alpha = 0.08 + progress * 0.32;

      ctx.beginPath();

      const ribbonPoints = [];
      const stepX = width / segments;

      for (let s = 0; s <= segments; s++) {
        const x = s * stepX;
        
        // Fórmulas harmônicas senoidais entrelaçadas
        let wave = Math.sin(x * 0.0035 + time * 0.9 + r * 0.28) * amp
                 + Math.cos(x * 0.007 - time * 0.6 + r * 0.2) * (amp * 0.45);

        // Deformação dinâmica por gravidade/repulsão do mouse
        const dx = mouse.x - x;
        const dy = mouse.y - baseY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 260) {
          const force = (1 - dist / 260);
          wave -= Math.sin(dist * 0.05 - time * 3) * force * 52;
        }

        const y = baseY + wave;
        ribbonPoints.push({ x, y });

        if (s === 0) {
          ctx.moveTo(x, y);
        } else {
          // Curvas de bezier suaves
          const prev = ribbonPoints[s - 1];
          const cx = (prev.x + x) / 2;
          const cy = (prev.y + y) / 2;
          ctx.quadraticCurveTo(prev.x, prev.y, cx, cy);
        }
      }

      // Estilo das linhas: gradiente Ciano Neon para Violeta Cósmico
      const strokeGrad = ctx.createLinearGradient(0, baseY - amp, width, baseY + amp);
      strokeGrad.addColorStop(0, `rgba(0, 242, 254, ${alpha * 0.6})`);
      strokeGrad.addColorStop(0.5, `rgba(79, 172, 254, ${alpha})`);
      strokeGrad.addColorStop(1, `rgba(121, 40, 202, ${alpha * 0.7})`);

      ctx.strokeStyle = strokeGrad;
      ctx.lineWidth = 1 + progress * 1.4;
      ctx.stroke();

      // Conexões transversais (grid cyber-mesh) a cada 4 segmentos
      if (r % 2 === 0) {
        for (let s = 0; s < ribbonPoints.length; s += 5) {
          const pt = ribbonPoints[s];
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, 1.2 + progress * 1.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0, 242, 254, ${alpha * 0.75})`;
          ctx.fill();
        }
      }
    }

    // 2. Partículas Quantum que viajam pelo éter
    sparks.forEach((spark) => {
      spark.x += spark.speedX;
      spark.y += spark.speedY;

      if (spark.x < 0) spark.x = width;
      if (spark.x > width) spark.x = 0;
      if (spark.y < 0) spark.y = height;
      if (spark.y > height) spark.y = 0;

      // Glow dinâmico se perto do mouse
      const dmx = mouse.x - spark.x;
      const dmy = mouse.y - spark.y;
      const mdist = Math.sqrt(dmx * dmx + dmy * dmy);
      const glowMultiplier = mdist < 180 ? 2 : 1;

      ctx.beginPath();
      ctx.arc(spark.x, spark.y, spark.radius * glowMultiplier, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${spark.color}, ${Math.min(spark.alpha * glowMultiplier, 0.9)})`;
      ctx.fill();
    });

    requestAnimationFrame(draw);
  }

  resize();
  draw();
}

/* ==========================================================================
   2. CURSOR AURA SPOTLIGHT (DESKTOP)
   ========================================================================== */
function initCursorAura() {
  const aura = document.querySelector('.cursor-aura');
  if (!aura) return;

  let mouseX = -200, mouseY = -200;
  let currentX = -200, currentY = -200;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function renderAura() {
    // Interpolação suave (Lerp)
    currentX += (mouseX - currentX) * 0.12;
    currentY += (mouseY - currentY) * 0.12;

    aura.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
    requestAnimationFrame(renderAura);
  }

  renderAura();
}

/* ==========================================================================
   3. NAVEGAÇÃO, MENU MOBILE & SCROLL ATIVO
   ========================================================================== */
function initNavigation() {
  const header = document.querySelector('.site-header');
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  // Header Scrolled Style
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // ScrollSpy para links da navbar
    let scrollY = window.pageYOffset;
    sections.forEach((sec) => {
      const sectionHeight = sec.offsetHeight;
      const sectionTop = sec.offsetTop - 140;
      const sectionId = sec.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });

  // Toggle do Menu Mobile
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('open');
      navMenu.classList.toggle('open');
    });

    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('open');
        navMenu.classList.remove('open');
      });
    });
  }
}

/* ==========================================================================
   4. FILTROS DE PROJETOS
   ========================================================================== */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach((card) => {
        const category = card.getAttribute('data-category');

        if (filterValue === 'all' || category.includes(filterValue)) {
          card.style.display = 'flex';
          card.style.animation = 'fadeInCard 0.4s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   5. MODAL DE DETALHES DE PROJETOS
   ========================================================================== */
const projectData = {
  'apex-motors': {
    title: 'Apex Motors — Luxury & Performance Automotive Website',
    tag: 'Front-End Luxury & Vanilla JS',
    image: 'assets/projects/hero_supercar.jpg',
    description: 'Landing page premium voltada para a comercialização e apresentação de supercarros e veículos de luxo. Desenvolvida com estética Dark Luxury, micro-gradientes, glassmorphism e foco obsessivo em desempenho, responsividade e interações dinâmicas.',
    specs: [
      'Showcase de Modelos com estatísticas de performance dinâmicas (0-100 km/h, cavalaria, autonomia).',
      'Agendamento de Test Drive VIP com validações e feedback via notificações no estilo Toast.',
      'Arquitetura CSS baseada em Design Tokens, Flexbox, CSS Grid e Glassmorphism nativo sem dependências.',
      'Experiência 100% responsiva otimizada para mobile, tablets e desktops de alta resolução.'
    ],
    github: 'https://github.com/GustavoLouro/Apex-Motors.git',
    live: 'https://gustavolouro.github.io/Apex-Motors/'
  },
  'vibecraft-lab': {
    title: 'Vibecraft Lab // Front-End Paradigms & NEXUS ZERO',
    tag: 'Vibecoding & Creative Tech',
    image: 'assets/projects/banner.webp',
    description: 'Ambiente prático experimental comparando três paradigmas fundamentais de desenvolvimento web: Bootstrap 5 (componentização corporativa), Tailwind CSS (estilização atômica) e Vibecoding assistido por IA com foco em experiência cinematográfica AAA.',
    specs: [
      'NEXUS // ZERO: Loja cinematográfica com GSAP 3.12, ScrollTrigger e Lenis Smooth Scroll sincronizados.',
      'Canvas 2D com física de partículas repulsivas ao mouse e onda de choque procedural ao clique.',
      'Web Audio API: sintetizador procedural de áudio para micro-feedbacks sci-fi em tempo real sem arquivos de mídia externos.',
      'Documentação técnica completa com matriz de correções, análise de prompts e relatórios WCAG.'
    ],
    github: 'https://github.com/GustavoLouro/vibecraft-lab.git',
    live: 'https://gustavolouro.github.io/vibecraft-lab/'
  },
  'urban-garage': {
    title: 'Urban Garage — Veículos de Alta Performance',
    tag: 'Showcase Esportivo & UI/UX',
    image: 'assets/projects/banner.webp',
    description: 'Interface automotiva esportiva criada para exibir veículos com máxima fidelidade visual, vitrine de modelos com especificações detalhadas, seção institucional da marca e fluxo de agendamento de atendimento especializado.',
    specs: [
      'Vitrine interativa de superesportivos com cards em grid responsivo e micro-efeitos de hover.',
      'Paleta de alto impacto com tipografia Rajdhani e Orbitron para identidade futurista.',
      'Formulário para test drive e atendimento VIP com validações de inputs.',
      'Compatibilidade cross-browser e renderização sem travamentos de layout.'
    ],
    github: 'https://github.com/GustavoLouro/Projeto-UrbanGarage.git',
    live: 'https://gustavolouro.github.io/Projeto-UrbanGarage/'
  },
  'vetpurina-ai': {
    title: 'VetPurina AI — Assistente Inteligente Veterinária',
    tag: 'IA Aplicada & Engenharia de Software',
    image: 'assets/projects/vetpurina_care.jpg',
    description: 'Solução inteligente voltada a médicos-veterinários para suporte clínico, prescrição nutricional automatizada da linha Purina Pro Plan, cálculo de dietas e gamificação de recomendações profissionais.',
    specs: [
      'Módulo de triagem e cálculo automático de porções e calorias veterinárias por perfil de pet.',
      'Gamificação de engajamento clínico com níveis, conquistas e pontos por recomendação assertiva.',
      'Interface limpa, acessível e responsiva estruturada para agilidade em consultórios veterinários.',
      'Integração com bases de conhecimento nutricional canino e felino.'
    ],
    github: 'https://github.com/GustavoLouro/VetPurina-AI',
    live: 'https://github.com/GustavoLouro/VetPurina-AI'
  }
};

function initProjectModal() {
  const modalOverlay = document.getElementById('project-modal');
  if (!modalOverlay) return;

  const closeBtn = modalOverlay.querySelector('.modal-close-btn');
  const modalImg = modalOverlay.querySelector('.modal-header-img');
  const modalTag = modalOverlay.querySelector('.modal-tag');
  const modalTitle = modalOverlay.querySelector('.modal-title');
  const modalDesc = modalOverlay.querySelector('.modal-description');
  const modalSpecsList = modalOverlay.querySelector('.modal-specs-list');
  const modalGithubLink = modalOverlay.querySelector('.btn-modal-github');
  const detailButtons = document.querySelectorAll('.btn-view-details');

  detailButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const projectId = btn.getAttribute('data-project');
      const data = projectData[projectId];
      if (!data) return;

      modalImg.src = data.image;
      modalImg.alt = data.title;
      modalTag.textContent = data.tag;
      modalTitle.textContent = data.title;
      modalDesc.textContent = data.description;
      modalGithubLink.href = data.github;

      // Lista de specs
      modalSpecsList.innerHTML = '';
      data.specs.forEach((spec) => {
        const li = document.createElement('li');
        li.innerHTML = `<i class="bx bx-check-circle"></i><span>${spec}</span>`;
        modalSpecsList.appendChild(li);
      });

      modalOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });
}

/* ==========================================================================
   6. FORMULÁRIO DE CONTATO & NOTIFICAÇÕES TOAST
   ========================================================================== */
function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      showToast('Por favor, preencha todos os campos obrigatórios.', 'warning');
      return;
    }

    // Feedback visual de sucesso
    showToast(`Obrigado, ${name}! Sua mensagem foi enviada para Gustavo Louro.`, 'success');
    contactForm.reset();
  });
}

function showToast(message, type = 'info') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <i class='bx ${type === 'success' ? 'bxs-check-circle' : 'bxs-info-circle'}' style="font-size: 1.3rem; color: var(--accent-cyan)"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('toast-exit');
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 4000);
}

/* ==========================================================================
   7. COPIAR E-MAIL PARA A ÁREA DE TRANSFERÊNCIA
   ========================================================================== */
function initClipboard() {
  const copyBtns = document.querySelectorAll('.copy-btn');
  copyBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetText = btn.getAttribute('data-copy');
      if (!targetText) return;

      navigator.clipboard.writeText(targetText).then(() => {
        showToast(`E-mail ${targetText} copiado para a área de transferência!`, 'success');
      }).catch(() => {
        showToast('Não foi possível copiar automaticamente.', 'warning');
      });
    });
  });
}

/* ==========================================================================
   8. MICRO-ANIMAÇÕES AO ROLAR (FADE IN SUAVE)
   ========================================================================== */
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.skill-category-card, .project-card, .timeline-card, .about-text-card, .academic-card').forEach((el) => {
    observer.observe(el);
  });
}

