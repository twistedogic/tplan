import * as types from "./actionType"
import loadTable from "../util/sheet"

export const loadData = (data) => {
  return {type:types.FETCH_DATA,data}
}

export const getData = (key) => {
  return (dispatch) => {
    loadTable(key).then(res => {
      const data = res.data.map((entry,id) => Object.assign(entry,{id}))
      dispatch(loadData(data))
    })
  }
}