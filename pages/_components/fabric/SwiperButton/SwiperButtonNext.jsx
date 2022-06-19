import { useSwiper } from "swiper/react";
import nasway from "./SwiperButton.module.scss"
import { Button } from "@mui/material";
import Next from './Next.svg'
import Image from "next/image";

const SwiperButtonNext = ({ children }) => {
  const swiper = useSwiper();
  return <Button onClick={() => swiper.slideNext()} className={nasway.ButtonStyle}><Image src={Next.src} alt="Next slide" width={7} height={16}/></Button>;
};

export default SwiperButtonNext