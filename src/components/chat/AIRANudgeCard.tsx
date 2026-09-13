import React, { useState } from 'react';
import { Star, Check, X } from 'lucide-react';
import type { AIRANudge } from '../../types';

interface AIRANudgeCardProps {
  nudge: AIRANudge;
  onDismiss: () => void;
  onResolveOwner: (ownerName: string, fullName: string) => void;
}

export const AIRANudgeCard: React.FC<AIRANudgeCardProps> = ({
  nudge,
  onDismiss,
  onResolveOwner,
}) => {
  const [step, setStep] = useState<'unclear' | 'selecting' | 'confirmed'>(
    nudge.resolvedOwner ? 'confirmed' : 'unclear'
  );
  const [selectedOwner, setSelectedOwner] = useState<'Dinesh' | 'Sathvika' | null>(null);
  const [assignedFullName, setAssignedFullName] = useState(nudge.resolvedOwner || 'Dinesh Patel');

  if (nudge.isDismissed) return null;

  const handleSelect = (name: 'Dinesh' | 'Sathvika') => {
    setSelectedOwner(name);
  };

  const handleConfirm = () => {
    if (!selectedOwner) return;
    const fullName = selectedOwner === 'Dinesh' ? 'Dinesh Patel' : 'Sathvika Rao';
    setAssignedFullName(fullName);
    setStep('confirmed');
    onResolveOwner(selectedOwner, fullName);
  };


  if (step === 'confirmed' || nudge.resolvedOwner) {
    const currentAssignedName = nudge.resolvedOwner || assignedFullName;
    return (
      <div
        className="aira-success-banner"
        onClick={() => {
          setSelectedOwner(null);
          setStep('selecting');
        }}
        title="Click to change assigned owner"
      >
        <div className="aira-success-icon">
          <Check size={16} strokeWidth={2.8} />
        </div>
        <span className="aira-success-text">
          {currentAssignedName} is assigned to the landing page.
        </span>
      </div>
    );
  }

  if (step === 'unclear') {
    return (
      <div className="aira-interactive-card aira-unclear-card">
        <div className="aira-unclear-content">
          <div className="aira-header-line">
            <Star size={15} className="aira-star-gold" />
            <span className="aira-brand-title">AIRA</span>
            <span className="aira-dot-separator">·</span>
            <span className="aira-unclear-title">Owner unclear</span>
          </div>
          <div className="aira-unclear-subtitle">
            It's not clear who will take the<br />landing page.
          </div>
        </div>

        <div className="aira-unclear-actions">
          <button
            type="button"
            className="aira-clarify-btn"
            onClick={() => {
              setSelectedOwner(null);
              setStep('selecting');
            }}
          >
            Clarify owner
          </button>
          <button
            type="button"
            className="aira-dismiss-btn"
            onClick={onDismiss}
            title="Dismiss"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    );
  }

  // State 2: Who should own the landing page? with Owner Pills and Confirm CTA
  return (
    <div className="aira-interactive-card">
      <div className="aira-header-line">
        <Star size={15} className="aira-star-gold" />
        <span className="aira-brand-title">AIRA</span>
        <span className="aira-dot-separator">·</span>
        <span className="aira-question-title">Who should own the landing page?</span>
      </div>

      <div className="aira-pills-row">
        <button
          type="button"
          className={`owner-select-pill ${selectedOwner === 'Dinesh' ? 'selected' : ''}`}
          onClick={() => handleSelect('Dinesh')}
        >
          <span className="pill-avatar dinesh-avatar">DP</span>
          <span className="pill-name">Dinesh</span>
        </button>

        <button
          type="button"
          className={`owner-select-pill ${selectedOwner === 'Sathvika' ? 'selected' : ''}`}
          onClick={() => handleSelect('Sathvika')}
        >
          <span className="pill-avatar sathvika-avatar">SR</span>
          <span className="pill-name">Sathvika</span>
        </button>
      </div>

      {selectedOwner && (
        <div className="aira-confirm-row">
          <button
            type="button"
            className="aira-confirm-btn"
            onClick={handleConfirm}
          >
            Confirm
          </button>
        </div>
      )}
    </div>
  );
};
