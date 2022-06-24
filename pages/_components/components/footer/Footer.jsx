import React from 'react';
import nasway from './Footer.module.css'
import RegButton from '../../fabric/RegularButton/RegButton';
import Logo from './assets/logo.png'
import Vector from './assets/Vector.png'
import Mail from './assets/Mail.svg'
import AGK from './assets/Agk.png'
import VK from './assets/Vk.png'
import IG from './assets/instagram.png'

const Footer = () => {
    return (
        <footer className={nasway.footer}>
        <div className={nasway.first__container}>
          <div className={nasway.row}>
            <div className={nasway.footer__col}>
              <h1>
                <a href="" ><img src={Logo.src} alt="" /></a>
              </h1>
              <ul>
                <li>
                  <span className={nasway.number}
                    ><img src={Vector.src} alt="" />
                    <a href="tel:+8 (800) 200-06-00"> 8 (800) 200-06-00</a></span>
                  <span className={nasway.mail}
                    ><img src={Mail.src} alt="" />
                    <a href="mailto:inbox@streetbike.ru"> inbox@streetbike.ru</a>
                  </span>
                </li>
              </ul>
              <ul>
                <span className={nasway.agk__media}
                  ><img src={AGK.src} alt="" />
                  Создано в AGK Media
                </span>
              </ul>
            </div>
            <div className={nasway.footer__col_nav}>
              <h1>КАТЕГОРИИ</h1>
              <ul>
                <li><a href=""> Обучение</a> </li>
                <li><a href=""> Галерея</a> </li>
                <li><a href=""> Услуги</a> </li>
                <li><a href=""> Блог / Статьи</a> </li>
                <li><a href=""> Контакты</a> </li>
                
              </ul>
            </div>
            <div className={nasway.footer__col_nav}>
              <h1>ИНФОРМАЦИЯ</h1>
              <ul>
                <li><a href=""> Персональные данные</a> </li>
                <li><a href=""> Форма договора</a> </li>
                <li><a href=""> Наша команда</a> </li>
                <li><a href=""> Политика</a> </li>
                <li><a href=""> О нас</a> </li>
                
              </ul>
            </div>
            <div className={nasway.footer__col_social}>
              <h1>СОЦИАЛЬНЫЕ СЕТИ</h1>
              <ul>
                  <li>  
                      <span className={nasway.vk}>
                          <img src={VK.src} alt=""/>
                          <a href="">ВКонтакте</a>
                      </span>
                  </li>
                  <li> <span className={nasway.instagram}>
                      <img src={IG.src} alt=""/>
                      <a href="">Instagram</a>
                  </span></li>
              </ul>
            </div>
            <div className={nasway.footer__col_button}>
              <span>Есть вопросы или предложения? <br/>
                  Пожалуйста напишите нам!</span>
                  <RegButton text="НАПИСАТЬ НАМ"/>
            </div>
            
            </div>
          </div>
          <div className={nasway.second__container}>
              <span>© 2022 “StreetBike”, все права защищены (с)</span>
          </div>
      </footer>
    );
};

export default Footer;