import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { Invoice } from '../types';

export const BillingPage: React.FC = () => {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  useEffect(() => { api.getInvoices().then(setInvoices).catch(() => {}); }, []);
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-black text-slate-900">Billing & Invoices</h1>
      <div className="space-y-3">
        {invoices.map(i => (
          <div key={i.id} className="bg-white p-4 rounded-2xl border border-slate-200 text-xs shadow-sm flex justify-between">
            <span className="font-bold">{i.patientName} ({i.invoiceNumber})</span>
            <span className="font-bold">${i.subtotal} ({i.status})</span>
          </div>
        ))}
      </div>
    </div>
  );
};
