import {
  User, Patient, Appointment, SoapNote, Medication, Prescription,
  LabOrder, Bed, StaffShift, Invoice, InsuranceClaim, HipaaAuditLog, TriageAssessment
} from './types';

export interface DataStore {
  users: User[];
  patients: Patient[];
  appointments: Appointment[];
  soapNotes: SoapNote[];
  medications: Medication[];
  prescriptions: Prescription[];
  labOrders: LabOrder[];
  beds: Bed[];
  staffShifts: StaffShift[];
  invoices: Invoice[];
  insuranceClaims: InsuranceClaim[];
  auditLogs: HipaaAuditLog[];
  triageAssessments: TriageAssessment[];
}

export const mockDataStore: DataStore = {
  users: [
    {
      id: 'usr-admin-1',
      name: 'Dr. Sarah Jenkins (Chief Medical Officer)',
      email: 'admin@medflow.health',
      role: 'ADMIN',
      department: 'Executive Medical Board',
      specialty: 'Healthcare Administration',
      phone: '+1 (555) 019-2831',
      createdAt: '2025-01-10T08:00:00.000Z'
    },
    {
      id: 'usr-doc-1',
      name: 'Dr. Marcus Vance, MD',
      email: 'doctor@medflow.health',
      role: 'DOCTOR',
      department: 'Cardiology',
      specialty: 'Interventional Cardiology',
      licenseNumber: 'MD-92841-CA',
      phone: '+1 (555) 382-9912',
      createdAt: '2025-01-15T09:00:00.000Z'
    },
    {
      id: 'usr-doc-2',
      name: 'Dr. Elena Rostova, MD',
      email: 'elena.rostova@medflow.health',
      role: 'DOCTOR',
      department: 'Internal Medicine',
      specialty: 'Endocrinology & Diabetology',
      licenseNumber: 'MD-48192-NY',
      phone: '+1 (555) 773-1029',
      createdAt: '2025-02-01T10:00:00.000Z'
    },
    {
      id: 'usr-nurse-1',
      name: 'Nurse Clara Oswald, RN',
      email: 'nurse@medflow.health',
      role: 'NURSE',
      department: 'Inpatient & Triage Care',
      licenseNumber: 'RN-88192-CA',
      phone: '+1 (555) 441-2993',
      createdAt: '2025-02-10T08:30:00.000Z'
    },
    {
      id: 'usr-pharm-1',
      name: 'James Wilson, PharmD',
      email: 'pharmacy@medflow.health',
      role: 'PHARMACIST',
      department: 'Central Pharmacy',
      licenseNumber: 'RPH-39182',
      phone: '+1 (555) 552-8810',
      createdAt: '2025-02-15T07:45:00.000Z'
    },
    {
      id: 'usr-lab-1',
      name: 'David Zhao, MLS',
      email: 'lab@medflow.health',
      role: 'LAB_TECH',
      department: 'Diagnostic Laboratory',
      licenseNumber: 'MLS-29184',
      phone: '+1 (555) 662-7711',
      createdAt: '2025-02-20T08:00:00.000Z'
    },
    {
      id: 'usr-pat-1',
      name: 'Robert Sterling',
      email: 'patient@medflow.health',
      role: 'PATIENT',
      phone: '+1 (555) 123-4567',
      createdAt: '2025-03-01T12:00:00.000Z'
    }
  ],
  patients: [
    {
      id: 'pat-1001',
      mrn: 'MRN-2026-8819',
      firstName: 'Robert',
      lastName: 'Sterling',
      dateOfBirth: '1968-05-14',
      gender: 'MALE',
      bloodType: 'O+',
      phone: '+1 (555) 123-4567',
      email: 'patient@medflow.health',
      address: '742 Evergreen Terrace, Springfield, OR',
      emergencyContact: { name: 'Martha Sterling', relationship: 'Spouse', phone: '+1 (555) 123-4568' },
      insurance: { provider: 'Blue Cross Blue Shield', policyNumber: 'BCBS-8829104', groupNumber: 'GRP-9901', copayAmount: 25.0, status: 'ACTIVE' },
      allergies: [
        { id: 'alg-1', substance: 'Penicillin', category: 'MEDICATION', severity: 'SEVERE', reaction: 'Anaphylaxis', diagnosedDate: '2012-04-10' },
        { id: 'alg-2', substance: 'Peanuts', category: 'FOOD', severity: 'MODERATE', reaction: 'Skin rash', diagnosedDate: '2005-08-22' }
      ],
      conditions: [
        { id: 'cnd-1', icd10Code: 'I10', conditionName: 'Essential (primary) hypertension', status: 'ACTIVE', diagnosedDate: '2018-03-15', diagnosedBy: 'Dr. Marcus Vance, MD' },
        { id: 'cnd-2', icd10Code: 'E11.9', conditionName: 'Type 2 diabetes mellitus without complications', status: 'ACTIVE', diagnosedDate: '2020-11-04', diagnosedBy: 'Dr. Elena Rostova, MD' }
      ],
      recentVitals: [
        { id: 'vit-1', patientId: 'pat-1001', recordedAt: '2026-08-28T09:15:00.000Z', recordedBy: 'Nurse Clara Oswald, RN', bloodPressureSystolic: 138, bloodPressureDiastolic: 88, heartRateBpm: 76, respiratoryRateBpm: 16, temperatureCelsius: 36.8, oxygenSaturationPercent: 98, bloodGlucoseMgDl: 124, weightKg: 84.5, heightCm: 178, bmi: 26.7 },
        { id: 'vit-2', patientId: 'pat-1001', recordedAt: '2026-08-15T10:00:00.000Z', recordedBy: 'Nurse Clara Oswald, RN', bloodPressureSystolic: 142, bloodPressureDiastolic: 92, heartRateBpm: 80, respiratoryRateBpm: 18, temperatureCelsius: 37.0, oxygenSaturationPercent: 97, bloodGlucoseMgDl: 135, weightKg: 85.0, heightCm: 178, bmi: 26.8 }
      ],
      assignedDoctorId: 'usr-doc-1',
      createdAt: '2025-03-01T12:00:00.000Z'
    },
    {
      id: 'pat-1002',
      mrn: 'MRN-2026-9042',
      firstName: 'Eleanor',
      lastName: 'Rigby',
      dateOfBirth: '1975-09-28',
      gender: 'FEMALE',
      bloodType: 'A+',
      phone: '+1 (555) 234-5678',
      email: 'eleanor.rigby@example.com',
      address: '10 Abbey Road, London',
      emergencyContact: { name: 'Paul McCartney', relationship: 'Brother', phone: '+1 (555) 234-5679' },
      insurance: { provider: 'Aetna Health', policyNumber: 'AET-4910283', groupNumber: 'GRP-3302', copayAmount: 30.0, status: 'ACTIVE' },
      allergies: [{ id: 'alg-3', substance: 'Sulfa Drugs', category: 'MEDICATION', severity: 'MODERATE', reaction: 'Skin rash', diagnosedDate: '2015-06-18' }],
      conditions: [{ id: 'cnd-3', icd10Code: 'J45.909', conditionName: 'Unspecified asthma, uncomplicated', status: 'ACTIVE', diagnosedDate: '2019-02-12', diagnosedBy: 'Dr. Elena Rostova, MD' }],
      recentVitals: [{ id: 'vit-4', patientId: 'pat-1002', recordedAt: '2026-08-25T14:20:00.000Z', recordedBy: 'Nurse Clara Oswald, RN', bloodPressureSystolic: 118, bloodPressureDiastolic: 76, heartRateBpm: 72, respiratoryRateBpm: 15, temperatureCelsius: 36.6, oxygenSaturationPercent: 99, bloodGlucoseMgDl: 95, weightKg: 62.0, heightCm: 165, bmi: 22.8 }],
      assignedDoctorId: 'usr-doc-2',
      currentWardId: 'ward-gen-1',
      currentBedNumber: 'G-204',
      createdAt: '2025-04-10T10:30:00.000Z'
    },
    {
      id: 'pat-1003',
      mrn: 'MRN-2026-9115',
      firstName: 'Arthur',
      lastName: 'Dent',
      dateOfBirth: '1982-03-11',
      gender: 'MALE',
      bloodType: 'B+',
      phone: '+1 (555) 345-6789',
      email: 'arthur.dent@galaxy.org',
      address: '42 Cottington Lane',
      emergencyContact: { name: 'Ford Prefect', relationship: 'Friend', phone: '+1 (555) 345-6790' },
      insurance: { provider: 'UnitedHealthcare', policyNumber: 'UHC-1092837', groupNumber: 'GRP-7711', copayAmount: 20.0, status: 'ACTIVE' },
      allergies: [],
      conditions: [{ id: 'cnd-4', icd10Code: 'F41.1', conditionName: 'Generalized anxiety disorder', status: 'ACTIVE', diagnosedDate: '2021-07-09', diagnosedBy: 'Dr. Elena Rostova, MD' }],
      recentVitals: [{ id: 'vit-5', patientId: 'pat-1003', recordedAt: '2026-08-30T16:00:00.000Z', recordedBy: 'Nurse Clara Oswald, RN', bloodPressureSystolic: 126, bloodPressureDiastolic: 82, heartRateBpm: 88, respiratoryRateBpm: 18, temperatureCelsius: 36.7, oxygenSaturationPercent: 98, bloodGlucoseMgDl: 102, weightKg: 78.0, heightCm: 175, bmi: 25.5 }],
      assignedDoctorId: 'usr-doc-2',
      createdAt: '2025-05-18T14:15:00.000Z'
    }
  ],
  appointments: [
    {
      id: 'apt-201',
      patientId: 'pat-1001',
      patientName: 'Robert Sterling',
      doctorId: 'usr-doc-1',
      doctorName: 'Dr. Marcus Vance, MD',
      specialty: 'Cardiology',
      scheduledTime: '2026-08-31T14:00:00.000Z',
      durationMinutes: 30,
      type: 'TELEHEALTH',
      status: 'SCHEDULED',
      reasonForVisit: 'Hypertension follow-up and prescription refill',
      telehealthMeetingUrl: 'https://telehealth.medflow.health/room/session-8829-vance-sterling',
      telehealthSessionId: 'session-8829-vance-sterling',
      triageUrgency: 'YELLOW',
      notes: 'Patient reports mild occasional morning headache.',
      createdAt: '2026-08-20T10:00:00.000Z'
    },
    {
      id: 'apt-202',
      patientId: 'pat-1002',
      patientName: 'Eleanor Rigby',
      doctorId: 'usr-doc-2',
      doctorName: 'Dr. Elena Rostova, MD',
      specialty: 'Endocrinology',
      scheduledTime: '2026-08-31T15:00:00.000Z',
      durationMinutes: 45,
      type: 'IN_PERSON',
      status: 'CHECKED_IN',
      roomNumber: 'Exam Room 3B',
      reasonForVisit: 'Asthma exacerbation evaluation and spirometry review',
      triageUrgency: 'GREEN',
      createdAt: '2026-08-22T11:30:00.000Z'
    }
  ],
  soapNotes: [
    {
      id: 'soap-301',
      appointmentId: 'apt-201',
      patientId: 'pat-1001',
      doctorId: 'usr-doc-1',
      doctorName: 'Dr. Marcus Vance, MD',
      createdAt: '2026-08-28T09:45:00.000Z',
      updatedAt: '2026-08-28T10:15:00.000Z',
      subjective: {
        chiefComplaint: 'Follow-up for primary hypertension and mild morning headaches.',
        historyOfPresentIllness: '58yo male with primary HTN. States home BP trending 140/88. Denies chest pain or dyspnea.',
        reviewOfSystems: 'Constitutional: Alert, no fever. Cardio: No chest discomfort. Neuro: Mild morning headache.'
      },
      objective: {
        physicalExam: 'Well-developed, alert and oriented x 4. Heart: Regular rate and rhythm, no murmurs. Lungs clear.',
        vitalsSummary: 'BP 138/88, HR 76, RR 16, SpO2 98%, Temp 36.8 C.',
        labSummary: 'CMP normal, eGFR > 60 mL/min, K+ 4.4 mEq/L.'
      },
      assessment: {
        primaryDiagnosis: { icd10Code: 'I10', description: 'Essential (primary) hypertension' },
        secondaryDiagnoses: [{ icd10Code: 'E11.9', description: 'Type 2 diabetes mellitus without complications' }],
        clinicalImpression: 'Stage 1 hypertension moderately controlled. Titrating therapy.'
      },
      plan: {
        treatments: 'DASH diet reinforced. Sodium restriction.',
        medicationsPrescribed: ['Lisinopril 20mg daily', 'Amlodipine 5mg daily'],
        labOrdersRequested: ['Comprehensive Metabolic Panel', 'Lipid Panel'],
        followUpInstructions: 'Return in 6 weeks for BP check.',
        followUpWeeks: 6
      },
      isSigned: true,
      signedAt: '2026-08-28T10:15:00.000Z'
    }
  ],
  medications: [
    { id: 'med-1', code: 'NDC-0074-3799', name: 'Lisinopril', genericName: 'Lisinopril', category: 'Antihypertensive', form: 'TABLET', strength: '20mg', unit: 'tablets', stockQuantity: 4500, reorderThreshold: 1000, unitPrice: 12.50, batchNumber: 'BT-LIS-2026-9', expiryDate: '2027-12-31', manufacturer: 'AstraZeneca' },
    { id: 'med-2', code: 'NDC-0069-1540', name: 'Amlodipine Besylate', genericName: 'Amlodipine', category: 'Calcium Channel Blocker', form: 'TABLET', strength: '5mg', unit: 'tablets', stockQuantity: 3800, reorderThreshold: 800, unitPrice: 14.20, batchNumber: 'BT-AML-2026-4', expiryDate: '2028-03-31', manufacturer: 'Pfizer' },
    { id: 'med-3', code: 'NDC-0087-6060', name: 'Metformin HCl', genericName: 'Metformin', category: 'Antidiabetic', form: 'TABLET', strength: '500mg', unit: 'tablets', stockQuantity: 5200, reorderThreshold: 1200, unitPrice: 9.80, batchNumber: 'BT-MET-2026-11', expiryDate: '2027-10-15', manufacturer: 'BMS' },
    { id: 'med-4', code: 'NDC-0173-0682', name: 'Ventolin HFA (Albuterol)', genericName: 'Albuterol', category: 'Bronchodilator', form: 'INHALER', strength: '90mcg', unit: 'inhalers', stockQuantity: 420, reorderThreshold: 150, unitPrice: 48.00, batchNumber: 'BT-ALB-2026-2', expiryDate: '2027-08-30', manufacturer: 'GSK' }
  ],
  prescriptions: [
    {
      id: 'rx-401',
      patientId: 'pat-1001',
      patientName: 'Robert Sterling',
      doctorId: 'usr-doc-1',
      doctorName: 'Dr. Marcus Vance, MD',
      issuedDate: '2026-08-28T10:15:00.000Z',
      status: 'DISPENSED',
      items: [{ medicationId: 'med-1', medicationName: 'Lisinopril 20mg', dosage: '20mg', frequency: 'Once Daily', route: 'Oral', durationDays: 90, quantity: 90, refillsAllowed: 3 }],
      dispensedBy: 'James Wilson, PharmD',
      dispensedDate: '2026-08-28T11:00:00.000Z',
      totalCost: 12.50
    }
  ],
  labOrders: [
    {
      id: 'lab-501',
      orderNumber: 'LAB-2026-9901',
      patientId: 'pat-1001',
      patientName: 'Robert Sterling',
      doctorId: 'usr-doc-1',
      doctorName: 'Dr. Marcus Vance, MD',
      testCategory: 'BIOCHEMISTRY',
      testName: 'Comprehensive Metabolic Panel (CMP)',
      cptCode: '80053',
      orderedAt: '2026-08-28T10:15:00.000Z',
      status: 'COMPLETED',
      specimenType: 'Serum / Venous Blood',
      completedAt: '2026-08-28T13:30:00.000Z',
      technicianName: 'David Zhao, MLS',
      results: [
        { parameter: 'Sodium (Na)', value: 141, unit: 'mEq/L', referenceRange: '135 - 145', isAbnormal: false, flag: 'NORMAL' },
        { parameter: 'Potassium (K)', value: 4.4, unit: 'mEq/L', referenceRange: '3.5 - 5.0', isAbnormal: false, flag: 'NORMAL' },
        { parameter: 'Fasting Glucose', value: 124, unit: 'mg/dL', referenceRange: '70 - 99', isAbnormal: true, flag: 'HIGH' }
      ]
    }
  ],
  beds: [
    { id: 'bed-1', wardId: 'ward-icu-1', wardName: 'ICU Ward A', wardType: 'ICU', bedNumber: 'ICU-101', isOccupied: false, dailyRate: 1800 },
    { id: 'bed-2', wardId: 'ward-icu-1', wardName: 'ICU Ward A', wardType: 'ICU', bedNumber: 'ICU-102', isOccupied: true, currentPatientId: 'pat-1005', currentPatientName: 'David Kowalski', dailyRate: 1800 },
    { id: 'bed-3', wardId: 'ward-gen-1', wardName: 'General Ward 2', wardType: 'GENERAL', bedNumber: 'G-201', isOccupied: false, dailyRate: 650 },
    { id: 'bed-4', wardId: 'ward-gen-1', wardName: 'General Ward 2', wardType: 'GENERAL', bedNumber: 'G-204', isOccupied: true, currentPatientId: 'pat-1002', currentPatientName: 'Eleanor Rigby', dailyRate: 650 }
  ],
  staffShifts: [
    { id: 'shf-1', staffId: 'usr-doc-1', staffName: 'Dr. Marcus Vance, MD', role: 'DOCTOR', department: 'Cardiology', date: '2026-08-31', shiftType: 'MORNING', startTime: '07:00', endTime: '15:30', status: 'ACTIVE' },
    { id: 'shf-2', staffId: 'usr-nurse-1', staffName: 'Nurse Clara Oswald, RN', role: 'NURSE', department: 'Inpatient Care', date: '2026-08-31', shiftType: 'MORNING', startTime: '06:45', endTime: '19:15', status: 'ACTIVE' }
  ],
  invoices: [
    {
      id: 'inv-601',
      invoiceNumber: 'INV-2026-8819',
      patientId: 'pat-1001',
      patientName: 'Robert Sterling',
      issuedDate: '2026-08-28T14:00:00.000Z',
      dueDate: '2026-09-28T00:00:00.000Z',
      items: [
        { description: 'Cardiology Follow-Up Consultation (99214)', code: '99214', category: 'CONSULTATION', unitPrice: 220.00, quantity: 1, total: 220.00 },
        { description: 'CMP Lab Panel (80053)', code: '80053', category: 'LAB', unitPrice: 85.00, quantity: 1, total: 85.00 }
      ],
      subtotal: 305.00,
      insuranceDiscount: 280.00,
      patientCopay: 25.00,
      amountPaid: 25.00,
      balanceDue: 0.00,
      status: 'PAID',
      paymentMethod: 'CREDIT_CARD'
    }
  ],
  insuranceClaims: [
    {
      id: 'clm-701',
      claimNumber: 'CLM-2026-1092',
      invoiceId: 'inv-601',
      patientId: 'pat-1001',
      patientName: 'Robert Sterling',
      insuranceProvider: 'Blue Cross Blue Shield',
      policyNumber: 'BCBS-8829104',
      claimedAmount: 280.00,
      approvedAmount: 280.00,
      status: 'APPROVED',
      submittedDate: '2026-08-28T14:30:00.000Z'
    }
  ],
  auditLogs: [
    {
      id: 'audit-001',
      timestamp: '2026-08-31T08:00:15.000Z',
      userId: 'usr-doc-1',
      userName: 'Dr. Marcus Vance, MD',
      userRole: 'DOCTOR',
      action: 'LOGIN',
      resourcePath: '/api/v1/auth/login',
      ipAddress: '192.168.1.140',
      userAgent: 'Mozilla/5.0',
      status: 'SUCCESS',
      details: 'User logged in.'
    }
  ],
  triageAssessments: [
    {
      id: 'tri-801',
      patientId: 'pat-1001',
      symptoms: ['Mild headache', 'Dizziness'],
      duration: '3 days',
      severityScore: 4,
      hasRedFlags: false,
      triageColor: 'YELLOW',
      recommendedAction: 'Schedule outpatient cardiology consultation within 7 days.',
      suggestedSpecialty: 'Cardiology',
      summary: 'Mild hypertensive symptoms.',
      createdAt: '2026-08-27T16:00:00.000Z'
    }
  ]
};
