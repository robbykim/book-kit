import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
const thunk = require( 'redux-thunk' ).default;

let store = createStore(reducers.rootReducer, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

module.exports = store;
