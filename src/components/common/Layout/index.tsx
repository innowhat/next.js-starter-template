import Head from 'next/head'
import Header from '../Header'
import Footer from '../Footer'
import Box from '@mui/material/Box'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Next.js Project Starter Template</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Box component="main" minHeight="80vh">
        {children}
      </Box>
      <Footer />
    </>
  )
}

export default Layout
