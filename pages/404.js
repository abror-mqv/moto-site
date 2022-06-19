import styles from '../styles/Home.module.css'

import Header from "./_components/components/header/Header"
import Error404 from './_components/blocks/ERROR_404/Error404'


export default function Custom404() {
    return (
        <>
     <div className={styles.Home}>
      <Header/>
      <Error404/>
    </div>
      </>    
        )
}