import React from "react";
import "./auth.css";

export function ForgetPassword() {
  return (
    <section className="auth-container">
      <form className="forgot-form p-2p5 pt-1">
        <h4 className="text-center pb-1">Forgot Password?</h4>
        <div className="send-email-div">
          <div className="input-field mb-2">
            <input className="input" type="text" required />
            <span className="bar"></span>
            <label className="placeholder">Enter Email</label>
          </div>
          <a className="button button-anchor send-email-btn text-center">
            Send Email
          </a>
          <p className="text-center mt-1">
            Remember Password? Login
            <Link className="secondary-text fw-700" to="/login">
              here
            </Link>
          </p>
        </div>

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
      </form>
    </section>
  );
}
