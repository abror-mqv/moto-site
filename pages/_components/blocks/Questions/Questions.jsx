import React from 'react';
import { useState, useEffect } from 'react';
import nasway from './Questions.module.scss'
import Title from '../../fabric/Title/Title';

import MotoQuestion from './MotoQuestions.png'
import MotoQuestion2 from './MotoQuestions2.png'
import SubText from '../../fabric/SubText/SubText';
import RegButton from '../../fabric/RegularButton/RegButton';
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

const Questions = () => {      
    
    const size = useWindowSize();
    return (
        <div className={nasway.Questions} id="questions">

            <div className={nasway.ImageBlock}>
                  <Image src={size.width >= 920 ? MotoQuestion.src : MotoQuestion2.src} alt="dsdddd" width={size.width >= 920 ? 504 : 346} height={size.width >= 920 ? 491 : 332}/>
            </div>    

            <div className={nasway.TxtBlock}>

                  <Title black content="ОСТАЛИСЬ ВОПРОСЫ?"/>

                <div></div>

               <div className={nasway.SgeinKotokbas}>
                  <SubText black content="Оставьте заявку на бесплатную консультацию. Мы перезвоним Вам в течение 15 минут!"/>
               </div>

               <div>
                  <RegButton GreyStyle text="ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ"/>
               </div>
            </div>
        </div>
    );
};

export default Questions;