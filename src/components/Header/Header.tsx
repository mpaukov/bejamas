import React from "react";
import Cart from "../Cart/Cart";
import Logo from "../Logo/Logo";
import { Wrapper } from "./Header.stuled";

const Header: React.FC = () => {
  return (
    <Wrapper>
      <Logo />
      <Cart />
    </Wrapper>
  );
};

export default Header;
