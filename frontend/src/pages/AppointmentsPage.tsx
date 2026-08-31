import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { Appointment } from '../types';

export const AppointmentsPage: React.FC<{ onLaunchTelehealth: () => void }> = ({ onLaunchTelehealth }) => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    api.getAppointments().then(setAppointments).catch(() => {});
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-black text-slate-900">Appointments & Clinical Queue</h1>
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-50 border-b border-slate-200 font-bold text-slate-500">
            <tr>
              <th className="p-4">Time</th>
              <th className="p-4">Patient</th>
              <th className="p-4">Doctor</th>
              <th className="p-4">Type</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {appointments.map(a => (
              <tr key={a.id} className="hover:bg-slate-50">
                <td className="p-4 font-bold">{new Date(a.scheduledTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</td>
                <td className="p-4 font-bold">{a.patientName}</td>
                <td className="p-4">{a.doctorName}</td>
                <td className="p-4"><span className="px-2 py-0.5 rounded font-bold bg-sky-100 text-sky-800">{a.type}</span></td>
                <td className="p-4">
                  {a.type === 'TELEHEALTH' && (
                    <button onClick={onLaunchTelehealth} className="bg-sky-600 text-white font-bold px-3 py-1 rounded-lg">Join</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
