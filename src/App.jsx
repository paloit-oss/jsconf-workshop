// EXTERNAL DEPENDENCIES
import React, { Fragment } from 'react'
import { Provider } from 'react-redux'
import { Route, Router } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'

// INTERNAL DEPENDENCIES
import { Login, Chat, Quiz } from 'routes'
import store from 'store'

export const history = createHistory()

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <Fragment>
        <Route exact path={'/'} component={Login} />
        <Route exact path={'/chat'} component={Chat} />
        <Route exact path={'/quiz'} component={Quiz} />
      </Fragment>
    </Router>
  </Provider>
)

export default App
