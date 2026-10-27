import { Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { ThemeService } from '../../services/theme.service';
import { JobSwipeCard } from '../job-swipe-card/job-swipe-card';
import { Job } from '../../models/job';

@Component({
  imports: [JobSwipeCard],
  selector: 'app-job-card-stack',
  styleUrl: './job-card-stack.scss',
  templateUrl: './job-card-stack.html',
})
export class JobCardStack {
  protected readonly language = inject(LanguageService);
  protected readonly theme = inject(ThemeService);

  // Rebuilt on language change so the preview stays translated
  protected readonly previewJob = computed<Job>(() => ({
    id: 'landing-preview',
    avatarInitial: 'L',
    title: this.language.t('jobCard.title'),
    company: this.language.t('jobCard.company'),
    location: this.language.t('jobCard.location'),
    workType: this.language.t('jobCard.workType'),
    contract: 'Full-time',
    seniority: this.language.t('jobCard.seniority'),
    salary: '€3500-4500',
    description: this.language.t('jobCard.description'),
    tags: ['Figma', 'UX research', 'Prototyping'],
  }));
}
