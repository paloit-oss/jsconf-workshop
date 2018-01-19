import io from 'socket.io-client'

import { saveUsername, showInputError, addChatMsg, addGenericMsg } from 'actions'
import { history } from './App'

const setUpSocketListener = (socket, dispatch) => {
  socket.on('loginSuccess', data => dispatch(saveUsername()) && history.push('/chat'))
  socket.on('loginFailed', data =>
    dispatch(showInputError({ name: 'username', error: 'is already taken' }))
  )
  socket.on('newMessage', ({ message, username }) =>
    dispatch(addChatMsg({ value: message, username, isSelf: false }))
  )
  socket.on('userJoined', data =>
    dispatch(addGenericMsg({ value: `${data.username} has joined the chat` }))
  )
}

export default setUpSocketListener
