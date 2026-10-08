import {
  Component,
  ElementRef,
  afterRenderEffect,
  computed,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import {
  ChatMessage,
  Conversation,
} from '../../models/conversation';
import { DEMO_CONVERSATIONS } from './demo-conversations';
import { DashboardShell } from '../../components/dashboard-shell/dashboard-shell';
import { ConversationItem } from '../../components/conversation-item/conversation-item';
import { MessageBubble } from '../../components/message-bubble/message-bubble';
import { LanguageService } from '../../services/language.service';
import { ThemeService } from '../../services/theme.service';

function lastSentAt(conversation: Conversation): string {
  return conversation.messages.at(-1)?.sentAt ?? '';
}

@Component({
  selector: 'app-messages',
  imports: [
    DashboardShell,
    ConversationItem,
    MessageBubble,
  ],
  styleUrl: './messages.scss',
  templateUrl: './messages.html',
})
export class Messages {
  protected readonly language = inject(LanguageService);
  protected readonly theme = inject(ThemeService);

  protected readonly conversations = signal<Conversation[]>(
    DEMO_CONVERSATIONS,
  );
  protected readonly selectedId = signal<string | null>(
    null,
  );
  protected readonly search = signal('');
  protected readonly draft = signal('');

  protected readonly visibleConversations = computed(() => {
    const query = this.search().trim().toLowerCase();
    return this.conversations()
      .filter((conversation) =>
        conversation.company.toLowerCase().includes(query),
      )
      .sort((a, b) =>
        lastSentAt(b).localeCompare(lastSentAt(a)),
      );
  });

  protected readonly selectedConversation = computed(
    () =>
      this.conversations().find(
        (conversation) =>
          conversation.id === this.selectedId(),
      ) ?? null,
  );

  protected readonly canSend = computed(
    () => this.draft().trim() !== '',
  );

  private readonly thread =
    viewChild<ElementRef<HTMLElement>>('thread');

  constructor() {
    afterRenderEffect(() => {
      this.selectedConversation();
      const element = this.thread()?.nativeElement;
      if (element) {
        element.scrollTop = element.scrollHeight;
      }
    });
  }

  protected select(id: string): void {
    this.selectedId.set(id);
    this.draft.set('');
  }

  protected back(): void {
    this.selectedId.set(null);
  }

  protected send(): void {
    const id = this.selectedId();
    const text = this.draft().trim();
    if (!id || !text) {
      return;
    }

    const message: ChatMessage = {
      id: crypto.randomUUID(),
      sender: 'me',
      text,
      sentAt: new Date().toISOString(),
    };

    this.conversations.update((list) =>
      list.map((conversation) =>
        conversation.id === id
          ? {
              ...conversation,
              messages: [...conversation.messages, message],
            }
          : conversation,
      ),
    );
    this.draft.set('');
  }

  protected onComposerKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.send();
    }
  }
}
