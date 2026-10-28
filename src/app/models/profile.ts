export type ProfileTab =
  'personal' | 'career' | 'documents';

export type ProfileEntryKind =
  | 'experience'
  | 'education'
  | 'projects'
  | 'certifications';

export interface ProfileEntry {
  id: string;
  title: string;
  subtitle: string;
  startDate: string;
  endDate: string | null;
  description: string;
}

export interface ProfileLinks {
  linkedin: string;
  github: string;
  website: string;
}

export interface CandidateProfile {
  fullName: string;
  headline: string;
  location: string;
  phone: string;
  desiredRole: string;
  yearsOfExperience: number;
  about: string;
  avatarUrl: string | null;
  links: ProfileLinks;
  experience: ProfileEntry[];
  education: ProfileEntry[];
  projects: ProfileEntry[];
  certifications: ProfileEntry[];
  skills: string[];
  cvFileName: string | null;
  coverLetter: string;
}
