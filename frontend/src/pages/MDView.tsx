import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { MDStats, InpatientAdmitRecord, DischargeRecord, StaffAttendanceRecord, Appointment } from '../types';
import {
  Bed,
  Users,
  DollarSign,
  Activity,
  UserPlus,
  UserMinus,
  HeartPulse,
  TrendingUp,
  ShieldCheck,
  Clock,
  CalendarX2,
  Stethoscope,
  Scissors,
  Droplet,
  Wind
} from 'lucide-react';

export const MDView: React.FC = () => {
  const [stats, setStats] = useState<MDStats | null>(null);
  const [admissions, setAdmissions] = useState<InpatientAdmitRecord[]>([]);
  const [discharges, setDischarges] = useState<DischargeRecord[]>([]);
  const [staffList, setStaffList] = useState<StaffAttendanceRecord[]>([]);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [activeTab, setActiveTab] = useState<'OVERVIEW' | 'STAFF' | 'ADMISSIONS_DISCHARGES' | 'REVENUE'>('OVERVIEW');

  const loadData = () => {
    api.getMDStats().then(setStats);
    api.getAdmissionsToday().then(setAdmissions);
    api.getDischargesToday().then(setDischarges);
    api.getStaffAttendance().then(setStaffList);
    api.getAppointments().then(setAppointments);
  };

  useEffect(() => {
    loadData();
    window.addEventListener('medflow_live_update', loadData);
    return () => window.removeEventListener('medflow_live_update', loadData);
  }, []);

  if (!stats) return null;

  const onDutyStaff = staffList.filter(s => s.status === 'ON_DUTY');
  const onLeaveStaff = staffList.filter(s => s.status === 'ON_LEAVE');

  return (
    <div className="space-y-6 font-sans w-full">
      {/* MD Executive Header */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 w-full">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold text-slate-900">Dr. Arthur Sterling, MD — Hospital Owner & Executive Command</h1>
            <span className="text-[10px] font-bold bg-amber-50 text-amber-900 border border-amber-200 px-2.5 py-0.5 rounded font-mono">
              MD EXECUTIVE OVERSIGHT
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">St. Jude Medical Center • Supervised Admissions, Daily Revenue, Staff Attendance, and Clinical Governance</p>
        </div>

        <div className="flex items-center gap-3 text-xs font-mono">
          <div className="p-2.5 bg-emerald-50 border border-emerald-200 rounded-xl text-right">
            <span className="text-[10px] text-emerald-800 font-semibold block">TODAY'S TOTAL REVENUE</span>
            <span className="text-lg font-black text-emerald-950">${stats.todayRevenueUsd.toLocaleString()} USD</span>
          </div>
        </div>
      </div>

      {/* Navigation Sub-Tabs for MD */}
      <div className="flex flex-wrap gap-2 p-1.5 bg-slate-200/70 rounded-xl text-xs font-semibold w-full">
        <button
          onClick={() => setActiveTab('OVERVIEW')}
          className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${
            activeTab === 'OVERVIEW' ? 'bg-white text-slate-900 font-bold shadow-xs' : 'text-slate-700 hover:text-slate-900'
          }`}
        >
          Executive Overview
        </button>
        <button
          onClick={() => setActiveTab('STAFF')}
          className={`px-4 py-2 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
            activeTab === 'STAFF' ? 'bg-white text-slate-900 font-bold shadow-xs' : 'text-slate-700 hover:text-slate-900'
          }`}
        >
          <span>Staff Attendance & Leaves</span>
          <span className="text-[10px] font-mono bg-amber-100 text-amber-900 px-1.5 py-0.2 rounded font-bold">
            {stats.staffOnLeaveCount} on Leave
          </span>
        </button>
        <button
          onClick={() => setActiveTab('ADMISSIONS_DISCHARGES')}
          className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${
            activeTab === 'ADMISSIONS_DISCHARGES' ? 'bg-white text-slate-900 font-bold shadow-xs' : 'text-slate-700 hover:text-slate-900'
          }`}
        >
          Admissions & Discharges ({admissions.length} Admitted, {discharges.length} Discharged)
        </button>
        <button
          onClick={() => setActiveTab('REVENUE')}
          className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${
            activeTab === 'REVENUE' ? 'bg-white text-slate-900 font-bold shadow-xs' : 'text-slate-700 hover:text-slate-900'
          }`}
        >
          Daily Revenue Breakdown (${stats.todayRevenueUsd.toLocaleString()})
        </button>
      </div>

      {/* 4 Top KPI Cards (Admissions, Revenue, Staff Attendance & Leaves, Bed Occupancy) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-xs w-full">
        {/* 1. Admissions Today */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-1.5">
          <div className="flex justify-between items-center text-slate-500">
            <span className="font-semibold">Admitted Patients Today</span>
            <div className="p-2 bg-blue-50 text-blue-700 rounded-xl">
              <UserPlus className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-black text-blue-900">{stats.admittedTodayCount} Admitted</div>
          <p className="text-[11px] text-blue-700 font-medium">ICU North & Cardiac Wards</p>
        </div>

        {/* 2. Today's Revenue */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-1.5">
          <div className="flex justify-between items-center text-slate-500">
            <span className="font-semibold">Today's Hospital Revenue</span>
            <div className="p-2 bg-emerald-50 text-emerald-700 rounded-xl">
              <DollarSign className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-black text-emerald-950">${stats.todayRevenueUsd.toLocaleString()} USD</div>
          <p className="text-[11px] text-emerald-700 font-medium">Inpatients, OPD, OT & Pharmacy</p>
        </div>

        {/* 3. Staff Attendance vs Leaves */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-1.5">
          <div className="flex justify-between items-center text-slate-500">
            <span className="font-semibold">Staff Attendance Today</span>
            <div className="p-2 bg-purple-50 text-purple-700 rounded-xl">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-black text-purple-950">{stats.staffOnDutyCount} / {stats.totalStaffCount} Present</div>
          <p className="text-[11px] text-amber-800 font-bold">{stats.staffOnLeaveCount} Doctors/Staff on Approved Leave</p>
        </div>

        {/* 4. Bed Occupancy */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-1.5">
          <div className="flex justify-between items-center text-slate-500">
            <span className="font-semibold">Hospital Bed Capacity</span>
            <div className="p-2 bg-amber-50 text-amber-700 rounded-xl">
              <Bed className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-black text-slate-900">{stats.occupiedBeds} / {stats.totalBeds} Beds</div>
          <p className="text-[11px] text-emerald-700 font-bold">56 Beds Available (87.5% Load)</p>
        </div>
      </div>

      {/* TAB 1: OVERVIEW WITH CLINICAL OPERATIONS (ICU, SURGERIES, BLOOD BANK) */}
      {activeTab === 'OVERVIEW' && (
        <div className="space-y-6">
          {/* Clinical Readiness Matrix */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4 w-full">
            <div className="flex justify-between items-center border-b border-slate-100 pb-3">
              <div>
                <h3 className="font-bold text-sm text-slate-900">Hospital Emergency & Critical Operations Status</h3>
                <p className="text-[11px] text-slate-500">Real-time telemetry of Intensive Care Units, Operating Theatres, and Life-Support Reserves</p>
              </div>
              <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-xl">
                100% Operational Readiness
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                <div className="flex items-center gap-1.5 text-rose-800 font-bold">
                  <HeartPulse className="w-4 h-4" />
                  <span>ICU Critical Occupancy</span>
                </div>
                <div className="text-xl font-black text-slate-900">{stats.icuOccupancyPercent}%</div>
                <span className="text-[10px] text-slate-500 font-mono">4 ICU Beds Free</span>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                <div className="flex items-center gap-1.5 text-blue-800 font-bold">
                  <Scissors className="w-4 h-4" />
                  <span>Active Surgeries (OT)</span>
                </div>
                <div className="text-xl font-black text-slate-900">{stats.activeSurgeriesCount} Major OTs</div>
                <span className="text-[10px] text-slate-500 font-mono">Cardiac Bypass & Ortho</span>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                <div className="flex items-center gap-1.5 text-rose-700 font-bold">
                  <Droplet className="w-4 h-4" />
                  <span>Blood Bank (O-ve)</span>
                </div>
                <div className="text-xl font-black text-slate-900">{stats.bloodBankOveUnits} Units Available</div>
                <span className="text-[10px] text-emerald-700 font-bold">Adequate Stock</span>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                <div className="flex items-center gap-1.5 text-teal-800 font-bold">
                  <Wind className="w-4 h-4" />
                  <span>Liquid Medical Oxygen</span>
                </div>
                <div className="text-xl font-black text-slate-900">{stats.oxygenReservesPercent}%</div>
                <span className="text-[10px] text-emerald-700 font-bold">Main Cryogenic Tank</span>
              </div>
            </div>
          </div>

          {/* Quick 2-Column: Admissions vs Discharges Preview */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start w-full">
            <div className="lg:col-span-6 bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-3">
              <div className="flex justify-between items-center border-b border-slate-100 pb-2.5">
                <div className="flex items-center gap-2">
                  <UserPlus className="w-4 h-4 text-blue-700" />
                  <h4 className="font-bold text-sm text-slate-900">Today's Admitted Inpatients ({admissions.length})</h4>
                </div>
                <button onClick={() => setActiveTab('ADMISSIONS_DISCHARGES')} className="text-xs font-bold text-blue-700 hover:underline cursor-pointer">
                  View All →
                </button>
              </div>
              <div className="space-y-2">
                {admissions.slice(0, 3).map(adm => (
                  <div key={adm.id} className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex justify-between items-center text-xs">
                    <div>
                      <span className="font-bold text-slate-900">{adm.patientName} ({adm.age}y)</span>
                      <p className="text-[11px] text-slate-500">{adm.ward} ({adm.bedNumber}) • {adm.diagnosis}</p>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-800 border border-blue-200">
                      {adm.condition}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-3">
              <div className="flex justify-between items-center border-b border-slate-100 pb-2.5">
                <div className="flex items-center gap-2">
                  <UserMinus className="w-4 h-4 text-emerald-700" />
                  <h4 className="font-bold text-sm text-slate-900">Today's Discharged Patients ({discharges.length})</h4>
                </div>
                <button onClick={() => setActiveTab('ADMISSIONS_DISCHARGES')} className="text-xs font-bold text-emerald-700 hover:underline cursor-pointer">
                  View All →
                </button>
              </div>
              <div className="space-y-2">
                {discharges.slice(0, 3).map(dis => (
                  <div key={dis.id} className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex justify-between items-center text-xs">
                    <div>
                      <span className="font-bold text-slate-900">{dis.patientName} ({dis.age}y)</span>
                      <p className="text-[11px] text-slate-500">From {dis.ward} • Cleared by {dis.doctorApproved}</p>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                      Discharged
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: STAFF ATTENDANCE & APPROVED LEAVES (YENTA MANDI VACCHARU, YENTA MANDI LEAVE LO UNNARU) */}
      {activeTab === 'STAFF' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start w-full">
            {/* On-Duty Staff List (Vachina Staff) */}
            <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
              <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-emerald-700" />
                  <h3 className="font-bold text-sm text-slate-900">Staff On-Duty Today ({onDutyStaff.length} Present)</h3>
                </div>
                <span className="text-[10px] font-mono font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-0.5 rounded">
                  Active Shifts
                </span>
              </div>

              <div className="space-y-2.5">
                {onDutyStaff.map(stf => (
                  <div key={stf.id} className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex justify-between items-center text-xs">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900">{stf.name}</span>
                        <span className="text-[10px] font-mono bg-slate-200 text-slate-700 px-1.5 py-0.2 rounded font-semibold">{stf.id}</span>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-0.5">{stf.role} • <strong className="text-slate-700">{stf.department}</strong></p>
                    </div>

                    <div className="text-right font-mono">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 block mb-1">
                        ● ON DUTY
                      </span>
                      <span className="text-[10px] text-slate-400">{stf.shiftTime}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* On-Leave Staff List (Leave Lo Unna Staff) */}
            <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
              <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <CalendarX2 className="w-4 h-4 text-amber-700" />
                  <h3 className="font-bold text-sm text-slate-900">Staff on Approved Leave ({onLeaveStaff.length} Doctors)</h3>
                </div>
                <span className="text-[10px] font-mono font-bold bg-amber-50 text-amber-800 border border-amber-200 px-2.5 py-0.5 rounded">
                  Leave & Coverage
                </span>
              </div>

              <div className="space-y-3">
                {onLeaveStaff.map(stf => (
                  <div key={stf.id} className="p-4 bg-amber-50/50 border border-amber-200 rounded-xl space-y-2 text-xs">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold text-slate-900">{stf.name}</h4>
                        <p className="text-[11px] text-slate-600">{stf.role} ({stf.department})</p>
                      </div>
                      <span className="text-[10px] font-mono font-bold bg-amber-100 text-amber-900 border border-amber-300 px-2 py-0.5 rounded">
                        ON LEAVE
                      </span>
                    </div>

                    <div className="p-2.5 bg-white rounded-lg border border-amber-200 text-[11px] space-y-1">
                      <p className="text-amber-950">
                        <strong>Reason for Leave:</strong> {stf.leaveReason}
                      </p>
                      <p className="text-emerald-900 font-bold pt-1 border-t border-slate-100">
                        ✓ Substitute / On-Call Cover: {stf.substituteCover}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: ADMISSIONS & DISCHARGES LIST */}
      {activeTab === 'ADMISSIONS_DISCHARGES' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start w-full">
          {/* Left: Admitted Today List */}
          <div className="lg:col-span-6 bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-3.5">
            <div className="flex justify-between items-center border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <UserPlus className="w-4 h-4 text-blue-700" />
                <h3 className="font-bold text-sm text-slate-900">Today's Inpatient Admissions ({admissions.length})</h3>
              </div>
              <span className="text-[10px] font-mono font-bold bg-blue-50 text-blue-800 px-2 py-0.5 rounded">
                Bed Inflow
              </span>
            </div>

            <div className="space-y-2.5">
              {admissions.map(adm => (
                <div key={adm.id} className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1 text-xs">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="font-mono font-bold text-[10px] text-slate-500">{adm.patientId} • {adm.ward} ({adm.bedNumber})</span>
                      <h4 className="font-bold text-slate-900 text-sm mt-0.5">{adm.patientName} ({adm.age}y, {adm.gender})</h4>
                      <p className="text-[11px] text-slate-600">{adm.diagnosis}</p>
                    </div>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                      adm.condition.includes('Critical') ? 'bg-rose-50 text-rose-800 border border-rose-200' : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                    }`}>
                      {adm.condition}
                    </span>
                  </div>
                  <div className="pt-1 border-t border-slate-200/50 flex justify-between text-[10px] font-mono text-slate-400">
                    <span>ATTENDING DOCTOR: {adm.attendingDoctor}</span>
                    <span>ADMITTED: {adm.admitTime}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Discharged Today List */}
          <div className="lg:col-span-6 bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-3.5">
            <div className="flex justify-between items-center border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <UserMinus className="w-4 h-4 text-emerald-700" />
                <h3 className="font-bold text-sm text-slate-900">Today's Discharged Patients ({discharges.length})</h3>
              </div>
              <span className="text-[10px] font-mono font-bold bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded">
                Bed Cleared
              </span>
            </div>

            <div className="space-y-2.5">
              {discharges.map(dis => (
                <div key={dis.id} className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1 text-xs">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="font-mono font-bold text-[10px] text-slate-500">{dis.patientId} • From {dis.ward}</span>
                      <h4 className="font-bold text-slate-900 text-sm mt-0.5">{dis.patientName} ({dis.age}y)</h4>
                      <p className="text-[11px] text-slate-600">{dis.summary}</p>
                    </div>
                    <span className="text-[11px] font-mono font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                      Discharged
                    </span>
                  </div>
                  <div className="pt-1 border-t border-slate-200/50 flex justify-between text-[10px] font-mono text-slate-400">
                    <span>CLEARED BY: {dis.doctorApproved}</span>
                    <span>DISCHARGED: {dis.dischargeTime}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: TODAY'S TOTAL REVENUE BREAKDOWN (AA ROJU REVENUE YENTA) */}
      {activeTab === 'REVENUE' && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-6 w-full">
          <div className="flex justify-between items-center border-b border-slate-100 pb-3">
            <div>
              <h3 className="font-bold text-base text-slate-900">Today's Hospital Financials & Revenue Streams</h3>
              <p className="text-xs text-slate-500">Breakdown of hospital collections across Inpatient Wards, Operating Theatres, Outpatient, Pharmacy, and Diagnostics</p>
            </div>
            <span className="text-sm font-mono font-black text-emerald-950 bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 rounded-xl">
              Total Today: ${stats.todayRevenueUsd.toLocaleString()} USD
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 text-xs font-mono">
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
              <span className="text-[11px] text-slate-500 block font-sans font-semibold">1. Inpatient Wards</span>
              <span className="text-xl font-black text-slate-900">${stats.revenueBreakdown.inpatientWardCharges.toLocaleString()}</span>
              <span className="text-[10px] text-slate-400 block font-sans">394 Occupied Beds</span>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
              <span className="text-[11px] text-slate-500 block font-sans font-semibold">2. Surgeries & OTs</span>
              <span className="text-xl font-black text-slate-900">${stats.revenueBreakdown.surgeriesAndOT.toLocaleString()}</span>
              <span className="text-[10px] text-slate-400 block font-sans">4 Major Procedures</span>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
              <span className="text-[11px] text-slate-500 block font-sans font-semibold">3. OPD Consultations</span>
              <span className="text-xl font-black text-slate-900">${stats.revenueBreakdown.opdConsultations.toLocaleString()}</span>
              <span className="text-[10px] text-slate-400 block font-sans">Specialist & General visits</span>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
              <span className="text-[11px] text-slate-500 block font-sans font-semibold">4. Pharmacy Dispensary</span>
              <span className="text-xl font-black text-slate-900">${stats.revenueBreakdown.pharmacyDispensary.toLocaleString()}</span>
              <span className="text-[10px] text-slate-400 block font-sans">Prescription orders</span>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
              <span className="text-[11px] text-slate-500 block font-sans font-semibold">5. Lab & Diagnostics</span>
              <span className="text-xl font-black text-slate-900">${stats.revenueBreakdown.labDiagnostics.toLocaleString()}</span>
              <span className="text-[10px] text-slate-400 block font-sans">ECG, Scans & Blood Tests</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
