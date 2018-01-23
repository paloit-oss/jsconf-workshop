// EXTERNAL DEPENDENCIES
import { List, Map } from 'immutable'

// INTERNAL DEPENDENCIES
import { initChat } from 'mock'



const updateMentionMessage = (state, newMessage) => {
  const mentions = state.get('mentions', Map({
    jsConf: 0,
    paloIT: 0
  }))
  
  let a = 2;
  // Something slowing down your application
  for (let index = 1; index < 10000; index++) {
    for (let power = 1; power < index; power++) {
      a = a * a
    }
  }

  if (newMessage) {
    let jsConf = 0
    let paloIT = 0
    const message = newMessage.toLowerCase()
    const countJsConf = (message.match(/jsconf/g) || []).length;
    const countPaloIT = (message.match(/palo it/g) || []).length;

    if (countPaloIT > 0 || countJsConf > 0) {
      return new Map({
        jsConf: mentions.get('jsConf') + countJsConf,
        paloIT: mentions.get('paloIT') + countPaloIT
      })
    }
  }

  return mentions
}

export const countMentions = ({ value }) => state => {
  const currentChat = state.get('chats', List())
  const updatedMentions = updateMentionMessage(state, value)

  return state.set('mentions', updatedMentions)
}


const initCountAllMentions = (chatMessage) => {
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

export const initMentions = () => state => {
  const currentChat = state.get('chats', List())
  const updatedMentions = initCountAllMentions(currentChat)

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
