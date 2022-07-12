import React from "react";
import { Button } from "@mui/material";
import nasway from "./Card.module.scss";




const RegButton = ({children, ...props}) => {
  const elStyle = props.gray?nasway.Gray:nasway.BuStyle
  return <Button className={elStyle}>{children}</Button>;
};

export default RegButton;
