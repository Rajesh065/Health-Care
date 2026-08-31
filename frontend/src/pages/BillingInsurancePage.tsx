import React from 'react';
import { CreditCard, CheckCircle, FileSpreadsheet } from 'lucide-react';

export const BillingInsurancePage: React.FC = () => (
  <div className="space-y-6">
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex justify-between items-center">
      <div>
        <h1 className="text-xl font-bold text-slate-900">Hospital Revenue Cycle & Insurance Claims (EDI 837)</h1>
        <p className="text-xs text-slate-500 mt-0.5">Automated ICD-10 charge capture, claim adjudication, and real-time payer eligibility</p>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
        <p className="text-xs font-bold text-slate-400 uppercase font-mono">CLAIMS ADJUDICATED</p>
        <p className="text-2xl font-bold text-slate-900">$1,420,500</p>
        <p className="text-xs text-emerald-600 font-semibold">98.4% Clean Claim Acceptance Rate</p>
      </div>

      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
        <p className="text-xs font-bold text-slate-400 uppercase font-mono">TOP PAYERS CONNECTED</p>
        <p className="text-2xl font-bold text-slate-900">Medicare & BCBS</p>
        <p className="text-xs text-slate-500">Real-time 270/271 eligibility verification</p>
      </div>

      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
        <p className="text-xs font-bold text-slate-400 uppercase font-mono">DENIAL RATE</p>
        <p className="text-2xl font-bold text-slate-900">1.6%</p>
        <p className="text-xs text-slate-500">Below national hospital benchmark (4.2%)</p>
      </div>
    </div>
  </div>
);
