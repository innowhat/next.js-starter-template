import { FC } from 'react'
import { FooterProps } from './footer.types'
import styles from './footer.module.css'

const Footer: FC<FooterProps> = () => {
  return (
    <footer className={styles.footer} data-testid="footer">
      Copyright @ {new Date().getFullYear()}
    </footer>
  )
}

export default Footer
