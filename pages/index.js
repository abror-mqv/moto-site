import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import Header from './_components/components/header/Header'
import Footer from './_components/components/footer/Footer'
import Content from './_components/blocks/Content.jsx'

export default function Home({motopark}) {
  // console.log(motopark)
  return (
    <main className={styles.Home}>
      <Header/>
      <Content/>
      <Footer/>
    </main>
  )
}


// export async function getServerSideProps(){
//   const motopark = await axios.get("http://127.0.0.1:1337/api/motopark/1");



//   return{
//     props: {
//       motopark: motopark.data
//     }
//   }
// }