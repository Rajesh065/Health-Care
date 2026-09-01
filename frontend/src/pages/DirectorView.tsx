import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { Appointment } from '../types';
import { Bed, Users, DollarSign, Activity } from 'lucide-react';

export const DirectorView: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    api.getAppointments().then(setAppointments);
  }, []);

  return (
    <div className="space-y-6">
      {/* Overview Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs space-y-1">
          <span className="text-slate-500 font-semibold block">Total Bed Occupancy</span>
          <div className="text-2xl font-black text-slate-900">394 / 450</div>
          <span className="text-emerald-700 font-bold">56 Beds Available (87.5%)</span>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs space-y-1">
          <span className="text-slate-500 font-semibold block">Today's Patient Visits</span>
          <div className="text-2xl font-black text-slate-900">{appointments.length} Patients</div>
          <span className="text-teal-700 font-bold">In Outpatient Consultations</span>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs space-y-1">
          <span className="text-slate-500 font-semibold block">Specialist Doctors on Duty</span>
          <div className="text-2xl font-black text-slate-900">18 Doctors</div>
          <span className="text-blue-700 font-bold">100% Shift Coverage</span>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs space-y-1">
          <span className="text-slate-500 font-semibold block">Today's Estimated Revenue</span>
          <div className="text-2xl font-black text-slate-900">$18,450</div>
          <span className="text-emerald-700 font-bold">From Consultations & Wards</span>
        </div>
      </div>

      {/* Hospital Departments */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-3">
        <h3 className="font-bold text-sm text-slate-900">Department Status</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <span className="font-bold text-slate-900 block">Cardiology Wing</span>
            <span className="text-slate-500">Lead: Dr. Maya Lin • 4 Inpatients</span>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <span className="font-bold text-slate-900 block">Neurology Wing</span>
            <span className="text-slate-500">Lead: Dr. David Kim • 2 Inpatients</span>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <span className="font-bold text-slate-900 block">Emergency & Day Care</span>
            <span className="text-slate-500">Lead: Dr. Arthur Sterling • Open 24/7</span>
          </div>
        </div>
      </div>
    </div>
  );
};
