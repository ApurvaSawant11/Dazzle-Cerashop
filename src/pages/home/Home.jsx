import React from "react";
import "./home.css";
import { Carousel } from "../../components/carousel/Carousel";
import { CategoryCard } from "../../components/card/categoryCard/CategoryCard";
import { ProductCard } from "../../components/card/productCard/ProductCard";
import { useData } from "../../context/data-context";

const Home = () => {
  const { contextData } = useData();
  const { categoriesList, productsList } = contextData;

  return (
    <main>
      <Carousel />

      <h2 className="text-center my-2 py-2">Featured Categories</h2>
      <div className="category wrap gap-2 my-2 p-0p5">
        {categoriesList &&
          categoriesList.map(({ _id, img, categoryName }) => (
            <CategoryCard key={_id} img={img} categoryName={categoryName} />
          ))}
      </div>

      <section className="mt-2p5 combo-offers">
        <h3 className="text-center p-3">Combo Offers</h3>
        <div className="grid-container mx-auto">
          {productsList &&
            productsList.map(({ _id, ...productDetails }) => (
              <ProductCard key={_id} productDetails={productDetails} />
            ))}
        </div>
      </section>
    </main>
  );
};

export { Home };
