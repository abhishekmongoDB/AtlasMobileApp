/**
 * https://blog.codecentric.de/en/2019/11/localization-react-native-mobile-app-react-context-hooks/
 */
import React, { createContext, useState, useContext, useEffect } from 'react';
import * as RNLocalize from 'react-native-localize';

import AsyncStorage from '@react-native-async-storage/async-storage';
import DEFAULT_LANGUAGE from './LocalizedSettings.language';
import translations from './LocalizedString.language';

interface LocalizationContextProps {
  translations: any;
  setAppLanguage: (language: string) => void;
  appLanguage: string;
  initializeAppLanguage: () => void;
}

const APP_LANGUAGE = 'appLanguage';

export const LocalizationContext = createContext<LocalizationContextProps>({
  translations,
  setAppLanguage: () => {},
  appLanguage: DEFAULT_LANGUAGE,
  initializeAppLanguage: () => {},
});

const LocalizationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [appLanguage, setAppLanguage] = useState<string>(DEFAULT_LANGUAGE);

  const setLanguage = (language: string) => {
    translations.setLanguage(language);
    setAppLanguage(language);
    AsyncStorage.setItem(APP_LANGUAGE, language);
  };

  const initializeAppLanguage = async () => {
    const currentLanguage = await AsyncStorage.getItem(APP_LANGUAGE);

    if (!currentLanguage) {
      let localeCode = DEFAULT_LANGUAGE;
      const supportedLocaleCodes = translations.getAvailableLanguages();
      const phoneLocaleCodes = RNLocalize.getLocales().map(
        (locale) => locale.languageCode
      );
      phoneLocaleCodes.some((code) => {
        if (supportedLocaleCodes.includes(code)) {
          localeCode = code;
          return true;
        }
      });
      setLanguage(localeCode);
    } else {
      setLanguage(currentLanguage);
    }
  };

  useEffect(() => {
    initializeAppLanguage();
  }, []);

  return (
    <LocalizationContext.Provider
      value={{
        translations,
        setAppLanguage: setLanguage,
        appLanguage,
        initializeAppLanguage,
      }}
    >
      {children}
    </LocalizationContext.Provider>
  );
};

const useLocalization = () => {
  const notificationObject = useContext(LocalizationContext);
  if (notificationObject === null) {
    throw new Error(
      'useLocalization() called outside of a LocalizationProvider?'
    );
  }
  return notificationObject;
};

export { LocalizationProvider, useLocalization };
