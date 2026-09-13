import React, { useState } from 'react';
import { Minus, Maximize2, X, Sparkles, Paperclip, Trash2 } from 'lucide-react';

interface AIRAFollowUpComposeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSend: (messageText: string) => void;
}

const DEFAULT_DRAFT = `Hi Navatej,

Just following up on my end — wanted to give you a quick status update.

We're currently reviewing the revised Gmail feedback experience designs. I'll have a full update to share with you shortly.`;

export const AIRAFollowUpComposeModal: React.FC<AIRAFollowUpComposeModalProps> = ({
  isOpen,
  onClose,
  onSend,
}) => {
  const [to] = useState('navatej@novacommunicate.com');
  const [subject] = useState('Re: Updated needed on Gmail feedback');
  const [body, setBody] = useState(DEFAULT_DRAFT);

  if (!isOpen) return null;

  const handleSendClick = () => {
    onSend(body);
  };

  return (
    <div className="aira-compose-modal" aria-label="Compose Message">
      {/* Top Header */}
      <div className="aira-compose-header">
        <span className="aira-compose-title">New Message</span>
        <div className="aira-compose-controls">
          <button className="icon-btn" style={{ width: 28, height: 28 }} title="Minimize">
            <Minus size={14} />
          </button>
          <button className="icon-btn" style={{ width: 28, height: 28 }} title="Full screen">
            <Maximize2 size={14} />
          </button>
          <button className="icon-btn" style={{ width: 28, height: 28 }} onClick={onClose} title="Close">
            <X size={14} />
          </button>
        </div>
      </div>

      {/* Recipient & Subject */}
      <div className="aira-compose-meta">
        <div className="compose-meta-row">
          <span className="meta-label">To</span>
          <span className="meta-value">{to}</span>
        </div>
        <div className="compose-meta-row">
          <span className="meta-label">Subject</span>
          <span className="meta-value">{subject}</span>
        </div>
      </div>

      {/* AIRA Suggested Draft Badge Strip */}
      <div className="aira-draft-indicator-strip">
        <div className="aira-draft-tag">
          <Sparkles size={13} />
          <span>AIRA suggested draft</span>
        </div>
        <span className="aira-draft-subtag">Edit before sending</span>
      </div>

      {/* Message Body Editor */}
      <div className="aira-compose-body">
        <textarea
          className="aira-compose-textarea"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Write your reply..."
        />
      </div>

      {/* Compose Footer */}
      <div className="aira-compose-footer">
        <div className="compose-footer-left">
          <button className="compose-primary-send-btn" onClick={handleSendClick}>
            Send
          </button>
          <button className="icon-btn" title="Attach files">
            <Paperclip size={18} />
          </button>
        </div>

        <button className="icon-btn" onClick={onClose} title="Discard draft">
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
};
