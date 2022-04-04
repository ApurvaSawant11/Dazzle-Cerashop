import React from "react";
import { useNavigate } from "react-router";
import { useAuth, useWishlist, useCart } from "../../../context";
import { isProductInCart, isProductInWishlist } from "../../../utils";
import { toast } from "react-toastify";

const ProductCard = ({ productDetails }) => {
  const {
    _id,
    title,
    imgURL,
    price: { discounted, original },
    isBestSeller,
  } = productDetails;

  const { wishlist, removeFromWishlist, addToWishlist, wishlistDispatch } =
    useWishlist();
  const { cartList, addToCart, cartDispatch } = useCart();

  const navigate = useNavigate();
  const { token } = useAuth();

  const isInCart = isProductInCart(cartList, _id);
  const isInWishlist = isProductInWishlist(wishlist, _id);

  const cartHandler = () => {
    token
      ? isInCart
        ? navigate("/cart")
        : addToCart(cartDispatch, productDetails, token, toast)
      : navigate("/login");
  };

  const wishlistHandler = () => {
    token
      ? isInWishlist
        ? removeFromWishlist(_id, wishlistDispatch, token, toast)
        : addToWishlist(wishlistDispatch, productDetails, token, toast)
      : navigate("/login");
  };

  return (
    <div className="card-vertical m-1">
      <div className="badge">
        <img
          loading="lazy"
          className="card-img-vertical img-responsive"
          src={imgURL}
          alt={title}
          onClick={() => navigate(`/${_id}`)}
        />

        {isBestSeller && (
          <span className="badge-text badge-on-left success px-0p5">
            Bestseller
          </span>
        )}

        <span>
          <i
            className={`far fa-heart wishlist-btn ${
              isInWishlist ? "wishlisted" : ""
            }`}
            onClick={() => wishlistHandler()}
          ></i>
        </span>
      </div>
      <div
        className="card-details text-center"
        onClick={() => navigate(`/${_id}`)}
      >
        <div className="title">{title}</div>
        <div className="card-footer-vertical">
          <span className="discountedPrice">Rs. {discounted}</span>
          <span className="originalPrice pl-0p5">Rs. {original}</span>
        </div>
      </div>
      <button
        className="plain-button card-button mt-0p5"
        onClick={() => cartHandler()}
      >
        {isInCart ? "Go to Cart" : "Add to Cart"}
      </button>
    </div>
  );
};

export { ProductCard };
