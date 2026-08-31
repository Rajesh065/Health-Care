import { mockDataStore } from '../models/mockData';
import { SoapNote } from '../models/types';
import { checkDrugInteractions, DrugInteraction } from '../utils/drugInteractions';
import { PatientService } from './patientService';

export class ClinicalService {
  static getSoapNotesByPatient(patientId: string): SoapNote[] {
    return mockDataStore.soapNotes.filter(n => n.patientId === patientId);
  }

  static getSoapNoteById(id: string): SoapNote | null {
    return mockDataStore.soapNotes.find(n => n.id === id) || null;
  }

  static createSoapNote(data: Omit<SoapNote, 'id' | 'createdAt' | 'updatedAt' | 'isSigned'>): SoapNote {
    const note: SoapNote = {
      ...data,
      id: 'soap-' + Date.now(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      isSigned: true,
      signedAt: new Date().toISOString()
    };
    mockDataStore.soapNotes.unshift(note);
    return note;
  }

  static verifySafety(patientId: string, proposedMedications: string[]): {
    interactions: DrugInteraction[];
    allergyWarnings: string[];
    isSafe: boolean;
  } {
    const patient = PatientService.getById(patientId);
    const allergyWarnings: string[] = [];

    if (patient) {
      for (const med of proposedMedications) {
        for (const alg of patient.allergies) {
          if (med.toLowerCase().includes(alg.substance.toLowerCase())) {
            allergyWarnings.push(`ALLERGY WARNING: Patient has a recorded ${alg.severity} allergy to ${alg.substance} (Reaction: ${alg.reaction}).`);
          }
        }
      }
    }

    const interactions = checkDrugInteractions(proposedMedications);
    const isSafe = allergyWarnings.length === 0 && interactions.filter(i => i.severity === 'MAJOR').length === 0;

    return { interactions, allergyWarnings, isSafe };
  }
}
