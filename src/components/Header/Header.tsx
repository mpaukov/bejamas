import React from "react";
import Cart from "../Cart/Cart";
import Logo from "../Logo/Logo";
import { Button, Link, Wrapper } from "./Header.stuled";

const Header: React.FC = () => {
  return (
    <Wrapper>
      <Link href="#">
        <Logo />
      </Link>
      <Button>
        <Cart />
      </Button>
    </Wrapper>
  );
};

export default Header;
