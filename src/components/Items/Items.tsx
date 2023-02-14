import React from "react";
import Item from "./Item";
import { ItemsStyle } from "./Items.styled";

type Props = {
  items: { src: string; alt: string }[];
};

const Items: React.FC<Props> = ({ items }) => {
  return (
    <ItemsStyle>
      {items.map((item, index) => (
        <Item key={index}>
          <img src={item.src} alt={item.alt} />
        </Item>
      ))}
    </ItemsStyle>
  );
};

export default Items;
