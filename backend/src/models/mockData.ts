import { User, Patient, Appointment, ClinicalNote } from './types';

export const mockDataStore: {
  users: User[];
  patients: Patient[];
  appointments: Appointment[];
  clinicalNotes: ClinicalNote[];
} = {
  users: [
    { id: 'usr-doc-1', name: 'Dr. Sarah Jenkins, MD', email: 'sarah.jenkins@medflow.hospital', role: 'PHYSICIAN', department: 'Cardiology', accessTier: 'CLINICAL_CHIEF_TIER', createdAt: '2025-01-10T08:00:00.000Z' },
    { id: 'usr-doc-2', name: 'Dr. Marcus Chen, MD', email: 'marcus.chen@medflow.hospital', role: 'PHYSICIAN', department: 'Endocrinology', accessTier: 'ATTENDING_PHYSICIAN_TIER', createdAt: '2025-01-12T08:30:00.000Z' },
    { id: 'usr-nurse-1', name: 'James Wilson, RN', email: 'james.wilson@medflow.hospital', role: 'NURSE', department: 'Intensive Care Unit', accessTier: 'NURSING_STAFF_TIER', createdAt: '2025-01-15T09:00:00.000Z' }
  ],

  patients: [
    {
      id: 'pat-101',
      mrn: 'MRN-8829104',
      fullName: 'Arthur Pendelton',
      dateOfBirth: '1968-04-12',
      age: 58,
      gender: 'MALE',
      bloodGroup: 'O+',
      roomNumber: 'Room 304-A (Cardiac Care Unit)',
      department: 'Cardiology',
      primaryCondition: 'Stage II Essential Hypertension & Stable Angina',
      icd10Code: 'I10 / I20.9',
      assignedDoctor: 'Dr. Sarah Jenkins, MD',
      status: 'INPATIENT_ADMITTED',
      allergies: ['Penicillin G', 'Sulfa Antibiotics'],
      vitals: {
        bloodPressure: '138/88 mmHg',
        heartRateBpm: 76,
        respiratoryRate: 16,
        oxygenSaturationPct: 98,
        bodyTemperatureF: 98.6,
        bmi: 27.4,
        lastRecordedAt: '2026-08-31T14:30:00.000Z'
      },
      medications: [
        { drugName: 'Lisinopril', dosage: '20mg', frequency: 'Once daily (Morning)', prescribingDoctor: 'Dr. Sarah Jenkins, MD', startDate: '2024-03-10', status: 'ACTIVE' },
        { drugName: 'Atorvastatin', dosage: '40mg', frequency: 'Once daily (Bedtime)', prescribingDoctor: 'Dr. Sarah Jenkins, MD', startDate: '2024-03-10', status: 'ACTIVE' }
      ],
      emergencyContact: { name: 'Eleanor Pendelton', relationship: 'Spouse', phone: '+1 (555) 234-8901' }
    },
    {
      id: 'pat-102',
      mrn: 'MRN-9912048',
      fullName: 'Beatrice Gomez',
      dateOfBirth: '1984-11-23',
      age: 41,
      gender: 'FEMALE',
      bloodGroup: 'A+',
      roomNumber: 'Outpatient Clinic 2B',
      department: 'Endocrinology',
      primaryCondition: 'Type 2 Diabetes Mellitus with Peripheral Neuropathy',
      icd10Code: 'E11.40',
      assignedDoctor: 'Dr. Marcus Chen, MD',
      status: 'OUTPATIENT',
      allergies: ['Latex'],
      vitals: {
        bloodPressure: '124/80 mmHg',
        heartRateBpm: 72,
        respiratoryRate: 15,
        oxygenSaturationPct: 99,
        bodyTemperatureF: 98.4,
        bmi: 24.8,
        lastRecordedAt: '2026-08-31T15:00:00.000Z'
      },
      medications: [
        { drugName: 'Metformin HCl', dosage: '1000mg', frequency: 'Twice daily with meals', prescribingDoctor: 'Dr. Marcus Chen, MD', startDate: '2023-08-15', status: 'ACTIVE' },
        { drugName: 'Gabapentin', dosage: '300mg', frequency: 'TID (3x daily)', prescribingDoctor: 'Dr. Marcus Chen, MD', startDate: '2024-01-20', status: 'ACTIVE' }
      ],
      emergencyContact: { name: 'Carlos Gomez', relationship: 'Brother', phone: '+1 (555) 876-5432' }
    },
    {
      id: 'pat-103',
      mrn: 'MRN-4421099',
      fullName: 'David Sterling',
      dateOfBirth: '1975-09-04',
      age: 50,
      gender: 'MALE',
      bloodGroup: 'B+',
      roomNumber: 'ICU Bed 04',
      department: 'Pulmonology',
      primaryCondition: 'Acute Exacerbation of Severe COPD & Bacterial Pneumonia',
      icd10Code: 'J44.1 / J15.9',
      assignedDoctor: 'Dr. Sarah Jenkins, MD',
      status: 'ICU_CRITICAL',
      allergies: ['Codeine', 'Morphine'],
      vitals: {
        bloodPressure: '142/92 mmHg',
        heartRateBpm: 98,
        respiratoryRate: 24,
        oxygenSaturationPct: 91,
        bodyTemperatureF: 101.2,
        bmi: 29.1,
        lastRecordedAt: '2026-08-31T15:45:00.000Z'
      },
      medications: [
        { drugName: 'Levofloxacin IV', dosage: '750mg', frequency: 'Once daily IV infusion', prescribingDoctor: 'Dr. Sarah Jenkins, MD', startDate: '2026-08-29', status: 'ACTIVE' },
        { drugName: 'Methylprednisolone', dosage: '60mg', frequency: 'IV Q6H', prescribingDoctor: 'Dr. Sarah Jenkins, MD', startDate: '2026-08-29', status: 'ACTIVE' }
      ],
      emergencyContact: { name: 'Rachel Sterling', relationship: 'Daughter', phone: '+1 (555) 345-6789' }
    }
  ],

  appointments: [
    {
      id: 'apt-01',
      patientId: 'pat-101',
      patientName: 'Arthur Pendelton',
      mrn: 'MRN-8829104',
      doctorName: 'Dr. Sarah Jenkins, MD',
      department: 'Cardiology',
      scheduledTime: '09:30 AM',
      durationMinutes: 30,
      visitReason: 'Routine Cardiac Stress Echocardiogram Follow-up',
      type: 'IN_PERSON',
      status: 'IN_WAITING_ROOM',
      roomNumber: 'Exam Suite 304'
    },
    {
      id: 'apt-02',
      patientId: 'pat-102',
      patientName: 'Beatrice Gomez',
      mrn: 'MRN-9912048',
      doctorName: 'Dr. Marcus Chen, MD',
      department: 'Endocrinology',
      scheduledTime: '11:00 AM',
      durationMinutes: 45,
      visitReason: 'Quarterly HbA1c Review & Diabetic Neuropathy Assessment',
      type: 'TELEHEALTH_VIDEO',
      status: 'CONFIRMED'
    },
    {
      id: 'apt-03',
      patientId: 'pat-103',
      patientName: 'David Sterling',
      mrn: 'MRN-4421099',
      doctorName: 'Dr. Sarah Jenkins, MD',
      department: 'Pulmonology',
      scheduledTime: '02:15 PM',
      durationMinutes: 30,
      visitReason: 'ICU Morning Rounds & Arterial Blood Gas Review',
      type: 'EMERGENCY_TRIAGE',
      status: 'IN_CONSULT',
      roomNumber: 'ICU Bed 04'
    }
  ],

  clinicalNotes: [
    {
      id: 'note-201',
      patientId: 'pat-101',
      patientName: 'Arthur Pendelton',
      mrn: 'MRN-8829104',
      authorDoctor: 'Dr. Sarah Jenkins, MD',
      department: 'Cardiology',
      timestamp: '2026-08-31T09:45:00.000Z',
      noteType: 'SOAP_PROGRESS_NOTE',
      subjective: 'Patient reports mild dyspnea upon moderate exertion. Denies acute chest pain, radiating pressure, or palpitations.',
      objective: 'BP 138/88, HR 76 regular rate and rhythm. S1/S2 present, no murmurs. Lungs clear to auscultation bilaterally.',
      assessment: 'Essential hypertension well controlled on Lisinopril 20mg. Stable exertional angina without ischemic progression.',
      plan: 'Continue Lisinopril 20mg PO daily. Schedule repeat Echo in 6 months. Maintain low-sodium DASH diet.',
      isSigned: true
    }
  ]
};
