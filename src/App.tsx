import React, { useState, useMemo } from 'react';
import { HeaderBar } from './components/HeaderBar';
import { LeftRail } from './components/LeftRail';
import { Sidebar } from './components/Sidebar';
import { EmailList } from './components/EmailList';
import { CompanionRail } from './components/CompanionRail';
import { ChatPopUp } from './components/chat/ChatPopUp';
import { ComposeModal } from './components/ComposeModal';
import { ChatSidebar } from './components/inline-chat/ChatSidebar';
import { InlineChatView } from './components/inline-chat/InlineChatView';
import { EmailDetailView } from './components/email-detail/EmailDetailView';
import { initialEmails } from './data/mockEmails';
import { initialChatMessages, initialNudge } from './data/mockChat';
import type { EmailItem, ChatMessage, AIRANudge } from './types';

export const App: React.FC = () => {
  // Shell states
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  // Default to 'mail' tab with inbox list and open bottom-right chatbox pop-up
  const [activeRailTab, setActiveRailTab] = useState<'mail' | 'chat' | 'meet'>('mail');
  const [activeFolder, setActiveFolder] = useState('inbox');
  const [activeContact, setActiveContact] = useState('Geetika M');
  const [activeEmailId, setActiveEmailId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Data states
  const [emails, setEmails] = useState<EmailItem[]>(initialEmails);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>(initialChatMessages);
  const [nudge, setNudge] = useState<AIRANudge>(initialNudge);
  
  // Dialog & Widget states: Open chatbox pop-up by default
  const [isChatOpen, setIsChatOpen] = useState(true);
  const [isChatMinimized, setIsChatMinimized] = useState(false);
  const [isComposeOpen, setIsComposeOpen] = useState(false);

  // Filtered emails based on search query and folder
  const filteredEmails = useMemo(() => {
    return emails.filter((email) => {
      if (activeFolder === 'starred' && !email.isStarred) return false;
      if (!searchQuery) return true;
      const query = searchQuery.toLowerCase();
      return (
        email.sender.toLowerCase().includes(query) ||
        email.subject.toLowerCase().includes(query) ||
        email.snippet.toLowerCase().includes(query) ||
        (email.badge && email.badge.toLowerCase().includes(query))
      );
    });
  }, [emails, searchQuery, activeFolder]);

  // Email actions
  const handleToggleStar = (id: string) => {
    setEmails((prev) =>
      prev.map((e) => (e.id === id ? { ...e, isStarred: !e.isStarred } : e))
    );
  };

  const handleToggleSelect = (id: string) => {
    setEmails((prev) =>
      prev.map((e) => (e.id === id ? { ...e, isSelected: !e.isSelected } : e))
    );
  };

  const allSelected = filteredEmails.length > 0 && filteredEmails.every((e) => e.isSelected);

  const handleSelectAll = () => {
    const nextState = !allSelected;
    setEmails((prev) =>
      prev.map((e) => ({ ...e, isSelected: nextState }))
    );
  };

  const handleRefresh = () => {
    setEmails([...initialEmails]);
  };

  // Popup Chat actions (bottom right widget)
  const handleSendMessage = (text: string) => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    const timeStr = `${formattedHours}:${minutes} ${ampm}`;

    const newMsg: ChatMessage = {
      id: `msg-${Date.now()}`,
      senderName: 'nova',
      avatarInitials: 'N',
      avatarBg: '#3b5998',
      time: timeStr,
      text,
      isCurrentUser: true,
    };

    setChatMessages((prev) => [...prev, newMsg]);
  };

  const handleDismissNudge = () => {
    setNudge((prev) => ({ ...prev, isDismissed: true }));
  };

  const handleResolveOwner = (ownerName: string, fullName?: string) => {
    const resolvedName = fullName || (ownerName === 'Dinesh' ? 'Dinesh Patel' : 'Sathvika Rao');
    setNudge((prev) => ({
      ...prev,
      isDismissed: false,
      resolvedOwner: resolvedName,
    }));
  };

  const handleSendComposeEmail = (to: string, subject: string, body: string) => {
    const newEmail: EmailItem = {
      id: `email-${Date.now()}`,
      sender: `To: ${to || 'Recipient'}`,
      subject: subject || '(No Subject)',
      snippet: body || 'Sent from Nova Gmail',
      time: 'Just now',
      isUnread: false,
      isStarred: false,
      badge: 'FYI',
      folder: 'sent',
    };
    setEmails((prev) => [newEmail, ...prev]);
  };

  return (
    <div className="gmail-shell">
      {/* Global Top Toolbar */}
      <HeaderBar
        onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Main Content Layout */}
      <div className="shell-body">
        {/* Leftmost Thin Rail */}
        <LeftRail
          activeTab={activeRailTab}
          onTabChange={(tab) => {
            setActiveRailTab(tab);
            if (tab === 'mail') {
              setIsChatOpen(true);
            }
          }}
          onOpenChat={() => {
            setActiveRailTab('chat');
          }}
        />

        {/* Dynamic Secondary Sidebar based on Active View */}
        {activeRailTab === 'chat' ? (
          <ChatSidebar
            isCollapsed={sidebarCollapsed}
            activeContact={activeContact}
            onSelectContact={setActiveContact}
            onNewChat={() => setIsComposeOpen(true)}
          />
        ) : (
          <Sidebar
            isCollapsed={sidebarCollapsed}
            activeFolder={activeFolder}
            onSelectFolder={setActiveFolder}
            onCompose={() => setIsComposeOpen(true)}
            draftsCount={1}
          />
        )}

        {/* Dynamic Main Workspace Area */}
        {activeRailTab === 'chat' ? (
          <InlineChatView
            contactName={activeContact}
            onBackToMail={() => setActiveRailTab('mail')}
          />
        ) : activeEmailId ? (
          <EmailDetailView
            onBackToInbox={() => setActiveEmailId(null)}
          />
        ) : (
          <EmailList
            emails={filteredEmails}
            onToggleStar={handleToggleStar}
            onToggleSelect={handleToggleSelect}
            onSelectAll={handleSelectAll}
            onRefresh={handleRefresh}
            allSelected={allSelected}
            onOpenEmail={(id) => setActiveEmailId(id)}
          />
        )}

        {/* Far-Right Companion Rail */}
        <CompanionRail />
      </div>

      {/* Floating Bottom-Right Chat Pop-Up (shown in Mail view) */}
      {activeRailTab === 'mail' && (
        <ChatPopUp
          isOpen={isChatOpen}
          isMinimized={isChatMinimized}
          messages={chatMessages}
          nudge={nudge}
          onToggleMinimize={() => setIsChatMinimized(!isChatMinimized)}
          onClose={() => setIsChatOpen(false)}
          onSendMessage={handleSendMessage}
          onDismissNudge={handleDismissNudge}
          onResolveOwner={handleResolveOwner}
        />
      )}

      {/* Floating Compose Email Modal */}
      <ComposeModal
        isOpen={isComposeOpen}
        onClose={() => setIsComposeOpen(false)}
        onSend={handleSendComposeEmail}
      />
    </div>
  );
};

export default App;
