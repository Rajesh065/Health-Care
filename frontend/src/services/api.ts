import {
  PatientAppointment,
  InpatientRecord,
  PrescriptionOrder,
  LabDiagnosticReport,
  HospitalBillingInvoice,
  HospitalExecutiveMetric
} from '../types';

const STORAGE_KEY_APPS = 'medflow_hospital_appointments_v3';
const STORAGE_KEY_INPATIENTS = 'medflow_hospital_inpatients_v3';
const STORAGE_KEY_PRESCRIPTIONS = 'medflow_hospital_prescriptions_v3';
const STORAGE_KEY_INVOICES = 'medflow_hospital_invoices_v3';

const DEFAULT_APPOINTMENTS: PatientAppointment[] = [
  {
    id: 'app-001',
    tokenNumber: 'TK-101',
    patientId: 'PT-90482',
    patientName: 'Robert Chen',
    patientEmail: 'robert.chen@gmail.com',
    patientPhone: '+1 (555) 234-8901',
    patientAge: 52,
    patientGender: 'Male',
    department: 'Cardiology & Heart Health',
    doctorName: 'Dr. Maya Lin, MD, FACC',
    doctorSpecialty: 'Interventional Cardiology',
    roomNumber: 'Chamber 204',
    appointmentDate: 'Today (Sept 01, 2026)',
    slotTime: '10:30 AM',
    symptoms: 'Exertional chest tightness, shortness of breath on stairs, hypertensive history',
    status: 'CONFIRMED',
    insuranceProvider: 'BlueCross BlueShield Premier',
    policyNumber: 'BCBS-9048-2810',
    feeAmountUsd: 150,
    isPaid: true,
    createdAt: '1 hour ago'
  },
  {
    id: 'app-002',
    tokenNumber: 'TK-102',
    patientId: 'PT-88319',
    patientName: 'Eleanor Vance',
    patientEmail: 'eleanor.v@acmeglobal.com',
    patientPhone: '+1 (555) 489-1120',
    patientAge: 64,
    patientGender: 'Female',
    department: 'Cardiology & Heart Health',
    doctorName: 'Dr. Maya Lin, MD, FACC',
    doctorSpecialty: 'Interventional Cardiology',
    roomNumber: 'Chamber 204',
    appointmentDate: 'Today (Sept 01, 2026)',
    slotTime: '11:15 AM',
    symptoms: 'Post-coronary stenting 6-month routine angiography follow-up and lipid evaluation',
    status: 'CHECKED_IN',
    insuranceProvider: 'Aetna Choice POS II',
    policyNumber: 'AET-4491-0021',
    feeAmountUsd: 150,
    isPaid: true,
    createdAt: '45 minutes ago'
  },
  {
    id: 'app-003',
    tokenNumber: 'TK-103',
    patientId: 'PT-71044',
    patientName: 'David Miller',
    patientEmail: 'david.miller@techscale.io',
    patientPhone: '+1 (555) 890-3341',
    patientAge: 38,
    patientGender: 'Male',
    department: 'Neurology & Spine Care',
    doctorName: 'Dr. David Kim, MD, PhD',
    doctorSpecialty: 'Clinical Neurophysiology',
    roomNumber: 'Chamber 108',
    appointmentDate: 'Today (Sept 01, 2026)',
    slotTime: '02:00 PM',
    symptoms: 'Severe unilateral cluster migraines with visual auras, refractory to sumatriptan',
    status: 'CONFIRMED',
    insuranceProvider: 'UnitedHealthcare Commercial',
    policyNumber: 'UHC-8891-5509',
    feeAmountUsd: 175,
    isPaid: false,
    createdAt: '2 hours ago'
  }
];

const DEFAULT_INPATIENTS: InpatientRecord[] = [
  {
    id: 'inp-001',
    patientId: 'PT-90482',
    name: 'Robert Chen',
    age: 52,
    gender: 'Male',
    roomNumber: 'Ward 3B',
    bedNumber: 'Bed 304-A',
    bedType: 'CARDIAC_CARE',
    admissionDate: 'Aug 30, 2026',
    primaryDiagnosis: 'Unstable Angina & Moderate Aortic Stenosis (ICD-10 I20.0)',
    attendingDoctor: 'Dr. Maya Lin, MD, FACC',
    vitals: {
      heartRateBpm: 76,
      bloodPressure: '128/82 mmHg',
      spo2Percent: 98,
      temperatureF: 98.6,
      respiratoryRate: 16
    },
    labBiomarkers: {
      troponinNgMl: 0.02,
      creatinineMgDl: 1.05,
      wbcCountK: 7.2,
      glucoseMgDl: 104
    },
    status: 'STABLE'
  },
  {
    id: 'inp-002',
    patientId: 'PT-60291',
    name: 'Maria Gonzalez',
    age: 71,
    gender: 'Female',
    roomNumber: 'ICU-North',
    bedNumber: 'ICU Bed 04',
    bedType: 'ICU',
    admissionDate: 'Aug 31, 2026',
    primaryDiagnosis: 'Acute Coronary Syndrome & Left Ventricular Failure (ICD-10 I21.0)',
    attendingDoctor: 'Dr. Maya Lin, MD, FACC',
    vitals: {
      heartRateBpm: 94,
      bloodPressure: '142/90 mmHg',
      spo2Percent: 94,
      temperatureF: 99.1,
      respiratoryRate: 20
    },
    labBiomarkers: {
      troponinNgMl: 1.85,
      creatinineMgDl: 1.45,
      wbcCountK: 12.4,
      glucoseMgDl: 168
    },
    status: 'CRITICAL'
  }
];

