import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import nasway from "./SingularArtical.module.scss";

import KnopLeft from "./assets/Кнопка.svg";
import KnopRight from "./assets/KN.svg";
import VK from "./assets/VK.svg";
import LINK from "./assets/LINK.svg";
import SHARE from "./assets/SHARE.svg";
import SAVE from "./assets/SAVE.svg";

function SingularArticle({ ...props }) {
  console.log("CHILD ...", props.id);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const [info, setInfo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(
          `http://139.162.115.99:1337/api/statis/${props.id}`
        );

        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };
    fetchData();
  }, [props.id]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(
          `http://139.162.115.99:1337/api/statis/${props.id}`
        );

        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };
    fetchData();
  }, [props.id]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          `http://139.162.115.99:1337/api/street-bike-info`
        );
        setInfo(response.data.attributes);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <section className={nasway.Singular}>
      <article>
        <ReactMarkdown
          transformImageUri={(uri) => `http://139.162.115.99:1337${uri}`}
        >
          {data?.attributes?.FullArticle}
        </ReactMarkdown>
      </article>
      <footer className={nasway.SAFooter}>
        <a
          href={`https://streetbike161.ru/articles/singular-article?id=${
            props.id - 1
          }`}
          style={props.id == 1 ? { zIndex: "-9999" } : {}}
        >
          <img src={KnopLeft.src} />
          Предыдущая
        </a>
        <ul>
          <a href="#">
            <img src={SHARE.src} />{" "}
          </a>
          <a
            href="#"
            onClick={() => {
              alert("Не удалось добавить в закладки(");
            }}
          >
            <img src={SAVE.src} />
          </a>
          <a
            href="#"
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              alert("Ссылка скопированна в буфер обмена!");
            }}
          >
            <img src={LINK.src} />
          </a>
          <a href={info.vkontakt}>
            <img src={VK.src} />
          </a>
        </ul>
        <a
          href={`https://streetbike161.ru/articles/singular-article?id=${
            parseInt(props.id) + 1
          }`}
        >
          Следующая
          <img src={KnopRight.src} />
        </a>
      </footer>
      <footer className={nasway.SAFooterR}>
        <ul>
          <a href="#">
            <img src={SHARE.src} />{" "}
          </a>
          <a
            href="#"
            onClick={() => {
              alert("Не удалось добавить в закладки(");
            }}
          >
            <img src={SAVE.src} />
          </a>
          <a
            href="#"
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              alert("Ссылка скопированна в буфер обмена!");
            }}
          >
            <img src={LINK.src} />
          </a>
          <a href={info.vkontakt}>
            <img src={VK.src} />
          </a>
        </ul>
        <div>

        
        <a
          href={`https://streetbike161.ru/articles/singular-article?id=${
            props.id - 1
          }`}
          style={props.id == 1 ? { zIndex: "-9999" } : {}}
        >
          <img src={KnopLeft.src} />
          Предыдущая
        </a>

        <a
          href={`https://streetbike161.ru/articles/singular-article?id=${
            parseInt(props.id) + 1
          }`}
        >
          Следующая
          <img src={KnopRight.src} />
        </a>
        </div>
      </footer>
    </section>
  );
}

export default SingularArticle;
