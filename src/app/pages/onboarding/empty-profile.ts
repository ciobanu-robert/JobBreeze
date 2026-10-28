import { CandidateProfile } from '../../models/profile';

export const EMPTY_PROFILE: CandidateProfile = {
  fullName: '',
  headline: '',
  location: '',
  phone: '',
  desiredRole: '',
  yearsOfExperience: 0,
  about: '',
  avatarUrl: null,
  links: {
    linkedin: '',
    github: '',
    website: '',
  },
  experience: [],
  education: [],
  projects: [],
  certifications: [],
  skills: [],
  cvFileName: null,
  coverLetter: '',
};
