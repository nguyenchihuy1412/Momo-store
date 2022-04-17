import React from "react";
import "./home.scss";
import { slides } from "../../data";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Slide from "../../components/slide/Slide";
import Products from "../../components/products/Products";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Slide slides={slides} />
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
