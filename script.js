/* =========================================================
   PORTFÓLIO — script.js
   ========================================================= */

'use strict';
document.documentElement.classList.add('js');

/* =========================================================
   1) SITE — EDITE AQUI
   ========================================================= */
const SITE = {

  /* --- MINHA FOTO --- */
  photo: './img/Retrato Minimalista em Fundo Escuro.png',

  /* --- MINHA APRESENTAÇÃO PESSOAL ---*/
  about: {
    story: ["Sou desenvolvedor de software em formação. A programação está no centro da minha rotina: reservo blocos fixos do dia para estudar e para construir projetos de verdade.", "Trabalho principalmente com HTML, CSS e JavaScript puros. Em alguns projetos também uso React no front-end.", "Além do código, Estudo inglês e Matemática todos os dias e reservo um tempo para eu tocar teclado."],
    interests: ["Gosto de interfaces simples e bem cuidadas, Utilizo ferramentas de IA que ajudam no meu dia a dia para analizar meus códigos e apontar meus erros.", "Meu objetivo é evoluir como desenvolvedor, publicar o que construo e transformar o que aprendo em produtos e serviços úteis.", "Pretendo trabalhar em uma empresa de tecnologia e aplicar meus conhecimentos no futuro."],
  },

  /* --- MINHAS TECNOLOGIAS --- */
  technologies: [
    { name: 'HTML', icon: 'HTML', description: 'Estrutura semântica e acessível das páginas dos meus projetos.' },
    { name: 'CSS', icon: 'CSS', description: 'Layouts responsivos, componentes e animações.' },
    { name: 'Java Script', icon: 'JS', description: 'Interatividade e lógica no navegador.' },
    { name: 'React', icon: 'React', description: 'Interfaces organizadas em componentes reutilizáveis.' },
  ],

  /* --- MEUS PROJETOS ---*/
  projects: [
    { tags: ["HTML", "CSS"], demo: 'https://edx717.github.io/Landing-Page-Cafeteria2/', image: './img/cup-coffee-stands-white-table-cup-milk-table-covered-with-coffee-grains.jpg', name: 'Landing Page (Cafeteria)', description: 'Landing page para uma cafeteria, com representação de cafés e produtos. Criada para transmitir conforto, destacar o cardápio e facilitar o contato com os clientes.' },
    { tags: ["Java Script"], demo: ' https://edx717.github.io/Gerenciador-de-Controle-de-Estoque-1.0/', image: './img/NA_SEP._29.jpg', name: 'Controle de Estoque', description: 'Sistema de controle de estoque simples para organizar produtos e acompanhar quantidades disponíveis.' },
    { tags: ["CSS", "Java Script", "React"], demo: ' https://edx717.github.io/Lista-de-tarefas/', image: './img/image.png', name: 'Lista de Tarefas 1.0', description: 'Aplicação simples de lista de tarefas que permite adicionar e visualizar atividades do dia a dia, com foco na organização.' },
    { tags: ["React"], image: './img/WhatsApp Image 2026-10-02 at 12.49.31.jpeg', name: 'App (Resolve Aqui)', description: 'Aplicativo que conecta clientes a profissionais prestadores de serviços, facilitando a busca por soluções na região. Com uma interface simples e intuitiva.' },
    { tags: ["HTML", "CSS", "Java Script"], demo: "https://edx717.github.io/Gerador-de-Senha/", image: './img/43956.jpg', name: 'Gerador de Senha', description: 'Aplicação que gera senhas aleatórias e personalizáveis, permitindo definir o comprimento e incluir letras maiúsculas, números e símbolos.' },
    { tags: ["CSS", "Java Script", "React"], demo: 'https://edx717.github.io/To-Do-List/', image: './img/flat-lay-notebook-with-list-desk.jpg', name: 'Lista de Tarefas 2.0', description: 'Versão aprimorada da lista de tarefas, com recursos para adicionar, concluir, editar e excluir atividades, além de organizar tarefas pendentes e concluídas. ' },
  ],

  /* --- MINHA JORNADA DE APRENDIZADO --- */
  journey: [
    { period: 'Maio/2026 - Julho/2026', title: 'Desenvolvimento Web', concepts: ['HTML, CSS'], goals: 'Construção de landing Pages leves, fáceis de entender e de continuar modificando.', notes: 'Base dos Projetos - Coffee e Portfólio' },
    { period: 'Julho/2026 - Agosto/2026', title: 'Entrada no JavaScript', concepts: ['Java Script'], goals: 'Compreensão e a lógica por trás das funcionalidades.', notes: 'Base dos Projetos - Lista de Tarefas e Gerador de Senhas' },
    { period: 'Agosto/2026 - Setembro/2026', title: 'Primeiros Projetos e Aplicações', concepts: ['Java Script, HTML e CSS'], goals: 'Sair da teoria e praticar programação.', notes: 'Base dos Projetos - Controle de Estoque e Lista de Tarefas 2' },
    { period: 'Setembro/2026 - Outubro/2026', title: 'Começando no React', concepts: ['React, Java Script'], goals: 'Aprender a construir interfaces e aplicações utilizando componentes.', notes: 'Base do Projeto (App) - Resolve Aqui' },
  ],
  

  /* --- MEUS CONTATOS ---*/
  contacts: {
    email: 'eduardo.silva7324@gmail.com',
    whatsapp: '+55 (13) 99769-6135',
    github: 'https://github.com/EDX717',
    others: [
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/eduardo-silva-37a55b422/' }
    ],
  },
};

