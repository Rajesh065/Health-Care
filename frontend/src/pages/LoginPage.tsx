import React from 'react';
import { useAuth } from '../context/AuthContext';
import {
  Activity,
  Building2,
  CalendarCheck,
  User,
  ArrowRight
} from 'lucide-react';

export const LoginPage: React.FC = () => {
  const { switchUser } = useAuth();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col justify-center items-center py-12 px-4 sm:px-8 lg:px-12 font-sans w-full">
      <div className="w-full max-w-5xl space-y-8 text-center">
        <div>
          <div className="w-12 h-12 rounded-2xl bg-teal-700 text-white flex items-center justify-center font-bold mx-auto mb-3 shadow-md">
            <Activity className="w-6 h-6 text-emerald-300" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">MedFlow Healthcare Portals</h1>
          <p className="text-sm text-slate-600 mt-1 max-w-xl mx-auto">
            St. Jude Medical Center • Select your authorized role to access the portal
          </p>
        </div>

        {/* 3 Clean Persona Login Cards: Manager, Receptionist, Patient */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left w-full">
          {/* 1. Manager (Hospital Operations & Facilities) */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs hover:border-blue-500 hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-800 flex items-center justify-center border border-blue-200">
                  <Building2 className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono font-bold bg-blue-50 text-blue-900 px-2.5 py-0.5 rounded border border-blue-200 uppercase">
                  Manager
                </span>
              </div>
              <div>
                <h3 className="font-bold text-base text-slate-900">Hospital Operations Manager</h3>
                <p className="text-xs text-blue-900 font-semibold mt-0.5">Marcus Sterling, MHA</p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-xs text-slate-600 space-y-1.5">
                <p>• Hospital Equipment & Biomedical Assets</p>
                <p>• 450 Bed Inventory & 8 Ward Allocations</p>
                <p>• Employee Leaves & Shift Duty Rostering</p>
                <p>• Oxygen, Blood Bank & Supply Inventory</p>
              </div>
            </div>
            <button
              onClick={() => switchUser('MANAGER')}
              className="mt-6 w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
            >
              <span>Login as Hospital Manager</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 2. Receptionist */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs hover:border-teal-500 hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <div className="w-11 h-11 rounded-xl bg-teal-50 text-teal-800 flex items-center justify-center border border-teal-200">
                  <CalendarCheck className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono font-bold bg-teal-50 text-teal-900 px-2.5 py-0.5 rounded border border-teal-200 uppercase">
                  Receptionist
                </span>
              </div>
              <div>
                <h3 className="font-bold text-base text-slate-900">Receptionist</h3>
                <p className="text-xs text-teal-900 font-semibold mt-0.5">Priya Nair (Appointments Lead)</p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-xs text-slate-600 space-y-1.5">
                <p>• Accept Patient Tokens</p>
                <p className="text-rose-700 font-semibold">• Reject with Stated Reasons</p>
                <p>• Walk-In Patient Registration</p>
              </div>
            </div>
            <button
              onClick={() => switchUser('RECEPTIONIST')}
              className="mt-6 w-full py-2.5 bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
            >
              <span>Login as Receptionist</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 3. Patient */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs hover:border-purple-500 hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <div className="w-11 h-11 rounded-xl bg-purple-50 text-purple-800 flex items-center justify-center border border-purple-200">
                  <User className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono font-bold bg-purple-50 text-purple-900 px-2.5 py-0.5 rounded border border-purple-200 uppercase">
                  Patient
                </span>
              </div>
              <div>
                <h3 className="font-bold text-base text-slate-900">Patient</h3>
                <p className="text-xs text-purple-900 font-semibold mt-0.5">Robert Chen (PT-90482)</p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-xs text-slate-600 space-y-1.5">
                <p>• Book General OPD & Specialist Doctors</p>
                <p>• View Detailed Appointments Status</p>
                <p>• View Doctor Prescriptions & Medical Notes</p>
              </div>
            </div>
            <button
              onClick={() => switchUser('PATIENT')}
              className="mt-6 w-full py-2.5 bg-purple-700 hover:bg-purple-800 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
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
