/* eslint-disable react/jsx-key */
import React from "react";
import Cunt from "../../fabric/Cunt/Cunt";
import nasway from "./Service.module.scss";
import SubText from "../../fabric/SubText/SubText";
import { Button } from "@mui/material";
import Title from "../../fabric/Title/Title";

// Imitating Data (!)

import Bike1 from "./_components/Bike1.png";
import Bike2 from "./_components/Bike2.png";
import Bike3 from "./_components/Bike3.png";

const data = [
  {
    image: Bike1,
    title: "МОТОКУРС “БАЗОВЫЙ”",
    text: "Короткое описание курса. Для кого, зачем, какие преимущества и результаты получит обучающийся.",
    index: "01",
  },
  {
    image: Bike2,
    title: "МОТОКУРС “ПРОФИ”",
    text: "Короткое описание курса. Для кого, зачем, какие преимущества и результаты получит обучающийся.",
    index: "02",
  },
  {
    image: Bike3,
    title: "“МОТОДЖИМХАНА”",
    text: "Короткое описание курса. Для кого, зачем, какие преимущества и результаты получит обучающийся.",
    index: "03",
  },
];

// Sorting array by Index field

let newArr = data.sort(function (a, b) {
  var keyA = a.index,
    keyB = b.index;
  if (keyA < keyB) return -1;
  if (keyA > keyB) return 1;
  return 0;
});

// Preparing data to render

const renderList = newArr.map((course) => {
  return (
    <div className={nasway.BGRAD}>
      <Button className={nasway.Balc}>
        <img src={course.image.src} alt={course.title} />
        <div className={nasway.TextBlock}>
          <Title black content={course.title} />
          <SubText black content={course.text} />
          <span>{course.index}</span>
        </div>
      </Button>
    </div>
  );
});

const Service = () => {
  return (
    <section className={nasway.Service}>
      <Cunt content="Услуги" />
      <div className={nasway.Courses}>{renderList}</div>
    </section>
  );
};

export default Service;
