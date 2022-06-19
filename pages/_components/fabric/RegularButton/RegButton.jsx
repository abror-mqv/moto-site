import React from "react";
import { Button } from "@mui/material";
import nasway from "./RegButton.module.scss";

const styleButton = (props) => {
if(props.GreyStyle) return(nasway.GreyStyle)
else return(nasway.BuStyle)
}

const serviceButton = (props) => {
  if(props.OnClick) return("Onclick")
  else return("submit")
}


const RegButton = (props) => {
  return <Button className={styleButton(props)} type={serviceButton(props)}>{props.text}</Button>;
};

export default RegButton;
