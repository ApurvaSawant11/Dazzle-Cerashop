import React, { useState } from "react";
import "./auth.css";
import { authImage } from "../../assets";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context";

export function Signup() {
  const defaultFormValue = {
    email: "",
    password: "",
    confirmPwd: "",
    firstName: "",
    lastName: "",
  };
  const [formData, setFormData] = useState(defaultFormValue);
  const { token, signupUser } = useAuth();
  const navigate = useNavigate();

  const signUpHandler = () => {
    const { email, password, confirmPwd, firstName, lastName } = formData;
    if (
      email &&
      password &&
      confirmPwd &&
      firstName &&
      lastName !== "" &&
      password === confirmPwd
    ) {
      (async () => {
        signupUser(email, password, firstName, lastName);
      })();
    }
  };

  const fillFormValue = (event, fieldName) => {
    const { value } = event.target;
    setFormData((form) => ({ ...form, [fieldName]: value }));
  };

  if (token) {
    setTimeout(() => {
      navigate("/products");
    }, 500);
  }

  return (
    <section className="auth-container">
      <div className="form-img">
        <img src={authImage} alt="signup image" />
        <span className="img-text">
          <h3>New here?</h3>
          Signup with your email and avail exciting offers.
        </span>
      </div>
      <form className="signup-form p-2p5" onSubmit={(e) => e.preventDefault()}>
        <h4 className="text-center py-1">Signup</h4>
        <div className="flex-row form-name">
          <div className="input-field mb-2">
            <input
              className="input"
              type="text"
              value={formData.firstName}
              onChange={(e) => fillFormValue(e, "firstName")}
              required
            />
            <span className="bar"></span>
            <label className="placeholder">First Name</label>
          </div>
          <div className="input-field mb-2">
            <input
              className="input"
              type="text"
              value={formData.lastName}
              onChange={(e) => fillFormValue(e, "lastName")}
              required
            />
            <span className="bar"></span>
            <label className="placeholder">Last Name</label>
          </div>
        </div>

        <div className="input-field mb-2">
          <input
            className="input"
            type="email"
            value={formData.email}
            onChange={(e) => fillFormValue(e, "email")}
            required
          />
          <span className="bar"></span>
          <label className="placeholder">Enter Email</label>
        </div>
        <div className="input-field mb-2">
          <input
            className="input"
            type="password"
            value={formData.password}
            onChange={(e) => fillFormValue(e, "password")}
            required
          />
          <span className="bar"></span>
          <label className="placeholder">Password</label>
        </div>
        <div className="input-field mb-2">
          <input
            className="input"
            type="password"
            value={formData.confirmPwd}
            onChange={(e) => fillFormValue(e, "confirmPwd")}
            required
          />
          <span className="bar"></span>
          <label className="placeholder">Confirm Password</label>
        </div>
        <p>
          <small>
            By continuing, you agree to Dazzle Cerashop's
            <span className="secondary-text fw-700">Terms of use</span> and
            <span className="secondary-text fw-700">Privacy Policy.</span>
          </small>
        </p>
        <button
          className="button primary form-btn mt-0p5"
          onClick={() => signUpHandler()}
        >
          Signup
        </button>

        <p className="text-center mt-1">
          Already have an account? Login{" "}
          <Link className="secondary-text fw-700" to="/login">
            here
          </Link>
        </p>
      </form>
    </section>
  );
}
