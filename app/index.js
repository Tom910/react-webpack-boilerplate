import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import Routes from './routes';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('app')
);

// Enable DevTools for Redux
if (__DEV__ && !window.devToolsExtension) {
  const DevTools = require('./containers/DevTools/DevTools').default;
  ReactDOM.render(
    <Provider store={store}>
      <div>
        <Routes />
        <DevTools />
      </div>
    </Provider>,
    document.getElementById('app')
  );
}
