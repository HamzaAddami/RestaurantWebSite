import React, { useState } from "react";
import Navbar from "../components/Navbar";
import CategoryMenu from "../components/CategoryMenu";
import FoodItems from "../components/FoodItems";
import Cart from "../components/Cart";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import About from "../components/About";
import Reviews from "../components/Reviews";
import Login from "../components/Login";



const Home = () => {
  const [showModal, setshowModal] = useState(false);

  return (<>
      
    <>
      <Navbar />
      <main className="bg-[url('./Pictures/bg1.jpg')]">
        <div id="hero">
          <Hero />
        </div>
        <div id="dishes">
        <CategoryMenu />
        </div>
        
          <FoodItems />
        
        <div id="about">
          <About />
        </div>
        <div id="review"> 
          <Reviews />
        </div>
      </main>
      <Cart />  
      
      
      <Footer />
    </>
    
    </>
  );
};

export default Home;