import React from 'react';
import nasway from './HomeBlock.module.scss'
import Title from '../../fabric/Title/Title';

import Mototototototototototo from './Moto.png'
import SubText from '../../fabric/SubText/SubText';
import Image from 'next/image';

const HomeBlock = () => {
    return (
        <div className={nasway.HomeBlock}>
            <div className={nasway.ImageBlock}>
                <Image src={Mototototototototototo.src} alt="dsdddd" width={672} height={567}/>    
            </div>     
            <div className={nasway.TxtBlock}>
                <Title green content="МОТОШКОЛА “STREET BIKE”"/>
                <Title content="В РОСТОВЕ-НА-ДОНУ"/>
                <SubText content="Обучение вождению мотоцикла с приобретением всем необходимых навыков безопасного вождения с положительными эмоциями!"/>
            </div>
        </div>
    );
};

export default HomeBlock;