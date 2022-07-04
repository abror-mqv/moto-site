import React from 'react';
import styles from "../styles/Home.module.css";
import Header from './_components/components/header/Header'
import About from './_components/about/About'
import Footer from './_components/components/footer/Footer';

const about = () => {
    return (
        <main className={styles.Home}>
            <Header/>
            <About/>
            <Footer/>
        </main>
    );
};

export default about;