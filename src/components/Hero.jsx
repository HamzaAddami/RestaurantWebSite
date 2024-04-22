import React from "react";
import Button from "../layouts/Button";
import {Link} from "react-scroll"


const Hero = () => {


  return (
    <div className="min-h-screen flex flex-row justify-between items-center lg:px-32 px-5   bg-[url('./Pictures/Hero.jpg')] bg-cover bg-no-repeat ">
      <div className=" w-full lg:w-2/3 space-y-5">
        <h1 className=" text-lightText font-semibold text-6xl lg:pt-24 lg:relative lg:right-10" id="beloved">
          When Tradition Meets Innovation 
        </h1>
        <p className=" text-lightText   ">
        Indulge in authentic <span className="text-brightColor" >Italian</span>  flavors at A&K . From traditional pastas to wood-fired pizzas, our handcrafted dishes are a celebration of culinary artistry. Join us for a taste of la dolce vita. Buon appetito!
        </p>
        <Link 
          to="dishes"
          spy={true}
          smooth={true}
          duration={500}
          className=" lg:pl-40"
        >
            <Button title="Order Now" />
        </Link>
      </div>
    </div>
  );
};

export default Hero;