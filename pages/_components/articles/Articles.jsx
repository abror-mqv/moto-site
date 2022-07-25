import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from 'next/router'

import RegButton from "../fabric/RegularButton/RegButton";
import Card from './Card'
import nasway from "./Articles.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperButtonPrevious from "../fabric/SwiperButton/SwiperButtonPrevious";
import SwiperButtonNext from "../fabric/SwiperButton/SwiperButtonNext";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Articles = () => {
  const [cat, setCat] = useState(1);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const router = useRouter()
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(
          "http://139.162.115.99:1337/api/kategoriya-statis?populate=statis"
        );

        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  return (
    <section className={nasway.Article}>
      <div className={nasway.Categories}>
        <article>
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={30}
            className={nasway.Swiper}
            centeredSlides
            initialSlide={1}
          >
            {data[cat - 1]?.attributes?.statis.data.map((el) => {
              return (
                <SwiperSlide key={el.id} onClick={()=>{ router.push(`http://127.0.0.1:3000/articles/singular-article/?id=${el.id}`)}} className={nasway.SwiperSlide} style={{backgroundImage: `url(http://139.162.115.99:1337${el.attributes.PhotoURL})`, backgroundSize: "cover"}}>
                  <h2>{el.attributes.PreviewTitle}</h2>
                  <RegButton text="Подробнее"/>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </article>
        <ul>
        <Swiper
            slidesPerView={"auto"}
            spaceBetween={30}
            className={nasway.CatSwiper}
            centeredSlides
            initialSlide={2}
            
          >
            <SwiperButtonPrevious ></SwiperButtonPrevious>
          {data.map((el) => {
            if (cat == el.id) {
              return (
                <SwiperSlide className={nasway.CatSwiperSlide} onClick={() => setCat(el.id)} key={el.id}>
                  <Card>
                    <img
                      src={`http://139.162.115.99:1337${el.attributes.ImageURL}`}
                      loading="lazy"
                    />
                    <h3>{el.attributes.Title}</h3>
                  </Card>
                </SwiperSlide>
              );
            } else {
              return (
                <SwiperSlide className={nasway.CatSwiperSlide} onClick={() => setCat(el.id)} key={el.id}>
                  <Card gray>
                    <img
                      src={`http://139.162.115.99:1337${el.attributes.ImageURL}`}
                      loading="lazy"
                    />
                    <h3>{el.attributes.Title}</h3>
                  </Card>
                </SwiperSlide>
              );
            }
          })}
              
              <SwiperButtonNext ></SwiperButtonNext>
          </Swiper>
        </ul>
        <div className={nasway.SwadowGenerator}></div>
        <div className={nasway.Street}></div>
        <div style={{marginTop: 168}}></div>
        <section className={nasway.ResArtcls}>
        {data[cat - 1]?.attributes?.statis.data.map((el) => {
              return (
                <div key={el.id} onClick={()=>{ router.push(`http://127.0.0.1:3000/articles/singular-article/?id=${el.id}`)}} className={nasway.SwiperSlide} style={{backgroundImage: `url(http://139.162.115.99:1337${el.attributes.PhotoURL})`, backgroundSize: "cover"}}>
                  <h2>{el.attributes.PreviewTitle}</h2>
                </div>
              );
            })}
        </section>
        <div className={nasway.BottomShadow}></div>
      </div>
    </section>
  );
};

export default Articles;


