import { CandidateStatus } from './candidate';

export type ExperienceRange =
  '' | 'entry' | 'mid' | 'senior';

export interface CandidateFilters {
  jobTitle: string;
  status: CandidateStatus | '';
  location: string;
  experience: ExperienceRange;
  skill: string;
}

export const EMPTY_CANDIDATE_FILTERS: CandidateFilters = {
  jobTitle: '',
  status: '',
  location: '',
  experience: '',
  skill: '',
};
