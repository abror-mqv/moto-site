import React from 'react';
import nasway from './Content.module.scss'

import HomeBlock from './HomeBlock/HomeBlock';
import Motopark from './Motopark/Motopark';
import PhotoZone from './PhotoZone/PhotoZone';

const Content = () => {
    return (
        <div className={nasway.Content}>
            <HomeBlock/>
            <Motopark/>   
              {/* Arrmor_Zone */}
              <PhotoZone/>


        </div>
    );
};

export default Content;