/* =========================================================
   2) HELPERS
   ========================================================= */

/** Cria um elemento. props: class, text, attrs{} — textos sempre via textContent. */
function h(tag, props = {}, ...children) {
  const node = document.createElement(tag);
  if (props.class) node.className = props.class;
  if (props.text) node.textContent = props.text;
  if (props.attrs) {
    Object.entries(props.attrs).forEach(([k, v]) => node.setAttribute(k, v));
  }
  children.flat().forEach((c) => c && node.append(c));
  return node;
}

/** Aceita apenas http(s) e mailto. */
function safeUrl(url) {
  try {
    const u = new URL(url, window.location.href);
    return ['http:', 'https:', 'mailto:'].includes(u.protocol) ? u.href : null;
  } catch {
    return null;
  }
}

const isFilled = (arr) => Array.isArray(arr) && arr.length > 0;
const $ = (sel) => document.querySelector(sel);

/** Marca um elemento para a animação de entrada com atraso escalonado. */
function reveal(node, index = 0) {
  node.classList.add('reveal');
  node.style.setProperty('--i', Math.min(index, 8));
  return node;
}

/** Item de lista puramente decorativo (placeholder) com rótulo acessível. */
function placeholderItem(tag, className, label, ...children) {
  return h(tag, { class: className, attrs: { 'aria-label': label } }, ...children);
}

/* =========================================================
   3) RENDERIZAÇÃO
   ========================================================= */

/* --- Foto (Início) --- */
function renderPhoto() {
  const frame = $('#hero-photo');
  if (!SITE.photo) return;
  const url = safeUrl(SITE.photo);
  if (!url) return;
  const img = h('img', {
    attrs: { src: url, alt: 'Foto de perfil', width: '760', height: '1013', decoding: 'async', fetchpriority: 'high' },
  });
  frame.replaceChildren(img);
}

/* --- Sobre mim --- */
function renderAbout() {
  const fill = (target, paragraphs, hint) => {
    if (isFilled(paragraphs)) {
      target.replaceChildren(...paragraphs.map((p) => h('p', { text: p })));
    } else {
      target.replaceChildren(
        h('span', { class: 'ph-line', attrs: { 'aria-hidden': 'true' } }),
        h('span', { class: 'ph-line', attrs: { 'aria-hidden': 'true' } }),
        h('span', { class: 'ph-line', attrs: { 'aria-hidden': 'true' } }),
        h('p', { class: 'ph-note', text: hint })
      );
    }
  };
  fill($('#about-story'), SITE.about.story, '// espaço reservado para a sua história');
  fill($('#about-interests'), SITE.about.interests, '// espaço reservado para interesses e objetivos');
}

