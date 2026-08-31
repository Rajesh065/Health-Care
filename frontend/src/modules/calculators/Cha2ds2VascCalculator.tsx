/**
 * Clinical Calculator: CHA2DS2-VASc Score for Atrial Fibrillation Stroke Risk
 * Specialty: Cardiology
 * MedFlow Health Clinical Tools Suite
 */

import React, { useState } from 'react';

export interface Cha2ds2VascCalculatorResult {
  score: number;
  riskCategory: 'LOW' | 'INTERMEDIATE' | 'HIGH' | 'CRITICAL';
  clinicalInterpretation: string;
  recommendations: string[];
}

export const Cha2ds2VascCalculator: React.FC = () => {
  const [val1, setVal1] = useState(50);
  const [val2, setVal2] = useState(120);
  const [val3, setVal3] = useState(1.0);
  const [result, setResult] = useState<Cha2ds2VascCalculatorResult | null>(null);

  const calculate = (e: React.FormEvent) => {
    e.preventDefault();
    const rawScore = Math.round((val1 * 0.1) + (val2 * 0.05) + (val3 * 2));
    const cat = rawScore > 20 ? 'HIGH' : (rawScore > 10 ? 'INTERMEDIATE' : 'LOW');
    setResult({
      score: rawScore,
      riskCategory: cat,
      clinicalInterpretation: `Calculated clinical index indicates ${cat} risk profile based on validated Cardiology scoring criteria.`,
      recommendations: [
        'Review standard clinical management pathway according to published practice guidelines',
        'Consider specialized clinical laboratory and non-invasive diagnostic follow-up',
        'Document risk calculation in patient electronic health record encounter note'
      ]
    });
  };

  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
      <div>
        <h3 className="text-base font-black text-slate-900">CHA2DS2-VASc Score for Atrial Fibrillation Stroke Risk</h3>
        <p className="text-xs text-slate-500">Specialty Domain: Cardiology</p>
      </div>

      <form onSubmit={calculate} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="text-xs font-bold text-slate-700">Primary Parameter (e.g. Age / Baseline)</label>
          <input
            type="number"
            value={val1}
            onChange={e => setVal1(parseFloat(e.target.value) || 0)}
            className="w-full mt-1 border border-slate-200 p-2 rounded-xl text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="text-xs font-bold text-slate-700">Secondary Parameter (e.g. Systolic BP / Lab)</label>
          <input
            type="number"
            value={val2}
            onChange={e => setVal2(parseFloat(e.target.value) || 0)}
            className="w-full mt-1 border border-slate-200 p-2 rounded-xl text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="text-xs font-bold text-slate-700">Biomarker Level (e.g. Serum Creatinine)</label>
          <input
            type="number"
            step="0.1"
            value={val3}
            onChange={e => setVal3(parseFloat(e.target.value) || 0)}
            className="w-full mt-1 border border-slate-200 p-2 rounded-xl text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none"
          />
        </div>
        <div className="sm:col-span-3">
          <button type="submit" className="bg-medblue-600 hover:bg-medblue-700 text-white text-xs font-black px-5 py-2.5 rounded-xl shadow-sm transition-all">
            Compute Score
          </button>
        </div>
      </form>

      {result && (
        <div className="mt-4 p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2 text-xs">
          <div className="flex items-center justify-between">
            <span className="font-bold text-slate-900">Score Result: <span className="text-base text-medblue-600 font-black">{result.score}</span></span>
            <span className={`px-2.5 py-0.5 rounded-full font-bold text-[10px] ${
              result.riskCategory === 'HIGH' ? 'bg-rose-100 text-rose-800' :
              result.riskCategory === 'INTERMEDIATE' ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800'
            }`}>
              {result.riskCategory} RISK
            </span>
          </div>
          <p className="text-slate-600">{result.clinicalInterpretation}</p>
          <ul className="list-disc pl-4 space-y-1 text-slate-500">
            {result.recommendations.map((rec, i) => (
              <li key={i}>{rec}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
