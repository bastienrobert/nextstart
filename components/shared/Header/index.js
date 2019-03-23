import Link from 'components/shared/Link'

import css from './styles.scss'

export default function Header() {
  return (
    <header className={css.Header}>
      <nav>
        <ul className={css.list}>
          <li>
            <Link className={css.link} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={css.link} href="/products">
              Products
            </Link>
          </li>
          <li>
            <Link className={css.link} href="/about">
              About
            </Link>
          </li>
          <li>
            <Link className={css.link} href="/admin">
              Admin
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
