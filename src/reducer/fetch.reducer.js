import * as types from "../action/actionType"
import initialState from "./initialState"

const fetchReducer = (state = initialState.data, action) => {
  switch (action.type) {
    case types.FETCH_DATA:
      return action.data
    default:
      return state
  }
}

export default fetchReducer