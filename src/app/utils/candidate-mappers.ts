import { Application } from '../models/application';
import { Candidate } from '../models/candidate';
import { Job } from '../models/job';
import { CandidateProfile } from '../models/profile';

export function candidateToProfile(
  candidate: Candidate,
): CandidateProfile {
  return {
    fullName: candidate.name,
    headline: candidate.headline,
    location: candidate.location,
    phone: candidate.phone,
    desiredRole: candidate.desiredRole,
    yearsOfExperience: candidate.experienceYears,
    about: candidate.summary,
    avatarUrl: null,
    links: candidate.links,
    experience: candidate.experience,
    education: candidate.education,
    projects: candidate.projects,
    certifications: candidate.certifications,
    skills: candidate.skills,
    languages: candidate.languages,
    cvFileName: candidate.cvFileName,
    coverLetter: candidate.coverLetter,
  };
}

export function candidateToJob(
  candidate: Candidate,
  experienceLabel: string,
): Job {
  return {
    id: candidate.id,
    avatarInitial: candidate.avatarInitial,
    title: candidate.name,
    company: candidate.headline,
    location: candidate.location,
    workType: candidate.jobTitle,
    contract: '',
    seniority: '',
    salary: `${candidate.experienceYears} ${experienceLabel}`,
    description: candidate.summary,
    tags: candidate.skills,
    candidateProfile: candidateToProfile(candidate),
  };
}

export function candidateToApplication(
  candidate: Candidate,
): Application {
  return {
    id: candidate.id,
    title: candidate.name,
    company: candidate.jobTitle,
    location: candidate.location,
    status: candidate.status,
    appliedAt: candidate.appliedAt,
  };
}
