import React from "react";
import "./footer.css";
import { Link, useNavigate } from "react-router-dom";
import { useData } from "../../context";
import { FooterLinks } from "../../data/footer.data";

import { logo } from "../../assets";

const Footer = () => {
  const { categoryLinks, accountLinks, helpLinks, socialLinks } = FooterLinks;

  const { categoriesList, dispatch } = useData();
  const navigate = useNavigate();

  const clickHandler = (linkName) => {
    // reseting categoriesList to false
    for (let prop of Object.keys(categoriesList)) {
      categoriesList[prop] = false;
    }

    dispatch({
      type: "CATEGORY",
      payload: { [linkName]: true },
    });
    navigate("/products");
  };

  return (
    <footer className="basic-bg flex-row wrap items-start">
      <div className="footer-item footer-links">
        <h6 className="text-uppercase underline">Categories</h6>
        <ul className="links">
          {categoryLinks.map(({ id, linkName, url }) => (
            <li key={id}>
              <div className="link" onClick={() => clickHandler(linkName)}>
                {linkName}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="footer-item footer-links">
        <h6 className="text-uppercase underline">Account</h6>
        <ul className="links">
          {accountLinks.map(({ id, linkName, url }) => (
            <li key={id}>
              <Link className="link" to={url}>
                {linkName}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="footer-item footer-links">
        <h6 className="text-uppercase underline">Help</h6>
        <ul className="links">
          {helpLinks.map(({ id, linkName, url }) => (
            <li key={id}>
              <Link className="link" to={url}>
                {linkName}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex-column items-center footer-logo">
        <Link to="/" className="navbar-logo no-underline">
          <img className="logo-img" src={logo} alt="dazzle" />
          <span className="primary-text">Cera</span>
          <span className="secondary-text">Shop</span>
        </Link>
        <small className="m-0 mt-1">© 2022, All rights reserved</small>
        <small>
          Made with <i className="fas fa-heart"></i> by Apurva Sawant
        </small>
        <div className="mt-1">
          {socialLinks.map(({ id, linkName, url }) => (
            <a
              key={id}
              href={url}
              className="link m-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              {linkName}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export { Footer };