/* --- Tecnologias --- */
function renderTechnologies() {
  const grid = $('#tech-grid');
  const items = SITE.technologies;

  if (isFilled(items)) {
    grid.replaceChildren(
      ...items.map((t, i) =>
        reveal(
          h('li', { class: 'card' },
            h('div', { class: 'card-head' },
              h('span', { class: 'card-icon', text: t.icon || '{ }', attrs: { 'aria-hidden': 'true' } }),
              t.level ? h('span', { class: 'badge', text: t.level }) : null
            ),
            h('h3', { class: 'card-title', text: t.name }),
            t.description ? h('p', { class: 'card-text', text: t.description }) : null
          ),
          i
        )
      )
    );
    return;
  }

  grid.replaceChildren(
    ...Array.from({ length: 6 }, (_, i) =>
      reveal(
        placeholderItem('li', 'card is-placeholder', 'Espaço reservado para uma tecnologia',
          h('div', { class: 'card-head' },
            h('span', { class: 'card-icon', text: '+', attrs: { 'aria-hidden': 'true' } })
          ),
          h('h3', { class: 'card-title', text: 'Tecnologia', attrs: { 'aria-hidden': 'true' } }),
          h('p', { class: 'card-text', text: 'Breve descrição aparece aqui.', attrs: { 'aria-hidden': 'true' } })
        ),
        i
      )
    )
  );
}

/* --- Projetos --- */
function renderProjects() {
  const grid = $('#projects-grid');
  const items = SITE.projects;

  const phCard = (label, i) =>
    reveal(
      placeholderItem('li', 'card is-placeholder', label,
        h('div', { class: 'card-media is-placeholder', text: '+', attrs: { 'aria-hidden': 'true' } }),
        h('h3', { class: 'card-title', text: 'Nome do projeto', attrs: { 'aria-hidden': 'true' } }),
        h('p', { class: 'card-text', text: 'A descrição do projeto aparece aqui.', attrs: { 'aria-hidden': 'true' } }),
        h('div', { class: 'tags', attrs: { 'aria-hidden': 'true' } },
          h('span', { class: 'tag is-ph', text: 'tecnologias' })
        ),
        h('div', { class: 'card-links', attrs: { 'aria-hidden': 'true' } },
          h('span', { class: 'is-ph', text: 'demo ↗' }),
          h('span', { class: 'is-ph', text: 'github ↗' })
        )
      ),
      i
    );

  if (!isFilled(items)) {
    grid.replaceChildren(...Array.from({ length: 3 }, (_, i) => phCard('Espaço reservado para um projeto futuro', i)));
    return;
  }

  const cards = items.map((p, i) => {
    const demo = p.demo && safeUrl(p.demo);
    const repo = p.repo && safeUrl(p.repo);
    const media = p.image && safeUrl(p.image)
      ? h('div', { class: 'card-media' },
        h('img', { attrs: { src: safeUrl(p.image), alt: `Captura de tela do projeto ${p.name}`, loading: 'lazy', decoding: 'async' } }))
      : h('div', { class: 'card-media is-placeholder', text: '</>', attrs: { 'aria-hidden': 'true' } });

    const links = [
      demo ? h('a', { text: 'Demonstração ↗', attrs: { href: demo, target: '_blank', rel: 'noopener noreferrer' } }) : null,
      repo ? h('a', { text: 'GitHub ↗', attrs: { href: repo, target: '_blank', rel: 'noopener noreferrer' } }) : null,
    ].filter(Boolean);

    return reveal(
      h('li', { class: 'card' },
        media,
        h('h3', { class: 'card-title', text: p.name }),
        p.description ? h('p', { class: 'card-text', text: p.description }) : null,
        isFilled(p.tags) ? h('div', { class: 'tags' }, p.tags.map((t) => h('span', { class: 'tag', text: t }))) : null,
        links.length ? h('div', { class: 'card-links' }, links) : null
      ),
      i
    );
  });

  
  grid.replaceChildren(...cards);
}

