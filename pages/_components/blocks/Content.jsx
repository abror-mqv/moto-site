import React from 'react';
import nasway from './Content.module.scss'

import HomeBlock from './HomeBlock/HomeBlock';
import Motopark from './Motopark/Motopark';
import PhotoZone from './PhotoZone/PhotoZone';
import Documents from './Documents/Documents';
import Questions from './Questions/Questions';

const Content = () => {
    return (
        <div className={nasway.Content}>
            <HomeBlock/>
            <Motopark/>   
              {/* Arrmor_Zone */}
              <PhotoZone/>
              <Documents/>
              <Questions/>
              


        </div>
    );
};

export default Content;