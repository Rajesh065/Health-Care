import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { Patient } from '../types';
import { Search, Activity, AlertCircle, Plus } from 'lucide-react';

export const PatientsPage: React.FC = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [search, setSearch] = useState('');
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);

  useEffect(() => {
    api.getPatients(search).then(data => {
      setPatients(data);
      if (data.length > 0 && !selectedPatient) setSelectedPatient(data[0]);
    });
  }, [search]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-black text-slate-900">Patient Electronic Health Records (EHR)</h1>
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search patient by name..."
          className="border border-slate-200 rounded-xl px-4 py-2 text-sm bg-white"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm space-y-2">
          {patients.map(p => (
            <div
              key={p.id}
              onClick={() => setSelectedPatient(p)}
              className={`p-3.5 rounded-xl cursor-pointer border ${selectedPatient?.id === p.id ? 'bg-sky-50 border-sky-300' : 'bg-white border-slate-100'}`}
            >
              <p className="font-bold text-sm text-slate-900">{p.firstName} {p.lastName}</p>
              <p className="text-xs text-slate-500">MRN: {p.mrn} • {p.bloodType}</p>
            </div>
          ))}
        </div>

        {selectedPatient && (
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-xl font-black text-slate-900">{selectedPatient.firstName} {selectedPatient.lastName} ({selectedPatient.mrn})</h2>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <p className="font-bold text-slate-500">Allergies</p>
                <p className="font-bold text-rose-600 mt-1">{selectedPatient.allergies.map(a => `${a.substance} (${a.severity})`).join(', ') || 'None'}</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <p className="font-bold text-slate-500">Conditions</p>
                <p className="font-bold text-slate-900 mt-1">{selectedPatient.conditions.map(c => c.conditionName).join(', ') || 'None'}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
