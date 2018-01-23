// EXTERNAL DEPENDENCIES
import { List, Map } from 'immutable'

export const addNewMsg = ({ value, isSelf, username }) => state => {
  const currentChat = state.get('chats', List())
  const msgObj = Map({
    message: value,
    username,
    isSelf,
    type: 'chat',
    showResendButton: false
  })
  const updatedChat = currentChat.push(msgObj)
  return state.set('chats', updatedChat)
}

export const clearInput = ({ name }) => state => state.setIn(['inputs', name, 'value'], '')

export const setInput = ({ name, value }) => state => state.setIn(['inputs', name, 'value'], value)
