import React, { ReactNode } from "react";
import { ButtonStyle } from "./Button.styled";

type Props = {
  children: ReactNode;
};

const Button: React.FC<Props> = ({ children }) => {
  return <ButtonStyle>{children}</ButtonStyle>;
};

export default Button;
