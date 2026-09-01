import { Appointment } from '../types';

const STORAGE_KEY = 'medflow_simple_appointments_v1';

const INITIAL_APPOINTMENTS: Appointment[] = [
  {
    id: 'apt-1',
    tokenNumber: 'TK-101',
    patientName: 'Robert Chen',
    patientPhone: '+1 (555) 234-8901',
    patientAge: 52,
    doctorName: 'Dr. Maya Lin',
    department: 'Cardiology',
    date: 'Today',
    timeSlot: '10:00 AM',
    symptoms: 'Mild chest tightness after climbing stairs',
    status: 'Checked In',
    prescription: 'Atorvastatin 20mg once daily at night. Low sodium diet.',
    fee: 100,
    createdAt: '1 hour ago'
  },
  {
    id: 'apt-2',
    tokenNumber: 'TK-102',
    patientName: 'Eleanor Vance',
    patientPhone: '+1 (555) 489-1120',
    patientAge: 64,
    doctorName: 'Dr. Maya Lin',
    department: 'Cardiology',
    date: 'Today',
    timeSlot: '11:00 AM',
    symptoms: 'Routine 6-month blood pressure checkup',
    status: 'Waiting',
    fee: 100,
    createdAt: '30 mins ago'
  },
  {
    id: 'apt-3',
    tokenNumber: 'TK-103',
    patientName: 'David Miller',
    patientPhone: '+1 (555) 890-3341',
    patientAge: 38,
    doctorName: 'Dr. David Kim',
    department: 'Neurology',
    date: 'Today',
    timeSlot: '02:30 PM',
    symptoms: 'Frequent morning headaches and eye strain',
    status: 'Waiting',
    fee: 120,
    createdAt: '15 mins ago'
  }
];

function getStored(): Appointment[] {
  const data = localStorage.getItem(STORAGE_KEY);
  if (data) {
    try { return JSON.parse(data); } catch (e) {}
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_APPOINTMENTS));
  return INITIAL_APPOINTMENTS;
}

function saveStored(list: Appointment[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  window.dispatchEvent(new Event('medflow_sync'));
}

export const api = {
  getAppointments: async (): Promise<Appointment[]> => {
    return getStored();
  },

  bookAppointment: async (data: Partial<Appointment>): Promise<Appointment> => {
    const list = getStored();
    const token = `TK-${100 + list.length + 1}`;
    const newApt: Appointment = {
      id: `apt-${Date.now()}`,
      tokenNumber: token,
      patientName: data.patientName || 'New Patient',
      patientPhone: data.patientPhone || '+1 (555) 000-0000',
      patientAge: data.patientAge || 30,
      doctorName: data.doctorName || 'Dr. Maya Lin',
      department: data.department || 'General Medicine',
      date: data.date || 'Today',
      timeSlot: data.timeSlot || '10:00 AM',
      symptoms: data.symptoms || 'General Checkup',
      status: 'Waiting',
      fee: 100,
      createdAt: 'Just now'
    };
    saveStored([newApt, ...list]);
    return newApt;
  },

  updateStatus: async (id: string, status: Appointment['status']): Promise<void> => {
    const list = getStored();
    const updated = list.map(a => a.id === id ? { ...a, status } : a);
    saveStored(updated);
  },

  addPrescription: async (id: string, prescription: string): Promise<void> => {
    const list = getStored();
    const updated = list.map(a => a.id === id ? { ...a, prescription, status: 'Completed' as const } : a);
    saveStored(updated);
  }
};
