import { mockDataStore } from '../models/mockData';
import { Medication, Prescription } from '../models/types';

export class PharmacyService {
  static getInventory(): Medication[] {
    return mockDataStore.medications;
  }

  static getPrescriptions(status?: Prescription['status']): Prescription[] {
    if (!status) return mockDataStore.prescriptions;
    return mockDataStore.prescriptions.filter(p => p.status === status);
  }

  static dispense(prescriptionId: string, pharmacistName: string): Prescription | null {
    const rx = mockDataStore.prescriptions.find(p => p.id === prescriptionId);
    if (!rx || rx.status === 'DISPENSED') return null;

    // Deduct inventory
    for (const item of rx.items) {
      const med = mockDataStore.medications.find(m => m.id === item.medicationId || m.name.toLowerCase().includes(item.medicationName.toLowerCase()));
      if (med) {
        med.stockQuantity = Math.max(0, med.stockQuantity - item.quantity);
      }
    }

    rx.status = 'DISPENSED';
    rx.dispensedBy = pharmacistName;
    rx.dispensedDate = new Date().toISOString();
    return rx;
  }

  static createPrescription(data: Omit<Prescription, 'id' | 'issuedDate' | 'status'>): Prescription {
    const newRx: Prescription = {
      ...data,
      id: 'rx-' + Date.now(),
      issuedDate: new Date().toISOString(),
      status: 'PENDING'
    };
    mockDataStore.prescriptions.unshift(newRx);
    return newRx;
  }
}
