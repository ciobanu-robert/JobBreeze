import {
  Component,
  ElementRef,
  afterNextRender,
  afterRenderEffect,
  computed,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Conversation } from '../../models/conversation';
import { DashboardShell } from '../../components/dashboard-shell/dashboard-shell';
import { ConversationItem } from '../../components/conversation-item/conversation-item';
import { MessageBubble } from '../../components/message-bubble/message-bubble';
import { ConversationService } from '../../services/conversation.service';
import { LanguageService } from '../../services/language.service';
import { ThemeService } from '../../services/theme.service';

function lastSentAt(conversation: Conversation): string {
  return (
    conversation.messages.at(-1)?.sentAt ??
    conversation.startedAt ??
    ''
  );
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
  private readonly chats = inject(ConversationService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  protected readonly conversations =
    this.chats.conversations;
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
  private readonly listItems =
    viewChild<ElementRef<HTMLElement>>('listItems');

  constructor() {
    const requested =
      this.route.snapshot.queryParamMap.get('chat');
    if (
      requested &&
      this.conversations().some(
        (conversation) => conversation.id === requested,
      )
    ) {
      this.selectedId.set(requested);
    }

    // A chat opened from another page can sit far down
    // the list, so bring it into view.
    afterNextRender(() => {
      this.listItems()
        ?.nativeElement.querySelector('.active')
        ?.scrollIntoView({ block: 'nearest' });
    });

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
    this.syncUrl(id);
  }

  protected back(): void {
    this.selectedId.set(null);
    this.syncUrl(null);
  }

  protected send(): void {
    const id = this.selectedId();
    const text = this.draft().trim();
    if (!id || !text) {
      return;
    }

    this.chats.send(id, text);
    this.draft.set('');
  }

  protected onComposerKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.send();
    }
  }

  private syncUrl(chat: string | null): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { chat },
      replaceUrl: true,
    });
  }
}
