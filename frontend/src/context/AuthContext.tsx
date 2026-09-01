import React, { createContext, useContext, useState } from 'react';
import { HospitalUser, UserPersona } from '../types';

export const HOSPITAL_USERS: HospitalUser[] = [
  {
    id: 'u-director',
    name: 'Dr. Arthur Sterling',
    email: 'director@stjudemedical.org',
    persona: 'DIRECTOR',
    role: 'Hospital Director',
    department: 'Hospital Management'
  },
  {
    id: 'u-doctor',
    name: 'Dr. Maya Lin',
    email: 'dr.mayalin@stjudemedical.org',
    persona: 'DOCTOR',
    role: 'Senior Cardiologist',
    department: 'Cardiology Department'
  },
  {
    id: 'u-receptionist',
    name: 'Priya Nair',
    email: 'reception@stjudemedical.org',
    persona: 'RECEPTIONIST',
    role: 'Front Desk Receptionist',
    department: 'Reception & Appointments'
  },
  {
    id: 'u-patient',
    name: 'Robert Chen',
    email: 'robert.chen@gmail.com',
    persona: 'PATIENT',
    role: 'Patient',
    department: 'Patient Portal'
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
  const [currentUser, setCurrentUser] = useState<HospitalUser>(HOSPITAL_USERS[0]);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);

  const switchUser = (p: UserPersona) => {
    const found = HOSPITAL_USERS.find(u => u.persona === p) || HOSPITAL_USERS[0];
    setCurrentUser(found);
    setIsLoggedIn(true);
  };

  const login = (user: HospitalUser) => {
    setCurrentUser(user);
    setIsLoggedIn(true);
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
