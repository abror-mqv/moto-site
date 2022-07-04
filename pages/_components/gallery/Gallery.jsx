import React, { useState, useEffect } from "react";
import axios from "axios";

import CircularProgress from '@mui/material/CircularProgress';
import nasway from "./Gallery.module.scss";

import g1 from "./assets/g1.png";
import g2 from "./assets/g2.png";
import g3 from "./assets/g3.png";
import g4 from "./assets/g4.png";
import g5 from "./assets/g5.png";
import g6 from "./assets/g6.png";
import g7 from "./assets/g7.png";
import g8 from "./assets/g8.png";

const BASE_URL = "http://139.162.115.99:1337";

const Gallery = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(
          "http://139.162.115.99:1337/api/galereyas"
        );
        setData(response.data);
        console.log(data);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <section className={nasway.Gallery}>  
      <div className={nasway.gridContainer}>
        {
        loading ?  <CircularProgress /> : data.map((el) => {
          return <img key={el.id} src={`http://139.162.115.99:1337${el.attributes.PhotoURL}`} alt={el.attributes.Description}/>
        })}
      </div>
    </section>
  );
};

export default Gallery;
