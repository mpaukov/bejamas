import React, { useState, useEffect } from "react";
import data from "./assets/json/products.json";
import { Product } from "./types/Types";
import Section from "./components/Section/Section";
import Header from "./layouts/Header/Header";
import FeaturedProduct from "./layouts/FeaturedProduct/FeaturedProduct";
import Products from "./layouts/Products/Products";

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
      <Section>{products && <Products items={products} />}</Section>
    </>
  );
};

export default App;
