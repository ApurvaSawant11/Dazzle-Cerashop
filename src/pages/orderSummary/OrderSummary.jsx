import React from "react";
import "./orderSummary.css";
import { useOrder } from "../../context";
import { CartIcon, BsCheckCircle } from "../../assets";
import { Link } from "react-router-dom";
import { useDocumentTitle, useScrollToTop } from "../../hooks";

const OrderSummary = () => {
  useDocumentTitle("Order Summary");
  useScrollToTop;
  const {
    order: {
      totalAmount,
      paymentId,
      deliveryAddress,
      orderedProducts,
      cartTotal,
      discount,
    },
  } = useOrder();

  return paymentId ? (
    <div className="flex-row content-center wrap gap-2 p-2">
      <section className="address-container">
        <div className="flex-row border-1 p-1">
          <span className="text-3xl secondary-text confirm-icon">
            <BsCheckCircle />
          </span>
          <div className="pl-1">
            <span>Order: 265371</span>
            <div className="text-lg fw-700">
              Thank you {deliveryAddress.name}!{" "}
            </div>
          </div>
        </div>

        <div className="mt-1 p-1 border-1">
          <span className="text-lg">Your order is confirmed</span>
          <div className="text-xs">
            We've accepted your order, and we're getting it ready.
          </div>
          <div>
            <span className="fw-700">Payment ID: </span> {paymentId}
          </div>
        </div>

        <div className="mt-1 p-1 border-1">
          <div className="border-bottom-1 ">Customer Information</div>
          <div className="pt-0p5">
            <div className="fw-700">Contact Information</div>
            <div>Mobile: {deliveryAddress.mobile}</div>
          </div>
          <div className="pt-1 fw-700">Shipping Address</div>
          <div>
            {deliveryAddress.street}, {deliveryAddress.city}
          </div>
          <div>
            {deliveryAddress.state}, {deliveryAddress.country} -{" "}
            {deliveryAddress.zipCode}
          </div>
        </div>
      </section>

      <section className="details-container">
        <div className="pb-0p5 border-bottom-1">
          <CartIcon /> Order Summary
        </div>
        <div className="mt-1">
          {orderedProducts.map(
            ({ _id, imgURL, price: { discounted }, qty, title }) => (
              <div key={_id} className="flex-row mb-1">
                <div className="badge">
                  <img className="checkout-image" src={imgURL} alt={title} />
                  <span className="mini-badge secondary">{qty}</span>
                </div>
                <div className="pl-1">
                  <div>{title}</div>
                  <div className="text-xs fw-700">Rs. {discounted}</div>
                </div>
              </div>
            )
          )}
        </div>

        <div className="text-xs border-top-1">
          <div className="pt-0p5">
            <span className="cart-total">Sub Total:</span>
            <span className="price-detail-value">Rs. {cartTotal}</span>
          </div>
          <div>
            <span>Total Discount: </span>
            <span className="price-detail-value danger-text">
              -Rs. {discount}
            </span>
          </div>
          <div className="mb-0p5">
            <span>Convenience Fee:</span>
            <span className="price-detail-value secondary-text fw-700">
              FREE
            </span>
          </div>
          <div className="fw-700 fw-700 border-top-1 text-md py-1">
            <span>Total: </span>
            <span className="price-detail-value">Rs. {totalAmount}</span>
          </div>
        </div>
      </section>
    </div>
  ) : (
    <div className="flex-row-center image-container not-found-image">
      <div className="p-1">
        <h5 className="text-3xl">Oops! Could not find any orders 😓</h5>
        <h6 className="text-center">
          Checkout our collection and order now{" "}
          <div className="pt-1">
            <Link to="/products" className="">
              <button className="button secondary primary-text radius-0">
                Go the Collections
              </button>
            </Link>
          </div>
        </h6>
      </div>
    </div>
  );
};

export { OrderSummary };
