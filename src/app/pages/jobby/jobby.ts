import {
  Component,
  ElementRef,
  afterRenderEffect,
  computed,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { JobbyChat } from '../../models/jobby';
import { DashboardShell } from '../../components/dashboard-shell/dashboard-shell';
import { MessageBubble } from '../../components/message-bubble/message-bubble';
import {
  ChatComposer,
  ComposerMessage,
} from '../../components/chat-composer/chat-composer';
import { JobbyService } from '../../services/jobby.service';
import { LanguageService } from '../../services/language.service';
import { ThemeService } from '../../services/theme.service';
import { formatDate } from '../../utils/date-format';

function lastActivity(chat: JobbyChat): string {
  return chat.messages.at(-1)?.sentAt ?? chat.startedAt;
}

@Component({
  selector: 'app-jobby',
  imports: [DashboardShell, MessageBubble, ChatComposer],
  styleUrls: ['../messages/messages.scss', './jobby.scss'],
  templateUrl: './jobby.html',
})
export class Jobby {
  protected readonly language = inject(LanguageService);
  protected readonly theme = inject(ThemeService);
  private readonly jobby = inject(JobbyService);

  protected readonly selectedId = signal<string | null>(
    null,
  );
  protected readonly showChat = signal(true);
  protected readonly search = signal('');
  private readonly draftGreeting = signal(
    this.jobby.greeting(),
  );

  protected readonly suggestions = [
    'jobby.suggestionCv',
    'jobby.suggestionInterview',
    'jobby.suggestionJobs',
  ];

  protected readonly visibleChats = computed(() => {
    const query = this.search().trim().toLowerCase();
    return this.jobby
      .chats()
      .filter((chat) =>
        this.title(chat).toLowerCase().includes(query),
      )
      .sort((a, b) =>
        lastActivity(b).localeCompare(lastActivity(a)),
      );
  });

  protected readonly selectedChat = computed(
    () =>
      this.jobby
        .chats()
        .find((chat) => chat.id === this.selectedId()) ??
      null,
  );

  protected readonly messages = computed(
    () =>
      this.selectedChat()?.messages ?? [
        this.draftGreeting(),
      ],
  );

  protected readonly isTyping = computed(() => {
    const id = this.selectedId();
    return id !== null && this.jobby.typingIn() === id;
  });

  private readonly composer = viewChild(ChatComposer);
  private readonly thread =
    viewChild<ElementRef<HTMLElement>>('thread');

  constructor() {
    afterRenderEffect(() => {
      this.messages();
      this.isTyping();
      const element = this.thread()?.nativeElement;
      if (element) {
        element.scrollTop = element.scrollHeight;
      }
    });
  }

  protected newChat(): void {
    this.selectedId.set(null);
    this.draftGreeting.set(this.jobby.greeting());
    this.showChat.set(true);
    this.composer()?.clear();
  }

  protected select(id: string): void {
    this.selectedId.set(id);
    this.showChat.set(true);
    this.composer()?.clear();
  }

  protected back(): void {
    this.showChat.set(false);
  }

  protected send(message: ComposerMessage): void {
    let id = this.selectedId();
    if (id === null) {
      id = this.jobby.startChat(this.draftGreeting());
      this.selectedId.set(id);
    }
    this.jobby.send(id, message.text, message.attachments);
  }

  protected ask(key: string): void {
    this.send({
      text: this.language.t(key),
      attachments: [],
    });
  }

  protected title(chat: JobbyChat): string {
    return chat.title || this.language.t('jobby.newChat');
  }

  protected preview(chat: JobbyChat): string {
    const last = chat.messages.at(-1);
    if (!last) {
      return '';
    }
    const text =
      last.text ||
      `${this.language.t('messages.attachment')}: ${last.attachments?.[0]?.name ?? ''}`;
    return last.sender === 'me'
      ? `${this.language.t('messages.you')}: ${text}`
      : text;
  }

  protected date(chat: JobbyChat): string {
    return formatDate(
      lastActivity(chat),
      this.language.currentLanguage(),
      {
        day: 'numeric',
        month: 'short',
      },
    );
  }
}
