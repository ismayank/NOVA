import React from 'react';
import { 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  ChevronDown, 
  Check 
} from 'lucide-react';
import checkboxSvg from '../assets/checkbox.svg';
import reSvg from '../assets/re.svg';
import moreSvg from '../assets/more.svg';
import type { EmailItem } from '../types';

interface EmailListProps {
  emails: EmailItem[];
  onToggleStar: (id: string) => void;
  onToggleSelect: (id: string) => void;
  onSelectAll: () => void;
  onRefresh: () => void;
  allSelected: boolean;
  onOpenEmail?: (id: string) => void;
}

export const EmailList: React.FC<EmailListProps> = ({
  emails,
  onToggleStar,
  onToggleSelect,
  onSelectAll,
  onRefresh,
  allSelected,
  onOpenEmail,
}) => {
  return (
    <div className="inbox-view-wrapper">
      {/* Inbox Header Action Toolbar */}
      <div className="email-toolbar">
        <div className="toolbar-left">
          <div className="checkbox-dropdown" onClick={onSelectAll} title="Select">
            {allSelected ? (
              <div className="custom-checkbox checked" style={{ width: 16, height: 16, borderRadius: 2 }}>
                <Check size={12} strokeWidth={3} />
              </div>
            ) : (
              <img 
                src={checkboxSvg} 
                alt="select all" 
                width={16} 
                height={16} 
                style={{ display: 'block', userSelect: 'none' }} 
              />
            )}
            <ChevronDown size={14} style={{ marginLeft: 3, color: '#5f6368' }} />
          </div>

          <button className="icon-btn toolbar-action-btn" onClick={onRefresh} title="Refresh">
            <img 
              src={reSvg} 
              alt="Refresh" 
              width={14} 
              height={10} 
              style={{ display: 'block', userSelect: 'none' }} 
            />
          </button>

          <button className="icon-btn toolbar-action-btn" title="More">
            <img 
              src={moreSvg} 
              alt="More" 
              width={17} 
              height={17} 
              style={{ display: 'block', userSelect: 'none' }} 
            />
          </button>
        </div>

        <div className="toolbar-right">
          <span>1–{emails.length} of 379</span>
          <div className="pager-buttons">
            <button className="icon-btn" style={{ width: 32, height: 32 }} title="Newer">
              <ChevronLeft size={18} />
            </button>
            <button className="icon-btn" style={{ width: 32, height: 32 }} title="Older">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Inbox White Container */}
      <main className="main-inbox-container">
        {/* Email Rows List */}
        <div className="email-list-scroll">
        {emails.map((email) => {
          return (
            <div
              key={email.id}
              className={`email-row ${email.isUnread ? 'unread' : ''} ${email.isSelected ? 'selected' : ''}`}
              onClick={() => onOpenEmail?.(email.id)}
            >
              {/* Checkbox and Star */}
              <div className="email-controls">
                <div 
                  className="email-checkbox-wrapper"
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleSelect(email.id);
                  }}
                  title={email.isSelected ? 'Deselect' : 'Select'}
                  style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                >
                  {email.isSelected ? (
                    <div className="custom-checkbox checked" style={{ width: 16, height: 16, borderRadius: 2 }}>
                      <Check size={12} strokeWidth={3} />
                    </div>
                  ) : (
                    <img 
                      src={checkboxSvg} 
                      alt="checkbox" 
                      width={16} 
                      height={16} 
                      style={{ display: 'block', userSelect: 'none' }} 
                    />
                  )}
                </div>

                <button
                  className={`star-btn ${email.isStarred ? 'starred' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleStar(email.id);
                  }}
                  title={email.isStarred ? 'Starred' : 'Not starred'}
                >
                  <Star 
                    size={18} 
                    fill={email.isStarred ? '#f4b400' : 'none'} 
                    strokeWidth={email.isStarred ? 0 : 1.8} 
                  />
                </button>
              </div>

              {/* Sender Name with count if any */}
              <div className="email-sender" title={email.sender}>
                <span>{email.sender}</span>
                {email.senderCount && (
                  <span style={{ fontSize: 12, color: '#5f6368', marginLeft: 4 }}>
                    {email.senderCount}
                  </span>
                )}
              </div>

              {/* Dynamic Status Badges */}
              {email.badge && (
                <div 
                  className={`email-badge ${
                    email.badge === 'NEEDS REPLY' 
                      ? 'badge-needs-reply' 
                      : email.badge === 'ACTION REQ' 
                      ? 'badge-action-req' 
                      : 'badge-fyi'
                  }`}
                >
                  <span className="badge-bullet"></span>
                  <span>{email.badge}</span>
                </div>
              )}

              {/* Subject & Snippet */}
              <div className="email-content">
                <span className="email-subject">{email.subject}</span>
                <span className="email-snippet">– {email.snippet}</span>
              </div>

              {/* Timestamp */}
              <div className="email-time">
                {email.time}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  </div>
  );
};
