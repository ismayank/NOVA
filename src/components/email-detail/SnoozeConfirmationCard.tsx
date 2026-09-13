import React from 'react';
import { Clock } from 'lucide-react';

interface SnoozeConfirmationCardProps {
  onUndo: () => void;
}

export const SnoozeConfirmationCard: React.FC<SnoozeConfirmationCardProps> = ({
  onUndo,
}) => {
  return (
    <div className="snooze-confirmation-card">
      <div className="snooze-header-row">
        <Clock size={16} className="snooze-clock-icon" />
        <span className="snooze-title">Snoozed for 1 hour.</span>
      </div>
      <p className="snooze-body-text">
        AIRA will remind you to follow up at 3:30 PM.
      </p>
      <div className="snooze-footer-row">
        <button 
          type="button" 
          className="snooze-undo-btn" 
          onClick={onUndo}
        >
          Undo
        </button>
      </div>
    </div>
  );
};
