import React, { ReactNode } from "react";
import { ItemStyle } from "./Item.styled";

type Props = {
  children: ReactNode;
  key: number;
};

const Item: React.FC<Props> = ({ children }) => {
  return <ItemStyle>{children}</ItemStyle>;
};

export default Item;
