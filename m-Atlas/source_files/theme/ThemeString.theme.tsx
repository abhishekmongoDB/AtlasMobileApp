import LocalizedStrings from 'react-native-localization';

import { Theme as DarkSimplyCue } from './DarkConstants.theme';
import { Theme as LightSimplyCue } from './LightConstants.theme';

interface ThemeTranslations {
  dark: typeof DarkSimplyCue;
  light: typeof LightSimplyCue;
}

const themeTranslations: ThemeTranslations = {
  dark: {
    ...DarkSimplyCue,
  },
  light: {
    ...LightSimplyCue,
  },
};

export default new LocalizedStrings(themeTranslations as any);
