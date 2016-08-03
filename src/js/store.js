var redux = require('redux');
var createStore = redux.createStore;
var applyMiddleware = redux.applyMiddleware;
var thunk = require( 'redux-thunk' ).default;
var actions = require('./actions');

var reducers = require('./reducers');

var store = createStore(reducers.rootReducer, applyMiddleware( thunk ));

console.log(store.getState());
console.log(store.dispatch(actions.addBookmark()));
console.log(store.getState().bookmarks);

module.exports = store;
