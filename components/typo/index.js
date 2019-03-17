import React, { Component } from 'react'
import classnames from 'classnames/bind'
import snarkdown from 'snarkdown'

import css from './styles.scss'
const cx = classnames.bind(css)

export default class Typo extends Component {
  renderMarkdown() {
    return (
      <div
        className={css.markdown}
        dangerouslySetInnerHTML={{ __html: snarkdown(this.props.markdown) }}
      />
    )
  }

  render() {
    const { className, children, markdown, ...types } = this.props
    if (markdown) return this.renderMarkdown()
    const childrenStyle = cx(className, types)

    return React.Children.map(children, child => {
      return React.cloneElement(child, {
        className: cx(child.props.className, childrenStyle)
      })
    })
  }
}
