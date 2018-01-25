// EXTERNAL DEPENDENCIES
import { createReducer } from 'redux-act'
import { Map } from 'immutable'

// INTERNAL DEPENDENCIES
import * as actions from 'actions'
import { pipe } from 'utils'
import {
  addNewMsg,
  clearInput,
  setInput,
  saveUsername,
  showInputError,
  clearInputError,
  addNewGenericMsg,
  showMsgError,
  appendOlderMsgs
} from 'mutators'

const defaultState = Map({})

const stateReducer = createReducer(
  {
    [actions.editInput]: (state, payload) => pipe([setInput(payload)], state),
    [actions.sendChatMsg]: (state, payload) => pipe([addNewMsg(payload), clearInput(payload)], state)
    // [actions.saveUsername]: (state, payload) =>
    //   pipe(
    //     [saveUsername(), clearInput({ name: 'username' }), clearInputError({ name: 'username' })],
    //     state
    //   ),
    // [actions.showInputError]: (state, payload) => pipe([showInputError(payload)], state),
    // [actions.addChatMsg]: (state, payload) => pipe([addNewMsg(payload)], state),
    // [actions.addGenericMsg]: (state, payload) => pipe([addNewGenericMsg(payload)], state),
    // [actions.showSendMsgError]: (state, payload) => pipe([showMsgError(payload)], state),
    // [actions.appendOlderMsgs]: (state, payload) => pipe([appendOlderMsgs(payload)], state)
  },
  defaultState
)

export default stateReducer
