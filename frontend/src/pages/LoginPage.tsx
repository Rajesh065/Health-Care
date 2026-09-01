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
  KeyRound
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
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col justify-between py-8 px-4 sm:px-6 lg:px-8 w-full">
      <div className="max-w-6xl mx-auto w-full space-y-8">
        {/* Header Branding */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center justify-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-xs font-mono text-emerald-400">
            <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
            <span>ST. JUDE MEDICAL CENTER • SECURE CLINICAL EHR GATEWAY</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            MedFlow Healthcare & Hospital Portals
          </h1>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto">
            Choose your authorized clinical or patient persona below for direct 1-click access, or log in with verified hospital credentials.
          </p>
        </div>

        {/* 4 Login Personas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* 1. Hospital Head / Director */}
          <div className="bg-slate-800/90 border-2 border-amber-500/40 hover:border-amber-500 rounded-2xl p-5 shadow-xl transition-all flex flex-col justify-between group hover:-translate-y-1">
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <div className="p-2.5 bg-amber-500/20 text-amber-400 rounded-xl border border-amber-500/30">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono font-bold bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded border border-amber-500/30 uppercase">
                  Director
                </span>
              </div>

              <div>
                <h3 className="font-bold text-base text-white">Hospital Head (Director)</h3>
                <p className="text-xs text-amber-300 font-medium">Dr. Arthur Sterling, MD, FACS</p>
                <span className="text-[11px] text-slate-400 font-mono block mt-1">head.director@stjudemedical.org</span>
              </div>

              <div className="pt-2 border-t border-slate-700/60 text-[11px] text-slate-300 space-y-1">
                <div className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Executive Command & Bed Matrix</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Hospital Financials & Claims</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Staff Rosters & HIPAA Security</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleQuickLogin(PRESET_HOSPITAL_USERS[0])}
              className="mt-5 w-full py-2.5 px-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/10 cursor-pointer"
            >
              <span>Login as Hospital Head</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 2. Specialist Doctor */}
          <div className="bg-slate-800/90 border-2 border-blue-500/40 hover:border-blue-500 rounded-2xl p-5 shadow-xl transition-all flex flex-col justify-between group hover:-translate-y-1">
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <div className="p-2.5 bg-blue-500/20 text-blue-400 rounded-xl border border-blue-500/30">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono font-bold bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded border border-blue-500/30 uppercase">
                  Doctor
                </span>
              </div>

              <div>
                <h3 className="font-bold text-base text-white">Attending Specialist Doctor</h3>
                <p className="text-xs text-blue-300 font-medium">Dr. Maya Lin, MD, FACC</p>
                <span className="text-[11px] text-slate-400 font-mono block mt-1">dr.mayalin@stjudemedical.org</span>
              </div>

              <div className="pt-2 border-t border-slate-700/60 text-[11px] text-slate-300 space-y-1">
                <div className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>Inpatient Rounds & Live Vitals</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>Troponin & Creatinine Lab Charting</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>E-Prescribe Medication Orders</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleQuickLogin(PRESET_HOSPITAL_USERS[1])}
              className="mt-5 w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/10 cursor-pointer"
            >
              <span>Login as Attending Doctor</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 3. Central Appointment Desk */}
          <div className="bg-slate-800/90 border-2 border-teal-500/40 hover:border-teal-500 rounded-2xl p-5 shadow-xl transition-all flex flex-col justify-between group hover:-translate-y-1">
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <div className="p-2.5 bg-teal-500/20 text-teal-400 rounded-xl border border-teal-500/30">
                  <CalendarCheck className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono font-bold bg-teal-500/20 text-teal-300 px-2 py-0.5 rounded border border-teal-500/30 uppercase">
                  Front Desk
                </span>
              </div>

              <div>
                <h3 className="font-bold text-base text-white">Appointment & Front Desk</h3>
                <p className="text-xs text-teal-300 font-medium">Priya Nair (Desk Supervisor)</p>
                <span className="text-[11px] text-slate-400 font-mono block mt-1">reception.desk@stjudemedical.org</span>
              </div>

              <div className="pt-2 border-t border-slate-700/60 text-[11px] text-slate-300 space-y-1">
                <div className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                  <span>Outpatient Bookings & Token Queue</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                  <span>Chamber Check-in & Dispatch</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                  <span>Walk-in Token Booking & Receipts</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleQuickLogin(PRESET_HOSPITAL_USERS[2])}
              className="mt-5 w-full py-2.5 px-4 bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-teal-500/10 cursor-pointer"
            >
              <span>Login as Appointment Desk</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 4. Patient Health Portal */}
          <div className="bg-slate-800/90 border-2 border-purple-500/40 hover:border-purple-500 rounded-2xl p-5 shadow-xl transition-all flex flex-col justify-between group hover:-translate-y-1">
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <div className="p-2.5 bg-purple-500/20 text-purple-400 rounded-xl border border-purple-500/30">
                  <User className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono font-bold bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded border border-purple-500/30 uppercase">
                  Patient
                </span>
              </div>

              <div>
                <h3 className="font-bold text-base text-white">Patient Health Portal</h3>
                <p className="text-xs text-purple-300 font-medium">Robert Chen (PT-90482)</p>
                <span className="text-[11px] text-slate-400 font-mono block mt-1">robert.chen@gmail.com</span>
              </div>

              <div className="pt-2 border-t border-slate-700/60 text-[11px] text-slate-300 space-y-1">
                <div className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                  <span>Book Doctor Appointments</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                  <span>Download Verified Lab Reports</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                  <span>Active Prescriptions & Co-Pay</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleQuickLogin(PRESET_HOSPITAL_USERS[3])}
              className="mt-5 w-full py-2.5 px-4 bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-purple-500/10 cursor-pointer"
            >
              <span>Login as Patient User</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Credentials Form Section */}
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 max-w-xl mx-auto space-y-4">
          <div className="flex justify-between items-center border-b border-slate-700 pb-3">
            <div className="flex items-center gap-2">
              <KeyRound className="w-4 h-4 text-emerald-400" />
              <h3 className="font-bold text-sm text-white">Manual Credential Authentication</h3>
            </div>
            <span className="text-[10px] text-slate-400 font-mono">HIPAA Encrypted (TLS 1.3)</span>
          </div>

          <form onSubmit={handleFormLogin} className="space-y-3 text-xs">
            <div>
              <label className="font-semibold text-slate-300 block mb-1">Select Persona to Populate Credentials</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {PRESET_HOSPITAL_USERS.map(u => (
                  <button
                    key={u.id}
                    type="button"
                    onClick={() => selectUserForForm(u)}
                    className={`p-2 rounded-xl border text-[11px] font-bold transition-all cursor-pointer ${
                      email.toLowerCase() === u.email.toLowerCase()
                        ? 'bg-emerald-600/20 border-emerald-500 text-emerald-300'
                        : 'bg-slate-900/50 border-slate-700 text-slate-400 hover:text-white'
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
              <label className="font-semibold text-slate-300 block mb-1">Email Address</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  required
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-white outline-none focus:border-emerald-500 font-mono"
                />
              </div>
            </div>

            <div>
              <label className="font-semibold text-slate-300 block mb-1">Password / Security PIN</label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  required
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-white outline-none focus:border-emerald-500 font-mono"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-black text-xs rounded-xl transition-all mt-2 cursor-pointer shadow-lg shadow-emerald-600/20"
            >
              Sign In to St. Jude Medical Portal
            </button>
          </form>
        </div>
      </div>

      <footer className="text-center text-slate-500 text-[11px] pt-8">
        St. Jude Medical Center • Enterprise Health Information System (EHR) • HIPAA & SOC-2 Compliant
      </footer>
    </div>
  );
};
