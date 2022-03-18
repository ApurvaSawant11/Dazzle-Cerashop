import React from "react";
import "../card.css";

import { Link } from "react-router-dom";

const CategoryCard = ({ img: { alt, url }, categoryName }) => {
  return (
    <div className="card-vertical category-item">
      <span className="category-header mt-1p5">{categoryName}</span>
      <img className="card-img-vertical" src={url} alt={alt} loading="lazy" />
      <span className="overlay">
        <Link to="/" className="button button-anchor">
          View
        </Link>
      </span>
    </div>
  );
};

export { CategoryCard };
