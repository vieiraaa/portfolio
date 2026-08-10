export const personal = {
  name: "João Victor Vieira",
  fullName: "João Victor Tobias Vieira",
  role: "Analista de Sistemas · Desenvolvedor Full Stack · IA & Automação",
  location: "Curitiba, PR — Brasil",
  email: "jvictoratv@gmail.com",
  phone: "+55 (49) 99127-0949",
  whatsapp: "https://wa.me/5549991270949?text=Ol%C3%A1%2C%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar.",
  linkedin: "https://www.linkedin.com/in/joao-vieira-1a8360161/",
  github: "https://github.com/vieiraaa",
  resumePdf: "/curriculo-joao-victor-vieira.pdf",
  summary:
    "Analista de Sistemas e Desenvolvedor Full Stack com experiência sólida em aplicações corporativas, integração de sistemas, automação de processos, Business Intelligence e Inteligência Artificial aplicada. Atuo no ciclo completo de desenvolvimento — de APIs a agentes de IA — com Python, JavaScript, Node.js, React, Next.js e PostgreSQL.",
  highlights: [
    { label: "Usuários atendidos por sistemas implantados", value: "230 +" },
    { label: "Colaboradores usando dashboards executivos", value: "80 +" },
    { label: "Horas semanais economizadas com automação", value: "3800 h" },
    { label: "Ativos industriais sob gestão", value: "3.100 +" },
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
    stack: [
      "Python",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "MySQL",
      "Docker",
      "OpenAI",
      "Gemini",
      "Claude",
      "n8n",
    ],
    responsibilities: [
      "Desenvolvimento de aplicações Full Stack com Python, TypeScript, React, Next.js e Node.js.",
      "Desenvolvimento de APIs REST e integrações entre aplicações, bancos de dados e ERP Korp.",
      "Desenvolvimento da plataforma comercial JIE BNAMIQ.",
      "Desenvolvimento de sistemas para consulta automatizada de estoque e geração de orçamentos.",
      "Modelagem de bancos de dados, ETL, análise de dados e desenvolvimento de dashboards para suporte à tomada de decisão.",
      "Implementação de agentes de IA e automações utilizando OpenAI, Gemini, Claude e n8n.",
      "Desenvolvimento de bots para atendimento, suporte técnico, abertura automática de chamados e roteamento de solicitações.",
      "Atuação em todo o ciclo de desenvolvimento, desde levantamento de requisitos e definição da solução até implantação e evolução das aplicações.",
    ],
    outcomes: [
      "Soluções disponibilizadas em produção para mais de 100 usuários.",
      "Automação de processos comerciais e operacionais por meio da integração entre sistemas, APIs e Inteligência Artificial.",
      "Redução de atividades manuais e ganho de produtividade por meio de automações e agentes de IA.",
    ],
  },
  {
    company: "Guararapes Painéis",
    role: "Especialista / Analista PCM",
    period: "01/2020 — 04/2026",
    stack: [
      "Python",
      "Power BI",
      "TOTVS",
      "Excel VBA",
      "Power Automate",
      "Microsoft Project",
      "Excel",
    ],
    responsibilities: [
      "Planejamento, programação e controle de atividades de manutenção preventiva, preditiva e corretiva.",
      "Planejamento e acompanhamento de mais de 100 paradas industriais, envolvendo equipes multidisciplinares de até 350 profissionais.",
      "Gestão e acompanhamento de orçamento anual superior a R$ 50 milhões e de mais de 5.000 ativos industriais.",
      "Gestão de ordens de serviço, backlog, recursos, cronogramas e indicadores de desempenho operacional.",
      "Desenvolvimento de dashboards em Power BI para acompanhamento de MTTR, MTBF, disponibilidade, cumprimento de programação e backlog.",
      "Desenvolvimento de ferramentas e automações utilizando Python, VBA, Excel e Power Automate para redução de atividades manuais.",
      "Integração com equipes de manutenção, engenharia, produção, suprimentos e fornecedores no planejamento e execução de projetos e grandes paradas industriais.",
    ],
    outcomes: [
      "Automações desenvolvidas proporcionaram economia estimada de aproximadamente 60 horas semanais em atividades manuais.",
      "Dashboards executivos adotados como referência para acompanhamento de indicadores pela liderança.",
      "Maior padronização e agilidade na gestão das informações de manutenção.",
    ],
  },
  {
    company: "One Float (Freelance)",
    role: "Desenvolvedor Full Stack",
    period: "08/2020 — 08/2023",
    stack: [
      "Node.js",
      "TypeScript",
      "React",
      "Next.js",
      "Python",
      "Django",
      "Laravel",
      "PHP",
      "PostgreSQL",
      "MySQL",
      "Docker",
      "Git",
      "GitHub",
    ],
    responsibilities: [
      "Desenvolvimento de aplicações web, sistemas corporativos e plataformas digitais para empresas de diferentes segmentos.",
      "Atuação em todo o ciclo de desenvolvimento, desde levantamento de requisitos e definição da arquitetura até implementação, testes, implantação e suporte.",
      "Desenvolvimento de APIs REST, integrações entre sistemas e mecanismos de autenticação.",
      "Desenvolvimento de aplicações utilizando Node.js, TypeScript, React, Next.js, Python/Django e Laravel/PHP.",
      "Modelagem e desenvolvimento de bancos de dados PostgreSQL e MySQL.",
      "Desenvolvimento de interfaces utilizando HTML5, CSS3 e Bootstrap.",
      "Uso de Docker, Git e GitHub para conteinerização, versionamento e desenvolvimento colaborativo.",
    ],
    outcomes: [
      "Entrega de soluções para diferentes necessidades de negócio com foco em qualidade de código, desempenho, manutenção e escalabilidade.",
      "Participação em projetos utilizando metodologias ágeis e desenvolvimento colaborativo.",
    ],
  },
];

