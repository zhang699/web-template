import { createTypes } from 'reduxsauce';
import i18n from '../libs/i18n/';
export const Types = createTypes(`
  CHANGE_LANGUAGE
  SHOW_BAR
`);


export const changeLanguage = (newLanguage) => {
  i18n.changeLanguage(newLanguage);
  return {
    type: Types.CHANGE_LANGUAGE, language: newLanguage
  };
};
