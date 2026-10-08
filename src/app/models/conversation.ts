export type MessageSender = 'me' | 'company';

export interface ChatMessage {
  id: string;
  sender: MessageSender;
  text: string;
  sentAt: string;
}

export interface Conversation {
  id: string;
  company: string;
  avatarInitials: string;
  jobTitle: string;
  messages: ChatMessage[];
}