export type Project = {
  slug: string;
  name: string;
  category: string;
  status?: string;
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
      "Plataforma comercial desenvolvida para a JIE BNAMIQ, apresentando seu portfólio de soluções industriais e estruturando a experiência digital de consulta e contato comercial.",
    problem:
      "A marca precisava de uma presença digital capaz de organizar um catálogo técnico complexo, incluindo motorredutores, redutores, acionamentos e inversores, tornando a consulta mais clara para clientes, engenheiros e compradores industriais.",
    solution:
      "Desenvolvimento completo da plataforma com Next.js e TypeScript, incluindo arquitetura de navegação, catálogo organizado por famílias de produtos, páginas de segmentos, apresentação das soluções e canais de contato e solicitação de orçamento integrados ao fluxo comercial.",
    stack: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Framer Motion",
      "Vercel",
    ],
    results:
      "Plataforma em produção e utilizada comercialmente pela marca como seu principal canal digital de apresentação de produtos e geração de contatos.",
    demo: "https://jie-bnamiq.com",
  },

  {
    slug: "estoque-inteligente",
    name: "Automação Comercial com IA e RAG",
    category: "IA / Automação / Integração ERP",
    description:
      "Ecossistema de automação inteligente integrado aos dados do ERP Korp para consulta de estoque, informações de produtos e suporte aos processos comerciais.",
    problem:
      "A equipe comercial precisava consultar informações distribuídas entre sistemas e bases internas, tornando determinadas consultas e respostas dependentes de processos manuais e conhecimento específico das equipes.",
    solution:
      "Desenvolvimento de workflows e agentes de IA utilizando n8n, integração com dados provenientes do ERP Korp, armazenamento e recuperação de informações por RAG e APIs para disponibilizar consultas de estoque, informações de produtos e disponibilidade de forma automatizada.",
    stack: [
      "n8n",
      "OpenAI",
      "Gemini",
      "RAG",
      "Embeddings",
      "APIs REST",
      "ERP Korp",
      "PostgreSQL",
    ],
    results:
      "Automatização de consultas e processos comerciais, reduzindo a dependência de consultas manuais e facilitando o acesso às informações necessárias para atendimento e tomada de decisão.",
  },

  {
  slug: "controle-condicao-pagamento",
  name: "Controle Automatizado de Condições de Pagamento",
  category: "Automação / Workflow / Integração ERP",
  description:
    "Sistema de monitoramento em tempo real integrado ao ERP Korp para validação das condições de pagamento aplicadas aos pedidos comerciais, garantindo aderência às condições previamente estabelecidas para cada cliente.",
  problem:
    "A equipe comercial precisava garantir que os pedidos fossem registrados com condições de pagamento compatíveis com as regras comerciais definidas para cada cliente. Divergências poderiam resultar em vendas realizadas fora das condições permitidas e dificultar o controle sobre exceções comerciais.",
  solution:
    "Desenvolvimento de um workflow automatizado integrado ao ERP Korp e ao n8n para monitorar pedidos confirmados, comparar as condições de pagamento utilizadas com as condições previamente estabelecidas para cada cliente e sinalizar automaticamente eventuais divergências. O fluxo também realiza a confirmação e comunicação das ocorrências por e-mail, permitindo acompanhamento em tempo real das exceções identificadas.",
  stack: [
    "n8n",
    "ERP Korp",
    "Workflows",
    "APIs REST",
    "Outlook",
    "Automação de E-mails",
    "Regras de Negócio",
    "Integração de Sistemas",
  ],
  results:
    "Maior controle sobre as condições comerciais aplicadas aos pedidos, identificação automática de divergências e redução do risco de vendas realizadas fora dos parâmetros permitidos, proporcionando maior rastreabilidade e controle do processo comercial.",
},

  {
    slug: "dashboard-executivo",
    name: "Dashboard Executivo Industrial",
    category: "Business Intelligence / Data",
    description:
      "Ecossistema de Business Intelligence para monitoramento em tempo real de produtividade, manutenção e disponibilidade de mais de 5.000 ativos industriais.",
    problem:
      "A gestão precisava consolidar informações operacionais de diferentes fontes e acompanhar indicadores de manutenção e produtividade com maior velocidade e confiabilidade.",
    solution:
      "Modelagem e tratamento de dados provenientes dos sistemas corporativos, automações para atualização das informações e desenvolvimento de mais de 12 dashboards com mais de 70 indicadores operacionais e estratégicos.",
    stack: [
      "Power BI",
      "Python",
      "Excel VBA",
      "TOTVS",
      "ETL",
      "Business Intelligence",
    ],
    results:
      "Mais de 200 usuários utilizaram os dashboards, com atualização em tempo real e redução estimada de aproximadamente 2 horas de trabalho na preparação e consolidação das informações.",
  },

  {
    slug: "assistente-ia-suporte",
    name: "Ecossistema de Agentes de IA",
    category: "Inteligência Artificial / Automação",
    description:
      "Ecossistema de agentes de IA para atendimento, consultas internas, suporte técnico, agendamento e automação de processos corporativos.",
    problem:
      "Diversos processos internos dependiam de interação manual com equipes técnicas e administrativas, incluindo consultas de informações, disponibilidade, agendamento de reuniões e abertura e direcionamento de chamados de TI.",
    solution:
      "Desenvolvimento e orquestração de agentes utilizando OpenAI, Gemini e n8n, com integração a sistemas e bases internas. Os agentes podem consultar informações, verificar disponibilidade, apoiar processos de desenvolvimento, agendar reuniões e abrir chamados automaticamente.",
    stack: [
      "OpenAI",
      "Gemini",
      "n8n",
      "RAG",
      "Embeddings",
      "APIs REST",
      "Prompt Engineering",
    ],
    results:
      "Automação de etapas do atendimento e suporte interno, incluindo abertura e roteamento automático de chamados para equipes de Infraestrutura, Desenvolvimento, Sistemas e demais áreas de TI.",
  },

  {
    slug: "bot-promocoes",
    name: "Bot de Afiliados e Promoções",
    category: "Automação / Integração",
    description:
      "Sistema de automação para coleta, processamento e distribuição de ofertas de marketplaces em canais de comunicação.",
    problem:
      "A identificação e divulgação manual de ofertas em diferentes marketplaces exigia acompanhamento constante e tornava o processo pouco escalável.",
    solution:
      "Desenvolvimento de uma automação integrada às APIs do Telegram e WhatsApp para coletar ofertas de plataformas como Amazon e Mercado Livre, processar os dados e distribuí-los automaticamente em grupos de divulgação.",
    stack: [
      "Python",
      "APIs",
      "Telegram API",
      "WhatsApp",
      "Amazon",
      "Mercado Livre",
      "Automação",
    ],
    results:
      "Automatização do processo de coleta e distribuição de ofertas, transformando uma rotina manual em um fluxo contínuo de publicação para canais de afiliados.",
  },

  {
    slug: "tcc-manutencao-genetico",
    name: "TCC — Otimização de Manutenção com Algoritmo Genético",
    category: "Pesquisa Aplicada / Algoritmos",
    description:
      "Sistema de gestão de manutenção com alocação otimizada de recursos utilizando algoritmo genético, desenvolvido como projeto de conclusão de curso.",
    problem:
      "A alocação de equipes e recursos de manutenção envolve múltiplas restrições operacionais, tornando abordagens manuais pouco eficientes para encontrar combinações otimizadas.",
    solution:
      "Desenvolvimento de um sistema de gestão de manutenção integrado a um algoritmo genético capaz de avaliar diferentes combinações de alocação e buscar soluções otimizadas de acordo com as restrições definidas.",
    stack: [
      "Python",
      "Algoritmos Genéticos",
      "Otimização",
      "Banco de Dados",
      "Sistemas de Gestão",
    ],
    results:
      "Projeto desenvolvido, aplicado e aprovado em banca como trabalho de conclusão de curso, demonstrando a aplicação de algoritmos de otimização em um problema real de manutenção industrial.",
  },

  {
    slug: "tcc-machine-learning-mdf",
    name: "TCC — Machine Learning aplicado à produção de MDF",
    category: "Pesquisa Aplicada / Machine Learning",
    description:
      "Aplicação de Machine Learning na análise de dados industriais para investigar a influência de variáveis climáticas sobre a produção de chapas MDF.",
    problem:
      "Variáveis climáticas podem influenciar características do processo produtivo e da qualidade das chapas MDF, tornando relevante identificar relações que não são facilmente observadas por análises convencionais.",
    solution:
      "Desenvolvimento de uma abordagem baseada em análise de dados e Machine Learning para investigar relações entre variáveis climáticas e dados do processo produtivo de chapas MDF.",
    stack: [
      "Python",
      "Machine Learning",
      "Análise de Dados",
      "Data Science",
    ],
    results:
      "Projeto desenvolvido e aplicado academicamente, sendo apresentado e aprovado em banca como trabalho de conclusão de curso.",
  },

  {
    slug: "itasset-mvp",
    name: "ITAsset MVP",
    category: "Full Stack / Gestão de Ativos",
    status: "mvp",
    description:
      "MVP de uma plataforma para gestão e rastreamento do ciclo de vida de ativos, aplicando conceitos de gestão de ativos e desenvolvimento Full Stack.",
    problem:
      "A gestão de ativos exige informações centralizadas sobre cadastro, localização, status e ciclo de vida dos equipamentos para facilitar o controle operacional.",
    solution:
      "Modelagem de uma aplicação Full Stack para centralizar informações de ativos, permitindo cadastro, acompanhamento de status e organização dos dados em uma interface orientada às necessidades operacionais.",
    stack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "APIs REST",
      "Docker",
    ],
    needsDetail: true,
  },

  {
    slug: "rag-fastapi",
    name: "RAG com FastAPI",
    category: "Inteligência Artificial / RAG",
    description:
      "Sistema privado de Retrieval-Augmented Generation para consulta e análise contextualizada de documentos corporativos.",
    problem:
      "Equipes diferentes precisavam localizar e interpretar informações presentes em documentos internos, tornando o processo de consulta dependente de pesquisa manual e conhecimento prévio sobre as bases disponíveis.",
    solution:
      "Desenvolvimento de uma API baseada em FastAPI capaz de processar consultas, recuperar informações relevantes de uma base de conhecimento e fornecer contexto ao modelo de linguagem para geração de respostas fundamentadas nos documentos corporativos.",
    stack: [
      "Python",
      "FastAPI",
      "RAG",
      "Embeddings",
      "Vector Database",
      "LLMs",
    ],
    results:
      "Facilitação do acesso e análise de documentos internos, reduzindo o tempo necessário para localizar informações e permitindo que diferentes equipes consultem a base de conhecimento conforme suas necessidades.",
    needsDetail: true,
  },

  {
    slug: "conversor-duimp",
    name: "Conversor DUIMP XML",
    category: "Automação / Integração",
    description:
      "Aplicação desktop para processamento, validação e conversão de dados de arquivos XML da Declaração Única de Importação (DUIMP).",
    problem:
      "A manipulação manual de informações aduaneiras presentes nos arquivos XML da DUIMP pode gerar retrabalho e aumentar a possibilidade de erros durante a preparação dos dados.",
    solution:
      "Desenvolvimento de uma aplicação em Python para interpretar arquivos XML, extrair informações estruturadas, validar dados e gerar arquivos organizados para utilização em processos posteriores.",
    stack: [
      "Python",
      "XML",
      "Pandas",
      "OpenPyXL",
      "LXML",
      "CustomTkinter",
    ],
    needsDetail: true,
  },

  {
    slug: "vr-monitor",
    name: "VR Monitor",
    category: "Monitoramento / Observabilidade",
    description:
      "Sistema de monitoramento para acompanhamento da disponibilidade de servidores, serviços e aplicações em ambientes Windows e Linux.",
    problem:
      "A operação precisava de uma visão centralizada sobre a disponibilidade dos ambientes e dos serviços críticos para identificar indisponibilidades com maior rapidez.",
    solution:
      "Desenvolvimento de uma solução de monitoramento integrada a indicadores e dashboards, permitindo acompanhar a disponibilidade dos ambientes e centralizar informações operacionais.",
    stack: [
      "Python",
      "Windows",
      "Linux",
      "Zabbix",
      "Grafana",
      "Dashboards",
    ],
    needsDetail: true,
  },
];

