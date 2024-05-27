import React, { createContext, useContext, useState } from 'react';
import * as RNLocalize from 'react-native-localize';

import AsyncStorage from '@react-native-async-storage/async-storage';
import DEFAULT_THEME from './ThemeSettings.theme';
import themeTranslations from './ThemeString.theme';

/**
 * https://blog.codecentric.de/en/2019/11/localization-react-native-mobile-app-react-context-hooks/
 */
const APP_THEME = 'appTheme';

interface ThemeContextProps {
  themeTranslations: any;
  setAppTheme: (theme: string) => void;
  appTheme: string;
  initializeAppTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  themeTranslations,
  setAppTheme: () => {},
  appTheme: DEFAULT_THEME,
  initializeAppTheme: () => {},
});

 const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [appTheme, setAppTheme] = useState<string>(DEFAULT_THEME);

  const setTheme = (theme: string) => {
    themeTranslations.setLanguage(theme);
    setAppTheme(theme);
    AsyncStorage.setItem(APP_THEME, theme);
  };

  const initializeAppTheme = async () => {
    const currentTheme = await AsyncStorage.getItem(APP_THEME);

    if (!currentTheme) {
      let localeCode = DEFAULT_THEME;
      // const supportedLocaleCodes = translations.getAvailableLanguages();
      // const phoneLocaleCodes = RNLocalize.getLocales().map(
      //   locale => locale.languageCode,
      // );
      // phoneLocaleCodes.some(code => {
      //   if (supportedLocaleCodes.includes(code)) {
      //     localeCode = code;
      //     return true;
      //   }
      // });
      setTheme(localeCode);
    } else {
      setTheme(currentTheme);
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        themeTranslations,
        setAppTheme: setTheme,
        appTheme,
        initializeAppTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const object = useContext(ThemeContext);
  if (object === null) {
    throw new Error(
      'useLocalization() called outside of a LocalizationProvider?'
    );
  }
  return object;
};

export { ThemeProvider, useTheme };
