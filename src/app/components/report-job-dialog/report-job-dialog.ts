import {
  Component,
  HostListener,
  computed,
  effect,
  inject,
  input,
  output,
  signal,
} from '@angular/core';
import {
  JobReport,
  ReportReason,
} from '../../models/job-report';
import { LanguageService } from '../../services/language.service';
import { ThemeService } from '../../services/theme.service';
import { Job } from '../../models/job';

interface ReasonOption {
  value: ReportReason;
  labelKey: string;
}

const REASON_OPTIONS: ReasonOption[] = [
  { value: 'spam', labelKey: 'report.reasonSpam' },
  { value: 'fraud', labelKey: 'report.reasonFraud' },
  {
    value: 'inaccurate',
    labelKey: 'report.reasonInaccurate',
  },
  {
    value: 'offensive',
    labelKey: 'report.reasonOffensive',
  },
  { value: 'other', labelKey: 'report.reasonOther' },
];

const DETAILS_MAX_LENGTH = 500;

@Component({
  imports: [],
  selector: 'app-report-job-dialog',
  styleUrl: './report-job-dialog.scss',
  templateUrl: './report-job-dialog.html',
})
export class ReportJobDialog {
  readonly open = input(false);
  readonly job = input<Job | null>(null);
  readonly closed = output<void>();
  readonly submitted = output<JobReport>();

  protected readonly language = inject(LanguageService);
  protected readonly theme = inject(ThemeService);
  protected readonly reasonOptions = REASON_OPTIONS;
  protected readonly detailsMaxLength = DETAILS_MAX_LENGTH;

  protected readonly reason = signal<ReportReason | ''>('');
  protected readonly details = signal('');
  protected readonly sent = signal(false);

  protected readonly canSubmit = computed(
    () => this.reason() !== '',
  );

  constructor() {
    effect(() => {
      if (!this.open()) {
        return;
      }
      this.reason.set('');
      this.details.set('');
      this.sent.set(false);
    });
  }

  protected submit(): void {
    const job = this.job();
    const reason = this.reason();

    if (!job || reason === '') {
      return;
    }
    this.submitted.emit({
      jobId: job.id,
      reason,
      details: this.details().trim(),
    });
    this.sent.set(true);
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
