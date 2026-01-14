import React from 'react';
import { Bell, Search, ChevronDown } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="h-20 bg-background-dark/80 backdrop-blur-md border-b border-white/5 flex items-center justify-between px-8 sticky top-0 z-30">
      {/* Search Bar */}
      <div className="flex items-center gap-4 flex-1">
        <div className="relative w-96 group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary transition-colors" size={18} />
          <input 
            type="text" 
            placeholder="Buscar cliente, serviço ou barbeiro..." 
            className="w-full bg-card-dark border border-white/5 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-slate-600"
          />
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-6">
        {/* Notifications */}
        <button className="relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-white/5 transition-colors text-slate-400 hover:text-white">
          <Bell size={20} />
          <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-background-dark"></span>
        </button>

        {/* Divider */}
        <div className="w-px h-8 bg-white/10"></div>

        {/* User Profile */}
        <button className="flex items-center gap-3 pl-2 pr-1 py-1 rounded-xl hover:bg-white/5 transition-colors group">
          <div className="text-right hidden md:block">
            <p className="text-sm font-bold text-white leading-tight group-hover:text-primary transition-colors">Admin User</p>
            <p className="text-xs text-slate-500">Gerente</p>
          </div>
          <div className="relative">
            <div 
              className="w-10 h-10 rounded-xl bg-cover bg-center border-2 border-white/5 group-hover:border-primary/50 transition-colors"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC5YEt7YvSD439fiqKohiforNiUYJzUrbRWL5yH17q0ysEzysh-zl84guoW-NGWPDmgfArylqVXvUmj3FOdK9QUOIbHkB1sfcwZBpPn153AursQV_n_kJoDHz_4aisSw2z4HIjmZnemU79SH2fsQkvCV8b3PMAk5cH68ePH87pAOmytaD-wPqvIjqU6_sQh8zAaPsaGPaJkfhiU7Dv4pFghYGVgwu57vV06b1XO8VlagSvE-mngBWoY-FA6DveOOwL1Xxjh0iwyT2Y")' }}
            />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-[3px] border-background-dark"></div>
          </div>
          <ChevronDown size={16} className="text-slate-500 group-hover:text-white" />
        </button>
      </div>
    </header>
  );
};