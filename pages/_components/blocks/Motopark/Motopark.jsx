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

const BASE_URL = "http://139.162.115.99:1337"

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


const Motopark = ({ posts }) => {
  useEffect(() => {
    window.addEventListener("resize", () => {
      console.log(window.innerHeight, window.innerWidth);
    });
  }, []);
  const size = useWindowSize();
  const [title, setTitle] = useState("");

  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () =>{  
      setLoading(true);
      try {
        const {data: response} = await axios.get(`${BASE_URL}/api/motopark`);
        setData(response.data);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }
    fetchData();
  }, []);

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
          {data.map((moto) => {
            let motorender = moto.attributes
            return (
              <SwiperSlide className={nasway.SwiperSlide} key={moto.id}>
                {({ isActive }) => (
                  <>
                    {isActive ? setTitle((title) => motorender.Title) : null}
                    <Image
                      src={`${BASE_URL}${motorender.image_url}`}
                      alt={motorender.Title}
                      width={350}
                      height={281}
                      className={
                        isActive ? nasway.StockImage : nasway.GreyColoredImage
                      }
                    />
                    <Title content={motorender.Title} />
                    <SubText content={motorender.Description} />
                  </>
                )}
              </SwiperSlide>
            );
          })}
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
