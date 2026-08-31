import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { Medication, Prescription } from '../types';

export const PharmacyPage: React.FC = () => {
  const [inventory, setInventory] = useState<Medication[]>([]);
  const [prescriptions, setPrescriptions] = useState<Prescription[]>([]);

  useEffect(() => {
    api.getInventory().then(setInventory).catch(() => {});
    api.getPrescriptions().then(setPrescriptions).catch(() => {});
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-black text-slate-900">Pharmacy & Drug Inventory</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
          <h2 className="font-bold text-base">Prescription Queue</h2>
          {prescriptions.map(rx => (
            <div key={rx.id} className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs">
              <p className="font-bold">{rx.patientName} - {rx.status}</p>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
          <h2 className="font-bold text-base">Drug Stock</h2>
          {inventory.map(med => (
            <div key={med.id} className="py-2 border-b border-slate-100 flex justify-between text-xs">
              <span className="font-bold">{med.name}</span>
              <span>{med.stockQuantity} in stock</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
