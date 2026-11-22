import { CompanyProfile } from './company';
import { CandidateProfile } from './profile';

export interface Job {
  id: string;
  avatarInitial: string;
  title: string;
  company: string;
  location: string;
  workType: string;
  contract: string;
  seniority: string;
  salary: string;
  description: string;
  tags: string[];
  candidateProfile?: CandidateProfile;
  companyProfile?: CompanyProfile;
}
