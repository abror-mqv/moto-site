import React from "react";
import { Button } from "@mui/material";
import nasway from "./RegButton.module.scss";

const RegButton = (props) => {
  return <Button className={props.GreyStyle ? nasway.GreyStyle : nasway.BuStyle}>{props.text}<div></div></Button>;
};

export default RegButton;
