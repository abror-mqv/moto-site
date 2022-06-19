import { useSwiper } from "swiper/react";
import nasway from "./SwiperButton.module.scss"
import Prev from './Prev.png'


const SwiperButtonPrevious = ({ children }) => {
  const swiper = useSwiper();
  return <img src={Prev.src} alt="Next slide" width={36} height={36} onClick={() => swiper.slidePrev()}/>
};

export default SwiperButtonPrevious 