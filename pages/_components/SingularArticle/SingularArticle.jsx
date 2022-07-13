import React, {useEffect, useState} from "react";
import axios from 'axios'

function SingularArticle({...props}) {
  console.log("CHILD ...", props.id)
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  
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
  
  return <section>SingularArticle num {props.id}<br/><p>{data?.attributes?.FullArticle}</p></section>;
}

export default SingularArticle;
