import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';

const thunk = require('redux-thunk').default;

const store = createStore(reducers.rootReducer,
  applyMiddleware(thunk)
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

module.exports = store;
