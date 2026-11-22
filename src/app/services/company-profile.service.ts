import { Injectable, signal } from '@angular/core';
import { CompanyProfile } from '../models/company';
import { Job } from '../models/job';
import {
  DEMO_COMPANY_JOBS,
  DEMO_COMPANY_PROFILE,
} from '../pages/profile/demo-company';

@Injectable({ providedIn: 'root' })
export class CompanyProfileService {
  private readonly profileStore = signal<CompanyProfile>(
    DEMO_COMPANY_PROFILE,
  );
  private readonly jobsStore = signal<Job[]>(
    DEMO_COMPANY_JOBS,
  );

  readonly profile = this.profileStore.asReadonly();
  readonly jobs = this.jobsStore.asReadonly();

  update(changes: Partial<CompanyProfile>): void {
    this.profileStore.update((current) => ({
      ...current,
      ...changes,
    }));
  }

  setJobs(jobs: Job[]): void {
    this.jobsStore.set(jobs);
  }
}
