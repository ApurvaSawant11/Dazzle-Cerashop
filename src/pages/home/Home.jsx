import React, { useState, useEffect } from "react";
import "./home.css";
import { Carousel, CategoryCard, ProductCard } from "../../components";
import { useData } from "../../context";
import { filterByOffers } from "../../utils";
import axios from "axios";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

const Home = () => {
  useDocumentTitle("Home");
  const { productsList: data } = useData();
  const [categoriesList, setCategoriesList] = useState([]);

  useEffect(() => {
    axios
      .get("/api/categories")
      .then((response) => setCategoriesList(response.data.categories))
      .catch((error) => console.log("Home page API call error", error));
  }, []);

  const comboOffersList = filterByOffers([...data]);

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
        <div className="grid-container mx-auto mb-4">
          {comboOffersList &&
            comboOffersList
              .slice(0, 4)
              .map((productDetails) => (
                <ProductCard
                  key={productDetails._id}
                  productDetails={productDetails}
                />
              ))}
        </div>
      </section>
    </main>
  );
};

export { Home };
