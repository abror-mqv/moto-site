import React from "react";
import { useState, useEffect } from "react";
import nasway from "./Error404.module.scss";
import Title from "../../fabric/Title/Title";

import Error404Big from "./Error404_BigScreen.png";
import Error404Small from "./Error404_SmallScreen.png";
import SubText from "../../fabric/SubText/SubText";
import RegButton from "../../fabric/RegularButton/RegButton";
import Image from "next/image";

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

const Error404 = () => {
  const size = useWindowSize();
  return (
    <div className={nasway.Error404}>
      <div className={nasway.ImageBlock}>
        <Image
          src={size.width >= 920 ? Error404Big.src : Error404Small.src}
          alt="dsdddd"
          width={size.width >= 920 ? 569 : 372}
          height={size.width >= 920 ? 557 : 364}
        />
      </div>

      <div className={nasway.TxtBlock}>
        <Title biggreen content="404" />
        <div className={nasway.TxtBlock2}>
          <Title content="СТРАНИЦА НЕ СУЩЕСТВУЕТ" />
        </div>

        {/* <div></div> */}

        <center>
          <div className={nasway.SgeinKotokbas}>
            <SubText
              errorwhite
              content="На карте нашего сайта нет такой страинцы, но есть много других!"
            />
          </div>
        </center>

        <center>
          <RegButton text="ВЕРНУТЬСЯ НА ГЛАВНУЮ" />
        </center>
      </div>
    </div>
  );
};

export default Error404;
