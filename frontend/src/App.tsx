import React, { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { Navbar } from './components/Navbar';
import { BookAppointmentModal } from './components/BookAppointmentModal';
import { LoginPage } from './pages/LoginPage';
import { DirectorView } from './pages/DirectorView';
import { DoctorView } from './pages/DoctorView';
import { ReceptionView } from './pages/ReceptionView';
import { PatientView } from './pages/PatientView';

const MainLayout: React.FC = () => {
  const { persona, isLoggedIn } = useAuth();
  const [modalOpen, setModalOpen] = useState(false);

  if (!isLoggedIn) {
    return <LoginPage />;
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      <Navbar onBookClick={() => setModalOpen(true)} />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6">
        {persona === 'DIRECTOR' && <DirectorView />}
        {persona === 'DOCTOR' && <DoctorView />}
        {persona === 'RECEPTIONIST' && <ReceptionView onNewBooking={() => setModalOpen(true)} />}
        {persona === 'PATIENT' && <PatientView onBookClick={() => setModalOpen(true)} />}
      </main>

      <BookAppointmentModal
        isOpen={modalOpen}
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
