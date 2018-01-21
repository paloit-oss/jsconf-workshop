// EXTERNAL DEPENDENCIES
import { List, Map } from 'immutable'

// INTERNAL DEPENDENCIES
import { initChat } from 'mock'

const countMention = (chatMessage) => {
  let a = 2;
  // Something slowing down your application
  for (let index = 1; index < 10000; index++) {
    for (let power = 1; power < index; power++) {
      a = a * a
    }
  }

  const mentions = chatMessage
  .reduce(
    (mentions, msgObj) => {
      const message = msgObj.get('message').toLowerCase()
      const countJsConf = (message.match(/jsconf/g) || []).length;
      const countPaloIT = (message.match(/palo it/g) || []).length;

      if (countPaloIT > 0) {
        mentions.paloIT = mentions.paloIT + countPaloIT
      }
      if (countJsConf > 0) {
        mentions.jsConf = mentions.jsConf + countJsConf
      }

      return mentions
    },
    {
      jsConf: 0,
      paloIT: 0
    }
  )

  return Map(mentions)
}

export const countMentions = () => state => {
  const currentChat = state.get('chats', List())
  const updatedMentions = countMention(currentChat)

  return state.set('mentions', updatedMentions)
}

export const init = () => state => {
  return state.set('chats', initChat())
}

export const addNewMsg = ({ value, isSelf, username }) => state => {
  const currentChat = state.get('chats', List())
  const msgObj = Map({
    message: value,
    username,
    isSelf,
    type: 'chat'
  })

  const updatedChat = currentChat.push(msgObj)

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
