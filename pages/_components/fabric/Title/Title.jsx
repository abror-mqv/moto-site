import React from "react";
import nasway from "./Title.module.scss";

const Title = (props) => {
  return (
    <h3 className={props.green ? nasway.green : nasway.white}>
        {props.content}
    </h3>
  );
};

export default Title;
