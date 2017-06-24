import Tabletop from "tabletop"

const loadTable = (key) => {
  return new Promise((resolve,reject) => {
    Tabletop.init({
      key,
      callback: (data,tabletop) => {
        resolve({data,tabletop})
      },
      simpleSheet:true,
    })
  })
}

export default loadTable
