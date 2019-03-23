import React, { Component } from 'react'
import classnames from 'classnames'

import { getRatioFromDimensions } from 'utils/helpers'

import css from './styles.scss'

export default class Image extends Component {
  static defaultProps = {
    dimensions: { width: 512, height: 512 },
    alt: ''
  }

  async componentDidMount() {
    await import('gsap/TweenMax')

    const { lazy } = this.props

    if (this.props.lazy) this.load()
  }

  load() {
    this.refs.image.onload = this.onLoad
    this.refs.image.src = this.props.src
  }

  onLoad = () => {
    TweenMax.to(this.refs.mask, 0.5, {
      yPercent: -100,
      ease: Expo.easeInOut,
      delay: 1
    })
  }

  render() {
    const { src, alt, lazy, ratio, dimensions, className } = this.props
    const componentStyle = classnames(css.Image, className)
    const paddingBottom = ratio
      ? ratio * 100
      : getRatioFromDimensions(dimensions)

    return (
      <figure className={componentStyle}>
        <div
          className={css.sizer}
          ref="sizer"
          style={{ paddingBottom: paddingBottom + '%' }}>
          {lazy && <div className={css.mask} ref="mask" />}
          <img src={lazy ? null : src} alt={alt} ref="image" />
        </div>
      </figure>
    )
  }
}
