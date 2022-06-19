import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Header from './_components/components/header/Header'
import Content from './_components/blocks/Content.jsx'

export default function Home() {
  return (
    <main className={styles.Home}>
      <Header/>
      <Content/>
    </main>
  )
}
