import {
  Component,
  inject,
  computed,
  signal,
} from '@angular/core';
import { DashboardShell } from '../../components/dashboard-shell/dashboard-shell';
import { LanguageService } from '../../services/language.service';
import {
  CandidateProfile,
  ProfileTab,
} from '../../models/profile';
import { ProfilePersonalTab } from '../../components/profile-personal-tab/profile-personal-tab';
import { ProfileCareerTab } from '../../components/profile-career-tab/profile-career-tab';
import { ProfileDocumentsTab } from '../../components/profile-documents-tab/profile-documents-tab';
import { DEMO_PROFILE } from './demo-profile';

interface TabOption {
  key: ProfileTab;
  icon: string;
  labelKey: string;
}

const TABS: TabOption[] = [
  {
    key: 'personal',
    icon: '/assets/jobs/user.svg',
    labelKey: 'profile.tabPersonal',
  },
  {
    key: 'career',
    icon: '/assets/jobs/briefcase.svg',
    labelKey: 'profile.tabCareer',
  },
  {
    key: 'documents',
    icon: '/assets/ui/file-text.svg',
    labelKey: 'profile.tabDocuments',
  },
];

@Component({
  selector: 'app-profile',
  imports: [
    DashboardShell,
    ProfilePersonalTab,
    ProfileCareerTab,
    ProfileDocumentsTab,
  ],
  styleUrl: './profile.scss',
  templateUrl: './profile.html',
})
export class Profile {
  protected readonly language = inject(LanguageService);

  protected readonly tabs = TABS;
  protected readonly activeTab =
    signal<ProfileTab>('personal');
  protected readonly profile =
    signal<CandidateProfile>(DEMO_PROFILE);
  protected readonly settingsOpen = signal(false);

  protected readonly initials = computed(() =>
    this.profile()
      .fullName.split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0].toUpperCase())
      .join(''),
  );

  protected updateProfile(
    changes: Partial<CandidateProfile>,
  ): void {
    this.profile.update((current) => ({
      ...current,
      ...changes,
    }));
  }

  protected save(): void {}
}
