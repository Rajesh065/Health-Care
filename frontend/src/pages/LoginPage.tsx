import React from 'react';
import { useAuth, HOSPITAL_USERS } from '../context/AuthContext';
import { UserPersona } from '../types';
import {
  Activity,
  ShieldCheck,
  Stethoscope,
  CalendarCheck,
  User,
  ArrowRight
} from 'lucide-react';

export const LoginPage: React.FC = () => {
  const { switchUser } = useAuth();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col justify-center items-center py-12 px-4 font-sans">
      <div className="max-w-4xl w-full space-y-8 text-center">
        <div>
          <div className="w-12 h-12 rounded-2xl bg-teal-700 text-white flex items-center justify-center font-bold mx-auto mb-3 shadow-md">
            <Activity className="w-6 h-6" />
          </div>
          <h1 className="text-3xl font-black text-slate-900">MedFlow Healthcare</h1>
          <p className="text-sm text-slate-500 mt-1">Please select your login role to continue</p>
        </div>

        {/* 4 Clean Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
          {/* Director */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs hover:border-amber-500 hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center font-bold border border-amber-200">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-slate-900">Hospital Director</h3>
              <p className="text-xs text-slate-500">Dr. Arthur Sterling</p>
              <p className="text-[11px] text-slate-400">View hospital beds, revenue, and active staff stats.</p>
            </div>
            <button
              onClick={() => switchUser('DIRECTOR')}
              className="mt-4 w-full py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1 cursor-pointer"
            >
              <span>Login</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* Doctor */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs hover:border-blue-500 hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-800 flex items-center justify-center font-bold border border-blue-200">
                <Stethoscope className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-slate-900">Attending Doctor</h3>
              <p className="text-xs text-slate-500">Dr. Maya Lin</p>
              <p className="text-[11px] text-slate-400">View today's patient queue and write prescriptions.</p>
            </div>
            <button
              onClick={() => switchUser('DOCTOR')}
              className="mt-4 w-full py-2 bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1 cursor-pointer"
            >
              <span>Login</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* Receptionist */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs hover:border-teal-500 hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-9 h-9 rounded-xl bg-teal-50 text-teal-800 flex items-center justify-center font-bold border border-teal-200">
                <CalendarCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-slate-900">Front Desk</h3>
              <p className="text-xs text-slate-500">Priya Nair</p>
              <p className="text-[11px] text-slate-400">Manage patient tokens, check-ins, and walk-ins.</p>
            </div>
            <button
              onClick={() => switchUser('RECEPTIONIST')}
              className="mt-4 w-full py-2 bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1 cursor-pointer"
            >
              <span>Login</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* Patient */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs hover:border-purple-500 hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-800 flex items-center justify-center font-bold border border-purple-200">
                <User className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-slate-900">Patient Portal</h3>
              <p className="text-xs text-slate-500">Robert Chen</p>
              <p className="text-[11px] text-slate-400">View appointments, doctor advice, and receipts.</p>
            </div>
            <button
              onClick={() => switchUser('PATIENT')}
              className="mt-4 w-full py-2 bg-purple-700 hover:bg-purple-800 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1 cursor-pointer"
            >
              <span>Login</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
