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
  X,
  AlertTriangle,
  PlayCircle
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
    <div className="space-y-6 font-sans w-full max-w-7xl mx-auto">
      {/* Manager Header Overview */}
      <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 w-full">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold text-slate-900 tracking-tight">Hospital Operations Command</h1>
            <span className="text-[11px] font-bold bg-slate-100 text-slate-800 border border-slate-200 px-2.5 py-0.5 rounded-md font-mono">
              MANAGER: MARCUS STERLING, MHA
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Real-time facility telemetry, floor & room bed occupancy, active OT suites, ambulance logistics, and blood bank reserves
          </p>
        </div>

        <div className="flex items-center gap-3 text-xs font-mono">
          <div className="px-3 py-2 bg-rose-50 border border-rose-200 rounded-xl text-right">
            <span className="text-[10px] text-rose-800 font-bold block uppercase tracking-wider">Live Surgeries Active</span>
            <span className="text-sm font-black text-rose-950">{runningOps.length} OT Suites in Progress</span>
          </div>
        </div>
      </div>

      {/* Human Navigation Tab Bar (Clean Typography-First, No Icon Clutter) */}
      <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-200/60 rounded-xl text-xs font-semibold w-full">
        <button
          onClick={() => setActiveTab('OVERVIEW')}
          className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${
            activeTab === 'OVERVIEW' ? 'bg-white text-slate-900 font-bold shadow-xs' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Operations Overview
        </button>

        <button
          onClick={() => setActiveTab('BEDS')}
          className={`px-4 py-2 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
            activeTab === 'BEDS' ? 'bg-white text-slate-900 font-bold shadow-xs' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <span>Floor & Room Beds</span>
          <span className="text-[10px] font-mono font-bold bg-emerald-100 text-emerald-900 px-1.5 py-0.2 rounded">
            {availableCount} Free
          </span>
        </button>

        <button
          onClick={() => setActiveTab('OPERATIONS')}
          className={`px-4 py-2 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
            activeTab === 'OPERATIONS' ? 'bg-white text-slate-900 font-bold shadow-xs' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <span>Live Operations</span>
          <span className="text-[10px] font-mono font-bold bg-rose-100 text-rose-900 px-1.5 py-0.2 rounded">
            {runningOps.length} Running
          </span>
        </button>

        <button
          onClick={() => setActiveTab('AMBULANCES')}
          className={`px-4 py-2 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
            activeTab === 'AMBULANCES' ? 'bg-white text-slate-900 font-bold shadow-xs' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <span>Ambulances & Fleet</span>
          <span className="text-[10px] font-mono font-bold bg-blue-100 text-blue-900 px-1.5 py-0.2 rounded">
            {ambulances.length} Units
          </span>
        </button>

        <button
          onClick={() => setActiveTab('BLOOD')}
          className={`px-4 py-2 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
            activeTab === 'BLOOD' ? 'bg-white text-slate-900 font-bold shadow-xs' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <span>Blood Bank</span>
          <span className="text-[10px] font-mono font-bold bg-rose-100 text-rose-900 px-1.5 py-0.2 rounded">
            {depletedBloods.length} Depleted
          </span>
        </button>

        <button
          onClick={() => setActiveTab('LEAVES')}
          className={`px-4 py-2 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
            activeTab === 'LEAVES' ? 'bg-white text-slate-900 font-bold shadow-xs' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <span>Staff Leaves</span>
          <span className="text-[10px] font-mono font-bold bg-purple-100 text-purple-900 px-1.5 py-0.2 rounded">
            {leaveRecords.filter(l => l.approvalStatus === 'Pending Review').length} Pending
          </span>
        </button>
      </div>

      {/* Top 4 Handcrafted Metric Cards (Clean, Professional Human Design) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-xs w-full">
        {/* 1. Bed Grid Status */}
        <div
          className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-1.5 cursor-pointer hover:border-slate-400 transition-all"
          onClick={() => setActiveTab('BEDS')}
        >
          <div className="flex justify-between items-center text-slate-500 font-semibold">
            <span>Room & Bed Availability</span>
            <span className="text-[10px] font-mono bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded font-bold">
              OPEN
            </span>
          </div>
          <div className="text-2xl font-black text-slate-900">{availableCount} Beds Free</div>
          <p className="text-[11px] text-slate-500">{occupiedCount} Filled across 8 hospital wards</p>
        </div>

        {/* 2. Operations Running / Upcoming */}
        <div
          className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-1.5 cursor-pointer hover:border-slate-400 transition-all"
          onClick={() => setActiveTab('OPERATIONS')}
        >
          <div className="flex justify-between items-center text-slate-500 font-semibold">
            <span>Live OT Surgeries</span>
            <span className="text-[10px] font-mono bg-rose-50 text-rose-800 border border-rose-200 px-2 py-0.5 rounded font-bold">
              IN OT
            </span>
          </div>
          <div className="text-2xl font-black text-rose-950">{runningOps.length} Running Now</div>
          <p className="text-[11px] text-slate-500">{upcomingOps.length} upcoming today • {completedOps.length} completed</p>
        </div>

        {/* 3. Ambulance Fleet & Monthly Cost */}
        <div
          className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-1.5 cursor-pointer hover:border-slate-400 transition-all"
          onClick={() => setActiveTab('AMBULANCES')}
        >
          <div className="flex justify-between items-center text-slate-500 font-semibold">
            <span>Ambulance Monthly Cost</span>
            <span className="text-[10px] font-mono bg-blue-50 text-blue-800 border border-blue-200 px-2 py-0.5 rounded font-bold">
              FLEET
            </span>
          </div>
          <div className="text-2xl font-black text-slate-900">${stats.totalAmbulanceMonthlyCostUSD.toLocaleString()} / mo</div>
          <p className="text-[11px] text-slate-500">₹{(stats.totalAmbulanceMonthlyCostINR / 100000).toFixed(2)} Lakhs/mo • 5 active vehicles</p>
        </div>

        {/* 4. Blood Bank Depleted Alert */}
        <div
          className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-1.5 cursor-pointer hover:border-slate-400 transition-all"
          onClick={() => setActiveTab('BLOOD')}
        >
          <div className="flex justify-between items-center text-slate-500 font-semibold">
            <span>Blood Bank Reserves</span>
            <span className="text-[10px] font-mono bg-rose-50 text-rose-800 border border-rose-200 px-2 py-0.5 rounded font-bold">
              URGENT
            </span>
          </div>
          <div className="text-2xl font-black text-rose-950">{depletedBloods.length} Groups Depleted</div>
          <p className="text-[11px] text-slate-500">O-ve (2 units left) & AB-ve (empty)</p>
        </div>
      </div>

      {/* TAB 1: OPERATIONS OVERVIEW */}
      {activeTab === 'OVERVIEW' && (
        <div className="space-y-6">
          {/* 4 Clean Navigation Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            {/* 1. Bed Grid Shortcut */}
            <div
              onClick={() => setActiveTab('BEDS')}
              className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs hover:border-slate-400 hover:shadow-sm transition-all cursor-pointer space-y-2"
            >
              <span className="font-bold text-slate-900 text-sm block">Floor & Room Beds</span>
              <p className="text-slate-500 text-[11px] leading-relaxed">
                Detailed floor matrix showing exact room numbers, occupied beds with patient names, and available free beds.
              </p>
              <span className="text-slate-900 font-bold block pt-1 text-[11px]">Open Bed Layout →</span>
            </div>

            {/* 2. Operations Shortcut */}
            <div
              onClick={() => setActiveTab('OPERATIONS')}
              className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs hover:border-slate-400 hover:shadow-sm transition-all cursor-pointer space-y-2"
            >
              <span className="font-bold text-slate-900 text-sm block">Live OT Surgeries</span>
              <p className="text-slate-500 text-[11px] leading-relaxed">
                Real-time tracking of surgeries running right now in OT suites, upcoming afternoon cases, and completed surgeries.
              </p>
              <span className="text-slate-900 font-bold block pt-1 text-[11px]">View OT Suites Status →</span>
            </div>

            {/* 3. Ambulance Cost Shortcut */}
            <div
              onClick={() => setActiveTab('AMBULANCES')}
              className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs hover:border-slate-400 hover:shadow-sm transition-all cursor-pointer space-y-2"
            >
              <span className="font-bold text-slate-900 text-sm block">Ambulances & Monthly Cost</span>
              <p className="text-slate-500 text-[11px] leading-relaxed">
                5 Active ambulance fleet with breakdown of fuel, driver salaries, life support maintenance, and total monthly cost.
              </p>
              <span className="text-slate-900 font-bold block pt-1 text-[11px]">View Cost Breakdown →</span>
            </div>

            {/* 4. Blood Bank Shortcut */}
            <div
              onClick={() => setActiveTab('BLOOD')}
              className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs hover:border-slate-400 hover:shadow-sm transition-all cursor-pointer space-y-2"
            >
              <span className="font-bold text-slate-900 text-sm block">Blood Bank & Urgent Demand</span>
              <p className="text-slate-500 text-[11px] leading-relaxed">
                Stock levels for all 8 blood groups, depleted groups alert, and next urgent blood units needed for surgeries.
              </p>
              <span className="text-slate-900 font-bold block pt-1 text-[11px]">View Blood Matrix →</span>
            </div>
          </div>

          {/* Quick Previews: Running Surgeries & Pending Staff Leaves */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start w-full">
            {/* Live Surgeries Mini-Board */}
            <div className="lg:col-span-6 bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-3">
              <div className="flex justify-between items-center border-b border-slate-100 pb-2.5">
                <h4 className="font-bold text-sm text-slate-900">Live Surgeries in OT Suites (Running Now)</h4>
                <button onClick={() => setActiveTab('OPERATIONS')} className="text-xs font-bold text-slate-700 hover:underline cursor-pointer">
                  All OT Cases →
                </button>
              </div>

              <div className="space-y-2.5">
                {runningOps.map(op => (
                  <div key={op.id} className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5 text-xs">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="font-mono font-bold text-[10px] text-slate-600 bg-slate-200 px-2 py-0.5 rounded">
                          {op.otSuite}
                        </span>
                        <h5 className="font-bold text-slate-900 text-sm mt-1">{op.procedureName}</h5>
                      </div>
                      <span className="text-[10px] font-bold px-2.5 py-0.5 rounded bg-rose-700 text-white font-mono">
                        IN PROGRESS ({op.elapsedMinutes}m elapsed)
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
                <h4 className="font-bold text-sm text-slate-900">Employee Leave Requests Pending Decision</h4>
                <button onClick={() => setActiveTab('LEAVES')} className="text-xs font-bold text-slate-700 hover:underline cursor-pointer">
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

      {/* TAB 2: FLOOR & ROOM BEDS LAYOUT */}
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
                {availableCount} Beds Kaliga (Free)
              </span>
              <span className="px-3 py-1 bg-rose-50 text-rose-800 border border-rose-200 rounded-xl font-bold">
                {occupiedCount} Beds Filled
              </span>
            </div>
          </div>

          {/* Filter Controls: Floors & Availability */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs">
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

            <div className="flex items-center gap-1.5">
              <span className="font-bold text-slate-600 mr-1">Status:</span>
              <select
                value={bedAvailabilityFilter}
                onChange={e => setBedAvailabilityFilter(e.target.value as any)}
                className="p-1.5 bg-white border border-slate-200 rounded-lg font-medium outline-none"
              >
                <option value="ALL">Show All Beds (Filled + Kaliga)</option>
                <option value="AVAILABLE_ONLY">Kaliga / Free Beds Only</option>
                <option value="OCCUPIED_ONLY">Filled / Occupied Beds Only</option>
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
                    : 'bg-emerald-50/20 border-emerald-200 shadow-xs'
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
                      {bed.isOccupied ? 'FILLED / OCCUPIED' : 'KALIGA / AVAILABLE'}
                    </span>
                  </div>

                  <div className="p-2.5 bg-white rounded-xl border border-slate-200/80 text-[11px] space-y-1">
                    <span className="text-[10px] font-mono font-bold text-slate-400 block uppercase">Bed Type</span>
                    <p className="font-bold text-slate-800">{bed.bedType}</p>
                  </div>

                  {/* Patient Details if Occupied */}
                  {bed.isOccupied ? (
                    <div className="p-3 bg-white rounded-xl border border-slate-200 space-y-1 text-[11px] text-slate-700">
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
                      <span className="font-bold block">Ready for Immediate Admission</span>
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

      {/* TAB 3: LIVE OPERATIONS */}
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
                {runningOps.length} Running
              </span>
              <span className="px-3 py-1 bg-amber-50 text-amber-800 border border-amber-200 rounded-xl font-bold">
                {upcomingOps.length} Upcoming
              </span>
              <span className="px-3 py-1 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-xl font-bold">
                {completedOps.length} Completed
              </span>
            </div>
          </div>

          {/* 1. RUNNING NOW */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm text-slate-900">Surgeries Running Right Now in OT Suites ({runningOps.length})</h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              {runningOps.map(op => (
                <div key={op.id} className="p-5 bg-slate-50 border border-slate-200 rounded-2xl space-y-3 shadow-xs">
                  <div className="flex justify-between items-start">
                    <span className="font-mono font-bold text-[10px] text-slate-800 bg-slate-200 px-2.5 py-0.5 rounded">
                      {op.otSuite}
                    </span>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-xl bg-rose-700 text-white font-mono">
                      RUNNING ({op.elapsedMinutes}m / {op.durationMinutes}m)
                    </span>
                  </div>

                  <div>
                    <h4 className="font-bold text-base text-slate-900">{op.procedureName}</h4>
                    <p className="text-slate-600 text-[11px] mt-0.5">
                      Patient: <strong>{op.patientName}</strong> ({op.patientAge} years old)
                    </p>
                    <p className="text-slate-800 font-semibold text-[11px]">
                      Lead Surgeon: <strong>{op.primarySurgeon}</strong>
                    </p>
                    <p className="text-slate-500 text-[10px]">Assisting Team: {op.assistingTeam}</p>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-slate-200 text-[11px] text-slate-800">
                    <span className="font-bold block text-slate-900">Live Clinical Progress:</span>
                    <p>{op.clinicalNotes}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2. UPCOMING TODAY */}
          <div className="space-y-3 pt-4 border-t border-slate-100">
            <h4 className="font-bold text-sm text-slate-900">Upcoming Scheduled Surgeries Today ({upcomingOps.length})</h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              {upcomingOps.map(op => (
                <div key={op.id} className="p-5 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
                  <div className="flex justify-between items-start">
                    <span className="font-mono font-bold text-[10px] text-slate-800 bg-slate-200 px-2.5 py-0.5 rounded">
                      {op.otSuite} • {op.scheduledTime}
                    </span>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-xl bg-amber-100 text-amber-900 border border-amber-300 font-mono">
                      UPCOMING
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

                  <div className="p-3 bg-white rounded-xl border border-slate-200 text-[11px] text-slate-700">
                    <span className="font-bold block text-slate-900">Pre-Op Preparation:</span>
                    <p>{op.clinicalNotes}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3. COMPLETED TODAY */}
          <div className="space-y-3 pt-4 border-t border-slate-100">
            <h4 className="font-bold text-sm text-slate-900">Completed Surgeries Shifted to Recovery ({completedOps.length})</h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              {completedOps.map(op => (
                <div key={op.id} className="p-5 bg-slate-50 border border-slate-200 rounded-2xl space-y-2.5">
                  <div className="flex justify-between items-start">
                    <span className="font-mono font-bold text-[10px] text-slate-800 bg-slate-200 px-2.5 py-0.5 rounded">
                      {op.otSuite} • {op.scheduledTime}
                    </span>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-xl bg-emerald-100 text-emerald-900 border border-emerald-300 font-mono">
                      COMPLETED
                    </span>
                  </div>

                  <div>
                    <h4 className="font-bold text-sm text-slate-900">{op.procedureName}</h4>
                    <p className="text-slate-600 text-[11px]">
                      Patient: <strong>{op.patientName}</strong> ({op.patientAge}y) • Surgeon: {op.primarySurgeon}
                    </p>
                  </div>

                  <div className="p-2.5 bg-white rounded-xl border border-slate-200 text-[11px] text-slate-700">
                    <p>{op.clinicalNotes}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: AMBULANCE FLEET & MONTHLY COST */}
      {activeTab === 'AMBULANCES' && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-6 w-full">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-100 pb-4">
            <div>
              <h3 className="font-bold text-base text-slate-900">Hospital Ambulance Fleet & Monthly Operating Cost Breakdown</h3>
              <p className="text-xs text-slate-500">
                Track live ambulance telemetry, fuel expenses, certified EMT drivers, life support maintenance, and total monthly operating costs
              </p>
            </div>

            <div className="p-3 bg-slate-100 border border-slate-200 rounded-xl text-right font-mono">
              <span className="text-[10px] text-slate-600 font-bold block uppercase">Total Fleet Monthly Cost</span>
              <span className="text-lg font-black text-slate-900">
                ${stats.totalAmbulanceMonthlyCostUSD.toLocaleString()} / Month (₹{(stats.totalAmbulanceMonthlyCostINR / 100000).toFixed(2)} Lakhs)
              </span>
            </div>
          </div>

          {/* Monthly Running Cost Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-xs">
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
              <span className="text-slate-500 font-semibold block">Total Active Ambulances</span>
              <div className="text-2xl font-black text-slate-900">{ambulances.length} Emergency Units</div>
              <span className="text-[10px] text-slate-600 font-bold">3 Standby • 1 In Transit • 1 Workshop</span>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
              <span className="text-slate-500 font-semibold block">Monthly Fuel & Diesel Cost</span>
              <div className="text-2xl font-black text-slate-900">$2,700 / mo</div>
              <span className="text-[10px] text-slate-500 font-mono">₹2.21 Lakhs (24/7 Engine Readiness)</span>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
              <span className="text-slate-500 font-semibold block">EMT Driver & Paramedic Salaries</span>
              <div className="text-2xl font-black text-slate-900">$6,300 / mo</div>
              <span className="text-[10px] text-slate-500 font-mono">₹5.16 Lakhs (10 Shift Staff)</span>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
              <span className="text-slate-500 font-semibold block">Life Support & Maintenance</span>
              <div className="text-2xl font-black text-slate-900">$2,500 / mo</div>
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
                        amb.status === 'In Transit (Emergency)' ? 'bg-rose-100 text-rose-900 border border-rose-300' :
                        'bg-amber-100 text-amber-900 border border-amber-300'
                      }`}>
                        {amb.status}
                      </span>
                    </div>

                    <div className="p-3 bg-white rounded-xl border border-slate-200 text-[11px] space-y-1 text-slate-700">
                      <p>Driver: <strong>{amb.driverName}</strong></p>
                      <p>Paramedic Lead: <strong>{amb.paramedicLead}</strong></p>
                      <p className="text-slate-500 font-mono text-[10px]">Location: {amb.currentLocation}</p>
                    </div>

                    {/* Cost Breakdown */}
                    <div className="p-3 bg-slate-100/70 rounded-xl border border-slate-200 text-[11px] space-y-1">
                      <span className="font-bold text-slate-900 block">Monthly Operating Cost:</span>
                      <div className="flex justify-between text-slate-600">
                        <span>Fuel Expense: ${amb.fuelExpense}</span>
                        <span>Staff Salary: ${amb.staffSalary}</span>
                        <span>Maintenance: ${amb.maintenanceExpense}</span>
                      </div>
                      <div className="flex justify-between font-bold text-slate-900 pt-1 border-t border-slate-200 text-xs font-mono">
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

      {/* TAB 5: BLOOD BANK MATRIX */}
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
              className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-xs transition-all cursor-pointer"
            >
              Broadcast Emergency Blood Drive
            </button>
          </div>

          {/* Blood Groups Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            {bloodStock.map(b => (
              <div
                key={b.group}
                className={`p-5 rounded-2xl border space-y-3 flex flex-col justify-between ${
                  b.status === 'Optimal' ? 'bg-slate-50 border-slate-200' :
                  b.status === 'Adequate' ? 'bg-slate-50 border-slate-200' :
                  'bg-rose-50/40 border border-rose-300'
                }`}
              >
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-300 flex items-center justify-center font-black text-xl text-slate-900 shadow-xs font-mono">
                      {b.group}
                    </div>

                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-xl font-mono ${
                      b.status === 'Optimal' ? 'bg-emerald-100 text-emerald-900 border border-emerald-300' :
                      b.status === 'Adequate' ? 'bg-slate-200 text-slate-800' :
                      'bg-rose-100 text-rose-900 border border-rose-300'
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
                      <span className="font-bold text-rose-800 block">Next Urgent Demand Needed:</span>
                      <p className="font-black text-sm text-rose-800 font-mono">+{b.urgentUnitsNeeded} Units Required Immediately</p>
                      <p className="text-[10px] leading-relaxed text-slate-600 pt-1 border-t border-rose-100">{b.urgentReason}</p>
                    </div>
                  )}
                </div>

                <div className="pt-2 border-t border-slate-200/60 text-[10px] font-mono text-slate-400 flex justify-between">
                  <span>Group: {b.group}</span>
                  <span className={b.unitsAvailable < 5 ? 'text-rose-700 font-bold' : 'text-slate-600 font-bold'}>
                    {b.unitsAvailable < 5 ? 'Restock Immediately' : 'Stock Stable'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 6: EMPLOYEE LEAVES MANAGEMENT */}
      {activeTab === 'LEAVES' && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4 w-full">
          <div className="flex justify-between items-center border-b border-slate-100 pb-3">
            <div>
              <h3 className="font-bold text-base text-slate-900">Hospital Staff Leave Management & Approvals/Rejections</h3>
              <p className="text-xs text-slate-500">Accept or reject leave applications submitted by doctors, surgeons, nurses, and biomedical staff</p>
            </div>
            <span className="text-xs font-mono font-bold bg-slate-100 text-slate-800 border border-slate-200 px-3 py-1 rounded-xl">
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
                    <span className="text-[10px] font-mono bg-slate-200 text-slate-800 px-2 py-0.5 rounded font-semibold">{lv.department}</span>
                  </div>
                  <p className="text-[11px] text-slate-600">
                    <strong>Leave Type:</strong> {lv.leaveType} Leave • <strong>Duration:</strong> {lv.startDate} to {lv.endDate} (Applied: {lv.appliedDate})
                  </p>
                  <p className="text-[11px] text-slate-500">
                    <strong>Reason:</strong> {lv.reason}
                  </p>
                  <p className="text-[11px] text-slate-800 font-semibold">
                    Verified Substitute Cover: {lv.substituteCover}
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
                        className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-4 py-2 rounded-xl shadow-xs transition-all cursor-pointer"
                      >
                        Accept Leave
                      </button>

                      <button
                        onClick={() => setRejectingLeave(lv)}
                        className="bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 font-bold text-xs px-3.5 py-2 rounded-xl transition-all cursor-pointer"
                      >
                        Reject Leave
                      </button>
                    </div>
                  ) : (
                    <span className={`text-[11px] font-mono font-bold px-3 py-1.5 rounded-xl ${
                      lv.approvalStatus === 'Approved' ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-rose-50 text-rose-800 border border-rose-200'
                    }`}>
                      {lv.approvalStatus === 'Approved' ? 'Accepted by Manager' : 'Rejected by Manager'}
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
