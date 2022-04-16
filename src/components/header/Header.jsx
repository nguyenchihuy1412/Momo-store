import React from "react";
import { Link } from "react-router-dom";
import "boxicons";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="left">
        <Link to="/">Home</Link>
        <Link to="/products">Product</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="center">
        <Link to="/">
          <h3>Momo Store</h3>
        </Link>
      </div>
      <div className="right">
        <Link to="/login">
          <button className="btn login">
            <span>
              <box-icon
                style={{ paddingTop: 1, marginRight: 5 }}
                type="solid"
                name="arrow-to-right"
              ></box-icon>
            </span>
            Login
          </button>
        </Link>
        <Link to="/register">
          <button className="btn register">
            <span>
              <box-icon
                style={{ paddingTop: 1, marginRight: 5 }}
                type="solid"
                name="user-plus"
              ></box-icon>
            </span>
            Register
          </button>
        </Link>
        <Link to="/cart">
          <button className="btn cart">
            <span>
              <box-icon
                style={{ paddingTop: 1, marginRight: 5 }}
                type="solid"
                name="cart"
              ></box-icon>
            </span>
            Cart
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
