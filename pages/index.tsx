import type { NextPage } from 'next'
import Head from 'next/head'
import Card from '../components/Card'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Frontend Mentor | Order summary card</title>
        <meta name="description" content="Frontend Mentor | Order summary card" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <main className={styles.main}>
        <Card />
      </main>
    </div>
  )
}

export default Home
