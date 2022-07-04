import React from 'react';
import Footer from './_components/components/footer/Footer';
import Gallery from './_components/gallery/Gallery';
import Header from './_components/components/header/Header';
import styles from "../styles/Home.module.css";


const gallery = () => {
    return (
        <main className={styles.Home}>
            <Header/>
            <Gallery/>
            <Footer/>
        </main>
    );
};

export default gallery;