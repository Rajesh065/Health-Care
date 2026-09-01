import React from 'react';
import { FileText, ShieldCheck } from 'lucide-react';

export const EhrRecordsPage: React.FC = () => {
  return (
    <div className="space-y-4 py-2 w-full">
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex justify-between items-center w-full">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Hospital Electronic Health Records (FHIR Central)</h2>
          <p className="text-xs text-slate-500 mt-0.5">SNOMED-CT & ICD-10 standardized clinical charting database</p>
        </div>
        <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-xl flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4" />
          HIPAA Encryption Active
        </span>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs text-xs space-y-3">
        <p className="text-slate-600 leading-relaxed">
          The central EHR registry contains longitudinal clinical records, including telemetry biomarkers, surgical operative notes, and multi-department imaging PACS series for 1,280 active hospital patients.
        </p>
      </div>
    </div>
  );
};
