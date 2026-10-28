import { CandidateProfile } from '../../models/profile';

export const DEMO_PROFILE: CandidateProfile = {
  fullName: 'Robert Ciobanu',
  headline: 'Frontend Developer · Angular & TypeScript',
  location: 'București',
  phone: '',
  desiredRole: 'Senior Frontend Developer',
  yearsOfExperience: 4,
  about:
    'Construiesc interfețe rapide și accesibile. ' +
    'Îmi plac design systems, animațiile fine și ' +
    'produsele folosite zilnic de mii de oameni.',
  avatarUrl: null,
  links: {
    linkedin: 'https://linkedin.com/in/robert-ciobanu',
    github: '',
    website: '',
  },
  experience: [
    {
      id: 'exp-1',
      title: 'Frontend Developer',
      subtitle: 'Bitdefender',
      startDate: '2022-03',
      endDate: null,
      description:
        'Am reconstruit dashboard-ul clienților în ' +
        'Angular, reducând timpul de încărcare cu 40%.',
    },
    {
      id: 'exp-2',
      title: 'Junior Web Developer',
      subtitle: 'Evozon',
      startDate: '2020-07',
      endDate: '2022-02',
      description:
        'Aplicații web pentru clienți din retail și fintech.',
    },
  ],
  education: [
    {
      id: 'edu-1',
      title: 'Universitatea Politehnica București',
      subtitle: 'Licență, Calculatoare',
      startDate: '2016-10',
      endDate: '2020-07',
      description: '',
    },
  ],
  projects: [],
  certifications: [],
  skills: [
    'Angular',
    'TypeScript',
    'RxJS',
    'SCSS',
    'Figma',
    'Vitest',
  ],
  cvFileName: null,
  coverLetter:
    'Bună ziua,\n\n' +
    'Sunt Robert Ciobanu și caut un rol de Senior ' +
    'Frontend Developer. Construiesc interfețe rapide ' +
    'și accesibile.\n\n' +
    'Vă mulțumesc pentru timpul acordat!',
};
