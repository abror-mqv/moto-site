import React from "react";
import nasway from "./Title.module.scss";

const styleProps = (props) => {
  if(props.green) return(nasway.green)
  if(props.biggreen) return(nasway.biggreen)
  if(props.errorwhite) return(nasway.errorwhite)
  if(props.black) return(nasway.black)
  return(nasway.white); 
}

const Title = (props) => {
  return (
    <div>

     <h3 className={styleProps(props)}>   
        {props.content}
     </h3>

    </div>
  );
};

export default Title;
