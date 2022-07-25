import React from "react";
import Footer from "../_components/components/footer/Footer";
import Articles from "../_components/articles/Articles";
import Header from "../_components/components/header/Header";
import styles from "../../styles/Home.module.css";

const articles = () => {
  return (
    <main className={styles.Articles}>
        <Header />
        <Articles />
        <Footer />
    </main>
  );
};

export default articles;
