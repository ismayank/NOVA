import React, { useState } from 'react';
import { X, Minus, Maximize2, Paperclip } from 'lucide-react';

interface ComposeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSend: (to: string, subject: string, body: string) => void;
}

export const ComposeModal: React.FC<ComposeModalProps> = ({
  isOpen,
  onClose,
  onSend,
}) => {
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  if (!isOpen) return null;

  const handleSend = () => {
    if (to.trim() || subject.trim() || body.trim()) {
      onSend(to, subject, body);
      setTo('');
      setSubject('');
      setBody('');
      onClose();
    }
  };

  return (
    <div className="compose-modal">
      <div className="compose-header">
        <span>New Message</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
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

      <div className="compose-body">
        <div className="compose-field">
          <input
            type="text"
            placeholder="Recipients"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
        </div>
        <div className="compose-field">
          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <textarea
          className="compose-textarea"
          placeholder="Write your email here..."
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </div>

      <div className="compose-footer">
        <button className="compose-send-btn" onClick={handleSend}>
          Send
        </button>
        <button className="icon-btn" title="Attach files">
          <Paperclip size={18} />
        </button>
      </div>
    </div>
  );
};
