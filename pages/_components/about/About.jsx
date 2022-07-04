import React from "react";
import axios from 'axios'
import { useState, useEffect } from "react";
import nasway from "./About.module.scss";
const BASE_URL = "http://139.162.115.99:1337";
const About = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () =>{
      setLoading(true);
      try {
        const {data: response} = await axios.get(`${BASE_URL}/api/street-bike-info`);
        setData(response.data.attributes.about_us);
        console.log(data)
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }
    fetchData();
  }, []);
  return (
    <section className={nasway.About}>
      <h4>О компании</h4>
      <p>{data}</p>
    </section>
  );
};

export default About;
