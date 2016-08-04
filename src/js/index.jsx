const React = require('react');
const ReactDOM = require('react-dom');
const routes = require('./routes/routes');
const Provider = require('react-redux').Provider;
const store = require('./store');

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(
    <Provider store={store}>
      {routes}
    </Provider>, document.getElementById('app'));
});
