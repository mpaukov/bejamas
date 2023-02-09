import React from "react";
import { Desc } from "./Description.styled";

type Props = {
  children: null | string | string[];
};

const Description: React.FC<Props> = ({ children }) => {
  return <Desc>{children}</Desc>;
};

export default Description;
