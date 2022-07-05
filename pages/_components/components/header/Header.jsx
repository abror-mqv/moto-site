import React from "react";
import nasway from "./Header.module.scss";

import Logo from "../../assets/Logo.svg";
import PhoneIcon from "../../assets/PhoneIcon.svg";
import MsgIcon from "../../assets/MsgIcon.svg";
import MessengerIcon from "../../assets/MessengerIcon.svg";
import Burger from "./Burger";

const Header = ({env}) => {
  
  return (
    <div className={nasway.Header}>
      <img src={Logo.src} alt="Street Bike Мотошкола в Ростове-на-Дону" />
      <ul className={nasway.Nav}>
        <a href="http://streetbike161.ru/#homepage">Главная</a>
        <a href="http://streetbike161.ru/#motopark">Мотопарк</a>
        <a href="http://streetbike161.ru/#service">Услуги</a>
        <a href="http://streetbike161.ru/#contacts">Контакты</a>
      </ul>
      <ul className={nasway.Contacts}>
        <a href="#">
          <img src={PhoneIcon.src} alt="Звонок" />
        </a>
        <a href="#">
          <img src={MsgIcon.src} alt="Сообщение" />
        </a>
        <a href="#">
          <img src={MessengerIcon.src} alt="Мессенджер" />
        </a>
      </ul>
      <Burger/>
    </div> 
  );
};

export default Header;
