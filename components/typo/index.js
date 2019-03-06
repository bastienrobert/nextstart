import React, { Component } from 'react'
import classnames from 'classnames/bind'

import css from './styles.scss'
const cx = classnames.bind(css)

export default class Typo extends Component {
  render() {
    const { className, children, ...types } = this.props
    const childrenStyle = cx(className, types)

    return React.Children.map(children, child => {
      return React.cloneElement(child, {
        className: cx(child.props.className, childrenStyle)
      })
    })
  }
}
