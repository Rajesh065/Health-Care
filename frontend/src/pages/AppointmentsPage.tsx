import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { Appointment } from '../types';
import { Calendar as CalendarIcon, Clock, Plus, Video, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';

export const AppointmentsPage: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    api.getAppointments().then(setAppointments).catch(() => {});
  }, []);

  return (
    <div className="space-y-6">
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold text-slate-900">Hospital Scheduling & Doctor Calendaring</h1>
          <p className="text-xs text-slate-500 mt-0.5">Multi-department appointment management and queue orchestration</p>
        </div>
        <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-xs flex items-center gap-1.5 transition-all">
          <Plus className="w-4 h-4" />
          <span>Book Appointment</span>
        </button>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
        <div className="flex justify-between items-center border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm text-slate-900">August 31, 2026</span>
            <span className="text-xs bg-slate-100 text-slate-600 font-semibold px-2 py-0.5 rounded">Today</span>
          </div>

          <div className="flex items-center gap-1 text-slate-500">
            <button className="p-1 hover:bg-slate-100 rounded-lg"><ChevronLeft className="w-4 h-4" /></button>
            <button className="p-1 hover:bg-slate-100 rounded-lg"><ChevronRight className="w-4 h-4" /></button>
          </div>
        </div>

        <div className="divide-y divide-slate-100">
          {appointments.map(apt => (
            <div key={apt.id} className="py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 bg-teal-50 text-teal-700 rounded-xl border border-teal-100 font-bold text-xs text-center w-16">
                  {apt.scheduledTime}
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-bold text-sm text-slate-900">{apt.patientName}</p>
                    <span className="text-[10px] font-mono bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">{apt.mrn}</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">{apt.visitReason} • Attending: {apt.doctorName}</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <span className="text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
                  {apt.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
