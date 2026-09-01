import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { Appointment } from '../types';
import {
  CalendarCheck,
  Plus,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Clock,
  User,
  Filter,
  X
} from 'lucide-react';

export const ReceptionView: React.FC<{ onNewBooking: () => void }> = ({ onNewBooking }) => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [filter, setFilter] = useState<'ALL' | 'WAITING' | 'CHECKED_IN' | 'COMPLETED' | 'REJECTED'>('ALL');
  const [rejectingApt, setRejectingApt] = useState<Appointment | null>(null);
  const [rejectReason, setRejectReason] = useState('Doctor in Emergency Surgery (Slot Full)');

  const load = () => {
    api.getAppointments().then(setAppointments);
  };

  useEffect(() => {
    load();
    window.addEventListener('medflow_live_update', load);
    return () => window.removeEventListener('medflow_live_update', load);
  }, []);

  const handleCheckIn = async (id: string) => {
    await api.updateStatus(id, 'Checked In');
  };

  const handleConfirmReject = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!rejectingApt) return;
    await api.updateStatus(rejectingApt.id, 'Rejected', rejectReason);
    setRejectingApt(null);
    alert(`Appointment token ${rejectingApt.tokenNumber} rejected. Status updated across Doctor and Patient portals.`);
  };

  const filtered = appointments.filter(a => {
    if (filter === 'WAITING') return a.status === 'Waiting';
    if (filter === 'CHECKED_IN') return a.status === 'Checked In';
    if (filter === 'COMPLETED') return a.status === 'Completed';
    if (filter === 'REJECTED') return a.status === 'Rejected';
    return true;
  });

  return (
    <div className="space-y-5 font-sans">
      {/* Header Banner */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="font-bold text-base text-slate-900">Front Desk & Outpatient Token Queue</h2>
            <span className="text-[10px] font-bold bg-teal-50 text-teal-900 border border-teal-200 px-2 py-0.5 rounded font-mono">
              PRIYA NAIR (RECEPTION LEAD)
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">Manage patient check-ins, chamber dispatch, and reject overbooked/cancelled tokens</p>
        </div>

        <button
          onClick={onNewBooking}
          className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-4 py-2.5 rounded-xl flex items-center gap-1.5 shadow-xs cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>New Walk-in Patient Token</span>
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3 rounded-2xl border border-slate-200 text-xs">
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setFilter('ALL')}
            className={`px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer ${
              filter === 'ALL' ? 'bg-slate-900 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            All Tokens ({appointments.length})
          </button>
          <button
            onClick={() => setFilter('WAITING')}
            className={`px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer ${
              filter === 'WAITING' ? 'bg-amber-600 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Waiting ({appointments.filter(a => a.status === 'Waiting').length})
          </button>
          <button
            onClick={() => setFilter('CHECKED_IN')}
            className={`px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer ${
              filter === 'CHECKED_IN' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Checked In ({appointments.filter(a => a.status === 'Checked In').length})
          </button>
          <button
            onClick={() => setFilter('COMPLETED')}
            className={`px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer ${
              filter === 'COMPLETED' ? 'bg-emerald-700 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Completed ({appointments.filter(a => a.status === 'Completed').length})
          </button>
          <button
            onClick={() => setFilter('REJECTED')}
            className={`px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer ${
              filter === 'REJECTED' ? 'bg-rose-700 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Rejected ({appointments.filter(a => a.status === 'Rejected').length})
          </button>
        </div>

        <span className="text-[11px] text-slate-400 font-mono">
          Showing {filtered.length} of {appointments.length} Patients
        </span>
      </div>

      {/* Appointment Tokens List */}
      <div className="space-y-3">
        {filtered.map(a => (
          <div
            key={a.id}
            className={`p-4 rounded-2xl border transition-all flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs ${
              a.status === 'Rejected'
                ? 'bg-rose-50/40 border-rose-200'
                : a.status === 'Completed'
                ? 'bg-slate-50/60 border-slate-200'
                : 'bg-white border-slate-200 shadow-xs'
            }`}
          >
            <div className="flex items-start sm:items-center gap-3.5">
              <div className={`w-12 h-12 rounded-2xl text-white flex items-center justify-center font-mono font-black text-sm shrink-0 shadow-xs ${
                a.status === 'Rejected' ? 'bg-rose-800' :
                a.status === 'Completed' ? 'bg-emerald-800' :
                a.status === 'Checked In' ? 'bg-blue-800' : 'bg-teal-800'
              }`}>
                {a.tokenNumber}
              </div>

              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <h4 className="font-bold text-sm text-slate-900">{a.patientName} ({a.patientAge}y, {a.patientGender})</h4>
                  <span className="text-[10px] text-slate-400 font-mono">Phone: {a.patientPhone}</span>
                </div>
                <p className="text-[11px] text-slate-600">
                  Doctor: <strong className="text-slate-800">{a.doctorName}</strong> ({a.department}) • Slot: <strong>{a.timeSlot}</strong>
                </p>
                <p className="text-[11px] text-slate-500">
                  <strong>Complaint:</strong> {a.symptoms}
                </p>
                {a.rejectionReason && (
                  <p className="text-[11px] text-rose-700 font-bold bg-rose-100/60 px-2 py-0.5 rounded inline-block mt-1 border border-rose-200">
                    Rejection Reason: {a.rejectionReason}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2.5 w-full md:w-auto justify-between md:justify-end border-t md:border-t-0 pt-2 md:pt-0 border-slate-100">
              <span className={`text-[10px] font-bold px-2.5 py-1 rounded-xl font-mono ${
                a.status === 'Completed'
                  ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                  : a.status === 'Checked In'
                  ? 'bg-blue-50 text-blue-800 border border-blue-200 animate-pulse'
                  : a.status === 'Rejected'
                  ? 'bg-rose-100 text-rose-800 border border-rose-200'
                  : 'bg-amber-50 text-amber-800 border border-amber-200'
              }`}>
                ● {a.status}
              </span>

              {a.status === 'Waiting' && (
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCheckIn(a.id)}
                    className="bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs px-3.5 py-1.5 rounded-xl shadow-xs transition-all flex items-center gap-1 cursor-pointer"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Check-In</span>
                  </button>

                  {/* Reject / Cancel Button */}
                  <button
                    onClick={() => setRejectingApt(a)}
                    className="bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 font-bold text-xs px-3 py-1.5 rounded-xl transition-all flex items-center gap-1 cursor-pointer"
                  >
                    <XCircle className="w-3.5 h-3.5" />
                    <span>Reject</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Reject Appointment Modal */}
      {rejectingApt && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 space-y-4 shadow-2xl border border-slate-200 text-xs">
            <div className="flex justify-between items-center border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2 text-rose-700 font-bold text-sm">
                <AlertTriangle className="w-4 h-4" />
                <span>Reject / Cancel Patient Token</span>
              </div>
              <button onClick={() => setRejectingApt(null)} className="p-1 text-slate-400 hover:text-slate-600 rounded">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
              <span className="font-mono font-bold text-[10px] text-slate-500">{rejectingApt.tokenNumber}</span>
              <h4 className="font-bold text-slate-900">{rejectingApt.patientName} ({rejectingApt.timeSlot})</h4>
              <p className="text-slate-600">Assigned Doctor: {rejectingApt.doctorName}</p>
            </div>

            <form onSubmit={handleConfirmReject} className="space-y-3">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Select Rejection Reason</label>
                <select
                  value={rejectReason}
                  onChange={e => setRejectReason(e.target.value)}
                  className="w-full p-2 bg-slate-50 border border-slate-200 rounded-xl outline-none text-slate-800 font-medium"
                >
                  <option value="Doctor in Emergency Surgery (Chamber Closed)">Doctor in Emergency Surgery (Chamber Closed)</option>
                  <option value="Consultation Slot Fully Booked (Overcapacity)">Consultation Slot Fully Booked (Overcapacity)</option>
                  <option value="Patient Requested Cancellation / Reschedule">Patient Requested Cancellation / Reschedule</option>
                  <option value="Patient No-Show for Assigned Slot">Patient No-Show for Assigned Slot</option>
                </select>
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setRejectingApt(null)}
                  className="px-4 py-2 rounded-xl text-slate-600 hover:bg-slate-100 font-semibold cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-rose-700 hover:bg-rose-800 text-white font-bold rounded-xl shadow-xs cursor-pointer"
                >
                  Confirm Rejection
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
