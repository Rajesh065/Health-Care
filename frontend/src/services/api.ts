import {
  Appointment,
  InpatientAdmitRecord,
  DischargeRecord,
  MDStats,
  MedicalDomain
} from '../types';

export const MEDICAL_DOMAINS: MedicalDomain[] = [
  {
    id: 'cardio',
    name: 'Cardiology & Heart Health',
    doctorName: 'Dr. Maya Lin, MD, FACC',
    qualification: 'Senior Interventional Cardiologist',
    experienceYears: 16,
    chamberNumber: 'Chamber 204 (Wing B)',
    iconName: 'HeartPulse'
  },
  {
    id: 'neuro',
    name: 'Neurology & Spine Care',
    doctorName: 'Dr. David Kim, MD, PhD',
    qualification: 'Clinical Neurophysiologist & Spine Specialist',
    experienceYears: 14,
    chamberNumber: 'Chamber 108 (Wing A)',
    iconName: 'Brain'
  },
  {
    id: 'ortho',
    name: 'Orthopedics & Joint Replacement',
    doctorName: 'Dr. Sarah Jenkins, MD, FAAOS',
    qualification: 'Consultant Orthopedic & Arthroscopy Surgeon',
    experienceYears: 18,
    chamberNumber: 'Chamber 302 (Wing C)',
    iconName: 'Bone'
  },
  {
    id: 'pediatric',
    name: 'Pediatrics & Neonatal Care',
    doctorName: 'Dr. Emily Watson, MD, FAAP',
    qualification: 'Chief Pediatrician & Child Health Specialist',
    experienceYears: 12,
    chamberNumber: 'Chamber 104 (Child Wing)',
    iconName: 'Baby'
  },
  {
    id: 'onco',
    name: 'Oncology & Cancer Care',
    doctorName: 'Dr. Rajesh Patel, MD, FASCO',
    qualification: 'Senior Medical Oncologist',
    experienceYears: 20,
    chamberNumber: 'Chamber 401 (Oncology Center)',
    iconName: 'Activity'
  },
  {
    id: 'pulmo',
    name: 'Pulmonology & Respiratory Medicine',
    doctorName: 'Dr. Marcus Reed, MD, FCCP',
    qualification: 'Consultant Chest & Pulmonologist',
    experienceYears: 15,
    chamberNumber: 'Chamber 210 (Wing B)',
    iconName: 'Lungs'
  },
  {
    id: 'gastro',
    name: 'Gastroenterology & Liver Health',
    doctorName: 'Dr. Anita Desai, MD, FACG',
    qualification: 'Hepatologist & Endoscopist',
    experienceYears: 13,
    chamberNumber: 'Chamber 305 (Wing C)',
    iconName: 'Stethoscope'
  },
  {
    id: 'derma',
    name: 'Dermatology & Skin Care',
    doctorName: 'Dr. Laura Zhang, MD, FAAD',
    qualification: 'Consultant Dermatologist & Cosmetologist',
    experienceYears: 11,
    chamberNumber: 'Chamber 115 (Wing A)',
    iconName: 'Sparkles'
  }
];

const STORAGE_KEY_APTS = 'medflow_hospital_appointments_v7';

const DEFAULT_APPOINTMENTS: Appointment[] = [
  {
    id: 'apt-101',
    tokenNumber: 'TK-101',
    appointmentType: 'SPECIALIST_CONSULTATION',
    patientName: 'Robert Chen',
    patientPhone: '+1 (555) 234-8901',
    patientAge: 52,
    patientGender: 'Male',
    doctorName: 'Dr. Maya Lin, MD, FACC',
    department: 'Cardiology & Heart Health',
    qualification: 'Senior Interventional Cardiologist',
    date: 'Today',
    timeSlot: '10:00 AM',
    symptoms: 'Exertional chest tightness and shortness of breath on stairs',
    status: 'Checked In',
    prescription: 'Tab. Atorvastatin 20mg once daily at night. Tab. Metoprolol 25mg in morning. Repeat ECG next week.',
    createdAt: '1 hour ago'
  },
  {
    id: 'apt-102',
    tokenNumber: 'TK-102',
    appointmentType: 'GENERAL_OPD',
    patientName: 'Eleanor Vance',
    patientPhone: '+1 (555) 489-1120',
    patientAge: 64,
    patientGender: 'Female',
    doctorName: 'Hospital General OPD Physician',
    department: 'General Outpatient OPD',
    date: 'Today',
    timeSlot: '11:15 AM',
    symptoms: 'Routine blood pressure review & seasonal throat allergy',
    status: 'Waiting',
    createdAt: '40 mins ago'
  },
  {
    id: 'apt-103',
    tokenNumber: 'TK-103',
    appointmentType: 'SPECIALIST_CONSULTATION',
    patientName: 'David Miller',
    patientPhone: '+1 (555) 890-3341',
    patientAge: 38,
    patientGender: 'Male',
    doctorName: 'Dr. David Kim, MD, PhD',
    department: 'Neurology & Spine Care',
    qualification: 'Clinical Neurophysiologist',
    date: 'Today',
    timeSlot: '02:00 PM',
    symptoms: 'Severe unilateral cluster migraines with visual aura',
    status: 'Waiting',
    createdAt: '25 mins ago'
  }
];

