import React, { useState, useContext, createContext, ReactNode, useEffect } from 'react';
import { Alert } from 'react-native';

interface GlobalContextProps {
  appId: string;
  setUpAppId: (appId: string) => void;
}

const defaultContext: GlobalContextProps = {
  appId: "",
  setUpAppId: () => {},
};

const GlobalContext = createContext<GlobalContextProps | null>(null);

interface GlobalProviderProps {
  children: ReactNode;
}

const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [appId, setUpAppId] = useState<string>(defaultContext.appId);
 
  return (
    <GlobalContext.Provider value={{ appId, setUpAppId }}>
      {children}
    </GlobalContext.Provider>
  );
};

const useAppGlobal = () => {
  const GlobalContextObject = useContext(GlobalContext);
  if (!GlobalContextObject) {
    throw new Error('useAppGlobal() called outside of a GlobalProvider');
  }
  return GlobalContextObject;
};

export { GlobalProvider, useAppGlobal };
