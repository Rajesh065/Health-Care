import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { Patient, VitalSign } from '../types';
import { Search, Heart, Activity, AlertCircle, Plus, FileText, CheckCircle2 } from 'lucide-react';

export const PatientsPage: React.FC = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [search, setSearch] = useState('');
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [newVital, setNewVital] = useState({
    bloodPressureSystolic: 120,
    bloodPressureDiastolic: 80,
    heartRateBpm: 72,
    respiratoryRateBpm: 16,
    temperatureCelsius: 36.6,
    oxygenSaturationPercent: 98,
    bloodGlucoseMgDl: 100,
    weightKg: 75,
    heightCm: 175,
    recordedBy: 'Nurse Clara Oswald, RN'
  });
  const [showVitalModal, setShowVitalModal] = useState(false);

  useEffect(() => {
    loadPatients();
  }, [search]);

  const loadPatients = async () => {
    const data = await api.getPatients(search);
    setPatients(data);
    if (data.length > 0 && !selectedPatient) setSelectedPatient(data[0]);
  };

  const handleSaveVital = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPatient) return;
    await api.addVitals(selectedPatient.id, newVital);
    const updated = await api.getPatientById(selectedPatient.id);
    setSelectedPatient(updated);
    setShowVitalModal(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">Electronic Health Records (EHR)</h1>
          <p className="text-xs text-slate-500">Comprehensive patient demographics, historical vitals, allergies & chronic diagnoses</p>
        </div>
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by Name or MRN..."
            className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Patient Selection List */}
        <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm space-y-2 h-[calc(100vh-230px)] overflow-y-auto custom-scrollbar">
          {patients.map(p => {
            const isSelected = selectedPatient?.id === p.id;
            return (
              <div
                key={p.id}
                onClick={() => setSelectedPatient(p)}
                className={`p-3.5 rounded-xl cursor-pointer transition-all border ${
                  isSelected ? 'bg-sky-50/80 border-sky-300 shadow-sm' : 'bg-white border-slate-100 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-slate-900">{p.firstName} {p.lastName}</span>
                  <span className="text-[11px] font-mono font-bold bg-slate-100 text-slate-700 px-2 py-0.5 rounded">{p.mrn}</span>
                </div>
                <div className="mt-1.5 flex items-center justify-between text-xs text-slate-500">
                  <span>{p.gender} • DOB {p.dateOfBirth}</span>
                  <span className="font-semibold text-sky-700">{p.bloodType}</span>
                </div>
                {p.allergies.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1">
                    {p.allergies.map(a => (
                      <span key={a.id} className="text-[10px] font-bold bg-rose-50 text-rose-700 border border-rose-200 px-1.5 py-0.5 rounded">
                        {a.substance} ({a.severity})
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Patient Chart Detail */}
        {selectedPatient ? (
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-3">
              <div>
                <div className="flex items-center gap-3">
                  <h2 className="text-xl font-black text-slate-900">{selectedPatient.firstName} {selectedPatient.lastName}</h2>
                  <span className="text-xs font-mono font-bold bg-sky-100 text-sky-800 px-2 py-0.5 rounded-md">{selectedPatient.mrn}</span>
                  <span className="text-xs font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-md">Blood Type: {selectedPatient.bloodType}</span>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  DOB: {selectedPatient.dateOfBirth} | Phone: {selectedPatient.phone} | Email: {selectedPatient.email}
                </p>
                <p className="text-xs text-slate-500">Insurance: <span className="font-semibold text-slate-800">{selectedPatient.insurance.provider} (Policy: {selectedPatient.insurance.policyNumber})</span></p>
              </div>
              <button
                onClick={() => setShowVitalModal(true)}
                className="bg-medblue-600 hover:bg-medblue-700 text-white text-xs font-bold px-3.5 py-2 rounded-xl flex items-center gap-1.5 shadow-sm transition-colors"
              >
                <Plus className="w-4 h-4" /> Record Vitals
              </button>
            </div>

            {/* Vitals Summary Grid */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
                <Activity className="w-4 h-4 text-medblue-600" /> Current Vitals
              </h3>
              {selectedPatient.recentVitals.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80">
                    <p className="text-[11px] font-bold text-slate-500">Blood Pressure</p>
                    <p className="text-lg font-black text-slate-900 mt-1">
                      {selectedPatient.recentVitals[0].bloodPressureSystolic}/{selectedPatient.recentVitals[0].bloodPressureDiastolic} <span className="text-xs font-normal text-slate-500">mmHg</span>
                    </p>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80">
                    <p className="text-[11px] font-bold text-slate-500">Heart Rate</p>
                    <p className="text-lg font-black text-slate-900 mt-1">
                      {selectedPatient.recentVitals[0].heartRateBpm} <span className="text-xs font-normal text-slate-500">BPM</span>
                    </p>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80">
                    <p className="text-[11px] font-bold text-slate-500">Oxygen Sat (SpO2)</p>
                    <p className="text-lg font-black text-slate-900 mt-1">
                      {selectedPatient.recentVitals[0].oxygenSaturationPercent}%
                    </p>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80">
                    <p className="text-[11px] font-bold text-slate-500">Temperature</p>
                    <p className="text-lg font-black text-slate-900 mt-1">
                      {selectedPatient.recentVitals[0].temperatureCelsius}°C
                    </p>
                  </div>
                </div>
              ) : (
                <p className="text-xs text-slate-400">No recent vitals recorded.</p>
              )}
            </div>

            {/* Diagnoses & Allergies */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Active Conditions */}
              <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/50">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-medblue-600" /> Active Medical Conditions (ICD-10)
                </h4>
                <div className="space-y-2">
                  {selectedPatient.conditions.map(c => (
                    <div key={c.id} className="bg-white p-2.5 rounded-lg border border-slate-200 text-xs">
                      <div className="flex items-center justify-between font-bold text-slate-900">
                        <span>{c.conditionName}</span>
                        <span className="font-mono bg-sky-50 text-sky-700 px-1.5 py-0.5 rounded">{c.icd10Code}</span>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-0.5">Diagnosed: {c.diagnosedDate} by {c.diagnosedBy}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recorded Allergies */}
              <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/50">
                <h4 className="text-xs font-bold uppercase tracking-wider text-rose-700 mb-2 flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5 text-rose-600" /> Documented Allergies & Reactions
                </h4>
                <div className="space-y-2">
                  {selectedPatient.allergies.map(a => (
                    <div key={a.id} className="bg-white p-2.5 rounded-lg border border-rose-200 text-xs">
                      <div className="flex items-center justify-between font-bold text-rose-900">
                        <span>{a.substance} ({a.category})</span>
                        <span className="bg-rose-100 text-rose-800 text-[10px] px-1.5 py-0.5 rounded uppercase">{a.severity}</span>
                      </div>
                      <p className="text-[11px] text-slate-600 mt-0.5">Reaction: {a.reaction}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>

      {/* Modal for recording vitals */}
      {showVitalModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 space-y-4 shadow-2xl">
            <h3 className="text-lg font-black text-slate-900">Record Patient Vitals</h3>
            <form onSubmit={handleSaveVital} className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-slate-700">BP Systolic (mmHg)</label>
                  <input
                    type="number"
                    value={newVital.bloodPressureSystolic}
                    onChange={e => setNewVital({...newVital, bloodPressureSystolic: parseInt(e.target.value)})}
                    className="w-full border border-slate-200 p-2 rounded-lg text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700">BP Diastolic (mmHg)</label>
                  <input
                    type="number"
                    value={newVital.bloodPressureDiastolic}
                    onChange={e => setNewVital({...newVital, bloodPressureDiastolic: parseInt(e.target.value)})}
                    className="w-full border border-slate-200 p-2 rounded-lg text-sm"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-slate-700">Heart Rate (BPM)</label>
                  <input
                    type="number"
                    value={newVital.heartRateBpm}
                    onChange={e => setNewVital({...newVital, heartRateBpm: parseInt(e.target.value)})}
                    className="w-full border border-slate-200 p-2 rounded-lg text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700">Oxygen Saturation (%)</label>
                  <input
                    type="number"
                    value={newVital.oxygenSaturationPercent}
                    onChange={e => setNewVital({...newVital, oxygenSaturationPercent: parseInt(e.target.value)})}
                    className="w-full border border-slate-200 p-2 rounded-lg text-sm"
                  />
                </div>
              </div>
              <div className="flex justify-end gap-2 pt-3">
                <button type="button" onClick={() => setShowVitalModal(false)} className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-lg">Cancel</button>
                <button type="submit" className="px-4 py-2 text-xs font-bold bg-medblue-600 hover:bg-medblue-700 text-white rounded-lg shadow-sm">Save Vitals</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
