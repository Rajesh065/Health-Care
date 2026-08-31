import React, { useState } from 'react';
import { api } from '../services/api';

export const ClinicalPage: React.FC = () => {
  const [soap, setSoap] = useState({ subjective: 'Patient reports mild headache.', objective: 'BP 138/88 mmHg.', assessment: 'Primary HTN.', plan: 'Diet and Amlodipine 5mg.' });

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-black text-slate-900">Clinical Consultation & SOAP Notes</h1>
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
        <div>
          <label className="text-xs font-bold text-slate-700">Subjective</label>
          <textarea value={soap.subjective} onChange={e => setSoap({...soap, subjective: e.target.value})} className="w-full text-xs p-2 border border-slate-200 rounded-xl" rows={2} />
        </div>
        <div>
          <label className="text-xs font-bold text-slate-700">Objective</label>
          <textarea value={soap.objective} onChange={e => setSoap({...soap, objective: e.target.value})} className="w-full text-xs p-2 border border-slate-200 rounded-xl" rows={2} />
        </div>
        <button className="bg-sky-600 text-white font-bold px-4 py-2 rounded-xl text-xs">Sign & Save SOAP</button>
      </div>
    </div>
  );
};
