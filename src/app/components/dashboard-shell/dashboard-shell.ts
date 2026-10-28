import {
  Component,
  OnDestroy,
  afterNextRender,
  inject,
  input,
} from '@angular/core';

import { RouterLink } from '@angular/router';
import { BrandLogo } from '../brand-logo/brand-logo';
import { LanguageService } from '../../services/language.service';
import { ThemeService } from '../../services/theme.service';

export type DashboardNavKey =
  | 'browse'
  | 'applications'
  | 'messages'
  | 'jobbyAi'
  | 'profile';

interface DashboardNavItem {
  key: DashboardNavKey;
  icon: string;
  labelKey: string;
  route: string | null;
}

const NAV_ITEMS: DashboardNavItem[] = [
  {
    key: 'browse',
    icon: '/assets/navigation/compass.svg',
    labelKey: 'nav.browse',
    route: '/browse',
  },
  {
    key: 'applications',
    icon: '/assets/communication/inbox.svg',
    labelKey: 'nav.applications',
    route: '/applications',
  },
  {
    key: 'messages',
    icon: '/assets/communication/message-square.svg',
    labelKey: 'nav.messages',
    route: '/messages',
  },
  {
    key: 'jobbyAi',
    icon: '/assets/communication/bot.svg',
    labelKey: 'nav.jobbyAi',
    route: '/jobby',
  },
  {
    key: 'profile',
    icon: '/assets/jobs/user.svg',
    labelKey: 'nav.profile',
    route: '/profile',
  },
];

@Component({
  imports: [RouterLink, BrandLogo],
  selector: 'app-dashboard-shell',
  styleUrl: './dashboard-shell.scss',
  templateUrl: './dashboard-shell.html',
})
export class DashboardShell implements OnDestroy {
  readonly activeKey = input<DashboardNavKey>('browse');
  readonly userName = input('Robert Ciobanu');
  readonly fullBleed = input(false);

  protected readonly language = inject(LanguageService);
  protected readonly theme = inject(ThemeService);
  protected readonly navItems = NAV_ITEMS;

  constructor() {
    afterNextRender(() => {
      document.documentElement.classList.add(
        'dashboard-shell-active',
      );
      document.body.classList.add('dashboard-shell-active');
    });
  }

  ngOnDestroy(): void {
    if (typeof document === 'undefined') {
      return;
    }
    document.documentElement.classList.remove(
      'dashboard-shell-active',
    );
    document.body.classList.remove(
      'dashboard-shell-active',
    );
  }
}
