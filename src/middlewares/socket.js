import { addUserToChat, sendChatMsg } from 'actions'

const socketMiddleware = ({ listener, emitter }) => ({ dispatch }) => {
  listener(dispatch)
  return next => action => {
    action.meta && action.meta.socket && emitter(action)
    return next(action)
  }
}

export default socketMiddleware
