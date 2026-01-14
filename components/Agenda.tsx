import React, { useEffect, useRef } from 'react';
import { Plus, Scissors, ChevronLeft, ChevronRight, Calendar as CalendarIcon } from 'lucide-react';
import { Barber, Appointment } from '../types';

// Constants for grid calculation
const START_HOUR = 8; // 8:00 AM
const END_HOUR = 20; // 8:00 PM
const HOUR_HEIGHT = 100; // Pixels per hour (Taller for desktop)

const barbers: Barber[] = [
  {
    id: '1',
    name: 'Marcos',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDaFQToh8jS0wPE3VAHsjTWtra1CgzNqOMKrRx-QDvwcTYzFXFPdBrEqSOagLGNjtppTySaQS-nte4px-KpOhDGFp-njjs6MVnO9GgUY-qXah_2VcW0lR4Hfo6Ndnzd8E1f_r83BdQwc4Q9hGBS4Wc0XxDcWecHQ-bDGUzyFE6wLRp6_uGBf5zgq6tzjbjXl2Xg2MdajIuFYwyDf1_NA4Pjl7bC_UeGvO9DV1iplNPCRq72FFtrELFaGNmhgeduTsr2xrpp3KSypkE'
  },
  {
    id: '2',
    name: 'Junior',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAc3Y63TO6C0W_SejyNyxv15JnM9GgZEi0v3tzzb1WmKUBeWx3WjxjxbPUtp4yVlkQOHrp4zOxclkvBlb4_C5d7yNO_0TULngZuuXJis_z4iM1b7swjTUmk8wShALdOdcCITeERDPscFBKZmdnx55eYN1gQMZ7Tpe5GYRDu8cO6yBqelihXyaUHAr0KEHCAEIpg81T3gcDCGzW5uVU1z0PWQeDqG7fSmZlIJZ90bgOvpL4T8oW4E9EG6yWlnEiyX1q24GD6I9st0WY'
  },
  {
    id: '3',
    name: 'Felipe',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEsA6kAVvg1vbxMLFn7dcsf5P9lrp1bk4S2XjDBQpzf2oMy1svk9l7kkcUaQCGrrozCrPl0YrjtXqVx06XEf13IMasx4DNukwOQFX9ZEfPaF9G0EjinWnikGylyc6HIc5XiByAAyE3mvvq9eHSgtUtAna17xYrTQMpmqUJ4G-Gu55rz11bQwbhyCfDcZULNM2h3Mqjj-rY1rYt-zCF_SioYzTDxXWxxFrKP-qrNm1KDBXUWDsto_1QqLf0-bL1aTAKa9B60nt8vbA'
  }
];

const appointments: Appointment[] = [
  {
    id: 'a1',
    barberId: '1',
    clientName: 'Ricardo M.',
    service: 'Corte + Barba',
    time: '09:00',
    durationMinutes: 60,
    colorClass: 'border-emerald-500'
  },
  {
    id: 'a2',
    barberId: '1',
    clientName: 'Lucas P.',
    service: '',
    time: '11:30',
    durationMinutes: 45,
    status: 'pending',
    colorClass: 'border-amber-500'
  },
  {
    id: 'a3',
    barberId: '2',
    clientName: 'João S.',
    service: '',
    time: '11:00',
    durationMinutes: 30,
    status: 'confirmed',
    colorClass: 'bg-primary'
  },
  {
    id: 'a4',
    barberId: '2',
    clientName: 'Mateus G.',
    service: 'Luzes + Corte',
    time: '13:00',
    durationMinutes: 75,
    colorClass: 'border-purple-500'
  },
  {
    id: 'a5',
    barberId: '3',
    clientName: 'Pedro H.',
    service: 'Barboterapia',
    time: '14:15',
    durationMinutes: 60,
    colorClass: 'border-blue-500'
  }
];

// Helper to calculate top position
const getTopPosition = (time: string) => {
  const [hour, minute] = time.split(':').map(Number);
  const totalMinutes = (hour - START_HOUR) * 60 + minute;
  return (totalMinutes / 60) * HOUR_HEIGHT;
};

// Helper to calculate height
const getHeight = (minutes: number) => {
  return (minutes / 60) * HOUR_HEIGHT;
};