/* --- Jornada --- */
function renderJourney() {
  const list = $('#timeline');
  const items = SITE.journey;

  if (!isFilled(items)) {
    const row = (label, text) =>
      h('p', {}, h('span', { class: 'timeline-label', text: label }), document.createTextNode(text));
    list.replaceChildren(
      reveal(
        placeholderItem('li', 'timeline-item is-placeholder', 'Espaço reservado para o primeiro registro da jornada',
          h('p', { class: 'timeline-period', text: 'período de estudo', attrs: { 'aria-hidden': 'true' } }),
          h('h3', { class: 'timeline-title', text: 'Tecnologia estudada', attrs: { 'aria-hidden': 'true' } }),
          h('div', { class: 'timeline-body', attrs: { 'aria-hidden': 'true' } },
            row('Conceitos aprendidos', '—'),
            row('Objetivos de aprendizado', '—'),
            row('Observações', '—')
          )
        )
      )
    );
    return;
  }

  list.replaceChildren(
    ...items.map((j, i) =>
      reveal(
        h('li', { class: 'timeline-item' },
          j.period ? h('p', { class: 'timeline-period', text: j.period }) : null,
          h('h3', { class: 'timeline-title', text: j.title }),
          h('div', { class: 'timeline-body' },
            isFilled(j.concepts)
              ? h('div', {}, h('span', { class: 'timeline-label', text: 'Conceitos aprendidos' }),
                h('div', { class: 'tags' }, j.concepts.map((c) => h('span', { class: 'tag', text: c }))))
              : null,
            j.goals ? h('p', {}, h('span', { class: 'timeline-label', text: 'Objetivos de aprendizado' }), document.createTextNode(j.goals)) : null,
            j.notes ? h('p', {}, h('span', { class: 'timeline-label', text: 'Observações' }), document.createTextNode(j.notes)) : null
          )
        ),
        i
      )
    )
  );
}

/* --- Contato --- */
const ICONS = {
  mail: '<path d="M3 6h18v12H3z"/><path d="m3 7 9 6 9-6"/>',
  chat: '<path d="M4 5h16v11H9l-5 4z"/>',
  branch: '<circle cx="6" cy="5" r="2"/><circle cx="6" cy="19" r="2"/><circle cx="18" cy="9" r="2"/><path d="M6 7v10M18 11c0 4-6 3-12 6"/>',
  link: '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
};

function icon(name) {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('fill', 'none');
  svg.setAttribute('stroke', 'currentColor');
  svg.setAttribute('stroke-width', '1.6');
  svg.setAttribute('stroke-linecap', 'round');
  svg.setAttribute('stroke-linejoin', 'round');
  svg.setAttribute('class', 'contact-icon');
  svg.setAttribute('aria-hidden', 'true');
  svg.innerHTML = ICONS[name]; // conteúdo fixo definido acima, nunca vem do usuário
  return svg;
}

