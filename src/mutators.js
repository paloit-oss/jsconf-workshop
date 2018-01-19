// EXTERNAL DEPENDENCIES
import { List, Map } from 'immutable'

export const addNewMsg = ({ value, isSelf }) => state => {
  const currentChat = state.get('chats', List())
  const msgObj = Map({
    message: value,
    isSelf
  })
  const updatedChat = currentChat.push(msgObj)
  return state.set('chats', updatedChat)
}

export const clearInput = ({ name }) => state => state.setIn(['inputs', name, 'value'], '')

export const setInput = ({ name, value }) => state => state.setIn(['inputs', name, 'value'], value)

export const saveUsername = () => state => {
  const username = state.getIn(['inputs', 'username'])
  return state.set(['username'], username)
}

export const showInputError = ({ name, error }) => state =>
  state.setIn(['inputs', name, 'error'], error)

export const clearInputError = ({ name }) => state => state.setIn(['inputs', name, 'error'], '')
