const translations = {
  pt: {
    skip: 'Pular para o conteúdo', navProjects: 'Projetos', navExpertise: 'Áreas de atuação', navContact: 'Contato', portfolio: 'PORTFÓLIO · ALEXANDRE MELO',
    role: 'Customer Service | Technical Support | Implantation | WhatsApp Business API | IA',
    intro: 'Ajudo empresas a implementar sistemas, estruturar operações, solucionar problemas técnicos, integrar plataformas e aumentar a eficiência com automação, WhatsApp Business Plataforms e Inteligência Artificial.',
    seeProjects: 'Conheça meus projetos', talk: 'Vamos conversar', artAI: 'IA & Automação', tools: 'Principais Ferramentas:', genAI: 'IA Generativa', practice: '01 / NA PRÁTICA', projectsTitle: 'Projetos e Experiências Práticas', projectsNote: 'Tecnologia aplicada a desafios reais.', expertiseEyebrow: '02 / COMO POSSO CONTRIBUIR', expertiseTitle: 'Principais áreas',
    area1: 'Implantação, configuração, troubleshooting e acompanhamento de operações de mensageria.', area2Title: 'Implantação e Technical Support', area2: 'APIs, Webhooks, integrações, investigação de incidentes e resolução de problemas.', area3: 'Agentes de IA, automação de processos e melhoria da eficiência operacional.', area4: 'Experiência do cliente, CSAT, SLA e melhoria contínua da operação.',
    certEyebrow: '03 / CONHECIMENTO', certTitle: 'Certificações', google: 'Google — Suporte em TI', contactEyebrow: 'VAMOS CONSTRUIR O PRÓXIMO PASSO', contactTitle: 'Vamos trabalhar juntos?', contactText: 'Posso ajudar sua empresa a alcançar melhores resultados, processos mais eficientes e uma experiência mais consistente para clientes e equipes, unindo visão analítica, tecnologia, comunicação e resolução de problemas.', footer: 'Tecnologia, pessoas e possibilidades.', top: 'Voltar ao topo ↑', details: 'Explorar experiência', view: 'Ver projeto', title: 'Alexandre Melo — Portfólio', description: 'Portfólio de Alexandre Melo: Customer Service, suporte técnico, WhatsApp Business Platform, IA e automação.'
  },
  en: {
    skip: 'Skip to content', navProjects: 'Projects', navExpertise: 'Expertise', navContact: 'Contact', portfolio: 'PORTFOLIO · ALEXANDRE MELO',
    role: 'Customer Service | Technical Support | Implementation | WhatsApp Business API | AI',
    intro: 'I help companies implement systems, structure operations, solve technical problems, integrate platforms, and increase efficiency through automation, WhatsApp Business Platforms, and Artificial Intelligence.',
    seeProjects: 'Explore my projects', talk: 'Let’s talk', artAI: 'AI & Automation', tools: 'Key Tools:', genAI: 'Generative AI', practice: '01 / IN PRACTICE', projectsTitle: 'Projects & Hands-on Experience', projectsNote: 'Technology applied to real challenges.', expertiseEyebrow: '02 / HOW I CAN CONTRIBUTE', expertiseTitle: 'Core expertise',
    area1: 'Implementation, configuration, troubleshooting, and monitoring of messaging operations.', area2Title: 'Implementation & Technical Support', area2: 'APIs, Webhooks, integrations, incident investigation, and problem resolution.', area3: 'AI agents, process automation, and improvements in operational efficiency.', area4: 'Customer experience, CSAT, SLA, and continuous operational improvement.',
    certEyebrow: '03 / KNOWLEDGE', certTitle: 'Certifications', google: 'Google — IT Support', contactEyebrow: 'LET’S BUILD THE NEXT STEP', contactTitle: 'Let’s work together.', contactText: 'I can help your company achieve better results, more efficient processes, and a more consistent experience for customers and teams by combining analytical thinking, technology, communication, and problem-solving.', footer: 'Technology, people, and possibilities.', top: 'Back to top ↑', details: 'Explore experience', view: 'View project', title: 'Alexandre Melo — Portfolio', description: 'Alexandre Melo’s portfolio: Customer Service, technical support, WhatsApp Business Platform, AI, and automation.'
  }
};

