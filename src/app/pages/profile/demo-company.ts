import { CompanyProfile } from '../../models/company';
import { Job } from '../../models/job';

export const DEMO_COMPANY_PROFILE: CompanyProfile = {
  name: 'NovaTech Solutions',
  industry: 'Software & IT services',
  location: 'București',
  size: '50-200',
  founded: '2016',
  benefits: [
    'Program hibrid',
    'Abonament medical',
    'Buget de training',
    'Tichete de masă',
  ],
  about:
    'Construim produse SaaS pentru retail și logistică, ' +
    'folosite zilnic de peste 300 de clienți din Europa. ' +
    'Echipă hibridă, procese simple și mult ownership.',
  links: {
    linkedin: 'https://linkedin.com/company/novatech',
    website: 'https://novatech.example',
  },
};

export const DEMO_COMPANY_JOBS: Job[] = [
  {
    id: 'novatech-1',
    avatarInitial: 'N',
    title: 'Senior React Developer',
    company: 'NovaTech Solutions',
    location: 'București',
    workType: 'Hybrid',
    contract: 'Full-time',
    seniority: 'Senior',
    salary: '€4000-5500',
    description:
      'Vei conduce dezvoltarea dashboard-ului nostru ' +
      'pentru retaileri, alături de o echipă de 6 ' +
      'ingineri și un designer dedicat.',
    tags: ['React', 'TypeScript', 'GraphQL'],
  },
  {
    id: 'novatech-2',
    avatarInitial: 'N',
    title: 'Backend Engineer (Node.js)',
    company: 'NovaTech Solutions',
    location: 'Remote',
    workType: 'Remote',
    contract: 'Full-time',
    seniority: 'Mid-level',
    salary: '€3200-4500',
    description:
      'Construiești API-uri scalabile pentru modulul de ' +
      'logistică și integrările cu partenerii noștri.',
    tags: ['Node.js', 'PostgreSQL', 'AWS'],
  },
];
