import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "boxicons";
import "./header.scss";

const Header = () => {
  const state = useSelector((state) => state.addItem);
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
        <div className="searchWrap">
          <input type="search" id="search" placeholder="Search..." />
        </div>
        <Link to="/cart">
          <button className="btn cart">
            <span>
              <box-icon
                style={{ marginRight: 5 }}
                type="solid"
                name="cart"
              ></box-icon>
            </span>
            Cart
            <span
              className="productsCount"
              style={{ marginTop: -1, marginLeft: 5 }}
            >
              {state.length}
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
