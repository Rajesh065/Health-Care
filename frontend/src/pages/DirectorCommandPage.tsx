import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { HospitalExecutiveMetric, InpatientRecord, PatientAppointment } from '../types';
import {
  Activity,
  Bed,
  Users,
  ShieldCheck,
  CreditCard,
  HeartPulse,
  Clock,
  TrendingUp,
  AlertTriangle,
  FileCheck
} from 'lucide-react';

export const DirectorCommandPage: React.FC = () => {
  const [metrics, setMetrics] = useState<HospitalExecutiveMetric | null>(null);
  const [inpatients, setInpatients] = useState<InpatientRecord[]>([]);
  const [appointments, setAppointments] = useState<PatientAppointment[]>([]);

  useEffect(() => {
    api.getExecutiveMetrics().then(setMetrics);
    api.getInpatients().then(setInpatients);
    api.getAppointments().then(setAppointments);
  }, []);

  return (
    <div className="space-y-6 py-2 w-full">
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-col md:flex-row justify-between items-start md:items-center gap-4 w-full">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold text-slate-900">Hospital Executive Command & Operations Hub</h1>
            <span className="text-[10px] font-bold bg-amber-50 text-amber-900 border border-amber-200 px-2 py-0.5 rounded font-mono">
              DIRECTOR OVERSIGHT
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            St. Jude Medical Center • Supervised by <strong>Dr. Arthur Sterling, MD, FACS</strong> (Chief Medical Officer)
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right">
            <span className="text-[10px] text-slate-400 font-mono block">DAILY HOSPITAL REVENUE</span>
            <span className="text-sm font-bold text-slate-900">$184,500 USD</span>
          </div>
          <div className="h-6 w-px bg-slate-200"></div>
          <div className="text-right">
            <span className="text-[10px] text-slate-400 font-mono block">CLAIM APPROVAL</span>
            <span className="text-sm font-bold text-emerald-700">96.4%</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full text-xs">
        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs space-y-1">
          <div className="flex justify-between items-center text-slate-500">
            <span className="font-mono text-[10px] font-bold">TOTAL BED OCCUPANCY</span>
            <Bed className="w-4 h-4 text-slate-700" />
          </div>
          <div className="text-2xl font-black text-slate-900">394 / 450</div>
          <p className="text-[11px] text-emerald-700 font-semibold">87.5% Capacity (56 Beds Available)</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs space-y-1">
          <div className="flex justify-between items-center text-slate-500">
            <span className="font-mono text-[10px] font-bold">ICU & CARDIAC CARE LOAD</span>
            <HeartPulse className="w-4 h-4 text-rose-700" />
          </div>
          <div className="text-2xl font-black text-rose-950">88.5%</div>
          <p className="text-[11px] text-amber-700 font-semibold">High Intensity • 4 Critical Patients</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs space-y-1">
          <div className="flex justify-between items-center text-slate-500">
            <span className="font-mono text-[10px] font-bold">EMERGENCY WAIT TIME</span>
            <Clock className="w-4 h-4 text-teal-700" />
          </div>
          <div className="text-2xl font-black text-slate-900">14 mins</div>
          <p className="text-[11px] text-emerald-700 font-semibold">Fast-Track Level-1 Trauma Active</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs space-y-1">
          <div className="flex justify-between items-center text-slate-500">
            <span className="font-mono text-[10px] font-bold">CLINICAL SHIFT COVERAGE</span>
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
          </div>
          <div className="text-2xl font-black text-emerald-950">99.4%</div>
          <p className="text-[11px] text-slate-500 font-medium">38 Specialist Doctors on Duty</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full items-start">
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
          <div className="flex justify-between items-center border-b border-slate-100 pb-3">
            <div>
              <h3 className="font-bold text-sm text-slate-900">Active Inpatient Ward Capacity & Vitals</h3>
              <p className="text-[11px] text-slate-500">ICU, Step-down Cardiology, and Post-Operative Monitoring</p>
            </div>
            <span className="text-[10px] font-mono font-bold bg-slate-100 px-2 py-0.5 rounded text-slate-700">
              Live Telemetry
            </span>
          </div>

          <div className="space-y-3">
            {inpatients.map(inp => (
              <div key={inp.id} className="p-3.5 bg-slate-50/70 border border-slate-200 rounded-xl space-y-2 text-xs">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="font-mono font-bold text-[10px] text-slate-500">{inp.patientId} • {inp.bedNumber}</span>
                    <h4 className="font-bold text-slate-900 text-sm mt-0.5">{inp.name} ({inp.age}y, {inp.gender})</h4>
                    <p className="text-[11px] text-slate-600 mt-0.5">{inp.primaryDiagnosis}</p>
                  </div>

                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                    inp.status === 'CRITICAL'
                      ? 'bg-rose-100 text-rose-800 border border-rose-200'
                      : 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                  }`}>
                    {inp.status}
                  </span>
                </div>

                <div className="grid grid-cols-4 gap-2 pt-2 border-t border-slate-200/60 font-mono text-[10px]">
                  <div>
                    <span className="text-slate-400 block">HEART RATE</span>
                    <span className="font-bold text-slate-900">{inp.vitals.heartRateBpm} bpm</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">BLOOD PRESS.</span>
                    <span className="font-bold text-slate-900">{inp.vitals.bloodPressure}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">OXYGEN (SpO2)</span>
                    <span className="font-bold text-emerald-800">{inp.vitals.spo2Percent}%</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">TROPONIN</span>
                    <span className="font-bold text-slate-900">{inp.labBiomarkers.troponinNgMl} ng/mL</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
          <div className="border-b border-slate-100 pb-3">
            <h3 className="font-bold text-sm text-slate-900">Clinical Department Leadership</h3>
            <p className="text-[11px] text-slate-500">Superintendent oversight of active surgical leads</p>
          </div>

          <div className="space-y-3 text-xs">
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex justify-between items-center">
              <div>
                <span className="font-bold text-slate-900 block">Dr. Maya Lin, MD, FACC</span>
                <span className="text-[11px] text-slate-500">Chief of Cardiology • 8 Inpatients Active</span>
              </div>
              <span className="text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded">
                ● On Duty
              </span>
            </div>

            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex justify-between items-center">
              <div>
                <span className="font-bold text-slate-900 block">Dr. David Kim, MD, PhD</span>
                <span className="text-[11px] text-slate-500">Chief of Neurology • In OR Surgery 2</span>
              </div>
              <span className="text-[10px] font-bold bg-purple-50 text-purple-700 border border-purple-200 px-2 py-0.5 rounded">
                🏥 In Surgery
              </span>
            </div>

            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex justify-between items-center">
              <div>
                <span className="font-bold text-slate-900 block">Priya Nair</span>
                <span className="text-[11px] text-slate-500">Appointment Desk Lead • {appointments.length} Consultations</span>
              </div>
              <span className="text-[10px] font-bold bg-teal-50 text-teal-700 border border-teal-200 px-2 py-0.5 rounded">
                ● Desk Active
              </span>
            </div>
          </div>

          <div className="p-3.5 bg-amber-50/60 border border-amber-200 rounded-xl text-xs space-y-1 text-amber-950">
            <div className="flex items-center gap-1.5 font-bold">
              <ShieldCheck className="w-4 h-4 text-amber-800" />
              <span>HIPAA Security & Audit Seal Active</span>
            </div>
            <p className="text-[11px] text-amber-900 leading-relaxed">
              All 1,280 patient records, electronic prescriptions, and diagnostic reports are encrypted with AES-256 and audited under SOC-2 Type II standards.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
