import React from 'react';
import { History, ShieldCheck } from 'lucide-react';

export const AuditSecurityPage: React.FC = () => {
  return (
    <div className="space-y-4 py-2 w-full">
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex justify-between items-center w-full">
        <div>
          <h2 className="text-xl font-bold text-slate-900">HIPAA Security & SOC-2 Audit Ledger</h2>
          <p className="text-xs text-slate-500 mt-0.5">Immutable audit trail of patient chart views, medication orders, and doctor overrides</p>
        </div>
      </div>
    </div>
  );
};
