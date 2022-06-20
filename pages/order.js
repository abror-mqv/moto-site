import React from 'react';
import styles from '../styles/Home.module.css'
import Order from './_components/order/Order';
import Header from './_components/components/header/Header';

const order = () => {
    return (
        <div className={styles.Order} >
            <div className={styles.headerVisible}>
            <Header/>
            </div>
            
            {/* В ордере в стилях подписан коммитом параметр который нужжно будет удолить после интеграции */}
             <Order/>
             
        </div>
    );
};

export default order;