function renderContacts() {
  const list = $('#contact-list');
  const c = SITE.contacts;

  const row = (iconName, label, value, href, index) => {
    if (href) {
      const external = href.startsWith('http');
      return reveal(
        h('li', {},
          h('a', {
            class: 'contact-row',
            attrs: { href, ...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {}) },
          },
            icon(iconName),
            h('span', { class: 'contact-label', text: label }),
            h('span', { class: 'contact-value', text: value }),
            h('span', { class: 'contact-arrow', text: '↗', attrs: { 'aria-hidden': 'true' } })
          )
        ),
        index
      );
    }
    return reveal(
      h('li', {},
        h('div', { class: 'contact-row is-empty' },
          icon(iconName),
          h('span', { class: 'contact-label', text: label }),
          h('span', { class: 'contact-value', text: 'a definir' })
        )
      ),
      index
    );
  };

  const rows = [];
  rows.push(row('mail', 'E-mail', c.email, c.email ? safeUrl(`mailto:${c.email}`) : null, 0));

  const wa = (c.whatsapp || '').replace(/\D/g, '');
  rows.push(row('chat', 'WhatsApp', c.whatsapp, wa ? `https://wa.me/${wa}` : null, 1));

  const gh = c.github ? safeUrl(c.github) : null;
  rows.push(row('branch', 'GitHub', c.github.replace(/^https?:\/\//, ''), gh, 2));

  (c.others || []).forEach((o, i) => {
    const url = o.url && safeUrl(o.url);
    if (url) rows.push(row('link', o.label, o.url.replace(/^https?:\/\//, ''), url, 3 + i));
  });

  list.replaceChildren(...rows);
}

/* =========================================================
   4) INTERAÇÃO
   ========================================================= */

/* --- Menu mobile --- */
function initMenu() {
  const toggle = $('.nav-toggle');
  const nav = $('#primary-nav');
  const mq = window.matchMedia('(max-width: 900px)');

  const setOpen = (open, returnFocus = false) => {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    nav.classList.toggle('is-open', open);
    if (!open && returnFocus) toggle.focus();
  };

  toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
  nav.addEventListener('click', (e) => { if (e.target.closest('a')) setOpen(false); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) setOpen(false, true);
  });
  document.addEventListener('click', (e) => {
    if (nav.classList.contains('is-open') && !e.target.closest('.header-inner')) setOpen(false);
  });
  mq.addEventListener('change', () => setOpen(false));
}

/* --- Destaque da seção atual --- */
function initScrollSpy() {
  const links = [...document.querySelectorAll('[data-nav]')];
  const byId = new Map(links.map((a) => [a.getAttribute('href').slice(1), a]));
  const sections = [...byId.keys()].map((id) => document.getElementById(id)).filter(Boolean);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((a) => a.removeAttribute('aria-current'));
        byId.get(entry.target.id)?.setAttribute('aria-current', 'true');
      });
    },
    { rootMargin: '-45% 0px -50% 0px' }
  );
  sections.forEach((s) => observer.observe(s));
}

/* --- Animações de entrada --- */
function initReveal() {
  const targets = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    targets.forEach((t) => t.classList.add('is-visible'));
    return;
  }
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  targets.forEach((t) => observer.observe(t));
}

/* --- Inicialização --- */
function init() {
  renderPhoto();
  renderAbout();
  renderTechnologies();
  renderProjects();
  renderJourney();
  renderContacts();

  $('#year').textContent = new Date().getFullYear();

  initMenu();
  initScrollSpy();
  initReveal();
}


/* =========================================================
   5) IDIOMA — PORTUGUÊS / INGLÊS
   Traduz o conteúdo estático e dinâmico do portfólio.
   ========================================================= */

