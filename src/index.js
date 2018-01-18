// import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import App from 'App'

if (process.env.NODE_ENV !== 'production') {
  // -------------------------------------------------
  // non-prod env
  const { AppContainer } = require('react-hot-loader')
  const renderApp = Component =>
    render(
      <AppContainer>
        <Component />
      </AppContainer>,
      document.getElementById('app')
    )

  renderApp(App)

  // Hot reload
  if (module.hot) {
    module.hot.accept('App', () => renderApp(App))
  }
} else {
  // -------------------------------------------------
  // prod env
  render(<App />, document.getElementById('app'))
}
