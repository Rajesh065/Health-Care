import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { PatientAppointment } from '../types';
import {
  CalendarCheck,
  Plus,
  Clock,
  UserCheck,
  Building2,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Receipt,
  Bed
} from 'lucide-react';

export const AppointmentDeskPage: React.FC<{ onBookAppointment: () => void }> = ({ onBookAppointment }) => {
  const [appointments, setAppointments] = useState<PatientAppointment[]>([]);
  const [selectedApp, setSelectedApp] = useState<PatientAppointment | null>(null);

  useEffect(() => {
    api.getAppointments().then(data => {
      setAppointments(data);
      if (data.length > 0) setSelectedApp(data[0]);
    });
  }, []);

  const handleStatusChange = async (id: string, newStatus: PatientAppointment['status']) => {
    await api.updateAppointmentStatus(id, newStatus);
    setAppointments(prev => prev.map(a => a.id === id ? { ...a, status: newStatus } : a));
    if (selectedApp?.id === id) {
      setSelectedApp(prev => prev ? { ...prev, status: newStatus } : null);
    }
  };

  return (
    <div className="space-y-6 py-2 w-full">
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-col md:flex-row justify-between items-start md:items-center gap-4 w-full">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold text-slate-900">Central Outpatient Registration & Token Queue</h1>
            <span className="text-[10px] font-bold bg-teal-50 text-teal-900 border border-teal-200 px-2 py-0.5 rounded font-mono">
              PATIENT COORDINATION DESK
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Manage booked patient visits, dispatch tokens to specialist chambers, and generate consultation receipts.
          </p>
        </div>

        <button
          onClick={onBookAppointment}
          className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-xs transition-all flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          <span>Walk-in Patient Token / Book</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start w-full">
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
          <div className="flex justify-between items-center border-b border-slate-100 pb-3">
            <span className="font-bold text-xs text-slate-900 font-mono uppercase tracking-wider">
              Today's Consultation Queue ({appointments.length} Patients)
            </span>
            <span className="text-[10px] text-slate-400 font-mono">Live Chamber Dispatch</span>
          </div>

          <div className="space-y-2">
            {appointments.map(app => {
              const isSelected = selectedApp?.id === app.id;
              return (
                <div
                  key={app.id}
                  onClick={() => setSelectedApp(app)}
                  className={`p-3.5 rounded-xl cursor-pointer transition-all border flex items-center justify-between gap-3 ${
                    isSelected
                      ? 'bg-teal-50/50 border-teal-900 ring-1 ring-teal-900/10 shadow-xs'
                      : 'bg-white border-slate-100 hover:border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-teal-900 text-white flex items-center justify-center font-mono font-black text-xs shrink-0">
                      {app.tokenNumber}
                    </div>
                    <div>
                      <h4 className="font-bold text-xs text-slate-900">{app.patientName} ({app.patientAge}y, {app.patientGender})</h4>
                      <p className="text-[11px] text-slate-500">{app.department} • <strong className="text-slate-700">{app.doctorName}</strong></p>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded block mb-1 ${
                      app.status === 'COMPLETED'
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : app.status === 'IN_CONSULTATION'
                        ? 'bg-blue-50 text-blue-800 border border-blue-200 animate-pulse'
                        : app.status === 'CHECKED_IN'
                        ? 'bg-amber-50 text-amber-800 border border-amber-200'
                        : 'bg-slate-100 text-slate-700'
                    }`}>
                      {app.status.replace('_', ' ')}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">{app.slotTime} ({app.roomNumber})</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {selectedApp ? (
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4 text-xs">
            <div className="border-b border-slate-100 pb-3">
              <span className="font-mono text-[10px] font-bold text-teal-800 bg-teal-50 px-2 py-0.5 rounded">
                TOKEN {selectedApp.tokenNumber} • {selectedApp.roomNumber}
              </span>
              <h3 className="font-bold text-base text-slate-900 mt-1.5">{selectedApp.patientName}</h3>
              <p className="text-[11px] text-slate-500">Phone: {selectedApp.patientPhone} • Email: {selectedApp.patientEmail}</p>
            </div>

            <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
              <span className="font-bold text-slate-900 block">Queue Stage Progression</span>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => handleStatusChange(selectedApp.id, 'CHECKED_IN')}
                  className="p-2 bg-white hover:bg-slate-100 border border-slate-200 rounded-lg text-center font-bold text-[11px] text-slate-800"
                >
                  ✓ Mark Checked-In
                </button>
                <button
                  onClick={() => handleStatusChange(selectedApp.id, 'IN_CONSULTATION')}
                  className="p-2 bg-teal-900 hover:bg-teal-800 text-white rounded-lg text-center font-bold text-[11px]"
                >
                  ➔ Send to Chamber
                </button>
              </div>
              <button
                onClick={() => handleStatusChange(selectedApp.id, 'COMPLETED')}
                className="w-full p-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-center font-bold text-[11px]"
              >
                ✓ Complete Consultation
              </button>
            </div>

            <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
              <span className="text-[10px] font-mono text-slate-400 font-bold uppercase">Reported Symptoms</span>
              <p className="text-slate-800 leading-relaxed">{selectedApp.symptoms}</p>
            </div>

            <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1 font-mono text-[11px]">
              <div className="flex justify-between text-slate-700">
                <span>INSURANCE:</span>
                <span className="font-bold text-slate-900">{selectedApp.insuranceProvider}</span>
              </div>
              <div className="flex justify-between text-slate-700">
                <span>POLICY NUMBER:</span>
                <span className="font-bold text-slate-900">{selectedApp.policyNumber}</span>
              </div>
              <div className="flex justify-between text-slate-700 pt-1 border-t border-slate-200">
                <span>CONSULTATION FEE:</span>
                <span className="font-bold text-emerald-700">${selectedApp.feeAmountUsd} USD (Paid)</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-12 text-center text-xs text-slate-500">
            Select a patient from the queue.
          </div>
        )}
      </div>
    </div>
  );
};
