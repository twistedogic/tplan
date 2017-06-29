import { combineReducers } from "redux"
import fetchReducer from "./fetch.reducer"
import convReducer from "./conv.reducer"

const rootReducer = combineReducers({
  data:fetchReducer,
  conv:convReducer,
})

export default rootReducer