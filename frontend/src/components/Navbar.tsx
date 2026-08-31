import React from 'react';
import { useAuth } from '../context/AuthContext';
import { ShieldCheck, Activity, UserCircle } from 'lucide-react';
import { UserRole } from '../types';

export const Navbar: React.FC = () => {
  const { currentUser, switchRole } = useAuth();

  const roles: UserRole[] = ['ADMIN', 'DOCTOR', 'NURSE', 'PHARMACIST', 'LAB_TECH', 'PATIENT'];

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-40 px-6 py-3.5 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-3">
        <div className="bg-gradient-to-tr from-medblue-600 to-medteal-500 p-2.5 rounded-xl text-white shadow-md shadow-sky-500/20">
          <Activity className="w-6 h-6 stroke-[2.5]" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">MedFlow</span>
            <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-sky-100 text-sky-700 uppercase tracking-wider">Health OS</span>
          </div>
          <p className="text-xs text-slate-500 font-medium">Enterprise Healthcare & Telehealth Platform</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-2 bg-emerald-50 border border-emerald-200/80 px-3 py-1.5 rounded-lg text-xs font-semibold text-emerald-700">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>HIPAA Audit Engine Active</span>
        </div>

        {/* Role Switcher */}
        <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl border border-slate-200">
          <span className="text-xs font-bold text-slate-500 uppercase px-2">Role:</span>
          {roles.map(r => (
            <button
              key={r}
              onClick={() => switchRole(r)}
              className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-all ${
                currentUser.role === r
                  ? 'bg-medblue-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              {r}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3 pl-2 border-l border-slate-200">
          <div className="text-right hidden sm:block">
            <p className="text-xs font-bold text-slate-900 leading-tight">{currentUser.name}</p>
            <p className="text-[11px] font-medium text-slate-500">{currentUser.department || currentUser.role}</p>
          </div>
          <div className="w-9 h-9 rounded-full bg-slate-100 border border-slate-300 flex items-center justify-center text-slate-700 font-bold text-sm">
            <UserCircle className="w-6 h-6 text-slate-600" />
          </div>
        </div>
      </div>
    </header>
  );
};
