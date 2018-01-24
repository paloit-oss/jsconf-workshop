// EXTERNAL DEPENDENCIES
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import io from 'socket.io-client'

// INTERNAL DEPENDENCIES
import stateReducer from 'reducer'
import socketMiddleware from 'middlewares/socket'
import restMiddleware from 'middlewares/rest'
import setUpSocket from 'socketConfig'

const socket = io('https://paloit.herokuapp.com')
// const socket = io('localhost:5000')

const middlewares = applyMiddleware(socketMiddleware(setUpSocket(socket)), restMiddleware)
const store = createStore(stateReducer, composeWithDevTools(middlewares))

export default store
