import React, { useEffect } from "react";
import "../card.css";

import { useNavigate } from "react-router-dom";
import { useData } from "../../../context";

const CategoryCard = ({ img: { alt, url }, categoryName }) => {
  const { categoriesList, dispatch } = useData();
  const navigate = useNavigate();

  const clickHandler = (categoryName) => {
    // reseting categoriesList to false
    for (let prop of Object.keys(categoriesList)) {
      categoriesList[prop] = false;
    }

    dispatch({
      type: "CATEGORY",
      payload: { [categoryName]: true },
    });
    navigate("/products");
  };

  return (
    <div className="card-vertical category-item">
      <span className="category-header mt-1p5">{categoryName}</span>
      <img className="card-img-vertical" src={url} alt={alt} loading="lazy" />
      <span className="overlay">
        <span
          className="button button-anchor"
          onClick={() => clickHandler(categoryName)}
        >
          View
        </span>
      </span>
    </div>
  );
};

export { CategoryCard };
