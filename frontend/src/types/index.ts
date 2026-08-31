export interface PatientVitals {
  bloodPressure: string;
  heartRateBpm: number;
  respiratoryRate: number;
  oxygenSaturationPct: number;
  bodyTemperatureF: number;
  bmi: number;
  lastRecordedAt: string;
}

export interface PatientMedication {
  drugName: string;
  dosage: string;
  frequency: string;
  prescribingDoctor: string;
  startDate: string;
  status: 'ACTIVE' | 'DISCONTINUED';
}

export interface Patient {
  id: string;
  mrn: string;
  fullName: string;
  dateOfBirth: string;
  age: number;
  gender: 'MALE' | 'FEMALE' | 'OTHER';
  bloodGroup: string;
  roomNumber: string;
  department: string;
  primaryCondition: string;
  icd10Code: string;
  assignedDoctor: string;
  status: 'INPATIENT_ADMITTED' | 'OUTPATIENT' | 'ICU_CRITICAL' | 'DISCHARGED';
  allergies: string[];
  vitals: PatientVitals;
  medications: PatientMedication[];
  emergencyContact: {
    name: string;
    relationship: string;
    phone: string;
  };
}

export interface Appointment {
  id: string;
  patientId: string;
  patientName: string;
  mrn: string;
  doctorName: string;
  department: string;
  scheduledTime: string;
  durationMinutes: number;
  visitReason: string;
  type: 'IN_PERSON' | 'TELEHEALTH_VIDEO' | 'EMERGENCY_TRIAGE';
  status: 'CONFIRMED' | 'IN_WAITING_ROOM' | 'IN_CONSULT' | 'COMPLETED' | 'CANCELLED';
  roomNumber?: string;
}

export interface ClinicalNote {
  id: string;
  patientId: string;
  patientName: string;
  mrn: string;
  authorDoctor: string;
  department: string;
  timestamp: string;
  noteType: 'SOAP_PROGRESS_NOTE' | 'CONSULTATION' | 'DISCHARGE_SUMMARY';
  subjective: string;
  objective: string;
  assessment: string;
  plan: string;
  isSigned: boolean;
}
