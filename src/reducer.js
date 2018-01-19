// EXTERNAL DEPENDENCIES
import { createReducer } from 'redux-act'
import { Map } from 'immutable'

// INTERNAL DEPENDENCIES
import * as actions from 'actions'

const defaultState = Map({})

const stateReducer = createReducer(
  {
    [actions.editInput]: (state, { name, value }) => state.setIn(['inputs', name], value)
  },
  defaultState
)

export default stateReducer
