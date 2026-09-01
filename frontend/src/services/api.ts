import {
  Appointment,
  InpatientAdmitRecord,
  DischargeRecord,
  DirectorStats
} from '../types';

const STORAGE_KEY_APTS = 'medflow_hospital_appointments_v4';
const STORAGE_KEY_ADMISSIONS = 'medflow_hospital_admissions_v4';
const STORAGE_KEY_DISCHARGES = 'medflow_hospital_discharges_v4';

const DEFAULT_APPOINTMENTS: Appointment[] = [
  {
    id: 'apt-101',
    tokenNumber: 'TK-101',
    patientName: 'Robert Chen',
    patientPhone: '+1 (555) 234-8901',
    patientAge: 52,
    patientGender: 'Male',
    doctorName: 'Dr. Maya Lin, MD',
    department: 'Cardiology',
    date: 'Today',
    timeSlot: '10:00 AM',
    symptoms: 'Exertional chest tightness and shortness of breath',
    status: 'Checked In',
    prescription: 'Tab. Atorvastatin 20mg once daily at night. Tab. Metoprolol 25mg in morning. Repeat ECG next week.',
    fee: 150,
    isPaid: true,
    createdAt: '1 hour ago'
  },
  {
    id: 'apt-102',
    tokenNumber: 'TK-102',
    patientName: 'Eleanor Vance',
    patientPhone: '+1 (555) 489-1120',
    patientAge: 64,
    patientGender: 'Female',
    doctorName: 'Dr. Maya Lin, MD',
    department: 'Cardiology',
    date: 'Today',
    timeSlot: '11:15 AM',
    symptoms: 'Post-angioplasty 6-month routine evaluation and lipid test',
    status: 'Waiting',
    fee: 150,
    isPaid: true,
    createdAt: '40 mins ago'
  },
  {
    id: 'apt-103',
    tokenNumber: 'TK-103',
    patientName: 'David Miller',
    patientPhone: '+1 (555) 890-3341',
    patientAge: 38,
    patientGender: 'Male',
    doctorName: 'Dr. David Kim, MD',
    department: 'Neurology',
    date: 'Today',
    timeSlot: '02:00 PM',
    symptoms: 'Severe unilateral cluster migraines with visual aura',
    status: 'Waiting',
    fee: 175,
    isPaid: true,
    createdAt: '25 mins ago'
  },
  {
    id: 'apt-104',
    tokenNumber: 'TK-104',
    patientName: 'Samuel Jackson',
    patientPhone: '+1 (555) 341-9988',
    patientAge: 45,
    patientGender: 'Male',
    doctorName: 'Dr. Maya Lin, MD',
    department: 'Cardiology',
    date: 'Today',
    timeSlot: '03:30 PM',
    symptoms: 'Mild palpitation during gym workout',
    status: 'Waiting',
    fee: 150,
    isPaid: true,
    createdAt: '10 mins ago'
  }
];

const DEFAULT_ADMISSIONS: InpatientAdmitRecord[] = [
  { id: 'ADM-101', patientId: 'PT-90482', patientName: 'Robert Chen', age: 52, gender: 'Male', ward: 'Cardiac Step-Down', bedNumber: 'Bed 304-A', admitTime: '08:30 AM Today', diagnosis: 'Unstable Angina & High Troponin', attendingDoctor: 'Dr. Maya Lin', condition: 'Stable' },
  { id: 'ADM-102', patientId: 'PT-60291', patientName: 'Maria Gonzalez', age: 71, gender: 'Female', ward: 'ICU North', bedNumber: 'ICU Bed 04', admitTime: '09:15 AM Today', diagnosis: 'Acute STEMI & Left Ventricular Failure', attendingDoctor: 'Dr. Maya Lin', condition: 'Critical (ICU)' },
  { id: 'ADM-103', patientId: 'PT-77120', patientName: 'James Wilson', age: 48, gender: 'Male', ward: 'General Medicine', bedNumber: 'Bed 112', admitTime: '10:00 AM Today', diagnosis: 'Community Acquired Pneumonia', attendingDoctor: 'Dr. Arthur Sterling', condition: 'Under Observation' },
  { id: 'ADM-104', patientId: 'PT-88319', patientName: 'Eleanor Vance', age: 64, gender: 'Female', ward: 'Cardiac Step-Down', bedNumber: 'Bed 305-B', admitTime: '11:00 AM Today', diagnosis: 'Post-Stent Coronary Telemetry', attendingDoctor: 'Dr. Maya Lin', condition: 'Stable' }
];