const DEFAULT_PRESCRIPTIONS: PrescriptionOrder[] = [
  {
    id: 'rx-001',
    patientName: 'Robert Chen',
    doctorName: 'Dr. Maya Lin, MD, FACC',
    medicationName: 'Atorvastatin Calcium',
    dosage: '40 mg Tablet',
    frequency: 'Once Daily (Night)',
    durationDays: 90,
    timing: 'Take with or without food after dinner',
    instructions: 'Monitor lipid panel every 3 months',
    prescribedDate: 'Aug 30, 2026',
    refillsLeft: 3
  },
  {
    id: 'rx-002',
    patientName: 'Robert Chen',
    doctorName: 'Dr. Maya Lin, MD, FACC',
    medicationName: 'Metoprolol Succinate ER',
    dosage: '50 mg 24hr Extended Release',
    frequency: 'Once Daily (Morning)',
    durationDays: 90,
    timing: 'Take with breakfast',
    instructions: 'Check pulse before taking',
    prescribedDate: 'Aug 30, 2026',
    refillsLeft: 3
  },
  {
    id: 'rx-003',
    patientName: 'Robert Chen',
    doctorName: 'Dr. Maya Lin, MD, FACC',
    medicationName: 'Aspirin (Enteric Coated)',
    dosage: '81 mg Daily Low-Dose',
    frequency: 'Once Daily (Morning)',
    durationDays: 180,
    timing: 'Take after food',
    instructions: 'Cardioprotective anti-platelet',
    prescribedDate: 'Aug 30, 2026',
    refillsLeft: 5
  }
];

const DEFAULT_LAB_REPORTS: LabDiagnosticReport[] = [
  {
    id: 'rep-001',
    reportName: '12-Lead Electrocardiogram (ECG) Analysis',
    patientName: 'Robert Chen',
    orderedBy: 'Dr. Maya Lin, MD',
    category: 'Cardiology Telemetry',
    resultSummary: 'Normal Sinus Rhythm at 74 bpm. Mild non-specific T-wave flattening in lead V5-V6.',
    status: 'COMPLETED',
    testDate: 'Aug 31, 2026',
    downloadUrl: '#'
  },
  {
    id: 'rep-002',
    reportName: 'Comprehensive Lipid & Apolipoprotein Panel',
    patientName: 'Robert Chen',
    orderedBy: 'Dr. Maya Lin, MD',
    category: 'Clinical Biochemistry',
    resultSummary: 'Total Cholesterol: 182 mg/dL, LDL-C: 94 mg/dL (On Statin), HDL: 48 mg/dL, Triglycerides: 140 mg/dL.',
    status: 'COMPLETED',
    testDate: 'Aug 30, 2026',
    downloadUrl: '#'
  },
  {
    id: 'rep-003',
    reportName: 'Transthoracic Echocardiogram (2D Echo with Doppler)',
    patientName: 'Robert Chen',
    orderedBy: 'Dr. Maya Lin, MD',
    category: 'Imaging & Ultrasound',
    resultSummary: 'Preserved Left Ventricular Ejection Fraction (LVEF 58%). Mild concentric LV hypertrophy.',
    status: 'COMPLETED',
    testDate: 'Aug 30, 2026',
    downloadUrl: '#'
  }
];

const DEFAULT_INVOICES: HospitalBillingInvoice[] = [
  {
    id: 'inv-101',
    invoiceNumber: 'INV-2026-9048',
    patientName: 'Robert Chen',
    totalAmountUsd: 1450.00,
    insuranceCoveredUsd: 1250.00,
    patientCoPayUsd: 200.00,
    status: 'PAID',
    serviceDate: 'Aug 30, 2026'
  },
  {
    id: 'inv-102',
    invoiceNumber: 'INV-2026-9112',
    patientName: 'Robert Chen',
    totalAmountUsd: 150.00,
    insuranceCoveredUsd: 120.00,
    patientCoPayUsd: 30.00,
    status: 'PAID',
    serviceDate: 'Sept 01, 2026 (Today)'
  }
];

function getStoredAppointments(): PatientAppointment[] {
  const saved = localStorage.getItem(STORAGE_KEY_APPS);
  if (saved) {
    try { return JSON.parse(saved); } catch (e) {}
  }
  localStorage.setItem(STORAGE_KEY_APPS, JSON.stringify(DEFAULT_APPOINTMENTS));
  return DEFAULT_APPOINTMENTS;
}

function saveStoredAppointments(apps: PatientAppointment[]) {
  localStorage.setItem(STORAGE_KEY_APPS, JSON.stringify(apps));
  window.dispatchEvent(new Event('medflow_data_updated'));
}

