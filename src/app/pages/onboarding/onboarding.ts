import {
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { Router } from '@angular/router';
import { CvUpload } from '../../components/cv-upload/cv-upload';
import { ProfileCareerTab } from '../../components/profile-career-tab/profile-career-tab';
import { ProfilePersonalTab } from '../../components/profile-personal-tab/profile-personal-tab';
import { CandidateProfile } from '../../models/profile';
import { LanguageService } from '../../services/language.service';
import { ProfileService } from '../../services/profile.service';
import { DEMO_PROFILE } from '../profile/demo-profile';
import { EMPTY_PROFILE } from './empty-profile';

const STEP_TITLES = [
  'onboarding.cvTitle',
  'onboarding.personalTitle',
  'onboarding.backgroundTitle',
  'onboarding.coverTitle',
];
const PERSONAL_STEP = 1;
const BACKGROUND_STEP = 2;
const EXTRACT_DELAY_MS = 1500;

@Component({
  selector: 'app-onboarding',
  imports: [CvUpload, ProfilePersonalTab, ProfileCareerTab],
  styleUrl: './onboarding.scss',
  templateUrl: './onboarding.html',
})
export class Onboarding {
  protected readonly language = inject(LanguageService);
  private readonly profileService = inject(ProfileService);
  private readonly router = inject(Router);

  protected readonly stepTitles = STEP_TITLES;
  protected readonly backgroundStep = BACKGROUND_STEP;

  protected readonly step = signal(0);
  protected readonly draft =
    signal<CandidateProfile>(EMPTY_PROFILE);
  protected readonly extracting = signal(false);
  protected readonly extracted = signal(false);

  protected readonly isLastStep = computed(
    () => this.step() === STEP_TITLES.length - 1,
  );

  protected readonly canContinue = computed(
    () =>
      this.step() !== PERSONAL_STEP ||
      this.draft().fullName.trim().length > 0,
  );

  protected updateDraft(
    changes: Partial<CandidateProfile>,
  ): void {
    this.draft.update((current) => ({
      ...current,
      ...changes,
    }));
  }

  protected setCoverLetter(event: Event): void {
    const value = (event.target as HTMLTextAreaElement)
      .value;
    this.updateDraft({ coverLetter: value });
  }

  protected extractWithJobby(): void {
    this.extracting.set(true);
    setTimeout(() => {
      this.draft.update((current) => ({
        ...DEMO_PROFILE,
        cvFileName: current.cvFileName,
        coverLetter: current.coverLetter,
      }));
      this.extracting.set(false);
      this.extracted.set(true);
    }, EXTRACT_DELAY_MS);
  }

  protected back(): void {
    this.step.update((step) => Math.max(0, step - 1));
  }

  protected skip(): void {
    this.step.update((step) => step + 1);
  }

  protected next(): void {
    if (!this.canContinue()) {
      return;
    }
    if (this.isLastStep()) {
      this.finish();
      return;
    }
    this.step.update((step) => step + 1);
  }

  private finish(): void {
    this.profileService.set(this.draft());
    this.router.navigateByUrl('/browse');
  }
}
