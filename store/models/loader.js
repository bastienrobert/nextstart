const loader = {
  state: false,
  reducers: {
    start() {
      return true
    },
    stop() {
      return false
    }
  }
}

export default loader
