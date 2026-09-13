import React, { useRef, useEffect } from 'react';
import type { InlineMessage } from '../../data/mockInlineChat';

interface InlineMessageFeedProps {
  messages: InlineMessage[];
  quickReplies: string[];
  onSelectQuickReply: (reply: string) => void;
}

export const InlineMessageFeed: React.FC<InlineMessageFeedProps> = ({
  messages,
  quickReplies,
  onSelectQuickReply,
}) => {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="inline-message-feed">
      {/* Today Divider */}
      <div className="feed-date-divider">
        <span>Today</span>
      </div>

      {/* Messages List */}
      <div className="feed-messages-container">
        {messages.map((msg) => (
          <div key={msg.id} className="feed-message-row">
            {/* Grey Avatar Circle */}
            <div className="feed-avatar">
              {msg.sender ? msg.sender[0] : 'U'}
            </div>

            {/* Bubble & Metadata */}
            <div className="feed-message-content">
              <div className="feed-sender-header">
                <span className="feed-sender-name">{msg.sender}</span>
                <span className="feed-timestamp">{msg.time}</span>
              </div>
              <div className="feed-bubble">
                {msg.text}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dynamic Quick-Reply Chips */}
      {quickReplies.length > 0 && (
        <div className="quick-replies-row">
          {quickReplies.map((reply, idx) => (
            <button
              key={idx}
              className="quick-reply-chip"
              onClick={() => onSelectQuickReply(reply)}
            >
              {reply}
            </button>
          ))}
        </div>
      )}

      <div ref={bottomRef} />
    </div>
  );
};
