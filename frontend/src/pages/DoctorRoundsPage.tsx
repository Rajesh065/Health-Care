import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { InpatientRecord, PrescriptionOrder } from '../types';
import {
  Stethoscope,
  HeartPulse,
  Activity,
  Pill,
  FileText,
  CheckCircle2,
  AlertCircle,
  Plus,
  Send,
  Thermometer,
  Wind
} from 'lucide-react';

export const DoctorRoundsPage: React.FC = () => {
  const [inpatients, setInpatients] = useState<InpatientRecord[]>([]);
  const [selectedPatient, setSelectedPatient] = useState<InpatientRecord | null>(null);
  const [prescriptions, setPrescriptions] = useState<PrescriptionOrder[]>([]);
  const [newMedName, setNewMedName] = useState('');
  const [newDosage, setNewDosage] = useState('');

  useEffect(() => {
    api.getInpatients().then(data => {
      setInpatients(data);
      if (data.length > 0) setSelectedPatient(data[0]);
    });
    api.getPrescriptions().then(setPrescriptions);
  }, []);

  const handleAddMed = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMedName.trim() || !selectedPatient) return;

    const newRx: PrescriptionOrder = {
      id: `rx-${Date.now()}`,
      patientName: selectedPatient.name,
      doctorName: 'Dr. Maya Lin, MD, FACC',
      medicationName: newMedName,
      dosage: newDosage || '10 mg Daily',
      frequency: 'Once Daily',
      durationDays: 30,
      timing: 'Take after meals',
      instructions: 'Cardioprotective order',
      prescribedDate: 'Just now',
      refillsLeft: 2
    };

    setPrescriptions([newRx, ...prescriptions]);
    setNewMedName('');
    setNewDosage('');
    alert(`Prescribed ${newRx.medicationName} (${newRx.dosage}) to ${selectedPatient.name}.`);
  };

  return (
    <div className="space-y-4 py-2 w-full">
      <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs flex flex-wrap justify-between items-center gap-4 w-full">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-900 text-white rounded-xl">
            <Stethoscope className="w-4 h-4" />
          </div>
          <div>
            <h2 className="font-bold text-base text-slate-900">Physician Clinical Rounds & EMR Workspace</h2>
            <p className="text-[11px] text-slate-500">Dr. Maya Lin, MD • Division of Interventional Cardiology</p>
          </div>
        </div>

        <div className="flex items-center gap-6 text-xs">
          <div>
            <span className="text-slate-400 block font-mono text-[10px]">MY ASSIGNED INPATIENTS</span>
            <span className="font-bold text-slate-900 text-sm">{inpatients.length} Patients</span>
          </div>
          <div className="h-6 w-px bg-slate-200"></div>
          <div>
            <span className="text-slate-400 block font-mono text-[10px]">CRITICAL ICU WATCH</span>
            <span className="font-bold text-rose-700 text-sm">1 Patient</span>
          </div>
          <div className="h-6 w-px bg-slate-200"></div>
          <div>
            <span className="text-slate-400 block font-mono text-[10px]">CHAMBER CONSULTATIONS</span>
            <span className="font-bold text-teal-700 text-sm">6 Scheduled</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start w-full">
        <div className="lg:col-span-4 bg-white border border-slate-200 rounded-2xl p-4 shadow-xs space-y-3">
          <div className="flex justify-between items-center border-b border-slate-100 pb-2.5">
            <span className="font-bold text-xs text-slate-900 font-mono uppercase tracking-wider">
              My Patient Ward ({inpatients.length})
            </span>
            <span className="text-[10px] text-slate-400 font-mono">Real-Time Vitals</span>
          </div>

          <div className="space-y-2">
            {inpatients.map(inp => {
              const isSelected = selectedPatient?.id === inp.id;
              return (
                <div
                  key={inp.id}
                  onClick={() => setSelectedPatient(inp)}
                  className={`p-3 rounded-xl cursor-pointer transition-all border ${
                    isSelected
                      ? 'bg-blue-50/50 border-blue-900 shadow-xs ring-1 ring-blue-900/10'
                      : 'bg-white border-slate-100 hover:border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <span className="font-mono text-[10px] font-bold text-slate-500">{inp.bedNumber}</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                      inp.status === 'CRITICAL' ? 'bg-rose-100 text-rose-800' : 'bg-emerald-100 text-emerald-800'
                    }`}>
                      {inp.status}
                    </span>
                  </div>

                  <h4 className="font-bold text-xs text-slate-900 mt-1">{inp.name} ({inp.age}y)</h4>
                  <p className="text-[11px] text-slate-500 line-clamp-1">{inp.primaryDiagnosis}</p>

                  <div className="flex justify-between items-center mt-2 pt-2 border-t border-slate-100 text-[10px] font-mono text-slate-400">
                    <span className="text-blue-900 font-bold">HR: {inp.vitals.heartRateBpm} bpm</span>
                    <span className="text-slate-800 font-bold">BP: {inp.vitals.bloodPressure}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {selectedPatient ? (
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
            <div className="border-b border-slate-100 pb-3 flex justify-between items-start">
              <div>
                <span className="text-[10px] font-mono font-bold text-blue-800 uppercase bg-blue-50 px-2 py-0.5 rounded">
                  {selectedPatient.patientId} • {selectedPatient.roomNumber} ({selectedPatient.bedNumber})
                </span>
                <h3 className="font-bold text-base text-slate-900 mt-1">{selectedPatient.name}</h3>
                <p className="text-[11px] text-slate-500 mt-0.5">Admitted: <strong>{selectedPatient.admissionDate}</strong></p>
              </div>

              <span className={`text-xs font-bold px-2.5 py-1 rounded-xl ${
                selectedPatient.status === 'CRITICAL' ? 'bg-rose-100 text-rose-800' : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
              }`}>
                {selectedPatient.status}
              </span>
            </div>

            <div className="grid grid-cols-4 gap-2 bg-slate-50 p-3 rounded-xl border border-slate-200 font-mono text-xs text-center">
              <div className="p-2 bg-white rounded-lg border border-slate-200">
                <span className="text-[10px] text-slate-400 block">HEART RATE</span>
                <span className="font-black text-slate-900 text-sm">{selectedPatient.vitals.heartRateBpm} bpm</span>
              </div>
              <div className="p-2 bg-white rounded-lg border border-slate-200">
                <span className="text-[10px] text-slate-400 block">BLOOD PRESS.</span>
                <span className="font-black text-slate-900 text-sm">{selectedPatient.vitals.bloodPressure}</span>
              </div>
              <div className="p-2 bg-white rounded-lg border border-slate-200">
                <span className="text-[10px] text-slate-400 block">O2 SAT (SpO2)</span>
                <span className="font-black text-emerald-700 text-sm">{selectedPatient.vitals.spo2Percent}%</span>
              </div>
              <div className="p-2 bg-white rounded-lg border border-slate-200">
                <span className="text-[10px] text-slate-400 block">TEMP</span>
                <span className="font-black text-slate-900 text-sm">{selectedPatient.vitals.temperatureF}°F</span>
              </div>
            </div>

            <div className="p-3.5 bg-blue-50/50 border border-blue-200 rounded-xl space-y-1 text-xs">
              <span className="font-bold text-blue-950 block">Laboratory Biomarkers & Cardiac Enzymes</span>
              <div className="grid grid-cols-2 gap-2 text-[11px] pt-1 text-slate-700">
                <div>• Cardiac Troponin: <strong className="text-slate-900">{selectedPatient.labBiomarkers.troponinNgMl} ng/mL</strong></div>
                <div>• Serum Creatinine: <strong className="text-slate-900">{selectedPatient.labBiomarkers.creatinineMgDl} mg/dL</strong></div>
                <div>• Total WBC Count: <strong className="text-slate-900">{selectedPatient.labBiomarkers.wbcCountK} k/uL</strong></div>
                <div>• Fasting Glucose: <strong className="text-slate-900">{selectedPatient.labBiomarkers.glucoseMgDl} mg/dL</strong></div>
              </div>
            </div>

            <form onSubmit={handleAddMed} className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2 text-xs">
              <span className="font-bold text-slate-900 block">E-Prescribe Medication to Patient</span>
              <div className="grid grid-cols-2 gap-2">
                <input
                  required
                  placeholder="Medication (e.g. Clopidogrel)..."
                  value={newMedName}
                  onChange={e => setNewMedName(e.target.value)}
                  className="p-2 bg-white border border-slate-200 rounded-lg outline-none text-xs text-slate-800"
                />
                <input
                  placeholder="Dosage (e.g. 75mg Once Daily)..."
                  value={newDosage}
                  onChange={e => setNewDosage(e.target.value)}
                  className="p-2 bg-white border border-slate-200 rounded-lg outline-none text-xs text-slate-800"
                />
              </div>
              <div className="flex justify-end pt-1">
                <button
                  type="submit"
                  className="bg-blue-900 hover:bg-blue-800 text-white font-bold text-[11px] px-3.5 py-1.5 rounded-lg flex items-center gap-1 shadow-xs"
                >
                  <Pill className="w-3 h-3" />
                  <span>Order Medication</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-12 text-center text-xs text-slate-500">
            Select a patient from the ward list.
          </div>
        )}

        <div className="lg:col-span-3 bg-white border border-slate-200 rounded-2xl p-4 shadow-xs space-y-3 text-xs">
          <div className="border-b border-slate-100 pb-2">
            <span className="font-bold text-xs text-slate-900 font-mono uppercase">Active Prescriptions</span>
          </div>

          <div className="space-y-2 max-h-[500px] overflow-y-auto">
            {prescriptions.map(rx => (
              <div key={rx.id} className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-slate-900">{rx.medicationName}</span>
                  <span className="text-[9px] font-mono bg-blue-100 text-blue-900 px-1.5 py-0.2 rounded font-bold">{rx.dosage}</span>
                </div>
                <p className="text-[11px] text-slate-500">{rx.frequency} • {rx.timing}</p>
                <div className="pt-1 border-t border-slate-200/50 flex justify-between text-[10px] text-slate-400">
                  <span>Refills: {rx.refillsLeft}</span>
                  <span>{rx.prescribedDate}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
