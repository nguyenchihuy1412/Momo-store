import React, { useState } from "react";
import Header from "../header/Header";
import { useLocation } from "react-router-dom";
import { products } from "../../data";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../../redux/actions/index";
import "./productDetail.scss";

const ProductDetail = () => {
  const [buttonAddText, setButtonAddText] = useState("Add To Cart");
  const { pathname } = useLocation();
  const id = pathname.split("-")[1];
  const productDetail = products.filter((item) => item.id === parseInt(id));
  const product = productDetail[0];
  console.log(products);
  console.log(product);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    if (buttonAddText === "Add To Cart") {
      dispatch(addItem(product));
      setButtonAddText("Remove From Cart");
    } else {
      dispatch(removeItem(product));
      setButtonAddText("Add To Cart");
    }
  };
  return (
    <>
      <Header />
      {products.map((product) => {
        if (parseInt(id) === product.id) {
          return (
            <div key={product.id} className="ProductDetail">
              <div className="left">
                <img src={product.img} alt={product.title} />
              </div>
              <div className="right">
                <h3>{product.title}</h3>
                <hr />
                <h5>{product.priceText}</h5>
                <p>{product.desc}</p>
                <button onClick={handleAddToCart} className="btn addToCart">
                  {buttonAddText}
                </button>
              </div>
            </div>
          );
        }
        return false;
      })}
    </>
  );
};

export default ProductDetail;
