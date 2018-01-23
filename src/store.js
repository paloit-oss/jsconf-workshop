// EXTERNAL DEPENDENCIES
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import io from 'socket.io-client'

// INTERNAL DEPENDENCIES
import stateReducer from 'reducer'

const store = createStore(stateReducer, composeWithDevTools())

export default store
