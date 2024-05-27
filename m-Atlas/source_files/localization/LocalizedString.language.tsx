import LocalizedStrings from 'react-native-localization';
import {Langauge as EnglishLangauge} from './EnglishConstants.language';
import {Langauge as HindiLangauge} from './HindiConstants.language';

/**
 * merged all language file 
 */
const translations = {
  en: {
    ...EnglishLangauge,
  },
  hi: {
    ...HindiLangauge,
  },
};

export default new LocalizedStrings(translations);
