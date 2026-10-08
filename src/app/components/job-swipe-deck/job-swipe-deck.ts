import {
  Component,
  computed,
  effect,
  inject,
  input,
  signal,
  viewChildren,
} from '@angular/core';
import { JobSwipeCard } from '../job-swipe-card/job-swipe-card';
import { ReportJobDialog } from '../report-job-dialog/report-job-dialog';
import { LanguageService } from '../../services/language.service';
import { ThemeService } from '../../services/theme.service';
import { Job } from '../../models/job';
import { DEMO_JOBS } from './demo-jobs';

@Component({
  imports: [JobSwipeCard, ReportJobDialog],
  selector: 'app-job-swipe-deck',
  styleUrl: './job-swipe-deck.scss',
  templateUrl: './job-swipe-deck.html',
})
export class JobSwipeDeck {
  readonly jobs = input<Job[] | null>(null);

  protected readonly language = inject(LanguageService);
  protected readonly theme = inject(ThemeService);

  private readonly allJobs = computed<Job[]>(
    () => this.jobs() ?? DEMO_JOBS,
  );

  protected readonly deckIndex = signal(0);
  protected readonly visibleJobs = computed(() =>
    this.allJobs().slice(
      this.deckIndex(),
      this.deckIndex() + 3,
    ),
  );
  protected readonly isEmpty = computed(
    () => this.deckIndex() >= this.allJobs().length,
  );

  private readonly cards = viewChildren(JobSwipeCard);
  protected readonly topCard = computed(
    () => this.cards()[0],
  );

  protected readonly currentJob = computed(
    () => this.visibleJobs()[0] ?? null,
  );
  protected readonly isReportOpen = signal(false);
  private reportSent = false;

  constructor() {
    effect(() => {
      this.allJobs();
      this.deckIndex.set(0);
    });
  }

  protected onSwiped(): void {
    this.deckIndex.update((i) => i + 1);
  }

  protected refresh(): void {
    this.deckIndex.set(0);
  }

  protected openReport(): void {
    if (this.currentJob()) {
      this.isReportOpen.set(true);
    }
  }

  protected onReportSubmitted(): void {
    this.reportSent = true;
  }

  protected onReportClosed(): void {
    this.isReportOpen.set(false);

    if (this.reportSent) {
      this.reportSent = false;
      this.topCard()?.triggerSwipe('reject');
    }
  }
}
