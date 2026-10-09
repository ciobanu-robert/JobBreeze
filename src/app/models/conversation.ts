export type MessageSender = 'me' | 'company' | 'jobby';

export interface ChatAttachment {
  id: string;
  name: string;
  size: number;
  type: string;
  url: string;
}

export interface ChatMessage {
  id: string;
  sender: MessageSender;
  text: string;
  sentAt: string;
  attachments?: ChatAttachment[];
}

export interface Conversation {
  id: string;
  applicationId: string;
  company: string;
  avatarInitials: string;
  jobTitle: string;
  startedAt?: string;
  messages: ChatMessage[];
}
