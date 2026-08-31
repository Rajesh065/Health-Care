import { Patient, Appointment, SoapNote, Medication, Prescription, LabOrder, Bed, Invoice, HipaaAuditLog, TriageAssessment, User } from '../types';

const API_BASE = 'http://localhost:5000/api/v1';

async function fetchJson<T>(url: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}${url}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer mock-jwt-token-2026',
      ...(options?.headers || {})
    }
  });
  if (!res.ok) throw new Error(`API Error: ${res.statusText}`);
  const json = await res.json();
  return json.data;
}

export const api = {
  login: async (email: string) => fetchJson<{ user: User; token: string }>('/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email })
  }),
  getUsers: async () => fetchJson<User[]>('/auth/users'),
  getPatients: async (search?: string) => fetchJson<Patient[]>(`/patients${search ? `?search=${encodeURIComponent(search)}` : ''}`),
  getPatientById: async (id: string) => fetchJson<Patient>(`/patients/${id}`),
  createPatient: async (patient: Partial<Patient>) => fetchJson<Patient>('/patients', { method: 'POST', body: JSON.stringify(patient) }),
  addVitals: async (patientId: string, vitals: any) => fetchJson<any>(`/patients/${patientId}/vitals`, { method: 'POST', body: JSON.stringify(vitals) }),
  getAppointments: async () => fetchJson<Appointment[]>('/appointments'),
  createAppointment: async (apt: Partial<Appointment>) => fetchJson<Appointment>('/appointments', { method: 'POST', body: JSON.stringify(apt) }),
  updateAppointmentStatus: async (id: string, status: string) => fetchJson<Appointment>(`/appointments/${id}/status`, { method: 'PATCH', body: JSON.stringify({ status }) }),
  getSoapNotes: async (patientId: string) => fetchJson<SoapNote[]>(`/clinical/soap/${patientId}`),
  createSoapNote: async (note: any) => fetchJson<SoapNote>('/clinical/soap', { method: 'POST', body: JSON.stringify(note) }),
  checkSafety: async (patientId: string, medications: string[]) => fetchJson<{ interactions: any[]; allergyWarnings: string[]; isSafe: boolean }>('/clinical/safety-check', { method: 'POST', body: JSON.stringify({ patientId, medications }) }),
  searchDiagnoses: async (q: string) => fetchJson<Array<{ code: string; description: string }>>(`/clinical/diagnoses/search?q=${encodeURIComponent(q)}`),
  getInventory: async () => fetchJson<Medication[]>('/pharmacy/inventory'),
  getPrescriptions: async () => fetchJson<Prescription[]>('/pharmacy/prescriptions'),
  dispensePrescription: async (id: string) => fetchJson<Prescription>(`/pharmacy/prescriptions/${id}/dispense`, { method: 'POST' }),
  getLabOrders: async () => fetchJson<LabOrder[]>('/lab'),
  getBeds: async () => fetchJson<Bed[]>('/hospital/beds'),
  getOccupancy: async () => fetchJson<{ totalBeds: number; occupiedBeds: number; occupancyRate: number; icuOccupancyRate: number }>('/hospital/occupancy'),
  getInvoices: async () => fetchJson<Invoice[]>('/billing/invoices'),
  getAuditLogs: async () => fetchJson<HipaaAuditLog[]>('/audit/logs'),
  assessTriage: async (data: { symptoms: string[]; duration: string; severity: number }) => fetchJson<TriageAssessment>('/triage/assess', { method: 'POST', body: JSON.stringify(data) })
};
