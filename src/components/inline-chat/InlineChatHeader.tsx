import React from 'react';
import { 
  ArrowLeft, 
  ChevronDown, 
  Search, 
  Video, 
  Phone, 
  Folder, 
  CheckSquare, 
  Pin 
} from 'lucide-react';

interface InlineChatHeaderProps {
  contactName: string;
  onBack?: () => void;
}

export const InlineChatHeader: React.FC<InlineChatHeaderProps> = ({
  contactName,
  onBack,
}) => {
  return (
    <div className="inline-chat-header">
      {/* Left Info & Actions */}
      <div className="inline-header-left">
        <button className="icon-btn" onClick={onBack} title="Back">
          <ArrowLeft size={20} />
        </button>

        <div className="inline-contact-avatar">
          {contactName ? contactName[0] : 'G'}
        </div>

        <div className="inline-contact-title-group">
          <span className="inline-contact-name">{contactName}</span>
          <ChevronDown size={16} color="#5f6368" />
        </div>

        <button className="icon-btn" style={{ width: 34, height: 34 }} title="Search in chat">
          <Search size={18} />
        </button>

        <button className="icon-btn" style={{ width: 34, height: 34 }} title="Start video call">
          <Video size={18} />
        </button>
      </div>

      {/* Right Action Icons Group */}
      <div className="inline-header-right-capsule">
        <button className="icon-btn" style={{ width: 34, height: 34 }} title="Call">
          <Phone size={17} />
        </button>
        <button className="icon-btn" style={{ width: 34, height: 34 }} title="Shared files">
          <Folder size={17} />
        </button>
        <button className="icon-btn" style={{ width: 34, height: 34 }} title="Tasks">
          <CheckSquare size={17} />
        </button>
        <button className="icon-btn" style={{ width: 34, height: 34 }} title="Pin conversation">
          <Pin size={17} />
        </button>
      </div>
    </div>
  );
};
