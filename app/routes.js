import React from 'react';
import { Router, IndexRoute, Route } from 'react-router';
import { App, Home, About, Users, Counter } from './containers';
import history from './utils/history';

export default () => (
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="about" component={About}/>
      <Route path="users" component={Users}/>
    <Route path="counter" component={Counter}/>
    </Route>
  </Router>
);