const DEFAULT_DISCHARGES: DischargeRecord[] = [
  { id: 'DIS-201', patientId: 'PT-44019', patientName: 'Thomas Anderson', age: 59, ward: 'General Ward 2B', dischargeTime: '09:00 AM Today', doctorApproved: 'Dr. Arthur Sterling', totalBillPaidUsd: 2850.00, summary: 'Full recovery from acute gastroenteritis and dehydration. Vitals normalized.' },
  { id: 'DIS-202', patientId: 'PT-55102', patientName: 'Karen White', age: 42, ward: 'Orthopedic Recovery', dischargeTime: '10:30 AM Today', doctorApproved: 'Dr. Sarah Jenkins', totalBillPaidUsd: 4600.00, summary: 'Post-arthroscopic knee repair recovery successful. Physiotherapy chart issued.' },
  { id: 'DIS-203', patientId: 'PT-33910', patientName: 'Richard Roe', age: 67, ward: 'Cardiac Step-Down', dischargeTime: '11:45 AM Today', doctorApproved: 'Dr. Maya Lin', totalBillPaidUsd: 6100.00, summary: 'Post-angioplasty 48-hour monitoring cleared. Cardiac rehab schedule provided.' }
];

function getApts(): Appointment[] {
  const saved = localStorage.getItem(STORAGE_KEY_APTS);
  if (saved) {
    try { return JSON.parse(saved); } catch (e) {}
  }
  localStorage.setItem(STORAGE_KEY_APTS, JSON.stringify(DEFAULT_APPOINTMENTS));
  return DEFAULT_APPOINTMENTS;
}

function saveApts(list: Appointment[]) {
  localStorage.setItem(STORAGE_KEY_APTS, JSON.stringify(list));
  window.dispatchEvent(new Event('medflow_live_update'));
}

export const api = {
  getAppointments: async (): Promise<Appointment[]> => {
    return getApts();
  },

  bookAppointment: async (data: Partial<Appointment>): Promise<Appointment> => {
    const list = getApts();
    const token = `TK-${100 + list.length + 1}`;
    const newApt: Appointment = {
      id: `apt-${Date.now()}`,
      tokenNumber: token,
      patientName: data.patientName || 'New Patient',
      patientPhone: data.patientPhone || '+1 (555) 000-0000',
      patientAge: data.patientAge || 35,
      patientGender: data.patientGender || 'Male',
      doctorName: data.doctorName || 'Dr. Maya Lin, MD',
      department: data.department || 'Cardiology',
      date: data.date || 'Today',
      timeSlot: data.timeSlot || '10:00 AM',
      symptoms: data.symptoms || 'General Medical Consultation',
      status: 'Waiting',
      fee: 150,
      isPaid: true,
      createdAt: 'Just now'
    };
    saveApts([newApt, ...list]);
    return newApt;
  },

  updateStatus: async (id: string, status: Appointment['status'], rejectionReason?: string): Promise<void> => {
    const list = getApts();
    const updated = list.map(a => {
      if (a.id === id) {
        return {
          ...a,
          status,
          rejectionReason: rejectionReason || a.rejectionReason
        };
      }
      return a;
    });
    saveApts(updated);
  },

  addPrescription: async (id: string, prescription: string): Promise<void> => {
    const list = getApts();
    const updated = list.map(a => a.id === id ? { ...a, prescription, status: 'Completed' as const } : a);
    saveApts(updated);
  },

  getAdmissionsToday: async (): Promise<InpatientAdmitRecord[]> => {
    return DEFAULT_ADMISSIONS;
  },

  getDischargesToday: async (): Promise<DischargeRecord[]> => {
    return DEFAULT_DISCHARGES;
  },

  getDirectorStats: async (): Promise<DirectorStats> => {
    const apts = getApts();
    const opdRev = apts.filter(a => a.status !== 'Rejected').length * 150;
    const ipdRev = 13550;
    const pharmRev = 4200;
    const labRev = 3800;
    const totalRev = opdRev + ipdRev + pharmRev + labRev;

    return {
      admittedTodayCount: DEFAULT_ADMISSIONS.length,
      dischargedTodayCount: DEFAULT_DISCHARGES.length,
      totalBeds: 450,
      occupiedBeds: 394,
      icuOccupancy: 88.5,
      todayRevenueUsd: totalRev,
      revenueBreakdown: {
        opdConsultations: opdRev,
        inpatientWards: ipdRev,
        pharmacy: pharmRev,
        laboratoryDiagnostics: labRev
      },
      doctorsOnDuty: 18,
      erWaitTimeMinutes: 12
    };
  }
};
