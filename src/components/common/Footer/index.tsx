import styles from './footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer} data-testid="footer">
      Copyright @ {new Date().getFullYear()}
    </footer>
  )
}

export default Footer
