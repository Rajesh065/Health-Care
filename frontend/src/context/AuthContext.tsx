import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, UserRole } from '../types';
import { api } from '../services/api';

interface AuthContextType {
  currentUser: User;
  usersList: User[];
  switchRole: (role: UserRole) => void;
  token: string;
}

const DEFAULT_USER: User = {
  id: 'usr-doc-1',
  name: 'Dr. Marcus Vance, MD',
  email: 'doctor@medflow.health',
  role: 'DOCTOR',
  department: 'Cardiology',
  specialty: 'Interventional Cardiology',
  licenseNumber: 'MD-92841-CA',
  phone: '+1 (555) 382-9912'
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User>(DEFAULT_USER);
  const [usersList, setUsersList] = useState<User[]>([DEFAULT_USER]);
  const [token, setToken] = useState<string>('mock-jwt-token-2026');

  useEffect(() => {
    // Load users from backend if available
    api.getUsers().then(users => {
      if (users && users.length > 0) {
        setUsersList(users);
        const doc = users.find(u => u.role === 'DOCTOR') || users[0];
        setCurrentUser(doc);
      }
    }).catch(() => {});
  }, []);

  const switchRole = async (role: UserRole) => {
    const target = usersList.find(u => u.role === role);
    if (target) {
      setCurrentUser(target);
      try {
        const res = await api.login(target.email);
        if (res?.token) setToken(res.token);
      } catch (err) {}
    }
  };

  return (
    <AuthContext.Provider value={{ currentUser, usersList, switchRole, token }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
