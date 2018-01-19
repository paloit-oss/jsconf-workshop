// EXTERNAL DEPENDENCIES
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import io from 'socket.io-client'

// INTERNAL DEPENDENCIES
import stateReducer from 'reducer'
import socketEmitMiddleware from './middlewares/socketEmit'
import setUpSocketListener from 'socket'

// const socket = io('https://murmuring-taiga-86309.herokuapp.com')
const socket = io('localhost:5000')

const middlewares = applyMiddleware(socketEmitMiddleware(socket))
const store = createStore(stateReducer, composeWithDevTools(middlewares))
setUpSocketListener(socket, store.dispatch)

export default store
