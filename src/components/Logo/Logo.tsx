import React from "react";
import logo from "../../assets/icons/icons.svg";
import { Svg } from "./Logo.styled";

const Logo: React.FC = () => {
  return (
    <Svg>
      <use href={`${logo}#icon-logo`}></use>
    </Svg>
  );
};

export default Logo;
