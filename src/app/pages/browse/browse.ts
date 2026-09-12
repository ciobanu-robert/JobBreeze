import { Component, computed, inject, signal } from '@angular/core';
import { DashboardShell } from '../../components/dashboard-shell/dashboard-shell';
import { JobSwipeDeck } from '../../components/job-swipe-deck/job-swipe-deck';
import { FiltersPanel } from '../../components/filters-panel/filters-panel';
import { LanguageService } from '../../services/language.service';
import { ThemeService } from '../../services/theme.service';
import { EMPTY_JOB_FILTERS, JobFilters } from '../../models/job-filters';
import { DEMO_JOBS } from '../../components/job-swipe-deck/demo-jobs';

/** Reads the highest figure out of a salary string like '€3200-4200' to compare against a filter floor. */
function salaryUpperBound(salary: string): number {
  const numbers = salary.match(/\d+/g)?.map(Number) ?? [];
  return numbers.length ? Math.max(...numbers) : 0;
}

@Component({
  selector: 'app-browse',
  imports: [DashboardShell, JobSwipeDeck, FiltersPanel],
  styleUrl: './browse.scss',
  templateUrl: './browse.html',
})
export class Browse {
  protected readonly language = inject(LanguageService);
  protected readonly theme = inject(ThemeService);

  protected readonly isFiltersOpen = signal(false);
  protected readonly filters = signal<JobFilters>(EMPTY_JOB_FILTERS);

  protected readonly filteredJobs = computed(() => {
    const f = this.filters();
    return DEMO_JOBS.filter((job) => {
      if (f.location && !job.location.toLowerCase().includes(f.location.toLowerCase())) {
        return false;
      }
      if (f.remoteMode && job.workType !== f.remoteMode) {
        return false;
      }
      if (f.contract && job.contract !== f.contract) {
        return false;
      }
      if (f.seniority && job.seniority !== f.seniority) {
        return false;
      }
      if (f.salaryMin !== null && salaryUpperBound(job.salary) < f.salaryMin) {
        return false;
      }
      return true;
    });
  });
}
