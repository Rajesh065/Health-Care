import React from 'react';
import { useAuth } from '../context/AuthContext';
import {
  Building2,
  Stethoscope,
  CalendarCheck,
  User,
  ArrowRight
} from 'lucide-react';

export const LoginPage: React.FC = () => {
  const { switchUser } = useAuth();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col justify-center items-center py-12 px-4 sm:px-8 lg:px-12 font-sans w-full">
      <div className="w-full max-w-6xl space-y-8 text-center">
        <div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">MedFlow Healthcare Portals</h1>
          <p className="text-sm text-slate-600 mt-1 max-w-xl mx-auto">
            St. Jude Medical Center • Select your authorized portal role to continue
          </p>
        </div>

        {/* 4 Clean Persona Login Cards: Manager, Employee/Doctor, Receptionist, Patient */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-left w-full">
          {/* 1. Manager (Hospital Operations & Facilities) */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs hover:border-blue-500 hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-800 flex items-center justify-center border border-blue-200">
                  <Building2 className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono font-bold bg-blue-50 text-blue-900 px-2 py-0.5 rounded border border-blue-200 uppercase">
                  Manager
                </span>
              </div>
              <div>
                <h3 className="font-bold text-base text-slate-900">Hospital Manager</h3>
                <p className="text-xs text-blue-900 font-semibold mt-0.5">Marcus Sterling, MHA</p>
              </div>
              <div className="pt-2.5 border-t border-slate-100 text-xs text-slate-600 space-y-1">
                <p>• Equipment & Biomedical Assets</p>
                <p>• 450 Bed Inventory & 8 Wards</p>
                <p>• Staff Leave Approvals</p>
                <p>• Oxygen & Supply Reserves</p>
              </div>
            </div>
            <button
              onClick={() => switchUser('MANAGER')}
              className="mt-5 w-full py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
            >
              <span>Login as Manager</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 2. Employee (Doctor / Surgeon / Staff) */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs hover:border-purple-500 hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-800 flex items-center justify-center border border-purple-200">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono font-bold bg-purple-50 text-purple-900 px-2 py-0.5 rounded border border-purple-200 uppercase">
                  Employee
                </span>
              </div>
              <div>
                <h3 className="font-bold text-base text-slate-900">Staff / Doctor Portal</h3>
                <p className="text-xs text-purple-900 font-semibold mt-0.5">Dr. Sarah Jenkins, MD</p>
              </div>
              <div className="pt-2.5 border-t border-slate-100 text-xs text-slate-600 space-y-1">
                <p>• Monthly Attendance (Days Present)</p>
                <p>• Surgeries & Operations Log</p>
                <p className="text-purple-800 font-semibold">• Apply for Leave (1-Click Form)</p>
                <p>• Patient Consultation Queue</p>
              </div>
            </div>
            <button
              onClick={() => switchUser('EMPLOYEE')}
              className="mt-5 w-full py-2 bg-purple-700 hover:bg-purple-800 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
            >
              <span>Login as Employee</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 3. Receptionist */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs hover:border-teal-500 hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-800 flex items-center justify-center border border-teal-200">
                  <CalendarCheck className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono font-bold bg-teal-50 text-teal-900 px-2 py-0.5 rounded border border-teal-200 uppercase">
                  Receptionist
                </span>
              </div>
              <div>
                <h3 className="font-bold text-base text-slate-900">Receptionist</h3>
                <p className="text-xs text-teal-900 font-semibold mt-0.5">Priya Nair (Appointments)</p>
              </div>
              <div className="pt-2.5 border-t border-slate-100 text-xs text-slate-600 space-y-1">
                <p>• Accept Patient Tokens</p>
                <p className="text-rose-700 font-semibold">• Reject with Stated Reasons</p>
                <p>• Walk-In Patient Registration</p>
              </div>
            </div>
            <button
              onClick={() => switchUser('RECEPTIONIST')}
              className="mt-5 w-full py-2 bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
            >
              <span>Login as Receptionist</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 4. Patient */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs hover:border-emerald-500 hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center border border-emerald-200">
                  <User className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono font-bold bg-emerald-50 text-emerald-900 px-2 py-0.5 rounded border border-emerald-200 uppercase">
                  Patient
                </span>
              </div>
              <div>
                <h3 className="font-bold text-base text-slate-900">Patient Portal</h3>
                <p className="text-xs text-emerald-900 font-semibold mt-0.5">Robert Chen (PT-90482)</p>
              </div>
              <div className="pt-2.5 border-t border-slate-100 text-xs text-slate-600 space-y-1">
                <p>• Book General OPD & Specialist</p>
                <p>• Waiting / Accepted / Rejected Views</p>
                <p>• Doctor Prescriptions & Advice</p>
              </div>
            </div>
            <button
              onClick={() => switchUser('PATIENT')}
              className="mt-5 w-full py-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
            >
              <span>Login as Patient</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
