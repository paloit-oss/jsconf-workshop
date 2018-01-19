import io from 'socket.io-client'

import { saveUsername, showInputError, addChatMsg } from 'actions'

const setUpSocketListener = (socket, dispatch) => {
  socket.on('loginSuccess', data => dispatch(saveUsername()))
  socket.on('loginFailed', data =>
    dispatch(showInputError({ name: 'username', error: 'is already taken' }))
  )
  socket.on('newMessage', ({ message }) => dispatch(addChatMsg({ value: message, isSelf: false })))
  socket.on('userJoined', data => console.log(data))
}

export default setUpSocketListener
