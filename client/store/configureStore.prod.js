import { createStore, applyMiddleware, compose } from 'redux';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import reducers from '../reducers/';
import thunk from 'redux-thunk';
import { autoRehydrate } from 'redux-persist';
import RehydrationServices from '../services/RehydrationServices';
import apiMiddleware from '../middlewares/apiMiddleware';


const middlewares = [thunk, routerMiddleware(browserHistory), apiMiddleware];

const enhancers = compose(
  applyMiddleware(...middlewares),
  autoRehydrate(),
);

const store = createStore(reducers, enhancers);
RehydrationServices.updateReducers(store);

export default store;
