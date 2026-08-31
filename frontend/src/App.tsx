import React, { useState } from 'react';
import { AuthProvider } from './context/AuthContext';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { DashboardPage } from './pages/DashboardPage';
import { PatientsPage } from './pages/PatientsPage';
import { AppointmentsPage } from './pages/AppointmentsPage';
import { TelehealthPage } from './pages/TelehealthPage';
import { ClinicalPage } from './pages/ClinicalPage';
import { PharmacyPage } from './pages/PharmacyPage';
import { LabPage } from './pages/LabPage';
import { HospitalOpsPage } from './pages/HospitalOpsPage';
import { BillingPage } from './pages/BillingPage';
import { AiTriagePage } from './pages/AiTriagePage';
import { AuditPage } from './pages/AuditPage';

export function App() {
  const [currentTab, setCurrentTab] = useState('dashboard');

  return (
    <AuthProvider>
      <div className="min-h-screen bg-slate-100 flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
        <Navbar />
        <div className="flex-1 flex">
          <Sidebar currentTab={currentTab} setCurrentTab={setCurrentTab} />
          <main className="flex-1 p-6 max-w-7xl mx-auto w-full">
            {currentTab === 'dashboard' && <DashboardPage onNavigate={setCurrentTab} />}
            {currentTab === 'patients' && <PatientsPage />}
            {currentTab === 'appointments' && <AppointmentsPage onLaunchTelehealth={() => setCurrentTab('telehealth')} />}
            {currentTab === 'telehealth' && <TelehealthPage />}
            {currentTab === 'clinical' && <ClinicalPage />}
            {currentTab === 'pharmacy' && <PharmacyPage />}
            {currentTab === 'lab' && <LabPage />}
            {currentTab === 'hospital' && <HospitalOpsPage />}
            {currentTab === 'billing' && <BillingPage />}
            {currentTab === 'triage' && <AiTriagePage />}
            {currentTab === 'audit' && <AuditPage />}
          </main>
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;
