import React from 'react';
import styles from '../styles/Home.module.css'
import Order from './_components/order/Order';
import Header from './_components/components/header/Header';

const order = () => {
    return (
        <div className={styles.Order} >
            <Header/>
            <Order/>
        </div>
    );
};

export default order;