// src/context/AuthProvider.jsx
import React, { useState } from 'react';
import { AuthContext } from './AuthContext';
import { getLocalStorage, initialAdmin, initialEmployees, setLocalStorage } from '../utils/LocalStorage';

const AuthProvider = ({ children }) => {
  // ensure defaults exist in localStorage (only runs in browser)
  if (typeof window !== 'undefined') {
    setLocalStorage();
  }

  const [userData, setUserData] = useState(() => {
    // SSR-safe guard
    if (typeof window === 'undefined') {
      return { employees: initialEmployees, admin: initialAdmin };
    }
    // read from localStorage with fallback to initial values
    const stored = getLocalStorage();
    return {
      employees: Array.isArray(stored.employees) ? stored.employees : initialEmployees,
      admin: stored.admin ?? initialAdmin
    };
  });

  return (
    <AuthContext.Provider value={{ userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
