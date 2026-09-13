import React, { useEffect, useRef } from 'react';
import type { ChatMessage } from '../../types';

interface MessageListProps {
  messages: ChatMessage[];
}

export const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  const bottomRef = useRef<HTMLDivElement>(null);
  const visibleMessages = messages.filter((msg) => msg.senderName !== 'AIRA Assistant');

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [visibleMessages]);

  return (
    <div className="chat-message-log">
      {visibleMessages.map((msg) => (
        <div key={msg.id} className="chat-message-item">
          {/* Circular colored avatar */}
          <div 
            className="chat-avatar" 
            style={{ backgroundColor: msg.avatarBg }}
            title={msg.senderName}
          >
            {msg.avatarInitials}
          </div>

          {/* Message content */}
          <div className="chat-message-body">
            <div className="chat-sender-header">
              <span className="chat-sender-name">{msg.senderName}</span>
              <span className="chat-msg-time">{msg.time}</span>
            </div>
            <div className="chat-msg-text">{msg.text}</div>
          </div>
        </div>
      ))}
      <div ref={bottomRef} />
    </div>
  );
};
