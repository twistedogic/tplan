import React, {Component} from "react"
import Search from "./page/Search"
import Result from "./page/Result"

class View extends Component {
  constructor(props){
    super(props)
    this.state = {
      selected:false,
      name:"",
      title:"",
      table:"",
    }
  }
  onSelect = (id) => {
    const {data} = this.props
    const {name,title,table} = data.filter(entry => entry.id === id)[0]
    this.setState({
      name,title,table,selected:true
    })
  }
  onClick = (event) => {
    event.preventDefault()
    this.setState({
      selected:false
    })
  }
  render(){
    const {onSelect,onClick} = this
    const {data} = this.props
    const {name,title,table,selected} = this.state
    const content = !selected ? <Search data={data} onSelect={onSelect} /> : <Result name={name} title={title} table={table} onClick={onClick} />
    return (
      <section>{content}</section>
    )
  }
}

export default View
