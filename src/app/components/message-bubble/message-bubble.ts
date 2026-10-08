import {
  Component,
  computed,
  inject,
  input,
} from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { ChatMessage } from '../../models/conversation';
import { formatDate } from '../../utils/date-format';

@Component({
  imports: [],
  selector: 'app-message-bubble',
  styleUrl: './message-bubble.scss',
  templateUrl: './message-bubble.html',
})
export class MessageBubble {
  readonly message = input.required<ChatMessage>();

  protected readonly language = inject(LanguageService);

  protected readonly isMine = computed(
    () => this.message().sender === 'me',
  );

  protected readonly time = computed(() =>
    formatDate(
      this.message().sentAt,
      this.language.currentLanguage(),
      {
        day: 'numeric',
        month: 'short',
        hour: '2-digit',
        minute: '2-digit',
      },
    ),
  );
}
