import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { Patient, Appointment } from '../types';
import {
  Users,
  Calendar,
  Activity,
  HeartPulse,
  Clock,
  Video,
  CheckCircle2,
  AlertCircle,
  FileSpreadsheet,
  ChevronRight,
  TrendingUp,
  ArrowUpRight
} from 'lucide-react';

export const DashboardPage: React.FC<{ onNavigate: (t: string) => void }> = ({ onNavigate }) => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    api.getPatients().then(setPatients).catch(() => {});
    api.getAppointments().then(setAppointments).catch(() => {});
  }, []);

  return (
    <div className="space-y-6">
      {/* Welcome & Quick Action Banner */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-teal-700 bg-teal-50 border border-teal-200 px-2.5 py-0.5 rounded-md">
              Hospital Inpatient & Outpatient Live Hub
            </span>
          </div>
          <h1 className="text-xl font-bold text-slate-900 mt-1.5">Good Morning, Dr. Sarah Jenkins, MD</h1>
          <p className="text-xs text-slate-500 mt-0.5">
            You have <strong className="text-slate-700 font-semibold">{appointments.length} patients</strong> scheduled today in Cardiology and Inpatient Rounds.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={() => onNavigate('telehealth')}
            className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-xs transition-all"
          >
            <Video className="w-4 h-4" />
            <span>Launch Telehealth Suite</span>
          </button>
          <button
            onClick={() => onNavigate('patients')}
            className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs px-4 py-2.5 rounded-xl transition-all border border-slate-200"
          >
            <Users className="w-4 h-4" />
            <span>Patient Registry</span>
          </button>
        </div>
      </div>

      {/* Hospital Shift Real-Time Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex justify-between items-center text-xs font-bold text-slate-500">
            <span>TODAY'S SCHEDULE</span>
            <div className="p-2 bg-blue-50 text-blue-600 rounded-xl">
              <Calendar className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-bold text-slate-900 mt-2">{appointments.length} Appointments</p>
          <div className="flex items-center gap-1.5 text-[11px] text-emerald-600 font-semibold mt-1">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>100% on schedule (Avg wait: 12m)</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex justify-between items-center text-xs font-bold text-slate-500">
            <span>INPATIENT OCCUPANCY</span>
            <div className="p-2 bg-teal-50 text-teal-600 rounded-xl">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-bold text-slate-900 mt-2">84 / 100 Beds</p>
          <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-medium mt-1">
            <span>16 Beds available in CCU & Med-Surg</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex justify-between items-center text-xs font-bold text-slate-500">
            <span>CRITICAL LAB RESULTS</span>
            <div className="p-2 bg-amber-50 text-amber-600 rounded-xl">
              <Activity className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-bold text-slate-900 mt-2">1 Urgent Flag</p>
          <div className="flex items-center gap-1.5 text-[11px] text-amber-600 font-semibold mt-1">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>ABG PO2 58 mmHg (David Sterling)</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex justify-between items-center text-xs font-bold text-slate-500">
            <span>FHIR R4 EHR STATUS</span>
            <div className="p-2 bg-emerald-50 text-emerald-600 rounded-xl">
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-bold text-slate-900 mt-2">All Synced</p>
          <div className="flex items-center gap-1.5 text-[11px] text-emerald-600 font-semibold mt-1">
            <span>HIPAA § 164.312(b) Compliant</span>
          </div>
        </div>
      </div>

      {/* Main Grid: Today's Schedule + Active Patient Vitals Triage */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Today's Patient Schedule */}
        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
          <div className="flex justify-between items-center border-b border-slate-100 pb-3">
            <div>
              <h2 className="text-sm font-bold text-slate-900">Today's Patient Schedule</h2>
              <p className="text-[11px] text-slate-500">Sequential consultation timeline and triage queue</p>
            </div>
            <button
              onClick={() => onNavigate('appointments')}
              className="text-teal-700 hover:text-teal-800 text-xs font-bold flex items-center gap-1"
            >
              <span>Full Calendar</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="divide-y divide-slate-100">
            {appointments.map(apt => (
              <div key={apt.id} className="py-3.5 flex items-center justify-between gap-4 hover:bg-slate-50/80 px-2 rounded-xl transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-14 text-center">
                    <p className="text-xs font-bold text-slate-800">{apt.scheduledTime}</p>
                    <p className="text-[10px] text-slate-400 font-mono">{apt.durationMinutes}m</p>
                  </div>

                  <div className="h-8 w-px bg-slate-200"></div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-xs text-slate-900">{apt.patientName}</span>
                      <span className="text-[10px] font-mono bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">{apt.mrn}</span>
                      {apt.type === 'TELEHEALTH_VIDEO' && (
                        <span className="text-[10px] font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200 px-1.5 py-0.5 rounded flex items-center gap-1">
                          <Video className="w-3 h-3" /> Telehealth
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">{apt.visitReason}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${
                    apt.status === 'IN_CONSULT' ? 'bg-amber-100 text-amber-800' :
                    apt.status === 'IN_WAITING_ROOM' ? 'bg-blue-100 text-blue-800' :
                    'bg-emerald-100 text-emerald-800'
                  }`}>
                    {apt.status === 'IN_WAITING_ROOM' ? 'In Waiting Room' :
                     apt.status === 'IN_CONSULT' ? 'In Consult' : 'Confirmed'}
                  </span>

                  <button
                    onClick={() => onNavigate('patients')}
                    className="p-1.5 text-slate-400 hover:text-teal-700 hover:bg-teal-50 rounded-lg transition-all"
                    title="Open Patient Chart"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right 1 Col: Quick Patient Vitals & Critical Alerts */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
          <div className="border-b border-slate-100 pb-3">
            <h2 className="text-sm font-bold text-slate-900">Inpatient Vitals Monitor</h2>
            <p className="text-[11px] text-slate-500">Live bedside telemetry from CCU / ICU</p>
          </div>

          <div className="space-y-3">
            {patients.map(p => (
              <div key={p.id} className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-xs font-bold text-slate-900">{p.fullName}</p>
                    <p className="text-[10px] text-slate-500">{p.roomNumber}</p>
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                    p.status === 'ICU_CRITICAL' ? 'bg-rose-100 text-rose-800' : 'bg-teal-100 text-teal-800'
                  }`}>
                    {p.status === 'ICU_CRITICAL' ? 'ICU Watch' : 'Stable'}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-1">
                  <div className="bg-white p-2 rounded-lg border border-slate-200 text-center">
                    <p className="text-[9px] font-bold text-slate-400 uppercase">BP</p>
                    <p className="text-xs font-bold text-slate-800">{p.vitals.bloodPressure}</p>
                  </div>
                  <div className="bg-white p-2 rounded-lg border border-slate-200 text-center">
                    <p className="text-[9px] font-bold text-slate-400 uppercase">HR</p>
                    <p className="text-xs font-bold text-slate-800">{p.vitals.heartRateBpm} bpm</p>
                  </div>
                  <div className="bg-white p-2 rounded-lg border border-slate-200 text-center">
                    <p className="text-[9px] font-bold text-slate-400 uppercase">SpO2</p>
                    <p className={`text-xs font-bold ${p.vitals.oxygenSaturationPct < 94 ? 'text-rose-600' : 'text-slate-800'}`}>
                      {p.vitals.oxygenSaturationPct}%
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
