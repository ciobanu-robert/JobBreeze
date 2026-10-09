import {
  Component,
  computed,
  inject,
  input,
  output,
} from '@angular/core';
import { ChatAttachment } from '../../models/conversation';
import { LanguageService } from '../../services/language.service';
import { ThemeService } from '../../services/theme.service';
import { formatFileSize } from '../../utils/file-size';

@Component({
  imports: [],
  selector: 'app-attachment-chip',
  styleUrl: './attachment-chip.scss',
  templateUrl: './attachment-chip.html',
})
export class AttachmentChip {
  readonly attachment = input.required<ChatAttachment>();
  readonly removable = input(false);
  readonly onPrimary = input(false);
  readonly removed = output<void>();

  protected readonly language = inject(LanguageService);
  protected readonly theme = inject(ThemeService);

  protected readonly isImage = computed(() =>
    this.attachment().type.startsWith('image/'),
  );

  protected readonly size = computed(() =>
    formatFileSize(
      this.attachment().size,
      this.language.currentLanguage(),
    ),
  );
}
