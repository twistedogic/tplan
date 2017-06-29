import React, { Component } from "react"
import Chatbot from "react-simple-chatbot"
import Respond from "./Respond"

const height = window.innerHeight
const contentHeight = height - 3 * 16 - 56 - 2

const styles = {
  style:{
    height,
    width:"100%"
  },
  contentStyle:{
    height:contentHeight
  },
}

class Bot extends Component {
  render() {
    const steps = [
      { id: "1", message: "Hi!", trigger: "2" },
      { id: "2", message: "Welcome to our wedding!", trigger: "3" },
      { id: "3", message: "Glad you can make it :)", trigger: "4" },
      { id: "4", message: "May I have your name?", trigger: "reply" },
      { id: "reply", user: true, trigger: "respond" },
      { id: "respond", asMessage: true, component: <Respond />, trigger: "reply" },
    ]
    return (
      <Chatbot hideUserAvatar steps={steps} {...styles} />
    )
  }
}

export default Bot