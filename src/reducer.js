// EXTERNAL DEPENDENCIES
import { createReducer } from 'redux-act'
import { Map } from 'immutable'

// INTERNAL DEPENDENCIES
import * as actions from 'actions'
import { pipe } from 'utils'
import {
  init,
  countMentions,
  addNewMsg,
  clearInput,
  setInput,
  saveUsername,
  showInputError,
  clearInputError,
  addNewGenericMsg
} from 'mutators'

const defaultState = Map({})

const stateReducer = createReducer(
  {
    [actions.init]: (state, action) => pipe([init(action), countMentions(action)], state),
    [actions.editInput]: (state, action) => pipe([setInput(action)], state),
    [actions.sendChatMsg]: (state, action) => pipe([addNewMsg(action), countMentions(action), clearInput(action)], state),
    [actions.saveUsername]: (state, action) =>
      pipe(
        [saveUsername(), clearInput({ name: 'username' }), clearInputError({ name: 'username' })],
        state
      ),
    [actions.showInputError]: (state, action) => pipe([showInputError(action)], state),
    [actions.addChatMsg]: (state, action) => pipe([addNewMsg(action), countMentions(action)], state),
    [actions.addGenericMsg]: (state, action) => pipe([addNewGenericMsg(action)], state)
  },
  defaultState
)

export default stateReducer
