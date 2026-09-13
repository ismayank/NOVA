import React from 'react';
import { X } from 'lucide-react';

interface AIRAExplanationModalProps {
  onBack: () => void;
  onClose: () => void;
}

export const AIRAExplanationModal: React.FC<AIRAExplanationModalProps> = ({
  onBack,
  onClose,
}) => {
  return (
    <div className="aira-explanation-modal">
      {/* Header */}
      <div className="explanation-header">
        <div className="explanation-title-group">
          <span className="explanation-sparkle-icon">✦</span>
          <span className="explanation-title">Why is AIRA suggesting this?</span>
        </div>
        <button 
          className="explanation-close-btn" 
          onClick={onClose}
          title="Close explanation"
        >
          <X size={15} />
        </button>
      </div>

      {/* Rationale Bullet Points List */}
      <ul className="explanation-list">
        <li>
          No reply received in <strong>2 days</strong>
        </li>
        <li>
          Thread has an open question about design deliverables
        </li>
        <li>
          Sender has responded to follow-ups previously
        </li>
        <li>
          Similar threads resolved faster with a follow-up
        </li>
      </ul>

      {/* Footer Navigation */}
      <div className="explanation-footer">
        <button 
          type="button" 
          className="explanation-back-link" 
          onClick={onBack}
        >
          ← Back
        </button>
      </div>
    </div>
  );
};
