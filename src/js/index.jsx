import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes/routes';
import store from './redux/store';
import { Provider } from 'react-redux';

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(
    <Provider store={store}>
      {routes}
    </Provider>, document.getElementById('app'));
});
