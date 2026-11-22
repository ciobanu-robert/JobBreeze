import { CompanyProfile } from '../../models/company';
import { DEMO_COMPANY_PROFILE } from '../../pages/profile/demo-company';

const DEMO_COMPANIES: CompanyProfile[] = [
  {
    name: 'Northwind Labs',
    industry: 'Fintech',
    location: 'Berlin · Remote-first',
    size: '24',
    founded: '2021',
    benefits: [
      'Remote budget',
      'Learning stipend',
      '30 days off',
      'Stock options',
    ],
    about:
      'Northwind Labs builds money tools for freelancers: ' +
      'invoicing, instant payouts and tax estimates in one ' +
      'app. We are a remote-first team spread across ' +
      'Europe, backed by two leading fintech funds, and we ' +
      'ship to production every week.',
    links: {
      linkedin:
        'https://linkedin.com/company/northwind-labs',
      website: 'https://northwind.example',
    },
  },
  {
    name: 'Vela Software',
    industry: 'B2B SaaS',
    location: 'Cluj-Napoca',
    size: '100-200',
    founded: '2014',
    benefits: [
      'Private healthcare',
      'Meal tickets',
      'Gym membership',
      'Hybrid schedule',
    ],
    about:
      'Vela Software makes scheduling and workforce tools ' +
      'used by 2,000+ companies. Product-led teams, short ' +
      'release cycles and a strong engineering culture ' +
      'with regular tech talks and hack weeks.',
    links: {
      linkedin:
        'https://linkedin.com/company/vela-software',
      website: 'https://vela.example',
    },
  },
  {
    name: 'Brightline',
    industry: 'Customer experience',
    location: 'Bucharest',
    size: '50-100',
    founded: '2018',
    benefits: [
      'Performance bonus',
      'Private healthcare',
      'Team retreats',
      'Modern office',
    ],
    about:
      'Brightline helps e-commerce brands support their ' +
      'customers across chat, email and social, with an ' +
      'AI-assisted inbox loved by support teams in 12 ' +
      'countries.',
    links: {
      linkedin: 'https://linkedin.com/company/brightline',
      website: 'https://brightline.example',
    },
  },
  DEMO_COMPANY_PROFILE,
];

export function companyCardProfile(
  company: string,
): CompanyProfile | undefined {
  return DEMO_COMPANIES.find(
    (profile) => profile.name === company,
  );
}
