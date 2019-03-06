import Link from 'components/shared/Link'

import css from './styles.scss'

export default function Header() {
  return (
    <header className={css.Header}>
      <nav>
        <ul className={css.list}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="products">Products</Link>
          </li>
          <li>
            <Link href="about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
