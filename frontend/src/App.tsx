import React, { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { Navbar } from './components/Navbar';
import { BookAppointmentModal } from './components/BookAppointmentModal';
import { LoginPage } from './pages/LoginPage';
import { ManagerView } from './pages/ManagerView';
import { ReceptionView } from './pages/ReceptionView';
import { PatientView } from './pages/PatientView';
import { AppointmentType } from './types';

const MainLayout: React.FC = () => {
  const { persona, isLoggedIn } = useAuth();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<AppointmentType>('GENERAL_OPD');

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
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans w-full">
      <Navbar onBookClick={handleOpenSpecialist} />

      <main className="flex-1 w-full px-4 sm:px-8 lg:px-12 py-6">
        {persona === 'MANAGER' && <ManagerView />}
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
