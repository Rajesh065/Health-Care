import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { Bed } from '../types';

export const HospitalOpsPage: React.FC = () => {
  const [beds, setBeds] = useState<Bed[]>([]);
  const [occupancy, setOccupancy] = useState({ totalBeds: 8, occupiedBeds: 2, occupancyRate: 25, icuOccupancyRate: 33 });

  useEffect(() => {
    api.getBeds().then(setBeds).catch(() => {});
    api.getOccupancy().then(setOccupancy).catch(() => {});
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-black text-slate-900 tracking-tight">Hospital Operations & Bed Management</h1>
        <p className="text-xs text-slate-500">Live ward occupancy, critical care bed telemetry, and staff roster</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
          <p className="text-xs font-bold text-slate-500 uppercase">Total Ward Beds</p>
          <p className="text-2xl font-black text-slate-900 mt-1">{occupancy.totalBeds}</p>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
          <p className="text-xs font-bold text-slate-500 uppercase">Occupied Beds</p>
          <p className="text-2xl font-black text-rose-600 mt-1">{occupancy.occupiedBeds}</p>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
          <p className="text-xs font-bold text-slate-500 uppercase">Overall Occupancy</p>
          <p className="text-2xl font-black text-amber-600 mt-1">{occupancy.occupancyRate}%</p>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
          <p className="text-xs font-bold text-slate-500 uppercase">ICU Occupancy</p>
          <p className="text-2xl font-black text-medblue-600 mt-1">{occupancy.icuOccupancyRate}%</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {beds.map(bed => (
          <div key={bed.id} className={`p-4 rounded-2xl border ${
            bed.isOccupied ? 'bg-rose-50/60 border-rose-200' : 'bg-white border-slate-200'
          } shadow-sm space-y-2`}>
            <div className="flex items-center justify-between">
              <span className="font-extrabold text-sm text-slate-900">{bed.bedNumber}</span>
              <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${
                bed.isOccupied ? 'bg-rose-100 text-rose-800' : 'bg-emerald-100 text-emerald-800'
              }`}>
                {bed.isOccupied ? 'OCCUPIED' : 'VACANT'}
              </span>
            </div>
            <p className="text-xs text-slate-500">{bed.wardName}</p>
            {bed.isOccupied && (
              <p className="text-xs font-bold text-slate-800">Patient: {bed.currentPatientName}</p>
            )}
            <p className="text-[11px] font-semibold text-slate-400">${bed.dailyRate} / day</p>
          </div>
        ))}
      </div>
    </div>
  );
};
