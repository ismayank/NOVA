import React, { useState, type KeyboardEvent } from 'react';
import { Plus, Type, Smile, PenLine, ArrowUp, SendHorizontal } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (text: string) => void;
}

export const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage }) => {
  const [text, setText] = useState('');

  const handleSend = () => {
    if (text.trim()) {
      onSendMessage(text.trim());
      setText('');
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="chat-input-wrapper">
      <div className="chat-input-pill">
        {/* Plus / Add Attachment button */}
        <button className="input-icon-btn" title="Add files or integrations">
          <Plus size={18} color="#1a73e8" />
        </button>

        {/* Text Input */}
        <input
          type="text"
          className="chat-text-input"
          placeholder="History is on"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        {/* Right Action Icons */}
        <div className="input-actions-right">
          <button className="input-icon-btn" title="Format options">
            <Type size={16} />
          </button>

          <button className="input-icon-btn" title="Add emoji">
            <Smile size={16} />
          </button>

          <button className="input-icon-btn" title="Annotation / Pen">
            <PenLine size={16} />
          </button>

          <button className="input-icon-btn" title="Upload file">
            <ArrowUp size={16} />
          </button>

          {/* Send Button */}
          <button 
            className="send-icon-btn" 
            onClick={handleSend}
            disabled={!text.trim()}
            title="Send message"
            style={{ color: text.trim() ? '#1a73e8' : '#8ab4f8' }}
          >
            <SendHorizontal size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};
