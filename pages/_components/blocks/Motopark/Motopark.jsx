/* eslint-disable react/jsx-key */
import React from "react";
import { useState } from "react";

import Image from "next/image";
import nasway from "./Motopark.module.scss";

import SubText from "../../fabric/SubText/SubText";
import Title from "../../fabric/Title/Title";
import Cunt from "../../fabric/Cunt/Cunt";
import RegButton from "../../fabric/RegularButton/RegButton";
import useWindowSize from "./useWindowSize";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow, Navigation } from "swiper";
import { useSwiper } from 'swiper/react';

import "swiper/css/effect-coverflow";
import "swiper/css";
import "swiper/css/pagination";

import moto1 from "./assets/moto1.png";
import moto2 from "./assets/moto2.png";
import moto3 from "./assets/moto3.png";
import moto4 from "./assets/moto4.png";

const motosList = [
  {
    title: "YAMAHA XJ6",
    description:
      "Здесь должен быть какой то целевой текст который описывает класс техники и рассказывает кому и зачем подойдёт именно этот мотоцикл, коротко, ясно, простым языком, чтобы клиент понимал зачем.",
    media: moto1,
  },
  {
    title: "НАСВАЙ",
    // title: "BSE 190",
    description:
      "Здесь должен быть какой то целевой текст который описывает класс техники и рассказывает кому и зачем подойдёт именно этот мотоцикл, коротко, ясно, простым языком, чтобы клиент понимал зачем.",
    media: moto2,
  },
  {
    title: "SYM XS 125",
    description:
      "Здесь должен быть какой то целевой текст который описывает класс техники и рассказывает кому и зачем подойдёт именно этот мотоцикл, коротко, ясно, простым языком, чтобы клиент понимал зачем.",
    media: moto3,
  },
  {
    title: "HONDA CB 125",
    description:
      "Здесь должен быть какой то целевой текст который описывает класс техники и рассказывает кому и зачем подойдёт именно этот мотоцикл, коротко, ясно, простым языком, чтобы клиент понимал зачем.",
    media: moto4,
  },
];
const Motopark = () => {
  const size = useWindowSize();
  const [title, setTitle] = useState("")
  
  const renderList = motosList.map((moto) => {
    
    return (
      <SwiperSlide className={nasway.SwiperSlide}>
        {({ isActive }) => 
        
        (
          <>
            {isActive? setTitle(title=>moto.title) : null}
            <Image
              src={moto.media.src}
              alt={moto.title}
              width={350}
              height={281}
              className={isActive ? nasway.StockImage : nasway.GreyColoredImage}
            />
            <Title content={moto.title}/>
            <SubText content={moto.description} />
          </>
        )}
      </SwiperSlide>
    );
  });

  return (
    <section className={nasway.Motopark}>
      <Cunt content="Мотопарк" />
      <div className={nasway.NasWayCircle}></div>
      <div className={nasway.Content}>
        <Swiper
          className={nasway.Swiper}
          pagination={size.width >= 920 ? false : true}
          centeredSlides={true}
          effect={"coverflow"}
          grabCursor={true}
          loop="true"
          modules={[Pagination]}
          slidesPerView={size.width >= 920 ? 3 : 1}
          
        >
          {renderList}
        </Swiper>
        <div>
          <Title content={title} />
          <button onClick={() => swiper.slideNext()}>Slide to the next slide</button>
        </div>
        
        <RegButton text="Подробнее" />
      </div>
    </section>
  );
};

export default Motopark;