export type TechLevel = "Especialista" | "Avançado" | "Intermediário";

export type Technology = {
  name: string;
  level: TechLevel;
  description?: string;
};

export type TechCategory = {
  category: string;
  description: string;
  items: Technology[];
};

export const technologies: TechCategory[] = [
  {
    category: "Linguagens",
    description:
      "Base para desenvolvimento de aplicações, automações, APIs e soluções orientadas a dados.",
    items: [
      {
        name: "Python",
        level: "Especialista",
        description: "APIs, automação, dados e aplicações de IA.",
      },
      {
        name: "TypeScript",
        level: "Especialista",
        description: "Desenvolvimento full stack e aplicações web.",
      },
      {
        name: "JavaScript",
        level: "Especialista",
        description: "Desenvolvimento de interfaces e aplicações web.",
      },
      {
        name: "SQL",
        level: "Especialista",
        description: "Consultas, modelagem, análise e manipulação de dados.",
      },
      {
        name: "PHP",
        level: "Avançado",
        description: "Desenvolvimento de aplicações com Laravel.",
      },
      {
        name: "Java",
        level: "Avançado",
      },
      {
        name: "C",
        level: "Intermediário",
      },
    ],
  },

  {
    category: "Frontend",
    description:
      "Interfaces modernas, responsivas e orientadas à experiência do usuário.",
    items: [
      {
        name: "React",
        level: "Especialista",
        description: "Interfaces e aplicações web interativas.",
      },
      {
        name: "Next.js",
        level: "Especialista",
        description: "Aplicações full stack, SSR e experiências web modernas.",
      },
      {
        name: "HTML5",
        level: "Especialista",
      },
      {
        name: "CSS3",
        level: "Especialista",
      },
      {
        name: "TailwindCSS",
        level: "Especialista",
        description: "Construção e estilização de interfaces.",
      },
      {
        name: "Bootstrap",
        level: "Avançado",
      },
    ],
  },

  {
    category: "Backend & APIs",
    description:
      "Serviços, integrações e regras de negócio que conectam aplicações e sistemas.",
    items: [
      {
        name: "Node.js",
        level: "Especialista",
        description: "APIs, integrações e aplicações backend.",
      },
      {
        name: "FastAPI",
        level: "Especialista",
        description: "APIs Python e serviços orientados a dados e IA.",
      },
      {
        name: "Django",
        level: "Avançado",
        description: "Desenvolvimento de aplicações web com Python.",
      },
      {
        name: "Laravel",
        level: "Avançado",
        description: "Desenvolvimento de aplicações web com PHP.",
      },
      {
        name: "Flask",
        level: "Avançado",
      },
      {
        name: "APIs REST",
        level: "Especialista",
        description: "Integração entre aplicações, serviços e sistemas corporativos.",
      },
      {
        name: "Arquitetura de Software",
        level: "Avançado",
        description: "Estruturação de aplicações, serviços e integrações.",
      },
    ],
  },

  {
    category: "Banco de Dados",
    description:
      "Modelagem, persistência, consulta e otimização de dados para aplicações e análises.",
    items: [
      {
        name: "PostgreSQL",
        level: "Especialista",
        description: "Banco relacional para aplicações e APIs.",
      },
      {
        name: "MySQL",
        level: "Especialista",
        description: "Desenvolvimento e manutenção de aplicações relacionais.",
      },
      {
        name: "Modelagem de Dados",
        level: "Especialista",
        description: "Estruturação de dados para sistemas e análises.",
      },
      {
        name: "Supabase",
        level: "Avançado",
      },
      {
        name: "Vector Databases",
        level: "Avançado",
        description: "Armazenamento e recuperação de dados vetoriais.",
      },
      {
        name: "pgvector",
        level: "Avançado",
        description: "Busca vetorial integrada ao PostgreSQL.",
      },
      {
        name: "SQL Optimization",
        level: "Avançado",
        description: "Otimização de consultas e acesso aos dados.",
      },
    ],
  },

  {
    category: "Cloud",
    description:
      "Serviços de infraestrutura e arquitetura para aplicações e pipelines de dados.",
    items: [
      {
        name: "AWS",
        level: "Avançado",
        description: "Serviços cloud e arquitetura de aplicações.",
      },
      {
        name: "AWS Lambda",
        level: "Avançado",
        description: "Execução serverless de aplicações e funções.",
      },
      {
        name: "Amazon S3",
        level: "Avançado",
        description: "Armazenamento de objetos e arquivos.",
      },
      {
        name: "API Gateway",
        level: "Avançado",
        description: "Exposição e gerenciamento de APIs.",
      },
      {
        name: "AWS CodePipeline",
        level: "Avançado",
        description: "Automação de pipelines de entrega.",
      },
      {
        name: "Azure",
        level: "Avançado",
      },
      {
        name: "Azure Data Factory",
        level: "Avançado",
        description: "Integração e movimentação de dados.",
      },
      {
        name: "Cloud Architecture",
        level: "Avançado",
      },
    ],
  },

  {
    category: "DevOps & Infraestrutura",
    description:
      "Versionamento, containers, ambientes e processos de entrega de software.",
    items: [
      {
        name: "Docker",
        level: "Especialista",
        description: "Conteinerização e ambientes de desenvolvimento.",
      },
      {
        name: "Linux",
        level: "Especialista",
        description: "Administração e operação de ambientes Linux.",
      },
      {
        name: "Git",
        level: "Especialista",
        description: "Versionamento e desenvolvimento colaborativo.",
      },
      {
        name: "GitHub",
        level: "Especialista",
        description: "Repositórios, colaboração e fluxo de desenvolvimento.",
      },
      {
        name: "GitHub Actions",
        level: "Avançado",
        description: "Automação de workflows e CI/CD.",
      },
      {
        name: "CI/CD",
        level: "Avançado",
        description: "Automação de build, testes e deploy.",
      },
      {
        name: "DevOps",
        level: "Avançado",
      },
      {
        name: "Vercel",
        level: "Especialista",
        description: "Deploy e hospedagem de aplicações web.",
      },
      {
        name: "Windows Server",
        level: "Avançado",
      },
    ],
  },

  {
    category: "IA & Automação",
    description:
      "Inteligência artificial aplicada a processos, sistemas corporativos e automações.",
    items: [
      {
        name: "OpenAI",
        level: "Especialista",
        description: "LLMs, APIs, agentes e aplicações inteligentes.",
      },
      {
        name: "n8n",
        level: "Especialista",
        description: "Automação e integração entre sistemas.",
      },
      {
        name: "Prompt Engineering",
        level: "Especialista",
        description: "Estruturação de prompts e comportamento de modelos.",
      },
      {
        name: "Gemini",
        level: "Avançado",
        description: "Integração de modelos generativos em aplicações.",
      },
      {
        name: "Claude",
        level: "Avançado",
        description: "Uso de modelos generativos em fluxos de IA.",
      },
      {
        name: "RAG",
        level: "Avançado",
        description: "Consulta de bases de conhecimento com contexto.",
      },
      {
        name: "Embeddings",
        level: "Avançado",
        description: "Representação vetorial e recuperação semântica.",
      },
      {
        name: "AI Agents",
        level: "Avançado",
        description: "Agentes orientados à execução de tarefas.",
      },
      {
        name: "LLM Applications",
        level: "Avançado",
        description: "Aplicações corporativas baseadas em modelos de linguagem.",
      },
      {
        name: "Vector Search",
        level: "Avançado",
        description: "Busca semântica sobre bases vetoriais.",
      },
    ],
  },

  {
    category: "Dados & Business Intelligence",
    description:
      "Transformação de dados operacionais em indicadores, análises e decisões de negócio.",
    items: [
      {
        name: "Power BI",
        level: "Especialista",
        description: "Dashboards, indicadores e análise de negócio.",
      },
      {
        name: "Business Intelligence",
        level: "Especialista",
        description: "Estruturação de dados para suporte à decisão.",
      },
      {
        name: "ETL",
        level: "Especialista",
        description: "Extração, transformação e carga de dados.",
      },
      {
        name: "Análise de Dados",
        level: "Especialista",
        description: "Análise e interpretação de dados operacionais.",
      },
      {
        name: "Data Visualization",
        level: "Especialista",
        description: "Visualização de indicadores e informações.",
      },
      {
        name: "Excel VBA",
        level: "Especialista",
        description: "Automação de rotinas e processos operacionais.",
      },
      {
        name: "Dashboards Executivos",
        level: "Especialista",
        description: "Indicadores estratégicos e acompanhamento gerencial.",
      },
      {
        name: "Tableau",
        level: "Avançado",
      },
      {
        name: "Power Automate",
        level: "Avançado",
        description: "Automação de processos corporativos.",
      },
    ],
  },

  {
    category: "ERP & Gestão",
    description:
      "Tecnologia aplicada diretamente a processos corporativos, operação e gestão.",
    items: [
      {
        name: "TOTVS",
        level: "Especialista",
        description: "Sistemas corporativos e processos industriais.",
      },
      {
        name: "Microsoft Project",
        level: "Especialista",
        description: "Planejamento e acompanhamento de projetos.",
      },
      {
        name: "PCM",
        level: "Especialista",
        description: "Planejamento e controle da manutenção.",
      },
      {
        name: "Gestão de Processos",
        level: "Especialista",
        description: "Mapeamento, melhoria e automação de processos.",
      },
      {
        name: "ERP Korp",
        level: "Avançado",
        description: "Integração e consulta de dados corporativos.",
      },
      {
        name: "SAP",
        level: "Avançado",
      },
      {
        name: "Gestão de Projetos",
        level: "Avançado",
      },
    ],
  },
];

