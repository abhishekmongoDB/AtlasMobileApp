import React, { useState, useContext, createContext, ReactNode, useEffect } from 'react';
import { Alert } from 'react-native';

interface GlobalContextProps {
  first: boolean;
  second: string;
}

const defaultContext: GlobalContextProps = {
  first: false,
  second: "false"
};

const GlobalContext = createContext<GlobalContextProps | null>(null);

interface GlobalProviderProps {
  children: ReactNode;
}

const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [first, setFirst] = useState<boolean>(defaultContext.first);
  const [second, setSecond] = useState<string>(defaultContext.second);
 
  return (
    <GlobalContext.Provider value={{ first, second }}>
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