const TRADUCOES = {
  // Navegação e estrutura
  "Início": "Home",
  "Sobre": "About",
  "Sobre mim": "About me",
  "Tecnologias": "Technologies",
  "Tecnologias e habilidades": "Technologies and skills",
  "Projetos": "Projects",
  "Jornada": "Journey",
  "Minha jornada": "My journey",
  "Contato": "Contact",
  "Trabalhos": "Work",
  "Evolução": "Progress",
  "Stack": "Tech stack",
  "Idioma": "Language",
  "Navegação principal": "Main navigation",
  "Rodapé": "Footer",
  "Pular para o conteúdo": "Skip to content",
  "Ir para o início": "Go to home",
  "Voltar ao topo": "Back to top",
  "Abrir menu": "Open menu",
  "Fechar menu": "Close menu",
  "Selecionar idioma": "Select language",
  "Selecionar português": "Select Portuguese",
  "Select English": "Select English",

  // Início
  "Desenvolvedor de Software Júnior": "Junior Software Developer",
  "Construindo meu caminho na programação, uma linha de código por vez.":
    "Building my path in programming, one line of code at a time.",
  "Explorar projetos": "Explore projects",
  "Entrar em contato": "Get in touch",
  "Role para continuar": "Scroll to continue",
  "// sua foto aqui": "// your photo here",
  "Foto de perfil": "Profile photo",

  // Sobre mim
  "Minha história": "My story",
  "Interesses e objetivos": "Interests and goals",
  "Sou desenvolvedor de software em formação. A programação está no centro da minha rotina: reservo blocos fixos do dia para estudar e para construir projetos de verdade.":
    "I am a software developer in training. Programming is at the center of my routine: I set aside dedicated time to study and build real projects.",
  "Trabalho principalmente com HTML, CSS e JavaScript puros. Em alguns projetos também uso React no front-end.":
    "I mainly work with plain HTML, CSS, and JavaScript. I also use React for front-end development in some projects.",
  "Além do código, Estudo inglês e Matemática todos os dias e reservo um tempo para eu tocar teclado.":
    "Besides coding, I study English and Mathematics every day and set aside time to play the keyboard.",
  "Gosto de interfaces simples e bem cuidadas, Utilizo ferramentas de IA que ajudam no meu dia a dia para analizar meus códigos e apontar meus erros.":
    "I like simple, well-crafted interfaces. I use AI tools in my daily routine to analyze my code and identify errors.",
  "Meu objetivo é evoluir como desenvolvedor, publicar o que construo e transformar o que aprendo em produtos e serviços úteis.":
    "My goal is to grow as a developer, publish what I build, and turn what I learn into useful products and services.",
  "Pretendo trabalhar em uma empresa de tecnologia e aplicar meus conhecimentos no futuro.":
    "I intend to work at a technology company and apply my knowledge in the future.",

  // Tecnologias
  "Estrutura semântica e acessível das páginas dos meus projetos.":
    "Semantic and accessible structure for my project pages.",
  "Layouts responsivos, componentes e animações.":
    "Responsive layouts, components, and animations.",
  "Interatividade e lógica no navegador.":
    "Interactivity and browser logic.",
  "Interfaces organizadas em componentes reutilizáveis.":
    "Interfaces organized into reusable components.",

  // Projetos
  "Landing Page (Cafeteria)": "Coffee Shop Landing Page",
  "Landing page para uma cafeteria, com representação de cafés e produtos. Criada para transmitir conforto, destacar o cardápio e facilitar o contato com os clientes.":
    "A landing page for a coffee shop, showcasing coffee and other products. Designed to convey comfort, highlight the menu, and make it easier for customers to get in touch.",
  "Controle de Estoque": "Inventory Management",
  "Sistema de controle de estoque simples para organizar produtos e acompanhar quantidades disponíveis.":
    "A simple inventory management system for organizing products and tracking available quantities.",
  "Lista de Tarefas 1.0": "Task List 1.0",
  "Aplicação simples de lista de tarefas que permite adicionar e visualizar atividades do dia a dia, com foco na organização.":
    "A simple task list application for adding and viewing everyday activities, focused on organization.",
  "App (Resolve Aqui)": "Resolve Aqui App",
  "Aplicativo que conecta clientes a profissionais prestadores de serviços, facilitando a busca por soluções na região. Com uma interface simples e intuitiva.":
    "An app that connects customers with service providers, making it easier to find local solutions through a simple, intuitive interface.",
  "Gerador de Senha": "Password Generator",
  "Aplicação que gera senhas aleatórias e personalizáveis, permitindo definir o comprimento e incluir letras maiúsculas, números e símbolos.":
    "An application that generates customizable random passwords, allowing users to choose the length and include uppercase letters, numbers, and symbols.",
  "Lista de Tarefas 2.0": "Task List 2.0",
  "Versão aprimorada da lista de tarefas, com recursos para adicionar, concluir, editar e excluir atividades, além de organizar tarefas pendentes e concluídas. ":
    "An improved task list with features to add, complete, edit, and delete activities, as well as organize pending and completed tasks.",
  "Demonstração ↗": "Live demo ↗",
  "GitHub ↗": "GitHub ↗",
  "Captura de tela do projeto Landing Page (Cafeteria)":
    "Screenshot of the Coffee Shop Landing Page project",
  "Captura de tela do projeto Controle de Estoque":
    "Screenshot of the Inventory Management project",
  "Captura de tela do projeto Lista de Tarefas 1.0":
    "Screenshot of the Task List 1.0 project",
  "Captura de tela do projeto Gerador de Senha":
    "Screenshot of the Password Generator project",
  "Captura de tela do projeto Lista de Tarefas 2.0":
    "Screenshot of the Task List 2.0 project",

  // Jornada de aprendizado
  "Desenvolvimento Web": "Web Development",
  "Construção de landing Pages leves, fáceis de entender e de continuar modificando.":
    "Building lightweight landing pages that are easy to understand and maintain.",
  "Base dos Projetos - Coffee e Portfólio":
    "Projects: Coffee Shop and Portfolio",
  "Entrada no JavaScript": "Getting Started with JavaScript",
  "Compreensão e a lógica por trás das funcionalidades.":
    "Understanding the logic behind application features.",
  "Base dos Projetos - Lista de Tarefas e Gerador de Senhas":
    "Projects: Task List and Password Generator",
  "Primeiros Projetos e Aplicações": "First Projects and Applications",
  "Sair da teoria e praticar programação.":
    "Moving beyond theory and practicing programming.",
  "Base dos Projetos - Controle de Estoque e Lista de Tarefas 2":
    "Projects: Inventory Management and Task List 2",
  "Começando no React": "Getting Started with React",
  "Aprender a construir interfaces e aplicações utilizando componentes.":
    "Learning to build interfaces and applications using components.",
  "Base do Projeto (App) - Resolve Aqui":
    "Project: Resolve Aqui App",
  "Conceitos aprendidos": "Concepts learned",
  "Objetivos de aprendizado": "Learning objectives",
  "Observações": "Notes",
  "período de estudo": "study period",
  "Tecnologia estudada": "Technology studied",
  "Espaço reservado para o primeiro registro da jornada":
    "Placeholder for the first learning journey entry",

  // Estados vazios e placeholders
  "Espaço reservado para a sua história":
    "Placeholder for your story",
  "Espaço reservado para interesses e objetivos":
    "Placeholder for interests and goals",
  "Espaço reservado para uma tecnologia":
    "Placeholder for a technology",
  "Tecnologia": "Technology",
  "Breve descrição aparece aqui.":
    "A short description will appear here.",
  "Espaço reservado para um projeto futuro":
    "Placeholder for a future project",
  "Nome do projeto": "Project name",
  "A descrição do projeto aparece aqui.":
    "The project description will appear here.",
  "tecnologias": "technologies",
  "demo ↗": "demo ↗",
  "github ↗": "GitHub ↗",

  // Contato e rodapé
  "Vamos conversar": "Let's talk",
  "Os canais abaixo aparecem aqui assim que forem cadastrados.":
    "The contact channels below will appear once they have been configured.",
  "E-mail": "Email",
  "WhatsApp": "WhatsApp",
  "GitHub": "GitHub",
  "LinkedIn": "LinkedIn",
  "a definir": "To be defined",
  "// aprender, construir, repetir.":
    "// learn, build, repeat.",

  // Meses usados nas datas da jornada
  "Maio": "May",
  "Julho": "July",
  "Agosto": "August",
  "Setembro": "September",
  "Outubro": "October"
};

