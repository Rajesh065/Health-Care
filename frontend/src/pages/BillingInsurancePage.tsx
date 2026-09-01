import React, { useState } from 'react';
import { CreditCard, ShieldCheck, CheckCircle2, AlertCircle, Clock } from 'lucide-react';

const CLAIMS_DATA = [
  { claimId: 'CLM-90481-BCBS', patientName: 'Robert Chen', payer: 'BlueCross BlueShield', billedUsd: 1450.00, coveredUsd: 1250.00, copayUsd: 200.00, status: 'ACCEPTED_PAID', date: 'Aug 30, 2026' },
  { claimId: 'CLM-88319-AET', patientName: 'Eleanor Vance', payer: 'Aetna Choice POS II', billedUsd: 2200.00, coveredUsd: 1950.00, copayUsd: 250.00, status: 'ACCEPTED_PAID', date: 'Aug 30, 2026' },
  { claimId: 'CLM-71044-UHC', patientName: 'David Miller', payer: 'UnitedHealthcare', billedUsd: 650.00, coveredUsd: 520.00, copayUsd: 130.00, status: 'UNDER_REVIEW', date: 'Aug 31, 2026' },
  { claimId: 'CLM-60291-MED', patientName: 'Maria Gonzalez', payer: 'Medicare Part B', billedUsd: 8400.00, coveredUsd: 7800.00, copayUsd: 600.00, status: 'PROCESSING_CLEARINGHOUSE', date: 'Sept 01, 2026' }
];

export const BillingInsurancePage: React.FC = () => {
  return (
    <div className="space-y-5 py-2 w-full font-sans">
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex justify-between items-center w-full">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Hospital Financials & Insurance Clearinghouse</h2>
          <p className="text-xs text-slate-500 mt-0.5">EDI 837/835 real-time claims processing and patient co-pay reconciliation</p>
        </div>
        <span className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-xl font-mono">
          96.4% Claim Acceptance Rate
        </span>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
        <div className="flex justify-between items-center border-b border-slate-100 pb-3 text-xs font-bold text-slate-900 font-mono">
          <span>REAL-TIME EDI 837 CLAIMS DISPATCH</span>
          <span className="text-slate-400">DAILY SETTLEMENT: $184,500 USD</span>
        </div>

        <div className="space-y-2.5">
          {CLAIMS_DATA.map(c => (
            <div key={c.claimId} className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex justify-between items-center text-xs">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-[10px] bg-slate-200 text-slate-800 px-2 py-0.5 rounded">{c.claimId}</span>
                  <h4 className="font-bold text-slate-900">{c.patientName}</h4>
                </div>
                <p className="text-[11px] text-slate-500 mt-0.5">{c.payer} • Date: {c.date}</p>
              </div>

              <div className="text-right font-mono">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded block mb-1 ${
                  c.status === 'ACCEPTED_PAID'
                    ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                    : 'bg-amber-50 text-amber-800 border border-amber-200'
                }`}>
                  {c.status.replace('_', ' ')}
                </span>
                <span className="text-[11px] font-bold text-slate-900">${c.billedUsd.toFixed(2)} USD</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
