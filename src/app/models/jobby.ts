import { ChatMessage } from './conversation';

export interface JobbyChat {
  id: string;
  title: string;
  startedAt: string;
  messages: ChatMessage[];
}

export interface JobbyReply {
  keywords: string[];
  en: string;
  ro: string;
}
