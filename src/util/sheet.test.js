import loadTable from "./sheet"

xdescribe("sheet" ,() => {
  it("should return err" ,() => {
    const key = "1XKEoNootdqppngBRDnfoj0qjrdfCGcprqegMaLsZs24"
    return loadTable(key).then(res => {
      expect(res).toHaveProperty("data")
      expect(res).toHaveProperty("tabletop")
    })
  })
})
