import React from "react";
import { Button } from "@mui/material";
import nasway from "./RegButton.module.scss";

const RegButton = (props) => {
  return <Button className={nasway.BuStyle}>{props.text}</Button>;
};

export default RegButton;
