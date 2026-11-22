import {
  Component,
  inject,
  input,
  output,
} from '@angular/core';
import { LanguageService } from '../../services/language.service';
import {
  CompanyLinks,
  CompanyProfile,
} from '../../models/company';
import { ProfileSectionHeader } from '../profile-section-header/profile-section-header';
import { SkillsInput } from '../skills-input/skills-input';

type TextField =
  | 'name'
  | 'industry'
  | 'location'
  | 'size'
  | 'founded'
  | 'about';

@Component({
  selector: 'app-profile-company-tab',
  imports: [ProfileSectionHeader, SkillsInput],
  styleUrl: './profile-company-tab.scss',
  templateUrl: './profile-company-tab.html',
})
export class ProfileCompanyTab {
  protected readonly language = inject(LanguageService);

  readonly profile = input.required<CompanyProfile>();
  readonly changed = output<Partial<CompanyProfile>>();

  protected setField(field: TextField, event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.changed.emit({ [field]: value });
  }

  protected setBenefits(benefits: string[]): void {
    this.changed.emit({ benefits });
  }

  protected setLink(
    link: keyof CompanyLinks,
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
