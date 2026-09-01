export type UserPersona = 'HOSPITAL_HEAD' | 'DOCTOR_PHYSICIAN' | 'APPOINTMENT_DESK' | 'PATIENT_USER';

export type AppointmentStatus = 'CONFIRMED' | 'CHECKED_IN' | 'IN_CONSULTATION' | 'COMPLETED' | 'CANCELLED';

export interface HospitalUser {
  id: string;
  name: string;
  email: string;
  persona: UserPersona;
  role: string;
  department: string;
  initials: string;
}

export interface PatientAppointment {
  id: string;
  tokenNumber: string;
  patientId: string;
  patientName: string;
  patientEmail: string;
  patientPhone: string;
  patientAge: number;
  patientGender: 'Male' | 'Female' | 'Other';
  department: string;
  doctorName: string;
  doctorSpecialty: string;
  roomNumber: string;
  appointmentDate: string;
  slotTime: string;
  symptoms: string;
  status: AppointmentStatus;
  insuranceProvider: string;
  policyNumber: string;
  feeAmountUsd: number;
  isPaid: boolean;
  createdAt: string;
}

export interface InpatientRecord {
  id: string;
  patientId: string;
  name: string;
  age: number;
  gender: string;
  roomNumber: string;
  bedNumber: string;
  bedType: 'ICU' | 'CARDIAC_CARE' | 'SEMI_PRIVATE' | 'GENERAL_WARD';
  admissionDate: string;
  primaryDiagnosis: string;
  attendingDoctor: string;
  vitals: {
    heartRateBpm: number;
    bloodPressure: string;
    spo2Percent: number;
    temperatureF: number;
    respiratoryRate: number;
  };
  labBiomarkers: {
    troponinNgMl: number;
    creatinineMgDl: number;
    wbcCountK: number;
    glucoseMgDl: number;
  };
  status: 'STABLE' | 'OBSERVATION' | 'CRITICAL' | 'READY_FOR_DISCHARGE';
}

export interface PrescriptionOrder {
  id: string;
  patientName: string;
  doctorName: string;
  medicationName: string;
  dosage: string;
  frequency: string;
  durationDays: number;
  timing: string;
  instructions: string;
  prescribedDate: string;
  refillsLeft: number;
}

export interface LabDiagnosticReport {
  id: string;
  reportName: string;
  patientName: string;
  orderedBy: string;
  category: string;
  resultSummary: string;
  status: 'COMPLETED' | 'PENDING_LAB_REVIEW';
  testDate: string;
  downloadUrl: string;
}

export interface HospitalBillingInvoice {
  id: string;
  invoiceNumber: string;
  patientName: string;
  totalAmountUsd: number;
  insuranceCoveredUsd: number;
  patientCoPayUsd: number;
  status: 'PAID' | 'INSURANCE_CLAIM_PENDING' | 'OVERDUE';
  serviceDate: string;
}

export interface HospitalExecutiveMetric {
  totalBeds: number;
  occupiedBeds: number;
  icuOccupancyPercent: number;
  erWaitTimeMinutes: number;
  activeSurgeries: number;
  todayConsultationsCount: number;
  doctorShiftCoveragePercent: number;
  insuranceClaimAcceptanceRate: number;
  dailyRevenueUsd: number;
}
