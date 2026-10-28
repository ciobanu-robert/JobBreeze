import {
  Component,
  inject,
  input,
  output,
  signal,
} from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { CandidateProfile } from '../../models/profile';
import { ProfileSectionHeader } from '../profile-section-header/profile-section-header';

const CV_EXTENSIONS = ['pdf', 'doc', 'docx'];
const MAX_CV_BYTES = 5 * 1024 * 1024;
const COVER_LETTER_LIMIT = 2000;

@Component({
  selector: 'app-profile-documents-tab',
  imports: [ProfileSectionHeader],
  styleUrl: './profile-documents-tab.scss',
  templateUrl: './profile-documents-tab.html',
})
export class ProfileDocumentsTab {
  protected readonly language = inject(LanguageService);

  readonly profile = input.required<CandidateProfile>();
  readonly changed = output<Partial<CandidateProfile>>();

  protected readonly coverLetterLimit = COVER_LETTER_LIMIT;
  protected readonly dragging = signal(false);
  protected readonly cvError = signal<string | null>(null);

  protected onFileSelected(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    const file = fileInput.files?.[0];
    if (file) {
      this.setCv(file);
    }
    fileInput.value = '';
  }

  protected onDragOver(event: DragEvent): void {
    event.preventDefault();
    this.dragging.set(true);
  }

  protected onDrop(event: DragEvent): void {
    event.preventDefault();
    this.dragging.set(false);
    const file = event.dataTransfer?.files[0];
    if (file) {
      this.setCv(file);
    }
  }

  protected removeCv(): void {
    this.cvError.set(null);
    this.changed.emit({ cvFileName: null });
  }

  protected setCoverLetter(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.changed.emit({ coverLetter: value });
  }

  private setCv(file: File): void {
    const extension =
      file.name.split('.').pop()?.toLowerCase() ?? '';

    if (!CV_EXTENSIONS.includes(extension)) {
      this.cvError.set('profile.cvInvalidType');
      return;
    }
    if (file.size > MAX_CV_BYTES) {
      this.cvError.set('profile.cvTooLarge');
      return;
    }

    this.cvError.set(null);
    this.changed.emit({ cvFileName: file.name });
  }
}
