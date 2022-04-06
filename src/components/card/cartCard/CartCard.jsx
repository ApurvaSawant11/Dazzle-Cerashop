import React from "react";
import "./cartCard.css";
import { useAuth, useCart, useWishlist } from "../../../context";
import { isProductInWishlist, calcPercentage } from "../../../utils";
import { toast } from "react-toastify";

const CartCard = ({ productDetails, wishlist, dispatch }) => {
  const {
    _id,
    title,
    imgURL,
    price: { discounted, original },
    qty,
  } = productDetails;

  const { token } = useAuth();
  const { removeFromCart, updateCartQuantity } = useCart();
  const { addToWishlist, wishlistDispatch } = useWishlist();

  const isInWishlist = isProductInWishlist(wishlist, _id);

  const cartQuantityHandler = async (type) => {
    await updateCartQuantity(_id, dispatch, token, type, toast);
  };

  const moveToWishlist = () => {
    removeFromCart(_id, dispatch, token);
    !isInWishlist &&
      addToWishlist(wishlistDispatch, productDetails, token, toast);
  };

  return (
    <div className="cart-item">
      <div className="card-horizontal">
        <div className="card-info">
          <img className="card-img-horizontal" src={imgURL} alt={title} />
          <div className="card-details">
            <div className="title">{title}</div>
            <div className="fw-700">
              Rs. {discounted}{" "}
              <span className="originalPrice fw-500">Rs. {original}</span> (
              {calcPercentage(discounted, original)}% OFF)
            </div>

            <div>
              <button
                className="cart-button danger-text"
                onClick={() => removeFromCart(_id, dispatch, token, toast)}
              >
                Remove
              </button>{" "}
              |{" "}
              <button
                className="cart-button secondary-text fw-700"
                onClick={() => moveToWishlist()}
              >
                Move To Wishlist
              </button>
            </div>
          </div>
        </div>
        <div className="cart-actions_mobile mt-1">
          <div className="quantity-selector">
            <button
              className="quantity-btn"
              onClick={() => cartQuantityHandler("DEC_QTY")}
            >
              -
            </button>
            <span className="quantity-input">{qty}</span>
            <button
              className="quantity-btn"
              onClick={() => cartQuantityHandler("INC_QTY")}
            >
              +
            </button>
          </div>
          <div className="final-price fw-700">Rs. {discounted}</div>
        </div>
      </div>
      <div className="cart-actions cart_web">
        <div className="quantity-selector m-auto">
          <button
            className={qty !== 1 ? "quantity-btn" : "quantity-btn disabled"}
            onClick={() => cartQuantityHandler("DEC_QTY")}
          >
            -
          </button>
          <span className="quantity-input">{qty}</span>
          <button
            className="quantity-btn"
            onClick={() => cartQuantityHandler("INC_QTY")}
          >
            +
          </button>
        </div>
      </div>
      <div className="final-price cart_web text-right fw-700">
        Rs. {discounted * qty}
      </div>
    </div>
  );
};

export { CartCard };
