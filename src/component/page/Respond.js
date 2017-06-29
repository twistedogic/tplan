import React,{Component} from "react"
import _ from "lodash"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import * as convActions from "../../action/conv.action"

const generateReply = (data, value) => {
  let message = "I might be stuck..."
  const filtered = data.filter(entry => {
    const { name } = entry
    return _.includes(name.toLowerCase(), value.toLowerCase())
  })
  if (filtered.length === 1) {
    const { table, name } = filtered[0]
    message =  `
    Hi ${name}!
    Welcome!
    You are seated in Table ${table} :)
    `
  } 
  return message
}

class Respond extends Component {
  componentWillMount() {
    const { step,actions,steps} = this.props
    const {key} = step
    const {value} = steps.reply
    const {updateKey} = actions
    updateKey({key,value})
  }
  shouldComponentUpdate(nextProps){
    const {conv} = nextProps
    const {key} = this.props.step
    return conv.key === key
  }
  render() {
    const {data,conv} = this.props
    const message = generateReply(data,conv.value)
    return (
      <div>{message}</div>
    )
  }
}

const mapStatetoProps = (state) => {
  return {
    data:state.data,
    conv:state.conv,
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {actions:bindActionCreators(convActions,dispatch)}
}

export {Respond}
export default connect(mapStatetoProps,mapDispatchtoProps)(Respond)