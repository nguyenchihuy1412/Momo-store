import React from "react";
import SingleProduct from "../singleProduct/SingleProduct";
import { products } from "../../data";
import "./products.scss";

const Products = () => {
  return (
    <>
      <div className="products">
        <SingleProduct products={products} />
      </div>
    </>
  );
};

export default Products;
