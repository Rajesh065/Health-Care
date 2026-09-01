import React, { useState } from 'react';
import { FileText, ShieldCheck, Search, Filter, Activity, HeartPulse, User } from 'lucide-react';

const EHR_PATIENTS = [
  { id: 'EHR-90482', name: 'Robert Chen', age: 52, gender: 'Male', snomed: '401314000', icd10: 'I20.0', condition: 'Unstable Angina', physician: 'Dr. Maya Lin, MD', date: 'Aug 31, 2026', status: 'Inpatient (Ward 3B)' },
  { id: 'EHR-88319', name: 'Eleanor Vance', age: 64, gender: 'Female', snomed: '22298006', icd10: 'I25.10', condition: 'Atherosclerotic Heart Disease', physician: 'Dr. Maya Lin, MD', date: 'Aug 30, 2026', status: 'Outpatient Follow-up' },
  { id: 'EHR-71044', name: 'David Miller', age: 38, gender: 'Male', snomed: '37796009', icd10: 'G43.909', condition: 'Refractory Migraine with Aura', physician: 'Dr. David Kim, MD', date: 'Aug 29, 2026', status: 'Chamber Consultation' },
  { id: 'EHR-60291', name: 'Maria Gonzalez', age: 71, gender: 'Female', snomed: '42343007', icd10: 'I21.0', condition: 'Acute STEMI & Heart Failure', physician: 'Dr. Maya Lin, MD', date: 'Aug 31, 2026', status: 'Critical (ICU North)' }
];

export const EhrRecordsPage: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedRecord, setSelectedRecord] = useState(EHR_PATIENTS[0]);

  const filtered = EHR_PATIENTS.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.id.toLowerCase().includes(search.toLowerCase()) ||
    p.icd10.toLowerCase().includes(search.toLowerCase()) ||
    p.condition.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-5 py-2 w-full font-sans">
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-col md:flex-row justify-between items-start md:items-center gap-4 w-full">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold text-slate-900">Hospital Electronic Health Records (FHIR Central)</h2>
            <span className="text-[10px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded font-mono">
              HL7 FHIR R4 & SNOMED-CT
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">Longitudinal clinical charting database for 1,280 active hospital patients</p>
        </div>
        <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-xl flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4" />
          HIPAA AES-256 Encrypted
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
          <div className="flex justify-between items-center gap-3">
            <div className="relative flex-1">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Filter by Patient Name, ICD-10, or Condition..."
                className="w-full pl-9 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs outline-none"
              />
            </div>
            <span className="text-xs font-mono text-slate-400 shrink-0">{filtered.length} Charts</span>
          </div>

          <div className="space-y-2">
            {filtered.map(p => (
              <div
                key={p.id}
                onClick={() => setSelectedRecord(p)}
                className={`p-3.5 rounded-xl cursor-pointer transition-all border ${
                  selectedRecord.id === p.id
                    ? 'bg-blue-50/60 border-blue-800 shadow-xs'
                    : 'bg-white border-slate-100 hover:border-slate-300'
                }`}
              >
                <div className="flex justify-between items-start text-xs">
                  <div>
                    <span className="font-mono text-[10px] font-bold text-slate-500">{p.id} • ICD-10 {p.icd10}</span>
                    <h4 className="font-bold text-slate-900 mt-0.5">{p.name} ({p.age}y, {p.gender})</h4>
                    <p className="text-[11px] text-slate-600">{p.condition} • <strong className="text-slate-800">{p.physician}</strong></p>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-800 font-mono">
                    {p.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4 text-xs">
          <div className="border-b border-slate-100 pb-3">
            <span className="font-mono text-[10px] font-bold text-blue-900 bg-blue-50 px-2 py-0.5 rounded">
              FHIR RESOURCE: {selectedRecord.id}
            </span>
            <h3 className="font-bold text-base text-slate-900 mt-1">{selectedRecord.name}</h3>
            <p className="text-[11px] text-slate-500">Primary Attending: {selectedRecord.physician}</p>
          </div>

          <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5 font-mono text-[11px]">
            <div className="flex justify-between text-slate-700">
              <span>SNOMED-CT CONCEPT:</span>
              <span className="font-bold text-slate-900">{selectedRecord.snomed}</span>
            </div>
            <div className="flex justify-between text-slate-700">
              <span>ICD-10-CM DIAGNOSIS:</span>
              <span className="font-bold text-slate-900">{selectedRecord.icd10} ({selectedRecord.condition})</span>
            </div>
            <div className="flex justify-between text-slate-700">
              <span>RECORD ENCOUNTER DATE:</span>
              <span className="font-bold text-slate-900">{selectedRecord.date}</span>
            </div>
          </div>

          <div className="p-3.5 bg-blue-50/50 border border-blue-200 rounded-xl space-y-1">
            <span className="font-bold text-blue-950 block">Physician Clinical Progress Note</span>
            <p className="text-[11px] text-slate-700 leading-relaxed">
              Patient exhibits stable hemodynamic parameters post-intervention. Serial cardiac enzyme telemetry shows declining troponin curve. Continue standard pharmacotherapy regimen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
