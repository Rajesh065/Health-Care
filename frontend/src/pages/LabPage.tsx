import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { LabOrder } from '../types';
import { FlaskConical } from 'lucide-react';

export const LabPage: React.FC = () => {
  const [labOrders, setLabOrders] = useState<LabOrder[]>([]);

  useEffect(() => {
    api.getLabOrders().then(setLabOrders).catch(() => {});
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-black text-slate-900 tracking-tight">Diagnostics & Pathology Laboratory</h1>
        <p className="text-xs text-slate-500">Specimen tracking, biochemistry panels, radiology orders, and abnormal value flags</p>
      </div>

      <div className="space-y-4">
        {labOrders.map(order => (
          <div key={order.id} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-100 gap-2">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-black text-base text-slate-900">{order.testName}</h3>
                  <span className="text-xs font-mono font-bold bg-slate-100 text-slate-700 px-2 py-0.5 rounded">{order.orderNumber}</span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">Patient: <span className="font-semibold text-slate-800">{order.patientName}</span> • Ordered by {order.doctorName}</p>
              </div>
              <span className={`text-xs font-extrabold px-3 py-1 rounded-full ${
                order.status === 'COMPLETED' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
              }`}>
                {order.status}
              </span>
            </div>

            {order.results && order.results.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                {order.results.map((res, i) => (
                  <div key={i} className={`p-3 rounded-xl border ${
                    res.flag === 'HIGH' ? 'bg-rose-50 border-rose-200' : 'bg-slate-50 border-slate-200'
                  }`}>
                    <p className="font-bold text-slate-600">{res.parameter}</p>
                    <p className="text-lg font-black text-slate-900 mt-1">
                      {res.value} <span className="text-[10px] font-normal text-slate-500">{res.unit}</span>
                    </p>
                    <p className="text-[10px] text-slate-400 mt-0.5">Ref: {res.referenceRange}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
