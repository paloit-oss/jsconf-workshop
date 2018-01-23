// EXTERNAL DEPENDENCIES
import { createReducer } from 'redux-act'
import { Map } from 'immutable'

// INTERNAL DEPENDENCIES
import * as actions from 'actions'
import { pipe } from 'utils'
import { addNewMsg, clearInput, setInput, saveUsername, clearInputError } from 'mutators'

const defaultState = Map({})

const stateReducer = createReducer(
  {
    [actions.editInput]: (state, action) => pipe([setInput(action)], state),
    [actions.sendChatMsg]: (state, action) => pipe([addNewMsg(action), clearInput(action)], state),
    [actions.saveUsername]: (state, action) =>
      pipe(
        [saveUsername(), clearInput({ name: 'username' }), clearInputError({ name: 'username' })],
        state
      )
  },
  defaultState
)

export default stateReducer
