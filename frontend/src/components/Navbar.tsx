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
  CalendarCheck
} from 'lucide-react';

export const Navbar: React.FC<{ onBookClick: () => void }> = ({ onBookClick }) => {
  const { currentUser, switchUser, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-teal-700 text-white flex items-center justify-center font-bold shadow-xs">
            <Activity className="w-5 h-5" />
          </div>
          <div>
            <span className="font-extrabold text-lg tracking-tight text-slate-900 leading-none block">MedFlow</span>
            <span className="text-[10px] text-slate-500 font-medium leading-none block mt-0.5">Hospital Management</span>
          </div>
        </div>

        {/* Center Role Indicators */}
        <div className="hidden md:flex items-center bg-slate-100 p-1 rounded-xl gap-1 text-xs">
          {HOSPITAL_USERS.map(u => (
            <button
              key={u.persona}
              onClick={() => switchUser(u.persona)}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
                currentUser.persona === u.persona
                  ? 'bg-white text-slate-900 shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              {u.persona === 'DIRECTOR' && 'Director'}
              {u.persona === 'DOCTOR' && 'Doctor'}
              {u.persona === 'RECEPTIONIST' && 'Receptionist'}
              {u.persona === 'PATIENT' && 'Patient'}
            </button>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onBookClick}
            className="bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs px-3.5 py-2 rounded-xl shadow-xs transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Book Appointment</span>
          </button>

          {/* Profile Dropdown */}
          <div className="relative">
            <div
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-2 cursor-pointer p-1 rounded-xl hover:bg-slate-100 transition-all border border-transparent hover:border-slate-200"
            >
              <div className="w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold text-xs">
                {currentUser.name.charAt(0)}
              </div>
              <div className="hidden sm:block text-left text-xs">
                <span className="font-bold text-slate-900 block leading-tight">{currentUser.name}</span>
                <span className="text-[10px] text-slate-500 font-medium block leading-tight">{currentUser.role}</span>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </div>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white border border-slate-200 rounded-2xl shadow-xl p-2 z-50 text-xs space-y-1">
                <div className="p-2 border-b border-slate-100">
                  <span className="font-bold text-slate-900 block">{currentUser.name}</span>
                  <span className="text-[10px] text-slate-400 font-mono block">{currentUser.email}</span>
                  <span className="text-[10px] text-teal-800 bg-teal-50 px-2 py-0.5 rounded font-bold inline-block mt-1">
                    {currentUser.role}
                  </span>
                </div>

                <div className="pt-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block px-2 py-1">
                    Switch Login:
                  </span>
                  {HOSPITAL_USERS.map(u => (
                    <button
                      key={u.persona}
                      onClick={() => { switchUser(u.persona); setDropdownOpen(false); }}
                      className={`w-full text-left px-2.5 py-1.5 rounded-lg transition-all flex items-center justify-between cursor-pointer ${
                        currentUser.persona === u.persona ? 'bg-slate-100 font-bold text-slate-900' : 'text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <span>{u.role} ({u.name.split(' ')[0]})</span>
                    </button>
                  ))}
                </div>

                <div className="border-t border-slate-100 pt-1">
                  <button
                    onClick={() => { logout(); setDropdownOpen(false); }}
                    className="w-full text-left px-2.5 py-1.5 text-rose-700 hover:bg-rose-50 rounded-lg font-bold flex items-center gap-1.5 cursor-pointer"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    <span>Log Out</span>
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
