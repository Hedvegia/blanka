import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import Dashboard from './Containers/Dashboard'

const history = createBrowserHistory()

export const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Dashboard} />
      </Switch>
    </Router>
  )
}

