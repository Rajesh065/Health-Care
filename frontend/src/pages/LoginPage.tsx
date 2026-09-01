import React from 'react';
import { useAuth, HOSPITAL_USERS } from '../context/AuthContext';
import {
  Activity,
  ShieldCheck,
  Stethoscope,
  CalendarCheck,
  User,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

export const LoginPage: React.FC = () => {
  const { switchUser } = useAuth();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col justify-center items-center py-12 px-4 font-sans">
      <div className="max-w-5xl w-full space-y-8 text-center">
        <div>
          <div className="w-12 h-12 rounded-2xl bg-teal-700 text-white flex items-center justify-center font-bold mx-auto mb-3 shadow-md">
            <Activity className="w-6 h-6 text-emerald-300" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">MedFlow Healthcare Portals</h1>
          <p className="text-sm text-slate-600 mt-1 max-w-xl mx-auto">
            St. Jude Medical Center • Select your role below for instant authorized access
          </p>
        </div>

        {/* 4 Clean Persona Login Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-left">
          {/* Director */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs hover:border-amber-500 hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center border border-amber-200">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono font-bold bg-amber-50 text-amber-900 px-2 py-0.5 rounded border border-amber-200 uppercase">
                  Director
                </span>
              </div>
              <div>
                <h3 className="font-bold text-sm text-slate-900">Hospital Director</h3>
                <p className="text-xs text-amber-900 font-semibold mt-0.5">Dr. Arthur Sterling, MD</p>
              </div>
              <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-600 space-y-1">
                <p>• Today's Admissions & Discharges</p>
                <p>• Daily Hospital Revenue ($24.8k)</p>
                <p>• 450 Bed Occupancy & Shift Roster</p>
              </div>
            </div>
            <button
              onClick={() => switchUser('DIRECTOR')}
              className="mt-5 w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
            >
              <span>Login as Director</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Doctor */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs hover:border-blue-500 hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-800 flex items-center justify-center border border-blue-200">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono font-bold bg-blue-50 text-blue-900 px-2 py-0.5 rounded border border-blue-200 uppercase">
                  Doctor
                </span>
              </div>
              <div>
                <h3 className="font-bold text-sm text-slate-900">Attending Physician</h3>
                <p className="text-xs text-blue-900 font-semibold mt-0.5">Dr. Maya Lin, MD (Cardiology)</p>
              </div>
              <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-600 space-y-1">
                <p>• Today's Patient Consultation Queue</p>
                <p>• Patient Chief Complaints & Symptoms</p>
                <p>• E-Prescribe Medicines & Advice</p>
              </div>
            </div>
            <button
              onClick={() => switchUser('DOCTOR')}
              className="mt-5 w-full py-2.5 bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
            >
              <span>Login as Doctor</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Receptionist */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs hover:border-teal-500 hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-800 flex items-center justify-center border border-teal-200">
                  <CalendarCheck className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono font-bold bg-teal-50 text-teal-900 px-2 py-0.5 rounded border border-teal-200 uppercase">
                  Reception
                </span>
              </div>
              <div>
                <h3 className="font-bold text-sm text-slate-900">Reception & Front Desk</h3>
                <p className="text-xs text-teal-900 font-semibold mt-0.5">Priya Nair (Desk Lead)</p>
              </div>
              <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-600 space-y-1">
                <p>• Token Queue Dispatch</p>
                <p>• Accept / Check-In Patients</p>
                <p className="text-rose-700 font-semibold">• Reject / Cancel Overbooked Slots</p>
              </div>
            </div>
            <button
              onClick={() => switchUser('RECEPTIONIST')}
              className="mt-5 w-full py-2.5 bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
            >
              <span>Login as Receptionist</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Patient */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs hover:border-purple-500 hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-800 flex items-center justify-center border border-purple-200">
                  <User className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono font-bold bg-purple-50 text-purple-900 px-2 py-0.5 rounded border border-purple-200 uppercase">
                  Patient
                </span>
              </div>
              <div>
                <h3 className="font-bold text-sm text-slate-900">Patient Health Portal</h3>
                <p className="text-xs text-purple-900 font-semibold mt-0.5">Robert Chen (PT-90482)</p>
              </div>
              <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-600 space-y-1">
                <p>• Book Specialist Appointments</p>
                <p>• View Doctor Prescriptions</p>
                <p>• Consultation Fee Receipts</p>
              </div>
            </div>
            <button
              onClick={() => switchUser('PATIENT')}
              className="mt-5 w-full py-2.5 bg-purple-700 hover:bg-purple-800 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
            >
              <span>Login as Patient</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