// Each project keeps the original Portuguese content and its English translation together.
const projects = [
  {
    id: 'whatsapp', art: '<div class="chat-bubble">···</div>', label: 'BUSINESS MESSAGING',
    pt: { title: 'Implantação de WhatsApp Business API', tags: ['WhatsApp Business', 'Meta', 'Implantação'], intro: 'Atuo diretamente na implantação e suporte de operações utilizando WhatsApp Business Platform, acompanhando clientes durante diferentes etapas do processo.', blocks: [
      ['p', 'Minha experiência envolve desde a preparação dos ativos necessários até a resolução de problemas que podem impedir a ativação ou o funcionamento correto da operação.'],
      ['h4', 'Atuação'], ['ul', ['Implantação de números na WhatsApp Business Platform;', 'configuração e gerenciamento de ativos no Meta Business Manager;', 'apoio em processos de verificação e ativação;', 'cadastro e configuração de números;', 'análise de problemas de integração e funcionamento;', 'suporte relacionado a templates e mensageria;', 'acompanhamento de clientes durante toda a implantação;', 'abertura e acompanhamento de chamados junto à Meta;', 'troubleshooting de problemas técnicos;', 'orientação sobre boas práticas de uso da plataforma.']],
      ['p', 'Além da parte técnica, também atuo traduzindo processos complexos em orientações mais claras para o cliente, facilitando a implantação e reduzindo atritos durante a configuração.'], ['h4', 'Conhecimentos relacionados'], ['p', 'WhatsApp Business Platform · WhatsApp Business API · Meta Business Manager · Business Messaging · Templates · APIs · Webhooks · Integrações · Troubleshooting'], ['p', '🎓 Meta Certified Business Messaging Strategy']
    ]},
    en: { title: 'WhatsApp Business API Implementation', tags: ['WhatsApp Business', 'Meta', 'Implementation'], intro: 'I work directly on implementing and supporting operations using WhatsApp Business Platform, guiding customers through different stages of the process.', blocks: [
      ['p', 'My experience ranges from preparing the required assets to resolving issues that may prevent activation or the proper functioning of the operation.'], ['h4', 'Responsibilities'], ['ul', ['Implementing phone numbers on WhatsApp Business Platform;', 'configuring and managing assets in Meta Business Manager;', 'supporting verification and activation processes;', 'registering and configuring phone numbers;', 'analyzing integration and operational issues;', 'providing support for templates and messaging;', 'guiding customers throughout implementation;', 'opening and tracking support tickets with Meta;', 'troubleshooting technical issues;', 'advising on platform best practices.']], ['p', 'Beyond the technical work, I also translate complex processes into clearer guidance for customers, making implementation easier and reducing friction during setup.'], ['h4', 'Related knowledge'], ['p', 'WhatsApp Business Platform · WhatsApp Business API · Meta Business Manager · Business Messaging · Templates · APIs · Webhooks · Integrations · Troubleshooting'], ['p', '🎓 Meta Certified Business Messaging Strategy']
    ]}
  },
  {
    id: 'lumi', art: '<div class="cover-glyph lumi-star">✳</div>', label: 'HUGGATHON · 2025',
    pt: { title: 'Lumi — Hackaton de Engenharia', tags: ['Troféu de Ouro · 2025', 'Prêmio', 'Desenvolvimento'], intro: 'No Hackathon de Engenharia, minha equipe desenvolveu uma proposta para redesenhar o onboarding da Huggy através da Lumi, um agente inteligente baseado em IA generativa.', blocks: [
      ['p', 'A solução foi pensada para:'], ['ul', ['acelerar a ativação do produto;', 'reduzir o early churn;', 'diminuir o Time to Value (TTV);', 'tornar o onboarding mais simples e inteligente.']], ['p', 'Como membro da equipe, participei da construção da solução trazendo a perspectiva de quem acompanha diariamente as dificuldades e barreiras enfrentadas pelos clientes.'], ['p', 'O projeto me permitiu unir visão de cliente, conhecimento técnico e criatividade na construção de uma solução com impacto direto no produto.'], ['h4', 'Resultado:'], ['p', '🏆 Troféu de Ouro no Huggathon de Engenharia.']
    ]},
    en: { title: 'Lumi — Engineering Hackathon', tags: ['Gold Trophy · 2025', 'Award', 'Development'], intro: 'At the Engineering Hackathon, my team developed a proposal to redesign Huggy’s onboarding through Lumi, an intelligent agent powered by generative AI.', blocks: [
      ['p', 'The solution was designed to:'], ['ul', ['accelerate product activation;', 'reduce early churn;', 'shorten Time to Value (TTV);', 'make onboarding simpler and smarter.']], ['p', 'As a team member, I helped build the solution by bringing the perspective of someone who works daily with the challenges and barriers customers face.'], ['p', 'The project allowed me to combine customer insight, technical knowledge, and creativity to build a solution with a direct impact on the product.'], ['h4', 'Result:'], ['p', '🏆 Gold Trophy at the Engineering Huggathon.']
    ]}
  },
  {
    id: 'ai', art: '<div class="ai-flow"><b>↔</b><span>—</span><b>✳</b><span>—</span><b>✓</b></div>', label: 'CUSTOMER SERVICE · AI',
    pt: { title: 'Suporte com Agente de IA', tags: ['AI', 'Desenvolvimento', 'Huggy'], intro: 'Implantei uma operação de suporte automatizado utilizando um agente de IA dentro da plataforma Huggy, com o objetivo de automatizar atendimentos mais simples e reduzir o volume direcionado aos analistas humanos.', blocks: [
      ['h4', 'IA aplicada à operação de Customer Service'], ['p', 'A estrutura buscava direcionar:'], ['p', 'Dúvidas recorrentes → Agente de IA'], ['p', 'Casos complexos → Analistas humanos'], ['p', 'Com isso, o time passou a concentrar mais esforço em demandas que realmente exigiam investigação, análise e tomada de decisão.'], ['p', 'Minha atuação envolveu:'], ['ul', ['organização da operação com IA;', 'análise dos atendimentos do agente;', 'identificação de erros e oportunidades de melhoria;', 'acompanhamento dos escalonamentos;', 'avaliação da qualidade das respostas;', 'melhoria contínua dos fluxos.']]
    ]},
    en: { title: 'AI Agent Support', tags: ['AI', 'Development', 'Huggy'], intro: 'I implemented an automated support operation using an AI agent within the Huggy platform to automate simpler inquiries and reduce the volume routed to human analysts.', blocks: [
      ['h4', 'AI applied to Customer Service operations'], ['p', 'The structure aimed to route:'], ['p', 'Recurring questions → AI agent'], ['p', 'Complex cases → Human analysts'], ['p', 'This allowed the team to focus more effort on requests that truly required investigation, analysis, and decision-making.'], ['p', 'My responsibilities included:'], ['ul', ['organizing the AI-powered operation;', 'analyzing the agent’s interactions;', 'identifying errors and opportunities for improvement;', 'monitoring escalations;', 'evaluating response quality;', 'continuously improving workflows.']]
    ]}
  },
  {
    id: 'dashboard', art: '<div class="mini-chart"><i></i><i></i><i></i><i></i><i></i></div>', label: 'DATA · INSIGHTS', url: 'https://alexandrebmelo.github.io/Dashboard-com-IA/',
    pt: { title: 'Customer Service Dashboard', tags: ['Dados', 'IA', 'Vibe Coding'], intro: 'Desenvolvi um dashboard para análise de operações de Customer Service utilizando IA e vibe coding.', blocks: [
      ['h4', 'Dados + IA + Vibe Coding'], ['p', 'O objetivo foi transformar dados de atendimento em uma visualização mais simples para acompanhar indicadores de qualidade e eficiência operacional.'], ['p', 'O dashboard reúne análises relacionadas a:'], ['ul', ['volume de atendimentos;', 'resolução por IA;', 'escalonamentos para humanos;', 'qualidade dos atendimentos;', 'erros e inconsistências;', 'CSAT;', 'desempenho operacional.']]
    ]},
    en: { title: 'Customer Service Dashboard', tags: ['Data', 'AI', 'Vibe Coding'], intro: 'I developed a dashboard for analyzing Customer Service operations using AI and vibe coding.', blocks: [
      ['h4', 'Data + AI + Vibe Coding'], ['p', 'The goal was to turn customer service data into a simpler visualization for tracking quality and operational efficiency indicators.'], ['p', 'The dashboard brings together analyses related to:'], ['ul', ['interaction volume;', 'AI resolution;', 'escalations to humans;', 'service quality;', 'errors and inconsistencies;', 'CSAT;', 'operational performance.']]
    ]}
  }
];

