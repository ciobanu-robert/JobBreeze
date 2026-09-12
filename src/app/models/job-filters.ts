export interface JobFilters {
  location: string;
  remoteMode: string;
  contract: string;
  seniority: string;
  salaryMin: number | null;
}

export const EMPTY_JOB_FILTERS: JobFilters = {
  location: '',
  remoteMode: '',
  contract: '',
  seniority: '',
  salaryMin: null,
};
