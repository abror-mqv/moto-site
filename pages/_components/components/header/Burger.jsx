import React from "react";
import Image from "next/image";
import nasway from "./Burger.module.scss";

import BookOpen from './headerIcons/Book_Open.svg'
import Building from './headerIcons/Building.svg'
import ImageIcon from './headerIcons/Image.svg'
import Location from './headerIcons/Location.svg'
import Mail from './headerIcons/Mail.svg'
import Phone from './headerIcons/Phone.svg'
import PlayCircle from './headerIcons/Play_Circle.svg'
import UserSquare from './headerIcons/User_Square.svg'
import WA from './headerIcons/WA.svg'

import Line from './headerIcons/Полоса.png'

const Burger = () => {
  return (
    <div>
    <nav role="navigation">
      <div className={nasway.MenuToggle}>
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <ul className={nasway.Menu}>
          <a href="#" rel="noreferrer">
            <Image src={BookOpen.src} alt="Услуги" width={30} height={30}/>
            <li>Услуги</li>
          </a>
          <a href="#" rel="noreferrer">
            <Image src={Building.src} alt="Наш мотопарк" width={30} height={30}/>
            <li>Наш мотопарк</li>
          </a>
          <a href="#" rel="noreferrer">
            <Image src={PlayCircle.src} alt="Блог и статьи" width={30} height={30}/>
            <li>Блог и статьи</li>
          </a>
          <a href="#" rel="noreferrer">
            <Image src={ImageIcon.src} alt="Галерея" width={30} height={30}/>
            <li>Галерея</li>
          </a>
          <a href="#" rel="noreferrer">
            <Image src={UserSquare.src} alt="Контакты" width={30} height={30}/>
            <li>Контакты</li>
          </a>
          <div></div>
          <a href="#" rel="noreferrer">
            <Image src={Phone.src} alt="Контакты" width={30} height={30}/>
            <li>Позвонить нам</li>
          </a>
          <a href="#" rel="noreferrer" className={nasway.WhatsApp}>
            <Image src={WA.src} alt="Контакты" width={30} height={30}/>
            <li>Написать в WhatsApp</li>
          </a>
          <a href="#" rel="noreferrer" >
            <Image src={Location.src} alt="Контакты" width={30} height={30}/>
            <li>Где мы находимся</li>
          </a>
          <a href="mailto:inbox@streetbike.ru" rel="noreferrer">
            <Image src={Mail.src} alt="Контакты" width={30} height={30}/>
            <li>inbox@streetbike.ru</li>
          </a>
        </ul>
      </div>
    </nav>
    </div>
  );
};

export default Burger;
