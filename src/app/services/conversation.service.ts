import { Injectable, signal } from '@angular/core';
import { Application } from '../models/application';
import {
  ChatMessage,
  Conversation,
} from '../models/conversation';
import { DEMO_CONVERSATIONS } from '../pages/messages/demo-conversations';

function initialsOf(company: string): string {
  return company
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word.charAt(0))
    .join('')
    .toUpperCase();
}

@Injectable({ providedIn: 'root' })
export class ConversationService {
  private readonly store = signal<Conversation[]>(
    DEMO_CONVERSATIONS,
  );

  readonly conversations = this.store.asReadonly();

  // Returns the chat for this application, starting an
  // empty one if the user never talked to the company.
  openForApplication(application: Application): string {
    const existing = this.store().find(
      (conversation) =>
        conversation.applicationId === application.id,
    );
    if (existing) {
      return existing.id;
    }

    const conversation: Conversation = {
      id: `conv-${application.id}`,
      applicationId: application.id,
      company: application.company,
      avatarInitials: initialsOf(application.company),
      jobTitle: application.title,
      startedAt: new Date().toISOString(),
      messages: [],
    };
    this.store.update((list) => [conversation, ...list]);
    return conversation.id;
  }

  send(conversationId: string, text: string): void {
    const message: ChatMessage = {
      id: crypto.randomUUID(),
      sender: 'me',
      text,
      sentAt: new Date().toISOString(),
    };

    this.store.update((list) =>
      list.map((conversation) =>
        conversation.id === conversationId
          ? {
              ...conversation,
              messages: [...conversation.messages, message],
            }
          : conversation,
      ),
    );
  }
}
