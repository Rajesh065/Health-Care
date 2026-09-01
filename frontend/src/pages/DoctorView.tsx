import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { Appointment } from '../types';
import { Stethoscope, CheckCircle2, Pill } from 'lucide-react';

export const DoctorView: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [selectedApt, setSelectedApt] = useState<Appointment | null>(null);
  const [prescriptionText, setPrescriptionText] = useState('');

  const load = () => {
    api.getAppointments().then(data => {
      const docList = data.filter(a => a.doctorName.includes('Maya') || a.department.includes('Cardiology'));
      setAppointments(docList);
      if (docList.length > 0 && !selectedApt) setSelectedApt(docList[0]);
    });
  };

  useEffect(() => {
    load();
    window.addEventListener('medflow_sync', load);
    return () => window.removeEventListener('medflow_sync', load);
  }, []);

  const handlePrescribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedApt || !prescriptionText.trim()) return;

    await api.addPrescription(selectedApt.id, prescriptionText);
    setPrescriptionText('');
    alert(`Prescription saved for ${selectedApt.patientName}. Patient can now view it!`);
  };

  return (
    <div className="space-y-4">
      <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs flex justify-between items-center">
        <div>
          <h2 className="font-bold text-base text-slate-900">Dr. Maya Lin — Patient Consultation Queue</h2>
          <p className="text-xs text-slate-500">Division of Cardiology</p>
        </div>
        <span className="text-xs font-bold bg-blue-50 text-blue-900 border border-blue-200 px-2.5 py-1 rounded-xl">
          {appointments.length} Patients Today
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
        {/* Patient Queue */}
        <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-4 shadow-xs space-y-2">
          <span className="font-bold text-xs text-slate-900 block pb-2 border-b border-slate-100">
            Waiting Patients
          </span>
          <div className="space-y-2">
            {appointments.map(a => {
              const isSelected = selectedApt?.id === a.id;
              return (
                <div
                  key={a.id}
                  onClick={() => { setSelectedApt(a); setPrescriptionText(a.prescription || ''); }}
                  className={`p-3 rounded-xl cursor-pointer border transition-all text-xs ${
                    isSelected ? 'bg-blue-50/60 border-blue-700 shadow-xs' : 'bg-white border-slate-100 hover:border-slate-300'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <span className="font-mono font-bold text-[10px] bg-slate-900 text-white px-1.5 py-0.2 rounded">{a.tokenNumber}</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">{a.status}</span>
                  </div>
                  <h4 className="font-bold text-slate-900 mt-1">{a.patientName} ({a.patientAge}y)</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">{a.symptoms}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Diagnosis & Prescription Note */}
        {selectedApt ? (
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4 text-xs">
            <div className="border-b border-slate-100 pb-3">
              <span className="font-mono font-bold text-[10px] bg-blue-50 text-blue-900 px-2 py-0.5 rounded">{selectedApt.tokenNumber}</span>
              <h3 className="font-bold text-base text-slate-900 mt-1">{selectedApt.patientName}</h3>
              <p className="text-slate-500">Phone: {selectedApt.patientPhone} • Slot: {selectedApt.timeSlot}</p>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <span className="font-bold text-slate-700 block mb-1">Reported Symptoms:</span>
              <p className="text-slate-900">{selectedApt.symptoms}</p>
            </div>

            <form onSubmit={handlePrescribe} className="space-y-3">
              <label className="font-bold text-slate-800 block">Doctor's Clinical Prescription & Advice</label>
              <textarea
                rows={3}
                required
                value={prescriptionText}
                onChange={e => setPrescriptionText(e.target.value)}
                placeholder="e.g. Tab Atorvastatin 20mg once daily at night. Avoid heavy exertion for 1 week."
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none text-slate-900 resize-none text-xs"
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs px-4 py-2 rounded-xl flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <Pill className="w-3.5 h-3.5" />
                  <span>Save Prescription & Complete</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-12 text-center text-xs text-slate-500">
            Select a patient from the queue.
          </div>
        )}
      </div>
    </div>
  );
};
