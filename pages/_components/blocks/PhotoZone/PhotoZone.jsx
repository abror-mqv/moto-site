import React from "react";
import nasway from "./PhotoZone.module.scss";
import Title from "../../fabric/Title/Title";

import MotoGirl from "./NasGirl.png";
import SubText from "../../fabric/SubText/SubText";
import RegButton from "../../fabric/RegularButton/RegButton";
import Image from "next/image";

import Cunt from "../../fabric/Cunt/Cunt";

const PhotoZone = () => {
  return (
    <div className={nasway.PhotoZoneMain} id="photozone">
      <center>
        {/* выбрал тэг для выравнивания по центру так как стили не подрубаются */}
        <div className={nasway.center}>
          {/* Привязал к диву чтобы добавить отступы */}
          <Cunt content="Фотопарк" />
        </div>
      </center>
      <div className={nasway.PhotoZone}>
        <div className={nasway.ImageBlock}>
          <Image src={MotoGirl.src} alt="dsdddd" width={577} height={517} />
        </div>

        <div className={nasway.TxtBlock}>
          <div className={nasway.TxtBlock2}>
            {/* обернул в ячейку для того чтобы задать флекс элемент что бы убрать
                перенос строки  */}
            <Title content="СОЗДАЙ " />
            <Title green content=" СВОЙ ОБРАЗ " />
          </div>

          <div></div>
          <div className={nasway.SgeinKotokbas}>
            <SubText content="Так же наша школа предоставляет технику и экипировку для проведения фотосессий. Вы можете выбрать любой мотоцикл из нашего парка и получить впечатляющие фотографии в нужном образе!" />
          </div>
          <div>
            <RegButton text="ПОДРОБНЕЕ" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoZone;
