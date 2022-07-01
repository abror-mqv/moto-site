/* eslint-disable react/jsx-key */
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Cunt from "../../fabric/Cunt/Cunt";
import nasway from "./Service.module.scss";
import SubText from "../../fabric/SubText/SubText";
import { Button } from "@mui/material";
import Title from "../../fabric/Title/Title";

const BASE_URL = "http://139.162.115.99:1337";

const Service = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [sLoading, setSLoading] = useState(true)
  const [sData, setSData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(
          `${BASE_URL}/api/service-at-the-home-pages`
        );
        setData(response.data);
      } catch (error) {
        console.error(error.message);
      }
      
      setLoading(false);
    };
    fetchData();
    
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setSLoading(true);
      try {
        const { data: response } = await axios.get(
          `${BASE_URL}/api/services`
        );
        setSData(response.data);
        console.log("ValuesToFilter", data.map(el=>{
          return(
            el.id
          )
        }));
        console.log("State: ",sData[0].attributes.Service_Name)
        console.log(response.data[0].attributes.Service_Name)
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };
    fetchData();
  }, [data]);


  return (
    <section className={nasway.Service} id="service">
      <Cunt content="Услуги" />
      <div className={nasway.Courses}>{        
        sData.map((el)=>{
          
          const service = el.attributes
          if(service.HomePage_display == false){
            return("")
          }

          return (
                <div className={nasway.BGRAD}>
                  <Button className={nasway.Balc}>
                    <img src={`${BASE_URL}${service.url_photo}`} alt={service.Service_Name} />
                    <div className={nasway.TextBlock}>
                      <Title black content={service.Service_Name} />
                      <SubText black content={service.Service_description} />
                      <span>{service.Service_ID}</span>
                    </div>
                  </Button>
                </div>
              );
        })
      }</div>
    </section>
  );
};

export default Service;

// let newArr = data.sort(function (a, b) {
//   var keyA = a.index,
//     keyB = b.index;
//   if (keyA < keyB) return -1;
//   if (keyA > keyB) return 1;
//   return 0;
// });

// const renderList = data?.map((course) => {
//   return (
//     <div className={nasway.BGRAD}>
//       <Button className={nasway.Balc}>
//         <img src={course.image.src} alt={course.title} />
//         <div className={nasway.TextBlock}>
//           <Title black content={course.title} />
//           <SubText black content={course.text} />
//           <span>{course.index}</span>
//         </div>
//       </Button>
//     </div>
//   );
// });