export const education = [
  {
    degree: "Bacharelado em Sistemas de Informação",
    school: "Instituto Federal de Santa Catarina (IFSC)",
    period: "01/2020 — 06/2025",
    highlights: [
      "Desenvolvimento de software, bancos de dados, engenharia de sistemas e análise de dados.",
      "Trabalho de conclusão de curso aplicado à otimização de processos de manutenção industrial utilizando algoritmos genéticos.",
    ],
  },
  {
    degree: "Tecnólogo em Administração",
    school: "Instituto Federal de Santa Catarina (IFSC)",
    period: "01/2017 — 12/2019",
    highlights: [
      "Formação em gestão, processos, planejamento, análise de indicadores e administração.",
    ],
  },
];

export const certifications = [
  "Coursera + Packt — GitHub Copilot & ChatGPT for Devs / Software QA & Test Automation Engineering",
  "LinkedIn Learning — Microsoft Project, GitHub Actions e Desenvolvimento iOS (2025)",
  "ABRAMAN — Planejamento e Controle da Manutenção (PCM) e MS Project Especialista (2025)",
  "IFSC — Framework Laravel (2021)",
  "SENAI — Qualidade Industrial e Planejamento e Controle da Produção (2020–2021)",
  "SEBRAE/SENAI — Startup Experience (2021)",
];

