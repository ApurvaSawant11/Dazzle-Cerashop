import React from "react";
import { toast } from "react-toastify";
import { useAuth, useWishlist, useCart } from "../../../context";
import { isProductInCart } from "../../../utils";
import { CheckMarkIcon } from "../../../assets";
import { useNavigate } from "react-router-dom";

const WishlistCard = ({ productDetails, cart }) => {
  const { removeFromWishlist, wishlistDispatch } = useWishlist();
  const { addToCart, cartDispatch } = useCart();
  const navigate = useNavigate();

  const {
    _id,
    title,
    imgURL,
    price: { discounted, original },
    isBestseller,
  } = productDetails;

  const { token } = useAuth();

  const isInCart = isProductInCart(cart, _id);

  const moveToCartHandler = () => {
    if (isInCart) {
      navigate("/cart");
    } else {
      addToCart(cartDispatch, productDetails, token, toast);
      removeFromWishlist(_id, wishlistDispatch, token);
    }
  };

  return (
    <div className="card-vertical m-1">
      <div className="badge">
        <img
          loading="lazy"
          className="card-img-vertical img-responsive"
          src={imgURL}
          alt={title}
        />

        {isBestseller && (
          <span className="badge-text badge-on-left success px-0p5">
            Bestseller
          </span>
        )}

        <span>
          <i
            className="far fa-trash-alt card-delete-icon"
            onClick={() =>
              removeFromWishlist(_id, wishlistDispatch, token, toast)
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
      <button
        className="plain-button card-button mt-0p5"
        onClick={moveToCartHandler}
      >
        {isInCart ? "Go to Cart" : "Add to Cart"}
      </button>
    </div>
  );
};

export { WishlistCard };
