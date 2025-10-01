import { createI18n } from 'vue-i18n'

// Mensagens em português
const pt = {
  nav: {
    home: 'Início',
    experience: 'Experiência',
    about: 'Sobre',
    skills: 'Skills',
    education: 'Educação',
  },
  home: {
    title: 'João Isabel',
    subtitle:
      'Desenvolvedor Frontend apaixonado por criar experiências digitais excepcionais e soluções inovadoras',
    cta: 'Ver Experiência',
    intro: {
      title: 'Bem-vindo ao meu mundo digital',
      description:
        'Sou um desenvolvedor frontend dedicado com mais de 4 anos de experiência na Worten Portugal, especializado em tecnologias web modernas e otimização da experiência do utilizador.',
    },
  },
  experience: {
    title: 'Experiência Profissional',
    subtitle: 'Minha jornada profissional em tecnologia e desenvolvimento',
    jobs: {
      worten: {
        title: 'Frontend Developer',
        company: 'Worten',
        period: 'Abr 2021 - Presente',
        description:
          'Trabalho no backoffice do site principal da Worten e no CMS do novo website. Desenvolvimento frontend focado em tecnologias web modernas e otimização da experiência do utilizador.',
        skills: ['Desenvolvimento Frontend', 'CMS', 'Backoffice', 'JavaScript', 'Tecnologias Web'],
      },
      freelancer: {
        title: 'Full Stack Developer',
        company: 'Freelancer',
        period: 'Nov 2020 - Mar 2021 · 5 meses',
        description:
          'Trabalho para cliente na implementação de um Sistema de Agendamento Digital front & back-end para ser usado por clientes e ajudá-los a gerir as suas reservas.',
        skills: [
          'Desenvolvimento Full Stack',
          'Frontend',
          'Backend',
          'Sistema de Agendamento',
          'Gestão de Clientes',
        ],
      },
      portugalRoots: {
        title: 'Manager/Owner',
        company: 'Portugal Roots - Tour and Transfers',
        period: 'Fev 2017 - Ago 2020 · 3 anos 7 meses',
        description:
          'Responsável por toda a atividade da empresa, reservas, produtos e pagamentos. Gestão completa de operações turísticas.',
        skills: [
          'Gestão Empresarial',
          'Reservas',
          'Produtos Turísticos',
          'Pagamentos',
          'Operações',
        ],
      },
      finantia: {
        title: 'Sub-Director of Operations Department',
        company: 'Banco Finantia',
        period: 'Ago 2014 - Jan 2017 · 2 anos 6 meses',
        description:
          'Team Leader do departamento de transferências e base de dados. Gestão e coordenação de toda a informação para auditores externos.',
        skills: [
          'Liderança de Equipas',
          'Transferências Bancárias',
          'Base de Dados',
          'Auditoria Externa',
          'Coordenação',
        ],
      },
      neodent: {
        title: 'Controller',
        company: 'Neodent',
        period: 'Mar 2012 - Ago 2014 · 2 anos 6 meses',
        description:
          'Responsável pela previsão do orçamento anual da empresa com análise mensal. Reporting e Analista de Base de Dados. Execução de Tableaux du Board e Análise Financeira.',
        skills: [
          'Orçamento Anual',
          'Análise Financeira',
          'Reporting',
          'Base de Dados',
          'Tableaux du Board',
        ],
      },
      nielsen: {
        title: 'Reporting & Performance Analyst',
        company: 'AC Nielsen',
        period: 'Jan 2009 - Fev 2012 · 3 anos 2 meses',
        description:
          'Back-up do Departamento Comercial. Relatórios mensais com as vendas unitárias dos clientes. Suporte de back office para operações comerciais.',
        skills: [
          'Análise de Performance',
          'Relatórios Mensais',
          'Vendas Unitárias',
          'Departamento Comercial',
          'Back Office',
        ],
      },
    },
  },
  about: {
    title: 'Sobre Mim',
    subtitle: 'Desenvolvedor Frontend apaixonado por criar experiências digitais excepcionais',
    story: {
      title: 'Minha História',
      p1: 'Sou um desenvolvedor frontend com mais de 4 anos de experiência na Worten Portugal, onde me especializo em tecnologias web modernas e otimização da experiência do utilizador.',
      p2: 'Ao longo da minha carreira, transitei de áreas como operações bancárias e análise de dados para o desenvolvimento web, trazendo uma perspetiva única que combina conhecimento técnico com experiência empresarial.',
      p3: 'Acredito na importância da educação e do voluntariado, tendo contribuído com a Junior Achievement Portugal para inspirar jovens a desenvolverem competências empreendedoriais e de literacia financeira.',
    },
    skills: {
      title: 'Competências Técnicas',
      frontend: {
        title: 'Frontend',
        items: ['JavaScript/TypeScript', 'Vue.js', 'HTML5 & CSS3', 'Design Responsivo'],
      },
      backend: {
        title: 'Backend & Base de Dados',
        items: [
          'Node.js',
          'Gestão de Base de Dados',
          'Desenvolvimento de APIs',
          'Análise de Dados',
        ],
      },
      soft: {
        title: 'Soft Skills',
        items: ['Liderança de Equipas', 'Gestão de Projetos', 'Oratória', 'Resolução de Problemas'],
      },
    },
  },
  skills: {
    title: 'Skills Técnicas',
    subtitle: 'Tecnologias e ferramentas que domino',
    categories: {
      frontend: {
        title: 'Frontend',
        technologies: ['JavaScript', 'HTML', 'CSS', 'React.js', 'Vue.js', 'Redux.js'],
      },
      backend: {
        title: 'Backend & Database',
        technologies: ['Node.js', 'Express.js', 'SQL', 'MySQL'],
      },
      tools: {
        title: 'Ferramentas & Plataformas',
        technologies: ['Git', 'GitHub', 'GitLab', 'Postman', 'Jira', 'Trello'],
      },
      business: {
        title: 'Software Empresarial',
        technologies: ['Primavera', 'PHC', 'Excel'],
      },
    },
  },
  education: {
    title: 'Educação',
    subtitle: 'Formação académica e certificações',
    items: {
      bootcamp: {
        title: 'Bootcamp Web Development',
        institution: 'Wild Code School',
        period: '2020 - 2021',
        type: 'Bootcamp',
      },
      udemy: {
        title: 'Responsive websites w/ HTML5 & CSS3',
        institution: 'Udemy',
        period: '05/2020 - 08/2020',
        type: 'Curso Online',
      },
      master: {
        title: 'Mestrado em Gestão',
        institution: 'Instituto Superior de Gestão',
        period: '2004 - 2010',
        type: 'Mestrado',
      },
      trainer: {
        title: 'Certificação de Formador (CAP)',
        institution: 'INEPI',
        period: '',
        type: 'Certificação',
      },
    },
  },
  common: {
    language: 'Idioma',
  },
  voice: {
    button: 'Comandos de Voz',
    listening: 'A ouvir...',
    notSupported: 'Reconhecimento de voz não suportado neste navegador',
    error: 'Erro no reconhecimento de voz',
    commandNotRecognized: 'Comando não reconhecido',
    languageChanged: 'Idioma alterado',
    alreadyInPortuguese: 'Já está em português',
    help: 'Diga: "português", "inglês" ou "mudar idioma" (Ctrl+M para ativar)',
    shortcut: 'Pressione Ctrl+M para ativar comandos de voz',
  },
}

