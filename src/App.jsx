import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Success from "./pages/Success";
import Error from "./pages/Error";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import FoodItems from "./components/FoodItems";
import Checkout from "./components/Checkout";
import Cart from "./components/Cart";


const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/RestaurantWebSite/" element={<Home />} />
        <Route path="/RestaurantWebSite/success" element={<ProtectedRoute element={<Success />} />} />
        <Route path="/*" element={<Error />} />
        <Route path='/RestaurantWebSite/login' element={<Login/>}/>
        <Route path='/RestaurantWebSite/signup' element={<SignUp/>}/>
        <Route path="/RestaurantWebSite/home" element={<Home />} /> 
        <Route path="/RestaurantWebSite/dishes" element={<FoodItems/>}/>
        <Route path="/RestaurantWebSite/checkout" element={<Checkout />}/>
        <Route path="/RestaurantWebSite/cart" element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;