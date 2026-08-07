export const personal = {
  name: "João Victor Vieira",
  fullName: "João Victor Tobias Vieira",
  role: "Analista de Sistemas · Desenvolvedor Full Stack · IA & Automação",
  location: "Curitiba, PR — Brasil",
  email: "jvictoratv@gmail.com",
  phone: "+55 (49) 99127-0949",
  whatsapp: "https://wa.me/5549991270949?text=Ol%C3%A1%2C%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar.",
  linkedin: "https://www.linkedin.com/in/joao-vieira-1a8360161/",
  // TODO: substitua pelo seu usuário real do GitHub
  github: "https://github.com/",
  resumePdf: "/curriculo-joao-victor-vieira.pdf",
  summary:
    "Analista de Sistemas e Desenvolvedor Full Stack com experiência sólida em aplicações corporativas, integração de sistemas, automação de processos, Business Intelligence e Inteligência Artificial aplicada. Atuo no ciclo completo de desenvolvimento — de APIs a agentes de IA — com Python, JavaScript, Node.js, React, Next.js e PostgreSQL.",
  highlights: [
    { label: "Usuários atendidos por sistemas implantados", value: "100+" },
    { label: "Colaboradores usando dashboards executivos", value: "200+" },
    { label: "Horas semanais economizadas com automação", value: "60h" },
    { label: "Ativos industriais sob gestão", value: "5.000+" },
  ],
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  current?: boolean;
  responsibilities: string[];
  stack: string[];
  outcomes: string[];
};

export const experiences: Experience[] = [
  {
    company: "ATI Brasil",
    role: "Analista de Desenvolvimento de Sistemas e Processos",
    period: "06/2026 — Atual",
    current: true,
    stack: ["Python", "Node.js", "React", "Next.js", "PostgreSQL", "MySQL", "n8n", "OpenAI", "Gemini", "Claude"],
    responsibilities: [
      "Desenvolvimento de sistemas completos utilizando Python, Node.js, React, Next.js, PostgreSQL e MySQL.",
      "Criação de APIs REST e integração entre sistemas corporativos, bancos de dados e ERP Korp.",
      "Desenvolvimento da plataforma comercial JIE BNAMIQ (jie-bnamiq.com).",
      "Desenvolvimento de sistema inteligente para consulta automática de estoque e orçamento.",
      "Desenvolvimento de agentes de IA utilizando OpenAI, Gemini, Claude e n8n.",
      "Implantação de bots para atendimento, suporte, abertura automática de chamados e roteamento.",
    ],
    outcomes: [
      "Soluções em produção utilizadas por aproximadamente 100 usuários, com arquitetura preparada para expansão.",
    ],
  },
  {
    company: "Guararapes Painéis",
    role: "Especialista / Analista PCM",
    period: "01/2020 — 04/2026",
    stack: ["Python", "TOTVS", "Power BI", "Excel VBA", "Power Automate", "Telegram API", "MS Project"],
    responsibilities: [
      "Planejamento de mais de 100 paradas industriais envolvendo equipes de até 350 profissionais.",
      "Gestão de orçamento anual superior a R$ 50 milhões e mais de 5.000 ativos.",
      "Criação de dashboards executivos utilizados pela diretoria e por mais de 200 colaboradores.",
      "Automações em Python integradas ao TOTVS e Telegram.",
      "Apresentação de indicadores estratégicos de manutenção e produtividade.",
    ],
    outcomes: [
      "Automações economizaram cerca de 60 horas semanais de trabalho manual.",
      "Dashboards executivos adotados como referência de monitoramento pela diretoria.",
    ],
  },
  {
    company: "One Float (Freelance)",
    role: "Desenvolvedor Full Stack",
    period: "08/2020 — 08/2023",
    stack: ["Node.js", "TypeScript", "React", "Next.js", "Python", "Django", "Laravel", "PostgreSQL", "MySQL", "Docker"],
    responsibilities: [
      "Desenvolvimento de aplicações web, sistemas corporativos e plataformas digitais para clientes de diferentes segmentos.",
      "Atuação em todo o ciclo de desenvolvimento: levantamento de requisitos, arquitetura, implantação e manutenção.",
      "Desenvolvimento de APIs REST e integrações entre sistemas com Node.js, React, Next.js, Python (Django) e Laravel.",
      "Modelagem, desenvolvimento e otimização de bancos de dados PostgreSQL e MySQL.",
      "Uso de Docker, Git e GitHub para conteinerização, versionamento e colaboração em equipe.",
    ],
    outcomes: [
      "Entregas seguindo metodologias ágeis, com foco em escalabilidade, desempenho e qualidade de código.",
    ],
  },
];

