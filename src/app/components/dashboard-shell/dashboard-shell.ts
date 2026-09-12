import { 
  Component, 
  inject, 
  input 
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { BrandLogo } from '../brand-logo/brand-logo';
import { LanguagePicker } from '../language-picker/language-picker';
import { ThemeToggle } from '../theme-toggle/theme-toggle';
import { LanguageService } from '../../services/language.service';
import { ThemeService } from '../../services/theme.service';

export type DashboardNavKey =
  'browse' | 
  'applications' | 
  'messages' | 
  'jobbyAi' | 
  'profile' | 
  'settings';

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
    route: null 
  },
  { 
    key: 'profile', 
    icon: '/assets/jobs/user.svg', 
    labelKey: 'nav.profile', 
    route: null 
  },
  { 
    key: 'settings', 
    icon: '/assets/ui/settings.svg', 
    labelKey: 'nav.settings', 
    route: null 
  },
];

@Component({
  imports: [
    RouterLink, 
    BrandLogo, 
    LanguagePicker, 
    ThemeToggle
  ],
  selector: 'app-dashboard-shell',
  styleUrl: './dashboard-shell.scss',
  templateUrl: './dashboard-shell.html',
})
export class DashboardShell {
  readonly activeKey = input<DashboardNavKey>('browse');
  readonly userName = input('Robert Ciobanu');

  protected readonly language = inject(LanguageService);
  protected readonly theme = inject(ThemeService);
  protected readonly navItems = NAV_ITEMS;
}
