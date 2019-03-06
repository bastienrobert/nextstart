import NextLink from 'next/link'
import classnames from 'classnames'

import css from './styles.scss'

export default function Link({
  href,
  params,
  external,
  className,
  children,
  prefetch
}) {
  const componentStyle = classnames(css.Link, className)

  return (
    <NextLink
      prefetch={prefetch}
      href={params ? { pathname: href, query: { ...params } } : href}>
      <a
        className={componentStyle}
        target={external ? '_blank' : null}
        rel={external ? 'noopener' : null}>
        {children}
      </a>
    </NextLink>
  )
}
