export type ApplicationStatus =
  'pending' | 'shortlisted' | 'rejected' | 'accepted';

export interface Application {
  id: string;
  title: string;
  company: string;
  location: string;
  status: ApplicationStatus;
  appliedAt: string;
}
