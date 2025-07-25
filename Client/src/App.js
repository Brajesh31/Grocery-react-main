
import React, { useState } from "react";
// CSS
import "./App.css";
// BrowserRouter
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Components
import Header from './Component/Header';
import Footer from "./Component/Footer";
import Cart from './Component/Cart';
import Checkout from './Component/Checkout';

// Pages
import Home from "./pages/Home";
// About pages
import AboutUs from "./pages/About/AboutUs";
import Blog from "./pages/About/Blog";
import BlogCategory from "./pages/About/BlogCategory";
import Contact from "./pages/About/Contact";
// Shop pages
import Shop from "./pages/Shop/Shop";
import ShopGridCol3 from "./pages/Shop/ShopGridCol3";
import ShopListCol from "./pages/Shop/ShopListCol";
import ShopCart from "./pages/Shop/ShopCart";

// import ShopCheckOut from "./pages/Shop/ShopCheckOut";
import ShopWishList from "./pages/Shop/ShopWishList";

import OrderSuccess from "./Component/OrderSuccess";
import OrderHistory from "./Component/OrderHistory";
import AdminOrderManagement from "./Component/AdminOrderManagement";

// Store pages
import StoreList from "./pages/store/StoreList";
import SingleShop from "./pages/store/SingleShop";
// Account pages
import MyAccountOrder from "./pages/Accounts/MyAccountOrder";
import MyAccountSetting from "./pages/Accounts/MyAcconutSetting";
import MyAcconutNotification from "./pages/Accounts/MyAcconutNotification";
import MyAcconutPaymentMethod from "./pages/Accounts/MyAcconutPaymentMethod";
import MyAccountAddress from "./pages/Accounts/MyAccountAddress";
import MyAccountForgetPassword from "./pages/Accounts/MyAccountForgetPassword";
import MyAccountSignIn from "./pages/Accounts/MyAccountSignIn";
import MyAccountSignUp from "./pages/Accounts/MyAccountSignUp";
// Admin pages
import AdminSidebar from "./pages/admin/AdminSidebar";
import AdminUsers from "./pages/admin/AdminUsers";
import Addproduct from "./pages/admin/Addproduct";
import AdminLogin from "./Component/AdminLogin";
import AdminAddCategory from "./pages/admin/AdminAddCategory";
// Product Detail Page
import ProductDetail from "./pages/Shop/ProductDetail"; // Ensure the correct import for ProductDetail

const App = () => {
  // ✅ Define cart state at the top level
  const [cartItems, setCartItems] = useState([]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/Grocery-react" element={<Home />} />
       
        
        {/* ✅ Pass cart state as props to Shop and Cart */}
        <Route path="/Shop" element={<Shop cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/Cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />

        {/* Shop pages */}
        <Route path="/ShopGridCol3" element={<ShopGridCol3 />} />
        <Route path="/ShopListCol" element={<ShopListCol />} />
        <Route path="/ShopWishList" element={<ShopWishList />} />
        {/* <Route path="/ShopCheckOut" element={<ShopCheckOut />} /> */}
        <Route path="/ShopCart" element={<ShopCart />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/OrderHistory" element={<OrderHistory />} />
        <Route path="/AdminOrderManagement" element={<AdminOrderManagement />} />
        <Route path="/AdminAddCategory" element={<AdminAddCategory />} />
       

        {/* Dynamic Route for Product Detail */}
        <Route path="/product/:id" element={<ProductDetail />} /> {/* Product Detail Route */}

        {/* Store pages */}
        <Route path="/StoreList" element={<StoreList />} />
        <Route path="/SingleShop" element={<SingleShop />} />

        {/* Accounts pages */}
        <Route path="/MyAccountOrder" element={<MyAccountOrder />} />
        <Route path="/MyAccountSetting" element={<MyAccountSetting />} />
        <Route path="/MyAcconutNotification" element={<MyAcconutNotification />} />
        <Route path="/MyAcconutPaymentMethod" element={<MyAcconutPaymentMethod />} />
        <Route path="/MyAccountAddress" element={<MyAccountAddress />} />
        <Route path="/MyAccountForgetPassword" element={<MyAccountForgetPassword />} />
        <Route path="/MyAccountSignIn" element={<MyAccountSignIn />} />
        <Route path="/MyAccountSignUp" element={<MyAccountSignUp />} />

        {/* About pages */}
        <Route path="/Blog" element={<Blog />} />
        <Route path="/BlogCategory" element={<BlogCategory />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/product/:id" element={<ProductDetail />} />

        {/* Admin pages */}
        <Route path="/admin" element={<AdminSidebar />} />
        <Route path="/users" element={<AdminUsers />} />
        <Route path="/product" element={<Addproduct />} />
        <Route path="/admin-login" element={<AdminLogin />} />

      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

