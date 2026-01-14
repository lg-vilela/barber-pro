import React from 'react';
import { LayoutGrid, CalendarDays, Users, Settings } from 'lucide-react';
import { ViewState } from '../types';

interface BottomNavProps {
  currentView: ViewState;
  onChange: (view: ViewState) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentView, onChange }) => {
  const navItems = [
    { id: 'dashboard', label: 'Início', icon: LayoutGrid },
    { id: 'agenda', label: 'Agenda', icon: CalendarDays },
    { id: 'clients', label: 'Clientes', icon: Users },
    { id: 'settings', label: 'Ajustes', icon: Settings },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-surface-dark/90 backdrop-blur-lg border-t border-white/10 px-6 py-4 pb-8 z-50 flex justify-between items-center">
      {navItems.map((item) => {
        const isActive = currentView === item.id;
        const Icon = item.icon;

        return (
          <button
            key={item.id}
            onClick={() => onChange(item.id as ViewState)}
            className={`flex flex-col items-center gap-1 transition-all duration-300 ${isActive ? 'text-primary scale-110' : 'text-slate-500 hover:text-slate-300'
              }`}
          >
            <div className={`p-1.5 rounded-full transition-all ${isActive ? 'bg-primary/10' : 'bg-transparent'}`}>
              <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
            </div>
            <span className="text-[10px] font-medium tracking-wide">{item.label}</span>
          </button>
        );
      })}
    </div>
  );
};
