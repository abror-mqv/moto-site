import React, { useEffect, useState } from "react";
import axios from "axios";
import nasway from './PrivacyPolicy.module.scss'
import ReactMarkdown from "react-markdown";



const PP = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();


  useEffect(() => {
    const fetchData = async () =>{
      setLoading(true);
      try {
        const {data: response} = await axios.get(`http://139.162.115.99:1337/api/politika-polzovaniya`);
        setData(response.data);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  


  return (
    <article className={nasway.PP}>
      <ReactMarkdown>
      {data?.attributes?.Content}
      </ReactMarkdown>
    </article>
  )
}

export default PP