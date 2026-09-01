import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import {
  SurgeryRecord,
  AttendanceDayRecord,
  EmployeeLeaveRecord,
  Appointment
} from '../types';
import {
  Scissors,
  CalendarCheck,
  CalendarPlus,
  Users,
  CheckCircle2,
  Clock,
  Pill,
  Award,
  Send,
  AlertCircle
} from 'lucide-react';

export const EmployeeView: React.FC = () => {
  const [surgeries, setSurgeries] = useState<SurgeryRecord[]>([]);
  const [attendanceLogs, setAttendanceLogs] = useState<AttendanceDayRecord[]>([]);
  const [leaveRecords, setLeaveRecords] = useState<EmployeeLeaveRecord[]>([]);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [activeTab, setActiveTab] = useState<'SURGERIES' | 'ATTENDANCE' | 'LEAVE' | 'PATIENTS'>('SURGERIES');

  // Leave Application Form State
  const [leaveType, setLeaveType] = useState<'Medical' | 'Casual' | 'Emergency' | 'Conference'>('Casual');
  const [startDate, setStartDate] = useState('Tomorrow');
  const [endDate, setEndDate] = useState('Next 3 Days');
  const [reason, setReason] = useState('');
  const [substituteCover, setSubstituteCover] = useState("Dr. Kevin O'Connor (On-Call)");
  const [isApplying, setIsApplying] = useState(false);

  // Prescription Writer State for Assigned Patients
  const [selectedAptId, setSelectedAptId] = useState<string | null>(null);
  const [prescriptionText, setPrescriptionText] = useState('');

  const loadData = () => {
    api.getEmployeeSurgeries().then(setSurgeries);
    api.getEmployeeAttendance().then(setAttendanceLogs);
    api.getEmployeeLeaves().then(setLeaveRecords);
    api.getAppointments().then(setAppointments);
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
    alert('Leave application submitted successfully! Forwarded to Hospital Manager for approval.');
    loadData();
  };

  const handleSavePrescription = async (aptId: string) => {
    if (!prescriptionText.trim()) return;
    await api.addPrescription(aptId, prescriptionText.trim());
    setSelectedAptId(null);
    setPrescriptionText('');
    alert('Prescription and medical advice dispatched directly to patient health portal.');
    loadData();
  };

  const myLeaves = leaveRecords.filter(l => l.employeeName.includes('Sarah Jenkins'));
  const daysPresent = attendanceLogs.filter(a => a.status === 'Present').length;

  return (
    <div className="space-y-6 font-sans w-full">
      {/* Employee Staff Header Banner */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 w-full">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold text-slate-900">Dr. Sarah Jenkins, MD — Staff & Surgeon Portal</h1>
            <span className="text-[10px] font-bold bg-blue-50 text-blue-900 border border-blue-200 px-2.5 py-0.5 rounded font-mono">
              EMPLOYEE ID: EMP-8024
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Senior Consultant Orthopedic & Joint Surgeon • Chamber 302 (Wing C) & OT Suite 1
          </p>
        </div>

        <div className="flex items-center gap-3 text-xs font-mono">
          <div className="p-2.5 bg-emerald-50 border border-emerald-200 rounded-xl text-right">
            <span className="text-[10px] text-emerald-800 font-semibold block">CURRENT SHIFT STATUS</span>
            <span className="text-base font-black text-emerald-950">● Active in OT Suite 1</span>
          </div>
        </div>
      </div>

      {/* Top 4 Performance & Attendance KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-xs w-full">
        {/* 1. Days Attended (Yenni Days Vachadu) */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-1.5">
          <div className="flex justify-between items-center text-slate-500">
            <span className="font-semibold">Monthly Duty Attendance</span>
            <div className="p-2 bg-blue-50 text-blue-700 rounded-xl">
              <CalendarCheck className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-black text-blue-900">{daysPresent} Days Present</div>
          <p className="text-[11px] text-emerald-700 font-bold">92.3% Punctuality Score (0 Unexcused)</p>
        </div>

        {/* 2. Surgeries Completed (Yenni Operations Chesadu) */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-1.5">
          <div className="flex justify-between items-center text-slate-500">
            <span className="font-semibold">Surgeries Completed</span>
            <div className="p-2 bg-purple-50 text-purple-700 rounded-xl">
              <Scissors className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-black text-purple-950">{surgeries.length} Major Operations</div>
          <p className="text-[11px] text-purple-800 font-medium">100% Success & Zero Complication Rate</p>
        </div>

        {/* 3. Leave Balance & Status */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-1.5">
          <div className="flex justify-between items-center text-slate-500">
            <span className="font-semibold">Leave Balance Remaining</span>
            <div className="p-2 bg-amber-50 text-amber-700 rounded-xl">
              <CalendarPlus className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-black text-slate-900">18 Annual Days</div>
          <p className="text-[11px] text-amber-800 font-medium">{myLeaves.length} Applications on Record</p>
        </div>

        {/* 4. Daily Assigned Patient Queue */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-1.5">
          <div className="flex justify-between items-center text-slate-500">
            <span className="font-semibold">Assigned Patient Queue</span>
            <div className="p-2 bg-teal-50 text-teal-700 rounded-xl">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-black text-teal-950">{appointments.length} Consultations</div>
          <p className="text-[11px] text-teal-800 font-medium">OPD & Post-Op Review Queue</p>
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
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
          <span>Attendance & Shift Logs ({daysPresent} Days)</span>
        </button>

        <button
          onClick={() => setActiveTab('LEAVE')}
          className={`px-4 py-2 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
            activeTab === 'LEAVE' ? 'bg-white text-slate-900 font-bold shadow-xs' : 'text-slate-700 hover:text-slate-900'
          }`}
        >
          <CalendarPlus className="w-3.5 h-3.5 text-amber-700" />
          <span>Apply for Leave & Status</span>
        </button>

        <button
          onClick={() => setActiveTab('PATIENTS')}
          className={`px-4 py-2 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
            activeTab === 'PATIENTS' ? 'bg-white text-slate-900 font-bold shadow-xs' : 'text-slate-700 hover:text-slate-900'
          }`}
        >
          <Users className="w-3.5 h-3.5 text-teal-700" />
          <span>Assigned Patients & Write Prescription</span>
        </button>
      </div>

      {/* TAB 1: OPERATIONS & SURGERIES PERFORMED (YENNI OPERATIONS CHESADO) */}
      {activeTab === 'SURGERIES' && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4 w-full">
          <div className="flex justify-between items-center border-b border-slate-100 pb-3">
            <div>
              <h3 className="font-bold text-base text-slate-900">Surgical Operations Log & Clinical Outcomes</h3>
              <p className="text-xs text-slate-500">Comprehensive register of all surgical procedures, robot-assisted arthroplasties, and patient recovery</p>
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

      {/* TAB 2: ATTENDANCE & SHIFT LOGS (YENNI DAYS VACHADU) */}
      {activeTab === 'ATTENDANCE' && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4 w-full">
          <div className="flex justify-between items-center border-b border-slate-100 pb-3">
            <div>
              <h3 className="font-bold text-base text-slate-900">Monthly Duty Attendance & Shift Punch Records</h3>
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
                  <p className="text-[11px] text-slate-600 font-medium">{log.shift}</p>
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

      {/* TAB 3: APPLY FOR LEAVE & LEAVE STATUS (LEAVE APPLY CHESUKOVADANIKI) */}
      {activeTab === 'LEAVE' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start w-full">
          {/* Left: Apply for Leave Form */}
          <div className="lg:col-span-6 bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <div className="border-b border-slate-100 pb-3">
              <h3 className="font-bold text-base text-slate-900">Apply for Official Staff Leave</h3>
              <p className="text-xs text-slate-500">Submit leave request for approval by Hospital Operations Manager</p>
            </div>

            <form onSubmit={handleApplyLeave} className="space-y-3.5 text-xs">
              <div className="grid grid-cols-2 gap-3">
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
                  <label className="font-semibold text-slate-700 block mb-1">Nominated Substitute Cover *</label>
                  <input
                    required
                    value={substituteCover}
                    onChange={e => setSubstituteCover(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none"
                  />
                </div>
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

          {/* Right: My Leave History & Manager Status */}
          <div className="lg:col-span-6 bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <div className="border-b border-slate-100 pb-3">
              <h3 className="font-bold text-base text-slate-900">My Leave Applications & Manager Approval</h3>
              <p className="text-xs text-slate-500">Live status of your submitted leave requests</p>
            </div>

            <div className="space-y-3">
              {myLeaves.map(lv => (
                <div key={lv.id} className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2 text-xs">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="font-mono font-bold text-[10px] text-slate-400">{lv.id} • {lv.appliedDate}</span>
                      <h4 className="font-bold text-slate-900 text-sm mt-0.5">{lv.leaveType} Leave ({lv.startDate} - {lv.endDate})</h4>
                    </div>
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-xl ${
                      lv.approvalStatus === 'Approved' ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-amber-50 text-amber-800 border border-amber-200 animate-pulse'
                    }`}>
                      ● {lv.approvalStatus}
                    </span>
                  </div>

                  <p className="text-slate-600 text-[11px]">
                    <strong>Reason:</strong> {lv.reason}
                  </p>

                  <div className="pt-2 border-t border-slate-200/60 flex justify-between items-center text-[10px] font-mono">
                    <span className="text-emerald-800 font-bold">Cover: {lv.substituteCover}</span>
                    <span className="text-slate-400">Decision by Manager: Marcus Sterling</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: ASSIGNED PATIENTS & WRITE PRESCRIPTION */}
      {activeTab === 'PATIENTS' && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4 w-full">
          <div className="flex justify-between items-center border-b border-slate-100 pb-3">
            <div>
              <h3 className="font-bold text-base text-slate-900">My Consultation Queue & Patient Orders</h3>
              <p className="text-xs text-slate-500">Review patient symptoms, mark consultations completed, and issue prescriptions</p>
            </div>
            <span className="text-xs font-mono font-bold bg-teal-50 text-teal-900 border border-teal-200 px-3 py-1 rounded-xl">
              Orthopedic Specialist Queue
            </span>
          </div>

          <div className="space-y-3">
            {appointments.map(a => (
              <div key={a.id} className="p-5 bg-slate-50 border border-slate-200 rounded-2xl space-y-3 text-xs">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-[10px] bg-slate-200 text-slate-800 px-2.5 py-0.5 rounded">
                        TOKEN {a.tokenNumber}
                      </span>
                      <span className="text-[10px] font-mono bg-blue-100 text-blue-900 px-2 py-0.5 rounded font-semibold">
                        {a.timeSlot}
                      </span>
                    </div>
                    <h4 className="font-bold text-sm text-slate-900 mt-1">{a.patientName} ({a.patientAge}y, {a.patientGender})</h4>
                    <p className="text-slate-500 text-[11px]">Phone: {a.patientPhone} • Complaint: <strong>{a.symptoms}</strong></p>
                  </div>

                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-xl ${
                    a.status === 'Completed' ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-blue-50 text-blue-800 border border-blue-200'
                  }`}>
                    ● {a.status}
                  </span>
                </div>

                {/* Prescription Box */}
                {a.prescription ? (
                  <div className="p-3.5 bg-blue-50/80 rounded-xl border border-blue-200 space-y-1 text-xs">
                    <div className="flex items-center gap-1.5 font-bold text-blue-950">
                      <Pill className="w-3.5 h-3.5 text-blue-700" />
                      <span>Issued Prescription:</span>
                    </div>
                    <p className="text-slate-800 font-medium leading-relaxed">{a.prescription}</p>
                  </div>
                ) : (
                  <div>
                    {selectedAptId === a.id ? (
                      <div className="space-y-2 pt-2 border-t border-slate-200">
                        <label className="font-bold text-slate-800 block">Write Prescription & Advice for {a.patientName}:</label>
                        <textarea
                          rows={2}
                          value={prescriptionText}
                          onChange={e => setPrescriptionText(e.target.value)}
                          placeholder="e.g. Tab. Aceclofenac 100mg twice daily, ice compression, review in 7 days..."
                          className="w-full p-2.5 bg-white border border-slate-300 rounded-xl outline-none text-xs"
                        />
                        <div className="flex justify-end gap-2">
                          <button
                            onClick={() => setSelectedAptId(null)}
                            className="px-3 py-1.5 text-slate-600 hover:bg-slate-200 rounded-lg font-semibold"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={() => handleSavePrescription(a.id)}
                            className="px-4 py-1.5 bg-teal-700 hover:bg-teal-800 text-white font-bold rounded-lg shadow-xs"
                          >
                            Save & Send Prescription to Patient
                          </button>
                        </div>
                      </div>
                    ) : (
                      <button
                        onClick={() => { setSelectedAptId(a.id); setPrescriptionText(''); }}
                        className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-[11px] px-3.5 py-1.5 rounded-xl shadow-xs flex items-center gap-1 cursor-pointer"
                      >
                        <Pill className="w-3.5 h-3.5" />
                        <span>Write Prescription</span>
                      </button>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
