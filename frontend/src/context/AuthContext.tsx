import React, { createContext, useContext, useState, useEffect } from 'react';
import { HospitalUser, UserPersona } from '../types';

export const INITIAL_HOSPITAL_USERS: HospitalUser[] = [
  {
    id: 'u-manager',
    name: 'Marcus Sterling, MHA',
    email: 'manager.operations@stjudemedical.org',
    persona: 'MANAGER',
    role: 'Hospital Operations & Facility Manager',
    department: 'Hospital Administration & Asset Management',
    employeeId: 'MGR-001',
    shiftTiming: '08:00 AM - 06:00 PM (Executive Shift)'
  },
  {
    id: 'u-employee',
    name: 'Dr. Sarah Jenkins, MD',
    email: 'sarah.jenkins@stjudemedical.org',
    persona: 'EMPLOYEE',
    role: 'Senior Consultant Orthopedic Surgeon',
    department: 'Orthopedics & OT Complex',
    employeeId: 'EMP-8024',
    shiftTiming: '08:00 AM - 04:30 PM (OT Suite 1)'
  },
  {
    id: 'u-receptionist',
    name: 'Priya Nair',
    email: 'reception@stjudemedical.org',
    persona: 'RECEPTIONIST',
    role: 'Receptionist (Central Desk)',
    department: 'Central Registration & Token Desk',
    employeeId: 'REC-104',
    shiftTiming: '07:30 AM - 03:30 PM'
  },
  {
    id: 'u-patient',
    name: 'Robert Chen',
    email: 'robert.chen@gmail.com',
    persona: 'PATIENT',
    role: 'Registered Patient',
    department: 'Patient Self-Service Portal',
    employeeId: 'PT-90482'
  }
];

const STORAGE_USERS_KEY = 'medflow_registered_users_v3';

interface AuthContextType {
  currentUser: HospitalUser;
  persona: UserPersona;
  allUsers: HospitalUser[];
  switchUser: (persona: UserPersona) => void;
  switchUserById: (userId: string) => void;
  registerUser: (newUser: HospitalUser) => void;
  login: (user: HospitalUser) => void;
  logout: () => void;
  isLoggedIn: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [allUsers, setAllUsers] = useState<HospitalUser[]>(() => {
    const saved = localStorage.getItem(STORAGE_USERS_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      } catch (e) {}
    }
    localStorage.setItem(STORAGE_USERS_KEY, JSON.stringify(INITIAL_HOSPITAL_USERS));
    return INITIAL_HOSPITAL_USERS;
  });

  const [currentUser, setCurrentUser] = useState<HospitalUser>(() => {
    const savedPersona = localStorage.getItem('medflow_active_persona');
    const savedUserId = localStorage.getItem('medflow_active_user_id');

    if (savedUserId) {
      const match = allUsers.find(u => u.id === savedUserId);
      if (match) return match;
    }
    if (savedPersona) {
      const match = allUsers.find(u => u.persona === savedPersona);
      if (match) return match;
    }
    return allUsers[0];
  });

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);

  const switchUser = (p: UserPersona) => {
    const found = allUsers.find(u => u.persona === p) || allUsers[0];
    setCurrentUser(found);
    setIsLoggedIn(true);
    localStorage.setItem('medflow_active_persona', p);
    localStorage.setItem('medflow_active_user_id', found.id);
  };

  const switchUserById = (userId: string) => {
    const found = allUsers.find(u => u.id === userId) || allUsers[0];
    setCurrentUser(found);
    setIsLoggedIn(true);
    localStorage.setItem('medflow_active_persona', found.persona);
    localStorage.setItem('medflow_active_user_id', found.id);
  };

  const registerUser = (newUser: HospitalUser) => {
    const updated = [newUser, ...allUsers];
    setAllUsers(updated);
    localStorage.setItem(STORAGE_USERS_KEY, JSON.stringify(updated));
    setCurrentUser(newUser);
    setIsLoggedIn(true);
    localStorage.setItem('medflow_active_persona', newUser.persona);
    localStorage.setItem('medflow_active_user_id', newUser.id);
  };

  const login = (user: HospitalUser) => {
    setCurrentUser(user);
    setIsLoggedIn(true);
    localStorage.setItem('medflow_active_persona', user.persona);
    localStorage.setItem('medflow_active_user_id', user.id);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{
      currentUser,
      persona: currentUser.persona,
      allUsers,
      switchUser,
      switchUserById,
      registerUser,
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
