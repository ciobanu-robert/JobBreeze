import {
  Component,
  computed,
  inject,
  input,
  output,
} from '@angular/core';
import {
  Application,
  ApplicationStatus,
} from '../../models/application';
import { LanguageService } from '../../services/language.service';
import { ThemeService } from '../../services/theme.service';
import { LanguageCode } from '../../i18n/translations';

const STATUS_LABEL_KEYS: Record<ApplicationStatus, string> =
  {
    pending: 'applications.statusPending',
    shortlisted: 'applications.statusShortlisted',
    rejected: 'applications.statusRejected',
    accepted: 'applications.statusAccepted',
  };

const DATE_LOCALES: Record<LanguageCode, string> = {
  en: 'en-GB',
  ro: 'ro-RO',
};

@Component({
  imports: [],
  selector: 'app-application-card',
  styleUrl: './application-card.scss',
  templateUrl: './application-card.html',
})
export class ApplicationCard {
  readonly application = input.required<Application>();
  readonly openChat = output<void>();

  protected readonly language = inject(LanguageService);
  protected readonly theme = inject(ThemeService);
  protected readonly statusLabelKeys = STATUS_LABEL_KEYS;

  protected readonly appliedDate = computed(() => {
    const locale =
      DATE_LOCALES[this.language.currentLanguage()];

    return new Intl.DateTimeFormat(locale, {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      timeZone: 'UTC',
    }).format(new Date(this.application().appliedAt));
  });
}
