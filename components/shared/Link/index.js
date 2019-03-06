import NextLink from 'next/link'
import classnames from 'classnames'

import css from './styles.scss'

export default function Link({
  href,
  external,
  className,
  children,
  prefetch
}) {
  const componentStyle = classnames(css.Link, className)

  return (
    <NextLink prefetch={prefetch} href={href}>
      <a
        className={componentStyle}
        target={external ? '_blank' : null}
        rel={external ? 'noopener' : null}>
        {children}
      </a>
    </NextLink>
  )
}
