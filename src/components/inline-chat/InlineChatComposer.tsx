import React, { useState, type KeyboardEvent } from 'react';
import { Plus, Smile } from 'lucide-react';

interface InlineChatComposerProps {
  draftValue: string;
  onDraftChange: (val: string) => void;
  onSendMessage: (text: string) => void;
}

export const InlineChatComposer: React.FC<InlineChatComposerProps> = ({
  draftValue,
  onDraftChange,
  onSendMessage,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSend = () => {
    if (draftValue.trim()) {
      onSendMessage(draftValue.trim());
      onDraftChange('');
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="inline-composer-wrapper">
      {/* Standalone Light Blue Plus Button */}
      <button className="composer-plus-btn" title="Add files or integrations">
        <Plus size={20} color="#001d35" />
      </button>

      {/* Main Input Capsule */}
      <div className="composer-input-pill">
        <input
          type="text"
          className="composer-text-input"
          placeholder="History is on"
          value={draftValue}
          onChange={(e) => onDraftChange(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        {/* Right Toolbar Actions */}
        <div className="composer-actions-right">
          {/* Format 'A' icon */}
          <button className="composer-icon-btn" title="Format options">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#444746">
              <path d="M11 3L5.5 17h2.25l1.12-3h6.25l1.12 3h2.26L13 3h-2zm-1.38 9L12 5.67 14.38 12H9.62zM4 19h16v2H4v-2z" />
            </svg>
          </button>

          {/* Emoji */}
          <button className="composer-icon-btn" title="Add emoji">
            <Smile size={19} color="#444746" strokeWidth={1.8} />
          </button>

          {/* GIF Badge */}
          <button className="composer-icon-btn" title="Add GIF">
            <span className="composer-gif-badge">GIF</span>
          </button>

          {/* Upload Tray */}
          <button className="composer-icon-btn" title="Upload file">
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#444746" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 16v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3" />
              <polyline points="16 8 12 4 8 8" />
              <line x1="12" y1="4" x2="12" y2="15" />
            </svg>
          </button>

          {/* Record / Circle in Circle */}
          <button className="composer-icon-btn" title="Record audio/video">
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="8.5" stroke="#444746" strokeWidth="1.9" />
              <circle cx="12" cy="12" r="3.5" fill="#444746" />
            </svg>
          </button>
        </div>
      </div>

      {/* Split Send Button */}
      <div className="composer-split-send">
        <button 
          className="split-send-dropdown-part" 
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          title="Send options"
        >
          <svg width="9" height="7" viewBox="0 0 10 8" fill="#444746">
            <path d="M0 1.5L5 6.5L10 1.5H0Z" />
          </svg>
        </button>
        <button 
          className="split-send-action-part" 
          onClick={handleSend}
          disabled={!draftValue.trim()}
          title="Send message"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={draftValue.trim() ? '#0b57d0' : '#747775'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="3 3 21 12 3 21 7 12 3 3" />
            <line x1="7" y1="12" x2="21" y2="12" />
          </svg>
        </button>
      </div>
    </div>
  );
};
