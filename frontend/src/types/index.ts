export type UserRole = 'ADMIN' | 'DOCTOR' | 'NURSE' | 'PATIENT' | 'PHARMACIST' | 'LAB_TECH';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  department?: string;
  specialty?: string;
  licenseNumber?: string;
  phone: string;
}

export interface VitalSign {
  id: string;
  patientId: string;
  recordedAt: string;
  recordedBy: string;
  bloodPressureSystolic: number;
  bloodPressureDiastolic: number;
  heartRateBpm: number;
  respiratoryRateBpm: number;
  temperatureCelsius: number;
  oxygenSaturationPercent: number;
  bloodGlucoseMgDl?: number;
  weightKg?: number;
  heightCm?: number;
  bmi?: number;
}

export interface Allergy {
  id: string;
  substance: string;
  category: 'MEDICATION' | 'FOOD' | 'ENVIRONMENTAL' | 'OTHER';
  severity: 'MILD' | 'MODERATE' | 'SEVERE' | 'LIFE_THREATENING';
  reaction: string;
  diagnosedDate: string;
}

export interface MedicalCondition {
  id: string;
  icd10Code: string;
  conditionName: string;
  status: 'ACTIVE' | 'RESOLVED' | 'REMISSION';
  diagnosedDate: string;
  diagnosedBy: string;
}

export interface Patient {
  id: string;
  mrn: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: 'MALE' | 'FEMALE' | 'OTHER';
  bloodType: string;
  phone: string;
  email: string;
  address: string;
  emergencyContact: {
    name: string;
    relationship: string;
    phone: string;
  };
  insurance: {
    provider: string;
    policyNumber: string;
    groupNumber: string;
    copayAmount: number;
    status: 'ACTIVE' | 'PENDING' | 'EXPIRED';
  };
  allergies: Allergy[];
  conditions: MedicalCondition[];
  recentVitals: VitalSign[];
  assignedDoctorId?: string;
  currentWardId?: string;
  currentBedNumber?: string;
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
  type: 'IN_PERSON' | 'TELEHEALTH' | 'EMERGENCY' | 'FOLLOW_UP';
  status: 'SCHEDULED' | 'CHECKED_IN' | 'IN_CONSULTATION' | 'COMPLETED' | 'CANCELLED';
  reasonForVisit: string;
  roomNumber?: string;
  telehealthMeetingUrl?: string;
  telehealthSessionId?: string;
  triageUrgency: 'GREEN' | 'YELLOW' | 'ORANGE' | 'RED';
  notes?: string;
}

export interface SoapNote {
  id: string;
  appointmentId?: string;
  patientId: string;
  doctorId: string;
  doctorName: string;
  createdAt: string;
  subjective: {
    chiefComplaint: string;
    historyOfPresentIllness: string;
    reviewOfSystems: string;
  };
  objective: {
    physicalExam: string;
    vitalsSummary: string;
    labSummary?: string;
  };
  assessment: {
    primaryDiagnosis: { icd10Code: string; description: string };
    secondaryDiagnoses: Array<{ icd10Code: string; description: string }>;
    clinicalImpression: string;
  };
  plan: {
    treatments: string;
    medicationsPrescribed: string[];
    labOrdersRequested: string[];
    followUpInstructions: string;
    followUpWeeks?: number;
  };
  isSigned: boolean;
}

export interface Medication {
  id: string;
  code: string;
  name: string;
  genericName: string;
  category: string;
  form: string;
  strength: string;
  stockQuantity: number;
  unitPrice: number;
  expiryDate: string;
}

export interface Prescription {
  id: string;
  patientId: string;
  patientName: string;
  doctorId: string;
  doctorName: string;
  issuedDate: string;
  status: 'PENDING' | 'DISPENSED' | 'CANCELLED';
  items: Array<{
    medicationId: string;
    medicationName: string;
    dosage: string;
    frequency: string;
    route: string;
    quantity: number;
  }>;
  dispensedBy?: string;
  dispensedDate?: string;
  totalCost: number;
}

export interface LabOrder {
  id: string;
  orderNumber: string;
  patientId: string;
  patientName: string;
  doctorName: string;
  testCategory: string;
  testName: string;
  cptCode: string;
  orderedAt: string;
  status: 'ORDERED' | 'SAMPLE_COLLECTED' | 'PROCESSING' | 'COMPLETED';
  results?: Array<{
    parameter: string;
    value: string | number;
    unit: string;
    referenceRange: string;
    isAbnormal: boolean;
    flag?: 'NORMAL' | 'LOW' | 'HIGH' | 'CRITICAL';
  }>;
}

export interface Bed {
  id: string;
  wardName: string;
  wardType: string;
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
  insuranceDiscount: number;
  patientCopay: number;
  balanceDue: number;
  status: 'PAID' | 'ISSUED' | 'INSURANCE_PENDING';
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
  details?: string;
}

export interface TriageAssessment {
  id: string;
  symptoms: string[];
  duration: string;
  severityScore: number;
  hasRedFlags: boolean;
  triageColor: 'GREEN' | 'YELLOW' | 'ORANGE' | 'RED';
  recommendedAction: string;
  suggestedSpecialty: string;
  summary: string;
}
