import React from "react";

import { Link } from "react-router-dom";

const ProductCard = ({ productDetails }) => {
  const {
    title,
    img: { alt, url },
    price: { discounted, original },
    isWishlisted,
    isBestSeller,
  } = productDetails;
  return (
    <>
      <div className="card-vertical m-1">
        <Link to="/singleproduct" className="no-underline primary-text">
          <div className="badge">
            <img
              loading="lazy"
              className="card-img-vertical img-responsive"
              src={url}
              alt={alt}
            />

            <span className="badge-text badge-on-left success px-0p5">
              Bestseller
            </span>

            <span>
              <i
                className={
                  isWishlisted
                    ? "far fa-heart wishlist-btn wishlisted"
                    : "far fa-heart wishlist-btn"
                }
              ></i>
            </span>
          </div>
          <div className="card-details text-center">
            <div className="title">{title}</div>
            <div className="card-footer-vertical">
              <span className="discountedPrice">Rs. {discounted}</span>
              <span className="originalPrice pl-0p5">Rs. {original}</span>
            </div>
          </div>
        </Link>
        <button className="plain-button card-button mt-0p5">Add to Cart</button>
      </div>
    </>
  );
};

export { ProductCard };
