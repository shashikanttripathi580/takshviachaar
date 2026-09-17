import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Order } from '../types';

interface NavigationContextType {
  currentPath: string;
  navigate: (path: string) => void;
  lastOrder: Order | null;
  setLastOrder: (order: Order) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const getInitialPath = (): string => {
    const hash = window.location.hash.replace(/^#/, '');
    return hash ? (hash.startsWith('/') ? hash : `/${hash}`) : '/';
  };

  const [currentPath, setCurrentPath] = useState<string>(getInitialPath);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [lastOrder, setLastOrderState] = useState<Order | null>(() => {
    try {
      const saved = localStorage.getItem('takshvi_achaar_last_order') || localStorage.getItem('achaar_ghar_last_order');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const setLastOrder = (order: Order) => {
    setLastOrderState(order);
    try {
      localStorage.setItem('takshvi_achaar_last_order', JSON.stringify(order));
    } catch (e) {
      console.error('Error saving order', e);
    }
  };


  const navigate = (path: string) => {
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    window.location.hash = cleanPath;
    setCurrentPath(cleanPath);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#/, '');
      const path = hash ? (hash.startsWith('/') ? hash : `/${hash}`) : '/';
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <NavigationContext.Provider
      value={{
        currentPath,
        navigate,
        lastOrder,
        setLastOrder,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = (): NavigationContextType => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};
