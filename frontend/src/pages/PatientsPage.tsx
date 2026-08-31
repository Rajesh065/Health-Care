import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { Patient } from '../types';
import {
  Users,
  Search,
  Filter,
  Activity,
  Pill,
  AlertTriangle,
  FileText,
  Plus,
  X,
  CheckCircle,
  Phone,
  Calendar
} from 'lucide-react';

export const PatientsPage: React.FC = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDept, setSelectedDept] = useState('ALL');
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);

  useEffect(() => {
    api.getPatients().then(setPatients).catch(() => {});
  }, []);

  const filteredPatients = patients.filter(p => {
    const matchesSearch = p.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.mrn.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.primaryCondition.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDept = selectedDept === 'ALL' || p.department === selectedDept;
    return matchesSearch && matchesDept;
  });

  return (
    <div className="space-y-6">
      {/* Header with Title & Filter Bar */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-xl font-bold text-slate-900">Hospital Patient Clinical Directory</h1>
            <p className="text-xs text-slate-500 mt-0.5">
              Comprehensive Electronic Health Records (EHR), active vitals, and diagnostic histories
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500 font-medium">Total Registered:</span>
            <span className="text-xs font-bold bg-slate-100 text-slate-800 px-2 py-0.5 rounded-md">
              {filteredPatients.length} Patients
            </span>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2 border-t border-slate-100">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Filter by patient name, MRN, or condition..."
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 transition-all"
            />
          </div>

          <div className="flex items-center gap-2">
            <select
              value={selectedDept}
              onChange={e => setSelectedDept(e.target.value)}
              className="bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
            >
              <option value="ALL">All Departments</option>
              <option value="Cardiology">Cardiology</option>
              <option value="Endocrinology">Endocrinology</option>
              <option value="Pulmonology">Pulmonology</option>
              <option value="Oncology">Oncology</option>
            </select>
          </div>
        </div>
      </div>

      {/* Patient Cards / Records List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredPatients.map(p => (
          <div
            key={p.id}
            onClick={() => setSelectedPatient(p)}
            className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs hover:border-teal-500/60 hover:shadow-sm transition-all cursor-pointer space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-2.5">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-slate-900">{p.fullName}</span>
                    <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">
                      {p.bloodGroup}
                    </span>
                  </div>
                  <p className="text-[11px] font-mono text-teal-700 font-semibold">{p.mrn} • {p.gender}, {p.age} yrs</p>
                </div>

                <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                  p.status === 'ICU_CRITICAL' ? 'bg-rose-100 text-rose-800' :
                  p.status === 'INPATIENT_ADMITTED' ? 'bg-teal-100 text-teal-800' :
                  'bg-blue-100 text-blue-800'
                }`}>
                  {p.status === 'ICU_CRITICAL' ? 'ICU Critical' :
                   p.status === 'INPATIENT_ADMITTED' ? 'Inpatient' : 'Outpatient'}
                </span>
              </div>

              <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 text-xs">
                <p className="text-[10px] font-bold text-slate-400 uppercase">Primary Diagnosis</p>
                <p className="font-semibold text-slate-800 mt-0.5">{p.primaryCondition}</p>
                <p className="text-[10px] font-mono text-slate-500 mt-0.5">ICD-10: {p.icd10Code}</p>
              </div>

              {/* Allergy tags */}
              <div className="flex flex-wrap gap-1.5">
                {p.allergies.map(alg => (
                  <span key={alg} className="text-[10px] font-semibold bg-rose-50 text-rose-700 border border-rose-200 px-2 py-0.5 rounded-md flex items-center gap-1">
                    <AlertTriangle className="w-2.5 h-2.5" /> {alg}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom metadata */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
              <span>{p.roomNumber}</span>
              <span className="font-bold text-teal-700 hover:underline">View Full Chart →</span>
            </div>
          </div>
        ))}
      </div>

      {/* Patient Detailed Modal / Drawer */}
      {selectedPatient && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full border border-slate-200 shadow-2xl p-6 max-h-[90vh] overflow-y-auto space-y-5">
            <div className="flex justify-between items-start border-b border-slate-100 pb-4">
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-lg font-bold text-slate-900">{selectedPatient.fullName}</h2>
                  <span className="text-xs font-mono font-bold bg-teal-50 text-teal-700 border border-teal-200 px-2 py-0.5 rounded">
                    {selectedPatient.mrn}
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">
                  DOB: {selectedPatient.dateOfBirth} ({selectedPatient.age} yrs, {selectedPatient.gender}) • Blood: {selectedPatient.bloodGroup}
                </p>
              </div>
              <button
                onClick={() => setSelectedPatient(null)}
                className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Vitals Snapshot */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase text-slate-400 font-mono">Current Vital Signs</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <p className="text-[10px] text-slate-500 font-semibold">Blood Pressure</p>
                  <p className="text-sm font-bold text-slate-900">{selectedPatient.vitals.bloodPressure}</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <p className="text-[10px] text-slate-500 font-semibold">Heart Rate</p>
                  <p className="text-sm font-bold text-slate-900">{selectedPatient.vitals.heartRateBpm} bpm</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <p className="text-[10px] text-slate-500 font-semibold">SpO2 Level</p>
                  <p className="text-sm font-bold text-slate-900">{selectedPatient.vitals.oxygenSaturationPct}%</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <p className="text-[10px] text-slate-500 font-semibold">Temperature</p>
                  <p className="text-sm font-bold text-slate-900">{selectedPatient.vitals.bodyTemperatureF} °F</p>
                </div>
              </div>
            </div>

            {/* Active Medications */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase text-slate-400 font-mono">Active Prescribed Medications</h3>
              <div className="space-y-2">
                {selectedPatient.medications.map(med => (
                  <div key={med.drugName} className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex justify-between items-center text-xs">
                    <div>
                      <p className="font-bold text-slate-900">{med.drugName} {med.dosage}</p>
                      <p className="text-[11px] text-slate-500">{med.frequency} • Prescribed by {med.prescribingDoctor}</p>
                    </div>
                    <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">Active</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="p-3.5 bg-teal-50/50 rounded-2xl border border-teal-100 text-xs flex justify-between items-center">
              <div>
                <p className="font-bold text-slate-800">Emergency Contact: {selectedPatient.emergencyContact.name}</p>
                <p className="text-slate-500 text-[11px]">{selectedPatient.emergencyContact.relationship}</p>
              </div>
              <a href={`tel:${selectedPatient.emergencyContact.phone}`} className="flex items-center gap-1.5 font-bold text-teal-700 bg-white px-3 py-1.5 rounded-xl border border-teal-200 shadow-xs">
                <Phone className="w-3.5 h-3.5" />
                <span>{selectedPatient.emergencyContact.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
