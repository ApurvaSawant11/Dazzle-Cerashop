import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

import { FooterLinks } from "./footer.data";

import { logo } from "../../assets";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  const { categoryLinks, accountLinks, helpLinks, socialLinks } = FooterLinks;

  return (
    <footer class="basic-bg flex-row wrap items-start">
      <div class="footer-item footer-links">
        <h6 class="text-uppercase underline">Categories</h6>
        <ul class="links">
          {categoryLinks.map(({ id, linkName, url }, index) => (
            <li key={id}>
              <Link className="link" to={url}>
                {linkName}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div class="footer-item footer-links">
        <h6 class="text-uppercase underline">Account</h6>
        <ul class="links">
          {accountLinks.map(({ id, linkName, url }, index) => (
            <li key={id}>
              <Link className="link" to={url}>
                {linkName}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div class="footer-item footer-links">
        <h6 class="text-uppercase underline">Help</h6>
        <ul class="links">
          {helpLinks.map(({ id, linkName, url }, index) => (
            <li key={id}>
              <Link className="link" to={url}>
                {linkName}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div class="flex-column items-center footer-logo">
        <Link to="/" class="navbar-logo no-underline">
          <img class="logo-img" src={logo} alt="dazzle" />
          <span class="primary-text">Cera</span>
          <span class="secondary-text">Shop</span>
        </Link>
        <small class="m-0 mt-1">© 2022, All rights reserved</small>
        <small>
          Made with <FaHeart /> by Apurva Sawant
        </small>
        <div class="mt-1">
          {socialLinks.map(({ id, linkName, url }, index) => (
            <a href={url} className="link m-1" target="_blank">
              {linkName}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export { Footer };
