import React, { useState } from 'react';
import { 
  MessageSquare, 
  ChevronDown, 
  ChevronRight, 
  Home, 
  AtSign, 
  Star, 
  Users 
} from 'lucide-react';

interface ChatSidebarProps {
  isCollapsed: boolean;
  activeContact: string;
  onSelectContact: (contact: string) => void;
  onNewChat: () => void;
}

export const ChatSidebar: React.FC<ChatSidebarProps> = ({
  isCollapsed,
  activeContact,
  onSelectContact,
  onNewChat,
}) => {
  const [shortcutsOpen, setShortcutsOpen] = useState(true);
  const [dmOpen, setDmOpen] = useState(true);
  const [spacesOpen, setSpacesOpen] = useState(true);

  const directMessages = [
    { id: 'Geetika M', name: 'Geetika M' },
    { id: 'Navatej Kumar', name: 'Navatej Kumar' },
    { id: 'Sathvika', name: 'Sathvika' },
  ];

  return (
    <aside className={`sidebar-drawer ${isCollapsed ? 'collapsed' : ''}`} aria-label="Chat Navigation">
      {/* New Chat Button */}
      <div className="compose-button-wrapper">
        <button className="compose-btn" onClick={onNewChat}>
          <MessageSquare size={20} strokeWidth={2} />
          <span>New Chat</span>
        </button>
      </div>

      <div className="folder-list">
        {/* Shortcuts Accordion */}
        <div 
          className="folder-item"
          onClick={() => setShortcutsOpen(!shortcutsOpen)}
          style={{ fontWeight: 600, color: '#444746' }}
        >
          <div className="folder-left" style={{ gap: 8 }}>
            {shortcutsOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            <span>Shortcuts</span>
          </div>
        </div>

        {shortcutsOpen && (
          <div style={{ paddingLeft: 8 }}>
            <div className="folder-item">
              <div className="folder-left">
                <Home size={18} />
                <span>Home</span>
              </div>
            </div>
            <div className="folder-item">
              <div className="folder-left">
                <AtSign size={18} />
                <span>Mentions</span>
              </div>
            </div>
            <div className="folder-item">
              <div className="folder-left">
                <Star size={18} />
                <span>Starred</span>
              </div>
            </div>
          </div>
        )}

        {/* Direct Messages Accordion */}
        <div 
          className="folder-item"
          onClick={() => setDmOpen(!dmOpen)}
          style={{ fontWeight: 600, color: '#444746', marginTop: 8 }}
        >
          <div className="folder-left" style={{ gap: 8 }}>
            {dmOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            <span>Direct messages</span>
          </div>
        </div>

        {dmOpen && (
          <div style={{ paddingLeft: 8 }}>
            {directMessages.map((dm) => {
              const isActive = activeContact === dm.id;
              return (
                <div
                  key={dm.id}
                  className={`folder-item ${isActive ? 'active' : ''}`}
                  onClick={() => onSelectContact(dm.id)}
                  style={{ gap: 10 }}
                >
                  <div className="folder-left" style={{ gap: 10 }}>
                    <div 
                      className="chat-avatar" 
                      style={{ 
                        width: 22, 
                        height: 22, 
                        backgroundColor: '#bdc1c6', 
                        color: '#ffffff',
                        fontSize: 11 
                      }}
                    >
                      {dm.name[0]}
                    </div>
                    <span style={{ fontWeight: isActive ? 600 : 400 }}>{dm.name}</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Spaces Accordion */}
        <div 
          className="folder-item"
          onClick={() => setSpacesOpen(!spacesOpen)}
          style={{ fontWeight: 600, color: '#444746', marginTop: 8 }}
        >
          <div className="folder-left" style={{ gap: 8 }}>
            {spacesOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            <span>Spaces</span>
          </div>
        </div>

        {spacesOpen && (
          <div style={{ paddingLeft: 8 }}>
            <div className="folder-item">
              <div className="folder-left">
                <Users size={18} />
                <span>Product & Design</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};
