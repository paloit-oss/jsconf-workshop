// EXTERNAL DEPENDENCIES
import { createReducer } from 'redux-act'
import { Map } from 'immutable'

// INTERNAL DEPENDENCIES
import * as actions from 'actions'
import { pipe } from 'utils'
import { addNewMsg, clearInput, setInput } from 'mutators'

const defaultState = Map({})

const stateReducer = createReducer(
  {
    [actions.editInput]: (state, action) => pipe([setInput(action)], state),
    [actions.sendChatMsg]: (state, action) => pipe([addNewMsg(action), clearInput(action)], state)
  },
  defaultState
)

export default stateReducer
