import React from "react";
import { loader } from "../../assets";
import "./loader.css";
const Loader = () => {
  return (
    <div className="loader-container">
      <img
        src={loader}
        className="loader-img"
        alt="animated block loader"
      ></img>
    </div>
  );
};

export { Loader };
