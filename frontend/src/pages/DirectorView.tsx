import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { DirectorStats, InpatientAdmitRecord, DischargeRecord, Appointment } from '../types';
import {
  Bed,
  Users,
  Activity,
  UserPlus,
  UserMinus,
  HeartPulse,
  TrendingUp,
  ShieldCheck,
  Clock
} from 'lucide-react';

export const DirectorView: React.FC = () => {
  const [stats, setStats] = useState<DirectorStats | null>(null);
  const [admissions, setAdmissions] = useState<InpatientAdmitRecord[]>([]);
  const [discharges, setDischarges] = useState<DischargeRecord[]>([]);
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  const loadData = () => {
    api.getDirectorStats().then(setStats);
    api.getAdmissionsToday().then(setAdmissions);
    api.getDischargesToday().then(setDischarges);
    api.getAppointments().then(setAppointments);
  };

  useEffect(() => {
    loadData();
    window.addEventListener('medflow_live_update', loadData);
    return () => window.removeEventListener('medflow_live_update', loadData);
  }, []);

  if (!stats) return null;

  return (
    <div className="space-y-6 font-sans">
      {/* Header Overview */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold text-slate-900">Dr. Arthur Sterling — Hospital Executive Command</h1>
            <span className="text-[10px] font-bold bg-amber-50 text-amber-900 border border-amber-200 px-2 py-0.5 rounded font-mono">
              DIRECTOR OVERSIGHT
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">St. Jude Medical Center • Supervised Bed Turnover, Patient Inflow/Outflow & Clinical Operations</p>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono">
          <div className="text-right">
            <span className="text-[10px] text-slate-400 block">ACTIVE DOCTORS ON DUTY</span>
            <span className="text-base font-black text-slate-900">{stats.doctorsOnDuty} Specialists</span>
          </div>
        </div>
      </div>

      {/* 4 Key Executive Metrics (Admissions, Discharges, Beds, Doctors) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
        {/* 1. Admissions Today */}
        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs space-y-1">
          <div className="flex justify-between items-center text-slate-500">
            <span className="font-semibold">Admitted Patients Today</span>
            <div className="p-1.5 bg-blue-50 text-blue-700 rounded-lg">
              <UserPlus className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-black text-blue-900">{stats.admittedTodayCount} Admitted</div>
          <p className="text-[11px] text-blue-700 font-medium">New Inpatient Ward Admissions</p>
        </div>

        {/* 2. Discharges Today */}
        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs space-y-1">
          <div className="flex justify-between items-center text-slate-500">
            <span className="font-semibold">Discharged Patients Today</span>
            <div className="p-1.5 bg-emerald-50 text-emerald-700 rounded-lg">
              <UserMinus className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-black text-emerald-900">{stats.dischargedTodayCount} Discharged</div>
          <p className="text-[11px] text-emerald-700 font-medium">Recovered & Cleared from Wards</p>
        </div>

        {/* 3. Bed Capacity */}
        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs space-y-1">
          <div className="flex justify-between items-center text-slate-500">
            <span className="font-semibold">Current Bed Occupancy</span>
            <div className="p-1.5 bg-amber-50 text-amber-700 rounded-lg">
              <Bed className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-black text-slate-900">{stats.occupiedBeds} / {stats.totalBeds}</div>
          <p className="text-[11px] text-emerald-700 font-bold">56 Beds Available (87.5% Load)</p>
        </div>

        {/* 4. Doctors Shift Coverage */}
        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs space-y-1">
          <div className="flex justify-between items-center text-slate-500">
            <span className="font-semibold">Consultations Today</span>
            <div className="p-1.5 bg-purple-50 text-purple-700 rounded-lg">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-black text-purple-950">{appointments.length} Patients</div>
          <p className="text-[11px] text-slate-500 font-medium">OPD & Specialist Queue</p>
        </div>
      </div>

      {/* 2-Column: Admitted Today List vs Discharged Today List */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        {/* Left: Admitted Today List */}
        <div className="lg:col-span-6 bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-3">
          <div className="flex justify-between items-center border-b border-slate-100 pb-2.5">
            <div className="flex items-center gap-2">
              <UserPlus className="w-4 h-4 text-blue-700" />
              <h3 className="font-bold text-sm text-slate-900">Today's Inpatient Admissions ({admissions.length})</h3>
            </div>
            <span className="text-[10px] font-mono font-bold bg-blue-50 text-blue-800 px-2 py-0.5 rounded">
              Bed Inflow
            </span>
          </div>

          <div className="space-y-2">
            {admissions.map(adm => (
              <div key={adm.id} className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1 text-xs">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="font-mono font-bold text-[10px] text-slate-500">{adm.patientId} • {adm.ward} ({adm.bedNumber})</span>
                    <h4 className="font-bold text-slate-900 text-sm mt-0.5">{adm.patientName} ({adm.age}y, {adm.gender})</h4>
                    <p className="text-[11px] text-slate-600">{adm.diagnosis}</p>
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                    adm.condition.includes('Critical') ? 'bg-rose-50 text-rose-800 border border-rose-200' : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                  }`}>
                    {adm.condition}
                  </span>
                </div>
                <div className="pt-1 border-t border-slate-200/50 flex justify-between text-[10px] font-mono text-slate-400">
                  <span>DOCTOR: {adm.attendingDoctor}</span>
                  <span>ADMITTED: {adm.admitTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Discharged Today List */}
        <div className="lg:col-span-6 bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-3">
          <div className="flex justify-between items-center border-b border-slate-100 pb-2.5">
            <div className="flex items-center gap-2">
              <UserMinus className="w-4 h-4 text-emerald-700" />
              <h3 className="font-bold text-sm text-slate-900">Today's Discharged Patients ({discharges.length})</h3>
            </div>
            <span className="text-[10px] font-mono font-bold bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded">
              Bed Cleared
            </span>
          </div>

          <div className="space-y-2">
            {discharges.map(dis => (
              <div key={dis.id} className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1 text-xs">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="font-mono font-bold text-[10px] text-slate-500">{dis.patientId} • From {dis.ward}</span>
                    <h4 className="font-bold text-slate-900 text-sm mt-0.5">{dis.patientName} ({dis.age}y)</h4>
                    <p className="text-[11px] text-slate-600">{dis.summary}</p>
                  </div>
                  <span className="text-[11px] font-mono font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                    Discharged
                  </span>
                </div>
                <div className="pt-1 border-t border-slate-200/50 flex justify-between text-[10px] font-mono text-slate-400">
                  <span>CLEARED BY: {dis.doctorApproved}</span>
                  <span>DISCHARGED: {dis.dischargeTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
