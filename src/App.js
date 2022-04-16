import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./page/home/Home";
import About from "./page/about/About";
import Contact from "./page/contact/Contact";
import Products from "./page/products/Products";
import Register from "./page/register/Register";
import Login from "./page/login/Login";
import Cart from "./page/cart/Cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
