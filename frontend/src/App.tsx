import React, { useState, useEffect } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { Navbar } from './components/Navbar';
import { AuthModal } from './components/AuthModal';
import { BookAppointmentModal } from './components/BookAppointmentModal';
import { LoginPage } from './pages/LoginPage';
import { DirectorCommandPage } from './pages/DirectorCommandPage';
import { DoctorRoundsPage } from './pages/DoctorRoundsPage';
import { AppointmentDeskPage } from './pages/AppointmentDeskPage';
import { PatientPortalPage } from './pages/PatientPortalPage';
import { EhrRecordsPage } from './pages/EhrRecordsPage';
import { BillingInsurancePage } from './pages/BillingInsurancePage';
import { AuditSecurityPage } from './pages/AuditSecurityPage';

const MainLayout: React.FC = () => {
  const { persona, isAuthenticated } = useAuth();
  const [currentTab, setCurrentTab] = useState<string>(() => {
    if (persona === 'HOSPITAL_HEAD') return 'director-command';
    if (persona === 'DOCTOR_PHYSICIAN') return 'doctor-rounds';
    if (persona === 'APPOINTMENT_DESK') return 'appointment-desk';
    return 'patient-portal';
  });

  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    if (persona === 'HOSPITAL_HEAD') setCurrentTab('director-command');
    else if (persona === 'DOCTOR_PHYSICIAN') setCurrentTab('doctor-rounds');
    else if (persona === 'APPOINTMENT_DESK') setCurrentTab('appointment-desk');
    else if (persona === 'PATIENT_USER') setCurrentTab('patient-portal');
  }, [persona]);

  if (!isAuthenticated) {
    return <LoginPage onLoggedIn={() => {}} />;
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans w-full">
      <Navbar
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        onBookAppointment={() => setIsBookingOpen(true)}
        onOpenAuth={() => setIsAuthOpen(true)}
      />

      <main className="flex-1 w-full px-6 py-4 max-w-7xl mx-auto">
        {currentTab === 'director-command' && <DirectorCommandPage />}
        {currentTab === 'doctor-roster' && <DirectorCommandPage />}
        {currentTab === 'doctor-rounds' && <DoctorRoundsPage />}
        {currentTab === 'doctor-consultations' && <DoctorRoundsPage />}
        {currentTab === 'appointment-desk' && <AppointmentDeskPage onBookAppointment={() => setIsBookingOpen(true)} />}
        {currentTab === 'bed-allocation' && <AppointmentDeskPage onBookAppointment={() => setIsBookingOpen(true)} />}
        {currentTab === 'front-desk-billing' && <AppointmentDeskPage onBookAppointment={() => setIsBookingOpen(true)} />}
        {currentTab === 'patient-portal' && <PatientPortalPage onBookAppointment={() => setIsBookingOpen(true)} />}
        {currentTab === 'patient-reports' && <PatientPortalPage onBookAppointment={() => setIsBookingOpen(true)} />}
        {currentTab === 'patient-prescriptions' && <PatientPortalPage onBookAppointment={() => setIsBookingOpen(true)} />}
        {currentTab === 'patient-bills' && <PatientPortalPage onBookAppointment={() => setIsBookingOpen(true)} />}
        {currentTab === 'ehr-records' && <EhrRecordsPage />}
        {currentTab === 'billing-insurance' && <BillingInsurancePage />}
        {currentTab === 'audit-security' && <AuditSecurityPage />}
      </main>

      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
      <BookAppointmentModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        onBooked={() => {}}
      />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <AuthProvider>
      <MainLayout />
    </AuthProvider>
  );
};

export default App;
