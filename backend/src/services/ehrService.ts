import { mockDataStore } from '../models/mockData';
import { Patient, Appointment, ClinicalNote } from '../models/types';

export class EhrService {
  static getPatients(): Patient[] { return mockDataStore.patients; }
  static getPatientById(id: string): Patient | undefined { return mockDataStore.patients.find(p => p.id === id || p.mrn === id); }
  static createPatient(p: Patient): Patient { mockDataStore.patients.unshift(p); return p; }
  static getAppointments(): Appointment[] { return mockDataStore.appointments; }
  static getClinicalNotes(): ClinicalNote[] { return mockDataStore.clinicalNotes; }
  static createClinicalNote(note: ClinicalNote): ClinicalNote { mockDataStore.clinicalNotes.unshift(note); return note; }
}
