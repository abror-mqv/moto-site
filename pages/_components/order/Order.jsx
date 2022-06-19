import React from 'react';
import { useState, useEffect } from 'react';
import nasway from './Order.module.scss'
import Title from '../fabric/Title/Title';

// import { Formik, Field, Form } from 'formik';

import MotoQuestion from '../blocks/Questions/MotoQuestions.png'
import MotoQuestion2 from '../blocks/Questions/MotoQuestions2.png'
import SubText from '../fabric/SubText/SubText';
import RegButton from '../fabric/RegularButton/RegButton';
import Image from 'next/image';

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
    useEffect(() => {
      if (typeof window !== 'undefined') {
        function handleResize() {
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
      }
    }, []);
    return windowSize;
  }

const Order = () => {      
    
    const size = useWindowSize();
    return (
        <div className={nasway.Order  }>

            <div className={nasway.ImageBlock}>
                  <Image src={size.width >= 920 ? MotoQuestion.src : MotoQuestion2.src} alt="dsdddd" width={size.width >= 920 ? 504 : 346} height={size.width >= 920 ? 491 : 332}/>
            </div>    

            <div className={nasway.TxtBlock}>

                  <Title black content="ОСТАВЬТЕ ЗАЯВКУ"/>

                <div>

                </div>

               <div className={nasway.SgeinKotokbas}>
                  <SubText black content="Если вам нужна помощь и персональная консультация, просто оставьте заявку и мы перезвоним вам в течение 15 минут! "/>
               </div>

               <div>

               </div>

               <div>
                  <RegButton GreyStyle text="ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ"/>
               </div>
            </div>
        </div>
    );
};

export default Order;