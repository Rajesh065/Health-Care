import React, { createContext, useContext, useState } from 'react';
import { HospitalUser, UserPersona } from '../types';

export const HOSPITAL_USERS: HospitalUser[] = [
  {
    id: 'u-manager',
    name: 'Marcus Sterling, MHA',
    email: 'manager.operations@stjudemedical.org',
    persona: 'MANAGER',
    role: 'Hospital Operations & Facility Manager',
    department: 'Hospital Administration & Asset Management'
  },
  {
    id: 'u-employee',
    name: 'Dr. Sarah Jenkins, MD',
    email: 'sarah.jenkins@stjudemedical.org',
    persona: 'EMPLOYEE',
    role: 'Senior Consultant Orthopedic Surgeon (EMP-8024)',
    department: 'Orthopedics & Surgical Operation Theatres'
  },
  {
    id: 'u-receptionist',
    name: 'Priya Nair',
    email: 'reception@stjudemedical.org',
    persona: 'RECEPTIONIST',
    role: 'Receptionist (Appointments Desk)',
    department: 'Central Registration & Token Desk'
  },
  {
    id: 'u-patient',
    name: 'Robert Chen',
    email: 'robert.chen@gmail.com',
    persona: 'PATIENT',
    role: 'Patient (ID: PT-90482)',
    department: 'Patient Self-Service Portal'
  }
];

interface AuthContextType {
  currentUser: HospitalUser;
  persona: UserPersona;
  switchUser: (persona: UserPersona) => void;
  login: (user: HospitalUser) => void;
  logout: () => void;
  isLoggedIn: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<HospitalUser>(() => {
    const saved = localStorage.getItem('medflow_active_persona');
    if (saved) {
      const match = HOSPITAL_USERS.find(u => u.persona === saved);
      if (match) return match;
    }
    return HOSPITAL_USERS[0];
  });
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);

  const switchUser = (p: UserPersona) => {
    const found = HOSPITAL_USERS.find(u => u.persona === p) || HOSPITAL_USERS[0];
    setCurrentUser(found);
    setIsLoggedIn(true);
    localStorage.setItem('medflow_active_persona', p);
  };

  const login = (user: HospitalUser) => {
    setCurrentUser(user);
    setIsLoggedIn(true);
    localStorage.setItem('medflow_active_persona', user.persona);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{
      currentUser,
      persona: currentUser.persona,
      switchUser,
      login,
      logout,
      isLoggedIn
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be inside AuthProvider');
  return ctx;
};
