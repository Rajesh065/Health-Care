import React, { createContext, useContext, useState } from 'react';
import { HospitalUser, UserPersona } from '../types';

export const PRESET_HOSPITAL_USERS: HospitalUser[] = [
  {
    id: 'user-head-1',
    name: 'Dr. Arthur Sterling, MD, FACS',
    email: 'head.director@stjudemedical.org',
    persona: 'HOSPITAL_HEAD',
    role: 'Chief Medical Officer & Hospital Superintendent',
    department: 'Hospital Executive Leadership',
    initials: 'AS'
  },
  {
    id: 'user-doc-1',
    name: 'Dr. Maya Lin, MD, FACC',
    email: 'dr.mayalin@stjudemedical.org',
    persona: 'DOCTOR_PHYSICIAN',
    role: 'Chief of Interventional Cardiology',
    department: 'Division of Cardiology',
    initials: 'ML'
  },
  {
    id: 'user-desk-1',
    name: 'Priya Nair',
    email: 'reception.desk@stjudemedical.org',
    persona: 'APPOINTMENT_DESK',
    role: 'Lead Patient Care Coordinator & Desk Supervisor',
    department: 'Central Registration & Appointments',
    initials: 'PN'
  },
  {
    id: 'user-patient-1',
    name: 'Robert Chen',
    email: 'robert.chen@gmail.com',
    persona: 'PATIENT_USER',
    role: 'Outpatient / Cardiopulmonary Inpatient (ID: PT-90482)',
    department: 'Patient Self-Service Portal',
    initials: 'RC'
  }
];

interface AuthContextType {
  currentUser: HospitalUser | null;
  userName: string;
  role: string;
  department: string;
  persona: UserPersona;
  isAuthenticated: boolean;
  login: (email: string, pass: string, customUser?: HospitalUser) => boolean;
  logout: () => void;
  switchUser: (userId: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<HospitalUser | null>(() => {
    const saved = localStorage.getItem('medflow_hospital_auth_user_v2');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {}
    }
    return PRESET_HOSPITAL_USERS[0];
  });

  const login = (email: string, pass: string, customUser?: HospitalUser): boolean => {
    if (customUser) {
      setCurrentUser(customUser);
      localStorage.setItem('medflow_hospital_auth_user_v2', JSON.stringify(customUser));
      return true;
    }
    const matched = PRESET_HOSPITAL_USERS.find(u => u.email.toLowerCase() === email.toLowerCase()) || {
      id: `user-${Date.now()}`,
      name: email.split('@')[0].replace('.', ' '),
      email: email,
      persona: 'DOCTOR_PHYSICIAN' as const,
      role: 'Attending Physician',
      department: 'General Medicine',
      initials: email.substring(0, 2).toUpperCase()
    };
    setCurrentUser(matched);
    localStorage.setItem('medflow_hospital_auth_user_v2', JSON.stringify(matched));
    return true;
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('medflow_hospital_auth_user_v2');
  };

  const switchUser = (userId: string) => {
    const matched = PRESET_HOSPITAL_USERS.find(u => u.id === userId);
    if (matched) {
      setCurrentUser(matched);
      localStorage.setItem('medflow_hospital_auth_user_v2', JSON.stringify(matched));
    }
  };

  return (
    <AuthContext.Provider value={{
      currentUser,
      userName: currentUser?.name || 'Guest',
      role: currentUser?.role || 'Guest',
      department: currentUser?.department || 'St. Jude Hospital',
      persona: currentUser?.persona || 'HOSPITAL_HEAD',
      isAuthenticated: !!currentUser,
      login,
      logout,
      switchUser
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const c = useContext(AuthContext);
  if (!c) throw new Error('useAuth must be inside AuthProvider');
  return c;
};
