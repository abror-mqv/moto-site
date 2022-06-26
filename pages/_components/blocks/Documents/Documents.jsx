import React from "react";
import nasway from "./Documents.module.scss";
import Title from "../../fabric/Title/Title";

import DocumentsFoto from "./Documents.png";
import SubText from "../../fabric/SubText/SubText";
import RegButton from "../../fabric/RegularButton/RegButton";
import Image from "next/image";

import Cunt from "../../fabric/Cunt/Cunt";

const Documents = () => {
  return (
    <div className={nasway.DocumentsMain} id="documents">
      <center>
        {/* выбрал тэг для выравнивания по центру так как стили не подрубаются */}
        <div className={nasway.center}>
          {/* Привязал к диву чтобы добавить отступы */}
          <Cunt content="ПРОЧЕЕ" />
        </div>
      </center>
      <div className={nasway.Documents}>
        <div className={nasway.ImageBlock}>
          <Image src={DocumentsFoto.src} alt="dsdddd" width={523} height={327} />
        </div>

        <div className={nasway.TxtBlock}>
          <div className={nasway.TxtBlock2}>
            {/* обернул в ячейку для того чтобы задать флекс элемент что бы убрать
                перенос строки  */}
                <Title green content=" ПОДГОТОВКА  " />
                <Title content="ДОКУМЕНТОВ " />
            
          </div>

          <div></div>
          <div className={nasway.SgeinKotokbas}>
            <SubText content="После окончания курса мы подготавливаем полный пакет документов на категорию ''А'' для дальнейшей сдачи экзамена в МРЭО и получения водительского удостоверения." />
          </div>
          <div>
            <RegButton text="ПОДРОБНЕЕ" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documents;
