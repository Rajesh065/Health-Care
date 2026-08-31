import React from 'react';
import { ShieldCheck, Lock, CheckCircle2 } from 'lucide-react';

export const AuditSecurityPage: React.FC = () => (
  <div className="space-y-6">
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex justify-between items-center">
      <div>
        <h1 className="text-xl font-bold text-slate-900">HIPAA Security Rule § 164.312(b) Audit Controls</h1>
        <p className="text-xs text-slate-500 mt-0.5">Tamper-proof cryptographic access logging for all protected health information (PHI)</p>
      </div>
      <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 px-3 py-1.5 rounded-xl text-xs font-bold">
        <ShieldCheck className="w-4 h-4" />
        <span>100% HIPAA Certified</span>
      </div>
    </div>

    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-3 text-xs">
      <p className="font-bold text-slate-800">Immutable SHA-256 Access Trail</p>
      <p className="text-slate-500">Every EHR chart view, telemedicine session, prescription dispatch, and billing export is recorded with user identity, timestamp, and cryptographic signature.</p>
    </div>
  </div>
);
