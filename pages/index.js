import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import axios from "axios";
import Header from "./_components/components/header/Header";
import Footer from "./_components/components/footer/Footer";
import Content from "./_components/blocks/Content.jsx";
import { useState } from "react";

const BASE_URL = "http://139.162.115.99:1337"

export default function Home() {
  const [info, setInfo] = useState();
  if (typeof(info) == "undefined") {
    axios
      .get(`${BASE_URL}/api/street-bike-infos`)
      .then((res) => {
        let info = res.data.data[0].attributes;
        setInfo(info);  
      }).catch(err=>{
        console.log("Request error :", err)
      })
  }

  return (
    <main className={styles.Home}>
      <Header />
      <Content />
      <Footer info={info} />
    </main>
  );
}
