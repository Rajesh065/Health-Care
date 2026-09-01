import React, { useState } from 'react';
import { useAuth, HOSPITAL_USERS } from '../context/AuthContext';
import { UserPersona } from '../types';
import {
  Activity,
  Plus,
  ChevronDown,
  User,
  LogOut,
  Stethoscope,
  ShieldCheck,
  CalendarCheck,
  Bed,
  FileText
} from 'lucide-react';

export const Navbar: React.FC<{ onBookClick: () => void }> = ({ onBookClick }) => {
  const { currentUser, persona, switchUser, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        {/* Left: Brand Logo & Title */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-teal-700 text-white flex items-center justify-center font-bold shadow-xs">
            <Activity className="w-5 h-5 text-emerald-300" />
          </div>
          <div>
            <span className="font-extrabold text-lg tracking-tight text-slate-900 leading-none block">MedFlow</span>
            <span className="text-[10px] text-slate-500 font-medium leading-none block mt-0.5">St. Jude Medical Center</span>
          </div>
        </div>

        {/* Center: Current Workspace Badge */}
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700">
          {persona === 'DIRECTOR' && (
            <>
              <ShieldCheck className="w-4 h-4 text-amber-700" />
              <span>Hospital Executive Command Hub</span>
            </>
          )}
          {persona === 'DOCTOR' && (
            <>
              <Stethoscope className="w-4 h-4 text-blue-700" />
              <span>Physician Clinical Rounds & Queue</span>
            </>
          )}
          {persona === 'RECEPTIONIST' && (
            <>
              <CalendarCheck className="w-4 h-4 text-teal-700" />
              <span>Central Registration & Token Desk</span>
            </>
          )}
          {persona === 'PATIENT' && (
            <>
              <User className="w-4 h-4 text-purple-700" />
              <span>Patient Health Portal (Robert Chen)</span>
            </>
          )}
        </div>

        {/* Right Actions: Book Button & User Profile */}
        <div className="flex items-center gap-3">
          <button
            onClick={onBookClick}
            className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-3.5 py-2 rounded-xl shadow-xs transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <Plus className="w-4 h-4 stroke-[2.5]" />
            <span>{persona === 'PATIENT' ? 'Book Appointment' : 'New Appointment'}</span>
          </button>

          <div className="h-5 w-px bg-slate-200"></div>

          {/* Profile & Role Switcher */}
          <div className="relative">
            <div
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-2.5 cursor-pointer p-1 rounded-xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-200"
            >
              <div className={`w-8 h-8 rounded-full text-white flex items-center justify-center font-bold text-xs shadow-xs ${
                persona === 'DIRECTOR' ? 'bg-amber-700' :
                persona === 'DOCTOR' ? 'bg-blue-700' :
                persona === 'RECEPTIONIST' ? 'bg-teal-700' : 'bg-purple-700'
              }`}>
                {currentUser.name.charAt(0)}
              </div>
              <div className="hidden md:block text-left text-xs">
                <span className="font-bold text-slate-900 block leading-tight">{currentUser.name.split(',')[0]}</span>
                <span className="text-[10px] text-slate-500 font-medium block leading-tight">{currentUser.role}</span>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </div>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-72 bg-white border border-slate-200 rounded-2xl shadow-xl p-3 z-50 text-xs space-y-2">
                <div className="p-2 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="font-bold text-slate-900 block">{currentUser.name}</span>
                  <span className="text-[10px] text-slate-400 font-mono block">{currentUser.email}</span>
                  <span className="text-[10px] text-teal-800 bg-teal-50 border border-teal-200 px-2 py-0.5 rounded font-bold inline-block mt-1">
                    {currentUser.role}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block px-1 py-1">
                    Switch Hospital Role:
                  </span>
                  <div className="space-y-1">
                    {HOSPITAL_USERS.map(u => (
                      <button
                        key={u.persona}
                        onClick={() => { switchUser(u.persona); setDropdownOpen(false); }}
                        className={`w-full text-left px-2.5 py-2 rounded-xl transition-all flex items-center justify-between cursor-pointer ${
                          currentUser.persona === u.persona ? 'bg-slate-900 text-white font-bold' : 'text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          {u.persona === 'DIRECTOR' && <ShieldCheck className="w-3.5 h-3.5" />}
                          {u.persona === 'DOCTOR' && <Stethoscope className="w-3.5 h-3.5" />}
                          {u.persona === 'RECEPTIONIST' && <CalendarCheck className="w-3.5 h-3.5" />}
                          {u.persona === 'PATIENT' && <User className="w-3.5 h-3.5" />}
                          <span>{u.role.split('&')[0].trim()}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-2">
                  <button
                    onClick={() => { logout(); setDropdownOpen(false); }}
                    className="w-full text-left px-2.5 py-1.5 text-rose-700 hover:bg-rose-50 rounded-xl font-bold flex items-center gap-1.5 cursor-pointer"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    <span>Log Out to Login Hub</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
