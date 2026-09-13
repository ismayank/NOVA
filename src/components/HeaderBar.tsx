import React from 'react';
import { Menu, Search, HelpCircle, Sun, ChevronDown, Calendar } from 'lucide-react';
import gmailLogo from '../assets/Gmail.svg';
import filterSvg from '../assets/filter.svg';
import gridSvg from '../assets/grid.svg';

interface HeaderBarProps {
  onToggleSidebar: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const HeaderBar: React.FC<HeaderBarProps> = ({
  onToggleSidebar,
  searchQuery,
  onSearchChange,
}) => {
  return (
    <header className="header-bar">
      {/* Left brand & menu */}
      <div className="header-left">
        <button 
          className="icon-btn" 
          onClick={onToggleSidebar}
          aria-label="Main menu"
          title="Main menu"
        >
          <Menu size={20} />
        </button>
        <div className="gmail-logo-container" title="Gmail">
          <img 
            src={gmailLogo} 
            alt="Gmail" 
            height="30" 
            style={{ display: 'block', userSelect: 'none' }} 
          />
        </div>
      </div>

      {/* Center Search Pill */}
      <div className="header-center">
        <div className="search-capsule">
          <Search size={20} className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Search mail"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          <button className="icon-btn" style={{ width: 34, height: 34 }} title="Show search options">
            <img 
              src={filterSvg} 
              alt="Search options" 
              width={18} 
              height={18} 
              style={{ display: 'block', userSelect: 'none' }} 
            />
          </button>
        </div>
      </div>

      {/* Right Controls */}
      <div className="header-right">
        {/* Status indicator capsule */}
        <button className="status-pill-btn" title="Status: Active">
          <span className="status-green-dot"></span>
          <Calendar size={14} color="#5f6368" />
          <ChevronDown size={14} color="#5f6368" />
        </button>

        <button className="icon-btn" title="Support">
          <HelpCircle size={20} />
        </button>

        <button className="icon-btn" title="Settings">
          <Sun size={20} />
        </button>

        <button className="icon-btn" title="Google apps">
          <img 
            src={gridSvg} 
            alt="Google apps" 
            width={20} 
            height={20} 
            style={{ display: 'block', userSelect: 'none' }} 
          />
        </button>

        {/* Profile Pill */}
        <div className="profile-container" title="Google Account: nova">
          <span className="profile-label">nova</span>
          <div className="profile-avatar">N</div>
        </div>
      </div>
    </header>
  );
};
