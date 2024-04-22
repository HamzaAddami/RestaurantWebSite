import React from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Button from '../layouts/Button'

export default function SignUp() {
    const navigateTo = useNavigate()
    const [formInput, setFormInput] = React.useState({
        userName: "",
        email: "",
        phoneNumber: "",
        password: ""
    })

    const handleForm = () => {
console.window(formInput)
        setFormInput({
        userName: "",
        email: "",
        phoneNumber: "",
        password: ""
    })

    }

    return (
        <>
        <Navbar />
        <div className="bg-[url('./Pictures/login1.png')] bg-cover bg-no-repeat  relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto   lg:max-w-xl bg-black rounded-md border rounded-3xl border-brightColor ">
                <h1 className="text-4xl font-semibold text-center text-white ">
                    Sign up
                </h1>
                <form>
                    <div className="mb-2">
                        <label
                            for="name"
                            className="block text-sm font-semibold text-brightColor"
                        >
                            User Name
                        </label>
                        <input
                            onChange={(e) => setFormInput({ ...formInput, userName: e.target.value })}
                            value={formInput.userName}
                            type="name"
                            placeholder='Full Name'
                            className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-yelllow-600 focus:ring-yellow-600 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="email"
                            className="block text-sm font-semibold text-brightColor"
                        >
                            Email
                        </label>
                        <input
                            onChange={(e) => setFormInput({ ...formInput, email: e.target.value })}
                            value={formInput.email}
                            type="email"
                            placeholder='Entrez vote email'
                            className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-yelllow-600 focus:ring-yellow-600 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="number"
                            className="block text-sm font-semibold text-brightColor"
                        >
                            Phone Number
                        </label>
                        <input
                            onChange={(e) => setFormInput({ ...formInput, phoneNumber: e.target.value })}
                            value={formInput.phoneNumber}
                            type="number"
                            placeholder='Entrez vote numero de telephone'
                            className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-yelllow-600 focus:ring-yellow-600 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="password"
                            className="block text-sm font-semibold text-brightColor"
                        >
                            Password
                        </label>
                        <input
                            onChange={(e) => setFormInput({ ...formInput, password: e.target.value })}
                            value={formInput.password}
                            type="password"
                            placeholder='Entrez votre mot de pass'
                            className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-yelllow-600 focus:ring-yellow-600 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mt-6 text-center">
                        <Button title='Registration'/>
                    </div>
                </form>
                <p className="mt-8 text-bold font-light text-center text-white">
                    {" "}
                    Already have an account?{" "}
                    <b
                        onClick={() => navigateTo("/login")}
                        className="font-medium text-brightColor hover:underline cursor-pointer"
                    >
                        Sign in
                    </b>
                </p>
            </div>
        </div>
        </>
    )
}