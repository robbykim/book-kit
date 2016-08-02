const React = require('react');
const ReactDOM = require('react-dom');
const PageContainer = require('./page-container');
const routes = require('./routes/routes');

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(routes, document.getElementById('app'));
});
