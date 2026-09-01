import React, { useEffect, useState } from 'react';
import { api, MEDICAL_DOMAINS } from '../services/api';
import { Appointment, AppointmentType } from '../types';
import {
  Calendar,
  Plus,
  Pill,
  Receipt,
  AlertCircle,
  CheckCircle2,
  MessageSquare,
  Building2,
  Stethoscope,
  RefreshCw
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

  const rejectedApts = appointments.filter(a => a.status === 'Rejected');

  return (
    <div className="space-y-6 font-sans">
      {/* Patient Header with 2 Distinct Booking Options */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold text-slate-900">Robert Chen — Patient Health Portal</h2>
            <span className="text-[10px] font-bold bg-purple-50 text-purple-800 border border-purple-200 px-2 py-0.5 rounded font-mono">
              PATIENT ID: PT-90482
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">St. Jude Medical Center • Choose between General OPD or Specialist Doctor Consultations</p>
        </div>

        {/* 2 Distinct Action Buttons */}
        <div className="flex flex-wrap items-center gap-2.5">
          {/* Button 1: Normal General OPD */}
          <button
            onClick={onBookGeneral}
            className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs"
          >
            <Building2 className="w-4 h-4 text-teal-700" />
            <span>Book General OPD ($75)</span>
          </button>

          {/* Button 2: Specific Specialist Doctor */}
          <button
            onClick={onBookSpecialist}
            className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-xs transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <Stethoscope className="w-4 h-4 text-emerald-400" />
            <span>Book Specialist Doctor</span>
          </button>
        </div>
      </div>

      {/* Specialist Domains Quick Carousel / Showcase */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-3">
        <div className="flex justify-between items-center border-b border-slate-100 pb-2">
          <div>
            <h3 className="font-bold text-xs text-slate-900 uppercase tracking-wider font-mono">
              Hospital Specialist Departments ({MEDICAL_DOMAINS.length} Domains)
            </h3>
            <p className="text-[11px] text-slate-500">Book direct consultations with senior chief specialists</p>
          </div>
          <button
            onClick={onBookSpecialist}
            className="text-xs font-bold text-blue-700 hover:underline cursor-pointer"
          >
            View All & Book Specialist →
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          {MEDICAL_DOMAINS.slice(0, 4).map(domain => (
            <div
              key={domain.id}
              onClick={onBookSpecialist}
              className="p-3 bg-slate-50 border border-slate-200 rounded-xl hover:border-slate-400 cursor-pointer transition-all space-y-1 group"
            >
              <span className="font-bold text-slate-900 block group-hover:text-blue-700 transition-all">
                {domain.name}
              </span>
              <p className="text-[11px] text-slate-500">{domain.doctorName}</p>
              <div className="pt-1 border-t border-slate-200/60 flex justify-between items-center text-[10px] font-mono">
                <span className="text-slate-400">{domain.experienceYears}y Exp</span>
                <span className="text-emerald-800 font-bold">${domain.consultationFee} USD</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* REAL-TIME SMS / HOSPITAL NOTIFICATION BANNER WHEN REJECTED */}
      {rejectedApts.length > 0 && (
        <div className="space-y-3">
          {rejectedApts.map(rej => (
            <div
              key={rej.id}
              className="bg-rose-50 border-2 border-rose-300 rounded-2xl p-5 shadow-xs space-y-3 animate-fadeIn"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2.5 text-rose-900 font-bold text-sm">
                  <div className="p-2 bg-rose-200 text-rose-900 rounded-xl">
                    <MessageSquare className="w-5 h-5 text-rose-800" />
                  </div>
                  <div>
                    <span className="block text-rose-950 font-black">
                      Urgent Hospital SMS & Portal Notification Received
                    </span>
                    <span className="text-[11px] text-rose-700 font-normal font-mono">
                      Sent to Patient Mobile: +1 (555) 234-8901 • Token {rej.tokenNumber}
                    </span>
                  </div>
                </div>

                <span className="text-[10px] font-mono font-bold bg-rose-200 text-rose-900 px-2.5 py-1 rounded-lg">
                  ACTION REQUIRED
                </span>
              </div>

              <div className="p-3.5 bg-white rounded-xl border border-rose-200 text-xs space-y-2 text-slate-800">
                <p className="leading-relaxed">
                  <strong>Dear Robert Chen,</strong> your appointment with <strong>{rej.doctorName}</strong> ({rej.department}) for time slot <strong>{rej.timeSlot}</strong> has been cancelled by the Central Hospital Front Desk.
                </p>
                <div className="p-2.5 bg-rose-50 rounded-lg border border-rose-200 text-rose-950">
                  <strong>Cancellation / Rejection Reason:</strong> {rej.rejectionReason || 'Doctor in Emergency Surgery (Slot Full)'}
                </div>
                <div className="flex flex-wrap items-center justify-between text-[11px] pt-1 text-slate-600 gap-2">
                  <span className="text-emerald-800 font-bold">
                    ✓ Full Refund of ${rej.fee}.00 USD has been automatically processed to your original payment method.
                  </span>
                  <button
                    onClick={onBookSpecialist}
                    className="bg-rose-800 hover:bg-rose-900 text-white font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 cursor-pointer"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Reschedule Specialist Slot</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Appointments List */}
      <div className="space-y-3">
        <h3 className="font-bold text-sm text-slate-900">My Consultation Schedule & Medical Orders</h3>
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
                  <div className="flex items-center gap-2">
                    <span className={`font-mono font-bold text-[10px] px-2 py-0.5 rounded ${
                      a.status === 'Rejected' ? 'bg-rose-100 text-rose-800' : 'bg-purple-100 text-purple-900'
                    }`}>
                      TOKEN {a.tokenNumber}
                    </span>
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 bg-slate-100 text-slate-700 rounded">
                      {a.appointmentType === 'GENERAL_OPD' ? 'General OPD' : 'Specialist'}
                    </span>
                  </div>
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
                    <span>Appointment Cancelled by Reception</span>
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
    </div>
  );
};
