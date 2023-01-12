import React, { useState } from "react";
import Header from "./Header/Header";
import data from "../assets/json/products.json";
import FeaturedProduct from "./FeaturedProduct/FeaturedProduct";

export type Product =
  | {
      name: string;
      category: string;
      price: number;
      currency: string;
      image:
        | {
            src: string;
            alt: string;
          }
        | string;
      bestseller: boolean;
      featured: boolean;
      details: [] | null;
    }
  | {
      name: string;
      category: string;
      price: number;
      currency: string;
      image: {
        src: string;
        alt: string;
      };
      bestseller: boolean;
      featured: boolean;
      details: {
        dimmentions: {
          width: number;
          height: number;
        };
        size: number;
        description: string;
        recommendations: {
          src: string;
          alt: string;
        }[];
      };
    };

const App: React.FC = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>(() =>
    data.products.filter((product) => product.featured)
  );
  const [products, setProducts] = useState<Product[]>(() =>
    data.products.filter((product) => !product.featured)
  );

  return (
    <>
      <Header />
      {featuredProducts.length > 0 && (
        <FeaturedProduct item={featuredProducts[0]} />
      )}
    </>
  );
};

export default App;
