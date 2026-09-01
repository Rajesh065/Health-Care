import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { InpatientRecord, PrescriptionOrder, PatientAppointment } from '../types';
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
  Calendar,
  Clock,
  User
} from 'lucide-react';

export const DoctorRoundsPage: React.FC<{ activeSubTab?: string }> = ({ activeSubTab }) => {
  const [inpatients, setInpatients] = useState<InpatientRecord[]>([]);
  const [selectedPatient, setSelectedPatient] = useState<InpatientRecord | null>(null);
  const [prescriptions, setPrescriptions] = useState<PrescriptionOrder[]>([]);
  const [consultations, setConsultations] = useState<PatientAppointment[]>([]);
  const [newMedName, setNewMedName] = useState('');
  const [newDosage, setNewDosage] = useState('');
  const [newTiming, setNewTiming] = useState('Take after dinner');

  const loadData = () => {
    api.getInpatients().then(data => {
      setInpatients(data);
      if (data.length > 0 && !selectedPatient) setSelectedPatient(data[0]);
    });
    api.getPrescriptions().then(setPrescriptions);
    api.getAppointments().then(data => {
      setConsultations(data.filter(a => a.doctorName.includes('Maya') || a.department.includes('Cardiology')));
    });
  };

  useEffect(() => {
    loadData();
    window.addEventListener('medflow_data_updated', loadData);
    return () => window.removeEventListener('medflow_data_updated', loadData);
  }, []);

  const handleAddMed = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMedName.trim() || !selectedPatient) return;

    await api.createPrescription({
      patientName: selectedPatient.name,
      doctorName: 'Dr. Maya Lin, MD, FACC',
      medicationName: newMedName,
      dosage: newDosage || '10 mg Daily',
      frequency: 'Once Daily',
      durationDays: 30,
      timing: newTiming,
      instructions: 'Cardioprotective clinical order'
    });

    setNewMedName('');
    setNewDosage('');
    alert(`Prescribed ${newMedName} (${newDosage || '10 mg'}) to ${selectedPatient.name}. Synced to Patient Portal!`);
  };

  return (
    <div className="space-y-5 py-2 w-full font-sans">
      {/* Doctor Header Banner */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs flex flex-wrap justify-between items-center gap-4 w-full">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-blue-50 text-blue-900 rounded-xl border border-blue-200">
            <Stethoscope className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-bold text-base text-slate-900">Dr. Maya Lin, MD, FACC — Clinical Rounds & EMR</h2>
              <span className="text-[10px] font-bold bg-blue-50 text-blue-900 border border-blue-200 px-2 py-0.5 rounded font-mono">
                CHIEF OF CARDIOLOGY
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">Division of Interventional Cardiology & Cardiac Critical Care</p>
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
            <span className="text-slate-400 block font-mono text-[10px]">TODAY'S CHAMBER SCHEDULE</span>
            <span className="font-bold text-teal-800 text-sm">{consultations.length} Consultations</span>
          </div>
        </div>
      </div>

      {activeSubTab === 'doctor-consultations' ? (
        /* Doctor Chamber Consultation Schedule Sub-view */
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
          <div className="flex justify-between items-center border-b border-slate-100 pb-3">
            <div>
              <h3 className="font-bold text-sm text-slate-900">Today's Specialist Chamber Schedule (Chamber 204)</h3>
              <p className="text-xs text-slate-500">Live outpatient token queue assigned to Dr. Maya Lin</p>
            </div>
            <span className="text-xs font-mono font-bold bg-slate-100 text-slate-800 px-2.5 py-1 rounded-lg">
              {consultations.length} Scheduled Visits
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {consultations.map(c => (
              <div key={c.id} className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2 text-xs">
                <div className="flex justify-between items-start">
                  <span className="font-mono font-bold text-[10px] bg-slate-900 text-white px-2 py-0.5 rounded">
                    {c.tokenNumber}
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-900 border border-blue-200">
                    {c.slotTime}
                  </span>
                </div>
                <h4 className="font-bold text-slate-900 text-sm">{c.patientName} ({c.patientAge}y, {c.patientGender})</h4>
                <p className="text-[11px] text-slate-600 bg-white p-2 rounded-lg border border-slate-200/60">
                  <strong>Complaint:</strong> {c.symptoms}
                </p>
                <div className="flex justify-between items-center text-[10px] font-mono text-slate-500 pt-1">
                  <span>PHONE: {c.patientPhone}</span>
                  <span className="text-emerald-700 font-bold">● {c.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* Clinical Rounds Main View */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start w-full">
          {/* Left: Ward Patient List */}
          <div className="lg:col-span-4 bg-white border border-slate-200 rounded-2xl p-4 shadow-xs space-y-3">
            <div className="flex justify-between items-center border-b border-slate-100 pb-2.5">
              <span className="font-bold text-xs text-slate-900 font-mono uppercase tracking-wider">
                My Inpatient Ward ({inpatients.length})
              </span>
              <span className="text-[10px] text-slate-400 font-mono">Live Telemetry</span>
            </div>

            <div className="space-y-2">
              {inpatients.map(inp => {
                const isSelected = selectedPatient?.id === inp.id;
                return (
                  <div
                    key={inp.id}
                    onClick={() => setSelectedPatient(inp)}
                    className={`p-3.5 rounded-xl cursor-pointer transition-all border ${
                      isSelected
                        ? 'bg-blue-50/50 border-blue-900 shadow-xs ring-1 ring-blue-900/10'
                        : 'bg-white border-slate-100 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <span className="font-mono text-[10px] font-bold text-slate-500">{inp.bedNumber}</span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                        inp.status === 'CRITICAL'
                          ? 'bg-rose-50 text-rose-800 border border-rose-200'
                          : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
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

          {/* Center: Live Vitals & E-Prescribe Order Writer */}
          {selectedPatient ? (
            <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
              <div className="border-b border-slate-100 pb-3 flex justify-between items-start">
                <div>
                  <span className="text-[10px] font-mono font-bold text-blue-900 uppercase bg-blue-50 border border-blue-200 px-2 py-0.5 rounded">
                    {selectedPatient.patientId} • {selectedPatient.roomNumber} ({selectedPatient.bedNumber})
                  </span>
                  <h3 className="font-bold text-base text-slate-900 mt-1.5">{selectedPatient.name}</h3>
                  <p className="text-[11px] text-slate-500 mt-0.5">Admitted: <strong>{selectedPatient.admissionDate}</strong></p>
                </div>

                <span className={`text-xs font-bold px-2.5 py-1 rounded-xl ${
                  selectedPatient.status === 'CRITICAL'
                    ? 'bg-rose-50 text-rose-800 border border-rose-200'
                    : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                }`}>
                  {selectedPatient.status}
                </span>
              </div>

              {/* Vitals Telemetry Matrix */}
              <div className="grid grid-cols-4 gap-2 bg-slate-50 p-3 rounded-xl border border-slate-200 font-mono text-xs text-center">
                <div className="p-2 bg-white rounded-lg border border-slate-200 shadow-2xs">
                  <span className="text-[10px] text-slate-400 block">HEART RATE</span>
                  <span className="font-black text-slate-900 text-sm">{selectedPatient.vitals.heartRateBpm} bpm</span>
                </div>
                <div className="p-2 bg-white rounded-lg border border-slate-200 shadow-2xs">
                  <span className="text-[10px] text-slate-400 block">BLOOD PRESS.</span>
                  <span className="font-black text-slate-900 text-sm">{selectedPatient.vitals.bloodPressure}</span>
                </div>
                <div className="p-2 bg-white rounded-lg border border-slate-200 shadow-2xs">
                  <span className="text-[10px] text-slate-400 block">O2 SAT (SpO2)</span>
                  <span className="font-black text-emerald-700 text-sm">{selectedPatient.vitals.spo2Percent}%</span>
                </div>
                <div className="p-2 bg-white rounded-lg border border-slate-200 shadow-2xs">
                  <span className="text-[10px] text-slate-400 block">TEMP</span>
                  <span className="font-black text-slate-900 text-sm">{selectedPatient.vitals.temperatureF}°F</span>
                </div>
              </div>

              {/* Lab Biomarkers */}
              <div className="p-3.5 bg-blue-50/50 border border-blue-200 rounded-xl space-y-1 text-xs">
                <span className="font-bold text-blue-950 block">Laboratory Biomarkers & Cardiac Enzymes</span>
                <div className="grid grid-cols-2 gap-2 text-[11px] pt-1 text-slate-700">
                  <div>• Cardiac Troponin: <strong className="text-slate-900">{selectedPatient.labBiomarkers.troponinNgMl} ng/mL</strong></div>
                  <div>• Serum Creatinine: <strong className="text-slate-900">{selectedPatient.labBiomarkers.creatinineMgDl} mg/dL</strong></div>
                  <div>• Total WBC Count: <strong className="text-slate-900">{selectedPatient.labBiomarkers.wbcCountK} k/uL</strong></div>
                  <div>• Fasting Glucose: <strong className="text-slate-900">{selectedPatient.labBiomarkers.glucoseMgDl} mg/dL</strong></div>
                </div>
              </div>

              {/* Order Medication Form */}
              <form onSubmit={handleAddMed} className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5 text-xs">
                <span className="font-bold text-slate-900 block">E-Prescribe Medication to Patient (Auto-syncs to Patient Portal)</span>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    required
                    placeholder="Medication (e.g. Clopidogrel)..."
                    value={newMedName}
                    onChange={e => setNewMedName(e.target.value)}
                    className="p-2 bg-white border border-slate-200 rounded-lg outline-none text-xs text-slate-900"
                  />
                  <input
                    placeholder="Dosage (e.g. 75mg Once Daily)..."
                    value={newDosage}
                    onChange={e => setNewDosage(e.target.value)}
                    className="p-2 bg-white border border-slate-200 rounded-lg outline-none text-xs text-slate-900"
                  />
                </div>
                <div className="flex justify-between items-center pt-1">
                  <input
                    placeholder="Timing / Instructions (e.g. Take after dinner)..."
                    value={newTiming}
                    onChange={e => setNewTiming(e.target.value)}
                    className="p-2 bg-white border border-slate-200 rounded-lg outline-none text-xs text-slate-900 w-2/3"
                  />
                  <button
                    type="submit"
                    className="bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs px-4 py-2 rounded-lg flex items-center gap-1.5 shadow-xs cursor-pointer"
                  >
                    <Pill className="w-3.5 h-3.5" />
                    <span>Order Rx</span>
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-12 text-center text-xs text-slate-500">
              Select a patient from the ward list.
            </div>
          )}

          {/* Right: Active Prescriptions List */}
          <div className="lg:col-span-3 bg-white border border-slate-200 rounded-2xl p-4 shadow-xs space-y-3 text-xs">
            <div className="border-b border-slate-100 pb-2">
              <span className="font-bold text-xs text-slate-900 font-mono uppercase">Hospital Prescriptions ({prescriptions.length})</span>
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
      )}
    </div>
  );
};
