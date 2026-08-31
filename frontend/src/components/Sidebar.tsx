import React from 'react';
import {
  LayoutDashboard,
  Users,
  Calendar,
  Video,
  FileText,
  Pill,
  FlaskConical,
  Building2,
  Receipt,
  Bot,
  ShieldCheck
} from 'lucide-react';

interface SidebarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentTab, setCurrentTab }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'patients', label: 'Patient Charts (EHR)', icon: Users },
    { id: 'appointments', label: 'Appointments & Queue', icon: Calendar },
    { id: 'telehealth', label: 'Telehealth Suite', icon: Video, badge: 'Live' },
    { id: 'clinical', label: 'SOAP & Clinical CDS', icon: FileText },
    { id: 'pharmacy', label: 'Pharmacy & Stock', icon: Pill },
    { id: 'lab', label: 'Diagnostics & Lab', icon: FlaskConical },
    { id: 'hospital', label: 'Hospital Beds & Staff', icon: Building2 },
    { id: 'billing', label: 'Billing & Claims', icon: Receipt },
    { id: 'triage', label: 'AI Symptom Triage', icon: Bot, badge: 'AI' },
    { id: 'audit', label: 'HIPAA Audit Logs', icon: ShieldCheck }
  ];

  return (
    <aside className="w-64 bg-white border-r border-slate-200 flex flex-col justify-between p-4 min-h-[calc(100vh-65px)]">
      <div className="space-y-1">
        <p className="px-3 text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Main Navigation</p>
        {menuItems.map(item => {
          const Icon = item.icon;
          const isActive = currentTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setCurrentTab(item.id)}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium text-sm transition-all ${
                isActive
                  ? 'bg-sky-50 text-medblue-700 font-bold border border-sky-200/80 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon className={`w-4 h-4 ${isActive ? 'text-medblue-600 stroke-[2.5]' : 'text-slate-500'}`} />
                <span>{item.label}</span>
              </div>
              {item.badge && (
                <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${
                  item.badge === 'Live' ? 'bg-rose-100 text-rose-700' : 'bg-indigo-100 text-indigo-700'
                }`}>
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      <div className="pt-4 border-t border-slate-200">
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-3.5 text-white shadow-lg">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-xs font-bold text-slate-300">MedFlow Core v1.0</span>
          </div>
          <p className="text-[11px] text-slate-400 font-normal">FHIR & HL7 Ready | SOC2 & HIPAA Compliant</p>
        </div>
      </div>
    </aside>
  );
};
