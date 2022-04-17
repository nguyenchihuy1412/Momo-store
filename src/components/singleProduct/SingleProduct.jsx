import React from "react";
import { Link } from "react-router-dom";
import "./singleProduct.scss";

const SingleProduct = ({ products }) => {
  return products.map((product, index) => (
    <div className="product" key={index}>
      <Link to={`/product-${index}`}>
        <img src={product.img} alt="" />
      </Link>
      <Link to={`/product-${index}`}>
        <h3>{product.title}</h3>
      </Link>
      <p>{product.priceText}</p>
      <Link to={`/product-${index}`}>
        <button
          style={{ borderRadius: "3px", backgroundColor: "red", color: "#fff" }}
          className="btn"
        >
          Add to cart
        </button>
      </Link>
    </div>
  ));
};

export default SingleProduct;
