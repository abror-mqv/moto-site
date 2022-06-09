import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from './_components/components/header/Header'

export default function Home() {
  return (
    <main className={styles.Home}>
      <Header/>
    </main>
  )
}