export type Project = {
  slug: string;
  name: string;
  category: string;
  description: string;
  problem: string;
  solution: string;
  stack: string[];
  results?: string;
  github?: string;
  demo?: string;
  needsDetail?: boolean;
};

export const projects: Project[] = [
  {
    slug: "jie-bnamiq",
    name: "Plataforma JIE BNAMIQ",
    category: "Full Stack / Web Comercial",
    description:
      "Sistema web completo para configuração de produtos industriais e integração comercial da joint venture JIE BNAMIQ.",
    problem:
      "A marca precisava de uma plataforma institucional e comercial capaz de apresentar um catálogo técnico complexo (motorredutores, planetários, inversores) de forma clara para engenheiros e compradores industriais.",
    solution:
      "Desenvolvimento completo do site com Next.js e TypeScript, incluindo sidebar de navegação expansível, catálogo de produtos por família técnica, páginas de segmentos de atuação e fluxo de contato/orçamento integrado ao WhatsApp.",
    stack: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion", "Vercel"],
    results: "Plataforma em produção, usada como principal canal comercial digital da marca.",
    demo: "https://jie-bnamiq.com",
  },
  {
    slug: "estoque-inteligente",
    name: "Sistema Inteligente de Estoque",
    category: "Integração / ERP",
    description:
      "Integração com o ERP Korp para consulta automática de estoque e geração de orçamento por equipes comerciais.",
    problem:
      "Consultas de estoque e montagem de orçamentos dependiam de processos manuais no ERP, tornando o atendimento comercial mais lento.",
    solution:
      "API de integração com o ERP Korp, expondo consulta de estoque em tempo real e composição automática de orçamentos para a equipe comercial.",
    stack: ["Python", "Node.js", "APIs REST", "PostgreSQL", "ERP Korp"],
    results: "Redução no tempo de resposta comercial e eliminação de consultas manuais repetitivas no ERP.",
  },
  {
    slug: "dashboard-executivo",
    name: "Dashboard Executivo Industrial",
    category: "Business Intelligence",
    description:
      "Painel de monitoramento 24x7 de produtividade e disponibilidade de ativos para diretoria e equipes de manutenção.",
    problem:
      "A diretoria e as equipes de PCM não tinham visibilidade em tempo real sobre disponibilidade de ativos e indicadores de manutenção de uma base de mais de 5.000 ativos.",
    solution:
      "Modelagem de dados de manutenção e construção de dashboards executivos em Power BI, com automações em Python para atualização contínua dos indicadores.",
    stack: ["Power BI", "Python", "Excel VBA", "TOTVS"],
    results: "Adotado por mais de 200 colaboradores e pela diretoria como principal ferramenta de acompanhamento.",
  },
  {
    slug: "assistente-ia-suporte",
    name: "Assistente de IA para Suporte",
    category: "Inteligência Artificial / Automação",
    description:
      "Agentes de IA para triagem de atendimento, suporte e abertura automática de chamados, com roteamento inteligente.",
    problem:
      "Abertura e triagem de chamados de suporte consumiam tempo da equipe técnica em tarefas repetitivas de primeiro atendimento.",
    solution:
      "Agentes construídos com OpenAI e orquestração via n8n, capazes de interpretar solicitações, abrir chamados automaticamente e rotear para a equipe correta.",
    stack: ["OpenAI", "n8n", "Prompt Engineering", "APIs REST"],
    results: "Automatização do primeiro nível de triagem de chamados e suporte.",
  },
  {
    slug: "bot-promocoes",
    name: "Bot de Promoções",
    category: "Automação",
    description: "Coleta automática de ofertas e envio programado para grupos de comunicação.",
    problem: "Monitoramento manual de promoções e ofertas era lento e inconsistente.",
    solution:
      "Rotina automatizada de coleta de ofertas com envio programado para grupos, eliminando o monitoramento manual.",
    stack: ["Python", "Automação", "APIs"],
  },
  {
    slug: "tcc-manutencao-genetico",
    name: "TCC — Otimização de Manutenção",
    category: "Pesquisa Acadêmica / Algoritmos",
    description: "ERP com algoritmo genético aplicado à alocação otimizada de recursos de manutenção.",
    problem:
      "Alocação manual de equipes e recursos de manutenção industrial não considerava otimização combinatória das restrições operacionais.",
    solution:
      "Módulo de ERP com algoritmo genético para otimizar a alocação de recursos de manutenção, desenvolvido como trabalho de conclusão de curso.",
    stack: ["Python", "Algoritmos Genéticos", "Banco de Dados"],
  },
  {
    slug: "tcc-machine-learning-mdf",
    name: "TCC — Machine Learning aplicado a MDF",
    category: "Pesquisa Acadêmica / Machine Learning",
    description: "Análise de chapas MDF e da influência de variáveis climáticas no processo produtivo.",
    problem:
      "Variações climáticas impactam a qualidade da produção de chapas MDF de forma difícil de correlacionar manualmente.",
    solution:
      "Modelo de machine learning para analisar dados de produção de chapas MDF e identificar a influência de variáveis climáticas no processo.",
    stack: ["Python", "Machine Learning", "Análise de Dados"],
  },
  {
    slug: "itasset-mvp",
    name: "ITAsset MVP",
    category: "Full Stack / Gestão de Ativos",
    description: "MVP de sistema de gestão de ativos, aplicando na prática a experiência de PCM com mais de 5.000 ativos.",
    problem:
      "Times de manutenção e TI precisam de visibilidade centralizada sobre o ciclo de vida, localização e status de ativos.",
    solution:
      "Modelagem de dados e construção de um MVP para cadastro, rastreamento e status de ativos, com foco em usabilidade para equipes operacionais.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "APIs REST"],
    needsDetail: true,
  },
  {
    slug: "rag-fastapi",
    name: "RAG com FastAPI",
    category: "Inteligência Artificial",
    description: "Serviço de Retrieval-Augmented Generation com FastAPI e banco de dados vetorial para respostas contextualizadas.",
    problem:
      "Respostas de modelos de linguagem genéricos não têm acesso a bases de conhecimento internas e específicas do negócio.",
    solution:
      "API em FastAPI que recupera contexto relevante em um banco vetorial e o injeta no prompt do modelo, gerando respostas fundamentadas em documentos reais.",
    stack: ["Python", "FastAPI", "Vector Databases", "Embeddings", "OpenAI"],
    needsDetail: true,
  },
  {
    slug: "conversor-duimp",
    name: "Conversor DUIMP XML",
    category: "Automação / Integração",
    description: "Ferramenta para conversão e validação de arquivos XML da Declaração Única de Importação (DUIMP).",
    problem:
      "Preenchimento e validação manual de dados aduaneiros em XML são propensos a erro e consomem tempo operacional.",
    solution:
      "Rotina de conversão e validação automatizada de arquivos XML da DUIMP, reduzindo o retrabalho manual do processo aduaneiro.",
    stack: ["Python", "XML", "Automação"],
    needsDetail: true,
  },
  {
    slug: "vr-monitor",
    name: "VR Monitor",
    category: "Monitoramento",
    description: "Sistema de monitoramento para acompanhamento de indicadores em tempo real.",
    problem: "Falta de visibilidade contínua sobre indicadores operacionais críticos.",
    solution: "Painel de monitoramento com atualização periódica dos indicadores acompanhados.",
    stack: ["Python", "Dashboards"],
    needsDetail: true,
  },
];

