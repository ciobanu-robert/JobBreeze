import {
  Component,
  HostListener,
  effect,
  inject,
  input,
  output,
  signal,
} from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { ThemeService } from '../../services/theme.service';
import { SessionService } from '../../services/session.service';
import { CandidateStatus } from '../../models/candidate';
import {
  CandidateFilters,
  EMPTY_CANDIDATE_FILTERS,
  ExperienceRange,
} from '../../models/candidate-filters';
import {
  EMPTY_JOB_FILTERS,
  JobFilters,
} from '../../models/job-filters';

@Component({
  imports: [],
  selector: 'app-filters-panel',
  styleUrl: './filters-panel.scss',
  templateUrl: './filters-panel.html',
})
export class FiltersPanel {
  readonly open = input(false);
  readonly filters = input<JobFilters>(EMPTY_JOB_FILTERS);
  readonly closed = output<void>();
  readonly applied = output<JobFilters>();
  readonly candidateFilters = input<CandidateFilters>(
    EMPTY_CANDIDATE_FILTERS,
  );
  readonly jobTitles = input<string[]>([]);
  readonly candidatesApplied = output<CandidateFilters>();

  protected readonly language = inject(LanguageService);
  protected readonly theme = inject(ThemeService);
  protected readonly session = inject(SessionService);

  protected readonly location = signal('');
  protected readonly remoteMode = signal('');
  protected readonly contract = signal('');
  protected readonly seniority = signal('');
  protected readonly salaryMin = signal<number | null>(
    null,
  );
  protected readonly jobTitle = signal('');
  protected readonly status = signal<CandidateStatus | ''>(
    '',
  );
  protected readonly experience =
    signal<ExperienceRange>('');
  protected readonly skill = signal('');

  constructor() {
    effect(() => {
      if (!this.open()) {
        return;
      }
      if (this.session.isCompany()) {
        const current = this.candidateFilters();
        this.jobTitle.set(current.jobTitle);
        this.status.set(current.status);
        this.location.set(current.location);
        this.experience.set(current.experience);
        this.skill.set(current.skill);
        return;
      }
      const current = this.filters();
      this.location.set(current.location);
      this.remoteMode.set(current.remoteMode);
      this.contract.set(current.contract);
      this.seniority.set(current.seniority);
      this.salaryMin.set(current.salaryMin);
    });
  }

  protected onSalaryMinInput(value: string): void {
    this.salaryMin.set(value === '' ? null : Number(value));
  }

  protected clear(): void {
    this.location.set('');
    this.remoteMode.set('');
    this.contract.set('');
    this.seniority.set('');
    this.salaryMin.set(null);
    this.jobTitle.set('');
    this.status.set('');
    this.experience.set('');
    this.skill.set('');
  }

  protected apply(): void {
    if (this.session.isCompany()) {
      this.candidatesApplied.emit({
        jobTitle: this.jobTitle(),
        status: this.status(),
        location: this.location().trim(),
        experience: this.experience(),
        skill: this.skill().trim(),
      });
      this.closed.emit();
      return;
    }
    this.applied.emit({
      location: this.location().trim(),
      remoteMode: this.remoteMode(),
      contract: this.contract(),
      seniority: this.seniority(),
      salaryMin: this.salaryMin(),
    });
    this.closed.emit();
  }

  protected close(): void {
    this.closed.emit();
  }

  @HostListener('document:keydown.escape')
  protected onEscape(): void {
    if (this.open()) {
      this.close();
    }
  }
}
