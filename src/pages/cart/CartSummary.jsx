import React, { useState } from "react";
import { giftWrapper, phTag, RemoveIcon } from "../../assets";
import { useCart, useOrder } from "../../context";
import { getCartTotal } from "../../utils";
import { CouponModal } from "../../components";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CartSummary = () => {
  const { cartList, couponDetails, setCouponDetails } = useCart();
  const { orderDispatch } = useOrder();
  const [showModal, setShowModal] = useState(false);
  const [giftWrap, setGiftWrap] = useState(false);
  const { cartTotal, offerDiscount, quantity } = getCartTotal(cartList);
  const navigate = useNavigate();

  const couponDiscount = cartTotal
    ? Math.floor(
        Math.abs(
          (parseFloat(cartTotal - offerDiscount) / 100) *
            parseFloat(couponDetails.value)
        )
      )
    : 0;
  const totalAmt =
    cartTotal - offerDiscount - couponDiscount + (giftWrap ? 30 : 0);
  const totalDiscount = offerDiscount + couponDiscount;

  const checkoutHandler = () => {
    orderDispatch({
      type: "PRICE_DETAILS",
      payload: {
        cartTotal,
        offerDiscount,
        couponDiscount,
        totalAmt,
        totalDiscount,
      },
    });
    navigate("/checkout", { state: { isGiftWrap: giftWrap } });
  };

  return (
    <>
      <div className="cart-footer m-auto mb-4">
        <div className="cart-offers">
          <div className="gift-wrapper flex-row m-2 ml-0">
            <img className="gift-svg" src={giftWrapper} alt="Gift Wrapper" />
            <div className="pl-1">
              <div>Want to gift your loved ones?(Rs.30)</div>
              <button
                className="plain-button secondary-text display-block"
                onClick={() => setGiftWrap(!giftWrap)}
              >
                {giftWrap ? "Remove Gift Wrap" : "Add Gift Wrap"}
              </button>
            </div>
          </div>
          <div className="coupon-wrapper flex-row items-center m-2 ml-0">
            <img className="coupon-svg" src={phTag} alt="Coupon Tag" />
            <div className="input-field ml-0p5">
              <input
                className="input coupon-input mb-1"
                type="text"
                placeholder={
                  couponDetails.couponCode
                    ? `${couponDetails.couponCode}`
                    : "Coupon Code"
                }
                onClick={() => setShowModal(true)}
              />
              <span
                className="button-link secondary-text ml-0p5 fw-700 coupon-btn"
                onClick={() => setShowModal(true)}
              >
                {couponDetails.couponCode ? `Change` : `Select`}
              </span>
              {couponDetails.couponCode && (
                <div className="coupon-applied flex-row p-0p5">
                  <span className="fw-700">{couponDetails.couponCode}</span>
                  <i
                    className="fas fa-times danger-text"
                    onClick={() => {
                      setCouponDetails({
                        couponCode: "",
                        value: 0,
                      });
                      toast.error("Coupon Removed!", {
                        icon: <RemoveIcon size="2rem" />,
                      });
                    }}
                  ></i>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="cart-recap">
          <div>
            <span className="cart-total">Cart Total:</span>
            <span className="price-detail-value">Rs. {cartTotal}</span>
          </div>
          <div>
            <span>Offer Discount: </span>
            <span className="price-detail-value danger-text">
              -Rs. {offerDiscount}
            </span>
          </div>
          <div>
            <span>Coupon Discount: </span>
            <span className="price-detail-value danger-text">
              -Rs. {couponDiscount}
            </span>
          </div>
          <div>
            <span>Total Quantity: </span>
            <span className="price-detail-value">{quantity}</span>
          </div>
          {giftWrap && (
            <div>
              <span>Gift Wrap: </span>
              <span className="price-detail-value">Rs. 30</span>
            </div>
          )}
          <div>
            <span>Convenience Fee:</span>
            <span className="price-detail-value secondary-text fw-700">
              FREE
            </span>
          </div>
          <div className="fw-700 fw-700 border-top-1 text-md pt-0p5">
            <span>Total Amount: </span>
            <span className="price-detail-value">Rs. {totalAmt}</span>
          </div>
          <button
            className="button primary mt-1  radius-0 checkout-btn"
            onClick={checkoutHandler}
          >
            Checkout
          </button>
        </div>
      </div>
      {showModal && <CouponModal setShowModal={setShowModal} />}
    </>
  );
};

export { CartSummary };
