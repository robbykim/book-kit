import { createStore, applyMiddleware, compose } from 'redux';
var thunk = require( 'redux-thunk' ).default;

var reducers = require('./reducers');

let store = createStore(reducers.rootReducer, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

module.exports = store;
