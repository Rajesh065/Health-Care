import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { HipaaAuditLog } from '../types';

export const AuditPage: React.FC = () => {
  const [logs, setLogs] = useState<HipaaAuditLog[]>([]);
  useEffect(() => { api.getAuditLogs().then(setLogs).catch(() => {}); }, []);
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-black text-slate-900">HIPAA Access Audit Trail</h1>
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden text-xs shadow-sm">
        <table className="w-full text-left">
          <thead className="bg-slate-50 border-b border-slate-200 font-bold text-slate-500">
            <tr><th className="p-3">Time</th><th className="p-3">User</th><th className="p-3">Action</th><th className="p-3">Status</th></tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {logs.map(l => (
              <tr key={l.id} className="hover:bg-slate-50">
                <td className="p-3 text-slate-500">{new Date(l.timestamp).toLocaleTimeString()}</td>
                <td className="p-3 font-bold">{l.userName}</td>
                <td className="p-3 text-sky-700 font-mono">{l.action}</td>
                <td className="p-3"><span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">{l.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
