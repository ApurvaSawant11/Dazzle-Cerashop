import React from "react";
import "./modal.css";
import { useAuth, useData } from "../../context";
import { toast } from "react-toastify";
import { ErrorIcon } from "../../assets";
import { validateAddress } from "../../utils";

const AddressModal = ({ addressForm, setAddressForm, setShowModal }) => {
  const { dispatch } = useData();
  const { token, addAddress, updateAddress } = useAuth();

  const fillFormValue = (event, fieldName) => {
    const { value } = event.target;
    setAddressForm((prev) => ({ ...prev, [fieldName]: value }));
  };

  const dummyAddress = () => {
    setAddressForm({
      name: "John Parker",
      street: "82124 Jaskolski Springs",
      city: "Pune",
      state: "Maharashtra",
      country: "India",
      zipCode: "411002",
      mobile: "9988774563",
    });
  };

  const saveAddressHandler = () => {
    const result = validateAddress(addressForm);
    if (result === "valid") {
      setShowModal(false);
      addressForm._id
        ? updateAddress(dispatch, addressForm, token, toast)
        : addAddress(dispatch, addressForm, token, toast);
    } else {
      toast.error(`Please enter valid ${result}`, {
        icon: <ErrorIcon size="2rem" />,
      });
    }
  };

  return (
    <div className="form-modal show">
      <div className="modal border-2 mx-auto m-1p5 p-2">
        <form
          className="address-form"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <h6 className="text-center">ADDRESS</h6>

          <div className="input-field my-2 mx-auto">
            <input
              className="input"
              type="text"
              value={addressForm.name}
              onChange={(e) => fillFormValue(e, "name")}
              required
            />
            <span className="bar"></span>
            <label className="placeholder">Enter Name</label>
          </div>

          <div className="input-field my-2 mx-auto">
            <input
              className="input"
              type="text"
              value={addressForm.street}
              onChange={(e) => fillFormValue(e, "street")}
              required
            />
            <span className="bar"></span>
            <label className="placeholder">Street</label>
          </div>

          <div className="input-field mt-2 mx-auto">
            <input
              className="input"
              type="text"
              value={addressForm.city}
              onChange={(e) => fillFormValue(e, "city")}
              required
            />
            <span className="bar"></span>
            <label className="placeholder">City</label>
          </div>
          <div className="flex-row form-name">
            <div className="input-field mt-2 mx-auto">
              <input
                className="input"
                type="text"
                value={addressForm.state}
                onChange={(e) => fillFormValue(e, "state")}
                required
              />

              <span className="bar"></span>
              <label className="placeholder">State</label>
            </div>

            <div className="input-field mt-2 mx-auto">
              <input
                className="input"
                type="text"
                value={addressForm.country}
                onChange={(e) => fillFormValue(e, "country")}
                required
              />
              <span className="bar"></span>
              <label className="placeholder">Country</label>
            </div>
          </div>

          <div className="flex-row form-name">
            <div className="input-field my-2 mx-auto">
              <input
                className="input"
                type="number"
                value={addressForm.zipCode}
                onChange={(e) => fillFormValue(e, "zipCode")}
                required
              />
              <span className="bar"></span>
              <label className="placeholder">Zipcode</label>
            </div>

            <div className="input-field my-2 mx-auto">
              <input
                className="input"
                type="number"
                value={addressForm.mobile}
                onChange={(e) => fillFormValue(e, "mobile")}
                required
              />
              <span className="bar"></span>
              <label className="placeholder">Mobile</label>
            </div>
          </div>
          <div className="flex-row-center">
            <button
              type="submit"
              className="button secondary m-1 basis-full"
              onClick={saveAddressHandler}
            >
              Save
            </button>
            <button
              type="submit"
              className="button primary m-1 basis-full whitespace-nowrap"
              onClick={dummyAddress}
            >
              Dummy Address
            </button>
          </div>
          <div className=" flex-row-center">
            <button
              className="button inverted-danger m-1"
              onClick={(e) => setShowModal(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export { AddressModal };
