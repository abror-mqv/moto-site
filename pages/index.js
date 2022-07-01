import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import axios from "axios";
import Header from "./_components/components/header/Header";
import Footer from "./_components/components/footer/Footer";
import Content from "./_components/blocks/Content.jsx";
import { useState } from "react";



export default function Home() {
  

  return (
    <main className={styles.Home}>
      <Header />
      <Content />
      <Footer />
    </main>
  );
}
