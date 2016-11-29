import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import i18n from './i18n.js';

export default combineReducers({
  i18n,
  routing: routerReducer,
});
