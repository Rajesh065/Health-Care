import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { LabOrder } from '../types';

export const LabPage: React.FC = () => {
  const [labOrders, setLabOrders] = useState<LabOrder[]>([]);
  useEffect(() => { api.getLabOrders().then(setLabOrders).catch(() => {}); }, []);
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-black text-slate-900">Pathology & Diagnostics Lab</h1>
      <div className="space-y-3">
        {labOrders.map(o => (
          <div key={o.id} className="bg-white p-4 rounded-2xl border border-slate-200 text-xs shadow-sm">
            <p className="font-bold text-sm">{o.testName} ({o.orderNumber}) - {o.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