// Mensagens em inglês
const en = {
  nav: {
    home: 'Home',
    experience: 'Experience',
    about: 'About',
    skills: 'Skills',
    education: 'Education',
  },
  home: {
    title: 'João Isabel',
    subtitle:
      'Frontend Developer passionate about creating exceptional digital experiences and innovative solutions',
    cta: 'View Experience',
    intro: {
      title: 'Welcome to my digital world',
      description:
        'I am a dedicated frontend developer with over 4 years of experience at Worten Portugal, specializing in modern web technologies and user experience optimization.',
    },
  },
  experience: {
    title: 'Professional Experience',
    subtitle: 'My professional journey in technology and development',
    jobs: {
      worten: {
        title: 'Frontend Developer',
        company: 'Worten',
        period: 'Apr 2021 - Present · 3 yrs 6 mos',
        description:
          'Working on backoffice of the main site and CMS of the new website. Frontend development focusing on modern web technologies and user experience optimization.',
        skills: ['Frontend Development', 'CMS', 'Backoffice', 'JavaScript', 'Web Technologies'],
      },
      freelancer: {
        title: 'Full Stack Developer',
        company: 'Freelancer',
        period: 'Nov 2020 - Mar 2021 · 5 mos',
        description:
          'Working on a client to implement a front & backend Digital Schedule to be used by customers and help them to manage their bookings.',
        skills: [
          'Full Stack Development',
          'Frontend',
          'Backend',
          'Digital Schedule',
          'Customer Management',
        ],
      },
      portugalRoots: {
        title: 'Manager/Owner',
        company: 'Portugal Roots - Tour and Transfers',
        period: 'Feb 2017 - Aug 2020 · 3 yrs 7 mos',
        description:
          'Responsible for all the company activity, bookings, products, payments. Complete management of tourism operations.',
        skills: ['Business Management', 'Bookings', 'Tourism Products', 'Payments', 'Operations'],
      },
      finantia: {
        title: 'Sub-Director of Operations Department',
        company: 'Banco Finantia',
        period: 'Aug 2014 - Jan 2017 · 2 yrs 6 mos',
        description:
          'Team Leader of transfers and database department. Management and Coordination of all information to external auditors.',
        skills: [
          'Team Leadership',
          'Bank Transfers',
          'Database',
          'External Auditors',
          'Coordination',
        ],
      },
      neodent: {
        title: 'Controller',
        company: 'Neodent',
        period: 'Mar 2012 - Aug 2014 · 2 yrs 6 mos',
        description:
          'Responsible for annual company budget forecast with monthly analysis. Reporting and Data Base Analyst. Execution of Tableaux du Board and Financial Analysis.',
        skills: [
          'Annual Budget',
          'Financial Analysis',
          'Reporting',
          'Database',
          'Tableaux du Board',
        ],
      },
      nielsen: {
        title: 'Reporting & Performance Analyst',
        company: 'AC Nielsen',
        period: 'Jan 2009 - Feb 2012 · 3 yrs 2 mos',
        description:
          'Commercial Department back-up. Monthly reports with the unit sales of client. Providing back office support for commercial operations.',
        skills: [
          'Performance Analysis',
          'Monthly Reports',
          'Unit Sales',
          'Commercial Department',
          'Back Office',
        ],
      },
    },
  },
  about: {
    title: 'About Me',
    subtitle: 'Frontend Developer passionate about creating exceptional digital experiences',
    story: {
      title: 'My Story',
      p1: 'I am a frontend developer with over 4 years of experience at Worten Portugal, where I specialize in modern web technologies and user experience optimization.',
      p2: 'Throughout my career, I have transitioned from areas such as banking operations and data analysis to web development, bringing a unique perspective that combines technical knowledge with business experience.',
      p3: 'I believe in the importance of education and volunteering, having contributed with Junior Achievement Portugal to inspire young people to develop entrepreneurial skills and financial literacy.',
    },
    skills: {
      title: 'Technical Skills',
      frontend: {
        title: 'Frontend',
        items: ['JavaScript/TypeScript', 'Vue.js', 'HTML5 & CSS3', 'Responsive Design'],
      },
      backend: {
        title: 'Backend & Database',
        items: ['Node.js', 'Database Management', 'API Development', 'Data Analysis'],
      },
      soft: {
        title: 'Soft Skills',
        items: ['Team Leadership', 'Project Management', 'Public Speaking', 'Problem Solving'],
      },
    },
  },
  skills: {
    title: 'Technical Skills',
    subtitle: 'Technologies and tools I master',
    categories: {
      frontend: {
        title: 'Frontend',
        technologies: ['JavaScript', 'HTML', 'CSS', 'React.js', 'Vue.js', 'Redux.js'],
      },
      backend: {
        title: 'Backend & Database',
        technologies: ['Node.js', 'Express.js', 'SQL', 'MySQL'],
      },
      tools: {
        title: 'Tools & Platforms',
        technologies: ['Git', 'GitHub', 'GitLab', 'Postman', 'Jira', 'Trello'],
      },
      business: {
        title: 'Business Software',
        technologies: ['Primavera', 'PHC', 'Excel'],
      },
    },
  },
  education: {
    title: 'Education',
    subtitle: 'Academic background and certifications',
    items: {
      bootcamp: {
        title: 'Bootcamp Web Development',
        institution: 'Wild Code School',
        period: '2020 - 2021',
        type: 'Bootcamp',
      },
      udemy: {
        title: 'Responsive websites w/ HTML5 & CSS3',
        institution: 'Udemy',
        period: '05/2020 - 08/2020',
        type: 'Online Course',
      },
      master: {
        title: 'Master Degree in Management',
        institution: 'Instituto Superior de Gestão',
        period: '2004 - 2010',
        type: 'Master Degree',
      },
      trainer: {
        title: 'Trainer Certification (CAP)',
        institution: 'INEPI',
        period: '',
        type: 'Certification',
      },
    },
  },
  common: {
    language: 'Language',
  },
  voice: {
    button: 'Voice Commands',
    listening: 'Listening...',
    notSupported: 'Speech recognition not supported in this browser',
    error: 'Speech recognition error',
    commandNotRecognized: 'Command not recognized',
    languageChanged: 'Language changed',
    alreadyInEnglish: 'Already in English',
    help: 'Say: "Portuguese", "English" or "change language" (Ctrl+M to activate)',
    shortcut: 'Press Ctrl+M to activate voice commands',
  },
}

const messages = { pt, en }

const i18n = createI18n({
  legacy: false,
  locale: 'pt', // idioma padrão
  fallbackLocale: 'en',
  messages,
})

export default i18n
