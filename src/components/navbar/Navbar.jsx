import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <navbar>
      <div id="head">
        <div><img src ="src\assets\images\google-logo.png" className="logoGoogle" id="logoGoogle"/></div>
          <p id="phones" className="phones">Phones</p>
          <p id="earbuds" className="earbuds"><Link to="/">Earbuds</Link></p>
          <p id="watches" className="watches"><Link to="/smarthwatchView">Watches</Link></p>
          <p id="smartHome" className="smartHome">Smart Home</p>
          <p id="accessories" className="accessories"> Accessories</p>
          <p id= "subscriptions" className="subscriptions"> Subscriptions</p>
              
        </div>
        <div class="icons">
              
          <img src="src\assets\images\icons\Search.svg" alt="logoSearch" id="logoSearch"/>
          <img src="src\assets\images\icons\Help.svg" alt="logoHelp" id="logoHelp"/>
          <img src="src\assets\images\icons\Cart.svg" alt="logoCart" id="logoCart"/><Link to="/cart"></Link>
          <img src="src\assets\images\icons\Avatar.svg" alt="logoAvatar" id="logoAvatar"/>
          <img src="src\assets\images\icons\Menu.svg" alt="menu" id="menu"/>
        </div>
    </navbar>
    </>
  );
};

export default Navbar;
