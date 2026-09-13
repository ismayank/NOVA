import React from 'react';
import { ArrowLeft, ChevronDown, Search, MoreVertical } from 'lucide-react';

interface ChatHeaderProps {
  title: string;
  memberCountText: string;
  isMinimized: boolean;
  onToggleMinimize: () => void;
  onClose: () => void;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({
  title,
  memberCountText,
  isMinimized,
  onToggleMinimize,
  onClose,
}) => {
  return (
    <div className="chat-header">
      {/* Left Back Arrow & Group Info */}
      <div className="chat-header-left" onClick={onToggleMinimize} title={isMinimized ? 'Expand chat' : 'Minimize'}>
        <button 
          className="icon-btn" 
          style={{ width: 32, height: 32 }}
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          title="Close chat"
        >
          <ArrowLeft size={18} />
        </button>

        <div className="chat-title-group">
          <div className="chat-title-row">
            <span>{title}</span>
            <ChevronDown size={14} style={{ color: '#5f6368' }} />
          </div>
          <span className="chat-member-count">{memberCountText}</span>
        </div>
      </div>

      {/* Right Action Icons matching screenshot */}
      <div className="chat-header-right">
        <button className="icon-btn" style={{ width: 32, height: 32 }} title="Search in conversation">
          <Search size={16} />
        </button>

        <button 
          className="icon-btn" 
          style={{ width: 32, height: 32 }} 
          onClick={onToggleMinimize}
          title="More options"
        >
          <MoreVertical size={16} />
        </button>
      </div>
    </div>
  );
};
