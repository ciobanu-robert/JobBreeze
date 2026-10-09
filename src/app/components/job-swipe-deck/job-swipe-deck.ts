import {
  Component,
  computed,
  effect,
  inject,
  input,
  signal,
  viewChildren,
} from '@angular/core';
import {
  JobSwipeCard,
  SwipeDirection,
} from '../job-swipe-card/job-swipe-card';
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

  private readonly lastSwipe =
    signal<SwipeDirection | null>(null);
  protected readonly canUndo = computed(
    () => this.lastSwipe() !== null,
  );
  private readonly restored = signal<{
    jobId: string;
    direction: SwipeDirection;
  } | null>(null);

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
      this.lastSwipe.set(null);
    });
  }

  protected onSwiped(direction: SwipeDirection): void {
    this.lastSwipe.set(direction);
    this.restored.set(null);
    this.deckIndex.update((i) => i + 1);
  }

  protected undo(): void {
    const direction = this.lastSwipe();
    if (
      !direction ||
      this.cards().some((card) => card.exiting())
    ) {
      return;
    }
    const index = this.deckIndex() - 1;
    this.lastSwipe.set(null);
    this.restored.set({
      jobId: this.allJobs()[index].id,
      direction,
    });
    this.deckIndex.set(index);
  }

  protected enterFrom(job: Job): SwipeDirection | null {
    const restored = this.restored();
    return restored?.jobId === job.id
      ? restored.direction
      : null;
  }

  protected refresh(): void {
    this.deckIndex.set(0);
    this.lastSwipe.set(null);
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
