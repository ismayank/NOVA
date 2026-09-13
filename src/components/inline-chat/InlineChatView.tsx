import React, { useState } from 'react';
import { InlineChatHeader } from './InlineChatHeader';
import { InlineMessageFeed } from './InlineMessageFeed';
import { AIRAFollowUpNudge } from './AIRAFollowUpNudge';
import { InlineChatComposer } from './InlineChatComposer';
import { initialInlineMessages, QUICK_REPLIES } from '../../data/mockInlineChat';
import type { InlineMessage } from '../../data/mockInlineChat';

interface InlineChatViewProps {
  contactName: string;
  onBackToMail: () => void;
}

export const InlineChatView: React.FC<InlineChatViewProps> = ({
  contactName,
  onBackToMail,
}) => {
  const [messages, setMessages] = useState<InlineMessage[]>(initialInlineMessages);
  const [draftText, setDraftText] = useState('');
  const [showAIRANudge, setShowAIRANudge] = useState(true);

  const handleSendMessage = (text: string) => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'pm' : 'am';
    const formattedHours = hours % 12 || 12;
    const timeStr = `${formattedHours}.${minutes}${ampm}`;

    const newMsg: InlineMessage = {
      id: `im-${Date.now()}`,
      sender: 'Tushara Sree',
      time: timeStr,
      text,
      isSelf: true,
    };

    setMessages((prev) => [...prev, newMsg]);
  };

  const handleQuickReply = (reply: string) => {
    setDraftText(reply);
  };

  const handleInsertDraft = (draft: string) => {
    setDraftText(draft);
    setShowAIRANudge(false);
  };

  return (
    <main className="inline-chat-container">
      {/* Top Header */}
      <InlineChatHeader contactName={contactName} onBack={onBackToMail} />

      {/* Message Feed with Quick-Reply Chips */}
      <InlineMessageFeed
        messages={messages}
        quickReplies={QUICK_REPLIES}
        onSelectQuickReply={handleQuickReply}
      />

      {/* Dynamic AIRA Follow-up Nudge / Suggested Draft */}
      {showAIRANudge && (
        <AIRAFollowUpNudge
          onInsertDraft={handleInsertDraft}
          onDismiss={() => setShowAIRANudge(false)}
        />
      )}

      {/* Bottom Composer Bar */}
      <InlineChatComposer
        draftValue={draftText}
        onDraftChange={setDraftText}
        onSendMessage={handleSendMessage}
      />
    </main>
  );
};
