import {
  Component,
  inject,
  input,
  output,
  signal,
} from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { Job } from '../../models/job';
import { ProfileSectionHeader } from '../profile-section-header/profile-section-header';
import { JobPostCard } from '../job-post-card/job-post-card';

@Component({
  selector: 'app-profile-jobs-tab',
  imports: [ProfileSectionHeader, JobPostCard],
  styleUrl: './profile-jobs-tab.scss',
  templateUrl: './profile-jobs-tab.html',
})
export class ProfileJobsTab {
  protected readonly language = inject(LanguageService);

  readonly jobs = input.required<Job[]>();
  readonly companyName = input.required<string>();
  readonly changed = output<Job[]>();

  protected readonly editingId = signal<string | null>(
    null,
  );

  protected addJob(): void {
    const company = this.companyName();
    const job: Job = {
      id: `job-${Date.now()}`,
      avatarInitial: company.charAt(0).toUpperCase(),
      title: '',
      company,
      location: '',
      workType: 'Remote',
      contract: 'Full-time',
      seniority: 'Mid-level',
      salary: '',
      description: '',
      tags: [],
    };
    this.changed.emit([job, ...this.jobs()]);
    this.editingId.set(job.id);
  }

  protected saveJob(updated: Job): void {
    this.changed.emit(
      this.jobs().map((job) =>
        job.id === updated.id ? updated : job,
      ),
    );
    this.editingId.set(null);
  }

  protected removeJob(id: string): void {
    this.changed.emit(
      this.jobs().filter((job) => job.id !== id),
    );
    if (this.editingId() === id) {
      this.editingId.set(null);
    }
  }

  protected cancelEdit(job: Job): void {
    if (!job.title) {
      this.removeJob(job.id);
    }
    this.editingId.set(null);
  }
}
