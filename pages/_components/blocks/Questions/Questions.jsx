import React from "react";
import { useState, useEffect } from "react";
import nasway from "./Questions.module.scss";
import Title from "../../fabric/Title/Title";

import MotoQuestion from "./MotoQuestions.png";
import MotoQuestion2 from "./MotoQuestions2.png";
import SubText from "../../fabric/SubText/SubText";
import RegButton from "../../fabric/RegularButton/RegButton";
import Image from "next/image";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Order from "../../order/Order";

const style = {
  position: 'absolute',
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
  // top: '50%',
  // left: '50%',
  // transform: 'translate(-50%, -50%)',
  // width: 400,
  // bgcolor: 'background.paper',
  // border: '2px solid #000',
  // boxShadow: 24,
  // p: 4,
};

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    if (typeof window !== "undefined") {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  return windowSize;
}

const Questions = () => {
  const size = useWindowSize();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {setOpen(true); console.log("open")};
  const handleClose = () => setOpen(false);
  return (
    <div className={nasway.Questions} id="questions">
            <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Order/>
        </Box>
      </Modal>
      <div className={nasway.ImageBlock} >
        <Image
          src={size.width >= 920 ? MotoQuestion.src : MotoQuestion2.src}
          alt="dsdddd"
          width={size.width >= 920 ? 504 : 346}
          height={size.width >= 920 ? 491 : 332}
        />
      </div>

      <div className={nasway.TxtBlock}>
        <Title black content="ОСТАЛИСЬ ВОПРОСЫ?" />

        <div></div>

        <div className={nasway.SgeinKotokbas}>
          <SubText
            black
            content="Оставьте заявку на бесплатную консультацию. Мы перезвоним Вам в течение 15 минут!"
          />
        </div>

        <div onClick={handleOpen}>
          <RegButton GreyStyle text="ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ" />
        </div>


      </div>

    </div>
  );
};

export default Questions;
