import {
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import {
  Application,
  ApplicationStatus,
} from '../../models/application';
import { DashboardShell } from '../../components/dashboard-shell/dashboard-shell';
import { ApplicationCard } from '../../components/application-card/application-card';
import { LanguageService } from '../../services/language.service';
import { DEMO_APPLICATIONS } from './demo-applications';

@Component({
  selector: 'app-applications',
  imports: [DashboardShell, ApplicationCard],
  styleUrl: './applications.scss',
  templateUrl: './applications.html',
})
export class Applications {
  protected readonly language = inject(LanguageService);

  protected readonly applications = signal<Application[]>(
    DEMO_APPLICATIONS,
  );

  protected readonly stats = computed(() => {
    const list = this.applications();
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
  });
}
