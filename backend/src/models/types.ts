export type UserRole = 'ADMIN' | 'DOCTOR' | 'NURSE' | 'PATIENT' | 'PHARMACIST' | 'LAB_TECH';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  passwordHash?: string;
  department?: string;
  specialty?: string;
  licenseNumber?: string;
  phone: string;
  avatarUrl?: string;
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
  mrn: string; // Medical Record Number
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: 'MALE' | 'FEMALE' | 'OTHER';
  bloodType: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
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

export type AppointmentStatus = 'SCHEDULED' | 'CHECKED_IN' | 'IN_CONSULTATION' | 'COMPLETED' | 'CANCELLED' | 'NO_SHOW';
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
  form: 'TABLET' | 'CAPSULE' | 'INJECTION' | 'SYRUP' | 'TOPICAL' | 'INHALER';
  strength: string;
  unit: string;
  stockQuantity: number;
  reorderThreshold: number;
  unitPrice: number;
  batchNumber: string;
  expiryDate: string;
  manufacturer: string;
}

export interface PrescriptionItem {
  medicationId: string;
  medicationName: string;
  dosage: string;
  frequency: string;
  route: string;
  durationDays: number;
  quantity: number;
  refillsAllowed: number;
  specialInstructions?: string;
}

export interface Prescription {
  id: string;
  patientId: string;
  patientName: string;
  doctorId: string;
  doctorName: string;
  issuedDate: string;
  status: 'PENDING' | 'DISPENSED' | 'CANCELLED';
  items: PrescriptionItem[];
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
  testCategory: 'HEMATOLOGY' | 'BIOCHEMISTRY' | 'MICROBIOLOGY' | 'RADIOLOGY' | 'PATHOLOGY';
  testName: string;
  cptCode: string;
  orderedAt: string;
  status: 'ORDERED' | 'SAMPLE_COLLECTED' | 'PROCESSING' | 'COMPLETED' | 'CANCELLED';
  specimenType?: string;
  collectedAt?: string;
  results?: Array<{
    parameter: string;
    value: string | number;
    unit: string;
    referenceRange: string;
    isAbnormal: boolean;
    flag?: 'NORMAL' | 'LOW' | 'HIGH' | 'CRITICAL';
  }>;
  clinicalNotes?: string;
  radiologyImageUrl?: string;
  completedAt?: string;
  technicianName?: string;
}

export interface Bed {
  id: string;
  wardId: string;
  wardName: string;
  wardType: 'ICU' | 'EMERGENCY' | 'GENERAL' | 'SURGICAL' | 'PEDIATRICS' | 'MATERNITY';
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
  shiftType: 'MORNING' | 'EVENING' | 'NIGHT' | 'ON_CALL';
  startTime: string;
  endTime: string;
  status: 'SCHEDULED' | 'ACTIVE' | 'COMPLETED' | 'ABSENT';
}

export interface InvoiceItem {
  description: string;
  code: string; // CPT or Pharmacy code
  category: 'CONSULTATION' | 'PHARMACY' | 'LAB' | 'ROOM_BED' | 'PROCEDURE';
  unitPrice: number;
  quantity: number;
  total: number;
}

export interface Invoice {
  id: string;
  invoiceNumber: string;
  patientId: string;
  patientName: string;
  issuedDate: string;
  dueDate: string;
  items: InvoiceItem[];
  subtotal: number;
  insuranceDiscount: number;
  patientCopay: number;
  amountPaid: number;
  balanceDue: number;
  status: 'DRAFT' | 'ISSUED' | 'PARTIALLY_PAID' | 'PAID' | 'INSURANCE_PENDING';
  insuranceClaimId?: string;
  paymentMethod?: 'CREDIT_CARD' | 'INSURANCE' | 'CASH' | 'ONLINE_TRANSFER';
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
  status: 'SUBMITTED' | 'UNDER_REVIEW' | 'APPROVED' | 'REJECTED' | 'PAID';
  submittedDate: string;
  adjudicatedDate?: string;
  rejectionReason?: string;
}

export interface HipaaAuditLog {
  id: string;
  timestamp: string;
  userId: string;
  userName: string;
  userRole: UserRole;
  action: 'LOGIN' | 'LOGOUT' | 'VIEW_PATIENT_RECORD' | 'UPDATE_PATIENT_RECORD' | 'CREATE_SOAP_NOTE' | 'ISSUE_PRESCRIPTION' | 'DISPENSE_MEDICATION' | 'VIEW_LAB_RESULTS' | 'GENERATE_INVOICE' | 'EXPORT_DATA';
  patientId?: string;
  patientName?: string;
  resourcePath: string;
  ipAddress: string;
  userAgent: string;
  status: 'SUCCESS' | 'DENIED' | 'ERROR';
  details?: string;
}

export interface TriageAssessment {
  id: string;
  patientId?: string;
  symptoms: string[];
  duration: string;
  severityScore: number; // 1 to 10
  hasRedFlags: boolean;
  triageColor: 'GREEN' | 'YELLOW' | 'ORANGE' | 'RED';
  recommendedAction: string;
  suggestedSpecialty: string;
  summary: string;
  createdAt: string;
}
