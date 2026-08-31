import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { Medication, Prescription } from '../types';
import { Pill, Package } from 'lucide-react';

export const PharmacyPage: React.FC = () => {
  const [inventory, setInventory] = useState<Medication[]>([]);
  const [prescriptions, setPrescriptions] = useState<Prescription[]>([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    api.getInventory().then(setInventory).catch(() => {});
    api.getPrescriptions().then(setPrescriptions).catch(() => {});
  };

  const handleDispense = async (id: string) => {
    await api.dispensePrescription(id);
    loadData();
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-black text-slate-900 tracking-tight">Pharmacy & Medication Inventory</h1>
        <p className="text-xs text-slate-500">Real-time medication stock management, batch expiry tracking, and prescription dispensing</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-base font-black text-slate-900 flex items-center gap-2">
            <Pill className="w-5 h-5 text-medblue-600" /> Prescriptions Awaiting Dispensing
          </h2>
          <div className="space-y-3">
            {prescriptions.map(rx => (
              <div key={rx.id} className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-sm text-slate-900">{rx.patientName}</p>
                    <p className="text-[11px] text-slate-500">Prescribed by {rx.doctorName}</p>
                  </div>
                  <span className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full ${
                    rx.status === 'DISPENSED' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                  }`}>
                    {rx.status}
                  </span>
                </div>
                <div className="divide-y divide-slate-200/60 text-xs">
                  {rx.items.map((item, idx) => (
                    <div key={idx} className="py-1.5 flex justify-between font-medium">
                      <span>{item.medicationName} ({item.dosage})</span>
                      <span className="text-slate-500">Qty: {item.quantity}</span>
                    </div>
                  ))}
                </div>
                {rx.status === 'PENDING' && (
                  <button
                    onClick={() => handleDispense(rx.id)}
                    className="w-full bg-medblue-600 hover:bg-medblue-700 text-white font-bold py-2 rounded-xl text-xs transition-colors shadow-sm"
                  >
                    Dispense & Deduct Inventory
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-base font-black text-slate-900 flex items-center gap-2">
            <Package className="w-5 h-5 text-sky-600" /> Current Drug Inventory
          </h2>
          <div className="divide-y divide-slate-100">
            {inventory.map(med => (
              <div key={med.id} className="py-3 flex items-center justify-between text-xs">
                <div>
                  <p className="font-bold text-slate-900">{med.name} ({med.strength})</p>
                  <p className="text-[11px] text-slate-500">{med.category} • NDC: {med.code}</p>
                </div>
                <div className="text-right">
                  <p className="font-extrabold text-sm text-slate-900">{med.stockQuantity.toLocaleString()} in stock</p>
                  <p className="text-[10px] text-slate-400">Exp: {med.expiryDate}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
