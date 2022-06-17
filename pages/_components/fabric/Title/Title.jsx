import React from "react";
import nasway from "./Title.module.scss";

const Title = (props) => {
  return (
    <div>
    <h3 className={props.green ? nasway.green :
                   props.black ? nasway.black : 
                   props.biggreen ? nasway.biggreen :
                   props.errorwhite ? nasway.errorwhite : nasway.white}>
    
        {props.content}
    </h3>
  

    </div>
  );
};

export default Title;
