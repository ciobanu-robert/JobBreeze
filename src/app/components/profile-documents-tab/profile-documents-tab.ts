import {
  Component,
  inject,
  input,
  output,
} from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { CandidateProfile } from '../../models/profile';
import { CvUpload } from '../cv-upload/cv-upload';
import { ProfileSectionHeader } from '../profile-section-header/profile-section-header';

const COVER_LETTER_LIMIT = 2000;

@Component({
  selector: 'app-profile-documents-tab',
  imports: [ProfileSectionHeader, CvUpload],
  styleUrl: './profile-documents-tab.scss',
  templateUrl: './profile-documents-tab.html',
})
export class ProfileDocumentsTab {
  protected readonly language = inject(LanguageService);

  readonly profile = input.required<CandidateProfile>();
  readonly changed = output<Partial<CandidateProfile>>();

  protected readonly coverLetterLimit = COVER_LETTER_LIMIT;

  protected setCoverLetter(event: Event): void {
    const value = (event.target as HTMLTextAreaElement)
      .value;
    this.changed.emit({ coverLetter: value });
  }
}
