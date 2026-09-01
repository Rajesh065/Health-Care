import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import {
  SurgeryRecord,
  AttendanceDayRecord,
  EmployeeLeaveRecord
} from '../types';
import {
  Scissors,
  CalendarCheck,
  CalendarPlus,
  CheckCircle2,
  Clock,
  Send,
  AlertCircle,
  XCircle
} from 'lucide-react';

export const EmployeeView: React.FC = () => {
  const [surgeries, setSurgeries] = useState<SurgeryRecord[]>([]);
  const [attendanceLogs, setAttendanceLogs] = useState<AttendanceDayRecord[]>([]);
  const [leaveRecords, setLeaveRecords] = useState<EmployeeLeaveRecord[]>([]);
  const [activeTab, setActiveTab] = useState<'SURGERIES' | 'ATTENDANCE' | 'LEAVE'>('SURGERIES');

  // Leave Application Form State
  const [leaveType, setLeaveType] = useState<'Medical' | 'Casual' | 'Emergency' | 'Conference'>('Casual');
  const [startDate, setStartDate] = useState('Tomorrow');
  const [endDate, setEndDate] = useState('Next 3 Days');
  const [reason, setReason] = useState('');
  const [substituteCover, setSubstituteCover] = useState("Dr. Kevin O'Connor (On-Call)");
  const [isApplying, setIsApplying] = useState(false);

  const loadData = () => {
    api.getEmployeeSurgeries().then(setSurgeries);
    api.getEmployeeAttendance().then(setAttendanceLogs);
    api.getEmployeeLeaves().then(setLeaveRecords);
  };

  useEffect(() => {
    loadData();
    window.addEventListener('medflow_live_update', loadData);
    return () => window.removeEventListener('medflow_live_update', loadData);
  }, []);

  const handleApplyLeave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!reason.trim()) return;

    setIsApplying(true);
    await api.applyLeave({
      employeeName: 'Dr. Sarah Jenkins, MD',
      role: 'Consultant Orthopedic Surgeon',
      department: 'Orthopedics & OT',
      leaveType,
      startDate,
      endDate,
      reason,
      substituteCover
    });
    setIsApplying(false);
    setReason('');
    alert('Leave application submitted successfully! Sent to Hospital Manager for Accept/Reject decision.');
    loadData();
  };

  const myLeaves = leaveRecords.filter(l => l.employeeName.includes('Sarah Jenkins'));
  const daysPresent = attendanceLogs.filter(a => a.status === 'Present').length;
  const approvedLeaves = myLeaves.filter(l => l.approvalStatus === 'Approved').length;
  const rejectedLeaves = myLeaves.filter(l => l.approvalStatus === 'Rejected').length;
  const pendingLeaves = myLeaves.filter(l => l.approvalStatus === 'Pending Review').length;

  return (
    <div className="space-y-6 font-sans w-full">
      {/* Employee Staff Header Banner */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 w-full">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold text-slate-900">Dr. Sarah Jenkins, MD — Staff & Surgeon Portal</h1>
            <span className="text-[10px] font-bold bg-purple-50 text-purple-900 border border-purple-200 px-2.5 py-0.5 rounded font-mono">
              EMPLOYEE ID: EMP-8024
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Senior Consultant Orthopedic & Joint Surgeon • Chamber 302 (Wing C) & OT Suite 1
          </p>
        </div>

        <div className="flex items-center gap-3 text-xs font-mono">
          <div className="p-2.5 bg-emerald-50 border border-emerald-200 rounded-xl text-right">
            <span className="text-[10px] text-emerald-800 font-semibold block">TODAY'S SHIFT TIME</span>
            <span className="text-base font-black text-emerald-950">08:00 AM - 04:30 PM (OT Suite 1)</span>
          </div>
        </div>
      </div>

      {/* Top 3 KPI Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-xs w-full">
        {/* 1. Days Attended & Shift Time (Yenni Days Vachadu) */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-1.5">
          <div className="flex justify-between items-center text-slate-500">
            <span className="font-semibold">Duty Attendance & Days Present</span>
            <div className="p-2 bg-blue-50 text-blue-700 rounded-xl">
              <CalendarCheck className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-black text-blue-900">{daysPresent} Days Present</div>
          <p className="text-[11px] text-slate-600 font-medium">Shift: <strong>08:00 AM - 04:30 PM</strong> (Biometric Verified)</p>
        </div>

        {/* 2. Operations / Surgeries Performed (Yenni Operations Chesadu) */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-1.5">
          <div className="flex justify-between items-center text-slate-500">
            <span className="font-semibold">Operations / Surgeries Performed</span>
            <div className="p-2 bg-purple-50 text-purple-700 rounded-xl">
              <Scissors className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-black text-purple-950">{surgeries.length} Major Operations</div>
          <p className="text-[11px] text-emerald-700 font-bold">100% Successful Recovery & Zero Complications</p>
        </div>

        {/* 3. Leave Requests Summary (Yenni Leaves Petadu) */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-1.5">
          <div className="flex justify-between items-center text-slate-500">
            <span className="font-semibold">Leave Applications Summary</span>
            <div className="p-2 bg-amber-50 text-amber-700 rounded-xl">
              <CalendarPlus className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-black text-slate-900">{myLeaves.length} Total Leaves Applied</div>
          <div className="flex items-center gap-2 text-[10px] font-mono font-bold pt-0.5">
            <span className="text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded border border-emerald-200">{approvedLeaves} Accepted</span>
            <span className="text-rose-700 bg-rose-50 px-1.5 py-0.2 rounded border border-rose-200">{rejectedLeaves} Rejected</span>
            <span className="text-amber-800 bg-amber-50 px-1.5 py-0.2 rounded border border-amber-200">{pendingLeaves} Pending</span>
          </div>
        </div>
      </div>

      {/* 3 Navigation Sub-Tabs */}
      <div className="flex flex-wrap gap-2 p-1.5 bg-slate-200/70 rounded-xl text-xs font-semibold w-full">
        <button
          onClick={() => setActiveTab('SURGERIES')}
          className={`px-4 py-2 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
            activeTab === 'SURGERIES' ? 'bg-white text-slate-900 font-bold shadow-xs' : 'text-slate-700 hover:text-slate-900'
          }`}
        >
          <Scissors className="w-3.5 h-3.5 text-purple-700" />
          <span>My Operations & Surgeries ({surgeries.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('ATTENDANCE')}
          className={`px-4 py-2 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
            activeTab === 'ATTENDANCE' ? 'bg-white text-slate-900 font-bold shadow-xs' : 'text-slate-700 hover:text-slate-900'
          }`}
        >
          <CalendarCheck className="w-3.5 h-3.5 text-blue-700" />
          <span>Duty Date & Shift Time Records ({daysPresent} Days)</span>
        </button>

        <button
          onClick={() => setActiveTab('LEAVE')}
          className={`px-4 py-2 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
            activeTab === 'LEAVE' ? 'bg-white text-slate-900 font-bold shadow-xs' : 'text-slate-700 hover:text-slate-900'
          }`}
        >
          <CalendarPlus className="w-3.5 h-3.5 text-amber-700" />
          <span>Apply for Leave & Live Status ({myLeaves.length} Applications)</span>
        </button>
      </div>

      {/* TAB 1: OPERATIONS & SURGERIES PERFORMED */}
      {activeTab === 'SURGERIES' && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4 w-full">
          <div className="flex justify-between items-center border-b border-slate-100 pb-3">
            <div>
              <h3 className="font-bold text-base text-slate-900">Surgical Operations Log & Clinical Outcomes</h3>
              <p className="text-xs text-slate-500">Full record of all surgical procedures, robot-assisted arthroplasties, and patient recovery</p>
            </div>
            <span className="text-xs font-mono font-bold bg-purple-50 text-purple-900 border border-purple-200 px-3 py-1 rounded-xl">
              Lead Surgeon Portfolio
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            {surgeries.map(surg => (
              <div key={surg.id} className="p-5 bg-slate-50 border border-slate-200 rounded-2xl space-y-3 flex flex-col justify-between">
                <div className="space-y-1.5">
                  <div className="flex justify-between items-start">
                    <span className="font-mono font-bold text-[10px] text-purple-800 bg-purple-50 border border-purple-200 px-2 py-0.5 rounded">
                      {surg.id} • {surg.otSuite}
                    </span>
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                      ✓ {surg.outcome}
                    </span>
                  </div>

                  <h4 className="font-bold text-sm text-slate-900 mt-1">{surg.procedureName}</h4>
                  <p className="text-slate-600 text-[11px]">
                    Patient: <strong>{surg.patientName}</strong> ({surg.patientAge} years old)
                  </p>
                  <p className="text-slate-500 text-[11px]">
                    Assisting Team: {surg.assistingTeam}
                  </p>
                </div>

                <div className="p-3 bg-white rounded-xl border border-slate-200 text-[11px] space-y-1 text-slate-700">
                  <span className="font-bold block text-slate-900">Surgeon Clinical Notes:</span>
                  <p className="leading-relaxed">{surg.notes}</p>
                </div>

                <div className="pt-2 border-t border-slate-200/60 flex justify-between items-center text-[10px] font-mono text-slate-400">
                  <span>DATE: {surg.surgeryDate}</span>
                  <span className="font-bold text-slate-600">DURATION: {surg.durationMinutes} Mins</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: DUTY DATE & SHIFT TIME RECORDS */}
      {activeTab === 'ATTENDANCE' && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4 w-full">
          <div className="flex justify-between items-center border-b border-slate-100 pb-3">
            <div>
              <h3 className="font-bold text-base text-slate-900">Duty Dates, Shift Timing & Biometric Punch Records</h3>
              <p className="text-xs text-slate-500">Verified biometric punch-in records, shift schedules, and hours logged at St. Jude Medical Center</p>
            </div>
            <span className="text-xs font-mono font-bold bg-blue-50 text-blue-900 border border-blue-200 px-3 py-1 rounded-xl">
              Total Present: {daysPresent} Days This Month
            </span>
          </div>

          <div className="space-y-2.5">
            {attendanceLogs.map((log, idx) => (
              <div key={idx} className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-3 text-xs">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-900">{log.date}</span>
                    <span className="text-[10px] font-mono bg-slate-200 text-slate-700 px-1.5 py-0.2 rounded font-semibold">{log.day}</span>
                  </div>
                  <p className="text-[11px] text-slate-700 font-semibold">{log.shift}</p>
                  <p className="text-[10px] text-slate-400 font-mono">Location: {log.departmentFloor}</p>
                </div>

                <div className="flex items-center gap-4 text-right font-mono text-[11px]">
                  <div>
                    <span className="text-slate-400 block text-[10px]">PUNCH IN / OUT</span>
                    <span className="text-slate-800 font-bold">{log.punchInTime} ➔ {log.punchOutTime}</span>
                  </div>

                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-xl ${
                    log.status === 'Present' ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-slate-200 text-slate-700'
                  }`}>
                    ● {log.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: APPLY FOR LEAVE & LEAVE STATUS (ACCEPT / REJECT WITH MANAGER REASON) */}
      {activeTab === 'LEAVE' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start w-full">
          {/* Left: Apply for Leave Form */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <div className="border-b border-slate-100 pb-3">
              <h3 className="font-bold text-base text-slate-900">Apply for Official Leave</h3>
              <p className="text-xs text-slate-500">Submit leave request for Manager review & approval</p>
            </div>

            <form onSubmit={handleApplyLeave} className="space-y-3.5 text-xs">
              <div>
                <label className="font-semibold text-slate-700 block mb-1">Leave Category *</label>
                <select
                  value={leaveType}
                  onChange={e => setLeaveType(e.target.value as any)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none font-medium"
                >
                  <option value="Casual">Casual Leave</option>
                  <option value="Medical">Medical / Sick Leave</option>
                  <option value="Emergency">Emergency Family Leave</option>
                  <option value="Conference">Medical Conference / CME</option>
                </select>
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">Nominated Substitute / On-Call Doctor *</label>
                <input
                  required
                  value={substituteCover}
                  onChange={e => setSubstituteCover(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-semibold text-slate-700 block mb-1">From Date *</label>
                  <input
                    required
                    value={startDate}
                    onChange={e => setStartDate(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none font-mono"
                  />
                </div>

                <div>
                  <label className="font-semibold text-slate-700 block mb-1">To Date *</label>
                  <input
                    required
                    value={endDate}
                    onChange={e => setEndDate(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">Reason for Leave *</label>
                <textarea
                  required
                  rows={3}
                  value={reason}
                  onChange={e => setReason(e.target.value)}
                  placeholder="Explain reason for leave (e.g. Attending Surgical Workshop, personal medical rest)..."
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isApplying}
                className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl shadow-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{isApplying ? 'Submitting...' : 'Submit Leave Request to Manager'}</span>
              </button>
            </form>
          </div>

          {/* Right: My Leave Applications History with Accept / Reject Badges */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <div className="border-b border-slate-100 pb-3 flex justify-between items-center">
              <div>
                <h3 className="font-bold text-base text-slate-900">My Leave Applications ({myLeaves.length})</h3>
                <p className="text-xs text-slate-500">Live decision status from Hospital Manager (Marcus Sterling)</p>
              </div>
              <span className="text-[10px] font-mono font-bold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg">
                Synced with Manager
              </span>
            </div>

            <div className="space-y-3">
              {myLeaves.map(lv => (
                <div
                  key={lv.id}
                  className={`p-4 rounded-2xl border space-y-2.5 text-xs ${
                    lv.approvalStatus === 'Approved'
                      ? 'bg-emerald-50/40 border-emerald-200'
                      : lv.approvalStatus === 'Rejected'
                      ? 'bg-rose-50/40 border-rose-200'
                      : 'bg-amber-50/40 border-amber-200'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="font-mono font-bold text-[10px] text-slate-500">{lv.id} • Applied {lv.appliedDate}</span>
                      <h4 className="font-bold text-slate-900 text-sm mt-0.5">{lv.leaveType} Leave ({lv.startDate} - {lv.endDate})</h4>
                    </div>

                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-xl font-mono ${
                      lv.approvalStatus === 'Approved'
                        ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                        : lv.approvalStatus === 'Rejected'
                        ? 'bg-rose-100 text-rose-900 border border-rose-300'
                        : 'bg-amber-100 text-amber-900 border border-amber-300 animate-pulse'
                    }`}>
                      ● {lv.approvalStatus === 'Approved' ? '✓ Accepted by Manager' : lv.approvalStatus === 'Rejected' ? '✗ Rejected by Manager' : '⏳ Pending Review'}
                    </span>
                  </div>

                  <p className="text-slate-700 text-[11px]">
                    <strong>Stated Reason:</strong> {lv.reason}
                  </p>

                  {/* Manager Response Note */}
                  {lv.managerNote && (
                    <div className={`p-2.5 rounded-xl border text-[11px] ${
                      lv.approvalStatus === 'Approved'
                        ? 'bg-white border-emerald-200 text-emerald-950'
                        : lv.approvalStatus === 'Rejected'
                        ? 'bg-white border-rose-200 text-rose-950 font-semibold'
                        : 'bg-white border-slate-200 text-slate-700'
                    }`}>
                      <strong>Manager Note:</strong> {lv.managerNote}
                    </div>
                  )}

                  <div className="pt-1.5 border-t border-slate-200/60 flex justify-between items-center text-[10px] font-mono text-slate-500">
                    <span>Verified Substitute: <strong>{lv.substituteCover}</strong></span>
                    <span>Reviewer: Marcus Sterling (Manager)</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
