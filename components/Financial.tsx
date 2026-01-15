import React, { useState } from 'react';
import { DollarSign, TrendingUp, TrendingDown, Calendar, Download, MoreHorizontal, Filter, PieChart } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell } from 'recharts';

// Mock Data
const revenueData = [
    { name: 'Seg', income: 1500, expense: 400 },
    { name: 'Ter', income: 2300, expense: 600 },
    { name: 'Qua', income: 3200, expense: 700 },
    { name: 'Qui', income: 2800, expense: 500 },
    { name: 'Sex', income: 4500, expense: 1200 },
    { name: 'Sab', income: 3800, expense: 900 },
    { name: 'Dom', income: 2000, expense: 300 },
];

const transactions = [
    { id: 1, description: 'Corte + Barba (Ricardo)', type: 'income', amount: 85.00, date: 'Hoje, 14:30', category: 'Serviço' },
    { id: 2, description: 'Produtos L\'Oreal', type: 'expense', amount: -450.00, date: '12 Out, 09:00', category: 'Produtos' },
    { id: 3, description: 'Corte (João)', type: 'income', amount: 45.00, date: '11 Out, 18:15', category: 'Serviço' },
    { id: 4, description: 'Manutenção Máquina', type: 'expense', amount: -120.00, date: '10 Out, 14:00', category: 'Manutenção' },
    { id: 5, description: 'Barboterapia (Pedro)', type: 'income', amount: 55.00, date: '10 Out, 11:00', category: 'Serviço' },
];

export const Financial: React.FC = () => {
    const [timeRange, setTimeRange] = useState('Semana');

    return (
        <div className="p-8 w-full max-w-[1600px] mx-auto animate-fade-in flex flex-col h-full overflow-hidden">

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 flex-none">
                <div>
                    <h2 className="text-3xl font-display font-bold text-white mb-1">Financeiro</h2>
                    <p className="text-slate-400">Visão completa do fluxo de caixa e relatórios.</p>
                </div>
                <div className="flex items-center gap-2">
                    <button className="bg-card-dark hover:bg-white/5 border border-white/10 text-slate-300 px-4 py-2.5 rounded-xl font-bold transition-all flex items-center gap-2 text-sm">
                        <Calendar size={16} />
                        {timeRange}
                    </button>
                    <button className="bg-primary hover:bg-yellow-600 text-white px-4 py-2.5 rounded-xl font-bold transition-all shadow-lg shadow-primary/20 flex items-center gap-2 text-sm">
                        <Download size={16} />
                        Exportar
                    </button>
                </div>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 flex-none">
                {/* Total Balance */}
                <div className="bg-card-dark rounded-2xl p-6 border border-white/5 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-gold-accent/5 to-transparent"></div>
                    <div className="flex justify-between items-start mb-4 relative z-10">
                        <div className="p-3 rounded-xl bg-gold-accent/10 text-gold-accent border border-gold-accent/10">
                            <DollarSign size={24} />
                        </div>
                        <span className="text-green-500 bg-green-500/10 border border-green-500/20 px-2.5 py-1 rounded-lg text-xs font-bold">+24%</span>
                    </div>
                    <div className="relative z-10">
                        <p className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-1">Saldo Total</p>
                        <h3 className="text-3xl font-display font-bold text-white">R$ 12.450,00</h3>
                    </div>
                </div>

                {/* Income */}
                <div className="bg-card-dark rounded-2xl p-6 border border-white/5 relative overflow-hidden group">
                    <div className="flex justify-between items-start mb-4 relative z-10">
                        <div className="p-3 rounded-xl bg-green-500/10 text-green-500 border border-green-500/10">
                            <TrendingUp size={24} />
                        </div>
                        <span className="text-green-500 bg-green-500/10 border border-green-500/20 px-2.5 py-1 rounded-lg text-xs font-bold">+12%</span>
                    </div>
                    <div className="relative z-10">
                        <p className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-1">Receitas</p>
                        <h3 className="text-3xl font-display font-bold text-white">R$ 15.200,00</h3>
                    </div>
                </div>

                {/* Expenses */}
                <div className="bg-card-dark rounded-2xl p-6 border border-white/5 relative overflow-hidden group">
                    <div className="flex justify-between items-start mb-4 relative z-10">
                        <div className="p-3 rounded-xl bg-red-500/10 text-red-500 border border-red-500/10">
                            <TrendingDown size={24} />
                        </div>
                        <span className="text-red-500 bg-red-500/10 border border-red-500/20 px-2.5 py-1 rounded-lg text-xs font-bold">+5%</span>
                    </div>
                    <div className="relative z-10">
                        <p className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-1">Despesas</p>
                        <h3 className="text-3xl font-display font-bold text-white">R$ 2.750,00</h3>
                    </div>
                </div>
            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 flex-1 min-h-0">

                {/* Chart Section */}
                <div className="lg:col-span-2 bg-card-dark rounded-2xl border border-white/5 flex flex-col">
                    <div className="p-6 border-b border-white/5 flex items-center justify-between">
                        <h3 className="text-lg font-bold text-white flex items-center gap-2">
                            <PieChart size={18} className="text-primary" />
                            Fluxo do Período
                        </h3>
                        <button className="text-slate-400 hover:text-white transition-colors">
                            <MoreHorizontal size={20} />
                        </button>
                    </div>
                    <div className="flex-1 p-6 min-h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={revenueData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#D4AF37" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient id="colorExpense" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" opacity={0.3} />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#1b2531', borderColor: '#334155', borderRadius: '8px', color: '#fff' }}
                                    itemStyle={{ color: '#fff' }}
                                />
                                <Area type="monotone" dataKey="income" stroke="#D4AF37" strokeWidth={3} fillOpacity={1} fill="url(#colorIncome)" name="Receita" />
                                <Area type="monotone" dataKey="expense" stroke="#ef4444" strokeWidth={3} fillOpacity={1} fill="url(#colorExpense)" name="Despesa" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Transactions List */}
                <div className="bg-card-dark rounded-2xl border border-white/5 flex flex-col h-full overflow-hidden">
                    <div className="p-6 border-b border-white/5 flex items-center justify-between shrink-0">
                        <h3 className="text-lg font-bold text-white">Transações Recentes</h3>
                        <button className="p-2 hover:bg-white/5 rounded-lg text-slate-400 transition-colors">
                            <Filter size={18} />
                        </button>
                    </div>
                    <div className="flex-1 overflow-y-auto p-4 space-y-2 scrollbar-hide">
                        {transactions.map((tx) => (
                            <div key={tx.id} className="flex items-center justify-between p-3 rounded-xl bg-background-dark/50 border border-white/5 hover:bg-white/5 transition-colors group">
                                <div className="flex items-center gap-3">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border ${tx.type === 'income' ? 'bg-green-500/10 border-green-500/20 text-green-500' : 'bg-red-500/10 border-red-500/20 text-red-500'
                                        }`}>
                                        {tx.type === 'income' ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-white group-hover:text-primary transition-colors">{tx.description}</p>
                                        <p className="text-xs text-slate-500">{tx.date} • {tx.category}</p>
                                    </div>
                                </div>
                                <span className={`text-sm font-bold ${tx.type === 'income' ? 'text-white' : 'text-red-400'}`}>
                                    {tx.type === 'income' ? '+' : '-'} R$ {Math.abs(tx.amount).toFixed(2)}
                                </span>
                            </div>
                        ))}
                        <div className="pt-4 text-center">
                            <button className="text-primary text-sm font-bold hover:underline">Ver todas as transações</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};
