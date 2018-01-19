import { addUserToChat, sendChatMsg } from 'actions'

const socketMiddleware = socket => store => next => action => {
  if (action.meta && action.meta.socket) {
    const emitterConfig = {
      [addUserToChat]: () => socket.emit('addUser', action.payload.userName),
      [sendChatMsg]: () => socket.emit('newMessage', action.payload.value)
    }
    emitterConfig[action.type] && emitterConfig[action.type]()
  }
  return next(action)
}
export default socketMiddleware
