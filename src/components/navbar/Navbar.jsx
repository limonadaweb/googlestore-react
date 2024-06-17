import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav id="navbar">
      <div id="nav-left">
        <Link to="/">
          <img id="logo" src="src\assets\images\google-logo.png" alt="Google" />
        </Link>
        <ul id="nav-list">
          <li>Phones</li>
          <li id="active-item">
            <Link to="/earbudsView">Earbuds</Link>
          </li>
          <li>
            <Link to="/smarthwatchView" id="smartwatch">
              Watches
            </Link>
          </li>
          <li>Smart Home</li>
          <li>Accesories</li>
          <li>Subscriptions</li>
        </ul>
      </div>
      <div className="burguerMenu">☰</div>
      <div id="nav-icons">
        <img src="src\assets\images\icons\Search.svg" alt="Search" />
        <img src="src\assets\images\icons\Help.svg" alt="Help" />
        <Link to="/cartView">
          <img src="src\assets\images\icons\Cart.svg" alt="Cart" />
        </Link>
        <img src="src\assets\images\icons\Avatar.svg" alt="Avatar" />
      </div>
    </nav>
  );
};

export default Navbar;
