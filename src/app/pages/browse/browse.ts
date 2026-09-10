import { Component, inject } from '@angular/core';
import { DashboardShell } from '../../components/dashboard-shell/dashboard-shell';
import { JobSwipeDeck } from '../../components/job-swipe-deck/job-swipe-deck';
import { LanguageService } from '../../services/language.service';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-browse',
  imports: [DashboardShell, JobSwipeDeck],
  styleUrl: './browse.scss',
  templateUrl: './browse.html',
})
export class Browse {
  protected readonly language = inject(LanguageService);
  protected readonly theme = inject(ThemeService);
}
