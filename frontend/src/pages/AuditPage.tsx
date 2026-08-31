import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { HipaaAuditLog } from '../types';

export const AuditPage: React.FC = () => {
  const [logs, setLogs] = useState<HipaaAuditLog[]>([]);

  useEffect(() => {
    api.getAuditLogs().then(setLogs).catch(() => {});
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-black text-slate-900 tracking-tight">HIPAA Audit Logs & Access Trail</h1>
        <p className="text-xs text-slate-500">Immutable chronological ledger tracking all Protected Health Information (PHI) access</p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 uppercase font-bold text-slate-500">
              <tr>
                <th className="p-4">Timestamp</th>
                <th className="p-4">Staff / User</th>
                <th className="p-4">Role</th>
                <th className="p-4">Action</th>
                <th className="p-4">Resource Path</th>
                <th className="p-4">IP Address</th>
                <th className="p-4 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {logs.map(l => (
                <tr key={l.id} className="hover:bg-slate-50/70">
                  <td className="p-4 font-mono text-[11px] text-slate-500">{new Date(l.timestamp).toLocaleString()}</td>
                  <td className="p-4 font-bold text-slate-900">{l.userName}</td>
                  <td className="p-4 font-semibold text-slate-600">{l.userRole}</td>
                  <td className="p-4 font-mono font-bold text-sky-700 text-[11px]">{l.action}</td>
                  <td className="p-4 font-mono text-slate-500 text-[11px]">{l.resourcePath}</td>
                  <td className="p-4 text-slate-500 font-mono text-[11px]">{l.ipAddress}</td>
                  <td className="p-4 text-right">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                      {l.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
