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
        company: 'Worten Portugal',
        period: 'Mar 2021 - Presente · 4 anos 7 meses',
        description:
          'Desenvolvedor Frontend full-time focado em tecnologias web modernas e otimização da experiência do utilizador.',
        skills: [
          'Desenvolvimento Frontend',
          'JavaScript',
          'Tecnologias Web',
          'Experiência do Utilizador',
        ],
      },
      ja: {
        title: 'Voluntário Educacional',
        company: 'Junior Achievement Portugal',
        period: 'Jan 2023 - Abr 2023 · 4 meses',
        description:
          'Voluntário sazonal inspirando e preparando crianças e jovens para ter sucesso numa economia global através de experiências transformadoras baseadas em três pilares fundamentais: Cidadania e Literacia Financeira, Educação para o Empreendedorismo e Competências para a empregabilidade.',
        skills: ['Ensino', 'Oratória', 'Literacia Financeira', 'Educação para o Empreendedorismo'],
      },
      sheerme: {
        title: 'Desenvolvedor Web Freelance',
        company: 'SheerME',
        period: 'Nov 2020 - Fev 2021 · 4 meses',
        description:
          'Implementação de um Sistema de Agendamento Digital front & back-end para ser usado por clientes e ajudá-los a gerir as suas reservas.',
        skills: [
          'Desenvolvimento Frontend',
          'Desenvolvimento Backend',
          'Gestão de Base de Dados',
          'Soluções para Clientes',
        ],
      },
      portugalRoots: {
        title: 'Gestor',
        company: 'Portugal Roots',
        period: 'Dez 2016 - Ago 2020 · 3 anos 9 meses',
        description: 'Função de gestão sazonal supervisionando operações e coordenação de equipas.',
        skills: ['Gestão de Equipas', 'Operações', 'Liderança', 'Coordenação de Projetos'],
      },
      finantia: {
        title: 'Departamento de Operações',
        company: 'Banco Finantia',
        period: 'Ago 2014 - Dez 2016 · 2 anos 5 meses',
        description:
          'Trabalho no departamento de operações gerindo processos e procedimentos bancários.',
        skills: ['Operações Bancárias', 'Processos Financeiros', 'Gestão de Risco', 'Compliance'],
      },
      neodent: {
        title: 'Controlador/Analista de Base de Dados',
        company: 'Neodent',
        period: 'Mar 2012 - Ago 2014 · 2 anos 6 meses',
        description:
          'Responsável pela análise de base de dados e processos de controlo, garantindo a integridade dos dados e precisão dos relatórios.',
        skills: [
          'Análise de Base de Dados',
          'Controlo de Dados',
          'Relatórios',
          'Garantia de Qualidade',
        ],
      },
      segurihigiene: {
        title: 'Controlador',
        company: 'Segurihigiene - Medicina no Trabalho, SA',
        period: 'Set 2010 - Mar 2012 · 1 ano 7 meses',
        description:
          'Controlo financeiro e operacional em empresa de saúde e segurança ocupacional.',
        skills: ['Controlo Financeiro', 'Gestão Operacional', 'Saúde e Segurança', 'Compliance'],
      },
      phoneHouse: {
        title: 'Membro da Equipa de Relatórios de Performance',
        company: 'The Phone House',
        period: 'Set 2009 - Set 2010 · 1 ano 1 mês',
        description:
          'Parte da equipa de relatórios de performance analisando e reportando métricas de negócio e KPIs.',
        skills: ['Análise de Performance', 'Relatórios', 'Análise de Dados', 'Gestão de KPIs'],
      },
      nielsen: {
        title: 'Suporte de Back Office Comercial',
        company: 'The Nielsen Company (ACNielsen)',
        period: 'Ago 2007 - Set 2009 · 2 anos 2 meses',
        description:
          'Prestação de suporte de back office para operações comerciais na ACNielsen, apoiando atividades de pesquisa de mercado.',
        skills: [
          'Operações de Back Office',
          'Suporte Comercial',
          'Pesquisa de Mercado',
          'Gestão de Dados',
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
        period: '09/2020 - Presente',
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
        company: 'Worten Portugal',
        period: 'Mar 2021 - Present · 4 yrs 7 mos',
        description:
          'Full-time Frontend Developer focusing on modern web technologies and user experience optimization.',
        skills: ['Frontend Development', 'JavaScript', 'Web Technologies', 'User Experience'],
      },
      ja: {
        title: 'Education Volunteer',
        company: 'Junior Achievement Portugal',
        period: 'Jan 2023 - Apr 2023 · 4 mos',
        description:
          'Seasonal volunteer inspiring and preparing children and young people to succeed in a global economy through transformative experiences based on three fundamental pillars: Citizenship and Financial Literacy, Education for Entrepreneurship and Skills for employability.',
        skills: ['Teaching', 'Public Speaking', 'Financial Literacy', 'Entrepreneurship Education'],
      },
      sheerme: {
        title: 'Freelance Web Developer',
        company: 'SheerME',
        period: 'Nov 2020 - Feb 2021 · 4 mos',
        description:
          'Implementation of a front & back-end Digital Schedule to be used by customers and help them to manage their bookings.',
        skills: [
          'Frontend Development',
          'Backend Development',
          'Database Management',
          'Customer Solutions',
        ],
      },
      portugalRoots: {
        title: 'Manager',
        company: 'Portugal Roots',
        period: 'Dec 2016 - Aug 2020 · 3 yrs 9 mos',
        description: 'Seasonal management role overseeing operations and team coordination.',
        skills: ['Team Management', 'Operations', 'Leadership', 'Project Coordination'],
      },
      finantia: {
        title: 'Operations Department',
        company: 'Banco Finantia',
        period: 'Aug 2014 - Dec 2016 · 2 yrs 5 mos',
        description:
          'Working in the operations department managing banking processes and procedures.',
        skills: ['Banking Operations', 'Financial Processes', 'Risk Management', 'Compliance'],
      },
      neodent: {
        title: 'Controller/Database Analyst',
        company: 'Neodent',
        period: 'Mar 2012 - Aug 2014 · 2 yrs 6 mos',
        description:
          'Responsible for database analysis and control processes, ensuring data integrity and reporting accuracy.',
        skills: ['Database Analysis', 'Data Control', 'Reporting', 'Quality Assurance'],
      },
      segurihigiene: {
        title: 'Controller',
        company: 'Segurihigiene - Medicina no Trabalho, SA',
        period: 'Sep 2010 - Mar 2012 · 1 yr 7 mos',
        description: 'Financial and operational control in occupational health and safety company.',
        skills: ['Financial Control', 'Operational Management', 'Health & Safety', 'Compliance'],
      },
      phoneHouse: {
        title: 'Member of Performance Reporting Team',
        company: 'The Phone House',
        period: 'Sep 2009 - Sep 2010 · 1 yr 1 mo',
        description:
          'Part of the performance reporting team analyzing and reporting on business metrics and KPIs.',
        skills: ['Performance Analysis', 'Reporting', 'Data Analysis', 'KPI Management'],
      },
      nielsen: {
        title: 'Commercial Back Office Support',
        company: 'The Nielsen Company (ACNielsen)',
        period: 'Aug 2007 - Sep 2009 · 2 yrs 2 mos',
        description:
          'Providing back office support for commercial operations at ACNielsen, supporting market research activities.',
        skills: [
          'Back Office Operations',
          'Commercial Support',
          'Market Research',
          'Data Management',
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
        period: '09/2020 - Present',
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
