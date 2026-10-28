import {
  Component,
  inject,
  input,
  output,
  signal,
} from '@angular/core';
import { LanguageService } from '../../services/language.service';

const CV_EXTENSIONS = ['pdf', 'doc', 'docx'];
const MAX_CV_BYTES = 5 * 1024 * 1024;

@Component({
  selector: 'app-cv-upload',
  imports: [],
  styleUrl: './cv-upload.scss',
  templateUrl: './cv-upload.html',
})
export class CvUpload {
  protected readonly language = inject(LanguageService);

  readonly fileName = input<string | null>(null);
  readonly selected = output<string>();
  readonly removed = output<void>();

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

  protected remove(): void {
    this.cvError.set(null);
    this.removed.emit();
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
    this.selected.emit(file.name);
  }
}
