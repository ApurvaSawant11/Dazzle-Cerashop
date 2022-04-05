import React, { useState } from "react";
import { AddressModal } from "../../components";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { toast } from "react-toastify";
import { useAuth, useData } from "../../context";
const UserAddress = () => {
  const { user, setUser, token, setToken, removeAddress } = useAuth();
  const { firstName, lastName, email } = user;
  const { address, dispatch } = useData();
  const [showModal, setShowModal] = useState(false);

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

  const editAddress = (item) => {
    setAddressForm((form) => ({
      ...form,
      ...item,
    }));
  };

  return (
    <section className={"address-section display-block"}>
      <div className="flex-column items-center gap-2">
        <div className="address-title items-center">
          <h6 className="m-0">Saved Addresses</h6>
          <button
            onClick={() => {
              setShowModal(true);
              setAddressForm(formValue);
            }}
            className="button inverted-secondary radius-0"
          >
            Add New Address
          </button>
        </div>

        {address &&
          address.map((item, index) => (
            <div key={index} className="card-horizontal radius-0 border-1">
              <div className="address-header border-bottom-1 font-size-md p-0p5 px-1">
                <span>{item.name}</span>
                <span className="text-xs basic-bg radius-4px px-0p5">Home</span>
              </div>
              <p className="description m-0 p-1">
                {item.street}, {item.city}, {item.state}, {item.country},{" "}
                {item.zipCode}
                <span className="display-block pt-0p5 pb-1">
                  Mobile: {item.mobile}
                </span>
                <label htmlFor="default-address">
                  <input
                    id="default-address"
                    className="checkbox-field"
                    type="checkbox"
                  />{" "}
                  Default Address
                </label>
              </p>

              <div className="action-buttons border-top-1">
                <span
                  className="button-link info-text border-right-1 p-0p5 edit-btn"
                  onClick={() => {
                    setShowModal(true);
                    editAddress(item);
                  }}
                >
                  Edit
                </span>
                <span
                  className="button-link danger-text p-0p5 remove-btn"
                  onClick={() =>
                    removeAddress(dispatch, item._id, token, toast)
                  }
                >
                  Remove
                </span>
              </div>
            </div>
          ))}
      </div>

      {showModal && (
        <AddressModal
          addressForm={addressForm}
          setAddressForm={setAddressForm}
          setShowModal={setShowModal}
        />
      )}
    </section>
  );
};

export { UserAddress };
