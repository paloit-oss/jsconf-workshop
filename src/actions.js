// EXTERNAL DEPENDENCIES
import { createAction } from 'redux-act'

export const editInput = createAction('INPUT_EDIT')
export const sendChatMsg = createAction('CHAT_MSG_SEND', arg => arg, arg => ({ socket: true }))
export const addUserToChat = createAction('USER_ADD', arg => arg, arg => ({ socket: true }))
export const saveUsername = createAction('USERNAME_SAVE')
export const showInputError = createAction('INPUT_ERROR')
export const addChatMsg = createAction('CHAT_MSG_ADD')
