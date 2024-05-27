import React, {useState, useContext, createContext, ReactNode} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

interface AsyncStorageContextProps {
  storedValue: string | null;
  saveItem: (key: string, value: string) => Promise<void>;
  getItem: (key: string) => Promise<void>;
  removeItem: (key: string) => Promise<void>;
}

const AsyncStorageContext = createContext<AsyncStorageContextProps | null>(
  null,
);

interface AsyncStorageProviderProps {
  children: ReactNode;
}

const AsyncStorageProvider: React.FC<AsyncStorageProviderProps> = ({
  children,
}) => {
  const [storedValue, setStoredValue] = useState<string | null>(null);

  const saveItem = async (key: string, value: string) => {
    try {
      await saveInAsyncStorage(key, value, (response, error) => {});
    } catch (error) {
      console.error('Error saving data', error);
    }
  };

  const getItem = async (key: string) => {
    try {
      await getFromAsyncStorage(key, (response, error) => {});
    } catch (error) {
      console.error('Error retrieving data', error);
    }
  };

  const removeItem = async (key: string) => {
    try {
      await removeFromAsyncStorage(key, (response, error) => {});
    } catch (error) {
      console.error('Error removing data', error);
    }
  };

  return (
    <AsyncStorageContext.Provider
      value={{storedValue, saveItem, getItem, removeItem}}>
      {children}
    </AsyncStorageContext.Provider>
  );
};

const useAsyncStorage = () => {
  const context = useContext(AsyncStorageContext);
  if (!context) {
    throw new Error(
      'useAsyncStorage() called outside of a AsyncStorageProvider',
    );
  }
  return context;
};

export {AsyncStorageProvider, useAsyncStorage};
// ===============================================================//
interface AsyncStorageModel {
  value: string | null;
  key: string;
}

type AsyncStorageCallback = (
  response: AsyncStorageModel | null,
  error: Error | null | undefined,
) => void;

export const saveInAsyncStorage = async (
  key: string,
  value: string,
  callback: AsyncStorageCallback,
) => {
  try {
    await AsyncStorage.setItem(key, value);
    const data: AsyncStorageModel = {
      value: value,
      key: key,
    };
    callback(data, null);
  } catch (error) {
    console.error('Error saving data', error);
  }
};

export const getFromAsyncStorage = async (
  key: string,
  callback: AsyncStorageCallback,
) => {
  try {
    const value = await AsyncStorage.getItem(key);
    const data: AsyncStorageModel = {
      value: value,
      key: key,
    };
    callback(data, null);
  } catch (error) {
    console.error('Error retrieving data', error);
    callback(null, error as Error);
  }
};

export const removeFromAsyncStorage = async (
  key: string,
  callback: AsyncStorageCallback,
) => {
  try {
    await AsyncStorage.removeItem(key);
    const data: AsyncStorageModel = {
      value: null,
      key: key,
    };
    callback(data, null);
  } catch (error) {
    console.error('Error removing data', error);
    callback(null, error as Error);
  }
};
