import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { Invoice } from '../types';

export const BillingPage: React.FC = () => {
  const [invoices, setInvoices] = useState<Invoice[]>([]);

  useEffect(() => {
    api.getInvoices().then(setInvoices).catch(() => {});
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-black text-slate-900 tracking-tight">Billing & Insurance Claims</h1>
        <p className="text-xs text-slate-500">Itemized CPT code invoices, insurance copay calculations, and real-time claims</p>
      </div>

      <div className="space-y-4">
        {invoices.map(inv => (
          <div key={inv.id} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-black text-base text-slate-900">{inv.patientName}</h3>
                <span className="text-xs font-mono font-bold bg-slate-100 text-slate-700 px-2 py-0.5 rounded">{inv.invoiceNumber}</span>
              </div>
              <p className="text-xs text-slate-500 mt-1">Issued: {new Date(inv.issuedDate).toLocaleDateString()}</p>
            </div>

            <div className="flex items-center gap-6">
              <div className="text-right">
                <p className="text-xs text-slate-500">Total Billed: <span className="font-bold text-slate-900">${inv.subtotal.toFixed(2)}</span></p>
                <p className="text-xs text-slate-500">Patient Copay: <span className="font-bold text-emerald-700">${inv.patientCopay.toFixed(2)}</span></p>
              </div>
              <span className={`text-xs font-extrabold px-3 py-1 rounded-full ${
                inv.status === 'PAID' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
              }`}>
                {inv.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
