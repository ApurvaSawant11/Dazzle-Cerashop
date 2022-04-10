import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth, useCart, useOrder, useData } from "../../context";
import "./checkout.css";
import { CheckoutAddress } from "./CheckoutAddress";
import { toast } from "react-toastify";
import { ErrorIcon } from "../../assets";
import { useDocumentTitle, useScrollToTop } from "../../hooks";
import { getDeliveryDate } from "../../utils";

const Checkout = () => {
  useDocumentTitle("Checkout");
  useScrollToTop();
  const navigate = useNavigate();
  const {
    token,
    user: { firstName, lastName, email },
  } = useAuth();
  const { priceDetails, orderDispatch, setOrder, orderAddress } = useOrder();
  const { cartTotal, offerDiscount, couponDiscount, totalAmt } = priceDetails;
  const { cartList, clearCart, cartDispatch } = useCart();
  const { address } = useData();

  const loadScript = async (url) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = url;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      toast.error("Razorpay SDK failed to load, check you connection", {
        icon: <ErrorIcon size="2rem" />,
      });
      return;
    }

    const options = {
      key: "rzp_test_UkmbZHZr3kyrOC",
      amount: totalAmt * 100,
      currency: "INR",
      name: "Dazzle Cerashop",
      description: "Thank you for shopping with us",
      handler: function (response) {
        const orderData = {
          orderedProducts: [...cartList],
          totalAmount: totalAmt,
          paymentId: response.razorpay_payment_id,
          deliveryAddress: orderAddress,
          cartTotal: cartTotal,
          discount: offerDiscount + couponDiscount,
        };

        setOrder({ ...orderData });
        clearCart(cartDispatch, cartList, token);
        orderDispatch({ type: "RESET_PRICE" });
        navigate("/order_summary");
      },

      prefill: {
        name: `${firstName} ${lastName}`,
        email: email,
        contact: "9800980098",
      },

      theme: {
        color: "#252525",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const placeOrderHandler = () => {
    if (address.length === 0) {
      toast.error("Please add Address");
      setTimeout(() => {
        navigate("/profile");
      }, 1500);
    } else {
      !orderAddress.name
        ? toast.error("Please select Address")
        : displayRazorpay();
    }
  };

  return priceDetails.cartTotal ? (
    <section className="flex-row content-center wrap gap-2 p-2">
      <CheckoutAddress />

      <div className="details-container">
        {cartList.map(({ _id, imgURL, qty, title }) => (
          <div key={_id} className="flex-row mb-1">
            <div className="badge">
              <img className="checkout-image" src={imgURL} alt={title} />
              <span className="mini-badge secondary">{qty}</span>
            </div>
            <div className="pl-1">
              <div>{title}</div>
              <div className="delivery-date">
                Estimated Delivery: {getDeliveryDate()}
              </div>
            </div>
          </div>
        ))}

        <div className="text-xs">
          <div className="fw-700 text-xs border-top-1 py-0p5">
            PRICE DETAILS
          </div>
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
          <div className="mb-0p5">
            <span>Convenience Fee:</span>
            <span className="price-detail-value secondary-text fw-700">
              FREE
            </span>
          </div>
          <div className="fw-700 fw-700 border-top-1 text-md py-1">
            <span>Total Amount: </span>
            <span className="price-detail-value">Rs. {totalAmt}</span>
          </div>
          <button
            className="button primary radius-0 checkout-btn"
            onClick={placeOrderHandler}
          >
            Place Order
          </button>
        </div>
      </div>
    </section>
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

export { Checkout };
