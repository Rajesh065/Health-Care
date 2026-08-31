import { mockDataStore } from '../models/mockData';
import { Appointment } from '../models/types';

export class AppointmentService {
  static getAll(): Appointment[] { return mockDataStore.appointments; }
  static getById(id: string): Appointment | null { return mockDataStore.appointments.find(a => a.id === id) || null; }
  static create(data: any): Appointment {
    const apt: Appointment = { ...data, id: 'apt-' + Date.now(), createdAt: new Date().toISOString() };
    mockDataStore.appointments.unshift(apt);
    return apt;
  }
  static updateStatus(id: string, status: any): Appointment | null {
    const apt = this.getById(id);
    if (!apt) return null;
    apt.status = status;
    return apt;
  }
}
