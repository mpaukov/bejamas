import React from "react";
import { Product } from "../App";
import Button from "../Button/Button";
import Description from "../Description/Description";
import TitleMinor from "../Title/Title";
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

  let dimmentions: { width: number; height: number } = { width: 0, height: 0 };
  let size: number = 0;

  let src, alt: string;
  let description: [] | string | null = null;

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
    if (!Array.isArray(details)) {
      dimmentions = details.dimmentions;
      size = details.size;
    } else if (Array.isArray(details)) {
      description = details.join(" ");
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
      <Button />

      <TitleMinor>About the {name}</TitleMinor>
      <Description>{description}</Description>

      <TitleMinor>People also buy</TitleMinor>
      <TitleMinor>Details</TitleMinor>
      <p>
        Size: {dimmentions?.width} x {dimmentions?.height} pixel
      </p>
      <p>Size: {size / 1000} Mb</p>
    </Section>
  );
};

export default FeaturedProduct;
