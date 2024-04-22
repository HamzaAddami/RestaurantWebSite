import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from './Navbar';
import Button from "../layouts/Button";
import { IoMdClose } from "react-icons/io";


export default function Login() {
    const navigateTo = useNavigate()
    const [formInput, setFormInput] = useState({
        email: "",
        password: "",
    })
    const handleForm = () => {
        console.alert(jwt)
        setFormInput({
            email: "",
            password: "",
        })
    } 
    const [activeLogin, setActiveLogin] = useState(false);  

    return (
        <>
            <div id="child-container"  className={`justify-center items-center  lg:w-[50vw] p-5  mb-3 w-full m-auto bg-black   rounded-3xl border border-brightColor ${
          activeLogin ? "hidden" : ""
        } transition-all duration-500 z-50`} >
      
                <div className='flex  '>
                <h1 className="text-4xl font-semibold text-white grow h-15 text-center p-2 " id="beloved" >
                    Sign In
                </h1>
                
                    <IoMdClose
            onClick={() => setActiveLogin(!activeLogin)}
            className=" text-white font-bold  flex-none w-14 h-10 text-4xl   hover:text-brightColor  cursor-pointer"/>
            </div>
                <form>
                    <div className="mb-2">
                        <label
                            for="email"
                            className="block text-smbold font-semibold text-brightColor"
                        >
                            Email
                        </label>
                        <input
                            onChange={(e) => setFormInput({ ...formInput, email: e.target.value })}
                            value={formInput.email}
                            type="email"
                            placeholder='Etrez votre email'
                            className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-yelllow-600 focus:ring-brightColor focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="password"
                            className="block text-smbold font-semibold text-brightColor"
                        >
                            Password
                        </label>
                        <input
                            onChange={(e) => setFormInput({ ...formInput, password: e.target.value })}
                            value={formInput.password}
                            type="password"
                            placeholder='Entrez votre password'
                            className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-yelllow-600 focus:ring-brightColor focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <a
                        href="#"
                        className="text-center text-brightColor hover:underline "
                    >
                        Forget Password?
                    </a>
                    <div className="mt-6 text-center " onClick={handleForm}>
                    <Button title="login"  />
                    </div>
                </form>
                <p className="mt-8  font-light text-center text-white">
                    {" "}
                    Don't have an account?{" "}
                    <b
                        onClick={() => navigateTo("/signup")}
                        className="font-medium text-brightColor hover:underline cursor-pointer"
                    >
                        Sign up
                    </b>
                </p>
            </div>
       
       
        </>
    )
}