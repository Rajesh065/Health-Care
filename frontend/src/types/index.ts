export type UserPersona = 'DIRECTOR' | 'DOCTOR' | 'RECEPTIONIST' | 'PATIENT';

export type AppointmentStatus = 'Waiting' | 'Checked In' | 'Completed' | 'Rejected';

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
  patientGender: 'Male' | 'Female' | 'Other';
  doctorName: string;
  department: string;
  date: string;
  timeSlot: string;
  symptoms: string;
  status: AppointmentStatus;
  rejectionReason?: string;
  prescription?: string;
  fee: number;
  isPaid: boolean;
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
  totalBillPaidUsd: number;
  summary: string;
}

export interface DirectorStats {
  admittedTodayCount: number;
  dischargedTodayCount: number;
  totalBeds: number;
  occupiedBeds: number;
  icuOccupancy: number;
  todayRevenueUsd: number;
  revenueBreakdown: {
    opdConsultations: number;
    inpatientWards: number;
    pharmacy: number;
    laboratoryDiagnostics: number;
  };
  doctorsOnDuty: number;
  erWaitTimeMinutes: number;
}
