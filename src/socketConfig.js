import {
  saveUsername,
  showInputError,
  addChatMsg,
  addGenericMsg,
  addUserToChat,
  sendChatMsg
} from 'actions'
import { history } from 'App'

const setUpSocket = socket => {
  const listener = ({ getState, dispatch }) => {
    socket.on('loginSuccess', data => dispatch(saveUsername()) && history.push('/chat'))
    socket.on('loginFailed', data =>
      dispatch(showInputError({ name: 'username', error: 'is already taken' }))
    )
    socket.on('newMessage', ({ message, username }) => {
      const state = getState()
      const currentUsername = state.get('username')
      return (
        currentUsername !== username &&
        dispatch(addChatMsg({ value: message, username, isSelf: false }))
      )
    })
    socket.on('userJoined', data =>
      dispatch(addGenericMsg({ value: `${data.username} has joined the chat` }))
    )
    socket.on('userLeft', data =>
      dispatch(addGenericMsg({ value: `${data.username} has left the chat` }))
    )
  }

  const emitter = action => {
    const emitterConfig = {
      [addUserToChat]: () => socket.emit('addUser', action.payload.userName)
      // [sendChatMsg]: () => socket.emit('newMessage', action.payload.value)
    }
    emitterConfig[action.type] && emitterConfig[action.type]()
  }
  return { listener, emitter }
}

export default setUpSocket