const ATRIBUTOS_TRADUZIVEIS = [
  "aria-label",
  "alt",
  "title",
  "placeholder"
];

// Guarda o conteúdo original uma única vez.
// Isso permite alternar entre os idiomas sem perder os textos.
const textosOriginais = [];
const atributosOriginais = [];

function guardarConteudoOriginal() {
  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT
  );

  let node;

  while ((node = walker.nextNode())) {
    textosOriginais.push({
      node,
      original: node.nodeValue
    });
  }

  document.querySelectorAll("*").forEach((elemento) => {
    ATRIBUTOS_TRADUZIVEIS.forEach((atributo) => {
      if (elemento.hasAttribute(atributo)) {
        atributosOriginais.push({
          elemento,
          atributo,
          original: elemento.getAttribute(atributo)
        });
      }
    });
  });
}

function traduzirTexto(texto) {
  const limpo = texto.trim();

  if (!limpo) return texto;

  // Traduz o conteúdo sem alterar os espaços originais.
  if (TRADUCOES[limpo]) {
    return texto.replace(limpo, TRADUCOES[limpo]);
  }

  // Traduz os períodos da jornada preservando os anos.
  if (limpo.includes(" - ")) {
    let traduzido = limpo;

    Object.entries(TRADUCOES).forEach(([pt, en]) => {
      traduzido = traduzido.replaceAll(pt, en);
    });

    if (traduzido !== limpo) {
      return texto.replace(limpo, traduzido);
    }
  }

  return texto;
}

