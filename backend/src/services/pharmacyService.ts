import { mockDataStore } from '../models/mockData';
export class PharmacyService {
  static getInventory() { return mockDataStore.medications; }
  static getPrescriptions() { return mockDataStore.prescriptions; }
  static dispense(id: string, name: string) {
    const rx = mockDataStore.prescriptions.find(p => p.id === id);
    if (!rx) return null;
    rx.status = 'DISPENSED';
    rx.dispensedBy = name;
    rx.dispensedDate = new Date().toISOString();
    return rx;
  }
}
