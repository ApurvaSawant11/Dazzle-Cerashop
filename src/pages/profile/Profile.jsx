import React, { useState } from "react";
import "./profile.css";
import { useNavigate } from "react-router-dom";
import { useAuth, useData } from "../../context";

const Profile = () => {
  const { user, setUser, setToken } = useAuth();
  const { firstName, lastName, email } = user;
  const navigate = useNavigate();
  const [check, setChecked] = useState(true);
  const [showSection, setShowSection] = useState("profile-section");
  const { dispatch } = useData();
  const logOutHandler = () => {
    dispatch({
      type: "LOG_OUT",
    });
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("signup");

    setUser();
    setToken("");
    navigate("/");
  };

  return (
    <main className="flex-row-center wrap items-start mt-2p5 pt-2">
      <aside className="profile-aside pr-2 flex-column gap-1">
        <div className="flex-column">
          <p className="heading text-uppercase border-bottom-1 pb-0p5">
            Account
          </p>
          <input
            type="radio"
            id="profile"
            checked={check}
            onChange={() => {
              setChecked(true);
              setShowSection("profile-section");
            }}
          />
          <label htmlFor="profile" className="aside-buttons">
            Profile
          </label>

          <input
            type="radio"
            id="address"
            checked={!check}
            onChange={() => {
              setChecked(!check);
              setShowSection("address-section");
            }}
          />
          <label htmlFor="address" className="aside-buttons">
            Address
          </label>

          <p className="heading text-uppercase border-bottom-1 pb-0p5">
            Credits
          </p>
          <label className="aside-buttons">Coupons</label>
          <label className="aside-buttons">Cerashop Coins</label>
        </div>
      </aside>
      <div className="flex-column gap-2">
        <section
          className={
            showSection === "profile-section"
              ? "profile-section display-block border-1 pt-1 p-2p5"
              : "profile-section border-1 pt-1 p-2p5"
          }
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

        <section
          className={
            showSection === "address-section"
              ? "address-section display-block"
              : "address-section"
          }
        >
          <div className="flex-column items-center gap-2">
            <div className="address-title items-center">
              <h6 className="m-0">Saved Addresses</h6>
              <button className="button inverted-secondary radius-0">
                Add New Address
              </button>
            </div>
            <div className="card-horizontal radius-0 border-1">
              <div className="address-header border-bottom-1 font-size-md p-0p5 px-1">
                <span>Apurva Sawant</span>
                <span className="text-xs basic-bg radius-4px px-0p5">Home</span>
              </div>
              <p className="description m-0 p-1">
                Shop No. 3 and 4, Sohrab Hall, Opp. Jehangir Hospital, Mahatma
                Gandhi Rd, Camp. Pune, Maharashtra, 411001
                <span className="display-block pt-0p5 pb-1">
                  Mobile: 9800980098
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
                <span className="button-link info-text border-right-1 p-0p5 edit-btn">
                  Edit
                </span>
                <span className="button-link danger-text p-0p5 remove-btn">
                  Remove
                </span>
              </div>
            </div>

            <div className="card-horizontal radius-0 border-1">
              <div className="address-header border-bottom-1 font-size-md p-0p5 px-1">
                <span>Apurva Sawant</span>
                <span className="text-xs basic-bg radius-4px px-0p5">Work</span>
              </div>
              <p className="description m-0 p-1">
                MIDC, Mira Road East, Mira Bhayandar, Maharashtra, 401107
                <span className="display-block pt-0p5 pb-1">
                  Phone: 1800 0000 000
                </span>
                <label htmlFor="default-address2">
                  <input
                    id="default-address2"
                    className="checkbox-field"
                    type="checkbox"
                  />{" "}
                  Default Address
                </label>
              </p>

              <div className="action-buttons border-top-1">
                <span className="button-link info-text border-right-1 p-0p5 edit-btn">
                  Edit
                </span>
                <span className="button-link danger-text p-0p5 remove-btn">
                  Remove
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export { Profile };
