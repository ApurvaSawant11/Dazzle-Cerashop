import React from "react";
import { useAuth, useWishlist, useCart } from "../../../context";
import { isProductInCart } from "../../../utils";

const WishlistCard = ({ productDetails, cart }) => {
  const { removeFromWishlist, wishlistDispatch } = useWishlist();
  const { addToCart, updateCartQuantity, cartDispatch } = useCart();

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
    addToCart(cartDispatch, productDetails, token);
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
            onClick={() => removeFromWishlist(_id, wishlistDispatch, token)}
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
        onClick={() =>
          isInCart
            ? (updateCartQuantity(_id, cartDispatch, token, "INC_QTY"),
              alert(
                "Product already in Cart. Hence, Increased product quantity by 1"
              ))
            : moveToCartHandler()
        }
      >
        Add to Cart
      </button>
    </div>
  );
};

export { WishlistCard };