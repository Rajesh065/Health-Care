import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { Appointment } from '../types';
import { Calendar, Plus, Pill, Receipt } from 'lucide-react';

export const PatientView: React.FC<{ onBookClick: () => void }> = ({ onBookClick }) => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  const load = () => {
    api.getAppointments().then(setAppointments);
  };

  useEffect(() => {
    load();
    window.addEventListener('medflow_sync', load);
    return () => window.removeEventListener('medflow_sync', load);
  }, []);

  return (
    <div className="space-y-5 font-sans">
      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs flex justify-between items-center">
        <div>
          <h2 className="font-bold text-base text-slate-900">Robert Chen — Patient Portal</h2>
          <p className="text-xs text-slate-500">View your hospital appointments and doctor prescriptions</p>
        </div>
        <button
          onClick={onBookClick}
          className="bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs px-3.5 py-2 rounded-xl flex items-center gap-1.5 shadow-xs cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Book Appointment</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Appointments & Doctor Prescriptions */}
        {appointments.map(a => (
          <div key={a.id} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-3 text-xs">
            <div className="flex justify-between items-start">
              <div>
                <span className="font-mono font-bold text-[10px] bg-teal-50 text-teal-800 border border-teal-200 px-2 py-0.5 rounded">
                  {a.tokenNumber}
                </span>
                <h4 className="font-bold text-sm text-slate-900 mt-1">{a.doctorName} ({a.department})</h4>
                <p className="text-[11px] text-slate-500">Date: {a.date} at {a.timeSlot}</p>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                {a.status}
              </span>
            </div>

            <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200">
              <span className="font-bold text-slate-700 block mb-0.5">My Complaint:</span>
              <p className="text-slate-900">{a.symptoms}</p>
            </div>

            {a.prescription ? (
              <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-200 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-blue-950">
                  <Pill className="w-3.5 h-3.5" />
                  <span>Doctor's Prescription:</span>
                </div>
                <p className="text-slate-800 font-medium">{a.prescription}</p>
              </div>
            ) : (
              <div className="p-2.5 text-slate-400 italic text-[11px]">
                Doctor has not written prescription yet.
              </div>
            )}

            <div className="pt-2 border-t border-slate-100 flex justify-between text-[11px] font-mono text-slate-500">
              <span>Consultation Fee: ${a.fee} USD</span>
              <span className="text-emerald-700 font-bold">● Paid</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
