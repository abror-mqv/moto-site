/* eslint-disable react/jsx-key */
import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import Title from "../../fabric/Title/Title";
import SubText from "../../fabric/SubText/SubText";
import RegButton from "../../fabric/RegularButton/RegButton";
import nasway from "./Armour.module.scss";
import Cunt from "../../fabric/Cunt/Cunt";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import Photo_1 from "./assets/Перчатки.png";
import Photo_2 from "./assets/Шлем.png";
import Photo_3 from "./assets/Черепаха.png";


function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    if (typeof window !== "undefined") {
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


const Armour = () => {

  useEffect(() => {
    window.addEventListener("resize", () => {
      console.log(window.innerHeight, window.innerWidth);
    });
  }, []);
  const size = useWindowSize();

  return (    
    <section className={nasway.MainArmourSection} id="armour">
      <Cunt content="Защита" className={nasway.TopString}/>
      <div className={nasway.Armour}>
         <div className={nasway.ImageBlock}>
        <Swiper
          effect={"fade"}
          modules={[EffectFade, Autoplay, Pagination]}
          className={nasway.MySwiper}
          loop="true"
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          centeredSlides={true}
          pagination={size.width >= 920 ? false : true}
        >
          <SwiperSlide className={nasway.SwiperSlide}>
            {({ isActive }) => (
              <Image
                className={isActive ? nasway.StockImage : nasway.NoneImage}
                src={Photo_1.src}
                alt="Мото черчатки в ростове на дону"
                width={584}
                height={580}
              />
            )}
          </SwiperSlide>
          <SwiperSlide className={nasway.SwiperSlide}>
            {({ isActive }) => (
              <Image
                className={isActive ? nasway.StockImage : nasway.NoneImage}
                src={Photo_2.src}
                alt="МотоШлем в Ростове на дону"
                width={543}
                height={543}
              />
            )}
          </SwiperSlide>
          <SwiperSlide className={nasway.SwiperSlide}>
            {({ isActive }) => (
              <Image
                className={isActive ? nasway.StockImage : nasway.NoneImage}
                src={Photo_3.src}
                alt="Мото куртка в ростове на дону"
                width={503}
                height={484}
              />
            )}
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={nasway.GreenCircle}></div>
      <div className={nasway.TxtBlock}>
        <Title green content="БЕЗОПАСНОЕ" />
        <Title content="ОБУЧЕНИЕ" />
        <div className={nasway.SgeinKotokbas}>
          <SubText content="Обучение вождению мотоцикла с приобретением всем необходимых навыков безопасного вождения с положительными эмоциями!" />
        </div>
        <div>
          <RegButton text="Подробнее" />
        </div>
      </div>
      </div>
     
    </section>
  );
};

export default Armour;
