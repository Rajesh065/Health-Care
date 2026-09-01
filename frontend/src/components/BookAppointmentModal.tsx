import React, { useState } from 'react';
import { api } from '../services/api';
import { X, Calendar, Clock, User, Stethoscope, Building2, CheckCircle2, ShieldCheck } from 'lucide-react';

export const BookAppointmentModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  onBooked: () => void;
}> = ({ isOpen, onClose, onBooked }) => {
  const [department, setDepartment] = useState('Cardiology & Heart Health');
  const [doctorName, setDoctorName] = useState('Dr. Maya Lin, MD, FACC');
  const [slotTime, setSlotTime] = useState('10:30 AM');
  const [appointmentDate, setAppointmentDate] = useState('Tomorrow (Sept 02, 2026)');
  const [patientName, setPatientName] = useState('Robert Chen');
  const [patientEmail, setPatientEmail] = useState('robert.chen@gmail.com');
  const [patientPhone, setPatientPhone] = useState('+1 (555) 234-8901');
  const [symptoms, setSymptoms] = useState('');
  const [insuranceProvider, setInsuranceProvider] = useState('BlueCross BlueShield Premier');
  const [policyNumber, setPolicyNumber] = useState('BCBS-9048-2810');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleDeptChange = (dept: string) => {
    setDepartment(dept);
    if (dept.includes('Cardiology')) {
      setDoctorName('Dr. Maya Lin, MD, FACC');
    } else if (dept.includes('Neurology')) {
      setDoctorName('Dr. David Kim, MD, PhD');
    } else if (dept.includes('Orthopedics')) {
      setDoctorName('Dr. Sarah Jenkins, MD');
    } else {
      setDoctorName('Dr. Arthur Sterling, MD, FACS');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!symptoms.trim()) return;

    setIsSubmitting(true);
    try {
      await api.bookAppointment({
        patientName,
        patientEmail,
        patientPhone,
        department,
        doctorName,
        doctorSpecialty: department.split('&')[0].trim(),
        roomNumber: department.includes('Cardiology') ? 'Chamber 204' : 'Chamber 108',
        appointmentDate,
        slotTime,
        symptoms,
        insuranceProvider,
        policyNumber
      });

      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setIsSubmitting(false);
        setSymptoms('');
        onBooked();
        onClose();
      }, 700);
    } catch (err) {
      alert('Error booking appointment');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 space-y-4 shadow-2xl border border-slate-200">
        <div className="flex justify-between items-center border-b border-slate-100 pb-3">
          <div>
            <h3 className="font-bold text-base text-slate-900">Book Doctor Consultation</h3>
            <p className="text-[11px] text-slate-500">St. Jude Medical Center • Specialist Outpatient Booking</p>
          </div>
          <button onClick={onClose} className="p-1 text-slate-400 hover:text-slate-600 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSuccess ? (
          <div className="py-8 text-center space-y-2">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto animate-bounce" />
            <h4 className="font-bold text-base text-slate-900">Appointment Booked Successfully!</h4>
            <p className="text-xs text-slate-500">
              Token generated and routed to <strong>{doctorName}</strong> ({slotTime}).
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3 text-xs">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="font-semibold text-slate-700 block mb-1">Clinical Specialty</label>
                <select
                  value={department}
                  onChange={e => handleDeptChange(e.target.value)}
                  className="w-full p-2 bg-slate-50 border border-slate-200 rounded-xl outline-none text-slate-800 font-semibold"
                >
                  <option value="Cardiology & Heart Health">Cardiology (Heart & Chest)</option>
                  <option value="Neurology & Spine">Neurology & Spine Care</option>
                  <option value="Orthopedics & Joint Surgery">Orthopedics & Joint Care</option>
                  <option value="General & Internal Medicine">General Internal Medicine</option>
                </select>
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">Assigned Specialist Doctor</label>
                <input
                  readOnly
                  value={doctorName}
                  className="w-full p-2 bg-slate-100 border border-slate-200 rounded-xl outline-none text-slate-800 font-bold"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="font-semibold text-slate-700 block mb-1">Preferred Date</label>
                <select
                  value={appointmentDate}
                  onChange={e => setAppointmentDate(e.target.value)}
                  className="w-full p-2 bg-slate-50 border border-slate-200 rounded-xl outline-none text-slate-800"
                >
                  <option value="Today (Walk-in Slot)">Today (Walk-in Emergency Slot)</option>
                  <option value="Tomorrow (Sept 02, 2026)">Tomorrow (Sept 02, 2026)</option>
                  <option value="Thursday (Sept 03, 2026)">Thursday (Sept 03, 2026)</option>
                  <option value="Friday (Sept 04, 2026)">Friday (Sept 04, 2026)</option>
                </select>
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">Consultation Time Slot</label>
                <select
                  value={slotTime}
                  onChange={e => setSlotTime(e.target.value)}
                  className="w-full p-2 bg-slate-50 border border-slate-200 rounded-xl outline-none text-slate-800 font-mono font-bold text-teal-800"
                >
                  <option value="09:00 AM">09:00 AM (Morning Slot 1)</option>
                  <option value="10:30 AM">10:30 AM (Morning Slot 2)</option>
                  <option value="02:00 PM">02:00 PM (Afternoon Slot 1)</option>
                  <option value="04:30 PM">04:30 PM (Evening Slot 2)</option>
                </select>
              </div>
            </div>

            <div className="bg-slate-50/70 p-3 rounded-xl border border-slate-200 space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-semibold text-slate-700 block mb-1">Patient Full Name</label>
                  <input
                    required
                    value={patientName}
                    onChange={e => setPatientName(e.target.value)}
                    className="w-full p-2 bg-white border border-slate-200 rounded-xl outline-none text-slate-800 font-medium"
                  />
                </div>

                <div>
                  <label className="font-semibold text-slate-700 block mb-1">Contact Phone</label>
                  <input
                    required
                    value={patientPhone}
                    onChange={e => setPatientPhone(e.target.value)}
                    className="w-full p-2 bg-white border border-slate-200 rounded-xl outline-none text-slate-800 font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-semibold text-slate-700 block mb-1">Insurance Provider</label>
                  <input
                    value={insuranceProvider}
                    onChange={e => setInsuranceProvider(e.target.value)}
                    className="w-full p-2 bg-white border border-slate-200 rounded-xl outline-none text-slate-800 text-[11px]"
                  />
                </div>

                <div>
                  <label className="font-semibold text-slate-700 block mb-1">Policy / Member ID</label>
                  <input
                    value={policyNumber}
                    onChange={e => setPolicyNumber(e.target.value)}
                    className="w-full p-2 bg-white border border-slate-200 rounded-xl outline-none text-slate-800 font-mono text-[11px]"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="font-semibold text-slate-700 block mb-1">Chief Health Complaint / Symptoms *</label>
              <textarea
                required
                rows={2}
                value={symptoms}
                onChange={e => setSymptoms(e.target.value)}
                placeholder="Describe your symptoms (e.g. chest heaviness on exertion, shortness of breath, headache)..."
                className="w-full p-2 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-800 resize-none text-xs"
              />
            </div>

            <div className="flex justify-end gap-2 pt-3 border-t border-slate-100">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-slate-600 hover:bg-slate-100 font-semibold"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold flex items-center gap-1.5 shadow-xs transition-all disabled:opacity-50"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>{isSubmitting ? 'Confirming...' : 'Confirm Appointment'}</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
