import { ProfileEntry, ProfileLinks } from './profile';

export type CandidateStatus =
  'pending' | 'shortlisted' | 'rejected';

export interface Candidate {
  id: string;
  avatarInitial: string;
  name: string;
  headline: string;
  location: string;
  experienceYears: number;
  jobTitle: string;
  summary: string;
  skills: string[];
  languages: string[];
  status: CandidateStatus;
  appliedAt: string;
  desiredRole: string;
  phone: string;
  links: ProfileLinks;
  experience: ProfileEntry[];
  education: ProfileEntry[];
  projects: ProfileEntry[];
  certifications: ProfileEntry[];
  cvFileName: string | null;
  coverLetter: string;
}
