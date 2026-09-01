import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { HospitalUser, UserPersona } from '../types';
import {
  Building2,
  Stethoscope,
  CalendarCheck,
  User,
  ArrowRight,
  UserPlus,
  LogIn,
  CheckCircle2,
  ShieldCheck
} from 'lucide-react';

const getInitials = (name: string) => {
  const parts = name.replace(/Dr\.|MD|FAAOS|MHA|PhD|BSN|RN|,/g, '').trim().split(' ').filter(Boolean);
  if (parts.length >= 2) return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return 'U';
};

export const LoginPage: React.FC = () => {
  const { allUsers, switchUserById, registerUser } = useAuth();
  const [authMode, setAuthMode] = useState<'LOGIN' | 'SIGNUP'>('LOGIN');

  // Sign Up Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [persona, setPersona] = useState<UserPersona>('EMPLOYEE');
  const [role, setRole] = useState('Consultant Cardiologist');
  const [department, setDepartment] = useState('Cardiology & Heart Health');
  const [employeeId, setEmployeeId] = useState(`EMP-${Math.floor(1000 + Math.random() * 9000)}`);
  const [shiftTiming, setShiftTiming] = useState('08:30 AM - 05:00 PM (Morning OPD & Ward)');
  const [phone, setPhone] = useState('+1 (555) 300-8800');
  const [password, setPassword] = useState('password123');

  const handlePersonaChange = (newP: UserPersona) => {
    setPersona(newP);
    if (newP === 'EMPLOYEE') {
      setRole('Consultant Surgeon / Doctor');
      setDepartment('Orthopedics / Surgery Wing');
      setEmployeeId(`EMP-${Math.floor(1000 + Math.random() * 9000)}`);
      setShiftTiming('08:00 AM - 04:30 PM (OT Shift)');
    } else if (newP === 'MANAGER') {
      setRole('Hospital Operations Administrator');
      setDepartment('Hospital Operations & Logistics');
      setEmployeeId(`MGR-${Math.floor(100 + Math.random() * 900)}`);
      setShiftTiming('08:00 AM - 06:00 PM (Executive Shift)');
    } else if (newP === 'RECEPTIONIST') {
      setRole('Front Desk & Appointments Desk');
      setDepartment('Central Patient Registration Desk');
      setEmployeeId(`REC-${Math.floor(100 + Math.random() * 900)}`);
      setShiftTiming('07:30 AM - 03:30 PM');
    } else {
      setRole('Registered Patient');
      setDepartment('Patient Self-Service Portal');
      setEmployeeId(`PT-${Math.floor(10000 + Math.random() * 90000)}`);
      setShiftTiming('Online Self-Service');
    }
  };

  const handleSignUpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    const newUser: HospitalUser = {
      id: `u-${Date.now()}`,
      name: name.trim(),
      email: email.trim(),
      persona,
      role: role.trim(),
      department: department.trim(),
      employeeId: employeeId.trim(),
      shiftTiming: shiftTiming.trim(),
      phone: phone.trim(),
      password
    };

    registerUser(newUser);
    alert(`Account created successfully for ${newUser.name}! Logged in as ${newUser.role}.`);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col justify-center items-center py-12 px-4 sm:px-8 lg:px-12 font-sans w-full">
      <div className="w-full max-w-5xl space-y-8 text-center">
        <div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">MedFlow Healthcare Portals</h1>
          <p className="text-sm text-slate-600 mt-1 max-w-xl mx-auto">
            St. Jude Medical Center • Sign in to existing account or register new employee / doctor / staff
          </p>
        </div>

        {/* Tab Switcher between Sign In and Sign Up */}
        <div className="flex justify-center">
          <div className="p-1 bg-slate-200 rounded-2xl flex items-center gap-1 text-xs font-bold">
            <button
              onClick={() => setAuthMode('LOGIN')}
              className={`px-6 py-2.5 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer ${
                authMode === 'LOGIN' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <LogIn className="w-4 h-4 text-blue-700" />
              <span>Sign In (Existing Accounts)</span>
            </button>

            <button
              onClick={() => setAuthMode('SIGNUP')}
              className={`px-6 py-2.5 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer ${
                authMode === 'SIGNUP' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <UserPlus className="w-4 h-4 text-purple-700" />
              <span>Sign Up (New Employee / Doctor)</span>
            </button>
          </div>
        </div>

        {/* 1. SIGN IN MODE */}
        {authMode === 'LOGIN' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-left w-full">
              {allUsers.map(u => {
                const initials = getInitials(u.name);
                return (
                  <div
                    key={u.id}
                    className={`bg-white border rounded-2xl p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between ${
                      u.persona === 'MANAGER' ? 'border-blue-200 hover:border-blue-500' :
                      u.persona === 'EMPLOYEE' ? 'border-purple-200 hover:border-purple-500' :
                      u.persona === 'RECEPTIONIST' ? 'border-teal-200 hover:border-teal-500' :
                      'border-emerald-200 hover:border-emerald-500'
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="flex justify-between items-start">
                        {/* Human Avatar Badge with Initials */}
                        <div className={`w-11 h-11 rounded-2xl flex items-center justify-center font-bold text-sm text-white shadow-xs font-mono ${
                          u.persona === 'MANAGER' ? 'bg-blue-800' :
                          u.persona === 'EMPLOYEE' ? 'bg-purple-800' :
                          u.persona === 'RECEPTIONIST' ? 'bg-teal-800' :
                          'bg-emerald-800'
                        }`}>
                          {initials}
                        </div>

                        <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-lg border uppercase ${
                          u.persona === 'MANAGER' ? 'bg-blue-50 text-blue-900 border-blue-200' :
                          u.persona === 'EMPLOYEE' ? 'bg-purple-50 text-purple-900 border-purple-200' :
                          u.persona === 'RECEPTIONIST' ? 'bg-teal-50 text-teal-900 border-teal-200' :
                          'bg-emerald-50 text-emerald-900 border-emerald-200'
                        }`}>
                          {u.persona}
                        </span>
                      </div>

                      <div>
                        <h3 className="font-bold text-base text-slate-900 leading-tight">{u.name}</h3>
                        <p className="text-xs font-semibold text-slate-600 mt-0.5">{u.role}</p>
                        {u.employeeId && (
                          <span className="text-[10px] font-mono text-slate-400 block mt-0.5">
                            ID: {u.employeeId}
                          </span>
                        )}
                      </div>

                      <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-500 space-y-0.5">
                        <p className="truncate">Email: {u.email}</p>
                        <p className="truncate">Dept: {u.department}</p>
                      </div>
                    </div>

                    <button
                      onClick={() => switchUserById(u.id)}
                      className={`mt-4 w-full py-2.5 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 cursor-pointer shadow-xs transition-all ${
                        u.persona === 'MANAGER' ? 'bg-slate-900 hover:bg-slate-800' :
                        u.persona === 'EMPLOYEE' ? 'bg-purple-700 hover:bg-purple-800' :
                        u.persona === 'RECEPTIONIST' ? 'bg-teal-700 hover:bg-teal-800' :
                        'bg-emerald-700 hover:bg-emerald-800'
                      }`}
                    >
                      <span>Login to Portal</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* 2. SIGN UP MODE */}
        {authMode === 'SIGNUP' && (
          <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-xs max-w-2xl mx-auto text-left space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <div className="flex items-center gap-2">
                <UserPlus className="w-5 h-5 text-purple-700" />
                <h3 className="text-lg font-bold text-slate-900">Create New Staff / Employee / Doctor Account</h3>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Register a new doctor, surgeon, nurse, manager, or receptionist to gain access to their personal portal
              </p>
            </div>

            <form onSubmit={handleSignUpSubmit} className="space-y-4 text-xs">
              {/* Persona Selector with Human-Designed Icons */}
              <div>
                <label className="font-bold text-slate-800 block mb-1.5">Select Account Role *</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 font-semibold">
                  <div
                    onClick={() => handlePersonaChange('EMPLOYEE')}
                    className={`p-3 rounded-xl border text-center cursor-pointer transition-all ${
                      persona === 'EMPLOYEE' ? 'bg-purple-50 border-purple-500 text-purple-950 font-bold shadow-xs' : 'bg-slate-50 border-slate-200 text-slate-700'
                    }`}
                  >
                    <Stethoscope className="w-4 h-4 mx-auto mb-1 text-purple-700" />
                    <span>Doctor / Staff</span>
                  </div>

                  <div
                    onClick={() => handlePersonaChange('MANAGER')}
                    className={`p-3 rounded-xl border text-center cursor-pointer transition-all ${
                      persona === 'MANAGER' ? 'bg-blue-50 border-blue-500 text-blue-950 font-bold shadow-xs' : 'bg-slate-50 border-slate-200 text-slate-700'
                    }`}
                  >
                    <Building2 className="w-4 h-4 mx-auto mb-1 text-blue-700" />
                    <span>Manager</span>
                  </div>

                  <div
                    onClick={() => handlePersonaChange('RECEPTIONIST')}
                    className={`p-3 rounded-xl border text-center cursor-pointer transition-all ${
                      persona === 'RECEPTIONIST' ? 'bg-teal-50 border-teal-500 text-teal-950 font-bold shadow-xs' : 'bg-slate-50 border-slate-200 text-slate-700'
                    }`}
                  >
                    <CalendarCheck className="w-4 h-4 mx-auto mb-1 text-teal-700" />
                    <span>Receptionist</span>
                  </div>

                  <div
                    onClick={() => handlePersonaChange('PATIENT')}
                    className={`p-3 rounded-xl border text-center cursor-pointer transition-all ${
                      persona === 'PATIENT' ? 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold shadow-xs' : 'bg-slate-50 border-slate-200 text-slate-700'
                    }`}
                  >
                    <User className="w-4 h-4 mx-auto mb-1 text-emerald-700" />
                    <span>Patient</span>
                  </div>
                </div>
              </div>

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="font-bold text-slate-800 block mb-1">Full Name (with Title) *</label>
                  <input
                    required
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="e.g. Dr. Arvind Kumar, MD"
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none font-medium"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-800 block mb-1">Official Email Address *</label>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="e.g. arvind.kumar@stjudemedical.org"
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none font-medium"
                  />
                </div>
              </div>

              {/* Designation / Role & Department */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="font-bold text-slate-800 block mb-1">Designation / Role Title *</label>
                  <input
                    required
                    value={role}
                    onChange={e => setRole(e.target.value)}
                    placeholder="e.g. Consultant Cardiologist & Cath Lab Surgeon"
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-800 block mb-1">Hospital Department *</label>
                  <input
                    required
                    value={department}
                    onChange={e => setDepartment(e.target.value)}
                    placeholder="e.g. Cardiology & Heart Health"
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none"
                  />
                </div>
              </div>

              {/* Employee ID & Shift Timing */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="font-bold text-slate-800 block mb-1">Employee ID *</label>
                  <input
                    required
                    value={employeeId}
                    onChange={e => setEmployeeId(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none font-mono"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-800 block mb-1">Assigned Shift Timing *</label>
                  <input
                    required
                    value={shiftTiming}
                    onChange={e => setShiftTiming(e.target.value)}
                    placeholder="e.g. 08:30 AM - 05:00 PM"
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none font-mono"
                  />
                </div>
              </div>

              {/* Phone & Password */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="font-bold text-slate-800 block mb-1">Phone Number *</label>
                  <input
                    required
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none font-mono"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-800 block mb-1">Password *</label>
                  <input
                    required
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none font-mono"
                  />
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3 bg-purple-700 hover:bg-purple-800 text-white font-bold text-sm rounded-xl shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <UserPlus className="w-4 h-4" />
                  <span>Create Account & Login Immediately</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
