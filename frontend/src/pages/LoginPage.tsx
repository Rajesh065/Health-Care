import React, { useState } from 'react';
import { useAuth, PRESET_HOSPITAL_USERS } from '../context/AuthContext';
import { HospitalUser, UserPersona } from '../types';
import {
  ShieldAlert,
  Stethoscope,
  CalendarCheck,
  User,
  Activity,
  ArrowRight,
  CheckCircle2,
  Lock,
  Mail,
  KeyRound,
  Building2,
  ShieldCheck
} from 'lucide-react';

export const LoginPage: React.FC<{ onLoggedIn?: () => void }> = ({ onLoggedIn }) => {
  const { login, switchUser } = useAuth();
  const [selectedPersona, setSelectedPersona] = useState<UserPersona>('HOSPITAL_HEAD');
  const [email, setEmail] = useState('head.director@stjudemedical.org');
  const [password, setPassword] = useState('••••••••••••');

  const handleQuickLogin = (user: HospitalUser) => {
    switchUser(user.id);
    if (onLoggedIn) onLoggedIn();
  };

  const handleFormLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const matched = PRESET_HOSPITAL_USERS.find(u => u.email.toLowerCase() === email.toLowerCase()) || PRESET_HOSPITAL_USERS[0];
    login(email, password, matched);
    if (onLoggedIn) onLoggedIn();
  };

  const selectUserForForm = (user: HospitalUser) => {
    setSelectedPersona(user.persona);
    setEmail(user.email);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col justify-between py-10 px-4 sm:px-6 lg:px-8 w-full font-sans">
      <div className="max-w-6xl mx-auto w-full space-y-8">
        {/* Clean Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-xs">
            <Activity className="w-4 h-4 text-emerald-600" />
            <span>St. Jude Medical Center • Hospital Operations & EHR Gateway</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            MedFlow Healthcare & Hospital Portals
          </h1>
          <p className="text-sm text-slate-600 max-w-2xl mx-auto">
            Select your clinical or patient persona below for direct 1-click access, or log in with verified hospital credentials.
          </p>
        </div>

        {/* 4 Clean White Persona Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* 1. Hospital Head / Director */}
          <div className="bg-white border border-slate-200 hover:border-amber-500 rounded-2xl p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <div className="p-2.5 bg-amber-50 text-amber-900 rounded-xl border border-amber-200">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono font-bold bg-amber-50 text-amber-900 px-2 py-0.5 rounded border border-amber-200 uppercase">
                  Director
                </span>
              </div>

              <div>
                <h3 className="font-bold text-base text-slate-900">Hospital Head (Director)</h3>
                <p className="text-xs text-amber-900 font-semibold mt-0.5">Dr. Arthur Sterling, MD, FACS</p>
                <span className="text-[11px] text-slate-400 font-mono block mt-1">head.director@stjudemedical.org</span>
              </div>

              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-600 space-y-1.5">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Executive Command & Bed Matrix</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Hospital Financials & Claims</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Staff Rosters & HIPAA Security</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleQuickLogin(PRESET_HOSPITAL_USERS[0])}
              className="mt-6 w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer"
            >
              <span>Login as Hospital Head</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 2. Specialist Doctor */}
          <div className="bg-white border border-slate-200 hover:border-blue-500 rounded-2xl p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <div className="p-2.5 bg-blue-50 text-blue-900 rounded-xl border border-blue-200">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono font-bold bg-blue-50 text-blue-900 px-2 py-0.5 rounded border border-blue-200 uppercase">
                  Doctor
                </span>
              </div>

              <div>
                <h3 className="font-bold text-base text-slate-900">Attending Doctor</h3>
                <p className="text-xs text-blue-900 font-semibold mt-0.5">Dr. Maya Lin, MD, FACC</p>
                <span className="text-[11px] text-slate-400 font-mono block mt-1">dr.mayalin@stjudemedical.org</span>
              </div>

              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-600 space-y-1.5">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Inpatient Rounds & Live Vitals</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Troponin & Biomarker Lab Charting</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>E-Prescribe Medication Orders</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleQuickLogin(PRESET_HOSPITAL_USERS[1])}
              className="mt-6 w-full py-2.5 px-4 bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer"
            >
              <span>Login as Attending Doctor</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 3. Central Appointment Desk */}
          <div className="bg-white border border-slate-200 hover:border-teal-500 rounded-2xl p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <div className="p-2.5 bg-teal-50 text-teal-900 rounded-xl border border-teal-200">
                  <CalendarCheck className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono font-bold bg-teal-50 text-teal-900 px-2 py-0.5 rounded border border-teal-200 uppercase">
                  Front Desk
                </span>
              </div>

              <div>
                <h3 className="font-bold text-base text-slate-900">Appointment & Front Desk</h3>
                <p className="text-xs text-teal-900 font-semibold mt-0.5">Priya Nair (Desk Supervisor)</p>
                <span className="text-[11px] text-slate-400 font-mono block mt-1">reception.desk@stjudemedical.org</span>
              </div>

              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-600 space-y-1.5">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Outpatient Bookings & Token Queue</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Chamber Check-in & Dispatch</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Walk-in Token Booking & Receipts</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleQuickLogin(PRESET_HOSPITAL_USERS[2])}
              className="mt-6 w-full py-2.5 px-4 bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer"
            >
              <span>Login as Appointment Desk</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 4. Patient Health Portal */}
          <div className="bg-white border border-slate-200 hover:border-purple-500 rounded-2xl p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <div className="p-2.5 bg-purple-50 text-purple-900 rounded-xl border border-purple-200">
                  <User className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono font-bold bg-purple-50 text-purple-900 px-2 py-0.5 rounded border border-purple-200 uppercase">
                  Patient
                </span>
              </div>

              <div>
                <h3 className="font-bold text-base text-slate-900">Patient Health Portal</h3>
                <p className="text-xs text-purple-900 font-semibold mt-0.5">Robert Chen (PT-90482)</p>
                <span className="text-[11px] text-slate-400 font-mono block mt-1">robert.chen@gmail.com</span>
              </div>

              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-600 space-y-1.5">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Book Doctor Appointments</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Download Verified Lab Reports</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Active Prescriptions & Co-Pay</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleQuickLogin(PRESET_HOSPITAL_USERS[3])}
              className="mt-6 w-full py-2.5 px-4 bg-purple-700 hover:bg-purple-800 text-white font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer"
            >
              <span>Login as Patient User</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Clean White Credentials Form Section */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 max-w-xl mx-auto space-y-4 shadow-xs">
          <div className="flex justify-between items-center border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <KeyRound className="w-4 h-4 text-slate-700" />
              <h3 className="font-bold text-sm text-slate-900">Manual Credential Authentication</h3>
            </div>
            <span className="text-[10px] text-slate-400 font-mono">HIPAA Encrypted (TLS 1.3)</span>
          </div>

          <form onSubmit={handleFormLogin} className="space-y-3.5 text-xs">
            <div>
              <label className="font-semibold text-slate-700 block mb-1.5">Select Persona to Auto-Fill</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {PRESET_HOSPITAL_USERS.map(u => (
                  <button
                    key={u.id}
                    type="button"
                    onClick={() => selectUserForForm(u)}
                    className={`p-2 rounded-xl border text-[11px] font-bold transition-all cursor-pointer ${
                      email.toLowerCase() === u.email.toLowerCase()
                        ? 'bg-slate-900 border-slate-900 text-white shadow-xs'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {u.persona === 'HOSPITAL_HEAD'
                      ? 'Director'
                      : u.persona === 'DOCTOR_PHYSICIAN'
                      ? 'Doctor'
                      : u.persona === 'APPOINTMENT_DESK'
                      ? 'Front Desk'
                      : 'Patient'}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="font-semibold text-slate-700 block mb-1">Email Address</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  required
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 outline-none focus:bg-white focus:ring-2 focus:ring-slate-900/10 focus:border-slate-800 font-mono text-xs"
                />
              </div>
            </div>

            <div>
              <label className="font-semibold text-slate-700 block mb-1">Password / Security PIN</label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  required
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 outline-none focus:bg-white focus:ring-2 focus:ring-slate-900/10 focus:border-slate-800 font-mono text-xs"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition-all mt-2 cursor-pointer shadow-xs"
            >
              Sign In to St. Jude Medical Portal
            </button>
          </form>
        </div>
      </div>

      <footer className="text-center text-slate-400 text-[11px] pt-8">
        St. Jude Medical Center • Enterprise Health Information System (EHR) • HIPAA & SOC-2 Compliant
      </footer>
    </div>
  );
};
