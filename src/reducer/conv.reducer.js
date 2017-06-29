import * as types from "../action/actionType"
import initialState from "./initialState"

const convReducer = (state = initialState.conv, action) => {
  switch (action.type) {
    case types.UPDATE_KEY:
      return action.conv
    default:
      return state
  }
}

export default convReducer