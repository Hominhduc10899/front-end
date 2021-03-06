import React from "react";

import Menu from "./icons/menu.svg";
import Cart from "./icons/cart.svg";
import logo from "./icons/logo.png";
import Close from "./icons/close.svg";
import { Link } from "react-router-dom";

function Header() {
  const logout = (e) => {
    e.preventDefault();

    fetch("http://localhost:9000/logout/process")
      .then((res) => {
        console.log(res);
        return res;
      })
      .then((res) => {
        const val = res.status / 100;
        if (val < 4) {
          localStorage.removeItem("username");
          window.open("http://localhost:3000", "_self");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <header>
      <div className="menu">
        <img src={Menu} alt="Menu" width="30" />
      </div>

      <div className="logo">
        <h1 style={{ display: "flex", "flex-direction": "row" }}>
          <img src={logo} alt="Close" width="30" />{" "}
          <p style={{ "margin-left": "20px", "margin-top": "15px", "font-size": "20px" }}>Price Tracker Website</p>
        </h1>
      </div>

      <ul>
        <li>
          <Link to="/">Products</Link>
        </li>

        <li>
          {localStorage.getItem("username") ? (
            <span>
              Welcome, <b> {localStorage.getItem("username")} </b>
            </span>
          ) : (
            <Link to="/login">Sign in and register</Link>
          )}
        </li>

        <li>
          <img src={Close} alt="Close" width="30" className="menu" />
        </li>
      </ul>
      <div>
        {localStorage.getItem("username") ? (
          <span>
            <a href="" onClick={logout}>
              {" "}
                    Logout{" "}
            </a>
          </span>
        ) : (
            null
          )}
      </div>
    </header>
  );
}

export default Header;
