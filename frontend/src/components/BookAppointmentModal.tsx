import React, { useState } from 'react';
import { api, MEDICAL_DOMAINS } from '../services/api';
import { AppointmentType } from '../types';
import {
  X,
  Calendar,
  Clock,
  User,
  HeartPulse,
  Stethoscope,
  Activity,
  CheckCircle2,
  Phone,
  Building2
} from 'lucide-react';

export const BookAppointmentModal: React.FC<{
  isOpen: boolean;
  initialMode?: AppointmentType;
  onClose: () => void;
  onSuccess: () => void;
}> = ({ isOpen, initialMode = 'SPECIALIST_CONSULTATION', onClose, onSuccess }) => {
  const [bookingMode, setBookingMode] = useState<AppointmentType>(initialMode);

  // Common Patient Fields
  const [patientName, setPatientName] = useState('Robert Chen');
  const [patientAge, setPatientAge] = useState<number>(52);
  const [patientGender, setPatientGender] = useState<'Male' | 'Female' | 'Other'>('Male');
  const [patientPhone, setPatientPhone] = useState('+1 (555) 234-8901');
  const [timeSlot, setTimeSlot] = useState('10:00 AM');
  const [date, setDate] = useState('Today');
  const [symptoms, setSymptoms] = useState('');

  // Specialist Domain Selection
  const [selectedDomainId, setSelectedDomainId] = useState<string>('cardio');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const selectedDomain = MEDICAL_DOMAINS.find(d => d.id === selectedDomainId) || MEDICAL_DOMAINS[0];

  const handleGeneralSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!symptoms.trim()) return;

    setLoading(true);
    await api.bookGeneralAppointment({
      patientName,
      patientAge,
      patientGender,
      patientPhone,
      symptoms,
      timeSlot,
      date
    });
    setLoading(false);
    setSymptoms('');
    onSuccess();
    onClose();
    alert(`General OPD Appointment Confirmed for ${patientName} (${timeSlot})! Token generated.`);
  };

  const handleSpecialistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!symptoms.trim()) return;

    setLoading(true);
    await api.bookSpecialistAppointment({
      domainId: selectedDomainId,
      patientName,
      patientAge,
      patientGender,
      patientPhone,
      symptoms,
      timeSlot,
      date
    });
    setLoading(false);
    setSymptoms('');
    onSuccess();
    onClose();
    alert(`Specialist Appointment with ${selectedDomain.doctorName} (${selectedDomain.name}) Confirmed!`);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-6 space-y-5 shadow-2xl border border-slate-200 text-xs font-sans max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-slate-100 pb-3">
          <div>
            <h3 className="font-extrabold text-base text-slate-900">Hospital Appointment Booking</h3>
            <p className="text-[11px] text-slate-500">St. Jude Medical Center • Select booking category below</p>
          </div>
          <button onClick={onClose} className="p-1 text-slate-400 hover:text-slate-600 rounded-lg cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 2 Distinct Mode Selectors */}
        <div className="grid grid-cols-2 gap-3 p-1.5 bg-slate-100 rounded-xl">
          <button
            type="button"
            onClick={() => setBookingMode('GENERAL_OPD')}
            className={`p-2.5 rounded-lg font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
              bookingMode === 'GENERAL_OPD'
                ? 'bg-white text-slate-900 shadow-xs border border-slate-200'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Building2 className="w-4 h-4 text-teal-700" />
            <div className="text-left">
              <span className="block font-bold">1. Normal General OPD</span>
              <span className="text-[10px] text-slate-500 font-normal">Checkup, Fever, Routine visit</span>
            </div>
          </button>

          <button
            type="button"
            onClick={() => setBookingMode('SPECIALIST_CONSULTATION')}
            className={`p-2.5 rounded-lg font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
              bookingMode === 'SPECIALIST_CONSULTATION'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Stethoscope className="w-4 h-4 text-emerald-400" />
            <div className="text-left">
              <span className="block font-bold">2. Specific Specialist Doctor</span>
              <span className={`text-[10px] font-normal ${bookingMode === 'SPECIALIST_CONSULTATION' ? 'text-slate-300' : 'text-slate-500'}`}>
                Cardiology, Neurology, Ortho, etc.
              </span>
            </div>
          </button>
        </div>

        {/* FORMAT 1: NORMAL GENERAL OPD BOOKING */}
        {bookingMode === 'GENERAL_OPD' && (
          <form onSubmit={handleGeneralSubmit} className="space-y-4">
            <div className="p-3 bg-teal-50 border border-teal-200 rounded-xl text-teal-900 space-y-0.5">
              <span className="font-bold block">Normal General OPD Consultation</span>
              <p className="text-[11px] text-teal-800">
                Assigned to On-Duty General Medical Officer for routine health issues, fever, cough, and initial diagnosis.
              </p>
            </div>

            {/* Patient Name, Age, Gender */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
              <div className="sm:col-span-6">
                <label className="font-semibold text-slate-700 block mb-1">Patient Name *</label>
                <input
                  required
                  value={patientName}
                  onChange={e => setPatientName(e.target.value)}
                  placeholder="Full Name"
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none text-slate-900 focus:bg-white focus:border-slate-800"
                />
              </div>

              <div className="sm:col-span-3">
                <label className="font-semibold text-slate-700 block mb-1">Age *</label>
                <input
                  required
                  type="number"
                  value={patientAge}
                  onChange={e => setPatientAge(Number(e.target.value))}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none text-slate-900 focus:bg-white focus:border-slate-800"
                />
              </div>

              <div className="sm:col-span-3">
                <label className="font-semibold text-slate-700 block mb-1">Gender *</label>
                <select
                  value={patientGender}
                  onChange={e => setPatientGender(e.target.value as any)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none text-slate-900 focus:bg-white focus:border-slate-800 font-medium"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {/* Phone Number & Time Slot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="font-semibold text-slate-700 block mb-1">Phone Number *</label>
                <input
                  required
                  value={patientPhone}
                  onChange={e => setPatientPhone(e.target.value)}
                  placeholder="+1 (555) 000-0000"
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none text-slate-900 font-mono focus:bg-white focus:border-slate-800"
                />
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">Preferred Time Slot *</label>
                <select
                  value={timeSlot}
                  onChange={e => setTimeSlot(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none text-slate-900 font-bold text-teal-800 focus:bg-white focus:border-slate-800"
                >
                  <option value="09:00 AM">09:00 AM (Morning OPD)</option>
                  <option value="10:00 AM">10:00 AM (Morning OPD)</option>
                  <option value="11:30 AM">11:30 AM (Morning OPD)</option>
                  <option value="02:00 PM">02:00 PM (Afternoon OPD)</option>
                  <option value="04:00 PM">04:00 PM (Evening OPD)</option>
                </select>
              </div>
            </div>

            {/* Issue / Symptoms */}
            <div>
              <label className="font-semibold text-slate-700 block mb-1">What is the Issue / Symptoms? *</label>
              <textarea
                required
                rows={2}
                value={symptoms}
                onChange={e => setSymptoms(e.target.value)}
                placeholder="Describe health issue (e.g. Mild fever, cold, seasonal allergies, body aches, routine health checkup)..."
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none resize-none text-slate-900 focus:bg-white focus:border-slate-800"
              />
            </div>

            <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">
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
                className="px-5 py-2.5 bg-teal-700 hover:bg-teal-800 text-white font-bold rounded-xl shadow-xs transition-all cursor-pointer"
              >
                {loading ? 'Booking...' : 'Confirm General Appointment'}
              </button>
            </div>
          </form>
        )}

        {/* FORMAT 2: SPECIALIST DOCTOR CONSULTATION BOOKING (SPECIFIC MEDICAL DOMAIN) */}
        {bookingMode === 'SPECIALIST_CONSULTATION' && (
          <form onSubmit={handleSpecialistSubmit} className="space-y-4">
            {/* Step 1: Specific Medical Domain Selector */}
            <div>
              <label className="font-bold text-slate-900 block mb-1.5">
                Select Medical Domain / Department (Specialist Doctor) *
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {MEDICAL_DOMAINS.map(domain => {
                  const isSelected = selectedDomainId === domain.id;
                  return (
                    <div
                      key={domain.id}
                      onClick={() => setSelectedDomainId(domain.id)}
                      className={`p-3 rounded-xl border cursor-pointer transition-all ${
                        isSelected
                          ? 'bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-slate-900/20'
                          : 'bg-slate-50 border-slate-200 hover:border-slate-300 hover:bg-slate-100 text-slate-800'
                      }`}
                    >
                      <span className="font-bold block text-xs line-clamp-1">{domain.name.split('&')[0].trim()}</span>
                      <span className={`text-[10px] block mt-0.5 font-medium line-clamp-1 ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                        {domain.doctorName.split(',')[0]}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Selected Specialist Info Box */}
            <div className="p-3.5 bg-blue-50/70 border border-blue-200 rounded-xl flex items-center justify-between text-xs">
              <div>
                <div className="flex items-center gap-2">
                  <Stethoscope className="w-4 h-4 text-blue-800 shrink-0" />
                  <h4 className="font-bold text-slate-900">{selectedDomain.doctorName}</h4>
                  <span className="text-[10px] font-mono bg-blue-100 text-blue-900 px-2 py-0.5 rounded font-bold">
                    {selectedDomain.experienceYears}y Exp
                  </span>
                </div>
                <p className="text-[11px] text-slate-600 mt-0.5">
                  {selectedDomain.qualification} • <strong>{selectedDomain.chamberNumber}</strong>
                </p>
              </div>
            </div>

            {/* Patient Name, Age, Gender */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
              <div className="sm:col-span-6">
                <label className="font-semibold text-slate-700 block mb-1">Patient Name *</label>
                <input
                  required
                  value={patientName}
                  onChange={e => setPatientName(e.target.value)}
                  placeholder="Full Name"
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none text-slate-900 focus:bg-white focus:border-slate-800"
                />
              </div>

              <div className="sm:col-span-3">
                <label className="font-semibold text-slate-700 block mb-1">Age *</label>
                <input
                  required
                  type="number"
                  value={patientAge}
                  onChange={e => setPatientAge(Number(e.target.value))}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none text-slate-900 focus:bg-white focus:border-slate-800"
                />
              </div>

              <div className="sm:col-span-3">
                <label className="font-semibold text-slate-700 block mb-1">Gender *</label>
                <select
                  value={patientGender}
                  onChange={e => setPatientGender(e.target.value as any)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none text-slate-900 focus:bg-white focus:border-slate-800 font-medium"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {/* Phone Number & Specialist Slot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="font-semibold text-slate-700 block mb-1">Phone Number *</label>
                <input
                  required
                  value={patientPhone}
                  onChange={e => setPatientPhone(e.target.value)}
                  placeholder="+1 (555) 000-0000"
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none text-slate-900 font-mono focus:bg-white focus:border-slate-800"
                />
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">Specialist Consultation Time Slot *</label>
                <select
                  value={timeSlot}
                  onChange={e => setTimeSlot(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none text-slate-900 font-bold text-blue-900 focus:bg-white focus:border-slate-800"
                >
                  <option value="10:00 AM">10:00 AM (Specialist Slot)</option>
                  <option value="11:15 AM">11:15 AM (Specialist Slot)</option>
                  <option value="02:30 PM">02:30 PM (Specialist Slot)</option>
                  <option value="03:45 PM">03:45 PM (Specialist Slot)</option>
                  <option value="05:00 PM">05:00 PM (Specialist Slot)</option>
                </select>
              </div>
            </div>

            {/* Specialist Medical Symptoms / Clinical Issue */}
            <div>
              <label className="font-semibold text-slate-700 block mb-1">
                Specific Medical Symptoms / Disease History ({selectedDomain.name}) *
              </label>
              <textarea
                required
                rows={2}
                value={symptoms}
                onChange={e => setSymptoms(e.target.value)}
                placeholder={`Describe specific symptoms for ${selectedDomain.name} (e.g. Chest pain, palpitations, hypertension history, scan reports)...`}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none resize-none text-slate-900 focus:bg-white focus:border-slate-800"
              />
            </div>

            <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">
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
                className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl shadow-xs transition-all cursor-pointer flex items-center gap-1.5"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>{loading ? 'Confirming...' : `Book ${selectedDomain.doctorName.split(' ')[0]} ${selectedDomain.doctorName.split(' ')[1]}`}</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
