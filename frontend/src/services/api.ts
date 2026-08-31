import { Patient, Appointment, ClinicalNote } from '../types';

const API_BASE = 'http://localhost:5000/api/v1';

async function fetchJson<T>(url: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}${url}`, {
    ...options,
    headers: { 'Content-Type': 'application/json', ...(options?.headers || {}) }
  });
  if (!res.ok) throw new Error(`API Error: ${res.statusText}`);
  const json = await res.json();
  return json.data;
}

export const api = {
  getPatients: () => fetchJson<Patient[]>('/patients'),
  getPatientById: (id: string) => fetchJson<Patient>(`/patients/${id}`),
  createPatient: (p: Partial<Patient>) => fetchJson<Patient>('/patients', { method: 'POST', body: JSON.stringify(p) }),
  getAppointments: () => fetchJson<Appointment[]>('/appointments'),
  getClinicalNotes: () => fetchJson<ClinicalNote[]>('/notes')
};
