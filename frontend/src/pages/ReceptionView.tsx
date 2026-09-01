import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { Appointment } from '../types';
import { CalendarCheck, Plus, CheckCircle2 } from 'lucide-react';

export const ReceptionView: React.FC<{ onNewBooking: () => void }> = ({ onNewBooking }) => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  const load = () => {
    api.getAppointments().then(setAppointments);
  };

  useEffect(() => {
    load();
    window.addEventListener('medflow_sync', load);
    return () => window.removeEventListener('medflow_sync', load);
  }, []);

  const handleCheckIn = async (id: string) => {
    await api.updateStatus(id, 'Checked In');
  };

  return (
    <div className="space-y-4 font-sans">
      <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs flex justify-between items-center">
        <div>
          <h2 className="font-bold text-base text-slate-900">Front Desk & Reception Desk</h2>
          <p className="text-xs text-slate-500">Priya Nair • Today's Outpatient Appointments</p>
        </div>
        <button
          onClick={onNewBooking}
          className="bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs px-3.5 py-2 rounded-xl flex items-center gap-1.5 shadow-xs cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>New Walk-in Patient</span>
        </button>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-3">
        <h3 className="font-bold text-xs text-slate-900">Today's Token Queue ({appointments.length} Patients)</h3>
        <div className="space-y-2.5">
          {appointments.map(a => (
            <div key={a.id} className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex justify-between items-center text-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-800 text-white flex items-center justify-center font-mono font-bold text-xs shrink-0">
                  {a.tokenNumber}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{a.patientName} ({a.patientAge}y)</h4>
                  <p className="text-[11px] text-slate-500">Doctor: <strong>{a.doctorName}</strong> • {a.timeSlot}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className={`text-[10px] font-bold px-2.5 py-1 rounded-lg ${
                  a.status === 'Completed'
                    ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                    : a.status === 'Checked In'
                    ? 'bg-blue-50 text-blue-800 border border-blue-200'
                    : 'bg-amber-50 text-amber-800 border border-amber-200'
                }`}>
                  {a.status}
                </span>
                {a.status === 'Waiting' && (
                  <button
                    onClick={() => handleCheckIn(a.id)}
                    className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-[11px] px-3 py-1.5 rounded-lg cursor-pointer"
                  >
                    Check-In
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
