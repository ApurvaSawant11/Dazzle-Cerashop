import React, { useState } from "react";
import { useData, useOrder } from "../../context";
import { AddressModal } from "../../components";
import "./checkout.css";

const CheckoutAddress = () => {
  const { orderAddress, orderDispatch } = useOrder();

  const { address } = useData();
  const formValue = {
    name: "",
    street: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
    mobile: "",
  };
  const [addressForm, setAddressForm] = useState(formValue);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="address-container content-start">
      <div className="address-title items-center pb-1">
        <h6 className="m-0">Select Delivery Address</h6>
        <div
          className="button inverted-secondary radius-0"
          onClick={() => setShowModal(true)}
        >
          Add New Address
        </div>
      </div>
      {address.length > 0 ? (
        address.map(
          ({ _id, name, street, city, state, country, zipCode, mobile }) => (
            <div key={_id} className="checkout-address border-1 p-1 mb-1">
              <label className="radio-container">
                <input
                  type="radio"
                  name="radio"
                  className="radio-field"
                  checked={orderAddress._id === _id}
                  onChange={() =>
                    orderDispatch({
                      type: "ORDER_ADDRESS",
                      payload: {
                        _id,
                        name,
                        street,
                        city,
                        state,
                        country,
                        zipCode,
                        mobile,
                      },
                    })
                  }
                />{" "}
                <span className="fw-700">{name}</span>
                <div className="pl-1 pt-0p5 address-details text-xs">
                  <div>
                    {street}, {city}
                  </div>
                  <div>
                    {state}, {country} - {zipCode}
                  </div>
                  <div className="pt-0p5">
                    Mobile: <span className="fw-700">{mobile}</span>
                  </div>
                </div>
              </label>
            </div>
          )
        )
      ) : (
        <div>There are no addresses. Please add delivery address</div>
      )}

      {showModal && (
        <AddressModal
          addressForm={addressForm}
          setAddressForm={setAddressForm}
          setShowModal={setShowModal}
        />
      )}
    </div>
  );
};

export { CheckoutAddress };
