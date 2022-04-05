import React, { useState } from "react";
import { toast } from "react-toastify";
import { CouponIcon } from "../../assets";
import { useCart } from "../../context";

const CouponModal = ({ setShowModal }) => {
  const COUPONS = [
    { couponCode: "SUMMER", value: 50 },
    { couponCode: "BOHO", value: 15 },
  ];

  const { couponDetails, setCouponDetails } = useCart();
  const [input, setInput] = useState(couponDetails);

  return (
    <div className="basic-modal show">
      <div className="modal border-2 mx-auto m-1p5">
        <h6 className="text-center">Applicable Coupons</h6>
        <div className="modal-body p-2 pb-1">
          {COUPONS.map(({ couponCode, value }) => (
            <div className="coupon-option">
              <label className="radio-container">
                <input
                  type="radio"
                  name="radio"
                  className="radio-field"
                  onChange={() =>
                    setInput({
                      ...couponDetails,
                      value: value,
                      couponCode: couponCode,
                    })
                  }
                  checked={value === input.value ? true : false}
                />
                <span> Shop from our collection and get {value}% OFF.</span>
                <div className="pl-1p5">
                  Use Code:{" "}
                  <span className="secondary-text fw-700">{couponCode}</span>
                </div>
              </label>
            </div>
          ))}
        </div>
        <div className="text-center p-1">
          <button
            className="button basic mx-1"
            onClick={() => setShowModal(false)}
          >
            Cancel
          </button>
          <button
            className="button primary mx-1"
            onClick={() => {
              setShowModal(false);
              setCouponDetails(input);
              toast.success("Coupon Applied!", {
                icon: <CouponIcon size="2rem" />,
              });
            }}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export { CouponModal };