function getStoredInpatients(): InpatientRecord[] {
  const saved = localStorage.getItem(STORAGE_KEY_INPATIENTS);
  if (saved) {
    try { return JSON.parse(saved); } catch (e) {}
  }
  localStorage.setItem(STORAGE_KEY_INPATIENTS, JSON.stringify(DEFAULT_INPATIENTS));
  return DEFAULT_INPATIENTS;
}

function getStoredPrescriptions(): PrescriptionOrder[] {
  const saved = localStorage.getItem(STORAGE_KEY_PRESCRIPTIONS);
  if (saved) {
    try { return JSON.parse(saved); } catch (e) {}
  }
  localStorage.setItem(STORAGE_KEY_PRESCRIPTIONS, JSON.stringify(DEFAULT_PRESCRIPTIONS));
  return DEFAULT_PRESCRIPTIONS;
}

function saveStoredPrescriptions(rxs: PrescriptionOrder[]) {
  localStorage.setItem(STORAGE_KEY_PRESCRIPTIONS, JSON.stringify(rxs));
  window.dispatchEvent(new Event('medflow_data_updated'));
}

export const api = {
  getAppointments: async (): Promise<PatientAppointment[]> => {
    return getStoredAppointments();
  },

  bookAppointment: async (data: Partial<PatientAppointment>): Promise<PatientAppointment> => {
    const list = getStoredAppointments();
    const nextToken = 100 + list.length + 1;
    const newApp: PatientAppointment = {
      id: `app-${Date.now()}`,
      tokenNumber: `TK-${nextToken}`,
      patientId: data.patientId || `PT-${Math.floor(10000 + Math.random() * 90000)}`,
      patientName: data.patientName || 'Robert Chen',
      patientEmail: data.patientEmail || 'robert.chen@gmail.com',
      patientPhone: data.patientPhone || '+1 (555) 234-8901',
      patientAge: data.patientAge || 52,
      patientGender: data.patientGender || 'Male',
      department: data.department || 'Cardiology & Heart Health',
      doctorName: data.doctorName || 'Dr. Maya Lin, MD, FACC',
      doctorSpecialty: data.doctorSpecialty || 'Cardiology',
      roomNumber: data.roomNumber || 'Chamber 204',
      appointmentDate: data.appointmentDate || 'Today (Sept 01, 2026)',
      slotTime: data.slotTime || '10:30 AM',
      symptoms: data.symptoms || 'General Specialist Consultation',
      status: 'CONFIRMED',
      insuranceProvider: data.insuranceProvider || 'BlueCross BlueShield Premier',
      policyNumber: data.policyNumber || 'BCBS-9048-2810',
      feeAmountUsd: 150,
      isPaid: true,
      createdAt: 'Just now'
    };

    const updated = [newApp, ...list];
    saveStoredAppointments(updated);
    return newApp;
  },

  updateAppointmentStatus: async (id: string, status: PatientAppointment['status']): Promise<void> => {
    const list = getStoredAppointments();
    const updated = list.map(a => a.id === id ? { ...a, status } : a);
    saveStoredAppointments(updated);
  },

  getInpatients: async (): Promise<InpatientRecord[]> => {
    return getStoredInpatients();
  },

  getPrescriptions: async (): Promise<PrescriptionOrder[]> => {
    return getStoredPrescriptions();
  },

  createPrescription: async (data: Partial<PrescriptionOrder>): Promise<PrescriptionOrder> => {
    const list = getStoredPrescriptions();
    const newRx: PrescriptionOrder = {
      id: `rx-${Date.now()}`,
      patientName: data.patientName || 'Robert Chen',
      doctorName: data.doctorName || 'Dr. Maya Lin, MD, FACC',
      medicationName: data.medicationName || 'Medication Order',
      dosage: data.dosage || '10 mg Daily',
      frequency: data.frequency || 'Once Daily',
      durationDays: data.durationDays || 30,
      timing: data.timing || 'Take with food',
      instructions: data.instructions || 'Cardioprotective therapy',
      prescribedDate: 'Today (Just now)',
      refillsLeft: data.refillsLeft ?? 3
    };
    const updated = [newRx, ...list];
    saveStoredPrescriptions(updated);
    return newRx;
  },

  getLabReports: async (): Promise<LabDiagnosticReport[]> => {
    return DEFAULT_LAB_REPORTS;
  },

  getInvoices: async (): Promise<HospitalBillingInvoice[]> => {
    return DEFAULT_INVOICES;
  },

  getExecutiveMetrics: async (): Promise<HospitalExecutiveMetric> => {
    const apps = getStoredAppointments();
    return {
      totalBeds: 450,
      occupiedBeds: 394,
      icuOccupancyPercent: 88.5,
      erWaitTimeMinutes: 14,
      activeSurgeries: 8,
      todayConsultationsCount: apps.length,
      doctorShiftCoveragePercent: 99.4,
      insuranceClaimAcceptanceRate: 96.4,
      dailyRevenueUsd: 184500
    };
  }
};
