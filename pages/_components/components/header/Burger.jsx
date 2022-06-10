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
          <a href="#">
            <Image src={BookOpen.src} alt="Услуги" width={30} height={30}/>
            <li>Home</li>
          </a>
          <a href="#">
            <li>About</li>
          </a>
          <a href="#">
            <li>Info</li>
          </a>
          <a href="#">
            <li>Contact</li>
          </a>
          <a href="https://erikterwan.com/" target="_blank" rel="noreferrer">
            <li>Show me more</li>
          </a>
        </ul>
      </div>
    </nav>
    </div>
  );
};

export default Burger;
