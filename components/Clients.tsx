import React, { useState } from 'react';
import { Search, Plus, Phone, MessageCircle, MoreVertical, Calendar, Scissors, Star } from 'lucide-react';

interface Client {
    id: string;
    name: string;
    phone: string;
    lastVisit: string;
    totalVisits: number;
    status: 'active' | 'inactive' | 'new';
    avatarUrl: string;
    lastService: string;
}

const mockClients: Client[] = [
    {
        id: '1',
        name: 'Ricardo Mendes',
        phone: '(11) 99999-1234',
        lastVisit: '10 Out 2023',
        totalVisits: 12,
        status: 'active',
        lastService: 'Corte + Barba',
        avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=687&auto=format&fit=crop'
    },
    {
        id: '2',
        name: 'Lucas Pereira',
        phone: '(11) 98888-4321',
        lastVisit: '05 Out 2023',
        totalVisits: 3,
        status: 'active',
        lastService: 'Acabamento',
        avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=687&auto=format&fit=crop'
    },
    {
        id: '3',
        name: 'João Silva',
        phone: '(11) 97777-5678',
        lastVisit: '28 Set 2023',
        totalVisits: 1,
        status: 'new',
        lastService: 'Corte Social',
        avatarUrl: 'https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=687&auto=format&fit=crop'
    },
    {
        id: '4',
        name: 'Matheus Gomes',
        phone: '(11) 96666-8765',
        lastVisit: '15 Ago 2023',
        totalVisits: 8,
        status: 'inactive',
        lastService: 'Barba',
        avatarUrl: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=687&auto=format&fit=crop'
    },
    {
        id: '5',
        name: 'Pedro Henrique',
        phone: '(11) 95555-4321',
        lastVisit: '14 Out 2023',
        totalVisits: 5,
        status: 'active',
        lastService: 'Corte Degrade',
        avatarUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop'
    },
    {
        id: '6',
        name: 'Roberto Almeida',
        phone: '(11) 94444-9999',
        lastVisit: '01 Set 2023',
        totalVisits: 20,
        status: 'active',
        lastService: 'Completo',
        avatarUrl: 'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?q=80&w=880&auto=format&fit=crop'
    }
];

export const Clients: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredClients = mockClients.filter(client =>
        client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        client.phone.includes(searchTerm)
    );

    return (
        <div className="p-8 w-full max-w-[1600px] mx-auto animate-fade-in flex flex-col h-full overflow-hidden">

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 flex-none">
                <div>
                    <h2 className="text-3xl font-display font-bold text-white mb-1">Clientes</h2>
                    <p className="text-slate-400">Gerencie sua base de clientes e histórico.</p>
                </div>
                <button className="bg-primary hover:bg-yellow-600 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-primary/20 flex items-center gap-2 group">
                    <Plus size={20} className="group-hover:rotate-90 transition-transform" />
                    Novo Cliente
                </button>
            </div>

            {/* Search and Filter */}
            <div className="flex items-center gap-4 mb-6 flex-none bg-card-dark p-4 rounded-2xl border border-white/5">
                <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                    <input
                        type="text"
                        placeholder="Buscar por nome ou telefone..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-background-dark/50 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-slate-600"
                    />
                </div>
                <div className="flex items-center gap-2 ml-auto">
                    <span className="text-slate-500 text-sm font-medium mr-2 hidden md:block">{filteredClients.length} clientes encontrados</span>
                </div>
            </div>

            {/* Clients List */}
            <div className="flex-1 overflow-y-auto min-h-0 pr-2 scrollbar-hide">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-20 md:pb-0">
                    {filteredClients.map((client) => (
                        <div key={client.id} className="bg-card-dark rounded-2xl p-5 border border-white/5 hover:border-primary/30 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5">
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="relative">
                                        <div
                                            className="w-14 h-14 rounded-full bg-cover bg-center border-2 border-white/5 group-hover:border-primary transition-colors"
                                            style={{ backgroundImage: `url('${client.avatarUrl}')` }}
                                        ></div>
                                        {client.status === 'active' && <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-card-dark rounded-full"></div>}
                                        {client.status === 'inactive' && <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-slate-500 border-2 border-card-dark rounded-full"></div>}
                                        {client.status === 'new' && <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-blue-500 border-2 border-card-dark rounded-full"></div>}
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold text-lg leading-tight group-hover:text-primary transition-colors">{client.name}</h3>
                                        <p className="text-slate-500 text-sm">{client.phone}</p>
                                    </div>
                                </div>
                                <button className="text-slate-500 hover:text-white transition-colors p-1">
                                    <MoreVertical size={18} />
                                </button>
                            </div>

                            <div className="grid grid-cols-2 gap-3 mb-4">
                                <div className="bg-background-dark/50 rounded-lg p-2 border border-white/5">
                                    <p className="text-slate-500 text-[10px] uppercase font-bold tracking-wider mb-1">Última Visita</p>
                                    <div className="flex items-center gap-1.5 text-slate-300">
                                        <Calendar size={14} />
                                        <span className="text-xs font-bold">{client.lastVisit}</span>
                                    </div>
                                </div>
                                <div className="bg-background-dark/50 rounded-lg p-2 border border-white/5">
                                    <p className="text-slate-500 text-[10px] uppercase font-bold tracking-wider mb-1">Serviço</p>
                                    <div className="flex items-center gap-1.5 text-slate-300">
                                        <Scissors size={14} />
                                        <span className="text-xs font-bold truncate">{client.lastService}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between pt-4 border-t border-white/5">
                                <div className="flex items-center gap-1.5">
                                    <div className="bg-gold-accent/10 p-1 rounded">
                                        <Star size={12} className="text-gold-accent fill-gold-accent" />
                                    </div>
                                    <span className="text-xs font-bold text-gold-accent">{client.totalVisits} visitas</span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 text-slate-400 hover:bg-green-500/20 hover:text-green-500 transition-colors">
                                        <Phone size={16} />
                                    </button>
                                    <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 text-slate-400 hover:bg-blue-500/20 hover:text-blue-500 transition-colors">
                                        <MessageCircle size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
