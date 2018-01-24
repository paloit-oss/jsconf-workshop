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
    [actions.editInput]: (state, action) => pipe([setInput(action)], state),
    [actions.sendChatMsg]: (state, action) => pipe([addNewMsg(action), clearInput(action)], state)
    // [actions.saveUsername]: (state, action) =>
    //   pipe(
    //     [saveUsername(), clearInput({ name: 'username' }), clearInputError({ name: 'username' })],
    //     state
    //   ),
    // [actions.showInputError]: (state, action) => pipe([showInputError(action)], state),
    // [actions.addChatMsg]: (state, action) => pipe([addNewMsg(action)], state),
    // [actions.addGenericMsg]: (state, action) => pipe([addNewGenericMsg(action)], state),
    // [actions.showSendMsgError]: (state, action) => pipe([showMsgError(action)], state),
    // [actions.appendOlderMsgs]: (state, action) => pipe([appendOlderMsgs(action)], state)
  },
  defaultState
)

export default stateReducer
