import React from 'react';
import { History, ShieldCheck, Lock, UserCheck } from 'lucide-react';

const AUDIT_LOGS = [
  { id: 'LOG-8819', timestamp: '2026-09-01 10:42:19 EST', user: 'Dr. Maya Lin, MD', action: 'EHR Chart Access & Vitals Telemetry View', patientId: 'PT-90482 (Robert Chen)', sha256: '8f7a...190c' },
  { id: 'LOG-8818', timestamp: '2026-09-01 10:38:04 EST', user: 'Dr. Maya Lin, MD', action: 'E-Prescription Order Created (Atorvastatin 40mg)', patientId: 'PT-90482 (Robert Chen)', sha256: '4b2c...aa91' },
  { id: 'LOG-8817', timestamp: '2026-09-01 10:30:00 EST', user: 'Priya Nair (Desk Lead)', action: 'Outpatient Token Checked-In (TK-101)', patientId: 'PT-90482 (Robert Chen)', sha256: '1a90...df32' },
  { id: 'LOG-8816', timestamp: '2026-09-01 09:15:22 EST', user: 'Dr. Arthur Sterling, MD', action: 'Executive Bed Allocation Override (ICU Bed 04)', patientId: 'PT-60291 (Maria Gonzalez)', sha256: '901b...773a' }
];

export const AuditSecurityPage: React.FC = () => {
  return (
    <div className="space-y-5 py-2 w-full font-sans">
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex justify-between items-center w-full">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold text-slate-900">HIPAA Security & SOC-2 Audit Ledger</h2>
            <span className="text-[10px] font-bold bg-amber-50 text-amber-900 border border-amber-200 px-2 py-0.5 rounded font-mono">
              IMMUTABLE AUDIT TRAIL
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">Cryptographically signed access records of clinical charts and prescription orders</p>
        </div>
        <span className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-xl font-mono flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4" />
          SOC-2 Type II Certified
        </span>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-3">
        <div className="border-b border-slate-100 pb-2 text-xs font-bold text-slate-900 font-mono">
          <span>RECENT CLINICAL ACTION ACCESS RECORDS</span>
        </div>

        <div className="space-y-2">
          {AUDIT_LOGS.map(log => (
            <div key={log.id} className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1 text-xs">
              <div className="flex justify-between items-start">
                <div>
                  <span className="font-bold text-slate-900">{log.action}</span>
                  <p className="text-[11px] text-slate-600">User: <strong className="text-slate-800">{log.user}</strong> • Target: {log.patientId}</p>
                </div>
                <span className="font-mono text-[10px] text-slate-400">{log.timestamp}</span>
              </div>
              <div className="pt-1 border-t border-slate-200/50 flex justify-between text-[10px] font-mono text-slate-400">
                <span>AUDIT ID: {log.id}</span>
                <span>SHA-256: {log.sha256}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
