import React from "react";
import Cart from "../../components/Icons/Cart/Cart";
import Link from "../../components/Link/Link";
import Logo from "../../components/Icons/Logo/Logo";
import { HeaderStyle } from "./Header.styled";

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
