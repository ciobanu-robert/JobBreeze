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

  protected readonly language = inject(LanguageService);
  protected readonly theme = inject(ThemeService);

  protected readonly location = signal('');
  protected readonly remoteMode = signal('');
  protected readonly contract = signal('');
  protected readonly seniority = signal('');
  protected readonly salaryMin = signal<number | null>(
    null,
  );

  constructor() {
    effect(() => {
      if (!this.open()) {
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
  }

  protected apply(): void {
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
