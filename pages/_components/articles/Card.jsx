import React from "react";
import { Button } from "@mui/material";
import nasway from "./Card.module.scss";




const RegButton = ({children}) => {
  return <Button className={nasway.BuStyle}>{children}</Button>;
};

export default RegButton;
