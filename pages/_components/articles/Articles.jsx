import React, { useState, useEffect } from "react";
import axios from "axios";

import Card from './Card'
import nasway from "./Articles.module.scss";


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
  return (
    <section className={nasway.Article}>
      <div className={nasway.Categories}>
        <ul>
          {data.map((el) => {
            return <Card><img src={`http://139.162.115.99:1337${el.attributes.ImageURL}`}/><h3>{el.attributes.Title}</h3></Card>;
          })}
        </ul>
      </div>
    </section>
  );
};

export default Articles;
