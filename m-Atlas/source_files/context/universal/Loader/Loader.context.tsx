import React, { useContext, useEffect, useState, Dispatch, SetStateAction } from 'react';

export const LOADER_DEFAULT_TIMEOUT = 15000;

interface ILoaderContext {
  updateLoaderValue: any;
  showLoader: boolean;
}

export const LoaderContext = React.createContext<ILoaderContext | null>(null);

const LoaderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [showLoader, setShowLoader] = useState<boolean>(false);

  const updateLoaderValue = (value: boolean) => {
    setShowLoader(value);
  };

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (showLoader) {
      timeoutId = setTimeout(() => {
        updateLoaderValue(false);
      }, LOADER_DEFAULT_TIMEOUT);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [showLoader]);

  return (
    <LoaderContext.Provider
      value={{
        updateLoaderValue,
        showLoader,
      }}>
      {children}
    </LoaderContext.Provider>
  );
};

const useLoader = () => {
  const loaderObject = useContext(LoaderContext);
  if (loaderObject === null) {
    throw new Error('useLoader() called outside of a LoaderProvider?');
  }
  return loaderObject;
};

export { LoaderProvider, useLoader };
