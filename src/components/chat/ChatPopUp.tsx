import React from 'react';
import { ChatHeader } from './ChatHeader';
import { MessageList } from './MessageList';
import { AIRANudgeCard } from './AIRANudgeCard';
import { ChatInput } from './ChatInput';
import type { ChatMessage, AIRANudge } from '../../types';

interface ChatPopUpProps {
  isOpen: boolean;
  isMinimized: boolean;
  messages: ChatMessage[];
  nudge: AIRANudge;
  onToggleMinimize: () => void;
  onClose: () => void;
  onSendMessage: (text: string) => void;
  onDismissNudge: () => void;
  onResolveOwner: (ownerName: string, fullName: string) => void;
}

export const ChatPopUp: React.FC<ChatPopUpProps> = ({
  isOpen,
  isMinimized,
  messages,
  nudge,
  onToggleMinimize,
  onClose,
  onSendMessage,
  onDismissNudge,
  onResolveOwner,
}) => {
  if (!isOpen) return null;

  return (
    <aside 
      className={`chat-popup-container ${isMinimized ? 'minimized' : ''}`}
      aria-label="Chat window: Marketing Campaign"
    >
      <ChatHeader
        title="Marketing Campaign"
        memberCountText="12 members"
        isMinimized={isMinimized}
        onToggleMinimize={onToggleMinimize}
        onClose={onClose}
      />

      {!isMinimized && (
        <>
          <MessageList messages={messages} />

          <AIRANudgeCard
            nudge={nudge}
            onDismiss={onDismissNudge}
            onResolveOwner={onResolveOwner}
          />

          <ChatInput onSendMessage={onSendMessage} />
        </>
      )}
    </aside>
  );
};
