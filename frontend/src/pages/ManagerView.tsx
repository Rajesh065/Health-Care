import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import {
  ManagerStats,
  HospitalEquipment,
  WardBedAllocation,
  RoomBedDetail,
  OTLiveOperation,
  AmbulanceVehicle,
  BloodGroupStock,
  EmployeeLeaveRecord,
  SupplyItem
} from '../types';
import {
  Building2,
  Bed,
  Scissors,
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
  Droplet,
  Layers,
  Wrench,
  XCircle,
  X,
  DollarSign,
  Filter,
  PlayCircle,
  Calendar,
  AlertCircle
} from 'lucide-react';

export const ManagerView: React.FC = () => {
  const [stats, setStats] = useState<ManagerStats | null>(null);
  const [roomBeds, setRoomBeds] = useState<RoomBedDetail[]>([]);
  const [wardBeds, setWardBeds] = useState<WardBedAllocation[]>([]);
  const [otOperations, setOtOperations] = useState<OTLiveOperation[]>([]);
  const [ambulances, setAmbulances] = useState<AmbulanceVehicle[]>([]);
  const [bloodStock, setBloodStock] = useState<BloodGroupStock[]>([]);
  const [leaveRecords, setLeaveRecords] = useState<EmployeeLeaveRecord[]>([]);
  const [equipmentList, setEquipmentList] = useState<HospitalEquipment[]>([]);
  const [supplies, setSupplies] = useState<SupplyItem[]>([]);

  // Sub-Tab Navigation
  const [activeTab, setActiveTab] = useState<'OVERVIEW' | 'BEDS' | 'OPERATIONS' | 'AMBULANCES' | 'BLOOD' | 'LEAVES'>('OVERVIEW');

  // Bed Filter States
  const [selectedFloor, setSelectedFloor] = useState<string>('ALL');
  const [bedAvailabilityFilter, setBedAvailabilityFilter] = useState<'ALL' | 'AVAILABLE_ONLY' | 'OCCUPIED_ONLY'>('ALL');

  // Reject Leave Modal State
  const [rejectingLeave, setRejectingLeave] = useState<EmployeeLeaveRecord | null>(null);
  const [rejectReasonNote, setRejectReasonNote] = useState('Critical surgery / emergency trauma duty scheduled on this date.');

  const loadData = () => {
    api.getManagerStats().then(setStats);
    api.getRoomBeds().then(setRoomBeds);
    api.getWardBeds().then(setWardBeds);
    api.getOTOperations().then(setOtOperations);
    api.getAmbulances().then(setAmbulances);
    api.getBloodBankStock().then(setBloodStock);
    api.getEmployeeLeaves().then(setLeaveRecords);
    api.getEquipmentList().then(setEquipmentList);
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

  // Filtered Room Beds
  const filteredBeds = roomBeds.filter(b => {
    const matchesFloor = selectedFloor === 'ALL' || b.floor.includes(selectedFloor);
    const matchesAvail =
      bedAvailabilityFilter === 'ALL' ||
      (bedAvailabilityFilter === 'AVAILABLE_ONLY' && !b.isOccupied) ||
      (bedAvailabilityFilter === 'OCCUPIED_ONLY' && b.isOccupied);
    return matchesFloor && matchesAvail;
  });

  const occupiedCount = roomBeds.filter(b => b.isOccupied).length;
  const availableCount = roomBeds.filter(b => !b.isOccupied).length;

  const runningOps = otOperations.filter(o => o.status === 'RUNNING');
  const upcomingOps = otOperations.filter(o => o.status === 'UPCOMING');
  const completedOps = otOperations.filter(o => o.status === 'COMPLETED');

  const depletedBloods = bloodStock.filter(b => b.status === 'Critical Shortage' || b.status === 'Depleted / Empty');

  return (
    <div className="space-y-6 font-sans w-full">
      {/* Manager Header Overview */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 w-full">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold text-slate-900">Marcus Sterling, MHA — Hospital Operations & Facility Manager</h1>
            <span className="text-[10px] font-bold bg-blue-50 text-blue-900 border border-blue-200 px-2.5 py-0.5 rounded font-mono">
              HOSPITAL COMMAND CENTER
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Real-Time Floor Beds (Filled vs Kaliga), Live OT Surgeries, Ambulance Monthly Running Cost, and Blood Bank Inventory
          </p>
        </div>

        <div className="flex items-center gap-3 text-xs font-mono">
          <div className="p-2.5 bg-rose-50 border border-rose-200 rounded-xl text-right">
            <span className="text-[10px] text-rose-800 font-semibold block">LIVE OT SURGERIES RUNNING</span>
            <span className="text-base font-black text-rose-950 animate-pulse">● {runningOps.length} Active in OT Suites</span>
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
          onClick={() => setActiveTab('BEDS')}
          className={`px-4 py-2 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
            activeTab === 'BEDS' ? 'bg-white text-slate-900 font-bold shadow-xs' : 'text-slate-700 hover:text-slate-900'
          }`}
        >
          <Bed className="w-3.5 h-3.5 text-amber-700" />
          <span>Floor & Room Beds ({availableCount} Kaliga / Free)</span>
        </button>

        <button
          onClick={() => setActiveTab('OPERATIONS')}
          className={`px-4 py-2 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
            activeTab === 'OPERATIONS' ? 'bg-white text-slate-900 font-bold shadow-xs' : 'text-slate-700 hover:text-slate-900'
          }`}
        >
          <Scissors className="w-3.5 h-3.5 text-rose-700" />
          <span>Live Operations (🔴 {runningOps.length} Running | 🟡 {upcomingOps.length} Upcoming)</span>
        </button>

        <button
          onClick={() => setActiveTab('AMBULANCES')}
          className={`px-4 py-2 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
            activeTab === 'AMBULANCES' ? 'bg-white text-slate-900 font-bold shadow-xs' : 'text-slate-700 hover:text-slate-900'
          }`}
        >
          <Ambulance className="w-3.5 h-3.5 text-blue-700" />
          <span>Ambulances ({ambulances.length} Fleet & Monthly Cost)</span>
        </button>

        <button
          onClick={() => setActiveTab('BLOOD')}
          className={`px-4 py-2 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
            activeTab === 'BLOOD' ? 'bg-white text-slate-900 font-bold shadow-xs' : 'text-slate-700 hover:text-slate-900'
          }`}
        >
          <Droplet className="w-3.5 h-3.5 text-rose-700" />
          <span>Blood Bank ({depletedBloods.length} Urgent Depleted)</span>
        </button>

        <button
          onClick={() => setActiveTab('LEAVES')}
          className={`px-4 py-2 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
            activeTab === 'LEAVES' ? 'bg-white text-slate-900 font-bold shadow-xs' : 'text-slate-700 hover:text-slate-900'
          }`}
        >
          <CalendarCheck2 className="w-3.5 h-3.5 text-purple-700" />
          <span>Staff Leaves ({leaveRecords.filter(l => l.approvalStatus === 'Pending Review').length} Pending)</span>
        </button>
      </div>

      {/* Top 4 Real-Time KPI Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-xs w-full">
        {/* 1. Bed Grid Status */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-1.5 cursor-pointer hover:border-amber-400" onClick={() => setActiveTab('BEDS')}>
          <div className="flex justify-between items-center text-slate-500">
            <span className="font-semibold">Room & Bed Availability</span>
            <div className="p-2 bg-amber-50 text-amber-700 rounded-xl">
              <Bed className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-black text-slate-900">{availableCount} Beds Kaliga (Free)</div>
          <p className="text-[11px] text-slate-600 font-medium">{occupiedCount} Filled / Occupied Rooms Across All Floors</p>
        </div>

        {/* 2. Operations Running / Upcoming */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-1.5 cursor-pointer hover:border-rose-400" onClick={() => setActiveTab('OPERATIONS')}>
          <div className="flex justify-between items-center text-slate-500">
            <span className="font-semibold">Live OT Surgeries Tracker</span>
            <div className="p-2 bg-rose-50 text-rose-700 rounded-xl">
              <Scissors className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-black text-rose-950">🔴 {runningOps.length} Running Now</div>
          <p className="text-[11px] text-amber-800 font-semibold">🟡 {upcomingOps.length} Upcoming • 🟢 {completedOps.length} Done Today</p>
        </div>

        {/* 3. Ambulance Fleet & Monthly Cost */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-1.5 cursor-pointer hover:border-blue-400" onClick={() => setActiveTab('AMBULANCES')}>
          <div className="flex justify-between items-center text-slate-500">
            <span className="font-semibold">Ambulances & Monthly Cost</span>
            <div className="p-2 bg-blue-50 text-blue-700 rounded-xl">
              <Ambulance className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-black text-blue-950">${stats.totalAmbulanceMonthlyCostUSD.toLocaleString()} / mo</div>
          <p className="text-[11px] text-blue-700 font-medium">₹{(stats.totalAmbulanceMonthlyCostINR / 100000).toFixed(2)} Lakhs/mo • 5 Vehicles Active</p>
        </div>

        {/* 4. Blood Bank Depleted Alert */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-1.5 cursor-pointer hover:border-rose-400" onClick={() => setActiveTab('BLOOD')}>
          <div className="flex justify-between items-center text-slate-500">
            <span className="font-semibold">Blood Bank & Depletion Alert</span>
            <div className="p-2 bg-rose-50 text-rose-700 rounded-xl">
              <Droplet className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-black text-rose-950">{depletedBloods.length} Groups Depleted</div>
          <p className="text-[11px] text-rose-700 font-bold">O-ve (2 units left) & AB-ve (Empty)</p>
        </div>
      </div>

      {/* TAB 1: OPERATIONS OVERVIEW */}
      {activeTab === 'OVERVIEW' && (
        <div className="space-y-6">
          {/* Quick Shortcuts to 4 Requested Modules */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            {/* 1. Bed Grid Shortcut */}
            <div
              onClick={() => setActiveTab('BEDS')}
              className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs hover:border-amber-400 hover:shadow-md transition-all cursor-pointer space-y-2"
            >
              <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                <Bed className="w-4 h-4 text-amber-700" />
                <span>Floor & Room Beds</span>
              </div>
              <p className="text-slate-500 text-[11px]">
                Detailed floor matrix showing exact room numbers, occupied beds with patient names, and available free beds.
              </p>
              <span className="text-amber-800 font-bold block pt-1 text-[11px]">Open Bed Layout →</span>
            </div>

            {/* 2. Operations Shortcut */}
            <div
              onClick={() => setActiveTab('OPERATIONS')}
              className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs hover:border-rose-400 hover:shadow-md transition-all cursor-pointer space-y-2"
            >
              <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                <Scissors className="w-4 h-4 text-rose-700" />
                <span>Live OT Surgeries</span>
              </div>
              <p className="text-slate-500 text-[11px]">
                Real-time tracking of surgeries running right now in OT suites, upcoming afternoon cases, and completed surgeries.
              </p>
              <span className="text-rose-800 font-bold block pt-1 text-[11px]">View OT Suites Status →</span>
            </div>

            {/* 3. Ambulance Cost Shortcut */}
            <div
              onClick={() => setActiveTab('AMBULANCES')}
              className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs hover:border-blue-400 hover:shadow-md transition-all cursor-pointer space-y-2"
            >
              <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                <Ambulance className="w-4 h-4 text-blue-700" />
                <span>Ambulances & Monthly Cost</span>
              </div>
              <p className="text-slate-500 text-[11px]">
                5 Active ambulance fleet with breakdown of fuel, driver salaries, life support maintenance, and total monthly cost.
              </p>
              <span className="text-blue-800 font-bold block pt-1 text-[11px]">View Cost Breakdown →</span>
            </div>

            {/* 4. Blood Bank Shortcut */}
            <div
              onClick={() => setActiveTab('BLOOD')}
              className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs hover:border-rose-400 hover:shadow-md transition-all cursor-pointer space-y-2"
            >
              <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                <Droplet className="w-4 h-4 text-rose-700" />
                <span>Blood Bank & Urgent Demand</span>
              </div>
              <p className="text-slate-500 text-[11px]">
                Stock levels for all 8 blood groups, depleted groups alert, and next urgent blood units needed for surgeries.
              </p>
              <span className="text-rose-800 font-bold block pt-1 text-[11px]">View Blood Matrix →</span>
            </div>
          </div>

          {/* Quick Previews: Running Surgeries & Pending Staff Leaves */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start w-full">
            {/* Live Surgeries Mini-Board */}
            <div className="lg:col-span-6 bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-3">
              <div className="flex justify-between items-center border-b border-slate-100 pb-2.5">
                <div className="flex items-center gap-2">
                  <Scissors className="w-4 h-4 text-rose-700" />
                  <h4 className="font-bold text-sm text-slate-900">Live Surgeries in OT Suites (Running Now)</h4>
                </div>
                <button onClick={() => setActiveTab('OPERATIONS')} className="text-xs font-bold text-rose-700 hover:underline cursor-pointer">
                  All OT Cases →
                </button>
              </div>

              <div className="space-y-2.5">
                {runningOps.map(op => (
                  <div key={op.id} className="p-4 bg-rose-50/50 border border-rose-200 rounded-xl space-y-1.5 text-xs">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="font-mono font-bold text-[10px] text-rose-800 bg-rose-100 px-2 py-0.5 rounded">
                          {op.otSuite}
                        </span>
                        <h5 className="font-bold text-slate-900 text-sm mt-1">{op.procedureName}</h5>
                      </div>
                      <span className="text-[10px] font-bold px-2.5 py-0.5 rounded bg-rose-600 text-white font-mono animate-pulse">
                        🔴 IN PROGRESS ({op.elapsedMinutes} mins elapsed)
                      </span>
                    </div>
                    <p className="text-slate-600 text-[11px]">
                      Patient: <strong>{op.patientName}</strong> ({op.patientAge}y) • Lead Surgeon: <strong>{op.primarySurgeon}</strong>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Pending Employee Leave Requests */}
            <div className="lg:col-span-6 bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-3">
              <div className="flex justify-between items-center border-b border-slate-100 pb-2.5">
                <div className="flex items-center gap-2">
                  <CalendarCheck2 className="w-4 h-4 text-purple-700" />
                  <h4 className="font-bold text-sm text-slate-900">Employee Leave Requests Pending Decision</h4>
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

      {/* TAB 2: FLOOR & ROOM BEDS LAYOUT (FILLED VS KALIGA / AVAILABLE) */}
      {activeTab === 'BEDS' && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-6 w-full">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-100 pb-4">
            <div>
              <h3 className="font-bold text-base text-slate-900">Hospital Floor & Room Bed Availability Grid</h3>
              <p className="text-xs text-slate-500">
                Detailed room-by-room status: check which rooms and beds are <strong>Filled (Occupied)</strong> vs <strong>Kaliga (Free for instant admission)</strong>
              </p>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs">
              <span className="px-3 py-1 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-xl font-bold">
                🟢 {availableCount} Beds Kaliga (Free)
              </span>
              <span className="px-3 py-1 bg-rose-50 text-rose-800 border border-rose-200 rounded-xl font-bold">
                🔴 {occupiedCount} Beds Filled
              </span>
            </div>
          </div>

          {/* Filter Controls: Floors & Availability */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs">
            {/* Floor Tabs */}
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="font-bold text-slate-600 mr-1">Select Floor:</span>
              {['ALL', 'Ground Floor', 'Floor 1', 'Floor 2', 'Floor 3', 'Floor 4'].map(fl => (
                <button
                  key={fl}
                  onClick={() => setSelectedFloor(fl)}
                  className={`px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
                    selectedFloor === fl ? 'bg-slate-900 text-white font-bold' : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {fl === 'ALL' ? 'All Floors' : fl}
                </button>
              ))}
            </div>

            {/* Availability Filter */}
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-slate-600 mr-1">Status:</span>
              <select
                value={bedAvailabilityFilter}
                onChange={e => setBedAvailabilityFilter(e.target.value as any)}
                className="p-1.5 bg-white border border-slate-200 rounded-lg font-medium outline-none"
              >
                <option value="ALL">Show All Beds (Filled + Kaliga)</option>
                <option value="AVAILABLE_ONLY">🟢 Kaliga / Free Beds Only</option>
                <option value="OCCUPIED_ONLY">🔴 Filled / Occupied Beds Only</option>
              </select>
            </div>
          </div>

          {/* Room-by-Room Beds Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
            {filteredBeds.map(bed => (
              <div
                key={bed.id}
                className={`p-5 rounded-2xl border space-y-3 flex flex-col justify-between transition-all ${
                  bed.isOccupied
                    ? 'bg-slate-50/70 border-slate-300'
                    : 'bg-emerald-50/30 border-emerald-200 shadow-xs hover:border-emerald-500'
                }`}
              >
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="font-mono font-bold text-[10px] text-slate-400 block">{bed.floor} • {bed.wardName}</span>
                      <h4 className="font-black text-slate-900 text-base mt-0.5">{bed.roomNumber} ({bed.bedNumber})</h4>
                    </div>

                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-xl font-mono ${
                      bed.isOccupied
                        ? 'bg-rose-100 text-rose-900 border border-rose-300'
                        : 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                    }`}>
                      {bed.isOccupied ? '🔴 FILLED / OCCUPIED' : '🟢 KALIGA / AVAILABLE'}
                    </span>
                  </div>

                  <div className="p-2.5 bg-white rounded-xl border border-slate-200/80 text-[11px] space-y-1">
                    <span className="text-[10px] font-mono font-bold text-slate-400 block uppercase">Bed Specification</span>
                    <p className="font-bold text-slate-800">{bed.bedType}</p>
                  </div>

                  {/* Patient Details if Occupied */}
                  {bed.isOccupied ? (
                    <div className="p-3 bg-white rounded-xl border border-rose-100 space-y-1 text-[11px] text-slate-700">
                      <div className="flex justify-between items-center font-bold text-slate-900">
                        <span>Patient: {bed.patientName}</span>
                        <span className="font-mono text-[10px] text-slate-500">{bed.patientAge}y, {bed.patientGender}</span>
                      </div>
                      <p className="text-slate-600">Diagnosis: <strong>{bed.diagnosis}</strong></p>
                      <p className="text-slate-500">Attending: {bed.attendingDoctor}</p>
                      <p className="text-[10px] font-mono text-slate-400 pt-1 border-t border-slate-100">Admitted: {bed.admittedDate}</p>
                    </div>
                  ) : (
                    <div className="p-3 bg-emerald-50/70 rounded-xl border border-emerald-200 text-[11px] text-emerald-950 space-y-0.5">
                      <span className="font-bold block">✓ Ready for Immediate Admission</span>
                      <p className="text-emerald-800">Sterilized, sanitized, linen changed, monitor linked.</p>
                    </div>
                  )}
                </div>

                <div className="pt-2 border-t border-slate-200/60 flex justify-between items-center text-[10px] font-mono text-slate-400">
                  <span>BED ID: {bed.id}</span>
                  <span className={bed.isOccupied ? 'text-rose-700 font-bold' : 'text-emerald-700 font-bold'}>
                    {bed.isOccupied ? 'Bed in Clinical Use' : 'Ready to Admit'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: LIVE OPERATIONS (RUNNING NOW, UPCOMING TODAY, COMPLETED) */}
      {activeTab === 'OPERATIONS' && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-6 w-full">
          <div className="flex justify-between items-center border-b border-slate-100 pb-4">
            <div>
              <h3 className="font-bold text-base text-slate-900">Operation Theatre (OT) Suites Command Matrix</h3>
              <p className="text-xs text-slate-500">
                Live monitoring of all surgery theatres: running right now, scheduled upcoming cases, and completed surgeries
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="px-3 py-1 bg-rose-50 text-rose-800 border border-rose-200 rounded-xl font-bold">
                🔴 {runningOps.length} Running
              </span>
              <span className="px-3 py-1 bg-amber-50 text-amber-800 border border-amber-200 rounded-xl font-bold">
                🟡 {upcomingOps.length} Upcoming
              </span>
              <span className="px-3 py-1 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-xl font-bold">
                🟢 {completedOps.length} Completed
              </span>
            </div>
          </div>

          {/* 1. RUNNING NOW (LIVE IN OT) */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-bold text-rose-800">
              <PlayCircle className="w-4 h-4 text-rose-600 animate-pulse" />
              <span>🔴 Surgeries Running Right Now in OT Suites ({runningOps.length})</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              {runningOps.map(op => (
                <div key={op.id} className="p-5 bg-rose-50/40 border-2 border-rose-300 rounded-2xl space-y-3 shadow-xs">
                  <div className="flex justify-between items-start">
                    <span className="font-mono font-bold text-[10px] text-rose-900 bg-rose-100 px-2.5 py-0.5 rounded border border-rose-300">
                      {op.otSuite}
                    </span>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-xl bg-rose-600 text-white font-mono animate-pulse">
                      ● RUNNING ({op.elapsedMinutes}m / {op.durationMinutes}m)
                    </span>
                  </div>

                  <div>
                    <h4 className="font-bold text-base text-slate-900">{op.procedureName}</h4>
                    <p className="text-slate-600 text-[11px] mt-0.5">
                      Patient: <strong>{op.patientName}</strong> ({op.patientAge} years old)
                    </p>
                    <p className="text-rose-950 font-semibold text-[11px]">
                      Lead Surgeon: <strong>{op.primarySurgeon}</strong>
                    </p>
                    <p className="text-slate-500 text-[10px]">Assisting Team: {op.assistingTeam}</p>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-rose-200 text-[11px] text-slate-800">
                    <span className="font-bold block text-rose-900">Live Clinical Progress:</span>
                    <p>{op.clinicalNotes}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2. UPCOMING SCHEDULED TODAY */}
          <div className="space-y-3 pt-4 border-t border-slate-100">
            <div className="flex items-center gap-2 text-sm font-bold text-amber-800">
              <Clock className="w-4 h-4 text-amber-600" />
              <span>🟡 Upcoming Scheduled Surgeries Today ({upcomingOps.length})</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              {upcomingOps.map(op => (
                <div key={op.id} className="p-5 bg-amber-50/30 border border-amber-200 rounded-2xl space-y-3">
                  <div className="flex justify-between items-start">
                    <span className="font-mono font-bold text-[10px] text-amber-900 bg-amber-100 px-2.5 py-0.5 rounded border border-amber-300">
                      {op.otSuite} • {op.scheduledTime}
                    </span>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-xl bg-amber-100 text-amber-900 border border-amber-300 font-mono">
                      🟡 UPCOMING
                    </span>
                  </div>

                  <div>
                    <h4 className="font-bold text-base text-slate-900">{op.procedureName}</h4>
                    <p className="text-slate-600 text-[11px] mt-0.5">
                      Patient: <strong>{op.patientName}</strong> ({op.patientAge} years old)
                    </p>
                    <p className="text-slate-800 font-semibold text-[11px]">
                      Scheduled Surgeon: <strong>{op.primarySurgeon}</strong>
                    </p>
                    <p className="text-slate-500 text-[10px]">Team: {op.assistingTeam}</p>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-amber-200 text-[11px] text-slate-700">
                    <span className="font-bold block text-amber-900">Pre-Op Preparation:</span>
                    <p>{op.clinicalNotes}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3. COMPLETED TODAY */}
          <div className="space-y-3 pt-4 border-t border-slate-100">
            <div className="flex items-center gap-2 text-sm font-bold text-emerald-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>🟢 Completed Surgeries Shifted to Recovery ({completedOps.length})</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              {completedOps.map(op => (
                <div key={op.id} className="p-5 bg-emerald-50/30 border border-emerald-200 rounded-2xl space-y-2.5">
                  <div className="flex justify-between items-start">
                    <span className="font-mono font-bold text-[10px] text-emerald-900 bg-emerald-100 px-2.5 py-0.5 rounded border border-emerald-300">
                      {op.otSuite} • {op.scheduledTime}
                    </span>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-xl bg-emerald-100 text-emerald-900 border border-emerald-300 font-mono">
                      ✓ COMPLETED
                    </span>
                  </div>

                  <div>
                    <h4 className="font-bold text-sm text-slate-900">{op.procedureName}</h4>
                    <p className="text-slate-600 text-[11px]">
                      Patient: <strong>{op.patientName}</strong> ({op.patientAge}y) • Surgeon: {op.primarySurgeon}
                    </p>
                  </div>

                  <div className="p-2.5 bg-white rounded-xl border border-emerald-200 text-[11px] text-slate-700">
                    <p>{op.clinicalNotes}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: AMBULANCE FLEET & MONTHLY COST (YENNI WORK AVUTUNAYE & MONTH COST) */}
      {activeTab === 'AMBULANCES' && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-6 w-full">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-100 pb-4">
            <div>
              <h3 className="font-bold text-base text-slate-900">Hospital Ambulance Fleet & Monthly Operating Cost Breakdown</h3>
              <p className="text-xs text-slate-500">
                Track live ambulance telemetry, fuel expenses, certified EMT drivers, life support maintenance, and total monthly operating costs
              </p>
            </div>

            <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl text-right font-mono">
              <span className="text-[10px] text-blue-800 font-bold block">TOTAL FLEET MONTHLY COST</span>
              <span className="text-lg font-black text-blue-950">
                ${stats.totalAmbulanceMonthlyCostUSD.toLocaleString()} / Month (₹{(stats.totalAmbulanceMonthlyCostINR / 100000).toFixed(2)} Lakhs)
              </span>
            </div>
          </div>

          {/* Monthly Running Cost Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-xs">
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
              <span className="text-slate-500 font-semibold block">Total Active Ambulances</span>
              <div className="text-2xl font-black text-slate-900">{ambulances.length} Emergency Units</div>
              <span className="text-[10px] text-emerald-700 font-bold">3 Standby • 1 In Transit • 1 Workshop</span>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
              <span className="text-slate-500 font-semibold block">Monthly Fuel & Diesel Cost</span>
              <div className="text-2xl font-black text-blue-900">$2,700 / mo</div>
              <span className="text-[10px] text-slate-500 font-mono">₹2.21 Lakhs (24/7 Engine Readiness)</span>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
              <span className="text-slate-500 font-semibold block">EMT Driver & Paramedic Salaries</span>
              <div className="text-2xl font-black text-purple-900">$6,300 / mo</div>
              <span className="text-[10px] text-slate-500 font-mono">₹5.16 Lakhs (10 Shift Staff)</span>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
              <span className="text-slate-500 font-semibold block">Life Support & Vehicle Maintenance</span>
              <div className="text-2xl font-black text-teal-900">$2,500 / mo</div>
              <span className="text-[10px] text-slate-500 font-mono">₹2.05 Lakhs (Defibrillator & O2 Cert)</span>
            </div>
          </div>

          {/* Ambulance Vehicles Detailed Register */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm text-slate-900">Registered Ambulances & Operational Telemetry:</h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              {ambulances.map(amb => (
                <div key={amb.id} className="p-5 bg-slate-50 border border-slate-200 rounded-2xl space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="font-mono font-bold text-[10px] text-slate-400">{amb.id} • {amb.vehicleNumber}</span>
                        <h5 className="font-bold text-base text-slate-900 mt-0.5">{amb.type}</h5>
                      </div>

                      <span className={`text-[10px] font-bold px-2.5 py-1 rounded-xl font-mono ${
                        amb.status === 'Standby' ? 'bg-emerald-100 text-emerald-900 border border-emerald-300' :
                        amb.status === 'In Transit (Emergency)' ? 'bg-rose-100 text-rose-900 border border-rose-300 animate-pulse' :
                        'bg-amber-100 text-amber-900 border border-amber-300'
                      }`}>
                        ● {amb.status}
                      </span>
                    </div>

                    <div className="p-3 bg-white rounded-xl border border-slate-200 text-[11px] space-y-1 text-slate-700">
                      <p>Driver: <strong>{amb.driverName}</strong></p>
                      <p>Paramedic Lead: <strong>{amb.paramedicLead}</strong></p>
                      <p className="text-slate-500 font-mono text-[10px]">Location: {amb.currentLocation}</p>
                    </div>

                    {/* Cost Breakdown */}
                    <div className="p-3 bg-blue-50/50 rounded-xl border border-blue-200 text-[11px] space-y-1">
                      <span className="font-bold text-blue-950 block">Monthly Operating Cost:</span>
                      <div className="flex justify-between text-slate-600">
                        <span>Fuel Expense: ${amb.fuelExpense}</span>
                        <span>Staff Salary: ${amb.staffSalary}</span>
                        <span>Maintenance: ${amb.maintenanceExpense}</span>
                      </div>
                      <div className="flex justify-between font-bold text-blue-900 pt-1 border-t border-blue-200 text-xs font-mono">
                        <span>Total Monthly:</span>
                        <span>${amb.monthlyCostUSD.toLocaleString()} / mo (₹{amb.monthlyCostINR.toLocaleString()})</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 5: BLOOD BANK MATRIX (AVAILABLE, DEPLETED, AND NEXT NEEDED) */}
      {activeTab === 'BLOOD' && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-6 w-full">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-100 pb-4">
            <div>
              <h3 className="font-bold text-base text-slate-900">Blood Bank Inventory & Depletion Demand Matrix</h3>
              <p className="text-xs text-slate-500">
                Monitor available blood units by group, identify depleted / out of stock groups, and calculate urgent demand for surgeries
              </p>
            </div>

            <button
              onClick={() => alert('Emergency Blood Request broadcasted to Red Cross Regional Blood Bank and Volunteer Donor Network!')}
              className="px-4 py-2 bg-rose-700 hover:bg-rose-800 text-white font-bold text-xs rounded-xl shadow-xs transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Droplet className="w-3.5 h-3.5" />
              <span>Broadcast Emergency Blood Drive</span>
            </button>
          </div>

          {/* Blood Groups Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            {bloodStock.map(b => (
              <div
                key={b.group}
                className={`p-5 rounded-2xl border space-y-3 flex flex-col justify-between ${
                  b.status === 'Optimal' ? 'bg-slate-50 border-slate-200' :
                  b.status === 'Adequate' ? 'bg-blue-50/40 border-blue-200' :
                  'bg-rose-50/50 border-2 border-rose-400 shadow-xs'
                }`}
              >
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center font-black text-xl text-rose-700 shadow-xs font-mono">
                      {b.group}
                    </div>

                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-xl font-mono ${
                      b.status === 'Optimal' ? 'bg-emerald-100 text-emerald-900 border border-emerald-300' :
                      b.status === 'Adequate' ? 'bg-blue-100 text-blue-900 border border-blue-300' :
                      'bg-rose-600 text-white animate-pulse'
                    }`}>
                      {b.status}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono text-slate-500 block">AVAILABLE IN STORAGE</span>
                    <div className="text-2xl font-black text-slate-900">{b.unitsAvailable} Units</div>
                    <p className="text-[11px] text-slate-500">Safe Target: {b.safeReserveTarget} Units</p>
                  </div>

                  {/* Urgent Demand & Reason if Depleted */}
                  {b.urgentUnitsNeeded > 0 && (
                    <div className="p-3 bg-white rounded-xl border border-rose-200 text-[11px] space-y-1 text-rose-950 font-medium">
                      <span className="font-bold text-rose-700 block">Next Urgent Demand Needed:</span>
                      <p className="font-black text-sm text-rose-700 font-mono">+{b.urgentUnitsNeeded} Units Required Immediately</p>
                      <p className="text-[10px] leading-relaxed text-slate-700 pt-1 border-t border-rose-100">{b.urgentReason}</p>
                    </div>
                  )}
                </div>

                <div className="pt-2 border-t border-slate-200/60 text-[10px] font-mono text-slate-400 flex justify-between">
                  <span>Group: {b.group}</span>
                  <span className={b.unitsAvailable < 5 ? 'text-rose-700 font-bold' : 'text-emerald-700 font-bold'}>
                    {b.unitsAvailable < 5 ? 'Restock Immediately' : 'Stock Stable'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 6: EMPLOYEE LEAVES MANAGEMENT (ACCEPT OR REJECT) */}
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
