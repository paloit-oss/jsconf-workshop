// EXTERNAL DEPENDENCIES
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import io from 'socket.io-client'

// INTERNAL DEPENDENCIES
import stateReducer from 'reducer'
import socketMiddleware from './middlewares/socket'
import setUpSocket from 'socketConfig'

// const socket = io('https://murmuring-taiga-86309.herokuapp.com')
const socket = io('localhost:5000')

const middlewares = applyMiddleware(socketMiddleware(setUpSocket(socket)))
const store = createStore(stateReducer, composeWithDevTools(middlewares))

export default store
