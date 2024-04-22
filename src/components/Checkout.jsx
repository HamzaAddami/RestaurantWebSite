import React, { useState } from "react";
import ItemCard from "./ItemCard";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Toast from "react-hot-toast";
import { LocalToastTarget, useLocalToast } from 'react-local-toast';
export default function index() {
    const {showToast, removeToast} = useLocalToast();
  const cartItems = useSelector((state) => state.cart.cart);
  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
  const shipping = (totalQty * 5);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.qty * item.price ,
    0
  );
  const total = cartItems.reduce((total, item) => total + item.qty * item.price ,0) + (totalQty * 5) ;
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    addressLine2: "",
    phoneNumber: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckout = () => {
    const isEmpty = Object.values(formData).some((value) => value.trim() === "");

    isEmpty ? showToast('btn', 'Hello my first toast!') : navigate("/success") ;

  };
  

    const navigate = useNavigate();
    const [dropdown1, setDropdown1] = useState(false);
    const [changeText1, setChangeText1] = useState("City");

    const HandleText1 = (e) => {
        setChangeText1(e);
        setDropdown1(false);
    };
    
    return (
        <div className="overflow-y-hidden bg-[url('./Pictures/bg1.jpg')] bg-cover">
            <div className="flex justify-center items-center 2xl:container 2xl:mx-auto lg:py-16 md:py-12 py-9 px-4 md:px-6 lg:px-20 xl:px-44 ">
                <div className="flex w-full sm:w-9/12 lg:w-full flex-col lg:flex-row justify-center items-center lg:space-x-10 2xl:space-x-36 space-y-12 lg:space-y-0">
                    <div className="flex w-full  flex-col justify-start items-start">
                        <div className>
                            <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Check out</p>
                        </div>
                        <div className="mt-2" onClick={()=> navigate("/home")}>
                            <a href="javascript:void(0)" className="text-base leading-4 underline  hover:text-brightColor text-gray-600">
                                Back to Home
                            </a>
                        </div>
                        <div className="mt-12">
                            <p className="text-xl font-semibold leading-5 text-gray-800">Shipping Details</p>
                        </div>
                        <div className="mt-8 flex flex-col justify-start items-start w-full space-y-8 ">
                            <input className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full" type="text" placeholder="First Name" name="firstName" value={formData.firstName} onChange={handleInputChange}/>
                            <input className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full" type="text" placeholder="Last Name" name="lastName" value={formData.lastName} onChange={handleInputChange}/>
                            <input className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full" type="text" placeholder="Address" name="address" value={formData.address} onChange={handleInputChange}/>
                            <input className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full" type="text" placeholder="Address (line 02)" name="addressLine2" value={formData.addressLine2} onChange={handleInputChange}/>
                            <div className="flex justify-between flex-col sm:flex-row w-full items-start space-y-8 sm:space-y-0 sm:space-x-8">
                                <div className="relative w-full">
                                    <p id="button1" className=" px-2 border-b border-gray-200 text-left leading-4 text-base text-gray-600 py-4 w-full">
                                        {changeText1}
                                    </p>
                                    <button onClick={() => setDropdown1(!dropdown1)} className="focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-full cursor-pointer absolute bottom-4 right-0">
                                        <svg id="close" className={` transform ${dropdown1 ? "rotate-180" : ""}  `} width={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 6L8 10L4 6" stroke="#4B5563" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                    <div className={`shadow absolute z-10 bg-white top-10  w-full mt-3 ${dropdown1 ? "" : "hidden"}`} >
                                        <div className="flex flex-col  w-full">
                                            <p tabIndex={0} onClick={() => HandleText1("Casablanca")} className="focus:outline-none cursor-pointer px-3 hover:text-white hover:bg-gray-800 focus:bg-gray-800 focus:text-white text-left  text-base text-gray-600 py-2 w-full">
                                                Casablanca
                                            </p>
                                            <p tabIndex={0} onClick={() => HandleText1("Marrakech")} className="focus:outline-none cursor-pointer px-3 hover:text-white hover:bg-gray-800 focus:bg-gray-800 focus:text-white text-left  text-base text-gray-600 py-2 w-full">
                                                Marrakech
                                            </p>
                                            <p tabIndex={0} onClick={() => HandleText1("Tanger")} className="focus:outline-none cursor-pointer px-3 hover:text-white hover:bg-gray-800 focus:bg-gray-800 focus:text-white text-left  text-base text-gray-600 py-2 w-full">
                                                Tanger
                                            </p>
                                        </div>
                                    </div>
                                </div>
                          
                            </div>
                      
                            <input className="focus:outline-none focus:ring-2 focus:ring-gray-500 px-2 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4   w-full" type="text" placeholder="Phone Number" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange}/>
                        </div>
                        <button className="focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 mt-8 text-base font-medium focus:ring-2 focus:ring-ocus:ring-gray-800 leading-4 hover:bg-brightColor py-4 w-full md:w-4/12 lg:w-full text-white bg-gray-800" onClick={handleCheckout}>Proceed to payment</button>
                        <div className="mt-4 flex justify-start items-center w-full" onClick={()=>navigate("/")}>
                            <a href="" className="text-base leading-4 underline focus:outline-none focus:text-gray-500  hover:text-brightColor text-gray-600">
                                Annuler la commande
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start items-start bg-gray-50 w-full p-6 md:p-14">
                        <div>
                            <h1 className="text-2xl font-semibold leading-6 text-gray-800">Order Summary</h1>
                        </div>
                        <div className="flex mt-7 flex-col items-end w-full space-y-6">
                            <div className="flex justify-between w-full items-center">
                                <p className="text-lg leading-4 text-gray-600">Total items</p>
                                <p className="text-lg font-semibold leading-4 text-gray-600">{totalQty}</p>
                            </div>
                            <div className="flex justify-between w-full items-center">
                                <p className="text-lg leading-4 text-gray-600">Shipping charges {"(5DH * item)"}</p>
                                <p className="text-lg font-semibold leading-4 text-gray-600">{shipping} DH</p>
                            </div>
                            <div className="flex justify-between w-full items-center">
                                <p className="text-lg leading-4 text-gray-600">Total Charges</p>
                                <p className="text-lg font-semibold leading-4 text-gray-600">{totalPrice} DH</p>
                            </div>
                            <div className="flex justify-between w-full items-center">
                                <p className="text-lg leading-4 text-gray-600">Sub total </p>
                                <p className="text-lg font-semibold leading-4 text-gray-600">{totalPrice} DH</p>
                            </div>
                        </div>
                        <div className="flex justify-between w-full items-center mt-32">
                            <p className="text-xl font-semibold leading-4 text-gray-800">Estimated Total </p>
                            <p className="text-lg font-semibold leading-4 text-gray-800">{total} DH</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
