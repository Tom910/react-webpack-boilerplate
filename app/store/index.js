import { applyMiddleware, compose, createStore } from 'redux';
import history from '../utils/history';
import { syncHistory } from 'react-router-redux';
import reducer from '../reducers';

const middleware = syncHistory(history);
const initialState = {};

let store;

// Enable DevTools for Redux
if (__DEV__) {
  const DevTools = require('../containers/DevTools/DevTools').default;
  store = createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(middleware),
      DevTools.instrument()
    ),
  );
} else {
  // Product
  store = createStore(
    reducer,
    initialState,
    applyMiddleware(middleware),
  );
}

middleware.listenForReplays(store);

export default store;
