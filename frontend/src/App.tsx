import React, { useState } from 'react';
import { AuthProvider } from './context/AuthContext';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { DashboardPage } from './pages/DashboardPage';
import { PatientsPage } from './pages/PatientsPage';
import { TelehealthPage } from './pages/TelehealthPage';
import { AppointmentsPage } from './pages/AppointmentsPage';
import { EhrRecordsPage } from './pages/EhrRecordsPage';
import { ClinicalNotesPage } from './pages/ClinicalNotesPage';
import { BillingInsurancePage } from './pages/BillingInsurancePage';
import { AuditSecurityPage } from './pages/AuditSecurityPage';

export function App() {
  const [currentTab, setCurrentTab] = useState('dashboard');

  return (
    <AuthProvider>
      <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
        <Navbar onNewPatient={() => setCurrentTab('patients')} />
        <div className="flex-1 flex">
          <Sidebar currentTab={currentTab} setCurrentTab={setCurrentTab} />
          <main className="flex-1 p-6 max-w-7xl mx-auto w-full">
            {currentTab === 'dashboard' && <DashboardPage onNavigate={setCurrentTab} />}
            {currentTab === 'patients' && <PatientsPage />}
            {currentTab === 'telehealth' && <TelehealthPage />}
            {currentTab === 'appointments' && <AppointmentsPage />}
            {currentTab === 'ehr' && <EhrRecordsPage />}
            {currentTab === 'notes' && <ClinicalNotesPage />}
            {currentTab === 'billing' && <BillingInsurancePage />}
            {currentTab === 'security' && <AuditSecurityPage />}
          </main>
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;
