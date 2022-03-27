import { React, useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { logo } from "../../assets";
import { useAuth, useWishlist, useCart } from "../../context";

const Header = () => {
  const [showInput, setShowInput] = useState(false);
  const [showNavDrawer, setShowNavDrawer] = useState(false);

  const { token } = useAuth();
  const { wishlist } = useWishlist();
  const { cartList } = useCart();

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
          <i
            className="fas fa-bars fa-lg primary-text myhamburger"
            onClick={() => setShowNavDrawer(!showNavDrawer)}
          ></i>

          <Link to="/" className="navbar-logo no-underline">
            <img className="logo-img" src={logo} alt="dazzle" />
            <span className="primary-text">Cera</span>
            <span className="secondary-text">Shop</span>
          </Link>

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
            {token ? (
              <Link
                className="navbar-icon-link flex-column-center"
                to="/profile"
              >
                <i className="fas fa-user-alt"></i>
                <span className="navbar-icon-text">Profile</span>
              </Link>
            ) : (
              <Link className="navbar-icon-link flex-column-center" to="/login">
                <i className="fas fa-user-alt"></i>
                <span className="navbar-icon-text">Login</span>
              </Link>
            )}
          </div>

          <div className="navbar-icon">
            <Link
              className="navbar-icon-link flex-column-center"
              to="/wishlist"
            >
              <i className="fas fa-heart badge badge-icon">
                {wishlist.length > 0 && (
                  <span className="badge-value icon-badge secondary">
                    {wishlist.length}
                  </span>
                )}
              </i>
              <span className="navbar-icon-text">Wishlist</span>
            </Link>
          </div>

          <div className="navbar-icon">
            <Link className="navbar-icon-link flex-column-center" to="/cart">
              <i className="fas fa-shopping-cart badge badge-icon">
                {cartList.length > 0 && (
                  <span className="badge-value icon-badge secondary">
                    {cartList.length}
                  </span>
                )}
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

      <nav
        className={
          showNavDrawer ? "sub-navigation nav-drawer" : "sub-navigation"
        }
      >
        <div className="flex-row-center drawer-header">
          <Link to="/products" className="nav-link">
            Home
          </Link>
          <Link to="/products" className="nav-link">
            Shop All
          </Link>
        </div>
        <Link to="/products" className="nav-link">
          Decor
        </Link>
        <Link to="/products" className="nav-link">
          Dining
        </Link>
        <Link to="/products" className="nav-link">
          Kitchen
        </Link>
        <Link to="/products" className="nav-link">
          Gifts
        </Link>
        <Link to="/products" className="nav-link">
          Brands
        </Link>
        <div className="drawer-footer border-top-1">
          <div className="navbar-icon p-1 pl-0p5">
            {token ? (
              <Link className="navbar-icon-link" to="/profile">
                <i className="fas fa-user-alt"></i>
                <span className="navbar-icon-text"> Profile</span>
              </Link>
            ) : (
              <Link className="navbar-icon-link" to="/login">
                <i className="fas fa-user-alt"></i>
                <span className="navbar-icon-text"> Login</span>
              </Link>
            )}
          </div>

          <div className="navbar-icon p-1 pl-0p5">
            <Link className="navbar-icon-link" to="/wishlist">
              <i className="fas fa-heart"></i>
              <span className="navbar-icon-text"> Wishlist</span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export { Header };
