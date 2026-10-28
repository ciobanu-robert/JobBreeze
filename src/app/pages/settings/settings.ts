import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DashboardShell } from '../../components/dashboard-shell/dashboard-shell';
import { PasswordField } from '../../components/password-field/password-field';
import { ProfileSectionHeader } from '../../components/profile-section-header/profile-section-header';
import { ToggleSwitch } from '../../components/toggle-switch/toggle-switch';
import { LanguageService } from '../../services/language.service';
import { ThemeService } from '../../services/theme.service';
import {
  AccountSettings,
  NotificationSettings,
  PrivacySettings,
  SettingsSection,
} from '../../models/settings';
import { DEMO_SETTINGS } from './demo-settings';

interface SectionOption {
  key: SettingsSection;
  icon: string;
  labelKey: string;
}

interface ToggleOption<T> {
  key: keyof T;
  labelKey: string;
}

const SECTIONS: SectionOption[] = [
  {
    key: 'account',
    icon: '/assets/ui/mail.svg',
    labelKey: 'settings.navAccount',
  },
  {
    key: 'appearance',
    icon: '/assets/ui/palette.svg',
    labelKey: 'settings.navAppearance',
  },
  {
    key: 'security',
    icon: '/assets/ui/shield.svg',
    labelKey: 'settings.navSecurity',
  },
  {
    key: 'notifications',
    icon: '/assets/ui/bell.svg',
    labelKey: 'settings.navNotifications',
  },
  {
    key: 'privacy',
    icon: '/assets/ui/lock.svg',
    labelKey: 'settings.navPrivacy',
  },
  {
    key: 'data',
    icon: '/assets/ui/download.svg',
    labelKey: 'settings.navData',
  },
];

const NOTIFICATION_OPTIONS: ToggleOption<NotificationSettings>[] =
  [
    {
      key: 'newMatches',
      labelKey: 'settings.newMatches',
    },
    {
      key: 'applicationUpdates',
      labelKey: 'settings.applicationUpdates',
    },
    {
      key: 'jobRecommendations',
      labelKey: 'settings.jobRecommendations',
    },
    {
      key: 'productNews',
      labelKey: 'settings.productNews',
    },
  ];

const PRIVACY_OPTIONS: ToggleOption<PrivacySettings>[] = [
  {
    key: 'discoverable',
    labelKey: 'settings.discoverable',
  },
  {
    key: 'showPhone',
    labelKey: 'settings.showPhone',
  },
];

@Component({
  selector: 'app-settings',
  imports: [
    RouterLink,
    DashboardShell,
    PasswordField,
    ProfileSectionHeader,
    ToggleSwitch,
  ],
  styleUrl: './settings.scss',
  templateUrl: './settings.html',
})
export class Settings {
  protected readonly language = inject(LanguageService);
  protected readonly theme = inject(ThemeService);

  protected readonly sections = SECTIONS;
  protected readonly notificationOptions =
    NOTIFICATION_OPTIONS;
  protected readonly privacyOptions = PRIVACY_OPTIONS;

  protected readonly activeSection =
    signal<SettingsSection>('account');
  protected readonly settings =
    signal<AccountSettings>(DEMO_SETTINGS);

  protected setTheme(dark: boolean): void {
    if (this.theme.isDarkTheme() !== dark) {
      this.theme.toggleTheme();
    }
  }

  protected toggleNotification(
    key: keyof NotificationSettings,
  ): void {
    this.settings.update((current) => ({
      ...current,
      notifications: {
        ...current.notifications,
        [key]: !current.notifications[key],
      },
    }));
  }

  protected togglePrivacy(
    key: keyof PrivacySettings,
  ): void {
    this.settings.update((current) => ({
      ...current,
      privacy: {
        ...current.privacy,
        [key]: !current.privacy[key],
      },
    }));
  }
}
