import React, { useState, useEffect, useCallback } from "react";
import data from "./assets/json/products.json";
import { Product } from "./Types/Types";
import Header from "./Layouts/Header/Header";
import Section from "./components/Section/Section";
import FeaturedProduct from "./Layouts/FeaturedProduct/FeaturedProduct";

const App: React.FC = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>(() =>
    data.products.filter((product: Product) => product.featured)
  );
  const [featuredProduct, setFeaturedProduct] = useState<Product>(() => {
    const index = Math.floor(Math.random() * featuredProducts.length);
    return featuredProducts[index];
  });
  const [products, setProducts] = useState<Product[]>(() =>
    data.products.filter((product: Product) => !product.featured)
  );

  useEffect(() => {
    let intervalId: NodeJS.Timer;
    if (featuredProducts.length > 0) {
      intervalId = setInterval(() => {
        setFeaturedProduct(() => {
          const index = Math.floor(Math.random() * featuredProducts.length);
          return featuredProducts[index];
        });
      }, 10000);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [featuredProducts]);

  return (
    <>
      <Header />
      <Section>
        {featuredProducts && <FeaturedProduct item={featuredProduct} />}
      </Section>
      <Section>{products && <p>Photography</p>}</Section>
    </>
  );
};

export default App;
