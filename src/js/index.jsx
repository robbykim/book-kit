var React = require('react');
var ReactDOM = require('react-dom');
var PageContainer = require('./page-container');

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(<PageContainer />, document.getElementById('app'));
});
