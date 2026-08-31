import { User, Patient, Appointment, SoapNote, Medication, Prescription, LabOrder, Bed, StaffShift, Invoice, InsuranceClaim, HipaaAuditLog, TriageAssessment } from './types';

export const mockDataStore = {
  users: [
    { id: 'usr-admin-1', name: 'Dr. Sarah Jenkins', email: 'admin@medflow.health', role: 'ADMIN' as const, phone: '+1 (555) 019-2831', createdAt: '2025-01-10T08:00:00.000Z' },
    { id: 'usr-doc-1', name: 'Dr. Marcus Vance, MD', email: 'doctor@medflow.health', role: 'DOCTOR' as const, department: 'Cardiology', specialty: 'Interventional Cardiology', licenseNumber: 'MD-92841-CA', phone: '+1 (555) 382-9912', createdAt: '2025-01-15T09:00:00.000Z' },
    { id: 'usr-nurse-1', name: 'Nurse Clara Oswald, RN', email: 'nurse@medflow.health', role: 'NURSE' as const, department: 'Inpatient Care', phone: '+1 (555) 441-2993', createdAt: '2025-02-10T08:30:00.000Z' },
    { id: 'usr-pharm-1', name: 'James Wilson, PharmD', email: 'pharmacy@medflow.health', role: 'PHARMACIST' as const, department: 'Pharmacy', phone: '+1 (555) 552-8810', createdAt: '2025-02-15T07:45:00.000Z' },
    { id: 'usr-lab-1', name: 'David Zhao, MLS', email: 'lab@medflow.health', role: 'LAB_TECH' as const, department: 'Lab', phone: '+1 (555) 662-7711', createdAt: '2025-02-20T08:00:00.000Z' },
    { id: 'usr-pat-1', name: 'Robert Sterling', email: 'patient@medflow.health', role: 'PATIENT' as const, phone: '+1 (555) 123-4567', createdAt: '2025-03-01T12:00:00.000Z' }
  ],
  patients: [
    {
      id: 'pat-1001', mrn: 'MRN-2026-8819', firstName: 'Robert', lastName: 'Sterling', dateOfBirth: '1968-05-14', gender: 'MALE' as const, bloodType: 'O+', phone: '+1 (555) 123-4567', email: 'patient@medflow.health', address: '742 Evergreen Terrace',
      emergencyContact: { name: 'Martha Sterling', relationship: 'Spouse', phone: '+1 (555) 123-4568' },
      insurance: { provider: 'Blue Cross Blue Shield', policyNumber: 'BCBS-8829104', groupNumber: 'GRP-9901', copayAmount: 25.0, status: 'ACTIVE' as const },
      allergies: [
        { id: 'alg-1', substance: 'Penicillin', category: 'MEDICATION' as const, severity: 'SEVERE' as const, reaction: 'Anaphylaxis', diagnosedDate: '2012-04-10' },
        { id: 'alg-2', substance: 'Peanuts', category: 'FOOD' as const, severity: 'MODERATE' as const, reaction: 'Skin rash', diagnosedDate: '2005-08-22' }
      ],
      conditions: [{ id: 'cnd-1', icd10Code: 'I10', conditionName: 'Essential (primary) hypertension', status: 'ACTIVE' as const, diagnosedDate: '2018-03-15', diagnosedBy: 'Dr. Marcus Vance, MD' }],
      recentVitals: [{ id: 'vit-1', patientId: 'pat-1001', recordedAt: '2026-08-28T09:15:00.000Z', recordedBy: 'Nurse Clara Oswald, RN', bloodPressureSystolic: 138, bloodPressureDiastolic: 88, heartRateBpm: 76, respiratoryRateBpm: 16, temperatureCelsius: 36.8, oxygenSaturationPercent: 98, bloodGlucoseMgDl: 124, weightKg: 84.5, heightCm: 178, bmi: 26.7 }],
      assignedDoctorId: 'usr-doc-1', createdAt: '2025-03-01T12:00:00.000Z'
    },
    {
      id: 'pat-1002', mrn: 'MRN-2026-9042', firstName: 'Eleanor', lastName: 'Rigby', dateOfBirth: '1975-09-28', gender: 'FEMALE' as const, bloodType: 'A+', phone: '+1 (555) 234-5678', email: 'eleanor.rigby@example.com', address: '10 Abbey Road',
      emergencyContact: { name: 'Paul McCartney', relationship: 'Brother', phone: '+1 (555) 234-5679' },
      insurance: { provider: 'Aetna Health', policyNumber: 'AET-4910283', groupNumber: 'GRP-3302', copayAmount: 30.0, status: 'ACTIVE' as const },
      allergies: [{ id: 'alg-3', substance: 'Sulfa Drugs', category: 'MEDICATION' as const, severity: 'MODERATE' as const, reaction: 'Skin rash', diagnosedDate: '2015-06-18' }],
      conditions: [{ id: 'cnd-3', icd10Code: 'J45.909', conditionName: 'Unspecified asthma, uncomplicated', status: 'ACTIVE' as const, diagnosedDate: '2019-02-12', diagnosedBy: 'Dr. Elena Rostova, MD' }],
      recentVitals: [{ id: 'vit-4', patientId: 'pat-1002', recordedAt: '2026-08-25T14:20:00.000Z', recordedBy: 'Nurse Clara Oswald, RN', bloodPressureSystolic: 118, bloodPressureDiastolic: 76, heartRateBpm: 72, respiratoryRateBpm: 15, temperatureCelsius: 36.6, oxygenSaturationPercent: 99, bloodGlucoseMgDl: 95, weightKg: 62.0, heightCm: 165, bmi: 22.8 }],
      assignedDoctorId: 'usr-doc-2', currentWardId: 'ward-gen-1', currentBedNumber: 'G-204', createdAt: '2025-04-10T10:30:00.000Z'
    }
  ],
  appointments: [
    {
      id: 'apt-201', patientId: 'pat-1001', patientName: 'Robert Sterling', doctorId: 'usr-doc-1', doctorName: 'Dr. Marcus Vance, MD', specialty: 'Cardiology',
      scheduledTime: '2026-08-31T14:00:00.000Z', durationMinutes: 30, type: 'TELEHEALTH' as const, status: 'SCHEDULED' as const, reasonForVisit: 'Hypertension follow-up and prescription refill',
      telehealthMeetingUrl: 'https://telehealth.medflow.health/room/session-8829', telehealthSessionId: 'session-8829', triageUrgency: 'YELLOW' as const, createdAt: '2026-08-20T10:00:00.000Z'
    }
  ],
  soapNotes: [
    {
      id: 'soap-301', appointmentId: 'apt-201', patientId: 'pat-1001', doctorId: 'usr-doc-1', doctorName: 'Dr. Marcus Vance, MD', createdAt: '2026-08-28T09:45:00.000Z', updatedAt: '2026-08-28T10:15:00.000Z',
      subjective: { chiefComplaint: 'Hypertension follow-up', historyOfPresentIllness: 'Home BP slightly elevated.', reviewOfSystems: 'Normal' },
      objective: { physicalExam: 'Alert, lungs clear, heart regular.', vitalsSummary: 'BP 138/88, HR 76' },
      assessment: { primaryDiagnosis: { icd10Code: 'I10', description: 'Essential (primary) hypertension' }, secondaryDiagnoses: [], clinicalImpression: 'Stage 1 HTN.' },
      plan: { treatments: 'DASH diet reinforced.', medicationsPrescribed: ['Lisinopril 20mg daily'], labOrdersRequested: ['CMP'], followUpInstructions: 'Return in 6 weeks.', followUpWeeks: 6 },
      isSigned: true, signedAt: '2026-08-28T10:15:00.000Z'
    }
  ],
  medications: [
    { id: 'med-1', code: 'NDC-0074-3799', name: 'Lisinopril', genericName: 'Lisinopril', category: 'Antihypertensive', form: 'TABLET', strength: '20mg', unit: 'tablets', stockQuantity: 4500, reorderThreshold: 1000, unitPrice: 12.50, batchNumber: 'BT-LIS-2026-9', expiryDate: '2027-12-31', manufacturer: 'AstraZeneca' },
    { id: 'med-2', code: 'NDC-0069-1540', name: 'Amlodipine Besylate', genericName: 'Amlodipine', category: 'Calcium Channel Blocker', form: 'TABLET', strength: '5mg', unit: 'tablets', stockQuantity: 3800, reorderThreshold: 800, unitPrice: 14.20, batchNumber: 'BT-AML-2026-4', expiryDate: '2028-03-31', manufacturer: 'Pfizer' }
  ],
  prescriptions: [
    {
      id: 'rx-401', patientId: 'pat-1001', patientName: 'Robert Sterling', doctorId: 'usr-doc-1', doctorName: 'Dr. Marcus Vance, MD', issuedDate: '2026-08-28T10:15:00.000Z', status: 'DISPENSED' as const,
      items: [{ medicationId: 'med-1', medicationName: 'Lisinopril 20mg', dosage: '20mg', frequency: 'Once Daily', route: 'Oral', durationDays: 90, quantity: 90, refillsAllowed: 3 }],
      dispensedBy: 'James Wilson, PharmD', dispensedDate: '2026-08-28T11:00:00.000Z', totalCost: 12.50
    }
  ],
  labOrders: [
    {
      id: 'lab-501', orderNumber: 'LAB-2026-9901', patientId: 'pat-1001', patientName: 'Robert Sterling', doctorId: 'usr-doc-1', doctorName: 'Dr. Marcus Vance, MD', testCategory: 'BIOCHEMISTRY', testName: 'Comprehensive Metabolic Panel (CMP)', cptCode: '80053',
      orderedAt: '2026-08-28T10:15:00.000Z', status: 'COMPLETED' as const, specimenType: 'Serum', completedAt: '2026-08-28T13:30:00.000Z', technicianName: 'David Zhao, MLS',
      results: [
        { parameter: 'Sodium', value: 141, unit: 'mEq/L', referenceRange: '135 - 145', isAbnormal: false, flag: 'NORMAL' as const },
        { parameter: 'Glucose', value: 124, unit: 'mg/dL', referenceRange: '70 - 99', isAbnormal: true, flag: 'HIGH' as const }
      ]
    }
  ],
  beds: [
    { id: 'bed-1', wardId: 'ward-icu-1', wardName: 'ICU Ward A', wardType: 'ICU' as const, bedNumber: 'ICU-101', isOccupied: false, dailyRate: 1800 },
    { id: 'bed-2', wardId: 'ward-gen-1', wardName: 'General Ward 2', wardType: 'GENERAL' as const, bedNumber: 'G-204', isOccupied: true, currentPatientId: 'pat-1002', currentPatientName: 'Eleanor Rigby', dailyRate: 650 }
  ],
  staffShifts: [
    { id: 'shf-1', staffId: 'usr-doc-1', staffName: 'Dr. Marcus Vance, MD', role: 'DOCTOR' as const, department: 'Cardiology', date: '2026-08-31', shiftType: 'MORNING', startTime: '07:00', endTime: '15:30', status: 'ACTIVE' }
  ],
  invoices: [
    {
      id: 'inv-601', invoiceNumber: 'INV-2026-8819', patientId: 'pat-1001', patientName: 'Robert Sterling', issuedDate: '2026-08-28T14:00:00.000Z', dueDate: '2026-09-28T00:00:00.000Z',
      items: [{ description: 'Cardiology Consultation', code: '99214', category: 'CONSULTATION', unitPrice: 220.00, quantity: 1, total: 220.00 }],
      subtotal: 220.00, insuranceDiscount: 195.00, patientCopay: 25.00, amountPaid: 25.00, balanceDue: 0.00, status: 'PAID' as const, paymentMethod: 'CREDIT_CARD'
    }
  ],
  insuranceClaims: [
    { id: 'clm-701', claimNumber: 'CLM-2026-1092', invoiceId: 'inv-601', patientId: 'pat-1001', patientName: 'Robert Sterling', insuranceProvider: 'Blue Cross Blue Shield', policyNumber: 'BCBS-8829104', claimedAmount: 195.00, approvedAmount: 195.00, status: 'APPROVED', submittedDate: '2026-08-28T14:30:00.000Z' }
  ],
  auditLogs: [
    { id: 'audit-001', timestamp: '2026-08-31T08:00:15.000Z', userId: 'usr-doc-1', userName: 'Dr. Marcus Vance, MD', userRole: 'DOCTOR' as const, action: 'LOGIN', resourcePath: '/api/v1/auth/login', ipAddress: '192.168.1.140', userAgent: 'Mozilla/5.0', status: 'SUCCESS' }
  ],
  triageAssessments: [
    { id: 'tri-801', patientId: 'pat-1001', symptoms: ['Mild headache', 'Dizziness'], duration: '3 days', severityScore: 4, hasRedFlags: false, triageColor: 'YELLOW' as const, recommendedAction: 'Schedule outpatient consultation.', suggestedSpecialty: 'Cardiology', summary: 'Mild hypertensive symptoms.', createdAt: '2026-08-27T16:00:00.000Z' }
  ]
};
