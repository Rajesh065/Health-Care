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
  createdAt: string;
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
  createdAt: string;
}

export type AppointmentStatus = 'SCHEDULED' | 'CHECKED_IN' | 'IN_CONSULTATION' | 'COMPLETED' | 'CANCELLED';
export type AppointmentType = 'IN_PERSON' | 'TELEHEALTH' | 'EMERGENCY' | 'FOLLOW_UP';

export interface Appointment {
  id: string;
  patientId: string;
  patientName: string;
  doctorId: string;
  doctorName: string;
  specialty: string;
  scheduledTime: string;
  durationMinutes: number;
  type: AppointmentType;
  status: AppointmentStatus;
  reasonForVisit: string;
  roomNumber?: string;
  telehealthMeetingUrl?: string;
  telehealthSessionId?: string;
  triageUrgency: 'GREEN' | 'YELLOW' | 'ORANGE' | 'RED';
  notes?: string;
  createdAt: string;
}

export interface SoapNote {
  id: string;
  appointmentId?: string;
  patientId: string;
  doctorId: string;
  doctorName: string;
  createdAt: string;
  updatedAt: string;
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
    primaryDiagnosis: {
      icd10Code: string;
      description: string;
    };
    secondaryDiagnoses: Array<{
      icd10Code: string;
      description: string;
    }>;
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
  signedAt?: string;
}

export interface Medication {
  id: string;
  code: string;
  name: string;
  genericName: string;
  category: string;
  form: string;
  strength: string;
  unit: string;
  stockQuantity: number;
  reorderThreshold: number;
  unitPrice: number;
  batchNumber: string;
  expiryDate: string;
  manufacturer: string;
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
    durationDays: number;
    quantity: number;
    refillsAllowed: number;
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
  doctorId: string;
  doctorName: string;
  testCategory: string;
  testName: string;
  cptCode: string;
  orderedAt: string;
  status: 'ORDERED' | 'SAMPLE_COLLECTED' | 'PROCESSING' | 'COMPLETED';
  specimenType?: string;
  results?: Array<{
    parameter: string;
    value: string | number;
    unit: string;
    referenceRange: string;
    isAbnormal: boolean;
    flag?: 'NORMAL' | 'LOW' | 'HIGH' | 'CRITICAL';
  }>;
  completedAt?: string;
  technicianName?: string;
}

export interface Bed {
  id: string;
  wardId: string;
  wardName: string;
  wardType: 'ICU' | 'EMERGENCY' | 'GENERAL' | 'SURGICAL';
  bedNumber: string;
  isOccupied: boolean;
  currentPatientId?: string;
  currentPatientName?: string;
  dailyRate: number;
}

export interface StaffShift {
  id: string;
  staffId: string;
  staffName: string;
  role: UserRole;
  department: string;
  date: string;
  shiftType: string;
  startTime: string;
  endTime: string;
  status: string;
}

export interface Invoice {
  id: string;
  invoiceNumber: string;
  patientId: string;
  patientName: string;
  issuedDate: string;
  dueDate: string;
  items: Array<{
    description: string;
    code: string;
    category: string;
    unitPrice: number;
    quantity: number;
    total: number;
  }>;
  subtotal: number;
  insuranceDiscount: number;
  patientCopay: number;
  amountPaid: number;
  balanceDue: number;
  status: 'PAID' | 'ISSUED' | 'INSURANCE_PENDING';
  paymentMethod?: string;
}

export interface InsuranceClaim {
  id: string;
  claimNumber: string;
  invoiceId: string;
  patientId: string;
  patientName: string;
  insuranceProvider: string;
  policyNumber: string;
  claimedAmount: number;
  approvedAmount?: number;
  status: string;
  submittedDate: string;
}

export interface HipaaAuditLog {
  id: string;
  timestamp: string;
  userId: string;
  userName: string;
  userRole: UserRole;
  action: string;
  patientId?: string;
  patientName?: string;
  resourcePath: string;
  ipAddress: string;
  userAgent: string;
  status: string;
  details?: string;
}

export interface TriageAssessment {
  id: string;
  patientId?: string;
  symptoms: string[];
  duration: string;
  severityScore: number;
  hasRedFlags: boolean;
  triageColor: 'GREEN' | 'YELLOW' | 'ORANGE' | 'RED';
  recommendedAction: string;
  suggestedSpecialty: string;
  summary: string;
  createdAt: string;
}
