import {
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { Router } from '@angular/router';
import {
  Application,
  ApplicationStatus,
} from '../../models/application';
import { DashboardShell } from '../../components/dashboard-shell/dashboard-shell';
import { ApplicationCard } from '../../components/application-card/application-card';
import { ConversationService } from '../../services/conversation.service';
import { LanguageService } from '../../services/language.service';
import { SessionService } from '../../services/session.service';
import { CandidateService } from '../../services/candidate.service';
import { candidateToApplication } from '../../utils/candidate-mappers';
import { DEMO_APPLICATIONS } from './demo-applications';

interface Stat {
  labelKey: string;
  value: number;
}

@Component({
  selector: 'app-applications',
  imports: [DashboardShell, ApplicationCard],
  styleUrl: './applications.scss',
  templateUrl: './applications.html',
})
export class Applications {
  protected readonly language = inject(LanguageService);
  protected readonly session = inject(SessionService);
  private readonly candidateService = inject(
    CandidateService,
  );
  private readonly chats = inject(ConversationService);
  private readonly router = inject(Router);

  private readonly seekerApplications = signal<
    Application[]
  >(DEMO_APPLICATIONS);

  protected readonly applications = computed(() =>
    this.session.isCompany()
      ? this.candidateService
          .shortlisted()
          .map(candidateToApplication)
      : this.seekerApplications(),
  );

  protected readonly titleKey = computed(() =>
    this.session.isCompany()
      ? 'shortlisted.title'
      : 'applications.title',
  );

  protected readonly emptyKey = computed(() =>
    this.session.isCompany()
      ? 'shortlisted.emptyTitle'
      : 'applications.emptyTitle',
  );

  protected readonly stats = computed<Stat[]>(() =>
    this.session.isCompany()
      ? this.companyStats()
      : this.seekerStats(),
  );

  protected openChat(application: Application): void {
    const partner = this.session.isCompany()
      ? {
          ...application,
          title: application.company,
          company: application.title,
        }
      : application;
    const chat = this.chats.openForApplication(partner);
    this.router.navigate(['/messages'], {
      queryParams: { chat },
    });
  }

  private seekerStats(): Stat[] {
    const list = this.seekerApplications();
    const count = (status: ApplicationStatus) =>
      list.filter((item) => item.status === status).length;

    return [
      {
        labelKey: 'applications.statTotal',
        value: list.length,
      },
      {
        labelKey: 'applications.statPending',
        value: count('pending'),
      },
      {
        labelKey: 'applications.statShortlisted',
        value: count('shortlisted'),
      },
      {
        labelKey: 'applications.statAccepted',
        value: count('accepted'),
      },
    ];
  }

  private companyStats(): Stat[] {
    const candidates = this.candidateService.candidates();
    const shortlisted = this.candidateService.shortlisted();
    const count = (status: string) =>
      candidates.filter((c) => c.status === status).length;

    return [
      {
        labelKey: 'shortlisted.statShortlisted',
        value: shortlisted.length,
      },
      {
        labelKey: 'shortlisted.statJobs',
        value: new Set(shortlisted.map((c) => c.jobTitle))
          .size,
      },
      {
        labelKey: 'shortlisted.statPending',
        value: count('pending'),
      },
      {
        labelKey: 'shortlisted.statRejected',
        value: count('rejected'),
      },
    ];
  }
}
