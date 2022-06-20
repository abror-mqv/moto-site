import React from 'react';
import styles from '../styles/Home.module.css'
import Header from './_components/components/header/Header';
import Write from './_components/write/Write';
import Order from './_components/write/Write'

const write = () => {
    return (
        <main className={styles.Home}>
        <Header/>
        <Write/>
      </main>
    );
};

export default write;