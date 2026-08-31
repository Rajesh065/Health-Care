import React from 'react';
import { Activity, Database, CheckCircle2, ShieldCheck, Download } from 'lucide-react';

export const EhrRecordsPage: React.FC = () => (
  <div className="space-y-6">
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex justify-between items-center">
      <div>
        <h1 className="text-xl font-bold text-slate-900">FHIR R4 Electronic Health Records (EHR) & Vitals</h1>
        <p className="text-xs text-slate-500 mt-0.5">HL7 interoperable clinical repository with 1,800+ indexed diagnostic protocols</p>
      </div>
      <button className="flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs px-3.5 py-2 rounded-xl transition-all border border-slate-200">
        <Download className="w-4 h-4" />
        <span>Export FHIR JSON</span>
      </button>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
        <p className="text-xs font-bold text-slate-400 uppercase font-mono">ICD-10 PROTOCOLS</p>
        <p className="text-2xl font-bold text-slate-900">1,800+ Codes</p>
        <p className="text-xs text-slate-500">Fully validated across 12 clinical specialties</p>
      </div>

      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
        <p className="text-xs font-bold text-slate-400 uppercase font-mono">SNOMED-CT MAPPINGS</p>
        <p className="text-2xl font-bold text-slate-900">100% Normalized</p>
        <p className="text-xs text-slate-500">Standardized clinical observation terminologies</p>
      </div>

      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
        <p className="text-xs font-bold text-slate-400 uppercase font-mono">EHR SYNC STATUS</p>
        <p className="text-2xl font-bold text-emerald-600">Active Live</p>
        <p className="text-xs text-slate-500">Zero data replication lag recorded</p>
      </div>
    </div>
  </div>
);
