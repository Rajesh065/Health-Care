import { mockDataStore } from '../models/mockData';
import { Appointment, AppointmentStatus } from '../models/types';

export class AppointmentService {
  static getAll(filters?: { doctorId?: string; patientId?: string; status?: AppointmentStatus }): Appointment[] {
    let list = mockDataStore.appointments;
    if (filters?.doctorId) list = list.filter(a => a.doctorId === filters.doctorId);
    if (filters?.patientId) list = list.filter(a => a.patientId === filters.patientId);
    if (filters?.status) list = list.filter(a => a.status === filters.status);
    return list;
  }

  static getById(id: string): Appointment | null {
    return mockDataStore.appointments.find(a => a.id === id) || null;
  }

  static create(data: Omit<Appointment, 'id' | 'createdAt'>): Appointment {
    const newApt: Appointment = {
      ...data,
      id: 'apt-' + Date.now(),
      createdAt: new Date().toISOString()
    };
    if (newApt.type === 'TELEHEALTH' && !newApt.telehealthMeetingUrl) {
      const sessionId = 'session-' + Date.now();
      newApt.telehealthSessionId = sessionId;
      newApt.telehealthMeetingUrl = `https://telehealth.medflow.health/room/${sessionId}`;
    }
    mockDataStore.appointments.unshift(newApt);
    return newApt;
  }

  static updateStatus(id: string, status: AppointmentStatus): Appointment | null {
    const apt = this.getById(id);
    if (!apt) return null;
    apt.status = status;
    return apt;
  }
}
