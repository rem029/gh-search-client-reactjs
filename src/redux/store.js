import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import reduxLogger from 'redux-logger';

import usersReducer from './reducers/users.js';
import queryReducer from './reducers/query.js';

const middlewares =
  process.env.NODE_ENV === 'production' ? [thunk] : [thunk, reduxLogger];
const middlewareEnhancer = applyMiddleware(...middlewares);

const store = createStore(
  combineReducers({ users: usersReducer, query: queryReducer }),
  compose(
    middlewareEnhancer,
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (fn) => fn
  )
);

export default store;