export type TechCategory = {
  category: string;
  items: { name: string; level: "Avançado" | "Intermediário" | "Básico" }[];
};

export const technologies: TechCategory[] = [
  {
    category: "Linguagens",
    items: [
      { name: "Python", level: "Avançado" },
      { name: "JavaScript", level: "Avançado" },
      { name: "TypeScript", level: "Avançado" },
      { name: "PHP", level: "Intermediário" },
      { name: "Java", level: "Intermediário" },
      { name: "C", level: "Básico" },
      { name: "SQL", level: "Avançado" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", level: "Avançado" },
      { name: "Next.js", level: "Avançado" },
      { name: "HTML/CSS", level: "Avançado" },
      { name: "TailwindCSS", level: "Avançado" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: "Avançado" },
      { name: "Laravel", level: "Intermediário" },
      { name: "Django", level: "Intermediário" },
      { name: "APIs REST", level: "Avançado" },
    ],
  },
  {
    category: "Banco de Dados",
    items: [
      { name: "PostgreSQL", level: "Avançado" },
      { name: "MySQL", level: "Avançado" },
      { name: "Supabase", level: "Intermediário" },
      { name: "Vector Databases", level: "Intermediário" },
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "AWS Lambda", level: "Intermediário" },
      { name: "Amazon S3", level: "Intermediário" },
      { name: "API Gateway", level: "Intermediário" },
      { name: "AWS CodePipeline", level: "Intermediário" },
      { name: "Docker", level: "Avançado" },
      { name: "Git / GitHub Actions", level: "Avançado" },
      { name: "CI/CD", level: "Avançado" },
      { name: "Linux", level: "Avançado" },
    ],
  },
  {
    category: "IA & Automação",
    items: [
      { name: "OpenAI", level: "Avançado" },
      { name: "Gemini", level: "Intermediário" },
      { name: "Claude", level: "Intermediário" },
      { name: "n8n", level: "Avançado" },
      { name: "Prompt Engineering", level: "Avançado" },
      { name: "Embeddings", level: "Intermediário" },
    ],
  },
  {
    category: "BI & Ferramentas de Gestão",
    items: [
      { name: "Power BI", level: "Avançado" },
      { name: "Excel VBA", level: "Avançado" },
      { name: "Power Automate", level: "Intermediário" },
      { name: "SAP", level: "Intermediário" },
      { name: "TOTVS", level: "Avançado" },
      { name: "MS Project", level: "Avançado" },
    ],
  },
];

