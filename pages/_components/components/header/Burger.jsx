import React from "react";
import nasway from "./Burger.module.scss";

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
