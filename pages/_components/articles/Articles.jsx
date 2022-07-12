import React, { useState, useEffect } from "react";
import axios from "axios";

import Card from "./Card";
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
  const handleSwitch = (ar) => console.log("HERO", ar);
  console.log("STATI ",data[cat-1].attributes.statis.data[0])
  return (
    <section className={nasway.Article}>
      <div className={nasway.Categories}>
        <article>
          {
            data[cat-1].attributes.statis.data.map(el=>{
              return(
                <p>{el.attributes.PreviewTitle}</p>
              )
            })
          }
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
