import React from 'react';
import calendarSvg from '../assets/calendar.svg';
import keepSvg from '../assets/keep.svg';
import checklistSvg from '../assets/checklist.svg';
import profileSvg from '../assets/profile.svg';

export const CompanionRail: React.FC = () => {
  return (
    <aside className="companion-rail" aria-label="Companion apps">
      {/* Calendar Icon */}
      <button className="companion-icon-btn" title="Calendar">
        <img 
          src={calendarSvg} 
          alt="Calendar" 
          width={40} 
          height={40} 
          style={{ display: 'block', userSelect: 'none' }} 
        />
      </button>

      {/* Google Keep Icon */}
      <button className="companion-icon-btn" title="Keep">
        <img 
          src={keepSvg} 
          alt="Keep" 
          width={40} 
          height={40} 
          style={{ display: 'block', userSelect: 'none' }} 
        />
      </button>

      {/* Google Tasks / Checklist Icon */}
      <button className="companion-icon-btn" title="Tasks">
        <img 
          src={checklistSvg} 
          alt="Tasks" 
          width={40} 
          height={40} 
          style={{ display: 'block', userSelect: 'none' }} 
        />
      </button>

      {/* Contacts / Profile Icon */}
      <button className="companion-icon-btn" title="Contacts">
        <img 
          src={profileSvg} 
          alt="Contacts" 
          width={40} 
          height={40} 
          style={{ display: 'block', userSelect: 'none' }} 
        />
      </button>
    </aside>
  );
};
