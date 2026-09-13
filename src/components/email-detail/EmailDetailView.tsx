import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Archive, 
  AlertOctagon, 
  Trash2, 
  Mail, 
  Clock, 
  CheckSquare, 
  FolderInput, 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  Smile, 
  Reply, 
  ReplyAll, 
  Forward, 
  ChevronDown, 
  Check, 
  X 
} from 'lucide-react';
import { SparkleIcon } from '../common/SparkleIcon';
import { AIRAExplanationModal } from './AIRAExplanationModal';
import { SnoozeConfirmationCard } from './SnoozeConfirmationCard';
import { AIRAInsightPopover } from './AIRAInsightPopover';
import { AIRAFollowUpComposeModal } from './AIRAFollowUpComposeModal';
import navatejPhoto from '../../assets/navatej.png';

export type DetailState = 
  | 'DEFAULT' 
  | 'INSIGHT_POPOVER' 
  | 'EXPLANATION' 
  | 'SNOOZED' 
  | 'COMPOSE' 
  | 'SENT_SUCCESS';

interface EmailDetailViewProps {
  onBackToInbox: () => void;
}

export const EmailDetailView: React.FC<EmailDetailViewProps> = ({
  onBackToInbox,
}) => {
  const [detailState, setDetailState] = useState<DetailState>('DEFAULT');
  const [isStarred, setIsStarred] = useState(false);

  return (
    <div className="email-detail-container">
      {/* Top Action Toolbar */}
      <div className="detail-toolbar">
        <div className="detail-toolbar-left">
          <button className="icon-btn" onClick={onBackToInbox} title="Back to Inbox">
            <ArrowLeft size={18} />
          </button>
          <button className="icon-btn" title="Archive">
            <Archive size={18} />
          </button>
          <button className="icon-btn" title="Report spam">
            <AlertOctagon size={18} />
          </button>
          <button className="icon-btn" title="Delete">
            <Trash2 size={18} />
          </button>
          <button className="icon-btn" title="Mark as unread">
            <Mail size={18} />
          </button>
          <button className="icon-btn" title="Snooze" onClick={() => setDetailState('SNOOZED')}>
            <Clock size={18} />
          </button>
          <button className="icon-btn" title="Add to tasks">
            <CheckSquare size={18} />
          </button>
          <button className="icon-btn" title="Move to">
            <FolderInput size={18} />
          </button>
          <button className="icon-btn" title="More options">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="5" cy="12" r="2" />
              <circle cx="12" cy="12" r="2" />
              <circle cx="19" cy="12" r="2" />
            </svg>
          </button>
        </div>

        <div className="detail-toolbar-right">
          <span>1 of 3</span>
          <button className="icon-btn" style={{ width: 30, height: 30 }} title="Newer">
            <ChevronLeft size={17} />
          </button>
          <button className="icon-btn" style={{ width: 30, height: 30 }} title="Older">
            <ChevronRight size={17} />
          </button>
        </div>
      </div>

      {/* Main Email Scroll Area */}
      <div className="detail-content-scroll">
        {/* Email Subject Title & Inbox Tag */}
        <div className="detail-subject-row">
          <h2 className="detail-subject-text">Updated needed on Gmail feedback</h2>
          <div className="detail-inbox-group">
            <div className="detail-inbox-tag">
              <Mail size={13} />
              <span>Inbox</span>
            </div>
            <button className="detail-inbox-remove-btn" title="Remove label">
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Bounded Email Message Card Box */}
        <div className="email-message-card">
          {/* Sender Info & Header Strip */}
          <div className="detail-sender-row">
            <div className="sender-avatar-wrapper">
              <img 
                src={navatejPhoto} 
                alt="Navatej Kumar" 
                className="sender-headshot-img"
              />
            </div>

            <div className="sender-details-col">
              <div className="sender-name-line">
                <span className="sender-name">Navatej Kumar</span>
                <span className="sender-email">&lt;navatej@novacommunicate.com&gt;</span>
              </div>
              <div className="recipient-dropdown-line">
                <span>to me</span>
                <ChevronDown size={14} color="#5f6368" />
              </div>
            </div>

            <div className="sender-right-actions">
              <span className="email-meta-timestamp">11:38 AM (8 minutes ago)</span>
              <button 
                className={`star-btn ${isStarred ? 'starred' : ''}`}
                onClick={() => setIsStarred(!isStarred)}
                title={isStarred ? 'Starred' : 'Not starred'}
              >
                <Star size={18} fill={isStarred ? '#f4b400' : 'none'} strokeWidth={isStarred ? 0 : 1.8} />
              </button>
              <button className="icon-btn" style={{ width: 30, height: 30 }} title="Emoji reaction">
                <Smile size={18} />
              </button>
              <button className="icon-btn" style={{ width: 30, height: 30 }} title="Reply">
                <Reply size={18} />
              </button>
              <button className="icon-btn" style={{ width: 30, height: 30 }} title="More options">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="5" cy="12" r="1.8" />
                  <circle cx="12" cy="12" r="1.8" />
                  <circle cx="19" cy="12" r="1.8" />
                </svg>
              </button>
            </div>
          </div>

          {/* Email Body Content */}
          <div className="detail-body-text">
            <p>Hi Tushara,</p>
            <p>Following up on this. What's the status of the revised Gmail feedback experience designs?</p>
            <p>Let me know.</p>
          </div>

          {/* Professional Signature Block */}
          <div className="signature-card-box">
            <div className="signature-avatar-area">
              <img 
                src={navatejPhoto} 
                alt="Navatej Kumar" 
                className="signature-photo"
              />
            </div>

            <div className="signature-text-col">
              <h4 className="signature-name">Navatej Kumar</h4>
              <span className="signature-role">Founder &amp; CEO</span>
              <div className="signature-meta-row">
                <span><strong>E:</strong> <span style={{ color: '#1A73E8' }}>navatej@novacommunicate.com | novacommunicate.com</span></span>
              </div>
              <div className="signature-meta-row">
                <span>Hyderabad, Telangana | India</span>
              </div>
              <div className="signature-social-row">
                <span className="linkedin-tag" title="LinkedIn">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.3a1.65 1.65 0 0 0-1.66 1.66 1.66 1.66 0 0 0 1.66 1.66 1.66 1.66 0 0 0 1.66-1.66A1.66 1.66 0 0 0 7.86 6.3Z"/>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick-Reply Suggestion Chips */}
        <div className="detail-quick-replies">
          <button className="quick-chip-btn" onClick={() => setDetailState('COMPOSE')}>
            Yes, I am working on it.
          </button>
          <button className="quick-chip-btn" onClick={() => setDetailState('COMPOSE')}>
            Yes, it's done.
          </button>
          <button className="quick-chip-btn" onClick={() => setDetailState('COMPOSE')}>
            No feedback yet.
          </button>
        </div>

        {/* Action Buttons Row */}
        <div className="detail-action-buttons-row">
          <div className="reply-buttons-group">
            <button className="pill-action-btn" onClick={() => setDetailState('COMPOSE')}>
              <Reply size={16} />
              <span>Reply</span>
            </button>
            <button className="pill-action-btn" onClick={() => setDetailState('COMPOSE')}>
              <ReplyAll size={16} />
              <span>Reply all</span>
            </button>
            <button className="pill-action-btn" onClick={() => setDetailState('COMPOSE')}>
              <Forward size={16} />
              <span>Forward</span>
            </button>
            <button className="reply-reaction-btn" title="Add reaction">
              <Smile size={18} />
            </button>
          </div>

          {/* Anchor Container for Send follow-up and floating popovers */}
          <div className="followup-anchor-container">
            {/* Popover State: EXPLANATION (State 2A) */}
            {detailState === 'EXPLANATION' && (
              <AIRAExplanationModal
                onBack={() => setDetailState('DEFAULT')}
                onClose={() => setDetailState('DEFAULT')}
              />
            )}

            {/* Popover State: SNOOZED (State 2B) */}
            {detailState === 'SNOOZED' && (
              <SnoozeConfirmationCard
                onUndo={() => setDetailState('DEFAULT')}
              />
            )}

            {/* Popover State: INSIGHT_POPOVER (State 1) */}
            {detailState === 'INSIGHT_POPOVER' && (
              <AIRAInsightPopover
                onSendFollowUp={() => setDetailState('COMPOSE')}
                onRemindLater={() => setDetailState('SNOOZED')}
                onWhy={() => setDetailState('EXPLANATION')}
                onClose={() => setDetailState('DEFAULT')}
              />
            )}

            {/* Primary Action Button: ✦ Send follow-up ▾ */}
            <button 
              className="followup-split-pill"
              onClick={() => setDetailState(detailState === 'INSIGHT_POPOVER' ? 'DEFAULT' : 'INSIGHT_POPOVER')}
              title="AIRA Follow-up options"
            >
              <SparkleIcon size={14} color="#ffffff" />
              <span>Send follow-up</span>
              <ChevronDown size={15} />
            </button>
          </div>
        </div>

        {/* Bottom Inline AIRA Hint */}
        <div className="detail-aira-hint-strip">
          <div className="aira-hint-main-line">
            <span className="aira-hint-sparkle">✦</span>
            <span className="aira-hint-bold">AIRA suggests following up</span>
            <span className="aira-hint-sub">· No response for 2 days</span>
            <button 
              type="button"
              className="aira-why-link"
              onClick={() => setDetailState('EXPLANATION')}
            >
              Why?
            </button>
          </div>
          <span className="aira-hint-disclaimer">AI can make mistakes</span>
        </div>

        {/* State: SENT_SUCCESS Green Banner */}
        {detailState === 'SENT_SUCCESS' && (
          <div className="detail-success-banner">
            <div className="success-banner-left">
              <Check size={16} strokeWidth={2.6} className="success-green-check" />
              <span className="success-banner-text">Your follow-up was sent to Navatej Kumar.</span>
            </div>
            <button 
              className="success-banner-close" 
              onClick={() => setDetailState('DEFAULT')}
              title="Close"
            >
              <X size={14} />
            </button>
          </div>
        )}
      </div>

      {/* State: COMPOSE Floating Modal */}
      <AIRAFollowUpComposeModal
        isOpen={detailState === 'COMPOSE'}
        onClose={() => setDetailState('DEFAULT')}
        onSend={() => {
          setDetailState('SENT_SUCCESS');
        }}
      />
    </div>
  );
};
