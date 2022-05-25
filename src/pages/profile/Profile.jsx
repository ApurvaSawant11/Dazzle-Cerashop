import React, { useState } from "react";
import "./profile.css";
import { useNavigate } from "react-router-dom";
import { useAuth, useData, useCart, useWishlist } from "../../context";
import { AddressModal } from "../../components";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { toast } from "react-toastify";
import { useScrollToTop } from "../../hooks";

const Profile = () => {
  useDocumentTitle("My Profile");
  useScrollToTop();
  const { user, setUser, token, setToken, removeAddress } = useAuth();
  const { firstName, lastName, email } = user;
  const { address, dispatch } = useData();

  const navigate = useNavigate();
  const [showSection, setShowSection] = useState("profile");
  const [showModal, setShowModal] = useState(false);
  const { wishlistDispatch } = useWishlist();
  const { cartDispatch } = useCart();

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

  const logOutHandler = () => {
    wishlistDispatch({
      type: "LOG_OUT",
    });
    cartDispatch({
      type: "LOG_OUT",
    });
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("signup");

    setUser();
    setToken("");
    navigate("/");
  };

  const editAddress = (item) => {
    setAddressForm((form) => ({
      ...form,
      ...item,
    }));
  };

  return (
    <main className="flex-row-center wrap items-start mt-2p5 mb-4 pt-2 profile-container">
      <div className="flex-column gap-2">
        <div className="flex-row option-bar">
          <div
            className={`option-button ${
              showSection === "profile" ? "active" : ""
            }`}
            onClick={() => {
              setShowSection("profile");
            }}
          >
            Profile
          </div>

          <div
            className={`option-button ${
              showSection === "address" ? "active" : ""
            }`}
            onClick={() => {
              setShowSection("address");
            }}
          >
            Address
          </div>
        </div>
        {showSection === "profile" ? (
          <section
            className={"profile-section display-block border-1 pt-1 p-2p5"}
          >
            <h6 className="border-bottom-1 pb-1">Profile Details</h6>
            <table className="profile-details">
              <tbody>
                <tr>
                  <td>Full Name</td>
                  <td>
                    {firstName} {lastName}
                  </td>
                </tr>
                <tr>
                  <td>Mobile Number</td>
                  <td>9800980098</td>
                </tr>
                <tr>
                  <td>Email ID</td>
                  <td>{email}</td>
                </tr>
                <tr>
                  <td>Location</td>
                  <td>Pune</td>
                </tr>
              </tbody>
            </table>
            <button
              className="button danger logout-btn mt-1"
              onClick={logOutHandler}
            >
              Logout
            </button>
          </section>
        ) : (
          <section className={"address-section display-block"}>
            <div className="user-address flex-column items-center gap-2">
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

              {address.length > 0 ? (
                address.map((item, index) => (
                  <div
                    key={index}
                    className="card-horizontal radius-0 border-1"
                  >
                    <div className="address-header border-bottom-1 font-size-md p-0p5 px-1">
                      <span>{item.name}</span>
                      <span className="text-xs basic-bg radius-4px px-0p5">
                        Home
                      </span>
                    </div>
                    <p className="description m-0 p-1">
                      {item.street}, {item.city}, {item.state}, {item.country},{" "}
                      {item.zipCode}
                      <span className="display-block pt-0p5 pb-1">
                        Mobile: {item.mobile}
                      </span>
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
                ))
              ) : (
                <div>Could not find any saved addresses!</div>
              )}
            </div>

            {showModal && (
              <AddressModal
                addressForm={addressForm}
                setAddressForm={setAddressForm}
                setShowModal={setShowModal}
              />
            )}
          </section>
        )}
      </div>
    </main>
  );
};

export { Profile };
