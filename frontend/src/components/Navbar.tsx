import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Stethoscope, Search, Bell, ShieldCheck, ChevronDown, Plus } from 'lucide-react';

export const Navbar: React.FC<{ onNewPatient: () => void }> = ({ onNewPatient }) => {
  const { doctorName, hospitalName, department } = useAuth();

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-xs">
      <div className="px-6 py-3 flex items-center justify-between gap-4">
        {/* Hospital Branding */}
        <div className="flex items-center gap-3">
          <div className="bg-teal-600 p-2.5 rounded-xl text-white shadow-sm flex items-center justify-center">
            <Stethoscope className="w-5 h-5 stroke-[2.5]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-base tracking-tight text-slate-900">MedFlow Health</span>
              <span className="text-[11px] font-semibold bg-teal-50 text-teal-700 border border-teal-200 px-2 py-0.5 rounded-md">FHIR R4 EHR</span>
            </div>
            <p className="text-[11px] text-slate-500 font-medium">{hospitalName}</p>
          </div>
        </div>

        {/* Global Search Bar */}
        <div className="flex-1 max-w-md hidden md:block">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search patient name, MRN, diagnosis or ICD-10 code... (Press ⌘K)"
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 transition-all"
            />
          </div>
        </div>

        {/* Quick Action & Doctor Profile */}
        <div className="flex items-center gap-3">
          <button
            onClick={onNewPatient}
            className="hidden sm:flex items-center gap-1.5 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs px-3.5 py-2 rounded-xl shadow-xs transition-all"
          >
            <Plus className="w-4 h-4" />
            <span>Admit Patient</span>
          </button>

          <button className="p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-xl relative transition-all">
            <Bell className="w-4 h-4" />
            <span className="w-2 h-2 bg-rose-500 rounded-full absolute top-2 right-2 ring-2 ring-white"></span>
          </button>

          <div className="h-6 w-px bg-slate-200"></div>

          {/* Doctor Badge */}
          <div className="flex items-center gap-2.5 pl-1 cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-teal-100 border border-teal-200 flex items-center justify-center text-teal-800 font-bold text-xs">
              SJ
            </div>
            <div className="hidden lg:block text-left">
              <p className="text-xs font-bold text-slate-900 leading-tight">{doctorName}</p>
              <p className="text-[10px] text-slate-500 font-medium leading-tight">{department}</p>
            </div>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
          </div>
        </div>
      </div>
    </header>
  );
};
