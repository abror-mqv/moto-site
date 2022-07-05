import { useSwiper } from "swiper/react";
import { useEffect } from "react";
import nasway from "./SwiperButton.module.scss"
import NextImg from './Next.png'


const SwiperButtonNext = ({ children }) => {
  const swiper = useSwiper(); 
  return<img src={NextImg.src} alt="Next slide" width={36} height={36} onClick={() => swiper.slideNext()}/>
};

export default SwiperButtonNext