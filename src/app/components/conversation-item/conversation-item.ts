import {
  Component,
  computed,
  inject,
  input,
} from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { Conversation } from '../../models/conversation';
import { formatDate } from '../../utils/date-format';

@Component({
  imports: [],
  selector: 'app-conversation-item',
  styleUrl: './conversation-item.scss',
  templateUrl: './conversation-item.html',
})
export class ConversationItem {
  readonly conversation = input.required<Conversation>();
  readonly active = input(false);

  protected readonly language = inject(LanguageService);

  protected readonly lastMessage = computed(
    () => this.conversation().messages.at(-1) ?? null,
  );

  protected readonly preview = computed(() => {
    const last = this.lastMessage();
    if (!last) {
      return '';
    }
    const firstFile = last.attachments?.[0];
    const text =
      last.text ||
      (firstFile
        ? `${this.language.t('messages.attachment')}: ${firstFile.name}`
        : '');
    return last.sender === 'me'
      ? `${this.language.t('messages.you')}: ${text}`
      : text;
  });

  protected readonly date = computed(() => {
    const last = this.lastMessage();
    if (!last) {
      return '';
    }
    return formatDate(
      last.sentAt,
      this.language.currentLanguage(),
      {
        day: 'numeric',
        month: 'short',
      },
    );
  });
}
