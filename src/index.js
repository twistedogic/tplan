import React from "react"
import ReactDOM from "react-dom"
import fastclick from "fastclick"
import { Provider } from "react-redux"
import App from "./component/App"
import configureStore from "./store/configureStore"
import {getData} from "./action/fetch.action"

fastclick.attach(document.body)
const KEY = "1w1QxJ4VRK81kc0eeNPsyPIEiQiIcvjWM2uVl0CobuxM"
const store = configureStore()
store.dispatch(getData(KEY))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
