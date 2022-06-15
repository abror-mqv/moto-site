import React from 'react';
import nasway from './Content.module.scss'

import HomeBlock from './HomeBlock/HomeBlock';
import Motopark from './Motopark/Motopark';

const Content = () => {
    return (
        <div className={nasway.Content}>
            <HomeBlock/>
            <Motopark/>            
        </div>
    );
};

export default Content;