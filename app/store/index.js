import { applyMiddleware, compose, createStore } from 'redux';
import history from '../utils/history';
import { syncHistory } from 'react-router-redux';
import reducer from '../reducers';

const middleware = syncHistory(history);

let finalCreateStore;
if (__DEV__) {
  const DevTools = require('../containers/DevTools/DevTools').default;
  finalCreateStore = compose(
    applyMiddleware(middleware),
    DevTools.instrument()
  )(createStore);
} else {
  finalCreateStore = applyMiddleware(middleware)(createStore);
}

const store = finalCreateStore(reducer);
middleware.listenForReplays(store);

export default store;
