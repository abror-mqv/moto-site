import { useSwiper } from "swiper/react";
import nasway from "./SwiperButton.module.scss"
import { Button } from "@mui/material";
import Image from "next/image";
import Prev from './Prev.svg'


const SwiperButtonPrevious = ({ children }) => {
  const swiper = useSwiper();
  return <Button onClick={() => swiper.slidePrev()} className={nasway.ButtonStyle}><Image src={Prev.src} alt="Previous slide" width={7} height={16}/></Button>;
};

export default SwiperButtonPrevious 