import { createReducer } from 'reduxsauce';
import { Types } from '../actions/i18n';

const INITIAL_STATE = {
  language: null
};

export default createReducer(INITIAL_STATE, {
  [Types.CHANGE_LANGUAGE]: (state = INITIAL_STATE, action) => {
    const { language } = action;
    return {
      ...state,
      language,
    };
  }
});
