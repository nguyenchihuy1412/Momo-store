import React from "react";
import "./cart.scss";
import { useSelector } from "react-redux";
import Header from "../../components/header/Header";

const Cart = () => {
  const state = useSelector((state) => state.addItem);

  const cartItems = (item, index) => {
    return (
      <div key={index} className="cartItem">
        {console.log(item)}
        <div className="img">
          <img src={item.img} alt="" />
          {console.log(item)}
        </div>
        <div className="content"></div>
      </div>
    );
  };

  return (
    <>
      <Header />
      {state.length !== 0 && state.map(cartItems)}
    </>
  );
};

export default Cart;
