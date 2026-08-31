import React, { useState } from 'react';
import { Video, Mic, MicOff, VideoOff, PhoneOff, MessageSquare, FileText, Pill, ShieldCheck, Share2 } from 'lucide-react';

export const TelehealthPage: React.FC = () => {
  const [micOn, setMicOn] = useState(true);
  const [camOn, setCamOn] = useState(true);

  return (
    <div className="space-y-6">
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold text-slate-900">Encrypted WebRTC Telehealth Consultation Suite</h1>
          <p className="text-xs text-slate-500 mt-0.5">HIPAA-compliant HD audio/video consultation with live clinical charting</p>
        </div>
        <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 px-3 py-1 rounded-xl text-xs font-bold">
          <ShieldCheck className="w-4 h-4" />
          <span>256-Bit End-to-End Encrypted</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Video Area (2 Cols) */}
        <div className="lg:col-span-2 bg-slate-900 rounded-3xl overflow-hidden p-4 flex flex-col justify-between min-h-[480px] shadow-lg relative">
          {/* Patient Main View */}
          <div className="flex-1 flex items-center justify-center text-slate-400 text-xs font-mono">
            <div className="text-center space-y-2">
              <div className="w-20 h-20 rounded-full bg-slate-800 border-2 border-teal-500 flex items-center justify-center text-white font-bold text-xl mx-auto">
                BG
              </div>
              <p className="text-white font-bold text-sm">Beatrice Gomez (Patient)</p>
              <p className="text-slate-400 text-xs">Connected via Secure Patient Portal (1080p 60fps)</p>
            </div>
          </div>

          {/* Doctor PIP preview */}
          <div className="absolute top-6 right-6 w-36 h-28 bg-slate-800 border-2 border-slate-700 rounded-2xl overflow-hidden shadow-md flex items-center justify-center text-white text-[11px] font-bold">
            Dr. Jenkins (You)
          </div>

          {/* Call Controls Bar */}
          <div className="bg-slate-800/90 backdrop-blur-md p-3 rounded-2xl flex items-center justify-center gap-4 mt-4">
            <button
              onClick={() => setMicOn(!micOn)}
              className={`p-3 rounded-xl font-bold text-xs transition-all ${
                micOn ? 'bg-slate-700 text-white hover:bg-slate-600' : 'bg-rose-600 text-white'
              }`}
            >
              {micOn ? <Mic className="w-4 h-4" /> : <MicOff className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setCamOn(!camOn)}
              className={`p-3 rounded-xl font-bold text-xs transition-all ${
                camOn ? 'bg-slate-700 text-white hover:bg-slate-600' : 'bg-rose-600 text-white'
              }`}
            >
              {camOn ? <Video className="w-4 h-4" /> : <VideoOff className="w-4 h-4" />}
            </button>

            <button className="p-3 bg-slate-700 hover:bg-slate-600 text-white rounded-xl transition-all">
              <Share2 className="w-4 h-4" />
            </button>

            <button className="bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs px-5 py-3 rounded-xl flex items-center gap-2 transition-all">
              <PhoneOff className="w-4 h-4" />
              <span>End Call & Sign Chart</span>
            </button>
          </div>
        </div>

        {/* Right 1 Col: Live Clinical SOAP Charting Pad */}
        <div className="bg-white border border-slate-200 rounded-3xl p-5 shadow-xs space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="border-b border-slate-100 pb-3">
              <h2 className="text-sm font-bold text-slate-900">Live Consultation SOAP Notes</h2>
              <p className="text-[11px] text-slate-500">Document observations directly into EHR</p>
            </div>

            <div className="space-y-2 text-xs">
              <label className="font-bold text-slate-700">Subjective (Patient Reported):</label>
              <textarea
                defaultValue="Patient reports improved fasting blood sugars (avg 118 mg/dL). Occasional tingling in toes persisting."
                rows={2}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
              />
            </div>

            <div className="space-y-2 text-xs">
              <label className="font-bold text-slate-700">Plan & Next Steps:</label>
              <textarea
                defaultValue="Maintain Metformin 1000mg BID. Add vitamin B12 supplementation. Repeat HbA1c in 3 months."
                rows={2}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
              />
            </div>
          </div>

          <button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs py-2.5 rounded-xl shadow-xs transition-all">
            Save & Sync to EHR Record
          </button>
        </div>
      </div>
    </div>
  );
};
