import React from "react";
import Filter from "../../components/Icons/Filler/Filter";
import Link from "../../components/Link/Link";
import { TitleProducts } from "../../components/Title/Title";
import { Product } from "../../types/Types";
import { Title, TitleWrapper } from "./Products.styled";

type Props = {
  items: Product[];
};

const Products: React.FC<Props> = ({ items }) => {
  console.log("items", items);
  return (
    <>
      <TitleWrapper>
        <Title>
          <TitleProducts main>Photography /</TitleProducts>
          <TitleProducts>Premium Photos</TitleProducts>
        </Title>
        <Link>
          <Filter />
        </Link>
      </TitleWrapper>
    </>
  );
};

export default Products;
