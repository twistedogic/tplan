import React, {Component} from "react"
import AutoComplete from "material-ui/AutoComplete"
import _ from "lodash"

class Search extends Component {
  constructor(props){
    super(props)
    this.state = {
      data:[]
    }
  }
  handleUpdateInput = (value) => {
    const {data,onSelect} = this.props
    const filtered = data.filter(entry => {
      return _.includes(entry.name.toLowerCase(),value.toLowerCase())
    })
    if(filtered.length === 1){
      if(filtered[0].name.toLowerCase() === value.toLowerCase()){
        onSelect(filtered[0].id)
      }
    }
    this.setState({
      data:filtered.map(entry => entry.name)
    })
  }
  render(){
    return(
      <AutoComplete
        dataSource={this.state.data}
        onUpdateInput={this.handleUpdateInput}
      />
    )
  }
}
export default Search
