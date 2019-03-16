class Values {
  constructor() {
    this.onResize()
    window.addEventListener('resize', this.onResize)
  }

  onResize = () => {
    this.viewport = {
      width: window.innerWidth,
      height: window.innerHeight
    }
  }
}

export const values = new Values()
