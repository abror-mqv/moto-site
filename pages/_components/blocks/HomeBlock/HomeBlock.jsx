import React from 'react';
import Image from 'next/image';
import nasway from './HomeBlock.module.scss'
import Title from '../../fabric/Title/Title';

import Mototototototototototo from './Moto.png'
import SubText from '../../fabric/SubText/SubText';


const HomeBlock = () => {
    return (
        <div className={nasway.HomeBlock}>
            <div className={nasway.ImgBlock}>
                <Image src={Mototototototototototo.src} alt="МОТОШКОЛА “STREET BIKE”В РОСТОВЕ-НА-ДОНУ" width={"100%"} height={"100%"} layout='responsive'/>
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