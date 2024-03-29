import Head from 'next/head'
import styles from './layout.module.css'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js Project Starter Template</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
