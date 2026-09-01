export type UserPersona = 'DIRECTOR' | 'DOCTOR' | 'RECEPTIONIST' | 'PATIENT';

export interface HospitalUser {
  id: string;
  name: string;
  email: string;
  persona: UserPersona;
  role: string;
  department: string;
}

export interface Appointment {
  id: string;
  tokenNumber: string;
  patientName: string;
  patientPhone: string;
  patientAge: number;
  doctorName: string;
  department: string;
  date: string;
  timeSlot: string;
  symptoms: string;
  status: 'Waiting' | 'Checked In' | 'Completed';
  prescription?: string;
  fee: number;
  createdAt: string;
}
