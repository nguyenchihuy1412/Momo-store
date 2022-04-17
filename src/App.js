import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/home/Home";
import About from "./page/about/About";
import Contact from "./page/contact/Contact";
import Register from "./page/register/Register";
import Login from "./page/login/Login";
import Cart from "./page/cart/Cart";
import Products from "./components/products/Products";
import ProductDetail from "./components/productDetail/ProductDetail";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={
            <>
              <Header />
              <Products />
              <Footer />
            </>
          }
        />
        <Route path="/product-:id" element={<ProductDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