export const languages = [
  { name: "Português", level: "Nativo" },
  { name: "Inglês", level: "Especialista" },
  { name: "Espanhol", level: "Intermediário" },
];

export type TrajectoryMilestone = {
  year: string;
  title: string;
  text: string;
};

export const trajectory: TrajectoryMilestone[] = [
  {
    year: "2026",
    title: "Tecnologia + Processos — do problema à solução",
    text: "Na ATI Brasil, passei a atuar diretamente no desenvolvimento de sistemas e processos, conectando minha experiência técnica e operacional ao desenvolvimento de software. Hoje trabalho com aplicações Full Stack, integrações, automações, dados e IA, participando desde o entendimento da necessidade do solicitante até a implantação e evolução da solução.",
  },
  {
    year: "2025",
    title: "IA aplicada — tecnologia a serviço da operação",
    text: "Comecei a incorporar Inteligência Artificial aos processos corporativos, explorando LLMs, RAG, embeddings, agentes e automações. O objetivo sempre foi resolver necessidades concretas: consultar informações, automatizar tarefas, apoiar equipes e conectar diferentes etapas do processo.",
  },
  {
    year: "2022–2025",
    title: "Dados, indicadores & automação — apoiando a decisão",
    text: "Além do planejamento técnico, passei a estruturar dados e desenvolver ferramentas para transformar informações operacionais em decisões. Criei mais de 12 dashboards com mais de 70 indicadores, utilizados por mais de 200 colaboradores, e automações que reduziram aproximadamente 60 horas semanais de trabalho manual.",
  },
  {
    year: "2020–2023",
    title: "Da área técnica ao desenvolvimento de software",
    text: "Atuando diretamente com PCP e PCM, comecei a identificar oportunidades de melhoria nos próprios processos que executava. Python, VBA e Excel se tornaram ferramentas para automatizar rotinas e resolver problemas reais. Em paralelo, levei essa experiência para projetos Full Stack freelance com Python, Django, Laravel, Node.js, React e Next.js.",
  },
  {
    year: "2020–2022",
    title: "PCM — planejamento, manutenção & execução",
    text: "Passei a atuar no Planejamento e Controle da Manutenção, conectando planejamento, engenharia, produção, manutenção, fornecedores e equipes de campo. Trabalhei com mais de 5.000 ativos, planejei mais de 100 paradas industriais, orçamentos superiores a R$ 50 milhões e equipes de até 350 profissionais.",
  },
  {
    year: "2020",
    title: "PCP — entendendo a operação de perto",
    text: "Iniciei minha experiência profissional na área de Planejamento e Controle da Produção, acompanhando a rotina industrial, indicadores, cronogramas, produtividade e necessidades das áreas produtivas. Foi onde comecei a desenvolver a visão de quem está dentro do processo e precisa transformar informação em ação.",
  },
  {
    year: "2017",
    title: "Administração — a base de negócio e processos",
    text: "Minha trajetória começou com a formação em Administração e a entrada no ambiente industrial. Antes de desenvolver sistemas, aprendi a trabalhar com processos, pessoas, recursos, custos e indicadores — construindo a visão de negócio que hoje aplico ao desenvolvimento de tecnologia.",
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

const evolution = [
  {
    number: "01",
    title: "Operação",
    description:
      "A base da minha trajetória: processos industriais, produção, manutenção e a realidade de quem está dentro da operação.",
  },
  {
    number: "02",
    title: "Dados",
    description:
      "Comecei a transformar informações operacionais em indicadores, dashboards e ferramentas para apoiar decisões.",
  },
  {
    number: "03",
    title: "Automação",
    description:
      "Python, VBA e integrações passaram a eliminar tarefas manuais e tornar processos mais eficientes.",
  },
  {
    number: "04",
    title: "Software",
    description:
      "Os problemas do negócio passaram a ser traduzidos em aplicações, APIs e sistemas corporativos.",
  },
  {
    number: "05",
    title: "IA",
    description:
      "LLMs, RAG, agentes e automações ampliaram a capacidade dos sistemas de resolver problemas de forma inteligente.",
  },
];