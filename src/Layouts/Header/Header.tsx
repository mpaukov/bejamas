import React from "react";
import Cart from "../../components/Cart/Cart";
import Link from "../../components/Link/Link";
import Logo from "../../components/Logo/Logo";
import { HeaderStyle } from "./Header.stuled";

const Header: React.FC = () => {
  return (
    <HeaderStyle>
      <Link>
        <Logo />
      </Link>
      <Link>
        <Cart />
      </Link>
    </HeaderStyle>
  );
};

export default Header;
