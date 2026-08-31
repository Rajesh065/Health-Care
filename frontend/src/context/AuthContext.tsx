import React, { createContext, useContext, useState } from 'react';

interface AuthContextType {
  role: string;
  setRole: (r: string) => void;
  doctorName: string;
  hospitalName: string;
  department: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [role, setRole] = useState('PHYSICIAN');
  return (
    <AuthContext.Provider value={{
      role,
      setRole,
      doctorName: 'Dr. Sarah Jenkins, MD',
      hospitalName: 'St. Jude Medical Center & University Hospital',
      department: 'Division of Cardiology'
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const c = useContext(AuthContext);
  if (!c) throw new Error('useAuth error');
  return c;
};
