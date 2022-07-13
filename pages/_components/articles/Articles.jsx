import React, { useState, useEffect } from "react";
import axios from "axios";

import RegButton from "../fabric/RegularButton/RegButton";
import Card from "./Card";
import nasway from "./Articles.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Articles = () => {
  const [cat, setCat] = useState(1);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
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
  console.log("SSSTR", data[cat - 1]?.attributes?.statis.data);
  return (
    <section className={nasway.Article}>
      <div className={nasway.Categories}>
        <article>
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={30}
            className={nasway.Swiper}
            centeredSlides
            initialSlide={3}
          >
            {data[cat - 1]?.attributes?.statis.data.map((el) => {
              return (
                <SwiperSlide className={nasway.SwiperSlide} style={{backgroundImage: `url(http://139.162.115.99:1337${el.attributes.PhotoURL})`, backgroundPosition: "cover"}}>
                  <h2>{el.attributes.PreviewTitle}</h2>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </article>
        <ul>
          {data.map((el) => {
            if (cat == el.id) {
              return (
                <li onClick={() => setCat(el.id)}>
                  <Card>
                    <img
                      src={`http://139.162.115.99:1337${el.attributes.ImageURL}`}
                    />
                    <h3>{el.attributes.Title}</h3>
                  </Card>
                </li>
              );
            } else {
              return (
                <li onClick={() => setCat(el.id)}>
                  <Card gray>
                    <img
                      src={`http://139.162.115.99:1337${el.attributes.ImageURL}`}
                    />
                    <h3>{el.attributes.Title}</h3>
                  </Card>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </section>
  );
};

export default Articles;
