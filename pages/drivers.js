import Head from 'next/head'
import Link from 'next/link'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Drivers() {
  return (
    <div className="container">
      <Head>
        <title>Drivers page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Some drivers page!" />
        <p className="description">
          <Link href="/">Home</Link>
        </p>
      </main>

      <Footer />
    </div>
  )
}
