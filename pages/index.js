import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import Header from './_components/components/header/Header'
import Footer from './_components/components/footer/Footer'
import Content from './_components/blocks/Content.jsx'

export default function Home({motopark, service}) {
  // console.log("Motopark: ",motopark)
  // console.log("Service: : ",service)

  return (
    <main className={styles.Home}>
      <Header/>
      <Content/>
      <Footer/>
    </main>
  )
}


// export async function getServerSideProps(){
//   const url = "http://127.0.0.1:1337"
//   const motopark = await axios.get(`${url}/api/motopark`);
//   const service = await axios.get(`${url}/api/service-at-the-home-pages`)



//   return{
//     props: {
//       motopark: motopark.data,
//       service: service.data
//     }
//   }
// }