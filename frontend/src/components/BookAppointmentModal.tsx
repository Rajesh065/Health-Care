import React, { useState, useEffect } from 'react';
import { api, MEDICAL_DOMAINS } from '../services/api';
import { AppointmentType, MedicalDomain } from '../types';
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
  Building2,
  Baby,
  Bone,
  Brain,
  Wind,
  Droplet
} from 'lucide-react';

const renderDomainIcon = (iconName: string, isSelected: boolean) => {
  const className = `w-4 h-4 ${isSelected ? 'text-white' : 'text-slate-700'}`;
  switch (iconName) {
    case 'HeartPulse': return <HeartPulse className={className} />;
    case 'Brain': return <Brain className={className} />;
    case 'Bone': return <Bone className={className} />;
    case 'Baby': return <Baby className={className} />;
    case 'Activity': return <Activity className={className} />;
    case 'Lungs':
    case 'Wind': return <Wind className={className} />;
    case 'Droplet': return <Droplet className={className} />;
    default: return <Stethoscope className={className} />;
  }
};

export const BookAppointmentModal: React.FC<{
  isOpen: boolean;
  initialMode?: AppointmentType;
  onClose: () => void;
  onSuccess: () => void;
}> = ({ isOpen, initialMode = 'GENERAL_OPD', onClose, onSuccess }) => {
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

  useEffect(() => {
    if (initialMode) {
      setBookingMode(initialMode);
    }
  }, [initialMode, isOpen]);

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
    <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4 font-sans">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-6 space-y-5 shadow-2xl border border-slate-200 text-xs max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-slate-100 pb-3">
          <div>
            <h3 className="font-extrabold text-base text-slate-900">Hospital Appointment Booking</h3>
            <p className="text-[11px] text-slate-500">St. Jude Medical Center • Select booking category below</p>
          </div>
          <button onClick={onClose} className="p-1 text-slate-400 hover:text-slate-600 rounded-lg cursor-pointer">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* 2 Distinct Mode Switcher Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setBookingMode('GENERAL_OPD')}
            className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
              bookingMode === 'GENERAL_OPD'
                ? 'bg-teal-50/80 border-teal-600 shadow-xs'
                : 'bg-slate-50 border-slate-200 hover:bg-slate-100 opacity-70'
            }`}
          >
            <div className="flex items-center gap-2">
              <div className={`p-1.5 rounded-lg ${bookingMode === 'GENERAL_OPD' ? 'bg-teal-600 text-white' : 'bg-slate-200 text-slate-700'}`}>
                <Building2 className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-slate-900 block text-xs">1. General OPD</span>
                <span className="text-[10px] text-slate-500 block">General Duty Doctor • Fever, Cold, Checkups</span>
              </div>
            </div>
          </button>

          <button
            type="button"
            onClick={() => setBookingMode('SPECIALIST_CONSULTATION')}
            className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
              bookingMode === 'SPECIALIST_CONSULTATION'
                ? 'bg-blue-50/80 border-blue-600 shadow-xs'
                : 'bg-slate-50 border-slate-200 hover:bg-slate-100 opacity-70'
            }`}
          >
            <div className="flex items-center gap-2">
              <div className={`p-1.5 rounded-lg ${bookingMode === 'SPECIALIST_CONSULTATION' ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-700'}`}>
                <Stethoscope className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-slate-900 block text-xs">2. Specialist Doctor</span>
                <span className="text-[10px] text-slate-500 block">Cardiology, Ortho, Neuro, etc.</span>
              </div>
            </div>
          </button>
        </div>

        {/* FORMAT 1: GENERAL OPD BOOKING */}
        {bookingMode === 'GENERAL_OPD' && (
          <form onSubmit={handleGeneralSubmit} className="space-y-4">
            <div className="p-3 bg-teal-50/50 rounded-xl border border-teal-200 flex items-center gap-2 text-teal-950 font-semibold text-[11px]">
              <Building2 className="w-4 h-4 text-teal-700 shrink-0" />
              <span>General OPD consultation with On-Duty General Physician at Central Hospital OPD Desk.</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="font-semibold text-slate-700 block mb-1">Patient Full Name *</label>
                <input
                  required
                  value={patientName}
                  onChange={e => setPatientName(e.target.value)}
                  placeholder="Enter patient full name"
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none text-slate-900 font-medium focus:bg-white focus:border-slate-800"
                />
              </div>

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
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              <div>
                <label className="font-semibold text-slate-700 block mb-1">Patient Age *</label>
                <input
                  required
                  type="number"
                  min={1}
                  max={120}
                  value={patientAge}
                  onChange={e => setPatientAge(Number(e.target.value))}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none text-slate-900 font-medium focus:bg-white focus:border-slate-800"
                />
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">Gender *</label>
                <select
                  value={patientGender}
                  onChange={e => setPatientGender(e.target.value as any)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none text-slate-900 font-medium focus:bg-white focus:border-slate-800"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">Date *</label>
                <input
                  required
                  value={date}
                  onChange={e => setDate(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none text-slate-900 font-medium focus:bg-white focus:border-slate-800"
                />
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">Time Slot *</label>
                <select
                  value={timeSlot}
                  onChange={e => setTimeSlot(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none text-slate-900 font-bold text-teal-800 focus:bg-white focus:border-slate-800"
                >
                  <option value="09:00 AM">09:00 AM</option>
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="11:30 AM">11:30 AM</option>
                  <option value="02:00 PM">02:00 PM</option>
                  <option value="04:00 PM">04:00 PM</option>
                </select>
              </div>
            </div>

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

        {/* FORMAT 2: SPECIALIST DOCTOR CONSULTATION BOOKING */}
        {bookingMode === 'SPECIALIST_CONSULTATION' && (
          <form onSubmit={handleSpecialistSubmit} className="space-y-4">
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
                      <div className="flex items-center gap-1.5 mb-1">
                        {renderDomainIcon(domain.iconName, isSelected)}
                        <span className="font-bold block text-xs line-clamp-1">{domain.name.split('&')[0].trim()}</span>
                      </div>
                      <span className={`text-[10px] block mt-0.5 font-medium line-clamp-1 ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                        {domain.doctorName.split(',')[0]}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Selected Specialist Doctor Preview Card */}
            <div className="p-3 bg-blue-50/70 rounded-xl border border-blue-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold text-sm shadow-xs">
                  {selectedDomain.doctorName.split(' ')[1]?.charAt(0) || 'D'}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xs">{selectedDomain.doctorName}</h4>
                  <p className="text-[11px] text-blue-900 font-medium">{selectedDomain.qualification} • {selectedDomain.experienceYears} Years Exp</p>
                  <p className="text-[10px] text-slate-500">{selectedDomain.chamberNumber}</p>
                </div>
              </div>
              <span className="text-[10px] font-bold bg-blue-100 text-blue-900 px-2 py-1 rounded-lg">
                Selected
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="font-semibold text-slate-700 block mb-1">Patient Full Name *</label>
                <input
                  required
                  value={patientName}
                  onChange={e => setPatientName(e.target.value)}
                  placeholder="Enter patient full name"
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none text-slate-900 font-medium focus:bg-white focus:border-slate-800"
                />
              </div>

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
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              <div>
                <label className="font-semibold text-slate-700 block mb-1">Age *</label>
                <input
                  required
                  type="number"
                  min={1}
                  max={120}
                  value={patientAge}
                  onChange={e => setPatientAge(Number(e.target.value))}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none text-slate-900 font-medium focus:bg-white focus:border-slate-800"
                />
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">Gender *</label>
                <select
                  value={patientGender}
                  onChange={e => setPatientGender(e.target.value as any)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none text-slate-900 font-medium focus:bg-white focus:border-slate-800"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">Date *</label>
                <input
                  required
                  value={date}
                  onChange={e => setDate(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none text-slate-900 font-medium focus:bg-white focus:border-slate-800"
                />
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">Time Slot *</label>
                <select
                  value={timeSlot}
                  onChange={e => setTimeSlot(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none text-slate-900 font-bold text-blue-900 focus:bg-white focus:border-slate-800"
                >
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="11:30 AM">11:30 AM</option>
                  <option value="02:00 PM">02:00 PM</option>
                  <option value="03:30 PM">03:30 PM</option>
                  <option value="05:00 PM">05:00 PM</option>
                </select>
              </div>
            </div>

            <div>
              <label className="font-semibold text-slate-700 block mb-1">Specific Symptoms / Medical Condition *</label>
              <textarea
                required
                rows={2}
                value={symptoms}
                onChange={e => setSymptoms(e.target.value)}
                placeholder="Describe specific symptoms (e.g. Sharp chest pain during exertion, post-fracture joint stiffness, neurological tremors)..."
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
                className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl shadow-xs transition-all cursor-pointer"
              >
                {loading ? 'Confirming...' : 'Confirm Specialist Appointment'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
