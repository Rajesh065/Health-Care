import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { Appointment } from '../types';
import { Calendar, Plus, Pill, Receipt, AlertCircle, CheckCircle2 } from 'lucide-react';

export const PatientView: React.FC<{ onBookClick: () => void }> = ({ onBookClick }) => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  const load = () => {
    api.getAppointments().then(setAppointments);
  };

  useEffect(() => {
    load();
    window.addEventListener('medflow_live_update', load);
    return () => window.removeEventListener('medflow_live_update', load);
  }, []);

  return (
    <div className="space-y-6 font-sans">
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold text-slate-900">Robert Chen — Patient Health Portal</h2>
            <span className="text-[10px] font-bold bg-purple-50 text-purple-800 border border-purple-200 px-2 py-0.5 rounded font-mono">
              PATIENT ID: PT-90482
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">St. Jude Medical Center • Primary Physician: <strong>Dr. Maya Lin, MD</strong></p>
        </div>

        <button
          onClick={onBookClick}
          className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-4 py-2.5 rounded-xl flex items-center gap-2 shadow-xs cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Book Specialist Appointment</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {appointments.map(a => (
          <div
            key={a.id}
            className={`bg-white border rounded-2xl p-5 shadow-xs space-y-3.5 text-xs ${
              a.status === 'Rejected' ? 'border-rose-200 bg-rose-50/20' : 'border-slate-200'
            }`}
          >
            <div className="flex justify-between items-start">
              <div>
                <span className={`font-mono font-bold text-[10px] px-2 py-0.5 rounded ${
                  a.status === 'Rejected' ? 'bg-rose-100 text-rose-800' : 'bg-purple-100 text-purple-900'
                }`}>
                  TOKEN {a.tokenNumber}
                </span>
                <h4 className="font-bold text-sm text-slate-900 mt-1.5">{a.doctorName}</h4>
                <p className="text-[11px] text-slate-500">{a.department} • Slot: <strong>{a.timeSlot}</strong></p>
              </div>

              <span className={`text-[10px] font-bold px-2.5 py-1 rounded-xl ${
                a.status === 'Completed' ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' :
                a.status === 'Checked In' ? 'bg-blue-50 text-blue-800 border border-blue-200' :
                a.status === 'Rejected' ? 'bg-rose-100 text-rose-800 border border-rose-200' :
                'bg-amber-50 text-amber-800 border border-amber-200'
              }`}>
                {a.status}
              </span>
            </div>

            <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200">
              <span className="font-bold text-slate-700 block mb-0.5">Reported Symptoms:</span>
              <p className="text-slate-900">{a.symptoms}</p>
            </div>

            {a.status === 'Rejected' && a.rejectionReason && (
              <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl space-y-1 text-rose-900">
                <div className="flex items-center gap-1.5 font-bold">
                  <AlertCircle className="w-3.5 h-3.5 text-rose-700" />
                  <span>Appointment Rejected by Front Desk</span>
                </div>
                <p className="text-[11px] text-rose-800">Reason: {a.rejectionReason}</p>
              </div>
            )}

            {a.prescription ? (
              <div className="p-3.5 bg-blue-50/70 rounded-xl border border-blue-200 space-y-1 text-xs">
                <div className="flex items-center gap-1.5 font-bold text-blue-950">
                  <Pill className="w-3.5 h-3.5 text-blue-700" />
                  <span>Doctor's Prescription & Advice:</span>
                </div>
                <p className="text-slate-800 font-medium leading-relaxed">{a.prescription}</p>
              </div>
            ) : a.status !== 'Rejected' ? (
              <div className="p-2.5 text-slate-400 italic text-[11px]">
                Doctor has not written prescription yet.
              </div>
            ) : null}

            <div className="pt-2 border-t border-slate-100 flex justify-between text-[11px] font-mono text-slate-500">
              <span>Consultation Fee: ${a.fee} USD</span>
              <span className={a.status === 'Rejected' ? 'text-rose-700 font-bold' : 'text-emerald-700 font-bold'}>
                {a.status === 'Rejected' ? 'Refund Processed' : '● Paid'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
