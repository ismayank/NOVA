import React from 'react';
import { MessageSquare, Video } from 'lucide-react';
import mailSvg from '../assets/mail.svg';

interface LeftRailProps {
  activeTab: 'mail' | 'chat' | 'meet';
  onTabChange: (tab: 'mail' | 'chat' | 'meet') => void;
  onOpenChat: () => void;
}

export const LeftRail: React.FC<LeftRailProps> = ({
  activeTab,
  onTabChange,
  onOpenChat,
}) => {
  return (
    <nav className="left-rail" aria-label="Main Navigation">
      {/* Mail tab */}
      <div 
        className={`rail-item ${activeTab === 'mail' ? 'active' : ''}`}
        onClick={() => onTabChange('mail')}
        title="Mail"
      >
        <div className="rail-icon-wrapper">
          <img 
            src={mailSvg} 
            alt="Mail" 
            width={20} 
            height={20} 
            style={{ display: 'block', userSelect: 'none' }} 
          />
        </div>
        <span className="rail-label">Mail</span>
      </div>

      {/* Chat tab */}
      <div 
        className={`rail-item ${activeTab === 'chat' ? 'active' : ''}`}
        onClick={() => {
          onTabChange('chat');
          onOpenChat();
        }}
        title="Chat"
      >
        <div className="rail-icon-wrapper">
          <MessageSquare size={20} strokeWidth={activeTab === 'chat' ? 2.5 : 2} />
        </div>
        <span className="rail-label">Chat</span>
      </div>

      {/* Meet tab */}
      <div 
        className={`rail-item ${activeTab === 'meet' ? 'active' : ''}`}
        onClick={() => onTabChange('meet')}
        title="Meet"
      >
        <div className="rail-icon-wrapper">
          <Video size={20} strokeWidth={activeTab === 'meet' ? 2.5 : 2} />
        </div>
        <span className="rail-label">Meet</span>
      </div>
    </nav>
  );
};
