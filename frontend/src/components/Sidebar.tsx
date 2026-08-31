import React from 'react';
import {
  LayoutDashboard,
  Users,
  Video,
  Calendar,
  FileText,
  Activity,
  CreditCard,
  ShieldCheck,
  Building2,
  Stethoscope
} from 'lucide-react';

export const Sidebar: React.FC<{ currentTab: string; setCurrentTab: (t: string) => void }> = ({ currentTab, setCurrentTab }) => {
  const sections = [
    {
      title: 'CLINICAL OPERATIONS',
      items: [
        { id: 'dashboard', label: 'Clinical Overview', icon: LayoutDashboard, badge: 'Live' },
        { id: 'patients', label: 'Patient Directory', icon: Users },
        { id: 'telehealth', label: 'Telehealth Consults', icon: Video, badge: 'HD' },
        { id: 'appointments', label: 'Appointments & Schedule', icon: Calendar }
      ]
    },
    {
      title: 'EHR & DIAGNOSTICS',
      items: [
        { id: 'ehr', label: 'EHR Records & Vitals', icon: Activity },
        { id: 'notes', label: 'Clinical SOAP Notes & Rx', icon: FileText }
      ]
    },
    {
      title: 'ADMINISTRATION & AUDIT',
      items: [
        { id: 'billing', label: 'Insurance & Claims', icon: CreditCard },
        { id: 'security', label: 'HIPAA Compliance Ledger', icon: ShieldCheck }
      ]
    }
  ];

  return (
    <aside className="w-64 bg-white border-r border-slate-200 flex flex-col justify-between py-4 px-3 shadow-xs select-none">
      <div className="space-y-6">
        {sections.map(sec => (
          <div key={sec.title} className="space-y-1">
            <p className="text-[10px] font-bold tracking-wider text-slate-400 uppercase px-3 mb-2 font-mono">
              {sec.title}
            </p>
            {sec.items.map(item => {
              const Icon = item.icon;
              const active = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentTab(item.id)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                    active
                      ? 'bg-teal-50 text-teal-800 font-bold border border-teal-200/80 shadow-xs'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className={`w-4 h-4 ${active ? 'text-teal-700' : 'text-slate-400'}`} />
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded ${
                      active ? 'bg-teal-200 text-teal-900' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        ))}
      </div>

      {/* Hospital Shift Status footer */}
      <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80 text-xs">
        <div className="flex items-center justify-between text-[11px] font-bold text-slate-700">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            Day Shift Active
          </span>
          <span className="text-slate-500 font-mono">07:00 - 19:00</span>
        </div>
        <p className="text-[10px] text-slate-500 mt-1">Bed Occupancy: 84/100 (84%)</p>
      </div>
    </aside>
  );
};
