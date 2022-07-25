import styles from "../styles/Home.module.css";
import Header from "./_components/components/header/Header";
import PP from "./_components/privacypolicy/PrivacyPolicy";
import Footer from "./_components/components/footer/Footer";


const PrivacyPolicy = () => {
  return <main className={styles.Home}>
    <Header/>
    <PP/>
    <Footer/>
  </main>;
};

export default PrivacyPolicy;
