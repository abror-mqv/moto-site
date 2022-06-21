import React from "react";
import nasway from "./Content.module.scss";

import HomeBlock from "./HomeBlock/HomeBlock";
import Motopark from "./Motopark/Motopark";
import PhotoZone from "./PhotoZone/PhotoZone";
import Documents from "./Documents/Documents";
import Questions from "./Questions/Questions";
import Service from "./Service/Service";
import Armour from "./Armour/Armour";


const Content = () => {
  return (
    <div className={nasway.Content}>
      <HomeBlock />
      <Motopark />
      <Service/>
      <Armour/>
      <PhotoZone />
      <Documents />
      <Questions />
    </div>
  );
};

export default Content;
