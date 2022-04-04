import React from "react";
import { Link } from "react-router-dom";
import { emptyPage } from "../../assets";

const NotFound = () => {
  return (
    <div className="flex-row-center image-container">
      <div className="empty-page-text">
        <h5>Oops! Could not find the page! 😓</h5>
        <h6>
          Please try different link address OR Click{" "}
          <Link to="/" className="secondary-text primary-bg py-0 p-0p5">
            HERE
          </Link>
        </h6>
      </div>
      <img
        className="empty-page-image"
        src={emptyPage}
        loading="lazy"
        alt="empty page"
      />
    </div>
  );
};

export { NotFound };
