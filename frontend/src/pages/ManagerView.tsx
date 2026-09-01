import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import {
  ManagerStats,
  HospitalEquipment,
  WardBedAllocation,
  EmployeeLeaveRecord,
  SupplyItem
} from '../types';
import {
  Building2,
  Bed,
  Cpu,
  Users,
  CalendarCheck2,
  Package,
  Activity,
  CheckCircle2,
  AlertTriangle,
  Clock,
  ShieldCheck,
  Ambulance,
  Wind,
  Zap,
  Droplet,
  Layers,
  Wrench,
  XCircle,
  X
} from 'lucide-react';

export const ManagerView: React.FC = () => {
  const [stats, setStats] = useState<ManagerStats | null>(null);
  const [equipmentList, setEquipmentList] = useState<HospitalEquipment[]>([]);
  const [wardBeds, setWardBeds] = useState<WardBedAllocation[]>([]);
  const [leaveRecords, setLeaveRecords] = useState<EmployeeLeaveRecord[]>([]);
  const [supplies, setSupplies] = useState<SupplyItem[]>([]);
  const [activeTab, setActiveTab] = useState<'OVERVIEW' | 'EQUIPMENT' | 'BEDS' | 'LEAVES' | 'SUPPLIES'>('OVERVIEW');

  // Reject Leave Modal State
  const [rejectingLeave, setRejectingLeave] = useState<EmployeeLeaveRecord | null>(null);
  const [rejectReasonNote, setRejectReasonNote] = useState('Critical surgery / emergency trauma duty scheduled on this date.');

  const loadData = () => {
    api.getManagerStats().then(setStats);
    api.getEquipmentList().then(setEquipmentList);
    api.getWardBeds().then(setWardBeds);
    api.getEmployeeLeaves().then(setLeaveRecords);
    api.getSupplies().then(setSupplies);
  };

  useEffect(() => {
    loadData();
    window.addEventListener('medflow_live_update', loadData);
    return () => window.removeEventListener('medflow_live_update', loadData);
  }, []);

  const handleApproveLeave = async (id: string) => {
    await api.approveLeave(id, 'Approved. Substitute cover verified.');
    alert('Employee leave request accepted and approved.');
    loadData();
  };

  const handleConfirmRejectLeave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!rejectingLeave) return;

    await api.rejectLeave(rejectingLeave.id, rejectReasonNote);
    setRejectingLeave(null);
    alert(`Leave request for ${rejectingLeave.employeeName} rejected with reason.`);
    loadData();
  };

  if (!stats) return null;

  return (
    <div className="space-y-6 font-sans w-full">
      {/* Manager Header Overview */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 w-full">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold text-slate-900">Marcus Sterling, MHA — Hospital Operations & Facility Manager</h1>
            <span className="text-[10px] font-bold bg-blue-50 text-blue-900 border border-blue-200 px-2.5 py-0.5 rounded font-mono">
              HOSPITAL MANAGEMENT CONTROL
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">St. Jude Medical Center • Supervised Medical Equipment, 450 Bed Turnovers, Employee Leave Approvals/Rejections, and Emergency Supply Readiness</p>
        </div>

        <div className="flex items-center gap-3 text-xs font-mono">
          <div className="p-2.5 bg-blue-50 border border-blue-200 rounded-xl text-right">
            <span className="text-[10px] text-blue-800 font-semibold block">AMBULANCE FLEET READY</span>
            <span className="text-base font-black text-blue-950">{stats.activeAmbulancesReady} Rapid Units Standby</span>
          </div>
        </div>
      </div>

      {/* Navigation Sub-Tabs for Manager */}
      <div className="flex flex-wrap gap-2 p-1.5 bg-slate-200/70 rounded-xl text-xs font-semibold w-full">
        <button
          onClick={() => setActiveTab('OVERVIEW')}
          className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${
            activeTab === 'OVERVIEW' ? 'bg-white text-slate-900 font-bold shadow-xs' : 'text-slate-700 hover:text-slate-900'
          }`}
        >
          Operations Overview
        </button>
        <button
          onClick={() => setActiveTab('EQUIPMENT')}
          className={`px-4 py-2 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
            activeTab === 'EQUIPMENT' ? 'bg-white text-slate-900 font-bold shadow-xs' : 'text-slate-700 hover:text-slate-900'
          }`}
        >
          <span>Hospital Equipment & Biomed Assets</span>
          <span className="text-[10px] font-mono bg-blue-100 text-blue-900 px-1.5 py-0.2 rounded font-bold">
            {equipmentList.length} Units
          </span>
        </button>
        <button
          onClick={() => setActiveTab('BEDS')}
          className={`px-4 py-2 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
            activeTab === 'BEDS' ? 'bg-white text-slate-900 font-bold shadow-xs' : 'text-slate-700 hover:text-slate-900'
          }`}
        >
          <span>Bed Inventory & 8 Wards</span>
          <span className="text-[10px] font-mono bg-amber-100 text-amber-900 px-1.5 py-0.2 rounded font-bold">
            {stats.availableBeds} Free Beds
          </span>
        </button>
        <button
          onClick={() => setActiveTab('LEAVES')}
          className={`px-4 py-2 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
            activeTab === 'LEAVES' ? 'bg-white text-slate-900 font-bold shadow-xs' : 'text-slate-700 hover:text-slate-900'
          }`}
        >
          <span>Employee Leave Approvals / Rejections</span>
          <span className="text-[10px] font-mono bg-purple-100 text-purple-900 px-1.5 py-0.2 rounded font-bold">
            {leaveRecords.filter(l => l.approvalStatus === 'Pending Review').length} Pending
          </span>
        </button>
        <button
          onClick={() => setActiveTab('SUPPLIES')}
          className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${
            activeTab === 'SUPPLIES' ? 'bg-white text-slate-900 font-bold shadow-xs' : 'text-slate-700 hover:text-slate-900'
          }`}
        >
          Oxygen, Blood Bank & Supplies
        </button>
      </div>

      {/* Top 4 KPI Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-xs w-full">
        {/* 1. Bed Capacity */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-1.5">
          <div className="flex justify-between items-center text-slate-500">
            <span className="font-semibold">Hospital Bed Inventory</span>
            <div className="p-2 bg-amber-50 text-amber-700 rounded-xl">
              <Bed className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-black text-slate-900">{stats.occupiedBeds} / {stats.totalBeds} Beds</div>
          <p className="text-[11px] text-emerald-700 font-bold">{stats.availableBeds} Beds Ready for Admissions ({stats.bedOccupancyPercent}% Load)</p>
        </div>

        {/* 2. Medical Equipment Status */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-1.5">
          <div className="flex justify-between items-center text-slate-500">
            <span className="font-semibold">Biomedical Equipment</span>
            <div className="p-2 bg-blue-50 text-blue-700 rounded-xl">
              <Cpu className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-black text-blue-950">{stats.operationalEquipmentCount} / {stats.totalEquipmentCount} Operational</div>
          <p className="text-[11px] text-blue-700 font-medium">{stats.equipmentNeedsServiceCount} Units Scheduled for Service / Calibration</p>
        </div>

        {/* 3. Employee Attendance & Leaves */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-1.5">
          <div className="flex justify-between items-center text-slate-500">
            <span className="font-semibold">Staff Attendance Today</span>
            <div className="p-2 bg-purple-50 text-purple-700 rounded-xl">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-black text-purple-950">{stats.employeesOnDutyCount} / {stats.totalEmployeesCount} Present</div>
          <p className="text-[11px] text-purple-800 font-medium">{stats.employeesOnLeaveCount} Staff on Approved Leave</p>
        </div>

        {/* 4. Critical Lifeline (Oxygen & Power) */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-1.5">
          <div className="flex justify-between items-center text-slate-500">
            <span className="font-semibold">Oxygen & Power Reserves</span>
            <div className="p-2 bg-teal-50 text-teal-700 rounded-xl">
              <Zap className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-black text-teal-950">{stats.oxygenLevelPercent}% O2 Level</div>
          <p className="text-[11px] text-teal-800 font-medium">Dual Diesel Backup Generator Online</p>
        </div>
      </div>

      {/* TAB 1: OPERATIONS OVERVIEW */}
      {activeTab === 'OVERVIEW' && (
        <div className="space-y-6">
          {/* Facility Telemetry Bar */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4 w-full">
            <div className="flex justify-between items-center border-b border-slate-100 pb-3">
              <div>
                <h3 className="font-bold text-sm text-slate-900">Hospital Facility & Infrastructure Health</h3>
                <p className="text-[11px] text-slate-500">Real-time status of hospital energy, air filtration, ambulances, and clinical utilities</p>
              </div>
              <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-xl">
                All Infrastructure Stable
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                <div className="flex items-center gap-1.5 text-blue-800 font-bold">
                  <Ambulance className="w-4 h-4" />
                  <span>Ambulance Response</span>
                </div>
                <div className="text-xl font-black text-slate-900">4 Standby / 1 Transit</div>
                <span className="text-[10px] text-emerald-700 font-bold">Average Response: 6 mins</span>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                <div className="flex items-center gap-1.5 text-teal-800 font-bold">
                  <Wind className="w-4 h-4" />
                  <span>OT HEPA Air Filtration</span>
                </div>
                <div className="text-xl font-black text-slate-900">99.97% Purity</div>
                <span className="text-[10px] text-slate-500 font-mono">Positive Pressure Maintained</span>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                <div className="flex items-center gap-1.5 text-rose-700 font-bold">
                  <Droplet className="w-4 h-4" />
                  <span>Blood Bank (O-ve)</span>
                </div>
                <div className="text-xl font-black text-slate-900">28 Units</div>
                <span className="text-[10px] text-emerald-700 font-bold">Safe Emergency Reserve</span>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                <div className="flex items-center gap-1.5 text-amber-800 font-bold">
                  <Zap className="w-4 h-4" />
                  <span>Dual Backup Gensets</span>
                </div>
                <div className="text-xl font-black text-slate-900">100% Ready</div>
                <span className="text-[10px] text-slate-500 font-mono">72 Hours Continuous Fuel</span>
              </div>
            </div>
          </div>

          {/* Quick Previews */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start w-full">
            {/* Equipment Alerts */}
            <div className="lg:col-span-6 bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-3">
              <div className="flex justify-between items-center border-b border-slate-100 pb-2.5">
                <div className="flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-amber-700" />
                  <h4 className="font-bold text-sm text-slate-900">Equipment Calibration & Maintenance Alerts</h4>
                </div>
                <button onClick={() => setActiveTab('EQUIPMENT')} className="text-xs font-bold text-blue-700 hover:underline cursor-pointer">
                  Manage All →
                </button>
              </div>

              <div className="space-y-2">
                {equipmentList.filter(e => e.status !== 'Operational').map(eq => (
                  <div key={eq.id} className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex justify-between items-center text-xs">
                    <div>
                      <span className="font-bold text-slate-900">{eq.name}</span>
                      <p className="text-[11px] text-slate-500">{eq.location} • In-Charge: {eq.technicianInCharge}</p>
                      <span className="text-[10px] text-amber-800 font-semibold">{eq.nextServiceDue}</span>
                    </div>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                      eq.status === 'Maintenance Due' ? 'bg-amber-50 text-amber-800 border border-amber-200' : 'bg-blue-50 text-blue-800 border border-blue-200'
                    }`}>
                      {eq.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pending Employee Leave Requests */}
            <div className="lg:col-span-6 bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-3">
              <div className="flex justify-between items-center border-b border-slate-100 pb-2.5">
                <div className="flex items-center gap-2">
                  <CalendarCheck2 className="w-4 h-4 text-purple-700" />
                  <h4 className="font-bold text-sm text-slate-900">Employee Leave Approvals / Rejections</h4>
                </div>
                <button onClick={() => setActiveTab('LEAVES')} className="text-xs font-bold text-purple-700 hover:underline cursor-pointer">
                  Manage All Leaves →
                </button>
              </div>

              <div className="space-y-2">
                {leaveRecords.slice(0, 3).map(lv => (
                  <div key={lv.id} className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex justify-between items-center text-xs">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900">{lv.employeeName}</span>
                        <span className="text-[10px] font-mono bg-slate-200 text-slate-700 px-1.5 py-0.2 rounded font-semibold">{lv.role}</span>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-0.5">{lv.reason} ({lv.startDate} - {lv.endDate})</p>
                      <p className="text-[10px] text-emerald-800 font-semibold">Cover: {lv.substituteCover}</p>
                    </div>

                    {lv.approvalStatus === 'Pending Review' ? (
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => handleApproveLeave(lv.id)}
                          className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-[11px] px-3 py-1.5 rounded-lg shadow-xs cursor-pointer"
                        >
                          Accept
                        </button>
                        <button
                          onClick={() => setRejectingLeave(lv)}
                          className="bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 font-bold text-[11px] px-2.5 py-1.5 rounded-lg cursor-pointer"
                        >
                          Reject
                        </button>
                      </div>
                    ) : (
                      <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                        lv.approvalStatus === 'Approved' ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-rose-50 text-rose-800 border border-rose-200'
                      }`}>
                        ● {lv.approvalStatus}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: HOSPITAL EQUIPMENT & BIOMEDICAL ASSETS */}
      {activeTab === 'EQUIPMENT' && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4 w-full">
          <div className="flex justify-between items-center border-b border-slate-100 pb-3">
            <div>
              <h3 className="font-bold text-base text-slate-900">Hospital Equipment & Biomedical Machinery Registry</h3>
              <p className="text-xs text-slate-500">Track critical imaging, ventilators, surgical robotics, and dialysis equipment maintenance cycles</p>
            </div>
            <span className="text-xs font-mono font-bold bg-blue-50 text-blue-900 border border-blue-200 px-3 py-1 rounded-xl">
              {equipmentList.length} High-Value Assets
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
            {equipmentList.map(eq => (
              <div key={eq.id} className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3 flex flex-col justify-between">
                <div className="space-y-1.5">
                  <div className="flex justify-between items-start">
                    <span className="font-mono font-bold text-[10px] text-slate-400">{eq.id}</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                      eq.status === 'Operational' ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' :
                      eq.status === 'Maintenance Due' ? 'bg-amber-50 text-amber-800 border border-amber-200' :
                      'bg-blue-50 text-blue-800 border border-blue-200'
                    }`}>
                      ● {eq.status}
                    </span>
                  </div>
                  <h4 className="font-bold text-sm text-slate-900">{eq.name}</h4>
                  <p className="text-[11px] text-slate-500">Model: {eq.model}</p>
                  <p className="text-[11px] text-slate-600">Location: <strong>{eq.location}</strong></p>
                </div>

                <div className="pt-2 border-t border-slate-200/60 text-[11px] text-slate-500 space-y-0.5 font-mono">
                  <div className="flex justify-between">
                    <span>Last Service:</span>
                    <span className="text-slate-700">{eq.lastServiced}</span>
                  </div>
                  <div className="flex justify-between font-semibold">
                    <span>Next Due:</span>
                    <span className={eq.status !== 'Operational' ? 'text-amber-800' : 'text-slate-700'}>{eq.nextServiceDue}</span>
                  </div>
                  <div className="flex justify-between text-[10px] pt-1 text-slate-400">
                    <span>Technician:</span>
                    <span>{eq.technicianInCharge}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: BED INVENTORY & 8 WARD ALLOCATIONS */}
      {activeTab === 'BEDS' && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4 w-full">
          <div className="flex justify-between items-center border-b border-slate-100 pb-3">
            <div>
              <h3 className="font-bold text-base text-slate-900">Hospital Bed Capacity & Ward Allocation Matrix</h3>
              <p className="text-xs text-slate-500">Total 450 Licensed Beds across ICU, Cardiac, Orthopedic, General, Pediatrics, and ER Wards</p>
            </div>
            <div className="text-right text-xs font-mono">
              <span className="text-slate-500 font-normal block">TOTAL OCCUPIED</span>
              <strong className="text-slate-900">{stats.occupiedBeds} / {stats.totalBeds} ({stats.bedOccupancyPercent}%)</strong>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            {wardBeds.map(ward => {
              const occupancy = Math.round((ward.occupiedBeds / ward.totalBeds) * 100);
              return (
                <div key={ward.id} className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <span className="font-mono font-bold text-[10px] text-slate-400">{ward.id} • {ward.floor}</span>
                    <h4 className="font-bold text-slate-900 text-sm">{ward.wardName}</h4>
                    <p className="text-[11px] text-slate-500">Lead Nurse: <strong>{ward.headNurse}</strong></p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-500 font-medium">Beds Occupied:</span>
                      <span className="font-bold text-slate-900">{ward.occupiedBeds} / {ward.totalBeds}</span>
                    </div>

                    <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full rounded-full ${
                          occupancy > 90 ? 'bg-rose-600' : occupancy > 75 ? 'bg-amber-500' : 'bg-emerald-600'
                        }`}
                        style={{ width: `${occupancy}%` }}
                      ></div>
                    </div>

                    <div className="flex justify-between items-center pt-2 border-t border-slate-200/60 text-[10px] font-mono">
                      <span className="text-emerald-700 font-bold">{ward.availableBeds} Beds Free</span>
                      <span className="text-slate-500">{ward.ventilatorCount} Ventilators</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 4: EMPLOYEE LEAVES MANAGEMENT (ACCEPT OR REJECT) */}
      {activeTab === 'LEAVES' && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4 w-full">
          <div className="flex justify-between items-center border-b border-slate-100 pb-3">
            <div>
              <h3 className="font-bold text-base text-slate-900">Hospital Staff Leave Management & Approvals/Rejections</h3>
              <p className="text-xs text-slate-500">Accept or reject leave applications submitted by doctors, surgeons, nurses, and biomedical staff</p>
            </div>
            <span className="text-xs font-mono font-bold bg-purple-50 text-purple-900 border border-purple-200 px-3 py-1 rounded-xl">
              142 Total Employees
            </span>
          </div>

          <div className="space-y-3">
            {leaveRecords.map(lv => (
              <div key={lv.id} className="p-5 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-slate-900">{lv.employeeName}</span>
                    <span className="text-[10px] font-mono bg-slate-200 text-slate-800 px-2 py-0.5 rounded font-semibold">{lv.role}</span>
                    <span className="text-[10px] font-mono bg-blue-100 text-blue-900 px-2 py-0.5 rounded font-semibold">{lv.department}</span>
                  </div>
                  <p className="text-[11px] text-slate-600">
                    <strong>Leave Type:</strong> {lv.leaveType} Leave • <strong>Duration:</strong> {lv.startDate} to {lv.endDate} (Applied: {lv.appliedDate})
                  </p>
                  <p className="text-[11px] text-slate-500">
                    <strong>Reason:</strong> {lv.reason}
                  </p>
                  <p className="text-[11px] text-emerald-800 font-bold">
                    ✓ Verified Substitute Cover: {lv.substituteCover}
                  </p>
                  {lv.managerNote && (
                    <p className="text-[11px] text-slate-700 italic">
                      Manager Decision Note: {lv.managerNote}
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-2.5">
                  {lv.approvalStatus === 'Pending Review' ? (
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleApproveLeave(lv.id)}
                        className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs px-4 py-2 rounded-xl shadow-xs transition-all flex items-center gap-1 cursor-pointer"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Accept Leave</span>
                      </button>

                      <button
                        onClick={() => setRejectingLeave(lv)}
                        className="bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 font-bold text-xs px-3.5 py-2 rounded-xl transition-all flex items-center gap-1 cursor-pointer"
                      >
                        <XCircle className="w-3.5 h-3.5" />
                        <span>Reject Leave</span>
                      </button>
                    </div>
                  ) : (
                    <span className={`text-[11px] font-mono font-bold px-3 py-1.5 rounded-xl ${
                      lv.approvalStatus === 'Approved' ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-rose-50 text-rose-800 border border-rose-200'
                    }`}>
                      ● {lv.approvalStatus === 'Approved' ? '✓ Accepted by Manager' : '✗ Rejected by Manager'}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 5: SUPPLIES, OXYGEN & BLOOD BANK */}
      {activeTab === 'SUPPLIES' && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4 w-full">
          <div className="flex justify-between items-center border-b border-slate-100 pb-3">
            <div>
              <h3 className="font-bold text-base text-slate-900">Hospital Critical Supplies, Oxygen & Pharmacy Inventory</h3>
              <p className="text-xs text-slate-500">Monitor stock levels of cryogenic oxygen, blood units, IV fluids, and ICU emergency medication</p>
            </div>
            <span className="text-xs font-mono font-bold bg-teal-50 text-teal-900 border border-teal-200 px-3 py-1 rounded-xl">
              100% Emergency Stock Readiness
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
            {supplies.map(sup => (
              <div key={sup.id} className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3 flex flex-col justify-between">
                <div className="space-y-1">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-mono text-slate-400">{sup.category}</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                      sup.status === 'Optimal' ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' :
                      sup.status === 'Adequate' ? 'bg-blue-50 text-blue-800 border border-blue-200' :
                      'bg-amber-50 text-amber-800 border border-amber-200'
                    }`}>
                      {sup.status}
                    </span>
                  </div>
                  <h4 className="font-bold text-sm text-slate-900">{sup.itemName}</h4>
                  <p className="text-xs font-bold text-slate-800 font-mono mt-1">{sup.currentStock}</p>
                </div>

                <div className="pt-2 border-t border-slate-200/60 text-[10px] font-mono text-slate-500 flex justify-between">
                  <span>Reorder Threshold:</span>
                  <span className="font-bold text-slate-700">{sup.reorderLevel}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Reject Leave Reason Modal */}
      {rejectingLeave && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 space-y-4 shadow-2xl border border-slate-200 text-xs">
            <div className="flex justify-between items-center border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2 text-rose-700 font-bold text-sm">
                <AlertTriangle className="w-4 h-4" />
                <span>State Reason for Rejecting Staff Leave Request</span>
              </div>
              <button onClick={() => setRejectingLeave(null)} className="p-1 text-slate-400 hover:text-slate-600 rounded">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
              <span className="font-mono font-bold text-[10px] text-slate-500">{rejectingLeave.id}</span>
              <h4 className="font-bold text-slate-900">{rejectingLeave.employeeName} ({rejectingLeave.role})</h4>
              <p className="text-slate-600">Leave Requested: {rejectingLeave.startDate} to {rejectingLeave.endDate}</p>
              <p className="text-slate-500">Employee Reason: {rejectingLeave.reason}</p>
            </div>

            <form onSubmit={handleConfirmRejectLeave} className="space-y-3">
              <div>
                <label className="font-bold text-slate-800 block mb-1">Reason for Rejection (Visible to Employee) *</label>
                <textarea
                  required
                  rows={3}
                  value={rejectReasonNote}
                  onChange={e => setRejectReasonNote(e.target.value)}
                  placeholder="e.g. Critical surgery scheduled on this date, emergency on-call team shortage..."
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none resize-none text-slate-900 font-medium"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setRejectingLeave(null)}
                  className="px-4 py-2 rounded-xl text-slate-600 hover:bg-slate-100 font-semibold cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-rose-700 hover:bg-rose-800 text-white font-bold rounded-xl shadow-xs cursor-pointer"
                >
                  Confirm Rejection & Send to Employee
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
