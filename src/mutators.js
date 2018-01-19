// EXTERNAL DEPENDENCIES
import { List } from 'immutable'

export const addNewMsg = ({ value }) => state => {
  const currentChat = state.get('chats', List())
  const updatedChat = currentChat.push(value)
  return state.set('chats', updatedChat)
}

export const clearInput = ({ name }) => state => state.setIn(['inputs', name], '')

export const setInput = ({ name, value }) => state => state.setIn(['inputs', name], value)
