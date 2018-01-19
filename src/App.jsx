// EXTERNAL DEPENDENCIES
import React, { Fragment } from 'react'
import { Provider } from 'react-redux'
import { Route, BrowserRouter as Router } from 'react-router-dom'

// INTERNAL DEPENDENCIES
import { Login, Chat } from 'routes'
import store from 'store'

const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Route exact path={'/'} component={Login} />
        <Route exact path={'/chat'} component={Chat} />
      </Fragment>
    </Router>
  </Provider>
)

export default App
