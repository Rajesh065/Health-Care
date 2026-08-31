import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, UserRole } from '../types';
import { api } from '../services/api';

interface AuthContextType {
  currentUser: User;
  switchRole: (role: UserRole) => void;
}

const DEFAULT_USER: User = {
  id: 'usr-doc-1',
  name: 'Dr. Marcus Vance, MD',
  email: 'doctor@medflow.health',
  role: 'DOCTOR',
  department: 'Cardiology',
  specialty: 'Interventional Cardiology',
  phone: '+1 (555) 382-9912'
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User>(DEFAULT_USER);
  const [usersList, setUsersList] = useState<User[]>([DEFAULT_USER]);

  useEffect(() => {
    api.getUsers().then(users => {
      if (users && users.length > 0) {
        setUsersList(users);
        const doc = users.find(u => u.role === 'DOCTOR') || users[0];
        setCurrentUser(doc);
      }
    }).catch(() => {});
  }, []);

  const switchRole = (role: UserRole) => {
    const target = usersList.find(u => u.role === role);
    if (target) setCurrentUser(target);
  };

  return (
    <AuthContext.Provider value={{ currentUser, switchRole }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
