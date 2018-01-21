import { List, Map } from 'immutable'

let historyInstance = null

export const initChat = () => {
  if (!historyInstance) {
    const historyMessages = require('./chatHistory.json')

    const chatHistory = historyMessages.map((message) => {
      return Map(message)
    })
    
    console.log('historyMessages', historyMessages)
    console.log('Chat History, historyChat', chatHistory)
    
    historyInstance = List(chatHistory)
  }

  return historyInstance
}