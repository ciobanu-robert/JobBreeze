import { Job } from '../../models/job';

export const DEMO_JOBS: Job[] = [
  {
    id: 'demo-1',
    avatarInitial: 'N',
    title: 'UX/UI Designer',
    company: 'Northwind Labs',
    location: 'Remote',
    workType: 'Remote',
    seniority: 'Mid-level',
    salary: '€3200-4200',
    description:
      'Shape delightful flows for a fast-growing fintech app used by thousands of freelancers every day.',
    tags: ['Figma', 'Design systems', 'Prototyping'],
  },
  {
    id: 'demo-2',
    avatarInitial: 'V',
    title: 'Frontend Engineer',
    company: 'Vela Software',
    location: 'Cluj-Napoca',
    workType: 'Hybrid',
    seniority: 'Mid-level',
    salary: '€3800-5000',
    description:
      'Build the customer dashboard alongside a small product team that ships weekly and cares about clean UI.',
    tags: ['Angular', 'TypeScript', 'RxJS'],
  },
  {
    id: 'demo-3',
    avatarInitial: 'B',
    title: 'Customer Success Lead',
    company: 'Brightline',
    location: 'Bucharest',
    workType: 'On-site',
    seniority: 'Senior',
    salary: '€2800-3600',
    description:
      'Own onboarding and retention for our top accounts, working closely with sales and product.',
    tags: ['Communication', 'SaaS', 'CRM'],
  },
];
