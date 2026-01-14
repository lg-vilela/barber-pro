import React from 'react';
import {
  TrendingUp,
  DollarSign,
  Calendar,
  UserPlus,
  Scissors,
  Star,
  Minus,
  MoreHorizontal
} from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from 'recharts';

const data = [
  { name: 'SEG', value: 2000 },
  { name: 'TER', value: 4500 },
  { name: 'QUA', value: 6000 },
  { name: 'QUI', value: 4800 },
  { name: 'SEX', value: 8450 },
  { name: 'SAB', value: 7000 },
  { name: 'DOM', value: 3000 },
];

export const Dashboard: React.FC = () => {
  return (
    <div className="p-8 w-full max-w-[1600px] mx-auto animate-fade-in">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-1">Visão Geral</h2>
        <p className="text-slate-400 text-sm">Acompanhe as métricas da sua barbearia hoje.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Card 1: Revenue */}
        <div className="bg-card-dark rounded-2xl p-6 border border-white/5 relative overflow-hidden group hover:border-gold-accent/30 transition-colors">
          <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
            <DollarSign size={100} />
          </div>
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 rounded-xl bg-gold-accent/10 text-gold-accent">
              <DollarSign size={24} />
            </div>
            <div className="flex items-center gap-1 bg-green-500/10 px-2 py-1 rounded-lg">
              <TrendingUp size={14} className="text-green-500" />
              <span className="text-green-500 text-xs font-bold">+12%</span>
            </div>
          </div>
          <div>
            <p className="text-slate-400 text-sm font-medium mb-1">Faturamento do Dia</p>
            <p className="text-white text-4xl font-extrabold tracking-tight">R$ 1.250<span className="text-xl text-slate-500 font-medium">,00</span></p>
          </div>
        </div>

        {/* Card 2: Appointments */}
        <div className="bg-card-dark rounded-2xl p-6 border border-white/5 relative overflow-hidden group hover:border-primary/30 transition-colors">
          <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
            <Calendar size={100} />
          </div>
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 rounded-xl bg-zinc-800 text-white">
              <Calendar size={24} />
            </div>
            <div className="flex items-center gap-1 bg-green-500/10 px-2 py-1 rounded-lg">
              <TrendingUp size={14} className="text-green-500" />
              <span className="text-green-500 text-xs font-bold">+5%</span>
            </div>
          </div>
          <div>
            <p className="text-slate-400 text-sm font-medium mb-1">Agendamentos Totais</p>
            <p className="text-white text-4xl font-extrabold tracking-tight">14</p>
          </div>
        </div>

        {/* Card 3: New Clients */}
        <div className="bg-card-dark rounded-2xl p-6 border border-white/5 relative overflow-hidden group hover:border-purple-500/30 transition-colors">
          <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
            <UserPlus size={100} />
          </div>
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 rounded-xl bg-purple-500/20 text-purple-400">
              <UserPlus size={24} />
            </div>
            <div className="flex items-center gap-1 bg-slate-700/30 px-2 py-1 rounded-lg">
              <Minus size={14} className="text-slate-400" />
              <span className="text-slate-400 text-xs font-bold">0%</span>
            </div>
          </div>
          <div>
            <p className="text-slate-400 text-sm font-medium mb-1">Novos Clientes</p>
            <p className="text-white text-4xl font-extrabold tracking-tight">3</p>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Chart Section (2/3 width) */}
        <div className="lg:col-span-2 bg-card-dark rounded-2xl p-6 border border-white/5">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-white text-lg font-bold">Receita Semanal</h3>
              <p className="text-slate-400 text-sm">Performance dos últimos 7 dias</p>
            </div>
            <button className="p-2 hover:bg-white/5 rounded-lg text-slate-400 transition-colors">
              <MoreHorizontal size={20} />
            </button>
          </div>

          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#D4AF37" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" opacity={0.3} />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#64748b', fontSize: 12, fontWeight: '500' }}
                  dy={10}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#64748b', fontSize: 12 }}
                />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1b2531', borderColor: '#334155', borderRadius: '8px', color: '#fff' }}
                  itemStyle={{ color: '#fff' }}
                  cursor={{ stroke: 'rgba(255,255,255,0.1)', strokeWidth: 2 }}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#D4AF37"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorValue)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Appointments List (1/3 width) */}
        <div className="bg-card-dark rounded-2xl border border-white/5 flex flex-col h-full">
          <div className="p-6 border-b border-white/5 flex items-center justify-between">
            <h3 className="text-white text-lg font-bold">Próximos</h3>
            <button className="text-primary text-sm font-bold hover:underline">Ver Agenda</button>
          </div>

          <div className="p-4 flex flex-col gap-3 overflow-y-auto max-h-[400px]">
            {/* Item 1 */}
            <div className="flex items-center gap-4 bg-background-dark/50 rounded-xl p-3 border border-white/5 hover:bg-white/5 transition-colors cursor-pointer group">
              <div className="relative shrink-0">
                <div
                  className="bg-center bg-no-repeat bg-cover rounded-full h-12 w-12 border border-white/10"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAcIeyRCF0x3pLHWxw13tCijXCYfjjxJCupuedPYsKm2Jd4kLH22b28ntELzh30LIpChUHcR-IoQ6Oc_iGbk1x1-Ak8sGGS6zIUyZrb17ccC-q3MGhDJajon9Fc7EMoa6djNlb4J4odwYrYc_IUvVgl1gv1EQDQ0ubEGGYd8LReaXKbEmexJUVoUVT9F2rtA3eKlMKfor6_nz4G_h__Ygg5fXXxFlRc99XxIdHPwszxxWoOiMaic_sxLaYflGlhNEdP6hlgLnBFGIo")' }}
                />
                <div className="absolute -bottom-1 -right-1 bg-background-dark p-0.5 rounded-full">
                  <div className="bg-primary w-4 h-4 rounded-full flex items-center justify-center">
                    <Scissors size={8} className="text-white" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col flex-1 justify-center">
                <div className="flex justify-between items-center mb-0.5">
                  <p className="text-white text-sm font-bold">João Silva</p>
                  <p className="text-white text-xs font-bold bg-white/10 px-2 py-0.5 rounded">14:00</p>
                </div>
                <p className="text-slate-400 text-xs">Corte + Barba</p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-center gap-4 bg-background-dark/50 rounded-xl p-3 border border-white/5 hover:bg-white/5 transition-colors cursor-pointer group">
              <div className="relative shrink-0">
                <div
                  className="bg-center bg-no-repeat bg-cover rounded-full h-12 w-12 border border-white/10"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAcMlEDwnzNkKi8-RAXWD9LoqudSm4OOnHxQx5y0_zk9CDsDFmqthrJAjtqxcFB9LMRVriMrr5iuWZjXmzHQRYWt6kD87_8I_xqXuwnpX29zVlaUm7ff0CkKhw5ponPiclQlRVXtMbWiS4eQ20DDfRRuVf8J0Ck9EyLYbFGRED-RjwgmB0UvpDLzQ8SBQKw7NledevdWh6NPnmAgxLjM37iz3jsKxOFkkEEz9Meb98LM9c9r2b66zSSWFj8gwVYdojiVjPvvcGnYUU")' }}
                />
                <div className="absolute -bottom-1 -right-1 bg-background-dark p-0.5 rounded-full">
                  <div className="bg-gold-accent w-4 h-4 rounded-full flex items-center justify-center">
                    <Star size={8} className="text-black fill-black" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col flex-1 justify-center">
                <div className="flex justify-between items-center mb-0.5">
                  <p className="text-white text-sm font-bold">Pedro Santos</p>
                  <p className="text-white text-xs font-bold bg-white/10 px-2 py-0.5 rounded">14:45</p>
                </div>
                <p className="text-slate-400 text-xs">Barba Terapia</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-center gap-4 bg-background-dark/50 rounded-xl p-3 border border-white/5 hover:bg-white/5 transition-colors cursor-pointer group">
              <div className="relative shrink-0">
                <div
                  className="bg-center bg-no-repeat bg-cover rounded-full h-12 w-12 border border-white/10"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD4yxBXscC2_uNQJxH0ZsrLhY1UyFR084fNmHY9-6ZS4BJeuJXO4GNikr4UuERKGGpiSa9xecPS6wPbKPRZYlex7rXNEmXeW2XUiWeRjxSNOc95Oh46AHIRbMgZzuoA6vE46xU2K0kZOz9mTPdSKebrpEilfWEb785bopuI-asyQoBQwnwbKKwgIuMI19-7bt-qxNEje6nd8oSXzfwj8wVeoe8wZQe_8IDoqHx8ukfeG7FSn61wE6pT23Vc3-O_00xAiNLZOl3zmU4")' }}
                />
              </div>
              <div className="flex flex-col flex-1 justify-center">
                <div className="flex justify-between items-center mb-0.5">
                  <p className="text-white text-sm font-bold">Lucas Oliveira</p>
                  <p className="text-white text-xs font-bold bg-white/10 px-2 py-0.5 rounded">15:30</p>
                </div>
                <p className="text-slate-400 text-xs">Corte Infantil</p>
              </div>
            </div>
          </div>

          <div className="p-4 mt-auto border-t border-white/5">
            <button className="w-full py-2.5 rounded-xl border border-white/10 text-sm font-bold hover:bg-white/5 transition-colors">
              Novo Agendamento
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};