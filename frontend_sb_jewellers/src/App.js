import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Checkout from "./pages/Checkout";
import OrderSummary from "./pages/OrderSummary";
import AdminProduct from "./pages/admin/AdminProduct";
import AdminCategory from "./pages/admin/AdminCategory";
import AddCategory from "./pages/admin/AddCategory";
import UpdateCategory from "./pages/admin/UpdateCategory";
import AddProducts from "./pages/admin/AddProducts";
import UpdateProducts from "./pages/admin/UpdateProducts";
import { CartProvider } from "../src/pages/CartContext"; // Import CartProvider

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/productList" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orderSummary" element={<OrderSummary />} />
          <Route path="/adminProduct" element={<AdminProduct />} />
          <Route path="/adminCategory" element={<AdminCategory />} />
          <Route path="/addCategory" element={<AddCategory />} />
          <Route path="/updateCategory/:id" element={<UpdateCategory />} />
          <Route path="/addProducts" element={<AddProducts />} />
          <Route path="/updateProducts/:id" element={<UpdateProducts />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
