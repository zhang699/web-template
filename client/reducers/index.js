import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import i18n from './i18n.js';
import indicator from './indicator.js';
import exampleReducer from './api/exampleReducer.js';
export default combineReducers({
  i18n,
  indicator,
  exampleReducer,
  routing: routerReducer,
});
