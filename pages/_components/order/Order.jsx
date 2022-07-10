import React from "react";
import { useState, useEffect } from "react";
import nasway from "./Order.module.scss";
import Title from "../fabric/Title/Title";
import Button from "./components/Button";
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

const Order = ({ onClose, children }) => {
  const size = useWindowSize();
  return (
    <div className={nasway.Order}>
      {children}
      <div className={nasway.ImageBlock}>
        {size.width >= 920 ? (
          <Image
            src={size.width >= 920 ? MotoQuestion.src : MotoQuestion2.src}
            alt="dsdddd"
            width={504}
            height={491}
          />
        ) : (
          <span></span>
        )}
      </div>

      <div className={nasway.TxtBlock}>
        <Title black content="ОСТАВЬТЕ ЗАЯВКУ" />

        <div className={nasway.SgeinKotokbas}>
          <SubText
            modalka
            content="Если вам нужна помощь и персональная консультация, просто оставьте заявку и мы перезвоним вам в течение 15 минут! "
          />
        </div>

        <div>
          <Formik
            initialValues={{
              name: "",
              phone: "",
              timeCall: "",
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
                  placeholder="Ваше имя"
                  className={nasway.inputValue}
                />
                <br />
                <Field
                  id="phone"
                  name="phone"
                  type="number"
                  placeholder="Ваш номер телефона"
                  className={nasway.inputValue}
                />
                <br />
                <Field
                  id="timeCall"
                  name="timeCall"
                  placeholder="Желаемое время звонка"
                  className={nasway.inputValue}
                />
                <br />
              </div>

              <Button text="ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ"  />
              <br />
              <label className={nasway.TextUnderButton}>
                Нажимая кнопку «Получить консультацию»», Вы даете
                <br /> согласие на{" "}
                <a href="#"> обработку персональных данных</a> и принимаете
                <br />
                <a href="#"> политику конфиденциальности.</a>
              </label>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Order;
