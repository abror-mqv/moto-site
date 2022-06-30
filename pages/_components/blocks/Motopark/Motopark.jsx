/* eslint-disable react/jsx-key */
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import Image from "next/image";
import nasway from "./Motopark.module.scss";

import SubText from "../../fabric/SubText/SubText";
import Title from "../../fabric/Title/Title";
import Cunt from "../../fabric/Cunt/Cunt";
import RegButton from "../../fabric/RegularButton/RegButton";
import SwiperButtonNext from "../../fabric/SwiperButton/SwiperButtonNext";
import SwiperButtonPrevious from "../../fabric/SwiperButton/SwiperButtonPrevious";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow, Navigation } from "swiper";
import { useSwiper } from "swiper/react";

import "swiper/css/effect-coverflow";
import "swiper/css";
import "swiper/css/pagination";

import moto1 from "./assets/moto1.png";
import moto2 from "./assets/moto2.png";
import moto3 from "./assets/moto3.png";
import moto4 from "./assets/moto4.png";

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

const motosList = [
  {
    title: "YAMAHA XJ6",
    description:
      "Здесь должен быть какой то целевой текст который описывает класс техники и рассказывает кому и зачем подойдёт именно этот мотоцикл, коротко, ясно, простым языком, чтобы клиент понимал зачем.",
    media: moto1,
  },
  {
    title: "НАСВАЙww",
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
const Motopark = ({posts}) => {
  const swiper = useSwiper();
  useEffect(() => {
    window.addEventListener("resize", () => {
      console.log(window.innerHeight, window.innerWidth);
    });
  }, []);

  const size = useWindowSize();
  const [title, setTitle] = useState("");

  const renderList = motosList.map((moto) => {
    return (
      <SwiperSlide className={nasway.SwiperSlide} key={moto.title}> 
        {({ isActive }) => (
          <>
            {isActive ? setTitle((title) => moto.title) : null}
            <Image
              src={moto.media.src}
              alt={moto.title}
              width={350}
              height={281}
              className={isActive ? nasway.StockImage : nasway.GreyColoredImage}
            />
            <Title content={moto.title} />
            <SubText content={moto.description} />
          </>
        )}
      </SwiperSlide>
    );
  });

  return (
    <section className={nasway.Motopark} id="motopark">
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
          <div className={nasway.underTag}>
            <div className={nasway.UndeRug}>
              <SwiperButtonPrevious></SwiperButtonPrevious>
              <Title content={title} />
              <SwiperButtonNext></SwiperButtonNext>
            </div>
          </div>
        </Swiper>

        <RegButton text="Подробнее" />
      </div>
    </section>
  );
};

export default Motopark;





