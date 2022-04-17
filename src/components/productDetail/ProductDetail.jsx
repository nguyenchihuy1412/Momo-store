import React from "react";
import { useLocation } from "react-router-dom";
import "./productDetail.scss";
import Header from "../header/Header";
import { products } from "../../data";

const ProductDetail = () => {
  const { pathname } = useLocation();
  const id = pathname.split("-")[1];
  return (
    <div className="ProductDetail">
      <Header />
      {products.map((product) => {
        if (parseInt(id) === product.id) {
          return <img src={product.img} alt={product.title} />;
        }
        return false;
      })}
    </div>
  );
};

export default ProductDetail;