const DEFAULT_ADMISSIONS: InpatientAdmitRecord[] = [
  { id: 'ADM-101', patientId: 'PT-90482', patientName: 'Robert Chen', age: 52, gender: 'Male', ward: 'Cardiac Step-Down', bedNumber: 'Bed 304-A', admitTime: '08:30 AM Today', diagnosis: 'Unstable Angina & High Troponin', attendingDoctor: 'Dr. Maya Lin', condition: 'Stable' },
  { id: 'ADM-102', patientId: 'PT-60291', patientName: 'Maria Gonzalez', age: 71, gender: 'Female', ward: 'ICU North', bedNumber: 'ICU Bed 04', admitTime: '09:15 AM Today', diagnosis: 'Acute STEMI & Left Ventricular Failure', attendingDoctor: 'Dr. Maya Lin', condition: 'Critical (ICU)' },
  { id: 'ADM-103', patientId: 'PT-77120', patientName: 'James Wilson', age: 48, gender: 'Male', ward: 'General Medicine', bedNumber: 'Bed 112', admitTime: '10:00 AM Today', diagnosis: 'Community Acquired Pneumonia', attendingDoctor: 'Dr. Arthur Sterling', condition: 'Under Observation' },
  { id: 'ADM-104', patientId: 'PT-88319', patientName: 'Eleanor Vance', age: 64, gender: 'Female', ward: 'Cardiac Step-Down', bedNumber: 'Bed 305-B', admitTime: '11:00 AM Today', diagnosis: 'Post-Stent Coronary Telemetry', attendingDoctor: 'Dr. Maya Lin', condition: 'Stable' }
];

const DEFAULT_DISCHARGES: DischargeRecord[] = [
  { id: 'DIS-201', patientId: 'PT-44019', patientName: 'Thomas Anderson', age: 59, ward: 'General Ward 2B', dischargeTime: '09:00 AM Today', doctorApproved: 'Dr. Arthur Sterling', summary: 'Full recovery from acute gastroenteritis and dehydration. Vitals normalized.' },
  { id: 'DIS-202', patientId: 'PT-55102', patientName: 'Karen White', age: 42, ward: 'Orthopedic Recovery', dischargeTime: '10:30 AM Today', doctorApproved: 'Dr. Sarah Jenkins', summary: 'Post-arthroscopic knee repair recovery successful. Physiotherapy chart issued.' },
  { id: 'DIS-203', patientId: 'PT-33910', patientName: 'Richard Roe', age: 67, ward: 'Cardiac Step-Down', dischargeTime: '11:45 AM Today', doctorApproved: 'Dr. Maya Lin', summary: 'Post-angioplasty 48-hour monitoring cleared. Cardiac rehab schedule provided.' }
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

  getSpecialistDomains: (): MedicalDomain[] => {
    return MEDICAL_DOMAINS;
  },

  bookGeneralAppointment: async (data: {
    patientName: string;
    patientAge: number;
    patientGender: 'Male' | 'Female' | 'Other';
    patientPhone: string;
    symptoms: string;
    timeSlot: string;
    date?: string;
  }): Promise<Appointment> => {
    const list = getApts();
    const token = `TK-${100 + list.length + 1}`;
    const newApt: Appointment = {
      id: `apt-${Date.now()}`,
      tokenNumber: token,
      appointmentType: 'GENERAL_OPD',
      patientName: data.patientName,
      patientPhone: data.patientPhone,
      patientAge: data.patientAge,
      patientGender: data.patientGender,
      doctorName: 'Hospital General OPD Duty Physician',
      department: 'General Medicine & OPD',
      date: data.date || 'Today',
      timeSlot: data.timeSlot,
      symptoms: data.symptoms,
      status: 'Waiting',
      createdAt: 'Just now'
    };
    saveApts([newApt, ...list]);
    return newApt;
  },

  bookSpecialistAppointment: async (data: {
    domainId: string;
    patientName: string;
    patientAge: number;
    patientGender: 'Male' | 'Female' | 'Other';
    patientPhone: string;
    symptoms: string;
    timeSlot: string;
    date?: string;
  }): Promise<Appointment> => {
    const list = getApts();
    const domain = MEDICAL_DOMAINS.find(d => d.id === data.domainId) || MEDICAL_DOMAINS[0];
    const token = `TK-${100 + list.length + 1}`;
    const newApt: Appointment = {
      id: `apt-${Date.now()}`,
      tokenNumber: token,
      appointmentType: 'SPECIALIST_CONSULTATION',
      patientName: data.patientName,
      patientPhone: data.patientPhone,
      patientAge: data.patientAge,
      patientGender: data.patientGender,
      doctorName: domain.doctorName,
      department: domain.name,
      qualification: domain.qualification,
      date: data.date || 'Today',
      timeSlot: data.timeSlot,
      symptoms: data.symptoms,
      status: 'Waiting',
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

  getMDStats: async (): Promise<MDStats> => {
    return {
      admittedTodayCount: DEFAULT_ADMISSIONS.length,
      dischargedTodayCount: DEFAULT_DISCHARGES.length,
      totalBeds: 450,
      occupiedBeds: 394,
      icuOccupancy: 88.5,
      doctorsOnDuty: 18,
      erWaitTimeMinutes: 12
    };
  }
};
