import React from "react";
import nasway from "./Title.module.scss";

const Title = (props) => {
  return (
    <div>
    <h3 className={props.green ? nasway.green : nasway.white}>
        {props.content}
    </h3>
    </div>
  );
};

export default Title;
