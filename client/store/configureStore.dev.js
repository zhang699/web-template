import config from '../config';
import { createStore, applyMiddleware, compose } from 'redux';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';

import { autoRehydrate } from 'redux-persist';
import RehydrationServices from '../services/RehydrationServices';

import reducers from '../reducers/';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import apiMiddleware from '../middlewares/apiMiddleware';


const middlewares = [thunk, routerMiddleware(browserHistory), apiMiddleware];
const logger = createLogger({
  collapsed: (getState, action) => (action.type.includes('@@router/')),
});

if (config.useReduxLog) middlewares.push(logger);

const enhancers = compose(
  applyMiddleware(...middlewares),
  autoRehydrate(),
);

const store = createStore(reducers, enhancers);
RehydrationServices.updateReducers(store);

export default store;
