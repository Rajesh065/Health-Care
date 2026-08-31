import React, { useState } from 'react';
import { api } from '../services/api';
import { FileText, ShieldAlert, CheckCircle2, Search, Plus } from 'lucide-react';

export const ClinicalPage: React.FC = () => {
  const [selectedPatientId, setSelectedPatientId] = useState('pat-1001');
  const [icdQuery, setIcdQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Array<{ code: string; description: string }>>([]);
  const [selectedDiagnosis, setSelectedDiagnosis] = useState({ code: 'I10', description: 'Essential (primary) hypertension' });
  const [medications, setMedications] = useState<string[]>(['Lisinopril 20mg', 'Amlodipine 5mg']);
  const [newMedInput, setNewMedInput] = useState('');
  const [safetyCheckResult, setSafetyCheckResult] = useState<any>(null);
  const [soapData, setSoapData] = useState({
    subjective: 'Patient reports mild occasional morning headache. Complies with current daily medication.',
    objective: 'BP 138/88 mmHg, HR 76 bpm, Temp 36.8 C, Lungs clear bilaterally, no peripheral edema.',
    plan: 'Reinforce DASH low sodium diet. Add Amlodipine 5mg daily. Follow-up in 6 weeks.'
  });
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSearchIcd = async (q: string) => {
    setIcdQuery(q);
    if (q.length > 1) {
      const res = await api.searchDiagnoses(q);
      setSearchResults(res);
    }
  };

  const handleAddMed = async () => {
    if (!newMedInput.trim()) return;
    const updated = [...medications, newMedInput.trim()];
    setMedications(updated);
    setNewMedInput('');
    const safety = await api.checkSafety(selectedPatientId, updated);
    setSafetyCheckResult(safety);
  };

  const handleSaveSoap = async (e: React.FormEvent) => {
    e.preventDefault();
    await api.createSoapNote({
      patientId: selectedPatientId,
      doctorId: 'usr-doc-1',
      doctorName: 'Dr. Marcus Vance, MD',
      subjective: { chiefComplaint: 'Follow-up hypertension', historyOfPresentIllness: soapData.subjective, reviewOfSystems: 'Normal' },
      objective: { physicalExam: soapData.objective, vitalsSummary: 'BP 138/88, HR 76' },
      assessment: { primaryDiagnosis: selectedDiagnosis, secondaryDiagnoses: [], clinicalImpression: 'Stage 1 hypertension moderately controlled.' },
      plan: { treatments: soapData.plan, medicationsPrescribed: medications, labOrdersRequested: ['CMP Comprehensive Metabolic Panel'], followUpInstructions: 'Return in 6 weeks', followUpWeeks: 6 }
    });
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 4000);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-black text-slate-900 tracking-tight">Clinical Decision Support & SOAP Notes</h1>
        <p className="text-xs text-slate-500">Physician consultation workstation with real-time drug interaction and allergy checking</p>
      </div>

      {savedSuccess && (
        <div className="bg-emerald-50 border border-emerald-300 text-emerald-800 p-4 rounded-xl text-sm font-bold flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
          SOAP note successfully documented, digitally signed, and committed to patient EHR!
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <form onSubmit={handleSaveSoap} className="lg:col-span-2 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <h2 className="text-base font-black text-slate-900">Clinical Consultation Encounter</h2>
              <p className="text-xs text-slate-500">Patient: Robert Sterling (MRN-2026-8819)</p>
            </div>
            <span className="text-xs font-bold bg-sky-100 text-sky-800 px-3 py-1 rounded-full">Enc #ENC-2026-9912</span>
          </div>

          <div className="space-y-3">
            <div>
              <label className="text-xs font-bold uppercase text-slate-700">Subjective (Chief Complaint & HPI)</label>
              <textarea
                value={soapData.subjective}
                onChange={e => setSoapData({...soapData, subjective: e.target.value})}
                rows={3}
                className="w-full text-xs p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:outline-none mt-1"
              />
            </div>

            <div>
              <label className="text-xs font-bold uppercase text-slate-700">Objective (Exam & Vitals)</label>
              <textarea
                value={soapData.objective}
                onChange={e => setSoapData({...soapData, objective: e.target.value})}
                rows={3}
                className="w-full text-xs p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:outline-none mt-1"
              />
            </div>

            <div>
              <label className="text-xs font-bold uppercase text-slate-700">Assessment (Primary ICD-10 Diagnosis)</label>
              <div className="p-3 bg-sky-50/70 border border-sky-200 rounded-xl text-xs flex items-center justify-between font-bold text-slate-900 mt-1">
                <span>{selectedDiagnosis.description}</span>
                <span className="font-mono bg-sky-600 text-white px-2 py-0.5 rounded">{selectedDiagnosis.code}</span>
              </div>
            </div>

            <div>
              <label className="text-xs font-bold uppercase text-slate-700">Plan & Prescriptions</label>
              <textarea
                value={soapData.plan}
                onChange={e => setSoapData({...soapData, plan: e.target.value})}
                rows={3}
                className="w-full text-xs p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:outline-none mt-1"
              />
            </div>
          </div>

          <div className="flex justify-end pt-3">
            <button type="submit" className="bg-medblue-600 hover:bg-medblue-700 text-white font-black px-6 py-2.5 rounded-xl text-sm shadow-md transition-all">
              Sign & Commit SOAP Note
            </button>
          </div>
        </form>

        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
              <Search className="w-4 h-4 text-medblue-600" /> ICD-10 Diagnosis Search
            </h3>
            <input
              type="text"
              value={icdQuery}
              onChange={e => handleSearchIcd(e.target.value)}
              placeholder="Search e.g. Hypertension, Asthma..."
              className="w-full border border-slate-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
            {searchResults.length > 0 && (
              <div className="max-h-48 overflow-y-auto space-y-1.5 text-xs pr-1">
                {searchResults.map(r => (
                  <div
                    key={r.code}
                    onClick={() => { setSelectedDiagnosis(r); setSearchResults([]); }}
                    className="p-2 rounded-lg border border-slate-100 hover:bg-sky-50 cursor-pointer flex items-center justify-between"
                  >
                    <span className="font-semibold text-slate-800">{r.description}</span>
                    <span className="font-mono text-[10px] bg-slate-100 px-1 rounded">{r.code}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4 text-amber-600" /> Clinical Decision Support (CDS)
            </h3>
            <div className="space-y-1.5">
              {medications.map((m, idx) => (
                <div key={idx} className="bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-bold text-slate-800 flex justify-between">
                  <span>{m}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-2 pt-2">
              <input
                type="text"
                value={newMedInput}
                onChange={e => setNewMedInput(e.target.value)}
                placeholder="Add drug e.g. Warfarin, Aspirin..."
                className="flex-1 text-xs border border-slate-200 rounded-lg px-3 py-1.5 focus:outline-none"
              />
              <button onClick={handleAddMed} type="button" className="bg-sky-600 text-white px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-sky-700">
                <Plus className="w-4 h-4" />
              </button>
            </div>

            {safetyCheckResult && (
              <div className="mt-3 space-y-2 text-xs">
                {safetyCheckResult.allergyWarnings?.map((w: string, i: number) => (
                  <div key={i} className="p-2.5 bg-rose-50 border border-rose-300 rounded-xl text-rose-800 font-semibold">
                    {w}
                  </div>
                ))}
                {safetyCheckResult.interactions?.map((it: any, i: number) => (
                  <div key={i} className="p-2.5 bg-amber-50 border border-amber-300 rounded-xl text-amber-800">
                    <p className="font-bold">{it.drugA} + {it.drugB} ({it.severity} Interaction)</p>
                    <p className="text-[11px] mt-0.5">{it.description}</p>
                  </div>
                ))}
                {safetyCheckResult.isSafe && (
                  <div className="p-2.5 bg-emerald-50 border border-emerald-300 rounded-xl text-emerald-800 font-bold">
                    ✓ Safety Check Passed: No major interactions or allergy conflicts detected.
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
