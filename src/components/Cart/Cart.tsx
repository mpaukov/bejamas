import React from "react";
import logo from "../../assets/icons/icons.svg";
import { Svg } from "./Cart.styled";

const Cart: React.FC = () => {
  return (
    <Svg>
      <use href={`${logo}#icon-cart`}></use>
    </Svg>
  );
};

export default Cart;
