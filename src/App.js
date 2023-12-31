import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Footer from "./components/Footer";
import Shop from "./pages/Shop";
import BlogGrid from "./pages/BlogGrid";
import CheckOut from "./pages/CheckOut";
import LoginRegister from "./pages/LoginRegister";
import Card from "./pages/Card";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Shop" element={<Shop addToCart={addToCart} />} />
          <Route path="/BlogGrid" element={<BlogGrid />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/CheckOut" element={<CheckOut />} />
          <Route path="/LoginRegister" element={<LoginRegister />} />
          <Route path="/Card" element={<Card cart={cart} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
