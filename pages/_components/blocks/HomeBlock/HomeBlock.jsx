import React from 'react';
import Image from 'next/image';
import nasway from './HomeBlock.module.scss'
import Title from '../../fabric/Title/Title';

import Mototototototototototo from './Moto.png'


const HomeBlock = () => {
    return (
        <div>
            <div className={nasway.ImgBlock}>
                <Image src={Mototototototototototo.src} alt="МОТОШКОЛА “STREET BIKE”В РОСТОВЕ-НА-ДОНУ" width={"100%"} height={"100%"}/>
            </div>            
            <div className={nasway.TxtBlock}>
                <Title green content="МОТОШКОЛА “STREET BIKE”"/>
                <Title content="В РОСТОВЕ-НА-ДОНУ"/>
            </div>
        </div>
    );
};

export default HomeBlock;