function aplicarIdiomaPortfolio(idioma) {
  const ingles = idioma === "en";

  // Restaura todos os textos originais antes de traduzir.
  textosOriginais.forEach(({ node, original }) => {
    if (node.isConnected) {
      node.nodeValue = original;
    }
  });

  atributosOriginais.forEach(({ elemento, atributo, original }) => {
    if (elemento.isConnected) {
      elemento.setAttribute(atributo, original);
    }
  });

  if (ingles) {
    textosOriginais.forEach(({ node, original }) => {
      if (node.isConnected) {
        node.nodeValue = traduzirTexto(original);
      }
    });

    atributosOriginais.forEach(({ elemento, atributo, original }) => {
      if (elemento.isConnected) {
        elemento.setAttribute(atributo, traduzirTexto(original));
      }
    });

    document.documentElement.lang = "en";
    document.title = "Portfolio — Junior Software Developer";

    document.querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        "Portfolio of a software developer in training."
      );
  } else {
    document.documentElement.lang = "pt-BR";
    document.title = "Portfólio — Desenvolvedor Web";

    document.querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        "Portfólio de desenvolvedor web em evolução."
      );
  }

  // Mantém os dois seletores sincronizados.
  document.querySelectorAll(".lang-btn").forEach((button) => {
    const ativo = button.dataset.lang === idioma;

    button.setAttribute("aria-pressed", String(ativo));
  });

  // Atualiza também o rótulo acessível do menu mobile.
  document.querySelector(".nav-toggle")
    ?.setAttribute(
      "aria-label",
      ingles ? "Open menu" : "Abrir menu"
    );

  try {
    localStorage.setItem("portfolio-language", idioma);
  } catch {
    // O site continua funcionando mesmo sem armazenamento local.
  }
}

init();

// Inicializa depois de renderizar todas as seções do site.
guardarConteudoOriginal();

let idiomaInicial = "pt";

try {
  idiomaInicial =
    localStorage.getItem("portfolio-language") === "en"
      ? "en"
      : "pt";
} catch {
  idiomaInicial = "pt";
}

document.querySelectorAll(".lang-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const idioma = button.dataset.lang;

    if (idioma === "pt" || idioma === "en") {
      aplicarIdiomaPortfolio(idioma);
    }
  });
});

aplicarIdiomaPortfolio(idiomaInicial);


