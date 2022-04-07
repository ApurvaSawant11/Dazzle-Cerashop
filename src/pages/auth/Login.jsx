import React, { useState } from "react";
import "./auth.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context";
import { authImage } from "../../assets";
import { toast } from "react-toastify";
import { useDocumentTitle, useScrollToTop } from "../../hooks";

const Login = () => {
  useDocumentTitle("Login");
  useScrollToTop();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { token, loginUser } = useAuth();

  if (token) {
    setTimeout(() => {
      navigate("/products");
    }, 500);
  }

  const loginHandler = () => {
    loginUser(formData.email, formData.password, toast);
  };

  const guestLoginHandler = (e) => {
    setFormData((form) => ({
      ...form,
      email: "apurvasawant@gmail.com",
      password: "apusa123",
    }));
  };

  return (
    <section className="auth-container">
      <div className="form-img">
        <img src={authImage} alt="authimage" />
        <span className="img-text">
          <h3>LOGIN</h3>
          Get access to our amazing offers and best selling products.
        </span>
      </div>

      <form
        className="login-form p-2p5 pt-0"
        onSubmit={(e) => {
          e.preventDefault();
          loginHandler();
        }}
      >
        <h4 className="text-center py-1">Login</h4>
        <div className="input-field mb-2">
          <input
            className="input"
            name="email"
            type="email"
            required=""
            value={formData.email}
            onChange={(e) =>
              setFormData((form) => ({ ...form, email: e.target.value }))
            }
          />
          <span className="bar"></span>
          <label className="placeholder">Enter Email</label>
        </div>
        <div className="input-field">
          <input
            className="input"
            name="password"
            type="password"
            required=""
            value={formData.password}
            onChange={(e) =>
              setFormData((form) => ({ ...form, password: e.target.value }))
            }
          />
          <span className="bar"></span>
          <label className="placeholder">Password</label>
        </div>
        <div className="authbox-container flex-row gap-1 mt-0p5">
          <label htmlFor="auth-checkbox">
            <input id="auth-checkbox" name="rememberMe" type="checkbox" />{" "}
            Remember me
          </label>
          <Link
            to="/forgotpassword"
            className="button-link secondary-text fw-700"
          >
            Forgot Password?
          </Link>
        </div>

        <p className="mt-1p5 mb-1">
          <small>
            By continuing, you agree to Dazzle Cerashop's
            <span className="secondary-text fw-700">Terms of use</span> and
            <span className="secondary-text fw-700">Privacy Policy.</span>
          </small>
        </p>
        <button
          type="submit"
          className="button inverted-primary form-btn mb-1"
          onClick={guestLoginHandler}
        >
          Login as Guest
        </button>
        <button type="submit" className="button primary form-btn mb-1">
          Login
        </button>
        <p className="text-center">
          New user? Create your account{" "}
          <Link className="secondary-text fw-700" to="/signup">
            here
          </Link>
        </p>
      </form>
    </section>
  );
};

export { Login };
