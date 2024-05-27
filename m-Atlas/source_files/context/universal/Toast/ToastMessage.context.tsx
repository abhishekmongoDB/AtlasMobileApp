import React, {useContext, ReactNode, useEffect} from 'react';

import {Toast} from 'react-native-toast-message/lib/src/Toast';
import {useToast} from 'react-native-toast-notifications';

interface ToastContextType {
  successToast: (txt: string) => void;
  errorToast: (txt: string) => void;
}

const ToastContext = React.createContext<ToastContextType | null>(null);

interface ToastMessageProviderProps {
  children: ReactNode;
}

const ToastMessageProvider: React.FC<ToastMessageProviderProps> = ({
  children,
}) => {
//   const toast = useToast();
//   useEffect(() => {
//     setTimeout(() => {
//       toast.show('Hello World', {
//         type: 'warning',
//         placement: 'top',
//         duration: 4000,
//         // Remove the 'offset' property from the object literal
//         // offset: 30,
//         animationType: 'slide-in',
//       });
//     }, 2000);
//   }, []);
  const successToast = (txt: string = ''): void => {
    successToastAPI(txt);
  };

  const errorToast = (txt: string = ''): void => {
    errorToastAPI(txt);
  };

  return (
    <ToastContext.Provider
      value={{
        successToast,
        errorToast,
      }}>
      {children}
    </ToastContext.Provider>
  );
};

const useCueToast = (): ToastContextType => {
  const toastContextObject = useContext(ToastContext);
  if (!toastContextObject) {
    throw new Error('useCueToast() called outside of a ToastMessageProvider');
  }
  return toastContextObject;
};

export {ToastMessageProvider, useCueToast};

export const successToastAPI = (txt: string = ''): void => {
  Toast.show({
    type: 'success',
    text1: txt,
  });
};

export const errorToastAPI = (txt: string = ''): void => {
  Toast.show({
    type: 'error',
    text1: txt,
  });
};
