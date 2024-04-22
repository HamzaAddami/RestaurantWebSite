import React, { useState } from "react";
import { Link } from "react-scroll";
import Button from "../layouts/Button";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { SiCodechef } from "react-icons/si";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [activeLogin, setActiveLogin] = useState(false);  
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  

  
  };

  return (
    <div className=" fixed w-full z-30">
      <div>
        <div className=" flex flex-row justify-between p-5 px-5 bg-transparent bg-gradient-to-b from-black to-transparent ">
          
          <Link
              to="hero"
              spy={true}
              smooth={true}
              duration={500}>
            <div 
            className=" flex flex-row items-center cursor-pointer" 
            onClick={() => navigate("/home")}
            
            >
              <span>
                <SiCodechef size={32} color="white" />
              </span>
              <h1 className=" relative ml-2 top-1.5 text-2xl text-brightColor font-bold " id="beloved" >A&K FooD</h1>
            </div>
          </Link>
          <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
            <Link
              to="hero"
              onClick={() => navigate("/home")}
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor text-gray-200 transition-all cursor-pointer "
              id="Nav"
              
            >
              
              
            </Link>
           

            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor text-white transition-all cursor-pointer"
              id="Nav"
            >
              About
            </Link>

            <Link
              to="dishes"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor text-white transition-all cursor-pointer"
              id="Nav"
            >
              Menu
            </Link>

            <Link
              to="review"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor text-white transition-all cursor-pointer"
              id="Nav"
            >
              Reviews
            </Link>
            <div onClick={()=> setActiveLogin(!activeLogin)}>
            <Button title="Login"   /></div>
          </nav>

          <div className="md:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={25} onClick={handleChange} color="white" />
            ) : (
              <AiOutlineMenuUnfold size={25} onClick={handleChange} color="white"/>
            )}
          </div>
        </div>
        <div
          className={` ${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-black text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-6 w-full h-fit transition-transform duration-300`}
        >
          <Link
            to="hero"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={() => navigate('/home')}
            
            
          >
            Home
          </Link>
          <Link
            to="dishes"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Dishes
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            to="dishes"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Menu
          </Link>
          <Link
            to="review"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Reviews
          </Link>
          <Button title="login" navigate="/login" />
        </div>
      </div>
    </div>
  );
};

export default Navbar ;