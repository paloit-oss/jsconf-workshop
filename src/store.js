// EXTERNAL DEPENDENCIES
import { createStore } from 'redux'

// INTERNAL DEPENDENCIES
import stateReducer from 'reducer'

const store = createStore(
  stateReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
