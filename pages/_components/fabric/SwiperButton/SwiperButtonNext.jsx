import { useSwiper } from "swiper/react";
import nasway from "./SwiperButton.module.scss"
import { Button } from "@mui/material";
import Next from './Next.svg'

const SwiperButtonNext = ({ children }) => {
  const swiper = useSwiper();
  return <Button onClick={() => swiper.slideNext()} className={nasway.ButtonStyle}>{}</Button>;
};

export default SwiperButtonNext