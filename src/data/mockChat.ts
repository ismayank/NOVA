import type { ChatMessage, AIRANudge } from '../types';

export const initialChatMessages: ChatMessage[] = [
  {
    id: 'msg-0',
    senderName: 'Sathvika Rao',
    avatarInitials: 'SR',
    avatarBg: '#f9ab00',
    time: '9:02 AM',
    text: 'I thought you were doing it?',
  },
  {
    id: 'msg-1',
    senderName: 'Dinesh Patel',
    avatarInitials: 'DP',
    avatarBg: '#ea4335',
    time: '9:03 AM',
    text: 'Oh okay, no worries.',
  },
  {
    id: 'msg-2',
    senderName: 'Sathvika Rao',
    avatarInitials: 'SR',
    avatarBg: '#f9ab00',
    time: '9:04 AM',
    text: 'I can do it as well.',
  },
  {
    id: 'msg-3',
    senderName: 'Navatej Kumar',
    avatarInitials: 'NK',
    avatarBg: '#1a73e8',
    time: '9:05 AM',
    text: 'Either of you is fine.',
  },
];

export const initialNudge: AIRANudge = {
  id: 'nudge-1',
  title: 'AIRA',
  issue: 'Who should own the landing page?',
  summary: 'Who should own the landing page?',
  suggestedAction: 'Clarify owner',
  isDismissed: false,
};