export const Agenda: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to roughly 10:00 on mount
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 250;
    }
  }, []);

  const timeSlots = Array.from({ length: END_HOUR - START_HOUR + 1 }, (_, i) => START_HOUR + i);

  // Current Time Line Position (Fixed at 11:15 for demo)
  const currentTimeTop = getTopPosition("11:15");

  return (
    <div className="flex flex-col h-full overflow-hidden bg-background-dark text-white relative">
      {/* Desktop Toolbar */}
      <div className="flex-none px-6 py-4 border-b border-white/5 bg-background-dark/95 backdrop-blur z-20 flex items-center justify-between">
         <div className="flex items-center gap-4">
            <h2 className="text-xl font-bold">Agenda Diária</h2>
            <div className="flex items-center gap-2 bg-card-dark rounded-lg p-1 border border-white/5">
               <button className="p-1.5 hover:bg-white/5 rounded text-slate-400 hover:text-white transition-colors"><ChevronLeft size={18} /></button>
               <div className="flex items-center gap-2 px-2">
                 <CalendarIcon size={16} className="text-primary" />
                 <span className="text-sm font-semibold">14 Outubro 2023</span>
               </div>
               <button className="p-1.5 hover:bg-white/5 rounded text-slate-400 hover:text-white transition-colors"><ChevronRight size={18} /></button>
            </div>
         </div>
         <div className="flex items-center gap-3">
            <button className="text-sm font-bold text-slate-400 hover:text-white px-3 py-2 transition-colors">Dia</button>
            <button className="text-sm font-bold text-slate-400 hover:text-white px-3 py-2 transition-colors">Semana</button>
            <button className="bg-primary text-white text-sm font-bold px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2">
               <Plus size={16} />
               Novo Agendamento
            </button>
         </div>
      </div>

      {/* Main Schedule */}
      <main className="flex-1 flex flex-col overflow-hidden relative w-full">
        {/* Sticky Barber Headers */}
        <div className="flex-none grid grid-cols-[80px_1fr_1fr_1fr] gap-4 px-6 py-4 border-b border-slate-800 bg-card-dark/50 backdrop-blur z-10">
          <div className="flex items-center justify-center">
            <span className="text-slate-500 text-xs font-bold uppercase tracking-wider">Horário</span>
          </div>
          {barbers.map(barber => (
            <div key={barber.id} className="flex items-center justify-center gap-3">
              <div 
                className={`w-8 h-8 rounded-full bg-cover bg-center border-2 ${barber.id === '1' ? 'border-primary' : 'border-slate-700'}`}
                style={{ backgroundImage: `url('${barber.avatarUrl}')` }}
              ></div>
              <span className="text-sm font-bold text-white truncate">{barber.name}</span>
            </div>
          ))}
        </div>

        {/* Scrollable Timeline Grid */}
        <div className="flex-1 overflow-y-auto relative scrollbar-hide bg-[#0c131a]" ref={scrollRef}>
          <div className="relative min-h-[1000px] px-6 pt-4" style={{ height: (END_HOUR - START_HOUR + 1) * HOUR_HEIGHT }}>
            
            {/* Current Time Indicator */}
            <div 
              className="absolute left-0 right-0 border-t-2 border-red-500 z-10 pointer-events-none flex items-center opacity-80"
              style={{ top: currentTimeTop + 16 }} // +16 for padding offset
            >
              <div className="w-2.5 h-2.5 rounded-full bg-red-500 -ml-1.5"></div>
              <span className="ml-2 text-xs font-bold text-white bg-red-500 px-2 py-0.5 rounded-full">11:15</span>
            </div>

            {/* Grid Container */}
            <div className="grid grid-cols-[80px_1fr_1fr_1fr] gap-4 h-full">
              
              {/* Time Column */}
              <div className="flex flex-col h-full text-xs font-bold text-slate-500 pt-2 relative">
                {timeSlots.map((hour) => (
                  <div key={hour} className="absolute w-full text-center -mt-2.5" style={{ top: (hour - START_HOUR) * HOUR_HEIGHT }}>
                    {hour}:00
                  </div>
                ))}
              </div>

              {/* Barber Columns */}
              {barbers.map(barber => (
                <div key={barber.id} className="relative h-full border-l border-slate-800/30">
                  {/* Background Grid Lines */}
                  {timeSlots.map((hour) => (
                    <div 
                      key={hour} 
                      className="absolute w-full border-t border-slate-800/40"
                      style={{ top: (hour - START_HOUR) * HOUR_HEIGHT }}
                    ></div>
                  ))}

                  {/* Appointments for this barber */}
                  {appointments.filter(a => a.barberId === barber.id).map(apt => (
                    <div
                      key={apt.id}
                      className="absolute left-0 right-0 px-2 z-0 transition-all hover:z-20 hover:scale-[1.02]"
                      style={{
                        top: getTopPosition(apt.time),
                        height: getHeight(apt.durationMinutes)
                      }}
                    >
                      {apt.status === 'confirmed' ? (
                        /* Simple Blue Chip */
                        <button className="w-full h-full bg-primary text-white rounded-lg shadow-lg shadow-primary/10 p-3 text-left flex flex-col justify-start relative group overflow-hidden border border-primary/50">
                           <div className="flex items-center justify-between relative z-10 w-full mb-1">
                            <span className="text-xs font-bold truncate">{apt.time} - {apt.clientName}</span>
                            <Scissors size={12} className="opacity-70" />
                          </div>
                          <span className="text-[10px] font-medium opacity-80 truncate">{apt.service}</span>
                          <div className="absolute top-0 right-0 bottom-0 w-16 bg-gradient-to-l from-black/10 to-transparent"></div>
                        </button>
                      ) : apt.status === 'pending' ? (
                        /* Amber Outline / Pending */
                        <button className="w-full h-full bg-amber-500/5 rounded-lg border border-amber-500/40 p-3 text-left flex flex-col justify-center hover:bg-amber-500/10 transition-colors relative overflow-hidden">
                           <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500"></div>
                          <span className="text-xs font-bold text-amber-500 block mb-0.5">{apt.time}</span>
                          <span className="text-sm font-bold text-white block leading-tight">{apt.clientName}</span>
                        </button>
                      ) : (
                        /* Standard Card */
                        <button className={`w-full h-full bg-card-dark rounded-lg border-l-4 shadow-sm p-3 text-left hover:brightness-110 transition-all flex flex-col justify-center ${apt.colorClass || 'border-slate-500'} border-y border-r border-white/5`}>
                          <span className="text-xs font-bold text-slate-400 block mb-0.5">{apt.time}</span>
                          <span className="text-sm font-bold text-white block leading-tight">{apt.clientName}</span>
                          {apt.service && <span className="text-xs text-slate-500 block truncate mt-1">{apt.service}</span>}
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};