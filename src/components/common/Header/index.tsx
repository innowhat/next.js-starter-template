//Credit > https://github.com/ui-code-tv/myapp

import Link from 'next/link'
import { useState } from 'react'
import styles from './header.module.css'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const openMenu = () => setIsOpen(!isOpen)

  return (
    <header className={styles.header} data-testid="header">
      <nav className={styles.navbar}>
        <Link href="/">
          <a className={styles.navlogo}>[Logo]</a>
        </Link>
        <ul
          className={
            isOpen === false
              ? styles.navmenu
              : styles.navmenu + ' ' + styles.active
          }
        >
          <li className={styles.navitem}>
            <Link href="/">
              <a
                className={
                  isOpen === false
                    ? styles.navlink
                    : styles.navlink + ' ' + styles.active
                }
                onClick={openMenu}
              >
                Home
              </a>
            </Link>
          </li>
          <li className={styles.navitem}>
            <Link href="#">
              <a
                className={
                  isOpen === false
                    ? styles.navlink
                    : styles.navlink + ' ' + styles.active
                }
                onClick={openMenu}
              >
                About
              </a>
            </Link>
          </li>
        </ul>
        <button
          className={
            isOpen === false
              ? styles.hamburger
              : styles.hamburger + ' ' + styles.active
          }
          onClick={openMenu}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>
      </nav>
    </header>
  )
}

export default Header
