import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { StatCard } from '../components/StatCard';
import { Users, Calendar, Video, BedDouble, AlertTriangle, Clock, ArrowRight } from 'lucide-react';
import { api } from '../services/api';
import { Patient, Appointment, Bed } from '../types';

export const DashboardPage: React.FC<{ onNavigate: (tab: string) => void }> = ({ onNavigate }) => {
  const { currentUser } = useAuth();
  const [patients, setPatients] = useState<Patient[]>([]);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [occupancy, setOccupancy] = useState<{ totalBeds: number; occupiedBeds: number; occupancyRate: number; icuOccupancyRate: number }>({
    totalBeds: 8,
    occupiedBeds: 2,
    occupancyRate: 25,
    icuOccupancyRate: 33
  });

  useEffect(() => {
    api.getPatients().then(setPatients).catch(() => {});
    api.getAppointments().then(setAppointments).catch(() => {});
    api.getOccupancy().then(setOccupancy).catch(() => {});
  }, []);

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-medblue-700 via-sky-600 to-medteal-600 rounded-3xl p-6 text-white shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="bg-white/20 text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">Clinical Workspace</span>
          <h1 className="text-2xl sm:text-3xl font-black mt-2 tracking-tight">Welcome back, {currentUser.name}</h1>
          <p className="text-sky-100 text-sm mt-1 max-w-xl">
            You are operating under role <span className="font-bold underline">{currentUser.role}</span> in <span className="font-bold">{currentUser.department || 'Main Department'}</span>. 
            All clinical and record interactions are recorded in the HIPAA audit ledger.
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => onNavigate('telehealth')}
            className="bg-white text-medblue-700 hover:bg-sky-50 font-bold px-4 py-2.5 rounded-xl text-sm shadow-md transition-all flex items-center gap-2"
          >
            <Video className="w-4 h-4" />
            Launch Telehealth
          </button>
          <button
            onClick={() => onNavigate('triage')}
            className="bg-sky-900/40 hover:bg-sky-900/60 border border-white/20 text-white font-bold px-4 py-2.5 rounded-xl text-sm transition-all"
          >
            AI Triage
          </button>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Active Inpatients & Records" value={patients.length || 5} subtitle="Registered EHR Patients" icon={Users} color="blue" trend="+12% this month" />
        <StatCard title="Today's Appointments" value={appointments.length || 5} subtitle="2 Telehealth, 1 Emergency" icon={Calendar} color="emerald" />
        <StatCard title="Ward Bed Occupancy" value={`${occupancy.occupancyRate}%`} subtitle={`${occupancy.occupiedBeds} of ${occupancy.totalBeds} Beds Occupied`} icon={BedDouble} color="amber" />
        <StatCard title="ICU Capacity" value={`${occupancy.icuOccupancyRate}%`} subtitle="Critical Care Monitor Active" icon={AlertTriangle} color="rose" />
      </div>

      {/* Main split: Today's Queue & Quick Patient EHR */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Schedule & Queue */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-black text-slate-900">Clinical Queue & Scheduled Visits</h2>
              <p className="text-xs text-slate-500">Real-time triage status and telehealth access</p>
            </div>
            <button onClick={() => onNavigate('appointments')} className="text-xs font-bold text-medblue-600 hover:text-medblue-700 flex items-center gap-1">
              View All <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="divide-y divide-slate-100">
            {appointments.map(apt => (
              <div key={apt.id} className="py-3.5 flex items-center justify-between hover:bg-slate-50/80 px-2 rounded-xl transition-colors">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${
                    apt.triageUrgency === 'RED' ? 'bg-rose-500 animate-ping' :
                    apt.triageUrgency === 'YELLOW' ? 'bg-amber-500' : 'bg-emerald-500'
                  }`} />
                  <div>
                    <p className="text-sm font-bold text-slate-900">{apt.patientName}</p>
                    <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                      <Clock className="w-3 h-3" />
                      {new Date(apt.scheduledTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} • {apt.reasonForVisit}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className={`text-[11px] font-extrabold px-2.5 py-1 rounded-lg ${
                    apt.type === 'TELEHEALTH' ? 'bg-indigo-50 text-indigo-700 border border-indigo-200' :
                    apt.type === 'EMERGENCY' ? 'bg-rose-50 text-rose-700 border border-rose-200' : 'bg-slate-100 text-slate-700'
                  }`}>
                    {apt.type}
                  </span>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                    {apt.status}
                  </span>
                  {apt.type === 'TELEHEALTH' && (
                    <button
                      onClick={() => onNavigate('telehealth')}
                      className="bg-medblue-600 hover:bg-medblue-700 text-white text-xs font-bold px-3 py-1 rounded-lg transition-colors"
                    >
                      Join
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right 1 Col: Recent Patient EHR List */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-black text-slate-900">Recent Patients</h2>
              <p className="text-xs text-slate-500">Quick access to medical charts</p>
            </div>
            <button onClick={() => onNavigate('patients')} className="text-xs font-bold text-medblue-600 hover:text-medblue-700 flex items-center gap-1">
              EHR <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-3">
            {patients.map(p => (
              <div key={p.id} onClick={() => onNavigate('patients')} className="p-3 rounded-xl border border-slate-100 hover:border-sky-200 hover:bg-sky-50/40 cursor-pointer transition-all">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900">{p.firstName} {p.lastName}</span>
                  <span className="text-[10px] font-mono font-bold bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">{p.mrn}</span>
                </div>
                <div className="mt-1 flex items-center justify-between text-[11px] text-slate-500">
                  <span>DOB: {p.dateOfBirth} ({p.gender})</span>
                  <span className="font-semibold text-rose-600">{p.allergies.length} Allergies</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
