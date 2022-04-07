import React, { useState } from "react";
import "./auth.css";
import { Link } from "react-router-dom";
import { useDocumentTitle, useScrollToTop } from "../../hooks";

const ForgotPassword = () => {
  useDocumentTitle("Forgot Password");
  useScrollToTop();
  const [showChangeDiv, setShowChangeDiv] = useState(false);

  return (
    <section className="auth-container">
      <form className="forgot-form p-2p5 pt-1">
        <h4 className="text-center pb-1">Forgot Password?</h4>
        {!showChangeDiv && (
          <div className="send-email-div">
            <div className="input-field mb-2">
              <input className="input" type="text" required />
              <span className="bar"></span>
              <label className="placeholder">Enter Email</label>
            </div>
            <p
              className="button button-anchor send-email-btn text-center"
              onClick={() => setShowChangeDiv(true)}
            >
              Send Email
            </p>
            <p className="text-center mt-1">
              Remember Password? Login
              <Link className="secondary-text fw-700" to="/login">
                {" "}
                here
              </Link>
            </p>
          </div>
        )}

        {showChangeDiv && (
          <div className="change-pwd-div">
            <div className="input-field mb-2">
              <input className="input" type="password" required />
              <span className="bar"></span>
              <label className="placeholder">Enter OTP</label>
            </div>

            <div className="input-field mb-2">
              <input className="input" type="password" required />
              <span className="bar"></span>
              <label className="placeholder">New Password</label>
            </div>

            <Link
              to="/login"
              className="button button-anchor send-email-btn text-center"
            >
              Submit
            </Link>
          </div>
        )}
      </form>
    </section>
  );
};

export { ForgotPassword };
