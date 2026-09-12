import {
  Component,
  OnDestroy,
  afterNextRender,
  inject,
  input,
} from '@angular/core';

import { RouterLink } from '@angular/router';
import { BrandLogo } from '../brand-logo/brand-logo';
import { LanguagePicker } from '../language-picker/language-picker';
import { ThemeToggle } from '../theme-toggle/theme-toggle';
import { LanguageService } from '../../services/language.service';
import { ThemeService } from '../../services/theme.service';

export type DashboardNavKey =
  | 'browse'
  | 'applications'
  | 'messages'
  | 'jobbyAi'
  | 'profile'
  | 'settings';

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
    route: null,
  },
  {
    key: 'messages',
    icon: '/assets/communication/message-square.svg',
    labelKey: 'nav.messages',
    route: null,
  },
  {
    key: 'jobbyAi',
    icon: '/assets/communication/bot.svg',
    labelKey: 'nav.jobbyAi',
    route: null,
  },
  {
    key: 'profile',
    icon: '/assets/jobs/user.svg',
    labelKey: 'nav.profile',
    route: null,
  },
  {
    key: 'settings',
    icon: '/assets/ui/settings.svg',
    labelKey: 'nav.settings',
    route: null,
  },
];

@Component({
  imports: [
    RouterLink,
    BrandLogo,
    LanguagePicker,
    ThemeToggle,
  ],
  selector: 'app-dashboard-shell',
  styleUrl: './dashboard-shell.scss',
  templateUrl: './dashboard-shell.html',
})
export class DashboardShell implements OnDestroy {
  readonly activeKey = input<DashboardNavKey>('browse');
  readonly userName = input('Robert Ciobanu');

  protected readonly language = inject(LanguageService);
  protected readonly theme = inject(ThemeService);
  protected readonly navItems = NAV_ITEMS;
  // The mobile tab bar has room for 5 icons; settings stays sidebar-only on desktop.
  protected readonly mobileNavItems = NAV_ITEMS.filter(
    (item) => item.key !== 'settings',
  );

  constructor() {
    // html gets height: 100dvh and body gets height: 100% globally (see
    // styles.scss) — that's the actual source of truth for sizing now.
    // This just toggles the class that scopes the position: fixed
    // scroll-lock (styles.scss again) to mobile dashboard routes only,
    // so the marketing/auth pages keep scrolling normally.
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
