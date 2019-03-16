import React, { Component } from 'react'

import { connect } from 'react-redux'

import css from './styles.scss'

class PageLoader extends Component {
  componentDidMount() {
    import('gsap/TweenMax')
  }

  componentDidUpdate() {
    this.props.loader ? this.start() : this.done()
  }

  start = () => {
    this.tween = TweenMax.fromTo(
      this.bar,
      2,
      { x: '-150%' },
      { x: '-5%', ease: Linear.easeNone }
    )
  }

  done = () => {
    this.tween.kill()
    TweenMax.to(this.bar, 0.4, { x: '150%', ease: Linear.easeOut })
  }

  render() {
    return (
      <div className={css.PageLoader}>
        <div ref={el => (this.bar = el)} className={css.bar} />
      </div>
    )
  }
}

const mapState = ({ loader }) => ({
  loader
})

export default connect(mapState)(PageLoader)
