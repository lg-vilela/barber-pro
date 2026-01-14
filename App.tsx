import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { Agenda } from './components/Agenda';
import { ViewState } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('dashboard');

  return (
    <div className="flex h-screen w-full bg-background-dark font-display antialiased overflow-hidden selection:bg-primary/30 text-slate-200">
      
      {/* Sidebar Navigation */}
      <Sidebar currentView={currentView} onChange={setCurrentView} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full min-w-0">
        
        {/* Top Header */}
        <Header />

        {/* View Content */}
        <main className="flex-1 overflow-y-auto scrollbar-hide bg-gradient-to-br from-background-dark to-[#0f151c]">
          {currentView === 'dashboard' && <Dashboard />}
          {currentView === 'agenda' && <Agenda />}
          
          {currentView === 'clients' && (
            <div className="flex flex-col items-center justify-center h-full text-slate-500 animate-fade-in">
               <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
                 <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
               </div>
              <h3 className="text-xl font-bold text-white">Gestão de Clientes</h3>
              <p className="mt-2 text-sm">O módulo de clientes está em desenvolvimento.</p>
            </div>
          )}
          
          {currentView === 'settings' && (
            <div className="flex flex-col items-center justify-center h-full text-slate-500 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
                 <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
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