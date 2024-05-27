import React, { useState, useContext, createContext, ReactNode } from 'react';

interface AppNavigationContextProps {
  first: boolean;
  second: string;
}

const defaultContext: AppNavigationContextProps = {
  first: false,
  second: "false"
};

const AppNavigationContext = createContext<AppNavigationContextProps | null>(null);

interface AppNavigationProviderProps {
  children: ReactNode;
}

const AppNavigationProvider = ({ children }: AppNavigationProviderProps) => {
  const [first, setFirst] = useState<boolean>(defaultContext.first);
  const [second, setSecond] = useState<string>(defaultContext.second);

  return (
    <AppNavigationContext.Provider value={{ first, second }}>
      {children}
    </AppNavigationContext.Provider>
  );
};

const useAppNavigation = () => {
  const appNavigationContextObject = useContext(AppNavigationContext);
  if (!appNavigationContextObject) {
    throw new Error('useAppNavigation() called outside of a AppNavigationProvider');
  }
  return appNavigationContextObject;
};

export { AppNavigationProvider, useAppNavigation };
