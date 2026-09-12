import { Job } from '../../models/job';

export const DEMO_JOBS: Job[] = [
  {
    id: 'demo-1',
    avatarInitial: 'N',
    title: 'UX/UI Designer',
    company: 'Northwind Labs',
    location: 'Remote',
    workType: 'Remote',
    contract: 'Full-time',
    seniority: 'Mid-level',
    salary: '€3200-4200',
    description:
      'Northwind Labs is reinventing how independent workers manage their money, and we need a ' +
      'designer who can turn complex financial flows into something that feels effortless. ' +
      "You'll own the end-to-end experience for onboarding, invoicing, and instant payouts, " +
      'partnering closely with product and engineering to ship fast without sacrificing craft. ' +
      "We're a remote-first team of 24 spread across Europe, backed by two of the region's " +
      "leading fintech investors, and we ship to production every single week. You'll also run " +
      'regular usability sessions with real freelancers and translate that feedback directly ' +
      'into our design system.',
    tags: ['Figma', 'Design systems', 'Prototyping'],
  },
  {
    id: 'demo-2',
    avatarInitial: 'V',
    title: 'Frontend Engineer',
    company: 'Vela Software',
    location: 'Cluj-Napoca',
    workType: 'Hybrid',
    contract: 'Contract',
    seniority: 'Mid-level',
    salary: '€3800-5000',
    description:
      'Vela Software builds the operations dashboard that mid-market logistics companies rely ' +
      "on to track shipments in real time. As a Frontend Engineer, you'll rebuild core parts of " +
      'the customer-facing dashboard in Angular, work directly with our two founders on weekly ' +
      'releases, and help set the technical direction for a UI that thousands of dispatchers ' +
      "depend on every day. We're a tight five-person team based in Cluj-Napoca that values " +
      'clean code, fast feedback loops, and genuinely enjoying the people we work with. Expect ' +
      'a proper onboarding, a say in the tools we adopt, and zero bureaucracy.',
    tags: ['Angular', 'TypeScript', 'RxJS'],
  },
  {
    id: 'demo-3',
    avatarInitial: 'B',
    title: 'Customer Success Lead',
    company: 'Brightline',
    location: 'Bucharest',
    workType: 'On-site',
    contract: 'Full-time',
    seniority: 'Senior',
    salary: '€2800-3600',
    description:
      'Brightline helps enterprise HR teams automate benefits administration, and our top ' +
      'accounts need someone who can turn renewals into long-term partnerships. As Customer ' +
      "Success Lead, you'll own onboarding, adoption, and expansion for our highest-value " +
      'clients, working hand in hand with sales on renewals and with product on the roadmap ' +
      "items that matter most to them. You'll manage a portfolio of roughly 30 accounts, run " +
      'quarterly business reviews, and act as the voice of the customer in every internal ' +
      'planning meeting. Prior experience in HR tech or enterprise SaaS is a strong plus.',
    tags: ['Communication', 'SaaS', 'CRM'],
  },
];