export const education = [
  {
    degree: "Bacharelado em Sistemas de Informação",
    school: "Instituto Federal de Santa Catarina",
    period: "01/2020 — 06/2025",
  },
  {
    degree: "Tecnólogo em Administração",
    school: "Instituto Federal de Santa Catarina",
    period: "01/2017 — 12/2019",
  },
];

export const certifications = [
  "Coursera + Packt — GitHub Copilot & ChatGPT for Devs / Software QA & Test Automation Engineering",
  "LinkedIn Learning — Microsoft Project, GitHub Actions e Desenvolvimento iOS (2025)",
  "ABRAMAN — Planejamento e Controle da Manutenção (PCM) e MS Project Avançado (2025)",
  "IFSC — Framework Laravel (2021)",
  "SENAI — Qualidade Industrial e Planejamento e Controle da Produção (2020–2021)",
  "SEBRAE/SENAI — Startup Experience (2021)",
];

export const languages = [
  { name: "Português", level: "Nativo" },
  { name: "Inglês", level: "Avançado" },
  { name: "Espanhol", level: "Básico" },
];

export type TrajectoryMilestone = {
  year: string;
  title: string;
  text: string;
};

export const trajectory: TrajectoryMilestone[] = [
  {
    year: "2017",
    title: "Início — Administração & Operação Industrial",
    text: "Comecei em Administração, no chão de fábrica: entendendo processo, gargalo e indicador antes de qualquer linha de código.",
  },
  {
    year: "2020",
    title: "Planejamento & Controle de Manutenção",
    text: "Passei a planejar paradas industriais com até 350 profissionais e orçamentos de R$ 50M+, gerindo mais de 5.000 ativos.",
  },
  {
    year: "2020–2023",
    title: "Primeiras linhas de código, em produção",
    text: "Comecei a automatizar meu próprio trabalho em Python. Isso virou freelance full stack — Node.js, React, Django, Laravel.",
  },
  {
    year: "2024–2025",
    title: "Dashboards, automação e o início da IA",
    text: "Dashboards executivos para 200+ colaboradores e automações que economizaram 60h semanais. Comecei a aplicar IA a processos reais.",
  },
  {
    year: "2026",
    title: "Full Stack & IA — ATI Brasil",
    text: "Hoje desenvolvo sistemas completos e agentes de IA em produção, do requisito ao deploy, usados por dezenas de usuários.",
  },
];

export const navLinks = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/projetos", label: "Projetos" },
  { href: "/experiencia", label: "Experiência" },
  { href: "/tecnologias", label: "Tecnologias" },
  { href: "/curriculo", label: "Currículo" },
  { href: "/contato", label: "Contato" },
];
