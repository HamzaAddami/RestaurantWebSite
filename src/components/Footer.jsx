import React from "react";
import { BsFacebook } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import {Link} from 'react-scroll';
import { SiCodechef } from "react-icons/si";

const Footer = () => {
  return (
    <div className=" bg-black text-white  mt-8 md:mt-0 ">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <SiCodechef size={180} color="white" className="m-auto px-5 lg:m-0" />
        <div className=" w-full md:w-1/4">
          <h1 className=" font-semibold text-xl pb-4">A&K Food</h1>
          <p className=" text-bold">
          Indulge in authentic Italian flavors at A&K . 
          From traditional pastas to wood-fired pizzas, our handcrafted dishes are a celebration of culinary artistry. 
          Join us for a taste of la dolce vita. Buon appetito!
          </p>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Links</h1>
          <nav className=" flex flex-col gap-2 text-bold">
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
            >
            <a className=" hover:text-brightColor transition-all cursor-pointer ">
              About
            </a>
            </Link>
            <Link
              to="dishes"
              spy={true}
              smooth={true}
              duration={500}>
            <a className=" hover:text-brightColor transition-all cursor-pointer ">
              Menu
            </a>
            </Link>
            <Link
            to="review"
            spy={true}
            smooth={true}
            duration={500}
            >
            <a className=" hover:text-brightColor transition-all cursor-pointer">
              Reviews
            </a>
            </Link>
          </nav>
        </div>
        
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              A&K@email.com
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              +212 5 00365-525
            </a>
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Social media
            </a>
            <div className="flex justify-between ">
            <a href="https://www.facebook.com/">
              <BsFacebook className="hover:text-brightColor transition-all cursor-pointer"  />
            </a>
            <a href="https://www.instagram.com/">
              <BsInstagram className="hover:text-brightColor transition-all cursor-pointer"  />
            </a>
            <a href="https://twitter.com/">
              <RiTwitterXFill className="hover:text-brightColor transition-all cursor-pointer"  />
            </a>
            </div>
          </nav>
        </div>
      </div>
      <div>
        <p>
          <p className=" text-center py-4">
            @copyright developed by
            <span className=" text-brightColor"> Hamza Karti <span className="text-white"> and </span>  Hamza Addami</span> |
            All rights reserved
          </p>
        </p>
      </div>
    </div>
  );
};

export default Footer;