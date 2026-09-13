export type StatusBadgeType = 'NEEDS REPLY' | 'ACTION REQ' | 'FYI';

export interface EmailItem {
  id: string;
  sender: string;
  senderCount?: number;
  badge?: StatusBadgeType;
  subject: string;
  snippet: string;
  time: string;
  isUnread: boolean;
  isStarred: boolean;
  isSelected?: boolean;
  folder?: string;
}

export interface ChatMessage {
  id: string;
  senderName: string;
  avatarInitials: string;
  avatarBg: string; // hex or tailwind-like color
  time: string;
  text: string;
  isCurrentUser?: boolean;
}

export interface AIRANudge {
  id: string;
  title: string;
  issue: string;
  summary: string;
  suggestedAction: string;
  isDismissed: boolean;
  resolvedOwner?: string;
}
