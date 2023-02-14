import React from "react";
import svg from "../../../assets/icons/icons.svg";
import { Svg } from "./Filter.styled";

const Filter: React.FC = () => {
  return (
    <Svg viewBox="0 0 32 32">
      <use href={`${svg}#icon-filter`}></use>
    </Svg>
  );
};

export default Filter;
