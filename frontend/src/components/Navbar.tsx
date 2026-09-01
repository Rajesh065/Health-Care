import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import {
  Plus,
  ChevronDown,
  User,
  LogOut,
  Building2,
  CalendarCheck,
  Stethoscope
} from 'lucide-react';

export const Navbar: React.FC<{ onBookClick: () => void }> = ({ onBookClick }) => {
  const { currentUser, persona, allUsers, switchUserById, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-xs w-full">
      <div className="w-full px-4 sm:px-8 lg:px-12 py-3.5 flex items-center justify-between gap-4">
        {/* Left: Brand Name (Clean text) */}
        <div>
          <span className="font-black text-xl tracking-tight text-slate-900 leading-none block">MedFlow</span>
          <span className="text-[10px] text-slate-500 font-medium leading-none block mt-0.5">St. Jude Medical Center</span>
        </div>

        {/* Center: Current Authorized Role Badge */}
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700">
          {persona === 'MANAGER' && (
            <>
              <Building2 className="w-4 h-4 text-blue-700" />
              <span>Manager (Hospital Operations & Facility Control)</span>
            </>
          )}
          {persona === 'EMPLOYEE' && (
            <>
              <Stethoscope className="w-4 h-4 text-purple-700" />
              <span>Doctor / Staff ({currentUser.name})</span>
            </>
          )}
          {persona === 'RECEPTIONIST' && (
            <>
              <CalendarCheck className="w-4 h-4 text-teal-700" />
              <span>Receptionist (Appointments Acceptance & Rejection Desk)</span>
            </>
          )}
          {persona === 'PATIENT' && (
            <>
              <User className="w-4 h-4 text-emerald-700" />
              <span>Patient (Online Booking & Health Portal)</span>
            </>
          )}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {persona === 'PATIENT' && (
            <button
              onClick={onBookClick}
              className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-4 py-2 rounded-xl shadow-xs transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Plus className="w-4 h-4 stroke-[2.5]" />
              <span>Book Appointment</span>
            </button>
          )}

          {persona === 'PATIENT' && <div className="h-5 w-px bg-slate-200"></div>}

          {/* Profile & Switcher */}
          <div className="relative">
            <div
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-2.5 cursor-pointer p-1.5 rounded-xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-200"
            >
              <div className={`w-8 h-8 rounded-full text-white flex items-center justify-center font-bold text-xs shadow-xs ${
                persona === 'MANAGER' ? 'bg-blue-700' :
                persona === 'EMPLOYEE' ? 'bg-purple-700' :
                persona === 'RECEPTIONIST' ? 'bg-teal-700' : 'bg-emerald-700'
              }`}>
                {currentUser.name.charAt(0)}
              </div>
              <div className="hidden md:block text-left text-xs">
                <span className="font-bold text-slate-900 block leading-tight">{currentUser.name}</span>
                <span className="text-[10px] text-slate-500 font-medium block leading-tight">
                  {persona === 'MANAGER'
                    ? 'Hospital Manager'
                    : persona === 'EMPLOYEE'
                    ? 'Doctor / Staff'
                    : persona === 'RECEPTIONIST'
                    ? 'Receptionist'
                    : 'Patient'}
                </span>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </div>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-72 bg-white border border-slate-200 rounded-2xl shadow-xl p-3 z-50 text-xs space-y-2 max-h-[85vh] overflow-y-auto">
                <div className="p-2 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="font-bold text-slate-900 block">{currentUser.name}</span>
                  <span className="text-[10px] text-slate-400 font-mono block">{currentUser.email}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded font-bold inline-block mt-1 ${
                    persona === 'MANAGER' ? 'bg-blue-50 text-blue-900 border border-blue-200' :
                    persona === 'EMPLOYEE' ? 'bg-purple-50 text-purple-900 border border-purple-200' :
                    persona === 'RECEPTIONIST' ? 'bg-teal-50 text-teal-900 border border-teal-200' :
                    'bg-emerald-50 text-emerald-900 border border-emerald-200'
                  }`}>
                    {currentUser.role}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block px-1 py-1">
                    Switch Active User Account:
                  </span>
                  <div className="space-y-1">
                    {allUsers.map(u => (
                      <button
                        key={u.id}
                        onClick={() => { switchUserById(u.id); setDropdownOpen(false); }}
                        className={`w-full text-left px-2.5 py-2 rounded-xl transition-all flex items-center justify-between cursor-pointer ${
                          currentUser.id === u.id ? 'bg-slate-900 text-white font-bold' : 'text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          {u.persona === 'MANAGER' && <Building2 className="w-3.5 h-3.5 text-blue-400" />}
                          {u.persona === 'EMPLOYEE' && <Stethoscope className="w-3.5 h-3.5 text-purple-400" />}
                          {u.persona === 'RECEPTIONIST' && <CalendarCheck className="w-3.5 h-3.5 text-teal-400" />}
                          {u.persona === 'PATIENT' && <User className="w-3.5 h-3.5 text-emerald-400" />}
                          <div className="leading-tight">
                            <span className="block font-bold">{u.name}</span>
                            <span className="text-[9px] opacity-75 block">{u.role}</span>
                          </div>
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
                    <span>Log Out to Login & Sign Up Hub</span>
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
