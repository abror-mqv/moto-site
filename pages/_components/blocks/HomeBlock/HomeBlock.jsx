import React from 'react';
import { useState, useEffect } from "react";
import nasway from './HomeBlock.module.scss'
import Title from '../../fabric/Title/Title';
import Mototototototototototo from './Moto.png'
import SubText from '../../fabric/SubText/SubText';
import RegButton from '../../fabric/RegularButton/RegButton';
import Image from 'next/image';

const BASE_URL = "http://139.162.115.99:1337"

const HomeBlock = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([])
    useEffect(() => {
      const fetchData = async () =>{
        setLoading(true);
        try {
          const {data: response} = await axios.get(`${BASE_URL}/api/street-bike-info`);
          setData(response.data[0].attributes);
        } catch (error) {
          console.error(error.message);
        }
        setLoading(false);
      }
      fetchData();
    }, []);
    return (
        <div className={nasway.HomeBlock} id="home">
            <div className={nasway.ImageBlock}>
                <Image src={Mototototototototototo.src} alt="dsdddd" width={672} height={567}/>    
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
                    <a href="https://wa.me/"> 
                    <RegButton text="Узнать стоимость"/>

                    </a>
                </div>
            </div>
        </div>
    );
};

export default HomeBlock;