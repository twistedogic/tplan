import React,{Component} from "react" 
import View from "./View"
import loadTable from "../util/sheet"

const KEY = "1w1QxJ4VRK81kc0eeNPsyPIEiQiIcvjWM2uVl0CobuxM"

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      data:[]
    }
  }
  componentDidMount(){
    loadTable(KEY).then(res => {
      const data = res.data.map((entry,id) => Object.assign(entry,{id}))
      this.setState({data})
    })
  }
  render(){
    const {data} = this.state
    return (
      <main>
        <View data={data} />
      </main>
    )
  }
}

export default App
