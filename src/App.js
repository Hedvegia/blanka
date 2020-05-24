import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Main from './Layout/Main';

const history = createBrowserHistory();

export const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </Router>
  )
};
