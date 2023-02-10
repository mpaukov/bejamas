import React from "react";
import { Product } from "../../Types/Types";
import Button from "../../components/Button/Button";
import Description from "../../components/Description/Description";
import TitleMinor from "../../components/Title/Title";
import {
  Item,
  List,
  TextOnPic,
  Title,
  Wrapper,
} from "./FeaturedProduct.styled";

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
  let recommendations: { src: string; alt: string }[] = [{ src: "", alt: "" }];

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
      recommendations = details.recommendations;
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
    <>
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
      <List>
        {recommendations.map((item, index) => (
          <Item key={index}>
            <img src={item.src} alt={item.alt} />
          </Item>
        ))}
      </List>

      <TitleMinor>Details</TitleMinor>
      <p>
        Size: {dimmentions?.width} x {dimmentions?.height} pixel
      </p>
      <p>Size: {size / 1000} Mb</p>
    </>
  );
};

export default FeaturedProduct;
