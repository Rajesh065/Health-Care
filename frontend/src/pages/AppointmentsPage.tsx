import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { Appointment } from '../types';
import { Calendar, Plus, Clock, Video, User, CheckCircle } from 'lucide-react';

export const AppointmentsPage: React.FC<{ onLaunchTelehealth: () => void }> = ({ onLaunchTelehealth }) => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [filter, setFilter] = useState<'ALL' | 'TELEHEALTH' | 'IN_PERSON' | 'EMERGENCY'>('ALL');

  useEffect(() => {
    loadAppointments();
  }, []);

  const loadAppointments = async () => {
    const data = await api.getAppointments();
    setAppointments(data);
  };

  const handleStatusChange = async (id: string, status: string) => {
    await api.updateAppointmentStatus(id, status);
    loadAppointments();
  };

  const filtered = appointments.filter(a => filter === 'ALL' || a.type === filter);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">Appointments & Clinical Queue</h1>
          <p className="text-xs text-slate-500">Manage patient consultations, triage urgency, and virtual telehealth slots</p>
        </div>
        <div className="flex items-center gap-2">
          {(['ALL', 'TELEHEALTH', 'IN_PERSON', 'EMERGENCY'] as const).map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                filter === f ? 'bg-medblue-600 text-white shadow-sm' : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 uppercase font-bold text-slate-500">
              <tr>
                <th className="p-4">Time</th>
                <th className="p-4">Patient</th>
                <th className="p-4">Doctor / Specialty</th>
                <th className="p-4">Type</th>
                <th className="p-4">Urgency</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map(apt => (
                <tr key={apt.id} className="hover:bg-slate-50/70 transition-colors">
                  <td className="p-4 font-bold text-slate-900 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    {new Date(apt.scheduledTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </td>
                  <td className="p-4">
                    <p className="font-bold text-slate-900">{apt.patientName}</p>
                    <p className="text-[11px] text-slate-500">{apt.reasonForVisit}</p>
                  </td>
                  <td className="p-4">
                    <p className="font-semibold text-slate-800">{apt.doctorName}</p>
                    <p className="text-[11px] text-slate-500">{apt.specialty}</p>
                  </td>
                  <td className="p-4">
                    <span className={`px-2.5 py-1 rounded-lg font-extrabold text-[10px] ${
                      apt.type === 'TELEHEALTH' ? 'bg-indigo-50 text-indigo-700 border border-indigo-200' :
                      apt.type === 'EMERGENCY' ? 'bg-rose-50 text-rose-700 border border-rose-200' : 'bg-slate-100 text-slate-700'
                    }`}>
                      {apt.type}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className={`px-2 py-0.5 rounded-full font-bold text-[10px] ${
                      apt.triageUrgency === 'RED' ? 'bg-rose-100 text-rose-800' :
                      apt.triageUrgency === 'YELLOW' ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800'
                    }`}>
                      {apt.triageUrgency}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded-md">{apt.status}</span>
                  </td>
                  <td className="p-4 text-right space-x-2">
                    {apt.type === 'TELEHEALTH' && (
                      <button
                        onClick={onLaunchTelehealth}
                        className="bg-medblue-600 hover:bg-medblue-700 text-white font-bold px-3 py-1.5 rounded-lg shadow-sm"
                      >
                        Join Room
                      </button>
                    )}
                    {apt.status === 'SCHEDULED' && (
                      <button
                        onClick={() => handleStatusChange(apt.id, 'CHECKED_IN')}
                        className="bg-emerald-50 text-emerald-700 hover:bg-emerald-100 font-bold px-2.5 py-1.5 rounded-lg border border-emerald-200"
                      >
                        Check In
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
