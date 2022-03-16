import { React, useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { logo } from "../../assets";

const Header = () => {
  const [showInput, setShowInput] = useState(false);

  return (
    <>
      <div className="sub-header text-center">
        <span className="offer-text border-right-1 pr-1 mr-1">
          <i className="fas fa-truck px-1"></i>Free shipping on all orders
        </span>
        <span className="offer-code">Use code FREEDEL</span>
      </div>
      <header className="header flex-row wrap">
        <div className="navbar-section">
          <i className="fas fa-bars fa-lg primary-text myhamburger"></i>

          <a href="/index.html" className="navbar-logo no-underline">
            <img className="logo-img" src={logo} alt="dazzle" />
            <span className="primary-text">Cera</span>
            <span className="secondary-text">Shop</span>
          </a>

          <Link to="/" className="navbar-link ml-2">
            Home
          </Link>
          <Link to="/products" className="navbar-link ml-2">
            Shop All
          </Link>
        </div>

        <div className="navbar-section">
          <div
            className="navbar-icon-link flex-column-center"
            onClick={() => setShowInput(!showInput)}
          >
            <i className="fa fa-search navbar-search-icon"></i>
          </div>

          <div className="navbar-icon">
            <Link className="navbar-icon-link flex-column-center" to="/login">
              <i className="fas fa-user-alt"></i>
              <span className="navbar-icon-text">Login</span>
            </Link>
          </div>

          <div className="navbar-icon">
            <Link
              className="navbar-icon-link flex-column-center"
              to="/wishlist"
            >
              <i className="fas fa-heart"></i>
              <span className="navbar-icon-text">Wishlist</span>
            </Link>
          </div>

          <div className="navbar-icon">
            <Link className="navbar-icon-link flex-column-center" to="/cart">
              <i className="fas fa-shopping-cart badge badge-icon">
                <span className="badge-value icon-badge secondary">2</span>
              </i>
              <span className="navbar-icon-text">Cart</span>
            </Link>
          </div>
        </div>
      </header>

      {showInput && (
        <form className="navbar-searchbar radius-0">
          <input
            className="search-input"
            placeholder="What are you looking for?"
          />
          <i className="fa fa-search searchbar-search-icon"></i>
          <i
            className="fas fa-times searchbar-close-icon"
            onClick={() => setShowInput(!showInput)}
          ></i>
        </form>
      )}
    </>
  );
};

export { Header };
