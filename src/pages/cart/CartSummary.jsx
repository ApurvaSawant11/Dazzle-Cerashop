import React from "react";
import { giftWrapper, phTag } from "../../assets";
import { useCart } from "../../context";
import { getCartTotal } from "../../utils";

const CartSummary = () => {
  const { cartList } = useCart();
  const { cartTotal, couponDiscount, quantity } = getCartTotal(cartList);
  return (
    <div className="cart-footer m-auto">
      <div className="cart-offers">
        <div className="gift-wrapper flex-row m-2 ml-0">
          <img className="gift-svg" src={giftWrapper} alt="Gift Wrapper" />
          <div className="pl-1">
            <div>Want to gift your loved ones?(Rs.30)</div>
            <button className="plain-button secondary-text display-block">
              Add Gift Wrap
            </button>
          </div>
        </div>
        <div className="coupon-wrapper flex-row items-center m-2 ml-0">
          <img className="coupon-svg" src={phTag} alt="Coupon Tag" />
          <div className="input-field ml-0p5">
            <input
              className="input coupon-input"
              type="text"
              placeholder="Coupon Code"
            />
            <span className="button-link secondary-text ml-0p5 fw-700 coupon-btn">
              Apply
            </span>
          </div>
        </div>
      </div>
      <div className="cart-recap">
        <div>
          <span className="cart-total">Cart Total:</span>
          <span className="price-detail-value">Rs. {cartTotal}</span>
        </div>
        <div>
          <span>Coupon Discount: </span>
          <span className="price-detail-value danger-text">-Rs. 0</span>
        </div>
        <div>
          <span>Total Quantity: </span>
          <span className="price-detail-value">{quantity}</span>
        </div>
        <div>
          <span>Convenience Fee:</span>
          <span className="price-detail-value secondary-text fw-700">FREE</span>
        </div>
        <div className="fw-700 fw-700 border-top-1 text-md pt-0p5">
          <span>Total Amount: </span>
          <span className="price-detail-value">
            Rs. {cartTotal - couponDiscount}
          </span>
        </div>
        <button className="button primary mt-1 checkout-btn">Checkout</button>
      </div>
    </div>
  );
};

export { CartSummary };
