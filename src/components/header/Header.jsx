import { React, useState, useEffect, useRef } from "react";
import "./header.css";
import { Link, useNavigate } from "react-router-dom";
import { logo } from "../../assets";
import { useAuth, useWishlist, useCart, useData } from "../../context";

const Header = () => {
  const [showNavDrawer, setShowNavDrawer] = useState(false);
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const navDrawerData = ["All", "Decor", "Dining", "Kitchen", "Gifts"];

  const { token } = useAuth();
  const { categoryGroupName, dispatch } = useData();
  const { wishlist } = useWishlist();
  const { cartList } = useCart();
  const firstUpdate = useRef(true);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    navigate("/products");
    dispatch({
      type: "SEARCH",
      payload: input,
    });
  }, [input]);

  useEffect(() => {
    dispatch({ type: "CATEGORY_GROUP_NAME", payload: "" });
  }, []);

  const categoryGroupHandler = (groupName) => {
    dispatch({ type: "CATEGORY_GROUP_NAME", payload: groupName });
  };

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
            Shop Now
          </Link>
        </div>

        <div className="navbar-section">
          <form className="navbar-searchbar radius-0">
            <input
              className="search-input"
              placeholder="Search..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <i className="fa fa-search searchbar-search-icon"></i>
            <i
              className="fas fa-times searchbar-close-icon"
              onClick={() => {
                setInput("");
              }}
            ></i>
          </form>
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
        <form
          className="mobile-searchbar navbar-searchbar radius-0"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            className="search-input"
            placeholder="What are you looking for?"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <i className="fa fa-search searchbar-search-icon"></i>
          <i
            className="fas fa-times searchbar-close-icon"
            onClick={() => {
              setInput("");
            }}
          ></i>
        </form>
      </header>

      <nav
        className={
          showNavDrawer ? "sub-navigation nav-drawer" : "sub-navigation"
        }
      >
        <div className="flex-row-center drawer-header">
          <Link
            to="/"
            className="nav-link"
            onClick={() => setShowNavDrawer(false)}
          >
            Home
          </Link>
          <Link
            to="/products"
            className="nav-link"
            onClick={() => setShowNavDrawer(false)}
          >
            Shop Now
          </Link>
        </div>
        {navDrawerData.map((item, index) => (
          <Link
            key={index}
            to="/products"
            className={`nav-link ${
              item === categoryGroupName ? "active" : ""
            } `}
            onClick={() => {
              categoryGroupHandler(item);
            }}
          >
            {item}
          </Link>
        ))}
        <div className="drawer-footer border-top-1">
          <div className="navbar-icon p-1 pl-0p5">
            {token ? (
              <Link
                className="navbar-icon-link"
                to="/profile"
                onClick={() => setShowNavDrawer(false)}
              >
                <i className="fas fa-user-alt"></i>
                <span className="navbar-icon-text"> Profile</span>
              </Link>
            ) : (
              <Link
                className="navbar-icon-link"
                to="/login"
                onClick={() => setShowNavDrawer(false)}
              >
                <i className="fas fa-user-alt"></i>
                <span className="navbar-icon-text"> Login</span>
              </Link>
            )}
          </div>

          <div className="navbar-icon p-1 pl-0p5">
            <Link
              className="navbar-icon-link"
              to="/wishlist"
              onClick={() => setShowNavDrawer(false)}
            >
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
