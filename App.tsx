import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { BottomNav } from './components/BottomNav';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { Agenda } from './components/Agenda';
import { Clients } from './components/Clients';
import { Financial } from './components/Financial';
import { ViewState } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('dashboard');

  return (
    <div className="flex h-screen w-full bg-gradient-to-br from-background-dark to-zinc-900 font-body antialiased overflow-hidden selection:bg-primary/30 text-slate-200">

      {/* Sidebar Navigation - Hidden on Mobile */}
      <div className="hidden md:flex h-full shrink-0">
        <Sidebar currentView={currentView} onChange={setCurrentView} />
      </div>

      {/* Bottom Navigation - Visible ONLY on Mobile */}
      <BottomNav currentView={currentView} onChange={setCurrentView} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full min-w-0 relative pb-20 md:pb-0">

        {/* Top Header */}
        <Header />

        {/* View Content */}
        <main className="flex-1 overflow-y-auto scrollbar-hide bg-background-dark">
          {currentView === 'dashboard' && <Dashboard />}
          {currentView === 'agenda' && <Agenda />}

          {currentView === 'clients' && <Clients />}
          {currentView === 'financial' && <Financial />}

          {currentView === 'settings' && (
            <div className="flex flex-col items-center justify-center h-full text-slate-500 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" /><circle cx="12" cy="12" r="3" /></svg>
              </div>
              <h3 className="text-xl font-bold text-white">Configurações</h3>
              <p className="mt-2 text-sm">Ajuste as preferências do sistema aqui.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default App;