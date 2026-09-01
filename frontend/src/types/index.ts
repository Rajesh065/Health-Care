export type UserPersona = 'MD' | 'RECEPTIONIST' | 'PATIENT';

export type AppointmentStatus = 'Waiting' | 'Checked In' | 'Completed' | 'Rejected';

export type AppointmentType = 'GENERAL_OPD' | 'SPECIALIST_CONSULTATION';

export interface MedicalDomain {
  id: string;
  name: string;
  doctorName: string;
  qualification: string;
  experienceYears: number;
  chamberNumber: string;
  iconName: string;
}

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
  appointmentType: AppointmentType;
  patientName: string;
  patientPhone: string;
  patientAge: number;
  patientGender: 'Male' | 'Female' | 'Other';
  doctorName: string;
  department: string;
  qualification?: string;
  date: string;
  timeSlot: string;
  symptoms: string;
  status: AppointmentStatus;
  rejectionReason?: string;
  prescription?: string;
  createdAt: string;
}

export interface InpatientAdmitRecord {
  id: string;
  patientId: string;
  patientName: string;
  age: number;
  gender: string;
  ward: string;
  bedNumber: string;
  admitTime: string;
  diagnosis: string;
  attendingDoctor: string;
  condition: 'Stable' | 'Critical (ICU)' | 'Under Observation';
}

export interface DischargeRecord {
  id: string;
  patientId: string;
  patientName: string;
  age: number;
  ward: string;
  dischargeTime: string;
  doctorApproved: string;
  summary: string;
}

export interface MDStats {
  admittedTodayCount: number;
  dischargedTodayCount: number;
  totalBeds: number;
  occupiedBeds: number;
  icuOccupancy: number;
  doctorsOnDuty: number;
  erWaitTimeMinutes: number;
}
