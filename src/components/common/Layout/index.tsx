import Head from 'next/head'
import Header from '../Header'
import Footer from '../Footer'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col justify-center py-2">
      <Head>
        <title>Next.js Project Starter Template</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
