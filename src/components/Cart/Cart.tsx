import React from "react";
import logo from "../../assets/icons/icons.svg";
import { Svg } from "./Cart.styled";

const Cart: React.FC = () => {
  return (
    <Svg viewBox="0 0 32 32">
      <use href={`${logo}#icon-cart`}></use>
    </Svg>
  );
};

export default Cart;
