import React from "react";
import { Product } from "../App";
import { Section, TextOnPic, Title, Wrapper } from "./FeaturedProduct.styled";

type Props = {
  item: Product;
};

const FeaturedProduct: React.FC<Props> = ({ item }) => {
  const {
    name,
    category,
    price,
    currency,
    image,
    bestseller,
    featured,
    details,
  } = item;

  let src, alt: string;
  let description: [] | string | null;

  if (typeof image === "object") {
    src = image.src;
    alt = image.alt;
  } else if (typeof image === "string") {
    src = image;
    alt = image;
  } else {
    src = "";
    alt = "";
  }

  if (details === null) {
    description = null;
  } else if (typeof details === "object") {
    if (Array.isArray(details)) {
      description = details.join(" ");
    } else {
      description = details.description;
    }
  } else if (typeof details === "string") {
    description = details;
  } else {
    description = "";
  }

  return (
    <Section>
      <Title>{name}</Title>
      <Wrapper>
        <img src={src} alt={alt} />
        <TextOnPic>
          <p>Photo of the day</p>
        </TextOnPic>
      </Wrapper>
      <button type="button">Add to Cart</button>
      <p>About the {name}</p>
      <p>{description}</p>
    </Section>
  );
};

export default FeaturedProduct;
