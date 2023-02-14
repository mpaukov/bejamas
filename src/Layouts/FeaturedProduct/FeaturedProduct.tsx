import React from "react";
import { Product } from "../../types/Types";
import Button from "../../components/Button/Button";
import Description from "../../components/Description/Description";
import { Title } from "../../components/Title/Title";
import { TextOnPic, Wrapper } from "./FeaturedProduct.styled.jsx";
import Items from "../../components/Items/Items";

type Props = {
  item: Product;
};

const FeaturedProduct: React.FC<Props> = ({ item }) => {
  const { name, image, details } = item;

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
      description = details.description;
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
      <Title tag="h1">{name}</Title>
      <Wrapper>
        <img src={src} alt={alt} />
        <TextOnPic>
          <p>Photo of the day</p>
        </TextOnPic>
      </Wrapper>
      <Button>Add to cart</Button>
      <Title>About the {name}</Title>
      <Description>{description}</Description>
      <Title>People also buy</Title>
      <Items items={recommendations} />
      <Title>Details</Title>
      <p>
        Size: {dimmentions?.width} x {dimmentions?.height} pixel
      </p>
      <p>Size: {size / 1000} Mb</p>
    </>
  );
};

export default FeaturedProduct;
