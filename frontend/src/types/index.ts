export type UserRole = 'ADMIN' | 'DOCTOR' | 'NURSE' | 'PATIENT' | 'PHARMACIST' | 'LAB_TECH';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  department?: string;
  specialty?: string;
  phone: string;
}

export interface VitalSign {
  id: string;
  patientId: string;
  recordedAt: string;
  bloodPressureSystolic: number;
  bloodPressureDiastolic: number;
  heartRateBpm: number;
  temperatureCelsius: number;
  oxygenSaturationPercent: number;
}

export interface Allergy {
  id: string;
  substance: string;
  category: string;
  severity: string;
  reaction: string;
}

export interface MedicalCondition {
  id: string;
  icd10Code: string;
  conditionName: string;
  diagnosedDate: string;
  diagnosedBy: string;
}

export interface Patient {
  id: string;
  mrn: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: string;
  bloodType: string;
  phone: string;
  email: string;
  address: string;
  insurance: { provider: string; policyNumber: string };
  allergies: Allergy[];
  conditions: MedicalCondition[];
  recentVitals: VitalSign[];
}

export interface Appointment {
  id: string;
  patientId: string;
  patientName: string;
  doctorId: string;
  doctorName: string;
  specialty: string;
  scheduledTime: string;
  durationMinutes: number;
  type: string;
  status: string;
  reasonForVisit: string;
  triageUrgency: string;
}

export interface Medication {
  id: string;
  code: string;
  name: string;
  category: string;
  strength: string;
  stockQuantity: number;
  expiryDate: string;
}

export interface Prescription {
  id: string;
  patientName: string;
  doctorName: string;
  issuedDate: string;
  status: string;
  items: Array<{ medicationName: string; dosage: string; quantity: number }>;
}

export interface LabOrder {
  id: string;
  orderNumber: string;
  patientName: string;
  doctorName: string;
  testName: string;
  status: string;
  results?: Array<{ parameter: string; value: any; unit: string; referenceRange: string; flag?: string }>;
}

export interface Bed {
  id: string;
  wardName: string;
  bedNumber: string;
  isOccupied: boolean;
  currentPatientName?: string;
  dailyRate: number;
}

export interface Invoice {
  id: string;
  invoiceNumber: string;
  patientName: string;
  issuedDate: string;
  subtotal: number;
  patientCopay: number;
  status: string;
}

export interface HipaaAuditLog {
  id: string;
  timestamp: string;
  userName: string;
  userRole: UserRole;
  action: string;
  resourcePath: string;
  ipAddress: string;
  status: string;
}

export interface TriageAssessment {
  id: string;
  symptoms: string[];
  duration: string;
  severityScore: number;
  triageColor: string;
  recommendedAction: string;
  suggestedSpecialty: string;
  summary: string;
}
