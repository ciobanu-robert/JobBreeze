import { Candidate } from '../../models/candidate';

export const DEMO_CANDIDATES: Candidate[] = [
  {
    id: 'cand-1',
    avatarInitial: 'I',
    name: 'Ioana Georgescu',
    headline: 'Marketing Specialist · Growth',
    location: 'București',
    experienceYears: 3,
    jobTitle: 'Backend Engineer (Node.js)',
    summary:
      'Performance campaigns, SEO and content that converts. ' +
      'Looking to move closer to the product side and ' +
      'learn backend development alongside a strong team.',
    skills: [
      'Google Ads',
      'SEO',
      'Meta Ads',
      'Copywriting',
      'HubSpot',
    ],
    status: 'pending',
    appliedAt: '2026-10-30',
    languages: ['Romanian', 'English C1'],
    desiredRole: 'Growth Marketing Manager',
    phone: '+40 721 555 107',
    links: {
      linkedin: 'https://linkedin.com/in/ioana-georgescu',
      github: '',
      website: '',
    },
    experience: [
      {
        id: 'cand-1-exp-1',
        title: 'Marketing Specialist',
        subtitle: 'eMAG',
        startDate: '2023-02',
        endDate: null,
        description:
          'Ran paid campaigns with a €40k monthly budget and grew organic traffic by 35% in one year.',
      },
      {
        id: 'cand-1-exp-2',
        title: 'Marketing Assistant',
        subtitle: 'Elefant.ro',
        startDate: '2022-01',
        endDate: '2023-01',
        description:
          'Coordinated newsletters and seasonal campaigns for the books category.',
      },
    ],
    education: [
      {
        id: 'cand-1-edu-1',
        title: 'ASE București',
        subtitle: 'BSc, Marketing',
        startDate: '2018-10',
        endDate: '2021-07',
        description: '',
      },
    ],
    projects: [
      {
        id: 'cand-1-proj-1',
        title: 'SEO playbook',
        subtitle: 'Notion · Ahrefs',
        startDate: '2024-03',
        endDate: '',
        description:
          'Internal guide adopted by three product teams.',
      },
    ],
    certifications: [
      {
        id: 'cand-1-cert-1',
        title: 'Google Ads Search',
        subtitle: 'Google',
        startDate: '2023-05',
        endDate: '',
        description: '',
      },
    ],
    cvFileName: 'Ioana_Georgescu_CV.pdf',
    coverLetter:
      "Hello,\n\nI'm Ioana and I'm excited to apply for this role. My CV has more details about my experience and projects.\n\nThank you for your time!",
  },
  {
    id: 'cand-2',
    avatarInitial: 'A',
    name: 'Andrei Popescu',
    headline: 'Frontend Developer · React & TypeScript',
    location: 'București',
    experienceYears: 4,
    jobTitle: 'Senior React Developer',
    summary:
      'Four years building React dashboards for fintech ' +
      'clients. Comfortable owning features end to end, ' +
      'from API contracts to pixel-perfect UI and tests.',
    skills: ['React', 'TypeScript', 'Redux', 'Jest', 'CSS'],
    status: 'pending',
    appliedAt: '2026-10-29',
    languages: ['Romanian', 'English C1', 'German A2'],
    desiredRole: 'Senior Frontend Developer',
    phone: '+40 722 555 114',
    links: {
      linkedin: 'https://linkedin.com/in/andrei-popescu',
      github: 'https://github.com/andrei-popescu',
      website: '',
    },
    experience: [
      {
        id: 'cand-2-exp-1',
        title: 'Frontend Developer',
        subtitle: 'Banca Transilvania',
        startDate: '2022-03',
        endDate: null,
        description:
          'Built the React dashboard used by 20k business clients and set up the shared component library.',
      },
      {
        id: 'cand-2-exp-2',
        title: 'Junior Frontend Developer',
        subtitle: 'Endava',
        startDate: '2021-01',
        endDate: '2022-02',
        description:
          'Delivered features for a UK insurance portal in Angular and React.',
      },
    ],
    education: [
      {
        id: 'cand-2-edu-1',
        title: 'Universitatea București',
        subtitle: 'BSc, Computer Science',
        startDate: '2017-10',
        endDate: '2020-07',
        description: '',
      },
    ],
    projects: [
      {
        id: 'cand-2-proj-1',
        title: 'Budget tracker',
        subtitle: 'React · TypeScript · Vite',
        startDate: '2023-06',
        endDate: '',
        description:
          'Open-source app with 400+ GitHub stars.',
      },
    ],
    certifications: [
      {
        id: 'cand-2-cert-1',
        title: 'Meta Front-End Developer',
        subtitle: 'Coursera',
        startDate: '2022-09',
        endDate: '',
        description: '',
      },
    ],
    cvFileName: 'Andrei_Popescu_CV.pdf',
    coverLetter:
      "Hello,\n\nI'm Andrei and I'm excited to apply for this role. My CV has more details about my experience and projects.\n\nThank you for your time!",
  },
  {
    id: 'cand-3',
    avatarInitial: 'V',
    name: 'Vlad Munteanu',
    headline: 'Full-stack Developer · Python & React',
    location: 'Remote',
    experienceYears: 5,
    jobTitle: 'Senior React Developer',
    summary:
      'Full-stack engineer who enjoys the frontend most. ' +
      'Led the migration of a large Django app to a React ' +
      'SPA and mentored two junior developers.',
    skills: ['React', 'Python', 'Django', 'PostgreSQL'],
    status: 'pending',
    appliedAt: '2026-10-29',
    languages: ['Romanian', 'English C2'],
    desiredRole: 'Senior Full-stack Developer',
    phone: '+40 723 555 121',
    links: {
      linkedin: 'https://linkedin.com/in/vlad-munteanu',
      github: 'https://github.com/vlad-munteanu',
      website: '',
    },
    experience: [
      {
        id: 'cand-3-exp-1',
        title: 'Full-stack Developer',
        subtitle: 'Fortech',
        startDate: '2021-04',
        endDate: null,
        description:
          'Leads a squad of four building Django APIs and React frontends for a logistics client.',
      },
      {
        id: 'cand-3-exp-2',
        title: 'Python Developer',
        subtitle: 'Cognizant',
        startDate: '2019-07',
        endDate: '2021-03',
        description:
          'Automated reporting pipelines that saved 30 hours per week.',
      },
    ],
    education: [
      {
        id: 'cand-3-edu-1',
        title: 'UPB',
        subtitle: 'BSc, Computer Engineering',
        startDate: '2015-10',
        endDate: '2019-07',
        description: '',
      },
    ],
    projects: [],
    certifications: [
      {
        id: 'cand-3-cert-1',
        title: 'AWS Certified Developer',
        subtitle: 'Amazon Web Services',
        startDate: '2022-11',
        endDate: '',
        description: '',
      },
    ],
    cvFileName: 'Vlad_Munteanu_CV.pdf',
    coverLetter:
      "Hello,\n\nI'm Vlad and I'm excited to apply for this role. My CV has more details about my experience and projects.\n\nThank you for your time!",
  },
  {
    id: 'cand-4',
    avatarInitial: 'E',
    name: 'Elena Stan',
    headline: 'Data Analyst · SQL & Power BI',
    location: 'Timișoara',
    experienceYears: 2,
    jobTitle: 'QA Automation Intern',
    summary:
      'Detail-oriented analyst who automates every report ' +
      'she touches. Wants to apply the same mindset to ' +
      'test automation and quality engineering.',
    skills: ['SQL', 'Power BI', 'Python', 'Excel'],
    status: 'pending',
    appliedAt: '2026-10-28',
    languages: ['Romanian', 'English B2'],
    desiredRole: 'QA Automation Engineer',
    phone: '+40 724 555 128',
    links: {
      linkedin: 'https://linkedin.com/in/elena-stan',
      github: 'https://github.com/elena-stan',
      website: '',
    },
    experience: [
      {
        id: 'cand-4-exp-1',
        title: 'Data Analyst',
        subtitle: 'Continental',
        startDate: '2023-09',
        endDate: null,
        description:
          'Built Power BI dashboards for production quality and wrote SQL checks for data pipelines.',
      },
    ],
    education: [
      {
        id: 'cand-4-edu-1',
        title: 'UVT Timișoara',
        subtitle: 'MSc, Data Science',
        startDate: '2021-10',
        endDate: '2023-07',
        description:
          'Thesis on anomaly detection in sensor data.',
      },
    ],
    projects: [
      {
        id: 'cand-4-proj-1',
        title: 'Test data generator',
        subtitle: 'Python · Faker',
        startDate: '2024-01',
        endDate: '',
        description:
          'Script that creates realistic datasets for QA environments.',
      },
    ],
    certifications: [
      {
        id: 'cand-4-cert-1',
        title: 'ISTQB Foundation',
        subtitle: 'ISTQB',
        startDate: '2024-06',
        endDate: '',
        description: '',
      },
    ],
    cvFileName: 'Elena_Stan_CV.pdf',
    coverLetter:
      "Hello,\n\nI'm Elena and I'm excited to apply for this role. My CV has more details about my experience and projects.\n\nThank you for your time!",
  },
  {
    id: 'cand-5',
    avatarInitial: 'Ș',
    name: 'Ștefan Pop',
    headline: 'Frontend Developer · Vue & React',
    location: 'Oradea',
    experienceYears: 3,
    jobTitle: 'Senior React Developer',
    summary:
      'Builds fast, accessible interfaces with Vue and ' +
      'React. Recently shipped a design system used by ' +
      'four product teams.',
    skills: ['Vue', 'React', 'Accessibility', 'Storybook'],
    status: 'pending',
    appliedAt: '2026-10-27',
    languages: ['Romanian', 'English B2', 'Hungarian'],
    desiredRole: 'Frontend Developer',
    phone: '+40 725 555 135',
    links: {
      linkedin: 'https://linkedin.com/in/stefan-pop',
      github: 'https://github.com/stefan-pop',
      website: '',
    },
    experience: [
      {
        id: 'cand-5-exp-1',
        title: 'Frontend Developer',
        subtitle: 'Celestica',
        startDate: '2022-08',
        endDate: null,
        description:
          'Maintains a Vue 3 manufacturing portal and is migrating it to React.',
      },
      {
        id: 'cand-5-exp-2',
        title: 'Web Developer Intern',
        subtitle: 'Connectik',
        startDate: '2021-06',
        endDate: '2022-07',
        description:
          'Built landing pages and small WordPress plugins.',
      },
    ],
    education: [
      {
        id: 'cand-5-edu-1',
        title: 'Universitatea din Oradea',
        subtitle: 'BSc, Computer Engineering',
        startDate: '2018-10',
        endDate: '2022-07',
        description: '',
      },
    ],
    projects: [],
    certifications: [],
    cvFileName: 'Stefan_Pop_CV.pdf',
    coverLetter:
      "Hello,\n\nI'm Ștefan and I'm excited to apply for this role. My CV has more details about my experience and projects.\n\nThank you for your time!",
  },
  {
    id: 'cand-6',
    avatarInitial: 'M',
    name: 'Maria Ionescu',
    headline: 'Product Designer · UX Research',
    location: 'Cluj-Napoca',
    experienceYears: 6,
    jobTitle: 'Product Designer',
    summary:
      'Product designer with a research background. Runs ' +
      'user interviews every sprint and turns insights ' +
      'into clear, testable prototypes.',
    skills: ['Figma', 'User research', 'Prototyping'],
    status: 'pending',
    appliedAt: '2026-10-27',
    languages: ['Romanian', 'English C2', 'French B1'],
    desiredRole: 'Lead Product Designer',
    phone: '+40 726 555 142',
    links: {
      linkedin: 'https://linkedin.com/in/maria-ionescu',
      github: '',
      website: '',
    },
    experience: [
      {
        id: 'cand-6-exp-1',
        title: 'Senior Product Designer',
        subtitle: 'UiPath',
        startDate: '2021-05',
        endDate: null,
        description:
          'Owns the design of the automation studio onboarding; ran 60+ user interviews.',
      },
      {
        id: 'cand-6-exp-2',
        title: 'UX Designer',
        subtitle: 'Yonder',
        startDate: '2018-09',
        endDate: '2021-04',
        description:
          'Designed B2B healthcare and fintech products end to end.',
      },
    ],
    education: [
      {
        id: 'cand-6-edu-1',
        title: 'UBB Cluj-Napoca',
        subtitle: 'BA, Design',
        startDate: '2014-10',
        endDate: '2017-07',
        description: '',
      },
    ],
    projects: [
      {
        id: 'cand-6-proj-1',
        title: 'Design system audit',
        subtitle: 'Figma · Storybook',
        startDate: '2023-02',
        endDate: '',
        description:
          'Unified three component libraries into one.',
      },
    ],
    certifications: [
      {
        id: 'cand-6-cert-1',
        title: 'UX Certificate',
        subtitle: 'Nielsen Norman Group',
        startDate: '2020-11',
        endDate: '',
        description: '',
      },
    ],
    cvFileName: 'Maria_Ionescu_CV.pdf',
    coverLetter:
      "Hello,\n\nI'm Maria and I'm excited to apply for this role. My CV has more details about my experience and projects.\n\nThank you for your time!",
  },
  {
    id: 'cand-7',
    avatarInitial: 'A',
    name: 'Alexandru Dumitru',
    headline: 'Backend Developer · Node.js & AWS',
    location: 'Iași',
    experienceYears: 4,
    jobTitle: 'Backend Engineer (Node.js)',
    summary:
      'Designs and runs Node.js microservices on AWS. ' +
      'Cares about observability, clean APIs and keeping ' +
      'on-call quiet.',
    skills: ['Node.js', 'AWS', 'PostgreSQL', 'Docker'],
    status: 'pending',
    appliedAt: '2026-10-26',
    languages: ['Romanian', 'English C1'],
    desiredRole: 'Senior Backend Engineer',
    phone: '+40 727 555 149',
    links: {
      linkedin: 'https://linkedin.com/in/alexandru-dumitru',
      github: 'https://github.com/alexandru-dumitru',
      website: '',
    },
    experience: [
      {
        id: 'cand-7-exp-1',
        title: 'Backend Developer',
        subtitle: 'Amazon',
        startDate: '2022-02',
        endDate: null,
        description:
          'Works on Node.js services for the fulfilment network, handling 5M events per day.',
      },
      {
        id: 'cand-7-exp-2',
        title: 'Node.js Developer',
        subtitle: 'Centric IT',
        startDate: '2020-07',
        endDate: '2022-01',
        description:
          'Built REST APIs and CI pipelines for retail clients.',
      },
    ],
    education: [
      {
        id: 'cand-7-edu-1',
        title: 'TUIASI',
        subtitle: 'BSc, Computer Engineering',
        startDate: '2016-10',
        endDate: '2020-07',
        description: '',
      },
    ],
    projects: [],
    certifications: [
      {
        id: 'cand-7-cert-1',
        title: 'AWS Solutions Architect',
        subtitle: 'Amazon Web Services',
        startDate: '2023-04',
        endDate: '',
        description: '',
      },
    ],
    cvFileName: 'Alexandru_Dumitru_CV.pdf',
    coverLetter:
      "Hello,\n\nI'm Alexandru and I'm excited to apply for this role. My CV has more details about my experience and projects.\n\nThank you for your time!",
  },
  {
    id: 'cand-8',
    avatarInitial: 'C',
    name: 'Cristina Marin',
    headline: 'UI Designer · Mobile apps',
    location: 'Brașov',
    experienceYears: 2,
    jobTitle: 'Product Designer',
    summary:
      'Visual designer focused on mobile apps. Loves ' +
      'motion details and building component libraries ' +
      'that developers actually enjoy using.',
    skills: ['Figma', 'Motion', 'iOS', 'Android'],
    status: 'pending',
    appliedAt: '2026-10-25',
    languages: ['Romanian', 'English B2'],
    desiredRole: 'Product Designer',
    phone: '+40 728 555 156',
    links: {
      linkedin: 'https://linkedin.com/in/cristina-marin',
      github: '',
      website: '',
    },
    experience: [
      {
        id: 'cand-8-exp-1',
        title: 'UI Designer',
        subtitle: 'Freelance',
        startDate: '2023-04',
        endDate: null,
        description:
          'Designs mobile apps for startups in fitness and food delivery.',
      },
      {
        id: 'cand-8-exp-2',
        title: 'Junior UI Designer',
        subtitle: 'Ascendia',
        startDate: '2022-03',
        endDate: '2023-03',
        description:
          'Created learning app interfaces and illustrations.',
      },
    ],
    education: [
      {
        id: 'cand-8-edu-1',
        title: 'Universitatea Transilvania',
        subtitle: 'BA, Visual Arts',
        startDate: '2019-10',
        endDate: '2022-07',
        description: '',
      },
    ],
    projects: [
      {
        id: 'cand-8-proj-1',
        title: 'Recipe app concept',
        subtitle: 'Figma · Protopie',
        startDate: '2024-02',
        endDate: '',
        description: 'Case study featured on Behance.',
      },
    ],
    certifications: [],
    cvFileName: 'Cristina_Marin_CV.pdf',
    coverLetter:
      "Hello,\n\nI'm Cristina and I'm excited to apply for this role. My CV has more details about my experience and projects.\n\nThank you for your time!",
  },
  {
    id: 'cand-9',
    avatarInitial: 'A',
    name: 'Andrei Popescu',
    headline: 'Frontend Developer · React & TypeScript',
    location: 'București',
    experienceYears: 4,
    jobTitle: 'QA Automation Intern',
    summary:
      'Four years building React dashboards for fintech ' +
      'clients. Comfortable owning features end to end, ' +
      'from API contracts to pixel-perfect UI and tests.',
    skills: ['React', 'TypeScript', 'Redux', 'Jest', 'CSS'],
    status: 'shortlisted',
    appliedAt: '2026-10-24',
    languages: ['Romanian', 'English C1', 'German A2'],
    desiredRole: 'Senior Frontend Developer',
    phone: '+40 729 555 163',
    links: {
      linkedin: 'https://linkedin.com/in/andrei-popescu',
      github: 'https://github.com/andrei-popescu',
      website: '',
    },
    experience: [
      {
        id: 'cand-9-exp-1',
        title: 'Frontend Developer',
        subtitle: 'Banca Transilvania',
        startDate: '2022-03',
        endDate: null,
        description:
          'Built the React dashboard used by 20k business clients and set up the shared component library.',
      },
      {
        id: 'cand-9-exp-2',
        title: 'Junior Frontend Developer',
        subtitle: 'Endava',
        startDate: '2021-01',
        endDate: '2022-02',
        description:
          'Delivered features for a UK insurance portal in Angular and React.',
      },
    ],
    education: [
      {
        id: 'cand-9-edu-1',
        title: 'Universitatea București',
        subtitle: 'BSc, Computer Science',
        startDate: '2017-10',
        endDate: '2020-07',
        description: '',
      },
    ],
    projects: [
      {
        id: 'cand-9-proj-1',
        title: 'Budget tracker',
        subtitle: 'React · TypeScript · Vite',
        startDate: '2023-06',
        endDate: '',
        description:
          'Open-source app with 400+ GitHub stars.',
      },
    ],
    certifications: [
      {
        id: 'cand-9-cert-1',
        title: 'Meta Front-End Developer',
        subtitle: 'Coursera',
        startDate: '2022-09',
        endDate: '',
        description: '',
      },
    ],
    cvFileName: 'Andrei_Popescu_CV.pdf',
    coverLetter:
      "Hello,\n\nI'm Andrei and I'm excited to apply for this role. My CV has more details about my experience and projects.\n\nThank you for your time!",
  },
  {
    id: 'cand-10',
    avatarInitial: 'A',
    name: 'Ana Rădulescu',
    headline: 'Graduate · Junior QA',
    location: 'Constanța',
    experienceYears: 0,
    jobTitle: 'QA Automation Intern',
    summary:
      'Computer science graduate who wrote her thesis on ' +
      'automated UI testing. Eager to learn and grow in a ' +
      'product team.',
    skills: ['Cypress', 'JavaScript', 'Git'],
    status: 'shortlisted',
    appliedAt: '2026-10-23',
    languages: ['Romanian', 'English B2'],
    desiredRole: 'QA Automation Intern',
    phone: '+40 730 555 170',
    links: {
      linkedin: 'https://linkedin.com/in/ana-radulescu',
      github: 'https://github.com/ana-radulescu',
      website: '',
    },
    experience: [
      {
        id: 'cand-10-exp-1',
        title: 'QA Intern',
        subtitle: 'Endava',
        startDate: '2026-02',
        endDate: null,
        description:
          'Writes Cypress tests for a banking web app.',
      },
    ],
    education: [
      {
        id: 'cand-10-edu-1',
        title: 'Universitatea Ovidius',
        subtitle: 'BSc, Computer Science',
        startDate: '2022-10',
        endDate: '2026-07',
        description:
          'Thesis on automated accessibility testing.',
      },
    ],
    projects: [
      {
        id: 'cand-10-proj-1',
        title: 'Playwright starter kit',
        subtitle: 'Playwright · TypeScript',
        startDate: '2025-11',
        endDate: '',
        description:
          'Template repo with page objects and CI setup.',
      },
    ],
    certifications: [
      {
        id: 'cand-10-cert-1',
        title: 'ISTQB Foundation',
        subtitle: 'ISTQB',
        startDate: '2025-06',
        endDate: '',
        description: '',
      },
    ],
    cvFileName: 'Ana_Radulescu_CV.pdf',
    coverLetter:
      "Hello,\n\nI'm Ana and I'm excited to apply for this role. My CV has more details about my experience and projects.\n\nThank you for your time!",
  },
  {
    id: 'cand-11',
    avatarInitial: 'R',
    name: 'Radu Enache',
    headline: 'Backend Developer · Java & Spring',
    location: 'Sibiu',
    experienceYears: 7,
    jobTitle: 'Backend Engineer (Node.js)',
    summary:
      'Senior Java engineer moving to Node.js. Strong in ' +
      'system design, messaging and high-traffic APIs.',
    skills: ['Java', 'Spring', 'Kafka', 'Node.js'],
    status: 'shortlisted',
    appliedAt: '2026-10-22',
    languages: ['Romanian', 'English C1', 'German B2'],
    desiredRole: 'Lead Backend Engineer',
    phone: '+40 731 555 177',
    links: {
      linkedin: 'https://linkedin.com/in/radu-enache',
      github: 'https://github.com/radu-enache',
      website: '',
    },
    experience: [
      {
        id: 'cand-11-exp-1',
        title: 'Senior Java Developer',
        subtitle: 'Continental',
        startDate: '2020-03',
        endDate: null,
        description:
          'Designs Spring Boot microservices for vehicle diagnostics and mentors five developers.',
      },
      {
        id: 'cand-11-exp-2',
        title: 'Java Developer',
        subtitle: 'Atos',
        startDate: '2017-09',
        endDate: '2020-02',
        description:
          'Maintained billing systems for telecom clients.',
      },
    ],
    education: [
      {
        id: 'cand-11-edu-1',
        title: 'ULBS Sibiu',
        subtitle: 'BSc, Computer Engineering',
        startDate: '2013-10',
        endDate: '2017-07',
        description: '',
      },
    ],
    projects: [],
    certifications: [
      {
        id: 'cand-11-cert-1',
        title: 'Oracle Certified Professional, Java SE 17',
        subtitle: 'Oracle',
        startDate: '2022-05',
        endDate: '',
        description: '',
      },
    ],
    cvFileName: 'Radu_Enache_CV.pdf',
    coverLetter:
      "Hello,\n\nI'm Radu and I'm excited to apply for this role. My CV has more details about my experience and projects.\n\nThank you for your time!",
  },
  {
    id: 'cand-12',
    avatarInitial: 'D',
    name: 'Diana Toma',
    headline: 'Product Designer · SaaS',
    location: 'Remote',
    experienceYears: 4,
    jobTitle: 'Product Designer',
    summary:
      'Designs B2B SaaS products from discovery to ' +
      'delivery. Comfortable with data-heavy screens and ' +
      'complex permission flows.',
    skills: ['Figma', 'Design systems', 'Workshops'],
    status: 'shortlisted',
    appliedAt: '2026-10-21',
    languages: ['Romanian', 'English C2'],
    desiredRole: 'Senior Product Designer',
    phone: '+40 732 555 184',
    links: {
      linkedin: 'https://linkedin.com/in/diana-toma',
      github: '',
      website: '',
    },
    experience: [
      {
        id: 'cand-12-exp-1',
        title: 'Product Designer',
        subtitle: 'Bolt',
        startDate: '2022-06',
        endDate: null,
        description:
          'Designs driver-side flows in the Bolt app used in 45+ countries.',
      },
      {
        id: 'cand-12-exp-2',
        title: 'UX/UI Designer',
        subtitle: 'Ness',
        startDate: '2020-09',
        endDate: '2022-05',
        description:
          'Shipped dashboards for SaaS analytics products.',
      },
    ],
    education: [
      {
        id: 'cand-12-edu-1',
        title: 'UNArte București',
        subtitle: 'BA, Graphic Design',
        startDate: '2016-10',
        endDate: '2019-07',
        description: '',
      },
    ],
    projects: [],
    certifications: [
      {
        id: 'cand-12-cert-1',
        title: 'Interaction Design Specialization',
        subtitle: 'UC San Diego',
        startDate: '2021-03',
        endDate: '',
        description: '',
      },
    ],
    cvFileName: 'Diana_Toma_CV.pdf',
    coverLetter:
      "Hello,\n\nI'm Diana and I'm excited to apply for this role. My CV has more details about my experience and projects.\n\nThank you for your time!",
  },
  {
    id: 'cand-13',
    avatarInitial: 'M',
    name: 'Mihai Constantin',
    headline: 'Mobile Developer · Flutter & Kotlin',
    location: 'Cluj-Napoca',
    experienceYears: 4,
    jobTitle: 'Senior React Developer',
    summary:
      'Mobile developer shipping Flutter and native ' +
      'Android apps. Curious about React and web ' +
      'performance.',
    skills: ['Flutter', 'Kotlin', 'Firebase'],
    status: 'rejected',
    appliedAt: '2026-10-20',
    languages: ['Romanian', 'English C1'],
    desiredRole: 'Senior Mobile Developer',
    phone: '+40 733 555 191',
    links: {
      linkedin: 'https://linkedin.com/in/mihai-constantin',
      github: 'https://github.com/mihai-constantin',
      website: '',
    },
    experience: [
      {
        id: 'cand-13-exp-1',
        title: 'Mobile Developer',
        subtitle: 'Wolters Kluwer',
        startDate: '2022-01',
        endDate: null,
        description:
          'Builds the Flutter app for tax professionals with 100k+ downloads.',
      },
      {
        id: 'cand-13-exp-2',
        title: 'Android Developer',
        subtitle: 'Accenture',
        startDate: '2020-08',
        endDate: '2021-12',
        description:
          'Developed Kotlin apps for retail banking clients.',
      },
    ],
    education: [
      {
        id: 'cand-13-edu-1',
        title: 'UTCN',
        subtitle: 'BSc, Computer Engineering',
        startDate: '2016-10',
        endDate: '2020-07',
        description: '',
      },
    ],
    projects: [
      {
        id: 'cand-13-proj-1',
        title: 'Habit tracker',
        subtitle: 'Flutter · Firebase',
        startDate: '2023-08',
        endDate: '',
        description:
          'Published on Google Play, 10k installs.',
      },
    ],
    certifications: [
      {
        id: 'cand-13-cert-1',
        title: 'Associate Android Developer',
        subtitle: 'Google',
        startDate: '2021-02',
        endDate: '',
        description: '',
      },
    ],
    cvFileName: 'Mihai_Constantin_CV.pdf',
    coverLetter:
      "Hello,\n\nI'm Mihai and I'm excited to apply for this role. My CV has more details about my experience and projects.\n\nThank you for your time!",
  },
  {
    id: 'cand-14',
    avatarInitial: 'G',
    name: 'George Stoica',
    headline: 'QA Engineer · Manual testing',
    location: 'Craiova',
    experienceYears: 2,
    jobTitle: 'QA Automation Intern',
    summary:
      'Manual tester with two years in e-commerce. ' +
      'Learning Playwright to move into automation.',
    skills: ['Manual testing', 'Jira', 'Playwright'],
    status: 'rejected',
    appliedAt: '2026-10-19',
    languages: ['Romanian', 'English B2'],
    desiredRole: 'QA Automation Engineer',
    phone: '+40 734 555 198',
    links: {
      linkedin: 'https://linkedin.com/in/george-stoica',
      github: '',
      website: '',
    },
    experience: [
      {
        id: 'cand-14-exp-1',
        title: 'QA Engineer',
        subtitle: 'Syncro Soft',
        startDate: '2024-03',
        endDate: null,
        description:
          'Tests the Oxygen XML editor releases and writes detailed bug reports.',
      },
    ],
    education: [
      {
        id: 'cand-14-edu-1',
        title: 'Universitatea din Craiova',
        subtitle: 'BSc, Automation',
        startDate: '2019-10',
        endDate: '2023-07',
        description: '',
      },
    ],
    projects: [],
    certifications: [
      {
        id: 'cand-14-cert-1',
        title: 'ISTQB Foundation',
        subtitle: 'ISTQB',
        startDate: '2024-09',
        endDate: '',
        description: '',
      },
    ],
    cvFileName: 'George_Stoica_CV.pdf',
    coverLetter:
      "Hello,\n\nI'm George and I'm excited to apply for this role. My CV has more details about my experience and projects.\n\nThank you for your time!",
  },
];
