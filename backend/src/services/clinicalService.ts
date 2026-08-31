import { mockDataStore } from '../models/mockData';
import { SoapNote } from '../models/types';
import { checkDrugInteractions } from '../utils/drugInteractions';
import { PatientService } from './patientService';

export class ClinicalService {
  static getSoapNotesByPatient(patientId: string): SoapNote[] { return mockDataStore.soapNotes.filter(n => n.patientId === patientId); }
  static createSoapNote(data: any): SoapNote {
    const n: SoapNote = { ...data, id: 'soap-' + Date.now(), createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), isSigned: true, signedAt: new Date().toISOString() };
    mockDataStore.soapNotes.unshift(n);
    return n;
  }
  static verifySafety(patientId: string, meds: string[]) {
    const patient = PatientService.getById(patientId);
    const warnings: string[] = [];
    if (patient) {
      for (const m of meds) {
        for (const a of patient.allergies) {
          if (m.toLowerCase().includes(a.substance.toLowerCase())) {
            warnings.push(`ALLERGY WARNING: Patient has severe allergy to ${a.substance}.`);
          }
        }
      }
    }
    const interactions = checkDrugInteractions(meds);
    return { interactions, allergyWarnings: warnings, isSafe: warnings.length === 0 && interactions.length === 0 };
  }
}
