import React from 'react';
import { Mail, X } from 'lucide-react';
import { SparkleIcon } from '../common/SparkleIcon';

interface AIRAInsightPopoverProps {
  onSendFollowUp: () => void;
  onRemindLater: () => void;
  onWhy: () => void;
  onClose: () => void;
}

export const AIRAInsightPopover: React.FC<AIRAInsightPopoverProps> = ({
  onSendFollowUp,
  onRemindLater,
  onWhy,
  onClose,
}) => {
  return (
    <div className="aira-insight-popover">
      {/* Header with circular sparkle icon and title stack */}
      <div className="insight-popover-header">
        <div className="insight-header-brand">
          <div className="insight-sparkle-circle">
            <SparkleIcon size={14} color="#5B4DFF" />
          </div>
          <div className="insight-brand-text">
            <span className="insight-brand-title">AIRA Insight</span>
            <span className="insight-brand-subtitle">Predictive Follow-up</span>
          </div>
        </div>
        <button 
          className="insight-close-btn" 
          onClick={onClose} 
          title="Close"
          type="button"
        >
          <X size={15} />
        </button>
      </div>

      {/* Rationale Card */}
      <div className="insight-reason-card">
        <div className="insight-reason-title">No response for 2 days.</div>
        <div className="insight-reason-sub">A quick follow-up may keep this moving.</div>
      </div>

      {/* Primary Action Button: Send follow-up */}
      <button 
        type="button" 
        className="insight-send-btn" 
        onClick={onSendFollowUp}
      >
        <Mail size={16} />
        <span>Send follow-up</span>
      </button>

      {/* Secondary Action Pills */}
      <div className="insight-footer-actions">
        <button 
          type="button" 
          className="insight-remind-pill" 
          onClick={onRemindLater}
        >
          Remind me later
        </button>
        <button 
          type="button" 
          className="insight-why-pill" 
          onClick={onWhy}
        >
          Why?
        </button>
      </div>
    </div>
  );
};

