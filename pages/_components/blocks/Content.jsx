import React from 'react';
import nasway from './Content.module.scss'

import HomeBlock from './HomeBlock/HomeBlock';

const Content = () => {
    return (
        <div className={nasway.Content}>
            <HomeBlock/>
            <HomeBlock/>
            
        </div>
    );
};

export default Content;