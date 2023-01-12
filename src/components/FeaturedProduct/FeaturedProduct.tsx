import React from "react";
import { Product } from "../App";

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
  let description: [] | string | null = "";

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
  console.log("typeof", typeof []);
  return (
    <div>
      <h1>{name}</h1>
      <img src={src} alt={alt} />
      <button type="button">Add to Cart</button>
      <p>About the {name}</p>
      <p>{description}</p>
    </div>
  );
};

export default FeaturedProduct;
