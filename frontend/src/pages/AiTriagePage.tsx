import React, { useState } from 'react';
import { api } from '../services/api';
import { TriageAssessment } from '../types';
import { Bot, Sparkles } from 'lucide-react';

export const AiTriagePage: React.FC = () => {
  const [symptomsInput, setSymptomsInput] = useState('');
  const [severity, setSeverity] = useState(5);
  const [duration, setDuration] = useState('2 days');
  const [assessment, setAssessment] = useState<TriageAssessment | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAssess = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!symptomsInput.trim()) return;
    setLoading(true);
    const symptomsList = symptomsInput.split(',').map(s => s.trim());
    try {
      const res = await api.assessTriage({ symptoms: symptomsList, duration, severity });
      setAssessment(res);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-black text-slate-900 tracking-tight">AI Clinical Symptom Triage</h1>
        <p className="text-xs text-slate-500">Evidence-based algorithmic triage risk stratification & referral recommendation</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <form onSubmit={handleAssess} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
            <Bot className="w-5 h-5 text-medblue-600" />
            <h2 className="font-bold text-base text-slate-900">Symptom Assessment Engine</h2>
          </div>

          <div>
            <label className="text-xs font-bold uppercase text-slate-700">Reported Symptoms (comma separated)</label>
            <input
              type="text"
              value={symptomsInput}
              onChange={e => setSymptomsInput(e.target.value)}
              placeholder="e.g. Sharp chest pain, shortness of breath OR headache, dizziness"
              className="w-full mt-1 border border-slate-200 rounded-xl p-3 text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-bold uppercase text-slate-700">Duration</label>
              <input
                type="text"
                value={duration}
                onChange={e => setDuration(e.target.value)}
                className="w-full mt-1 border border-slate-200 rounded-xl p-2 text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="text-xs font-bold uppercase text-slate-700">Severity (1 to 10): {severity}</label>
              <input
                type="range"
                min={1}
                max={10}
                value={severity}
                onChange={e => setSeverity(parseInt(e.target.value))}
                className="w-full mt-2 accent-medblue-600"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-medblue-600 hover:bg-medblue-700 text-white font-black py-3 rounded-xl text-sm shadow-md transition-all flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4" /> {loading ? 'Analyzing Clinical Risk...' : 'Run AI Triage Assessment'}
          </button>
        </form>

        {assessment ? (
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="font-black text-base text-slate-900">Triage Classification</h3>
              <span className={`text-xs font-black px-3 py-1 rounded-full ${
                assessment.triageColor === 'RED' ? 'bg-rose-100 text-rose-800' :
                assessment.triageColor === 'ORANGE' ? 'bg-orange-100 text-orange-800' :
                assessment.triageColor === 'YELLOW' ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800'
              }`}>
                {assessment.triageColor} PRIORITY
              </span>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <p className="font-bold text-slate-700">Recommended Clinical Action</p>
                <p className="text-slate-900 font-semibold mt-1">{assessment.recommendedAction}</p>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <p className="font-bold text-slate-700">Suggested Medical Specialty</p>
                <p className="text-slate-900 font-semibold mt-1">{assessment.suggestedSpecialty}</p>
              </div>

              <p className="text-slate-500 italic text-[11px]">{assessment.summary}</p>
            </div>
          </div>
        ) : (
          <div className="bg-slate-50 rounded-2xl p-6 border border-dashed border-slate-300 flex items-center justify-center text-slate-400 text-xs">
            Enter patient symptoms to run clinical algorithm.
          </div>
        )}
      </div>
    </div>
  );
};
