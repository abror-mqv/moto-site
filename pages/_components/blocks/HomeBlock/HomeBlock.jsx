import React from 'react';
import nasway from './HomeBlock.module.scss'
import Title from '../../fabric/Title/Title';

// import Mototototototototototo from './Moto.png'
import SubText from '../../fabric/SubText/SubText';
import RegButton from '../../fabric/RegularButton/RegButton';
import Image from 'next/image';


const HomeBlock = () => {
    return (
        <div className={nasway.HomeBlock}>
            <div className={nasway.ImageBlock}>
                <Image src="./Moto.png" alt="dsdddd" width={672} height={567}/>    
            </div>     
            <div className={nasway.TxtBlock}>
                <Title green content="МОТОШКОЛА “STREET BIKE”"/>
                <Title content="В РОСТОВЕ-НА-ДОНУ"/>
                <div>
                    
                </div>
                <div className={nasway.SgeinKotokbas}>
                    <SubText content="Обучение вождению мотоцикла с приобретением всем необходимых навыков безопасного вождения с положительными эмоциями!"/>
                </div>
                <div>
                    <RegButton text="Узнать стоимость"/>
                </div>
            </div>
        </div>
    );
};

export default HomeBlock;