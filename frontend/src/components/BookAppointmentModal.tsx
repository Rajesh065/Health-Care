import React, { useState } from 'react';
import { api } from '../services/api';
import { X, Calendar, Clock, User, CheckCircle2 } from 'lucide-react';

export const BookAppointmentModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}> = ({ isOpen, onClose, onSuccess }) => {
  const [patientName, setPatientName] = useState('Robert Chen');
  const [patientPhone, setPatientPhone] = useState('+1 (555) 234-8901');
  const [patientAge, setPatientAge] = useState(52);
  const [doctorName, setDoctorName] = useState('Dr. Maya Lin');
  const [department, setDepartment] = useState('Cardiology');
  const [timeSlot, setTimeSlot] = useState('10:00 AM');
  const [date, setDate] = useState('Today');
  const [symptoms, setSymptoms] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleDoctorChange = (doc: string) => {
    setDoctorName(doc);
    if (doc === 'Dr. Maya Lin') setDepartment('Cardiology');
    else if (doc === 'Dr. David Kim') setDepartment('Neurology');
    else setDepartment('General Medicine');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!symptoms.trim()) return;

    setLoading(true);
    await api.bookAppointment({
      patientName,
      patientPhone,
      patientAge,
      doctorName,
      department,
      date,
      timeSlot,
      symptoms
    });
    setLoading(false);
    setSymptoms('');
    onSuccess();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 space-y-4 shadow-xl border border-slate-200">
        <div className="flex justify-between items-center border-b border-slate-100 pb-3">
          <div>
            <h3 className="font-bold text-base text-slate-900">Book Doctor Appointment</h3>
            <p className="text-xs text-slate-500">St. Jude Medical Center</p>
          </div>
          <button onClick={onClose} className="p-1 text-slate-400 hover:text-slate-600 rounded-lg cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="font-semibold text-slate-700 block mb-1">Select Doctor</label>
              <select
                value={doctorName}
                onChange={e => handleDoctorChange(e.target.value)}
                className="w-full p-2 bg-slate-50 border border-slate-200 rounded-xl outline-none text-slate-800 font-semibold"
              >
                <option value="Dr. Maya Lin">Dr. Maya Lin (Cardiology)</option>
                <option value="Dr. David Kim">Dr. David Kim (Neurology)</option>
                <option value="Dr. Arthur Sterling">Dr. Arthur Sterling (General)</option>
              </select>
            </div>

            <div>
              <label className="font-semibold text-slate-700 block mb-1">Time Slot</label>
              <select
                value={timeSlot}
                onChange={e => setTimeSlot(e.target.value)}
                className="w-full p-2 bg-slate-50 border border-slate-200 rounded-xl outline-none text-slate-800 font-bold text-teal-800"
              >
                <option value="09:30 AM">09:30 AM</option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="11:30 AM">11:30 AM</option>
                <option value="02:00 PM">02:00 PM</option>
                <option value="04:00 PM">04:00 PM</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-2">
              <label className="font-semibold text-slate-700 block mb-1">Patient Full Name</label>
              <input
                required
                value={patientName}
                onChange={e => setPatientName(e.target.value)}
                className="w-full p-2 bg-slate-50 border border-slate-200 rounded-xl outline-none text-slate-800"
              />
            </div>
            <div>
              <label className="font-semibold text-slate-700 block mb-1">Age</label>
              <input
                required
                type="number"
                value={patientAge}
                onChange={e => setPatientAge(Number(e.target.value))}
                className="w-full p-2 bg-slate-50 border border-slate-200 rounded-xl outline-none text-slate-800"
              />
            </div>
          </div>

          <div>
            <label className="font-semibold text-slate-700 block mb-1">Phone Number</label>
            <input
              required
              value={patientPhone}
              onChange={e => setPatientPhone(e.target.value)}
              className="w-full p-2 bg-slate-50 border border-slate-200 rounded-xl outline-none text-slate-800 font-mono"
            />
          </div>

          <div>
            <label className="font-semibold text-slate-700 block mb-1">Symptoms / Reason for Visit *</label>
            <textarea
              required
              rows={2}
              value={symptoms}
              onChange={e => setSymptoms(e.target.value)}
              placeholder="e.g. Chest pain, headaches, high blood pressure..."
              className="w-full p-2 bg-slate-50 border border-slate-200 rounded-xl outline-none resize-none text-slate-800"
            />
          </div>

          <div className="flex justify-end gap-2 pt-2 border-t border-slate-100">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-slate-600 hover:bg-slate-100 font-semibold cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-5 py-2 bg-teal-700 hover:bg-teal-800 text-white font-bold rounded-xl shadow-xs transition-all cursor-pointer"
            >
              {loading ? 'Booking...' : 'Confirm Appointment'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
