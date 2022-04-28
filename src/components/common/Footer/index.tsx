const Footer = () => {
  return (
    <footer
      className="flex h-24 w-full items-center justify-center border-t"
      data-testid="footer"
    >
      Copyright @ {new Date().getFullYear()}
    </footer>
  )
}

export default Footer
