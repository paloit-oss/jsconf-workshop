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

export const showMsgError = action => state => {
  const chats = state.get('chats')
  const updatedChat = chats.map(
    chat => (chat.get('message') === action.message ? chat.set('showResendButton', true) : chat)
  )
  return state.set('chats', updatedChat)
}

export const addNewGenericMsg = ({ value }) => state => {
  const currentChat = state.get('chats', List())
  const msgObj = Map({
    message: value,
    type: 'generic'
  })
  const updatedChat = currentChat.push(msgObj)
  return state.set('chats', updatedChat)
}

export const clearInput = ({ name }) => state => state.setIn(['inputs', name, 'value'], '')

export const setInput = ({ name, value }) => state => state.setIn(['inputs', name, 'value'], value)

export const saveUsername = () => state => {
  const username = state.getIn(['inputs', 'username', 'value'])
  return state.set('username', username)
}

export const showInputError = ({ name, error }) => state =>
  state.setIn(['inputs', name, 'error'], error)

export const clearInputError = ({ name }) => state => state.setIn(['inputs', name, 'error'], '')

export const quizQns = ({ questions }) => state => state.setIn(['questions'], questions)

export const quizSubmit = ({ quizScore, quizStatus, quizStatusMsg }) => state => state.setIn(['quizScore'], quizScore) && state.setIn(['quizStatus'], quizStatus) && state.setIn(['quizStatusMsg'], quizStatusMsg)

export const appendOlderMsgs = ({ messages }) => state => {
  let currentChat = state.get('chats', List())
  const currentUser = state.get('username')
  let updatedChat = []
  messages.map(value => {
    let msgObj = Map({
      message: value.message,
      username: value.username,
      isSelf: value.username.toLowerCase() === currentUser.toLowerCase(),
      type: 'chat'
    })
    updatedChat.push(msgObj)
  })
  return state.set('chats', currentChat.merge(updatedChat))
}
