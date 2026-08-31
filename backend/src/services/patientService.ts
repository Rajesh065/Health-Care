import { mockDataStore } from '../models/mockData';
import { Patient, VitalSign, Allergy, MedicalCondition } from '../models/types';

export class PatientService {
  static getAll(search?: string): Patient[] {
    if (!search) return mockDataStore.patients;
    const q = search.toLowerCase();
    return mockDataStore.patients.filter(p =>
      p.firstName.toLowerCase().includes(q) ||
      p.lastName.toLowerCase().includes(q) ||
      p.mrn.toLowerCase().includes(q)
    );
  }

  static getById(id: string): Patient | null {
    return mockDataStore.patients.find(p => p.id === id) || null;
  }

  static create(patientData: Omit<Patient, 'id' | 'mrn' | 'createdAt' | 'recentVitals' | 'allergies' | 'conditions'>): Patient {
    const newPatient: Patient = {
      ...patientData,
      id: 'pat-' + Date.now(),
      mrn: 'MRN-2026-' + Math.floor(1000 + Math.random() * 9000),
      allergies: [],
      conditions: [],
      recentVitals: [],
      createdAt: new Date().toISOString()
    };
    mockDataStore.patients.unshift(newPatient);
    return newPatient;
  }

  static addVitals(patientId: string, vitalsData: Omit<VitalSign, 'id' | 'patientId' | 'recordedAt'>): VitalSign | null {
    const patient = this.getById(patientId);
    if (!patient) return null;

    const newVital: VitalSign = {
      ...vitalsData,
      id: 'vit-' + Date.now(),
      patientId,
      recordedAt: new Date().toISOString()
    };
    patient.recentVitals.unshift(newVital);
    return newVital;
  }

  static addAllergy(patientId: string, allergyData: Omit<Allergy, 'id'>): Allergy | null {
    const patient = this.getById(patientId);
    if (!patient) return null;

    const newAllergy: Allergy = {
      ...allergyData,
      id: 'alg-' + Date.now()
    };
    patient.allergies.push(newAllergy);
    return newAllergy;
  }
}
