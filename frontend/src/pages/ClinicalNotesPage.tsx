import React from 'react';
import { FileText, Pill, Plus } from 'lucide-react';

export const ClinicalNotesPage: React.FC = () => (
  <div className="space-y-6">
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex justify-between items-center">
      <div>
        <h1 className="text-xl font-bold text-slate-900">Clinical SOAP Notes & e-Prescription Pad</h1>
        <p className="text-xs text-slate-500 mt-0.5">Standardized physician documentation and drug-drug interaction safety checker</p>
      </div>
      <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-xs flex items-center gap-1.5 transition-all">
        <Plus className="w-4 h-4" />
        <span>New SOAP Note</span>
      </button>
    </div>

    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
      <div className="border-b border-slate-100 pb-3">
        <h2 className="text-sm font-bold text-slate-900">Recent Signed Physician Progress Notes</h2>
        <p className="text-xs text-slate-500">All notes are cryptographically signed and locked against alteration</p>
      </div>

      <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3 text-xs">
        <div className="flex justify-between items-center">
          <span className="font-bold text-slate-900">Arthur Pendelton (MRN-8829104) — Cardiology Progress Note</span>
          <span className="font-mono text-[11px] text-teal-700 bg-teal-50 border border-teal-200 px-2 py-0.5 rounded">Signed by Dr. Sarah Jenkins, MD</span>
        </div>
        <p className="text-slate-600"><strong className="text-slate-800">Assessment:</strong> Essential hypertension well controlled on Lisinopril 20mg daily. Stable exertional angina without acute ischemic progression.</p>
        <p className="text-slate-600"><strong className="text-slate-800">Plan:</strong> Maintain current pharmacotherapy. Order follow-up lipid panel in 6 months.</p>
      </div>
    </div>
  </div>
);
