import React from 'react';
import { CreditCard, ShieldCheck } from 'lucide-react';

export const BillingInsurancePage: React.FC = () => {
  return (
    <div className="space-y-4 py-2 w-full">
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex justify-between items-center w-full">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Hospital Financials & Insurance Clearinghouse</h2>
          <p className="text-xs text-slate-500 mt-0.5">EDI 837/835 real-time claims processing and patient co-pay reconciliation</p>
        </div>
        <span className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-xl font-mono">
          96.4% Claim Acceptance Rate
        </span>
      </div>
    </div>
  );
};
