import { mockDataStore } from '../models/mockData';
import { Patient, VitalSign } from '../models/types';

export class PatientService {
  static getAll(search?: string): Patient[] {
    if (!search) return mockDataStore.patients;
    const q = search.toLowerCase();
    return mockDataStore.patients.filter(p => p.firstName.toLowerCase().includes(q) || p.lastName.toLowerCase().includes(q) || p.mrn.toLowerCase().includes(q));
  }
  static getById(id: string): Patient | null { return mockDataStore.patients.find(p => p.id === id) || null; }
  static create(data: any): Patient {
    const p: Patient = { ...data, id: 'pat-' + Date.now(), mrn: 'MRN-2026-' + Math.floor(1000 + Math.random() * 9000), allergies: [], conditions: [], recentVitals: [], createdAt: new Date().toISOString() };
    mockDataStore.patients.unshift(p);
    return p;
  }
  static addVitals(patientId: string, vitals: any): VitalSign | null {
    const p = this.getById(patientId);
    if (!p) return null;
    const v: VitalSign = { ...vitals, id: 'vit-' + Date.now(), patientId, recordedAt: new Date().toISOString() };
    p.recentVitals.unshift(v);
    return v;
  }
}
