import React from "react";
import { useState, useEffect } from "react";
import nasway from "./Write.module.scss";
import Title from "../fabric/Title/Title";
import { Formik, Field, Form } from "formik";

import MotoQuestion from "../blocks/Questions/MotoQuestions.png";
import MotoQuestion2 from "../blocks/Questions/MotoQuestions2.png";
import SubText from "../fabric/SubText/SubText";
import RegButton from "../fabric/RegularButton/RegButton";
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

const Write = () => {
  const size = useWindowSize();
  return (
    <div className={nasway.Write}>
      <div className={nasway.ImageBlock}>
        <Title content="НАПИШИТЕ НАМ" />

       
        <div className={nasway.SgeinKotokbas}><p></p> </div>

        <div className={nasway.SgeinKotokbasTitle}>
          <p> Телефон:</p>
        </div>
        <div className={nasway.SgeinKotokbas}>
          <p> 8 (918) 545-59-93</p>
        </div>

        <div className={nasway.SgeinKotokbasTitle}>
          <p> E-mail:</p>
        </div>
        <div className={nasway.SgeinKotokbas}>
          <p> vvvasilevsa@gmail.com</p>
        </div>

        <div className={nasway.SgeinKotokbasTitle}>
          <p> Адрес:</p>
        </div>
        <div className={nasway.SgeinKotokbas}>
          <p>344002, г. Ростов-на-Дону, ул. Пойменная 2а, парковка P9</p>
        </div>
        <div className={nasway.SgeinKotokbas}><p></p></div>    
        <div className={nasway.SgeinKotokbas}><p></p></div>            
      </div>

      <div className={nasway.TxtBlock}>
        <Title green content="НАПИШИТЕ НАМ" />

        {/* <div className={nasway.SgeinKotokbas}>
          <SubText
            modalka
            content="Если вам нужна помощь и персональная консультация, просто оставьте заявку и мы перезвоним вам в течение 15 минут! "
          />
        </div> */}

        <div>
          <Formik
            initialValues={{
              name: "",
              email: "",
              phone: "",
              text: "",
            }}
            onSubmit={(values) => {
              alert(JSON.stringify(values, null, 2)); // нужен для того чтобы отслеживать что отправилось
              // Тут могла бы быть ваша реклама!!!
            }}
          >
            <Form>
              <div className={nasway.BlockInput}>
                <Field
                  id="name"
                  name="name"
                  placeholder="Ваше имя*"
                  className={nasway.inputValue}
                />
                <br />
                <Field
                  id="email"
                  name="email"
                  placeholder="Ваша почта email*"
                  className={nasway.inputValue}
                />
                <br />
                <Field
                  id="phone"
                  name="phone"
                  placeholder="Ваш номер телефона"
                  className={nasway.inputValue}
                />
                <br />
                <Field
                  id="text"
                  name="text"
                  placeholder="Ваше сообщение*"
                  className={nasway.inputValue}
                />
                <br />
                <label className={nasway.TextUnderButton}>
                  * - пункты, обязательные для заполнения
                </label>
              </div>

              <RegButton text="НАПИСАТЬ" />
              <br />
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Write;
