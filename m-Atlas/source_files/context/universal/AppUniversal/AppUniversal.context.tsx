import React, {
  useState,
  useContext,
  createContext,
  ReactNode,
  useEffect,
} from 'react';
import { Alert } from 'react-native';

import NetInfo from '@react-native-community/netinfo';
import UpdateDisableUIEnum from '../../../utiles/frameworks/DisableUserInteraction/UpdateDisableUIEnum';


// Add the import statement for UpdateDisableUIEnum
interface AppUniversalContextProps {
  internetConnectionStatus: boolean;
  updateDisableAction: string;
}

const defaultContext: AppUniversalContextProps = {
  internetConnectionStatus: false,
  updateDisableAction: UpdateDisableUIEnum.NO_ACTION,
};

const AppUniversalContext = createContext<AppUniversalContextProps | null>(
  null,
);

interface AppUniversalProviderProps {
  children: ReactNode;
}

const AppUniversalProvider = ({children}: AppUniversalProviderProps) => {
  const [internetConnectionStatus, setInternetConnectionStatus] =
    useState(false);

  const [updateDisableAction, setUpdateDisableAction] = useState(
    UpdateDisableUIEnum.NO_ACTION,
  );
  

  useEffect(() => {

    // setTimeout(()=>{
    //   setUpdateDisableAction(UpdateDisableUIEnum.FORCE_UPDATE);

    // },3000)
    const unsubscribe = NetInfo.addEventListener(state => {
      setInternetConnectionStatus(state?.isConnected ?? false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AppUniversalContext.Provider
      value={{
        internetConnectionStatus,
        updateDisableAction,
      }}>
      {children}
    </AppUniversalContext.Provider>
  );
};

const useAppUniversal = () => {
  const appUniversalContextObject = useContext(AppUniversalContext);
  if (!appUniversalContextObject) {
    throw new Error(
      'useAppAppUniversal() called outside of a AppUniversalProvider',
    );
  }
  return appUniversalContextObject;
};

export {AppUniversalProvider, useAppUniversal};
