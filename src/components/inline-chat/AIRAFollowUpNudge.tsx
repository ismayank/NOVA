import React, { useState } from 'react';
import { Star, X } from 'lucide-react';
import { SUGGESTED_DRAFT_TEXT } from '../../data/mockInlineChat';

interface AIRAFollowUpNudgeProps {
  onInsertDraft: (draftText: string) => void;
  onDismiss: () => void;
}

export const AIRAFollowUpNudge: React.FC<AIRAFollowUpNudgeProps> = ({
  onInsertDraft,
  onDismiss,
}) => {
  // 'nudge' = State 1, 'draft' = State 2, 'dismissed' = State 3
  const [cardState, setCardState] = useState<'nudge' | 'draft'>('nudge');

  if (cardState === 'nudge') {
    // State 1: Follow up?
    return (
      <div className="aira-purple-banner">
        <div className="purple-banner-top">
          <div className="purple-banner-title-group">
            <Star size={14} className="aira-purple-star" />
            <span className="aira-purple-brand">AIRA</span>
            <span className="purple-dot-sep">·</span>
            <span className="aira-purple-title">Follow up?</span>
          </div>
          <button 
            className="purple-banner-close-btn" 
            onClick={onDismiss} 
            title="Dismiss"
          >
            <X size={14} />
          </button>
        </div>

        <div className="purple-banner-body">
          <div className="purple-banner-subtext">
            Tushara committed to sharing<br />the revised deck.
          </div>
          <button 
            className="purple-draft-pill-btn"
            onClick={() => setCardState('draft')}
          >
            Draft follow-up
          </button>
        </div>
      </div>
    );
  }

  // State 2: Suggested draft card
  return (
    <div className="aira-purple-card">
      <div className="purple-banner-top">
        <div className="purple-banner-title-group">
          <Star size={14} className="aira-purple-star" />
          <span className="aira-purple-brand">AIRA</span>
          <span className="purple-dot-sep">·</span>
          <span className="aira-suggested-label">Suggested draft</span>
        </div>
      </div>

      <div className="purple-draft-content-box">
        <p className="purple-draft-quote">
          {SUGGESTED_DRAFT_TEXT}
        </p>
      </div>

      <div className="purple-draft-actions-row">
        <button 
          className="purple-insert-btn"
          onClick={() => {
            onInsertDraft(SUGGESTED_DRAFT_TEXT);
            onDismiss();
          }}
        >
          Insert into composer
        </button>
        <button 
          className="purple-dismiss-btn"
          onClick={onDismiss}
        >
          Dismiss
        </button>
      </div>
    </div>
  );
};
