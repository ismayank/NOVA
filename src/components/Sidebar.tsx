import React, { useState } from 'react';
import {
  Pencil,
  Star,
  Send,
  FileText,
  Plus
} from 'lucide-react';
import inboxSvg from '../assets/inbox.svg';
import snoozedSvg from '../assets/snoozed.svg';
import categorySvg from '../assets/category.svg';
import dropdownSvg from '../assets/dropdown.svg';

interface SidebarProps {
  isCollapsed: boolean;
  activeFolder: string;
  onSelectFolder: (folder: string) => void;
  onCompose: () => void;
  draftsCount?: number;
}

export const Sidebar: React.FC<SidebarProps> = ({
  isCollapsed,
  activeFolder,
  onSelectFolder,
  onCompose,
  draftsCount = 1,
}) => {
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  const navItems = [
    { id: 'inbox', label: 'Inbox', icon: null, svg: inboxSvg, count: undefined },
    { id: 'starred', label: 'Starred', icon: Star, svg: null, count: undefined },
    { id: 'snoozed', label: 'Snoozed', icon: null, svg: snoozedSvg, count: undefined },
    { id: 'sent', label: 'Sent', icon: Send, svg: null, count: undefined },
    { id: 'drafts', label: 'Drafts', icon: FileText, svg: null, count: draftsCount },
  ];

  return (
    <aside className={`sidebar-drawer ${isCollapsed ? 'collapsed' : ''}`} aria-label="Mail Folders">
      {/* Compose pill button */}
      <div className="compose-button-wrapper">
        <button className="compose-btn" onClick={onCompose}>
          <Pencil size={20} strokeWidth={2.2} />
          <span>Compose</span>
        </button>
      </div>

      {/* Main Mail Folders */}
      <div className="folder-list">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeFolder === item.id;
          return (
            <div
              key={item.id}
              className={`folder-item ${isActive ? 'active' : ''}`}
              onClick={() => onSelectFolder(item.id)}
            >
              <div className="folder-left">
                {item.svg ? (
                  <div style={{ width: 18, height: 18, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img 
                      src={item.svg} 
                      alt={item.label} 
                      width={18} 
                      height={18} 
                      style={{ display: 'block', userSelect: 'none' }} 
                    />
                  </div>
                ) : Icon ? (
                  <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
                ) : null}
                <span>{item.label}</span>
              </div>
              {item.count !== undefined && (
                <span className="folder-count">{item.count}</span>
              )}
            </div>
          );
        })}

        {/* Categories expandable */}
        <div
          className="folder-item categories-tab"
          onClick={() => setCategoriesOpen(!categoriesOpen)}
        >
          <div className="folder-left">
            <div style={{ width: 18, height: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', paddingLeft: 4 }}>
              <img
                src={categorySvg}
                alt=""
                width={9}
                height={10}
                style={{ 
                  transform: categoriesOpen ? 'rotate(90deg)' : 'none', 
                  transition: 'transform 0.15s',
                  display: 'block',
                  userSelect: 'none' 
                }}
              />
            </div>
            <span>Categories</span>
          </div>
        </div>

        {/* More expandable */}
        <div
          className="folder-item"
          onClick={() => setMoreOpen(!moreOpen)}
        >
          <div className="folder-left">
            <div style={{ width: 18, height: 18, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img
                src={dropdownSvg}
                alt=""
                width={16}
                height={15}
                style={{ 
                  transform: moreOpen ? 'rotate(180deg)' : 'none', 
                  transition: 'transform 0.15s',
                  display: 'block',
                  userSelect: 'none' 
                }}
              />
            </div>
            <span>More</span>
          </div>
        </div>
      </div>

      {/* Labels Section */}
      <div className="labels-header">
        <span>Labels</span>
        <button className="icon-btn" style={{ width: 28, height: 28 }} title="Create new label">
          <Plus size={16} />
        </button>
      </div>

      {/* <div className="folder-list">
        <div className="folder-item" style={{ paddingLeft: 16 }}>
          <div className="folder-left" style={{ gap: 12 }}>
            <Tag size={16} color="#d93025" />
            <span>Action Required</span>
          </div>
        </div>
        <div className="folder-item" style={{ paddingLeft: 16 }}>
          <div className="folder-left" style={{ gap: 12 }}>
            <Tag size={16} color="#1a73e8" />
            <span>Product & UI</span>
          </div>
        </div>
      </div> */}
    </aside>
  );
};
