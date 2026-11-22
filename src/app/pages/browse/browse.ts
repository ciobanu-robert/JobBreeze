import {
  Component,
  computed,
  inject,
  signal,
  untracked,
} from '@angular/core';
import { DashboardShell } from '../../components/dashboard-shell/dashboard-shell';
import {
  JobSwipeDeck,
  SwipeEvent,
} from '../../components/job-swipe-deck/job-swipe-deck';
import { FiltersPanel } from '../../components/filters-panel/filters-panel';
import { LanguageService } from '../../services/language.service';
import { ThemeService } from '../../services/theme.service';
import { SessionService } from '../../services/session.service';
import { CandidateService } from '../../services/candidate.service';
import {
  EMPTY_JOB_FILTERS,
  JobFilters,
} from '../../models/job-filters';
import { CandidateStatus } from '../../models/candidate';
import {
  CandidateFilters,
  EMPTY_CANDIDATE_FILTERS,
  ExperienceRange,
} from '../../models/candidate-filters';
import { DEMO_JOBS } from '../../components/job-swipe-deck/demo-jobs';
import { DEMO_CANDIDATES } from '../../components/job-swipe-deck/demo-candidates';
import { companyCardProfile } from '../../components/job-swipe-deck/demo-companies';
import { candidateToJob } from '../../utils/candidate-mappers';

function salaryUpperBound(salary: string): number {
  const numbers = salary.match(/\d+/g)?.map(Number) ?? [];
  return numbers.length ? Math.max(...numbers) : 0;
}

function matchesExperience(
  years: number,
  range: ExperienceRange,
): boolean {
  switch (range) {
    case 'entry':
      return years <= 1;
    case 'mid':
      return years >= 2 && years <= 4;
    case 'senior':
      return years >= 5;
    default:
      return true;
  }
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
  protected readonly session = inject(SessionService);

  protected readonly isFiltersOpen = signal(false);
  protected readonly filters = signal<JobFilters>(
    EMPTY_JOB_FILTERS,
  );

  protected readonly filteredJobs = computed(() => {
    const f = this.filters();
    return DEMO_JOBS.map((job) => ({
      ...job,
      companyProfile: companyCardProfile(job.company),
    })).filter((job) => {
      if (
        f.location &&
        !job.location
          .toLowerCase()
          .includes(f.location.toLowerCase())
      ) {
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
      if (
        f.salaryMin !== null &&
        salaryUpperBound(job.salary) < f.salaryMin
      ) {
        return false;
      }
      return true;
    });
  });

  protected readonly candidateFilters =
    signal<CandidateFilters>(EMPTY_CANDIDATE_FILTERS);
  private readonly candidateService = inject(
    CandidateService,
  );

  protected readonly jobTitles = [
    ...new Set(DEMO_CANDIDATES.map((c) => c.jobTitle)),
  ];

  protected readonly filteredCandidates = computed(() => {
    const f = this.candidateFilters();
    const location = f.location.toLowerCase();
    const skill = f.skill.toLowerCase();

    return this.candidateService
      .candidates()
      .filter(
        (c) =>
          (!f.jobTitle || c.jobTitle === f.jobTitle) &&
          (!f.status || c.status === f.status) &&
          c.location.toLowerCase().includes(location) &&
          matchesExperience(
            c.experienceYears,
            f.experience,
          ) &&
          (!skill ||
            c.skills.some((s) =>
              s.toLowerCase().includes(skill),
            )),
      );
  });

  protected readonly candidateCards = computed(() => {
    this.candidateFilters();
    const label = this.language.t(
      'candidates.yearsExperience',
    );

    return untracked(this.filteredCandidates)
      .filter((c) => c.status === 'pending')
      .map((c) => candidateToJob(c, label));
  });

  protected setCandidateStatus(
    id: string,
    status: CandidateStatus,
  ): void {
    this.candidateService.setStatus(id, status);
  }

  protected onCardSwiped(event: SwipeEvent): void {
    if (
      !this.session.isCompany() ||
      event.direction === 'save'
    ) {
      return;
    }
    this.setCandidateStatus(
      event.id,
      event.direction === 'like'
        ? 'shortlisted'
        : 'rejected',
    );
  }

  protected onCardUndone(id: string): void {
    if (this.session.isCompany()) {
      this.setCandidateStatus(id, 'pending');
    }
  }
}
