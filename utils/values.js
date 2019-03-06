class Values {
  constructor() {
    this.scroll = {
      y: this.getScrollTop()
    }

    this.onResize()
    window.addEventListener('resize', this.onResize)
  }

  onResize = () => {
    this.viewport = {
      width: window.innerWidth,
      height: window.innerHeight
    }
  }

  getScrollTop() {
    return window.pageYOffset || document.documentElement.scrollTop
  }
}

export const values = new Values()
