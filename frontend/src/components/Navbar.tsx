import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Activity, ShieldCheck, UserCircle } from 'lucide-react';
import { UserRole } from '../types';

export const Navbar: React.FC = () => {
  const { currentUser, switchRole } = useAuth();
  const roles: UserRole[] = ['ADMIN', 'DOCTOR', 'NURSE', 'PHARMACIST', 'LAB_TECH', 'PATIENT'];

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-40 px-6 py-3.5 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-3">
        <div className="bg-gradient-to-tr from-sky-600 to-teal-500 p-2.5 rounded-xl text-white shadow-md">
          <Activity className="w-6 h-6 stroke-[2.5]" />
        </div>
        <div>
          <span className="font-extrabold text-xl tracking-tight text-slate-900">MedFlow Health OS</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-lg text-xs font-semibold text-emerald-700">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>HIPAA Engine Active</span>
        </div>

        <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl">
          {roles.map(r => (
            <button
              key={r}
              onClick={() => switchRole(r)}
              className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-all ${
                currentUser.role === r ? 'bg-sky-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {r}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 border-l border-slate-200 pl-3">
          <div className="text-right hidden sm:block">
            <p className="text-xs font-bold text-slate-900">{currentUser.name}</p>
            <p className="text-[10px] text-slate-500">{currentUser.role}</p>
          </div>
          <UserCircle className="w-7 h-7 text-slate-600" />
        </div>
      </div>
    </header>
  );
};
