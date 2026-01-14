export interface Appointment {
  id: string;
  clientName: string;
  service: string;
  time: string; // "HH:MM"
  durationMinutes: number;
  barberId: string;
  avatarUrl?: string;
  status?: 'confirmed' | 'pending' | 'completed';
  colorClass?: string;
}

export interface Barber {
  id: string;
  name: string;
  avatarUrl: string;
}

export type ViewState = 'dashboard' | 'agenda' | 'clients' | 'settings';
