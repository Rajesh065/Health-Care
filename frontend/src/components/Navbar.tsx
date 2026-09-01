import React, { useState, useRef, useEffect } from 'react';
import { useAuth, PRESET_HOSPITAL_USERS } from '../context/AuthContext';
import { api } from '../services/api';
import { PatientAppointment } from '../types';
import {
  Activity,
  Calendar,
  Plus,
  Search,
  LogIn,
  LogOut,
  ChevronDown,
  ShieldAlert,
  Stethoscope,
  CalendarCheck,
  User,
  LayoutDashboard,
  Users,
  Bed,
  FileText,
  CreditCard,
  History,
  Pill,
  HeartPulse,
  X
} from 'lucide-react';

export const Navbar: React.FC<{
  currentTab: string;
  setCurrentTab: (t: string) => void;
  onBookAppointment: () => void;
  onOpenAuth: () => void;
}> = ({
  currentTab,
  setCurrentTab,
  onBookAppointment,
  onOpenAuth
}) => {
  const { currentUser, isAuthenticated, logout, switchUser, persona } = useAuth();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [appointments, setAppointments] = useState<PatientAppointment[]>([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    api.getAppointments().then(setAppointments).catch(() => {});
  }, [currentTab]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getNavTabs = () => {
    if (persona === 'HOSPITAL_HEAD') {
      return [
        { id: 'director-command', label: 'Executive Command', icon: LayoutDashboard },
        { id: 'doctor-roster', label: 'Staff & Shift Rosters', icon: Users },
        { id: 'ehr-records', label: 'Hospital EHR Central', icon: FileText },
        { id: 'billing-insurance', label: 'Hospital Financials & Claims', icon: CreditCard },
        { id: 'audit-security', label: 'HIPAA Security Ledger', icon: History }
      ];
    }
    if (persona === 'DOCTOR_PHYSICIAN') {
      return [
        { id: 'doctor-rounds', label: 'Inpatient Rounds & Vitals', icon: HeartPulse },
        { id: 'doctor-consultations', label: 'My Patient Schedule', icon: Calendar },
        { id: 'ehr-records', label: 'Patient EMR & Lab Charting', icon: FileText },
        { id: 'prescriptions', label: 'Medication Order Writer', icon: Pill }
      ];
    }
    if (persona === 'APPOINTMENT_DESK') {
      return [
        { id: 'appointment-desk', label: 'Central Appointment Desk', icon: CalendarCheck },
        { id: 'bed-allocation', label: 'Inpatient Bed Allocation', icon: Bed },
        { id: 'front-desk-billing', label: 'Registration & Billing', icon: CreditCard }
      ];
    }
    // PATIENT_USER
    return [
      { id: 'patient-portal', label: 'My Consultations & Status', icon: CalendarCheck },
      { id: 'patient-reports', label: 'My Diagnostic Lab Reports', icon: FileText },
      { id: 'patient-prescriptions', label: 'My Active Prescriptions', icon: Pill },
      { id: 'patient-bills', label: 'Hospital Invoices & Co-Pay', icon: CreditCard }
    ];
  };

  const navTabs = getNavTabs();

  const filteredAppointments = searchQuery.trim()
    ? appointments.filter(a => {
        const q = searchQuery.toLowerCase().trim();
        return (
          a.tokenNumber.toLowerCase().includes(q) ||
          a.patientName.toLowerCase().includes(q) ||
          a.doctorName.toLowerCase().includes(q) ||
          a.department.toLowerCase().includes(q)
        );
      })
    : [];

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-xs w-full">
      <div className="w-full px-6 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-8">
          <div
            className="cursor-pointer flex items-center gap-2"
            onClick={() => setCurrentTab(
              persona === 'HOSPITAL_HEAD'
                ? 'director-command'
                : persona === 'DOCTOR_PHYSICIAN'
                ? 'doctor-rounds'
                : persona === 'APPOINTMENT_DESK'
                ? 'appointment-desk'
                : 'patient-portal'
            )}
          >
            <div className="w-8 h-8 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-sm shadow-xs">
              <Activity className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <span className="font-extrabold text-lg tracking-tight text-slate-900 block leading-tight">MedFlow</span>
              <span className="text-[9px] text-slate-400 font-mono block leading-none">ST. JUDE MEDICAL</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-1.5 text-xs font-semibold text-slate-600">
            {navTabs.map(tab => {
              const Icon = tab.icon;
              const isActive = currentTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setCurrentTab(tab.id)}
                  className={`px-3.5 py-1.5 rounded-xl transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-slate-900 text-white font-bold shadow-xs'
                      : 'hover:bg-slate-100 hover:text-slate-900 text-slate-600'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative hidden lg:block w-64" ref={searchRef}>
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => {
                setSearchQuery(e.target.value);
                setIsSearchOpen(true);
              }}
              onFocus={() => { if (searchQuery.trim()) setIsSearchOpen(true); }}
              placeholder="Search Token / Patient (e.g. TK-101)..."
              className="w-full pl-9 pr-8 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-800 transition-all font-medium"
            />
            {searchQuery && (
              <button
                onClick={() => { setSearchQuery(''); setIsSearchOpen(false); }}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}

            {isSearchOpen && searchQuery.trim() && (
              <div className="absolute right-0 mt-2 w-96 bg-white border border-slate-200 rounded-2xl shadow-2xl p-3 z-50 space-y-2 text-xs">
                <div className="flex justify-between items-center px-1 pb-1 border-b border-slate-100 text-[10px] text-slate-400 font-mono">
                  <span>MATCHING PATIENTS ({filteredAppointments.length})</span>
                </div>

                {filteredAppointments.length > 0 ? (
                  <div className="max-h-72 overflow-y-auto space-y-1">
                    {filteredAppointments.map(app => (
                      <div
                        key={app.id}
                        onClick={() => {
                          setIsSearchOpen(false);
                          setSearchQuery('');
                          if (persona === 'APPOINTMENT_DESK') setCurrentTab('appointment-desk');
                          else if (persona === 'DOCTOR_PHYSICIAN') setCurrentTab('doctor-rounds');
                        }}
                        className="p-2.5 rounded-xl hover:bg-slate-50 cursor-pointer transition-all border border-transparent hover:border-slate-200 flex items-start justify-between gap-3 group"
                      >
                        <div className="space-y-0.5 min-w-0">
                          <div className="flex items-center gap-1.5">
                            <span className="font-mono font-bold text-[10px] bg-slate-100 text-slate-800 px-1.5 py-0.2 rounded group-hover:bg-slate-900 group-hover:text-white transition-all">
                              {app.tokenNumber}
                            </span>
                            <span className="font-bold text-xs text-slate-900 line-clamp-1">{app.patientName}</span>
                          </div>
                          <p className="text-[11px] text-slate-500 line-clamp-1">{app.department} • {app.doctorName}</p>
                        </div>
                        <span className="text-[9px] font-bold px-2 py-0.5 rounded bg-teal-50 text-teal-800 border border-teal-200">
                          {app.slotTime}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-4 text-center text-xs text-slate-500">
                    No records found matching "{searchQuery}"
                  </div>
                )}
              </div>
            )}
          </div>

          <button
            onClick={onBookAppointment}
            className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-3.5 py-2 rounded-xl shadow-xs transition-all flex items-center gap-1.5"
          >
            <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>{persona === 'PATIENT_USER' ? 'Book Appointment' : 'New Appointment'}</span>
          </button>

          <div className="h-5 w-px bg-slate-200"></div>

          {isAuthenticated && currentUser ? (
            <div className="relative">
              <div
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center gap-2 pl-1 cursor-pointer hover:bg-slate-50 p-1 rounded-xl transition-all"
              >
                <div className={`w-8 h-8 rounded-full text-white flex items-center justify-center font-bold text-xs shadow-xs ${
                  currentUser.persona === 'HOSPITAL_HEAD'
                    ? 'bg-amber-800'
                    : currentUser.persona === 'DOCTOR_PHYSICIAN'
                    ? 'bg-blue-800'
                    : currentUser.persona === 'APPOINTMENT_DESK'
                    ? 'bg-teal-800'
                    : 'bg-purple-800'
                }`}>
                  {currentUser.initials}
                </div>
                <div className="hidden xl:block text-left">
                  <span className="block text-xs font-bold text-slate-900 leading-tight">{currentUser.name.split(',')[0]}</span>
                  <span className="block text-[10px] text-slate-500 leading-tight font-medium line-clamp-1">
                    {currentUser.persona === 'HOSPITAL_HEAD'
                      ? 'Hospital Head (Director)'
                      : currentUser.persona === 'DOCTOR_PHYSICIAN'
                      ? 'Attending Doctor'
                      : currentUser.persona === 'APPOINTMENT_DESK'
                      ? 'Appointment Desk'
                      : 'Patient Portal'}
                  </span>
                </div>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 hidden sm:block" />
              </div>

              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white border border-slate-200 rounded-2xl shadow-xl p-3 space-y-3 z-50 text-xs">
                  <div className="border-b border-slate-100 pb-2">
                    <span className="font-bold text-slate-900 block">{currentUser.name}</span>
                    <span className="text-slate-400 block text-[11px] font-mono">{currentUser.email}</span>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded inline-block mt-1">
                      {currentUser.role}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block font-mono">
                      Switch Hospital Role:
                    </span>
                    {PRESET_HOSPITAL_USERS.map(user => (
                      <button
                        key={user.id}
                        onClick={() => {
                          switchUser(user.id);
                          setIsProfileOpen(false);
                          setCurrentTab(
                            user.persona === 'HOSPITAL_HEAD'
                              ? 'director-command'
                              : user.persona === 'DOCTOR_PHYSICIAN'
                              ? 'doctor-rounds'
                              : user.persona === 'APPOINTMENT_DESK'
                              ? 'appointment-desk'
                              : 'patient-portal'
                          );
                        }}
                        className={`w-full text-left p-2 rounded-xl text-xs transition-all flex items-center justify-between ${
                          currentUser.id === user.id ? 'bg-slate-100 font-bold text-slate-900' : 'hover:bg-slate-50 text-slate-600'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          {user.persona === 'HOSPITAL_HEAD' ? (
                            <ShieldAlert className="w-3.5 h-3.5 text-amber-700" />
                          ) : user.persona === 'DOCTOR_PHYSICIAN' ? (
                            <Stethoscope className="w-3.5 h-3.5 text-blue-700" />
                          ) : user.persona === 'APPOINTMENT_DESK' ? (
                            <CalendarCheck className="w-3.5 h-3.5 text-teal-700" />
                          ) : (
                            <User className="w-3.5 h-3.5 text-purple-700" />
                          )}
                          <div>
                            <span className="block font-semibold leading-tight">{user.name.split(',')[0]}</span>
                            <span className="block text-[10px] text-slate-400 font-mono">
                              {user.persona === 'HOSPITAL_HEAD'
                                ? 'Hospital Head (Director)'
                                : user.persona === 'DOCTOR_PHYSICIAN'
                                ? 'Attending Doctor'
                                : user.persona === 'APPOINTMENT_DESK'
                                ? 'Appointment Desk'
                                : 'Patient Portal'}
                            </span>
                          </div>
                        </div>
                        <span className="text-[10px] text-slate-400 font-mono">{user.initials}</span>
                      </button>
                    ))}
                  </div>

                  <div className="border-t border-slate-100 pt-2 flex justify-between items-center">
                    <button
                      onClick={() => { setIsProfileOpen(false); onOpenAuth(); }}
                      className="text-slate-600 hover:text-slate-900 font-semibold text-[11px]"
                    >
                      Change Persona
                    </button>
                    <button
                      onClick={() => { logout(); setIsProfileOpen(false); }}
                      className="text-rose-700 hover:text-rose-800 font-bold text-[11px] flex items-center gap-1"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={onOpenAuth}
              className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 border border-slate-200"
            >
              <LogIn className="w-3.5 h-3.5" />
              <span>Sign In</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
