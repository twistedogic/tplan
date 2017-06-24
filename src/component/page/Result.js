import React from "react"
import {
  Card, CardActions, CardHeader, CardText
} from "material-ui/Card"
import RaisedButton from "material-ui/FlatButton"

const Result = ({name,title,table,onClick}) => {
  return (
    <Card>
      <CardHeader
        title={name}
        subtitle={title}
      />
      <CardText>
        Table {table}
      </CardText>
      <CardActions>
        <RaisedButton primary={true} label="Close" onTouchTap={onClick} />
      </CardActions>
    </Card>
  )
}

export default Result
