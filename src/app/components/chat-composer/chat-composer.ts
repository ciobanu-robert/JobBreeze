import {
  Component,
  OnDestroy,
  computed,
  inject,
  input,
  output,
  signal,
} from '@angular/core';
import { ChatAttachment } from '../../models/conversation';
import { AttachmentChip } from '../attachment-chip/attachment-chip';
import { LanguageService } from '../../services/language.service';
import { ThemeService } from '../../services/theme.service';

const MAX_ATTACHEMENTS = 5;
const MAX_ATTACHEMENT_BYTES = 10 * 1024 * 1024;

export interface ComposerMessage {
  text: string;
  attachments: ChatAttachment[];
}

@Component({
  imports: [AttachmentChip],
  selector: 'app-chat-composer',
  styleUrl: './chat-composer.scss',
  templateUrl: './chat-composer.html',
})
export class ChatComposer implements OnDestroy {
  readonly placeholder = input('');
  readonly sent = output<ComposerMessage>();

  protected readonly language = inject(LanguageService);
  protected readonly theme = inject(ThemeService);

  protected readonly draft = signal('');
  protected readonly pending = signal<ChatAttachment[]>([]);
  protected readonly attachError = signal<string | null>(
    null,
  );

  protected readonly canSend = computed(
    () =>
      this.draft().trim() !== '' ||
      this.pending().length > 0,
  );

  clear(): void {
    this.draft.set('');
    this.revokePending();
  }

  ngOnDestroy(): void {
    this.revokePending();
  }

  protected send(): void {
    if (!this.canSend()) {
      return;
    }

    this.sent.emit({
      text: this.draft().trim(),
      attachments: this.pending(),
    });
    this.draft.set('');
    this.pending.set([]);
    this.attachError.set(null);
  }

  protected onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.send();
    }
  }

  protected onFilesSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const files = Array.from(input.files ?? []);

    input.value = '';

    let error: string | null = null;
    const added: ChatAttachment[] = [];
    for (const file of files) {
      if (
        this.pending().length + added.length >=
        MAX_ATTACHEMENTS
      ) {
        error = 'messages.attachTooMany';
        break;
      }
      if (file.size > MAX_ATTACHEMENT_BYTES) {
        error = 'messages.attachTooLarge';
        continue;
      }
      added.push({
        id: crypto.randomUUID(),
        name: file.name,
        size: file.size,
        type: file.type,
        url: URL.createObjectURL(file),
      });
    }

    this.pending.update((list) => [...list, ...added]);
    this.attachError.set(error);
  }

  protected removePending(id: string): void {
    const attachement = this.pending().find(
      (item) => item.id === id,
    );

    if (attachement) {
      URL.revokeObjectURL(attachement.url);
    }
    this.pending.update((list) =>
      list.filter((item) => item.id !== id),
    );
    this.attachError.set(null);
  }

  private revokePending(): void {
    for (const attachement of this.pending()) {
      URL.revokeObjectURL(attachement.url);
    }
    this.pending.set([]);
    this.attachError.set(null);
  }
}
