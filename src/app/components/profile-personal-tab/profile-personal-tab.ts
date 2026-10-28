import {
  Component,
  inject,
  input,
  output,
} from '@angular/core';
import { LanguageService } from '../../services/language.service';
import {
  CandidateProfile,
  ProfileLinks,
} from '../../models/profile';
import { ProfileSectionHeader } from '../profile-section-header/profile-section-header';

type TextField =
  | 'fullName'
  | 'headline'
  | 'location'
  | 'phone'
  | 'desiredRole'
  | 'about';

@Component({
  selector: 'app-profile-personal-tab',
  imports: [ProfileSectionHeader],
  styleUrl: './profile-personal-tab.scss',
  templateUrl: './profile-personal-tab.html',
})
export class ProfilePersonalTab {
  protected readonly language = inject(LanguageService);

  readonly profile = input.required<CandidateProfile>();
  readonly changed = output<Partial<CandidateProfile>>();

  protected setField(field: TextField, event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.changed.emit({ [field]: value });
  }

  protected setYears(event: Event): void {
    const value = Number(
      (event.target as HTMLInputElement).value,
    );
    this.changed.emit({
      yearsOfExperience: Math.max(0, value || 0),
    });
  }

  protected setLink(
    link: keyof ProfileLinks,
    event: Event,
  ): void {
    const value = (event.target as HTMLInputElement).value;
    this.changed.emit({
      links: {
        ...this.profile().links,
        [link]: value,
      },
    });
  }
}
