import React from "react";
import Image from "next/image";
import nasway from "./Burger.module.scss";

import BookOpen from "./assets/Book_Open.svg";
import Building from "./assets/Building.svg";
import ImageIcon from "./assets/Image.svg";
import Location from "./assets/Location.svg";
import Mail from "./assets/Mail.svg";
import Phone from "./assets/Phone.svg";
import PlayCircle from "./assets/Play_Circle.svg";
import UserSquare from "./assets/User_Square.svg";
import WA from "./assets/WA.svg";
import Logo from "../../assets/Logo.svg";


const Burger = () => {
  return (
    <div className={nasway.BurgerBlock}>
      <nav role="navigation">
        <div className={nasway.MenuToggle}>
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          
          <ul className={nasway.Menu}>
          
            <ul>
            <Image src={Logo.src} alt="Logo" width={198} height={47} className={nasway.BurgerLogo}/>
              <a href="#" rel="noreferrer" className={nasway.UnderLogo}>
                <Image src={BookOpen.src} alt="Услуги" width={30} height={30} />
                <li>Услуги</li>
              </a>
              <a href="#motopark" rel="noreferrer">
                <Image
                  src={Building.src}
                  alt="Наш мотопарк"
                  width={30}
                  height={30}
                />
                <li>Наш мотопарк</li>
              </a>
              <a href="/articles" rel="noreferrer">
                <Image
                  src={PlayCircle.src}
                  alt="Блог и статьи"
                  width={30}
                  height={30}
                />
                <li>Блог и статьи</li>
              </a>
              <a href="/gallery" rel="noreferrer">
                <Image
                  src={ImageIcon.src}
                  alt="Галерея"
                  width={30}
                  height={30}
                />
                <li>Галерея</li>
              </a>
              <a href="#contacts" rel="noreferrer">
                <Image
                  src={UserSquare.src}
                  alt="Контакты"
                  width={30}
                  height={30}
                />
                <li>Контакты</li>
              </a>
            </ul>

            <div></div>

              <ul>
                <a href="#" rel="noreferrer">
                  <Image
                    src={Phone.src}
                    alt="Контакты"
                    width={30}
                    height={30}
                  />
                  <li>Позвонить нам</li>
                </a>
              </ul>

              <a href="https://wa.me/+996999109190" rel="noreferrer" className={nasway.WhatsApp}>
                <Image src={WA.src} alt="Контакты" width={30} height={30} />
                Написать в WhatsApp
              </a>

              <ul>
                <a href="#" rel="noreferrer">
                  <Image
                    src={Location.src}
                    alt="Контакты"
                    width={30}
                    height={30}
                  />
                  <li>Где мы находимся</li>
                </a>
                <a href="mailto:inbox@streetbike.ru" rel="noreferrer">
                  <Image src={Mail.src} alt="Контакты" width={30} height={30} />
                  <li>inbox@streetbike.ru</li>
                </a>
              </ul>
       
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Burger;
