import React from "react";
import style from "./style/style.module.scss";

type LoadTextType = {
  text: string;
};

const LoadText: React.FC <LoadTextType> = ({ text }) => {
  return (
    <div className={style.selected_image_div}>
      <h2>{text}</h2>
    </div>
  );
};

export default LoadText;
