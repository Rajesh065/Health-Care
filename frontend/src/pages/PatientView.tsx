import React, { useEffect, useState } from 'react';
import { api, MEDICAL_DOMAINS } from '../services/api';
import { Appointment } from '../types';
import {
  Calendar,
  Plus,
  Pill,
  AlertCircle,
  CheckCircle2,
  Building2,
  Stethoscope,
  RefreshCw,
  Clock,
  Phone,
  User
} from 'lucide-react';

export const PatientView: React.FC<{
  onBookGeneral: () => void;
  onBookSpecialist: () => void;
}> = ({ onBookGeneral, onBookSpecialist }) => {
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
    <div className="space-y-6 font-sans w-full">
      {/* Patient Header Banner (Expansive Width) */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 w-full">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold text-slate-900">Robert Chen — Patient Portal</h2>
            <span className="text-[10px] font-bold bg-purple-50 text-purple-800 border border-purple-200 px-2.5 py-0.5 rounded font-mono">
              PATIENT ID: PT-90482
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">St. Jude Medical Center • Online Appointment Booking & Medical Advice</p>
        </div>

        {/* 2 Distinct Action Buttons */}
        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={onBookGeneral}
            className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs px-4 py-2.5 rounded-xl border border-slate-200 transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs"
          >
            <Building2 className="w-4 h-4 text-teal-700" />
            <span>Book General OPD</span>
          </button>

          <button
            onClick={onBookSpecialist}
            className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-xs transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <Stethoscope className="w-4 h-4 text-emerald-400" />
            <span>Book Specialist Doctor</span>
          </button>
        </div>
      </div>

      {/* Specialist Domains Showcase */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-3.5 w-full">
        <div className="flex justify-between items-center border-b border-slate-100 pb-2.5">
          <div>
            <h3 className="font-bold text-xs text-slate-900 uppercase tracking-wider font-mono">
              Specialist Clinical Departments ({MEDICAL_DOMAINS.length} Domains)
            </h3>
            <p className="text-[11px] text-slate-500">Book direct consultations with senior specialist physicians</p>
          </div>
          <button
            onClick={onBookSpecialist}
            className="text-xs font-bold text-blue-700 hover:underline cursor-pointer"
          >
            View All & Book Specialist →
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 text-xs w-full">
          {MEDICAL_DOMAINS.slice(0, 4).map(domain => (
            <div
              key={domain.id}
              onClick={onBookSpecialist}
              className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl hover:border-slate-400 cursor-pointer transition-all space-y-1 group"
            >
              <span className="font-bold text-slate-900 block group-hover:text-blue-700 transition-all">
                {domain.name}
              </span>
              <p className="text-[11px] text-slate-500">{domain.doctorName}</p>
              <div className="pt-1 border-t border-slate-200/60 flex justify-between items-center text-[10px] font-mono">
                <span className="text-slate-400">{domain.experienceYears}y Exp</span>
                <span className="text-blue-700 font-bold">{domain.chamberNumber}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Appointments List (Clean Normal Card, ONLY the Rejection Reason in Red!) */}
      <div className="space-y-4 w-full">
        <h3 className="font-bold text-sm text-slate-900">My Booked Appointments ({appointments.length})</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full">
          {appointments.map(a => (
            <div
              key={a.id}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4 text-xs w-full"
            >
              {/* Top Row: Token & Status */}
              <div className="flex justify-between items-start border-b border-slate-100 pb-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-[10px] bg-slate-100 text-slate-800 px-2.5 py-0.5 rounded">
                      TOKEN {a.tokenNumber}
                    </span>
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 bg-slate-100 text-slate-600 rounded">
                      {a.appointmentType === 'GENERAL_OPD' ? 'General OPD' : 'Specialist'}
                    </span>
                  </div>
                  <h4 className="font-bold text-base text-slate-900 mt-1.5">{a.doctorName}</h4>
                  <p className="text-slate-500 text-[11px]">{a.department} • Time Slot: <strong>{a.timeSlot}</strong></p>
                </div>

                <span className={`text-[10px] font-bold px-2.5 py-1 rounded-xl ${
                  a.status === 'Completed' ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' :
                  a.status === 'Checked In' ? 'bg-blue-50 text-blue-800 border border-blue-200' :
                  a.status === 'Rejected' ? 'bg-rose-50 text-rose-700 border border-rose-200' :
                  'bg-amber-50 text-amber-800 border border-amber-200'
                }`}>
                  {a.status}
                </span>
              </div>

              {/* Patient Full Details */}
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5 text-[11px]">
                <div className="flex justify-between text-slate-600">
                  <span>Patient Name: <strong className="text-slate-900">{a.patientName}</strong></span>
                  <span>Age / Gender: <strong className="text-slate-900">{a.patientAge}y, {a.patientGender}</strong></span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Phone Number: <strong className="text-slate-900 font-mono">{a.patientPhone}</strong></span>
                  <span>Appointment Date: <strong className="text-slate-900">{a.date}</strong></span>
                </div>
                <div className="pt-1 border-t border-slate-200/60 text-slate-700">
                  <span>Reported Symptoms: <strong className="text-slate-900">{a.symptoms}</strong></span>
                </div>
              </div>

              {/* ONLY REJECTION REASON SENTENCE IN RED */}
              {a.status === 'Rejected' && a.rejectionReason && (
                <div className="space-y-2">
                  <p className="text-rose-600 font-bold text-xs leading-relaxed">
                    Appointment Rejected Reason: {a.rejectionReason}
                  </p>
                  <button
                    onClick={onBookSpecialist}
                    className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-3.5 py-2 rounded-xl flex items-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Reschedule Another Slot</span>
                  </button>
                </div>
              )}

              {/* Doctor Prescription Note (If Completed) */}
              {a.prescription && (
                <div className="p-3.5 bg-blue-50/70 rounded-xl border border-blue-200 space-y-1 text-xs">
                  <div className="flex items-center gap-1.5 font-bold text-blue-950">
                    <Pill className="w-3.5 h-3.5 text-blue-700" />
                    <span>Doctor's Prescription:</span>
                  </div>
                  <p className="text-slate-800 font-medium leading-relaxed">{a.prescription}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
