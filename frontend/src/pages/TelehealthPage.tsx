import React, { useState } from 'react';
import { Mic, MicOff, Video as VideoIcon, VideoOff, PhoneOff } from 'lucide-react';

export const TelehealthPage: React.FC = () => {
  const [mic, setMic] = useState(true);
  const [cam, setCam] = useState(true);

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-black text-slate-900">Encrypted Telehealth Video Room</h1>
      <div className="bg-slate-950 rounded-3xl p-6 text-center text-white h-96 flex flex-col justify-between items-center shadow-2xl">
        <div className="my-auto">
          <div className="w-24 h-24 rounded-full bg-sky-600/40 border-2 border-sky-400 flex items-center justify-center text-2xl font-bold mx-auto mb-2">RS</div>
          <p className="font-bold text-lg">Robert Sterling (Patient Connected)</p>
          <p className="text-xs text-emerald-400">● 1080p HD Stream Active</p>
        </div>
        <div className="flex gap-3">
          <button onClick={() => setMic(!mic)} className={`p-3 rounded-xl font-bold ${mic ? 'bg-slate-800' : 'bg-rose-600'}`}>
            {mic ? <Mic className="w-5 h-5" /> : <MicOff className="w-5 h-5" />}
          </button>
          <button onClick={() => setCam(!cam)} className={`p-3 rounded-xl font-bold ${cam ? 'bg-slate-800' : 'bg-rose-600'}`}>
            {cam ? <VideoIcon className="w-5 h-5" /> : <VideoOff className="w-5 h-5" />}
          </button>
          <button className="bg-rose-600 text-white font-bold px-5 py-3 rounded-xl flex items-center gap-2">
            <PhoneOff className="w-5 h-5" /> End Call
          </button>
        </div>
      </div>
    </div>
  );
};
