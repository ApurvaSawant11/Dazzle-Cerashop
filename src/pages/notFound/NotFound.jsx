import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex-row-center image-container not-found-image">
      <div className="p-1">
        <h5 className="text-3xl">Oops! Could not find the page! 😓</h5>
        <h6 className="text-center">
          Please try different link OR Click{" "}
          <Link to="/" className="secondary-text primary-bg py-0 p-0p5">
            HERE
          </Link>
        </h6>
      </div>
    </div>
  );
};

export { NotFound };
