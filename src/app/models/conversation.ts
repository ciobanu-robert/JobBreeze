export type MessageSender = 'me' | 'company';

export interface ChatMessage {
  id: string;
  sender: MessageSender;
  text: string;
  sentAt: string;
}

export interface Conversation {
  id: string;
  applicationId: string;
  company: string;
  avatarInitials: string;
  jobTitle: string;
  // Set on chats opened before any message is sent,
  // so they still sort by recency.
  startedAt?: string;
  messages: ChatMessage[];
}
