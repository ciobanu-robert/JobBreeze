import { Injectable, inject, signal } from '@angular/core';
import {
  ChatAttachment,
  ChatMessage,
} from '../models/conversation';
import { JobbyChat } from '../models/jobby';
import { LanguageService } from './language.service';
import {
  DEMO_JOBBY_CHATS,
  JOBBY_FILE_REPLY,
  JOBBY_REPLIES,
} from '../pages/jobby/demo-jobby';

const REPLY_DELAY_MS = 1200;
const TITLE_MAX_LENGTH = 40;

@Injectable({ providedIn: 'root' })
export class JobbyService {
  private readonly language = inject(LanguageService);

  private readonly store = signal<JobbyChat[]>(
    DEMO_JOBBY_CHATS,
  );

  readonly chats = this.store.asReadonly();
  readonly typingIn = signal<string | null>(null);

  greeting(): ChatMessage {
    return this.message(
      'jobby',
      this.language.t('jobby.greeting'),
    );
  }

  startChat(greeting: ChatMessage): string {
    const chat: JobbyChat = {
      id: crypto.randomUUID(),
      title: '',
      startedAt: new Date().toISOString(),
      messages: [greeting],
    };

    this.store.update((list) => [chat, ...list]);
    return chat.id;
  }

  send(
    chatId: string,
    text: string,
    attachments: ChatAttachment[] = [],
  ): void {
    const message = this.message('me', text, attachments);
    this.store.update((list) =>
      list.map((chat) =>
        chat.id === chatId
          ? {
              ...chat,
              title:
                chat.title ||
                text.slice(0, TITLE_MAX_LENGTH),
              messages: [...chat.messages, message],
            }
          : chat,
      ),
    );

    this.typingIn.set(chatId);
    setTimeout(() => {
      const reply = this.message(
        'jobby',
        this.replyTo(text, attachments),
      );

      this.store.update((list) =>
        list.map((chat) =>
          chat.id === chatId
            ? {
                ...chat,
                messages: [...chat.messages, reply],
              }
            : chat,
        ),
      );
      this.typingIn.set(null);
    }, REPLY_DELAY_MS);
  }

  private replyTo(
    text: string,
    attachments: ChatAttachment[],
  ): string {
    const language = this.language.currentLanguage();
    if (!text && attachments.length) {
      return JOBBY_FILE_REPLY[language];
    }

    const lower = text.toLowerCase();
    const reply = JOBBY_REPLIES.find(
      (candidate) =>
        candidate.keywords.length === 0 ||
        candidate.keywords.some((word) =>
          lower.includes(word),
        ),
    );
    return reply ? reply[language] : '';
  }

  private message(
    sender: ChatMessage['sender'],
    text: string,
    attachments: ChatAttachment[] = [],
  ): ChatMessage {
    return {
      id: crypto.randomUUID(),
      sender,
      text,
      sentAt: new Date().toISOString(),
      ...(attachments.length ? { attachments } : {}),
    };
  }
}
