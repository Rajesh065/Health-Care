import React, { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { Navbar } from './components/Navbar';
import { BookAppointmentModal } from './components/BookAppointmentModal';
import { LoginPage } from './pages/LoginPage';
import { DirectorView } from './pages/DirectorView';
import { DoctorView } from './pages/DoctorView';
import { ReceptionView } from './pages/ReceptionView';
import { PatientView } from './pages/PatientView';
import { AppointmentType } from './types';

const MainLayout: React.FC = () => {
  const { persona, isLoggedIn } = useAuth();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<AppointmentType>('SPECIALIST_CONSULTATION');

  if (!isLoggedIn) {
    return <LoginPage />;
  }

  const handleOpenGeneral = () => {
    setModalMode('GENERAL_OPD');
    setModalOpen(true);
  };

  const handleOpenSpecialist = () => {
    setModalMode('SPECIALIST_CONSULTATION');
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      <Navbar onBookClick={handleOpenSpecialist} />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6">
        {persona === 'DIRECTOR' && <DirectorView />}
        {persona === 'DOCTOR' && <DoctorView />}
        {persona === 'RECEPTIONIST' && <ReceptionView onNewBooking={handleOpenGeneral} />}
        {persona === 'PATIENT' && (
          <PatientView
            onBookGeneral={handleOpenGeneral}
            onBookSpecialist={handleOpenSpecialist}
          />
        )}
      </main>

      <BookAppointmentModal
        isOpen={modalOpen}
        initialMode={modalMode}
        onClose={() => setModalOpen(false)}
        onSuccess={() => {}}
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
