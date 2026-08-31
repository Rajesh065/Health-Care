import React, { useState } from 'react';
import { Mic, MicOff, Video as VideoIcon, VideoOff, PhoneOff, MessageSquare, FileText, Send } from 'lucide-react';

export const TelehealthPage: React.FC = () => {
  const [micOn, setMicOn] = useState(true);
  const [camOn, setCamOn] = useState(true);
  const [chatMessages, setChatMessages] = useState<Array<{ sender: string; text: string; time: string }>>([
    { sender: 'System', text: 'Encrypted WebRTC consultation room established. HIPAA audio-video tunnel verified.', time: '14:00' },
    { sender: 'Robert Sterling', text: 'Hello doctor, can you hear me properly?', time: '14:01' }
  ]);
  const [inputMsg, setInputMsg] = useState('');
  const [notes, setNotes] = useState('Patient states blood pressure was 140/88 this morning. Complains of mild tension headaches.');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMsg.trim()) return;
    setChatMessages([...chatMessages, { sender: 'Dr. Marcus Vance', text: inputMsg, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
    setInputMsg('');
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <h1 className="text-xl font-black text-slate-900">Virtual Telehealth Consultation Room</h1>
          </div>
          <p className="text-xs text-slate-500">Session ID: session-8829-vance-sterling • Patient: Robert Sterling (MRN-2026-8819)</p>
        </div>
        <span className="text-xs font-bold bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full border border-emerald-200">
          End-to-End Encrypted (AES-256)
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-210px)]">
        <div className="lg:col-span-2 bg-slate-950 rounded-3xl p-4 flex flex-col justify-between relative shadow-2xl overflow-hidden">
          <div className="flex-1 flex items-center justify-center relative rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 overflow-hidden">
            <div className="text-center">
              <div className="w-28 h-28 rounded-full bg-sky-600/30 border-2 border-sky-400 flex items-center justify-center mx-auto text-sky-200 font-extrabold text-3xl mb-3 shadow-lg shadow-sky-500/20">
                RS
              </div>
              <p className="text-white font-bold text-base">Robert Sterling (Patient)</p>
              <p className="text-xs text-emerald-400 font-medium mt-0.5">● Connected • 1080p HD (30 FPS)</p>
            </div>

            <div className="absolute bottom-4 right-4 w-40 h-28 bg-slate-900 rounded-xl border border-slate-700 shadow-xl flex items-center justify-center overflow-hidden">
              {camOn ? (
                <div className="text-center">
                  <div className="w-10 h-10 rounded-full bg-medblue-600 flex items-center justify-center text-white font-bold mx-auto text-xs">
                    Dr. V
                  </div>
                  <p className="text-[10px] text-slate-300 font-bold mt-1">You (Doctor)</p>
                </div>
              ) : (
                <p className="text-xs text-slate-500 font-medium">Camera Off</p>
              )}
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center gap-3">
            <button
              onClick={() => setMicOn(!micOn)}
              className={`p-3.5 rounded-2xl font-bold transition-all shadow-md ${
                micOn ? 'bg-slate-800 hover:bg-slate-700 text-white' : 'bg-rose-600 text-white'
              }`}
            >
              {micOn ? <Mic className="w-5 h-5" /> : <MicOff className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setCamOn(!camOn)}
              className={`p-3.5 rounded-2xl font-bold transition-all shadow-md ${
                camOn ? 'bg-slate-800 hover:bg-slate-700 text-white' : 'bg-rose-600 text-white'
              }`}
            >
              {camOn ? <VideoIcon className="w-5 h-5" /> : <VideoOff className="w-5 h-5" />}
            </button>
            <button className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-3.5 rounded-2xl font-black text-sm flex items-center gap-2 shadow-lg shadow-rose-600/30">
              <PhoneOff className="w-5 h-5" /> End Consultation
            </button>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between space-y-4">
          <div className="space-y-4 flex-1 flex flex-col overflow-hidden">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5 mb-2">
                <FileText className="w-4 h-4 text-medblue-600" /> In-Call Clinical Notes
              </h3>
              <textarea
                value={notes}
                onChange={e => setNotes(e.target.value)}
                rows={4}
                className="w-full text-xs p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:outline-none bg-slate-50/50"
                placeholder="Type real-time clinical observations..."
              />
            </div>

            <div className="flex-1 flex flex-col border border-slate-100 rounded-xl p-3 bg-slate-50/40 overflow-hidden">
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1">
                <MessageSquare className="w-3.5 h-3.5" /> Secure Consultation Chat
              </h4>
              <div className="flex-1 overflow-y-auto space-y-2 pr-1 custom-scrollbar text-xs">
                {chatMessages.map((m, idx) => (
                  <div key={idx} className={`p-2 rounded-lg ${m.sender === 'System' ? 'bg-emerald-50 text-emerald-800 text-[10px]' : 'bg-white border border-slate-200'}`}>
                    <div className="flex items-center justify-between font-bold text-slate-800 mb-0.5">
                      <span>{m.sender}</span>
                      <span className="text-[9px] font-normal text-slate-400">{m.time}</span>
                    </div>
                    <p className="text-slate-600">{m.text}</p>
                  </div>
                ))}
              </div>
              <form onSubmit={handleSendMessage} className="mt-2 flex gap-1.5">
                <input
                  type="text"
                  value={inputMsg}
                  onChange={e => setInputMsg(e.target.value)}
                  placeholder="Type message to patient..."
                  className="flex-1 text-xs border border-slate-200 rounded-lg px-2.5 py-1.5 focus:outline-none"
                />
                <button type="submit" className="bg-medblue-600 text-white p-2 rounded-lg hover:bg-medblue-700">
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
