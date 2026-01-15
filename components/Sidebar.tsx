import React from 'react';
import { LayoutGrid, CalendarDays, Users, Settings, Scissors, PieChart, LogOut } from 'lucide-react';
import { ViewState } from '../types';

interface SidebarProps {
  currentView: ViewState;
  onChange: (view: ViewState) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentView, onChange }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutGrid },
    { id: 'agenda', label: 'Agenda', icon: CalendarDays },
    { id: 'clients', label: 'Clientes', icon: Users },
    { id: 'financial', label: 'Financeiro', icon: PieChart }, // Added as placeholder
    { id: 'settings', label: 'Configurações', icon: Settings },
  ];

  return (
    <aside className="w-64 bg-surface-dark border-r border-white/5 flex flex-col h-full shrink-0">
      {/* Logo Area */}
      <div className="h-20 flex items-center px-6 border-b border-white/5 gap-3">
        <img 
          src="https://i.postimg.cc/W1zqSsZ2/Hair-cut-removebg-preview.png" 
          alt="HairCut Logo" 
          className="w-12 h-12 object-contain"
        />
        <div>
          <h1 className="text-white font-display font-bold text-lg leading-none">HairCut</h1>
          <p className="text-slate-500 text-xs font-medium mt-0.5">Management</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-6 px-3 flex flex-col gap-1">
        <p className="px-3 text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Menu Principal</p>

        {menuItems.map((item) => {
          const isActive = currentView === item.id || (item.id === 'financial' && currentView === 'dashboard' && false);
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() => item.id !== 'financial' && onChange(item.id as ViewState)}
              className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 group ${isActive
                ? 'bg-primary text-white shadow-lg shadow-primary/20'
                : 'text-slate-400 hover:bg-white/5 hover:text-white'
                }`}
            >
              <Icon size={20} className={isActive ? 'text-white' : 'text-slate-400 group-hover:text-white transition-colors'} />
              <span className="font-medium text-sm">{item.label}</span>
              {isActive && <div className="ml-auto w-1.5 h-1.5 bg-white rounded-full" />}
            </button>
          );
        })}
      </nav>

      {/* User / Logout */}
      <div className="p-4 border-t border-white/5">
        <button className="flex items-center gap-3 w-full p-3 rounded-xl text-slate-400 hover:bg-red-500/10 hover:text-red-400 transition-colors">
          <LogOut size={20} />
          <span className="font-medium text-sm">Sair do Sistema</span>
        </button>
      </div>
    </aside>
  );
};