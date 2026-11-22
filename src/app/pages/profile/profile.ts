import {
  Component,
  inject,
  computed,
  linkedSignal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { DashboardShell } from '../../components/dashboard-shell/dashboard-shell';
import { LanguageService } from '../../services/language.service';
import {
  CandidateProfile,
  ProfileTab,
} from '../../models/profile';
import { ProfilePersonalTab } from '../../components/profile-personal-tab/profile-personal-tab';
import { ProfileCareerTab } from '../../components/profile-career-tab/profile-career-tab';
import { ProfileDocumentsTab } from '../../components/profile-documents-tab/profile-documents-tab';
import { ProfileService } from '../../services/profile.service';
import { SessionService } from '../../services/session.service';
import { CompanyProfileService } from '../../services/company-profile.service';
import { CompanyProfile } from '../../models/company';
import { Job } from '../../models/job';
import { ProfileCompanyTab } from '../../components/profile-company-tab/profile-company-tab';
import { ProfileJobsTab } from '../../components/profile-jobs-tab/profile-jobs-tab';

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

const COMPANY_TABS: TabOption[] = [
  {
    key: 'company',
    icon: '/assets/jobs/building-2.svg',
    labelKey: 'profile.tabCompany',
  },
  {
    key: 'jobs',
    icon: '/assets/jobs/briefcase.svg',
    labelKey: 'profile.tabJobs',
  },
];

@Component({
  selector: 'app-profile',
  imports: [
    RouterLink,
    DashboardShell,
    ProfilePersonalTab,
    ProfileCareerTab,
    ProfileDocumentsTab,
    ProfileCompanyTab,
    ProfileJobsTab,
  ],
  styleUrl: './profile.scss',
  templateUrl: './profile.html',
})
export class Profile {
  protected readonly language = inject(LanguageService);

  protected readonly session = inject(SessionService);
  private readonly profileService = inject(ProfileService);
  private readonly companyService = inject(
    CompanyProfileService,
  );

  protected readonly profile = this.profileService.profile;
  protected readonly company = this.companyService.profile;
  protected readonly companyJobs = this.companyService.jobs;

  protected readonly tabs = computed(() =>
    this.session.isCompany() ? COMPANY_TABS : TABS,
  );
  protected readonly activeTab = linkedSignal<ProfileTab>(
    () => this.tabs()[0].key,
  );

  protected readonly initials = computed(() =>
    (this.session.isCompany()
      ? this.company().name
      : this.profile().fullName
    )
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0].toUpperCase())
      .join(''),
  );

  protected updateProfile(
    changes: Partial<CandidateProfile>,
  ): void {
    this.profileService.update(changes);
  }

  protected updateCompany(
    changes: Partial<CompanyProfile>,
  ): void {
    this.companyService.update(changes);
  }

  protected setJobs(jobs: Job[]): void {
    this.companyService.setJobs(jobs);
  }

  protected save(): void {}
}