function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function renderProjects(lang) {
  const grid = document.getElementById('project-grid');
  const expanded = new Set([...grid.querySelectorAll('details[open]')].map(item => item.id));
  const fragment = document.createDocumentFragment();
  projects.forEach((project, index) => {
    const content = project[lang];
    const card = element('article', 'project');
    const cover = element('div', `project-cover cover-${project.id}`);
    cover.setAttribute('aria-hidden', 'true');
    cover.innerHTML = project.art;
    cover.append(element('span', 'cover-kicker', project.label), element('span', 'cover-number', `0${index + 1} / AM`));
    const body = element('div', 'project-body');
    const tags = element('div', 'tags');
    content.tags.forEach(tag => tags.append(element('span', 'tag', tag)));
    const details = element('details');
    details.id = `detail-${project.id}`;
    details.open = expanded.has(details.id);
    const summary = element('summary', '', translations[lang].details);
    summary.setAttribute('aria-label', `${translations[lang].details}: ${content.title}`);
    const detailBody = element('div', 'project-details');
    content.blocks.forEach(([type, value]) => {
      const block = element(type);
      if (type === 'ul') value.forEach(item => block.append(element('li', '', item)));
      else block.textContent = value;
      detailBody.append(block);
    });
    if (project.url) {
      const link = element('a', 'button primary', `${translations[lang].view} ↗`);
      link.href = project.url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      detailBody.append(link);
    }
    details.append(summary, detailBody);
    body.append(tags, element('h3', '', content.title), element('p', 'project-intro', content.intro), details);
    card.append(cover, body);
    fragment.append(card);
  });
  grid.replaceChildren(fragment);
}

function setLanguage(lang) {
  if (!translations[lang]) lang = 'pt';
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  document.title = translations[lang].title;
  document.querySelector('meta[name="description"]').content = translations[lang].description;
  document.querySelector('[data-nav]').setAttribute('aria-label', lang === 'pt' ? 'Navegação principal' : 'Main navigation');
  document.querySelectorAll('[data-i18n]').forEach(node => { node.textContent = translations[lang][node.dataset.i18n]; });
  document.querySelectorAll('[data-lang]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.lang === lang)));
  renderProjects(lang);
  try { localStorage.setItem('portfolio-language', lang); } catch { /* Works when browser storage is unavailable. */ }
}

let initialLanguage = 'pt';
try { initialLanguage = localStorage.getItem('portfolio-language') || 'pt'; } catch { /* Portuguese is the default. */ }
setLanguage(initialLanguage);
document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
document.getElementById('year').textContent = new Date().getFullYear();
