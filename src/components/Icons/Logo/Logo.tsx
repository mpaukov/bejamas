import React from "react";
import svg from "../../../assets/icons/icons.svg";
import { Svg } from "./Logo.styled";

const Logo: React.FC = () => {
  return (
    <Svg>
      <use href={`${svg}#icon-logo`}></use>
    </Svg>
  );
};

export default Logo;
