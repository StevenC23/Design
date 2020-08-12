import React from "react";
import "./Navbar.css";
import "../../source/interactions";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav-div">
        <a href="/" className="nav-logo">
          Design
        </a>
        <ol className="nav-list">
          <li>
            <a href="/">Usb</a>
          </li>
          <li>
            <a href="/">Diseñadoras</a>
          </li>
          <li>
            <a href="/">Historia</a>
          </li>
        </ol>
        <div className="nav-box-menu">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
