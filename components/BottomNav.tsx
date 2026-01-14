import React from 'react';
import { LayoutGrid, CalendarDays, Users, Settings, Plus } from 'lucide-react';
import { ViewState } from '../types';

interface BottomNavProps {
  currentView: ViewState;
  onChange: (view: ViewState) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentView, onChange }) => {
  return (
    <div className="fixed bottom-6 left-0 right-0 px-6 z-50">
      <div className="bg-card-dark/95 backdrop-blur-md border border-white/10 rounded-full h-16 flex items-center justify-between px-6 shadow-2xl">
        <button 
          onClick={() => onChange('dashboard')}
          className={`flex flex-col items-center justify-center gap-1 w-12 transition-colors ${currentView === 'dashboard' ? 'text-primary' : 'text-slate-500 hover:text-white'}`}
        >
          <LayoutGrid size={24} fill={currentView === 'dashboard' ? "currentColor" : "none"} />
          {currentView === 'dashboard' && <span className="w-1 h-1 rounded-full bg-primary"></span>}
        </button>
        
        <button 
          onClick={() => onChange('agenda')}
          className={`flex flex-col items-center justify-center gap-1 w-12 transition-colors ${currentView === 'agenda' ? 'text-primary' : 'text-slate-500 hover:text-white'}`}
        >
          <CalendarDays size={24} fill={currentView === 'agenda' ? "currentColor" : "none"} />
          {currentView === 'agenda' && <span className="w-1 h-1 rounded-full bg-primary"></span>}
        </button>

        {/* Center Floating Button (Visual only in Nav, functionality usually redundant with FAB but requested in design) */}
        <button className="flex items-center justify-center bg-primary text-white rounded-full w-12 h-12 shadow-lg shadow-primary/30 -mt-8 border-4 border-background-dark transform transition-transform active:scale-95">
          <Plus size={24} />
        </button>

        <button 
          onClick={() => onChange('clients')}
          className={`flex flex-col items-center justify-center gap-1 w-12 transition-colors ${currentView === 'clients' ? 'text-primary' : 'text-slate-500 hover:text-white'}`}
        >
          <Users size={24} />
        </button>

        <button 
          onClick={() => onChange('settings')}
          className={`flex flex-col items-center justify-center gap-1 w-12 transition-colors ${currentView === 'settings' ? 'text-primary' : 'text-slate-500 hover:text-white'}`}
        >
          <Settings size={24} />
        </button>
      </div>
    </div>
  );
};
